(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else { root.TourLogic = factory(); root.TourKit = root.TourLogic.kit; }
})(typeof self !== 'undefined' ? self : this, function () {
  const KINDS = ['direct', 'alliance', 'tributary', 'occupation', 'influence', 'diffusion', 'conflict', 'site', 'myth'];
  const PRECISIONS = ['exact', 'approximate', 'regional', 'illustrative', 'unmapped'];
  const EVIDENCE = ['attested', 'reconstructed', 'traditional', 'disputed', 'mythological', 'speculative'];
  const STATUSES = ['historical', 'disputed', 'hypothetical', 'symbolic', 'mythological'];
  const CATEGORIES = ['political', 'religion', 'myth', 'overview'];

  // Authoring helpers (astronomical years: B(509) = 509 BCE = -508).
  const kit = {
    B: n => 1 - n,
    pt: (name, lon, lat, kind, precision, evidence, note) => ({ name, kind, precision, evidence, note: note || '', geometry: { type: 'Point', coordinates: [lon, lat] } }),
    circ: (name, lon, lat, radiusKm, kind, precision, evidence, note) => ({ name, kind, precision, evidence, note: note || '', geometry: { type: 'Circle', center: [lon, lat], radiusKm } }),
    line: (name, coords, kind, precision, evidence, note) => ({ name, kind, precision, evidence, note: note || '', geometry: { type: 'LineString', coordinates: coords } })
  };

  function circlePolygon(lon, lat, rKm, n) {
    n = n || 48; const ring = [];
    const dLat = rKm / 111.32, dLon = rKm / (111.32 * Math.max(0.05, Math.cos(lat * Math.PI / 180)));
    for (let i = 0; i < n; i++) { const a = 2 * Math.PI * i / n; ring.push([lon + dLon * Math.cos(a), lat + dLat * Math.sin(a)]); }
    ring.push(ring[0]); return [ring];
  }
  function toGeoJSON(features) {
    const out = [];
    (features || []).forEach((f, i) => {
      const g = f.geometry; if (!g || f.precision === 'unmapped') return;
      const props = { idx: i, name: f.name, kind: f.kind, precision: f.precision, evidence: f.evidence, note: f.note || '' };
      let geometry = g;
      if (g.type === 'Circle') geometry = { type: 'Polygon', coordinates: circlePolygon(g.center[0], g.center[1], g.radiusKm) };
      out.push({ type: 'Feature', properties: props, geometry });
    });
    return { type: 'FeatureCollection', features: out };
  }
  function chapterYear(ch) {
    if (!ch) return null;
    if (typeof ch.year === 'number') return ch.year;
    if (ch.date && typeof ch.date.start === 'number') return Math.round((ch.date.start + (typeof ch.date.end === 'number' ? ch.date.end : ch.date.start)) / 2);
    return null;
  }
  function chapterWords(ch) {
    const parts = [ch.text, ch.what, ch.where, ch.why, ch.uncertain];
    return parts.filter(Boolean).join(' ').split(/\s+/).filter(Boolean).length;
  }
  function autoplayMs(ch) { return Math.max(10000, Math.min(45000, chapterWords(ch) * 330)); }
  function tourMinutes(tour) { return Math.max(1, Math.ceil(tour.chapters.reduce((a, c) => a + chapterWords(c), 0) / 170)); }
  function formatDate(T, d) {
    if (!d) return 'No defensible historical date';
    const a = T.formatYear(d.start), b = T.formatYear(typeof d.end === 'number' ? d.end : d.start);
    const rng = a === b ? a : a + ' – ' + b;
    return rng + (d.kind ? ' (' + d.kind + ')' : '');
  }
  function validate(tour, sources) {
    const errs = [], e = m => errs.push(tour.id + ': ' + m);
    ['id', 'title', 'category', 'description', 'scope', 'span'].forEach(k => { if (!tour[k]) e('missing ' + k); });
    if (!CATEGORIES.includes(tour.category)) e('bad category');
    if (!Array.isArray(tour.chapters) || !tour.chapters.length) { e('no chapters'); return errs; }
    const seen = new Set();
    tour.chapters.forEach((c, i) => {
      const p = 'chapter ' + (i + 1) + ' (' + c.id + ')';
      if (!c.id || seen.has(c.id)) e(p + ': missing/duplicate id'); seen.add(c.id);
      if (!c.title || !c.text) e(p + ': missing title/text');
      if (c.date) {
        if (!Number.isInteger(c.date.start) || (c.date.end !== undefined && !Number.isInteger(c.date.end))) e(p + ': non-integer date');
        else if (c.date.end !== undefined && c.date.start > c.date.end) e(p + ': date start after end');
        if (c.date.start === 0 && c.date.kind === 'ce-check') e(p + ': suspicious year 0');
      }
      if (c.camera) {
        const k = c.camera;
        if (!Array.isArray(k.center) || k.center.length !== 2 || Math.abs(k.center[0]) > 180 || Math.abs(k.center[1]) > 90 || !(k.zoom > 0)) e(p + ': bad camera');
      }
      (c.features || []).forEach((f, j) => {
        const q = p + ' feature ' + (j + 1);
        if (!KINDS.includes(f.kind)) e(q + ': bad kind');
        if (!PRECISIONS.includes(f.precision)) e(q + ': bad precision');
        if (!EVIDENCE.includes(f.evidence)) e(q + ': bad evidence');
        if (f.precision === 'unmapped' && f.geometry) e(q + ': unmapped but has geometry');
        if (f.precision !== 'unmapped' && !f.geometry) e(q + ': mapped but no geometry');
        if (f.kind === 'myth' && f.precision === 'exact') e(q + ': myth features may not claim exact placement');
        if (f.kind === 'myth' && !f.note) e(q + ': myth feature needs a note explaining attribution');
        const g = f.geometry;
        if (g) {
          const okLL = ll => Array.isArray(ll) && Math.abs(ll[0]) <= 180 && Math.abs(ll[1]) <= 90;
          if (g.type === 'Point' && !okLL(g.coordinates)) e(q + ': bad point');
          else if (g.type === 'Circle' && !(okLL(g.center) && g.radiusKm > 0)) e(q + ': bad circle');
          else if (g.type === 'LineString' && !(Array.isArray(g.coordinates) && g.coordinates.length >= 2 && g.coordinates.every(okLL))) e(q + ': bad line');
          else if (!['Point', 'Circle', 'LineString'].includes(g.type)) e(q + ': unknown geometry');
        }
      });
      if (tour.category === 'myth') {
        if (!STATUSES.includes(c.status)) e(p + ': myth chapter needs status ' + STATUSES.join('/'));
        (c.features || []).forEach(f => { if (f.kind !== 'myth' && f.kind !== 'site') e(p + ': myth tours may only use myth/site features'); });
      }
      const ids = c.sources || [];
      ids.forEach(s => { if (!sources[s]) e(p + ': unknown source ' + s); });
      if (!tour.legacy && ids.length === 0 && !c.noSourcesReason) e(p + ': no sources and no noSourcesReason');
      if (!tour.legacy && c.date === undefined) e(p + ': date must be an object or null');
      if (!tour.legacy && c.camera === undefined) e(p + ': camera must be an object or null');
      if (!tour.legacy && !c.what && !c.noSourcesReason) e(p + ': missing what/where/why/uncertain fields');
    });
    return errs;
  }
  return { KINDS, PRECISIONS, EVIDENCE, STATUSES, CATEGORIES, kit, circlePolygon, toGeoJSON, chapterYear, chapterWords, autoplayMs, tourMinutes, formatDate, validate };
});
