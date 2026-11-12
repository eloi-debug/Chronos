(function () {
  'use strict';
  const W = window;
  const T = W.Timeline, L = W.TourLogic, SITES = W.SITES || [], SOURCES = W.SOURCES || {};
  const RAW = 'https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/';
  const STYLE_URL = 'https://tiles.openfreemap.org/styles/positron';
  const reduceMotion = !!(W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const speed = W.TOUR_SPEED || 1;
  const $ = id => document.getElementById(id);
  const EMPTY = { type: 'FeatureCollection', features: [] };
  const CATS = [
    { id: 'political', label: 'Political Powers' },
    { id: 'religion', label: 'Religions & Beliefs' },
    { id: 'myth', label: 'Myths & Mysteries' },
    { id: 'overview', label: 'Overview tours (original, lightly sourced)' }
  ];
  const SRC_LABEL = { encyclopedia: 'encyclopedia', textbook: 'textbook', wikipedia: 'Wikipedia (tertiary)', 'primary-translation': 'primary text, translation', 'university-handout': 'university handout', 'secondary-unrated': 'secondary, unrated', 'science-news': 'science news summary' };

  const state = { year: T.posToYear(0), snapshot: null, token: 0, bordersOn: true, timer: null, playTimer: null,
    tour: null, idx: 0, mode: 'free', myth: false, detail: null, popup: null };
  const cache = new Map();
  let map = null, ready = false;

  // ---------- tours ----------
  const TOURS = [], REJECTED = [];
  (W.TOUR_REGISTRY || []).forEach(t => {
    const errs = L.validate(t, SOURCES);
    if (errs.length) { REJECTED.push(...errs); } else TOURS.push(t);
  });
  if (REJECTED.length && W.console) console.warn('Tours rejected by validation:', REJECTED);

  // ---------- tiny DOM helper ----------
  function h(tag, props, ...kids) {
    const e = document.createElement(tag);
    Object.keys(props || {}).forEach(k => {
      const v = props[k];
      if (v === false || v == null) return;
      if (k === 'class') e.className = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    });
    kids.flat().forEach(c => { if (c == null || c === false) return; e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  function setStatus(msg) { $('status').textContent = msg; }

  // ---------- basemap ----------
  function blankStyle() { return { version: 8, sources: {}, layers: [{ id: 'bg', type: 'background', paint: { 'background-color': '#16242c' } }] }; }
  async function loadStyle() {
    try {
      const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 8000);
      const res = await fetch(STYLE_URL, { signal: ctl.signal }); clearTimeout(t);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const st = await res.json();
      const hide = /road|bridge|tunnel|building|boundary|aeroway|transit|rail|ferry|path|pier|housenumber|poi|label|place/i;
      st.layers = st.layers.filter(l => l.type !== 'symbol' && !hide.test(l.id));
      for (const l of st.layers) {
        if (l.type === 'background') l.paint = { 'background-color': '#3b3a2c' };
        else if (l.type === 'fill') l.paint = { 'fill-color': /water/i.test(l.id) ? '#16242c' : '#3b3a2c', 'fill-opacity': 1 };
        else if (l.type === 'line') l.paint = { 'line-color': '#2a5a70', 'line-opacity': 0.8 };
      }
      return st;
    } catch (e) {
      setStatus('Basemap unavailable (' + e.message + '); using a plain background.');
      return blankStyle();
    }
  }

  // ---------- borders ----------
  function hashColor(str) { let x = 0; for (let i = 0; i < str.length; i++) x = (x * 31 + str.charCodeAt(i)) >>> 0; return 'hsl(' + (x % 360) + ',55%,55%)'; }
  function clearBorders() { state.token++; state.snapshot = null; if (ready) map.getSource('borders').setData(EMPTY); }
  async function loadSnapshot(y) {
    const snap = T.snapshotFor(y);
    if (snap === state.snapshot) { snapshotStatus(y, snap); return; }
    state.snapshot = snap;
    const tok = ++state.token, file = T.snapshotFile(snap);
    try {
      let data = cache.get(file);
      if (!data) {
        setStatus('Loading borders for ' + T.formatYear(snap) + '…');
        const res = await fetch(RAW + file);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        data = await res.json();
        for (const f of data.features) {
          const p = f.properties || (f.properties = {});
          p._c = hashColor(String(p.SUBJECTO || p.NAME || 'x')); p._bp = Number(p.BORDERPRECISION) || 0;
        }
        cache.set(file, data);
      }
      if (tok !== state.token) return;
      map.getSource('borders').setData(data);
      snapshotStatus(y, snap);
    } catch (e) {
      if (tok === state.token) { state.snapshot = null; setStatus('Could not load borders (' + e.message + '). Territory overlay unavailable; the rest of the app still works.'); }
    }
  }
  function snapshotStatus(y, snap) {
    const d = y - snap;
    setStatus('Border snapshot: ' + T.formatYear(snap) + (d === 0 ? ' (exact match)' : ' (nearest earlier map; ' + d + ' years before the selected year, no intermediate borders are known)') + '. Borders are approximate.');
  }

  // ---------- current chapter helpers ----------
  const chapter = () => (state.tour ? state.tour.chapters[state.idx] : null);

  function setYear(y, fromSlider) {
    state.year = y;
    $('yearLabel').textContent = T.formatYear(y);
    if (!fromSlider) $('slider').value = T.yearToPos(y);
    if (document.activeElement !== $('yearInput')) $('yearInput').value = T.formatYear(y);
    if (ready) { applySiteFilter(); if (state.bordersOn) loadSnapshot(y); }
  }
  function applySiteFilter() {
    if (!ready) return;
    const ch = chapter();
    if (ch && Array.isArray(ch.relatedSites) && state.mode !== 'manual') map.setFilter('sites', ['in', ['get', 'id'], ['literal', ch.relatedSites]]);
    else map.setFilter('sites', ['all', ['<=', ['get', 'start'], state.year], ['>=', ['get', 'end'], state.year]]);
  }
  function updateRange(ch) {
    const b = $('rangeBand');
    if (!ch || !ch.date) { b.hidden = true; return; }
    const a = T.yearToPos(ch.date.start), z = T.yearToPos(typeof ch.date.end === 'number' ? ch.date.end : ch.date.start);
    b.style.left = 'calc(' + (a / 10) + '% + 4px)'; b.style.width = 'max(6px, calc(' + ((z - a) / 10) + '% - 8px))'; b.hidden = false;
  }

  // ---------- tour features on the map ----------
  function setTourFeatures(ch) {
    if (!ready) return;
    const feats = ch ? (ch.features || []) : [];
    map.getSource('hist').setData(L.toGeoJSON(feats.filter(f => f.kind !== 'myth')));
    map.getSource('myth').setData(L.toGeoJSON(feats.filter(f => f.kind === 'myth')));
  }
  function clearTourLayers() {
    if (state.popup && state.popup.remove) state.popup.remove(); state.popup = null;
    if (ready) { map.getSource('hist').setData(EMPTY); map.getSource('myth').setData(EMPTY); }
  }
  function moveCamera(cam) {
    if (!ready || !cam) return;
    if (reduceMotion) map.jumpTo({ center: cam.center, zoom: cam.zoom });
    else map.flyTo({ center: cam.center, zoom: cam.zoom, duration: 2000 });
  }

  // ---------- card rendering ----------
  function sourceList(ids) {
    return h('ul', { class: 'src' }, (ids || []).map(id => {
      const s = SOURCES[id];
      if (!s) return h('li', { class: 'srcmissing' }, 'Missing source: ' + id);
      return h('li', {}, h('a', { href: s.url, target: '_blank', rel: 'noopener' }, s.title), ' — ' + s.publisher + ' (' + (SRC_LABEL[s.type] || s.type) + ')');
    }));
  }
  function renderCard(box, ch, tour) {
    box.replaceChildren();
    const isMyth = tour.category === 'myth';
    const kids = [];
    kids.push(h('h3', {}, ch.title));
    if (isMyth) kids.push(h('div', { class: 'mythwarn' }, 'Myths & Mysteries layer: ' + (ch.status ? 'status — ' + ch.status + '. ' : '') + 'This is a story or proposal, not verified history.'));
    kids.push(h('div', {},
      ch.subject ? h('span', { class: 'ev' }, ch.subject) : null,
      ch.evidence ? h('span', { class: 'ev ' + ch.evidence }, 'evidence: ' + ch.evidence) : null));
    kids.push(h('p', { class: 'meta' }, 'Date: ' + L.formatDate(T, ch.date) + (ch.date ? '' : ' (timeline unchanged)') + (ch.camera ? '' : ' · No map location')));
    kids.push(h('p', {}, ch.text));
    const dl = [];
    [['What changed', ch.what], ['Where', ch.where], ['Why it matters', ch.why], ['What is uncertain', ch.uncertain]].forEach(p => { if (p[1]) { dl.push(h('dt', {}, p[0])); dl.push(h('dd', {}, p[1])); } });
    if (dl.length) kids.push(h('dl', {}, dl));
    const mapped = (ch.features || []).filter(f => f.geometry || f.precision === 'unmapped');
    if (mapped.length) {
      kids.push(h('p', { class: 'small' }, 'On the map / not mapped:'));
      kids.push(h('ul', { class: 'feat' }, mapped.map(f => h('li', {}, f.name + ' — ' + f.kind + ', ' + f.precision + (f.precision === 'illustrative' ? ' placement' : '') + ', ' + f.evidence + (f.note ? '. ' + f.note : '')))));
    }
    (ch.alternatives || []).forEach(a => kids.push(h('details', {}, h('summary', {}, 'Alternative interpretation: ' + a.label), h('p', {}, a.text), sourceList(a.sources))));
    if (tour.legacy) kids.push(h('div', { class: 'warn' }, 'Overview chapter: this summary is not individually cited. The richer tours are fully cited.'));
    if (ch.sources && ch.sources.length) { kids.push(h('p', { class: 'small' }, 'Sources:')); kids.push(sourceList(ch.sources)); }
    else if (ch.noSourcesReason) kids.push(h('p', { class: 'small' }, 'No sources: ' + ch.noSourcesReason));
    else if (!tour.legacy) kids.push(h('p', { class: 'srcmissing' }, 'No sources recorded for this chapter.'));
    kids.forEach(k => box.appendChild(k));
  }

  // ---------- library ----------
  function renderLibrary() {
    const lib = $('library'); lib.replaceChildren();
    CATS.forEach(cat => {
      const list = TOURS.filter(t => t.category === cat.id);
      if (!list.length) return;
      lib.appendChild(h('h3', { class: 'cat ' + cat.id }, cat.label));
      list.forEach(t => {
        lib.appendChild(h('div', { class: 'card ' + (t.category === 'myth' ? 'myth' : '') },
          h('h3', {}, t.title), h('p', {}, t.description),
          h('p', { class: 'meta' }, 'Scope: ' + t.scope + ' · Time: ' + t.span + ' · ' + t.chapters.length + ' chapters · about ' + L.tourMinutes(t) + ' min'),
          h('button', { class: 'start', 'data-tour': t.id, onclick: () => startTour(t.id), 'aria-label': 'Start tour: ' + t.title }, t.category === 'myth' ? 'Enable layer and start' : 'Start tour')));
      });
    });
    const pl = $('plannedList'); pl.replaceChildren();
    (W.PLANNED_TOURS || []).forEach(p => pl.appendChild(h('li', {}, p.title)));
  }

  // ---------- tour control ----------
  function setMode(m) {
    state.mode = m;
    const b = $('modeBadge');
    const lbl = { auto: 'Auto-play', paused: 'Guided (paused)', manual: 'Manual exploration', free: '' }[m];
    b.textContent = lbl; b.className = 'badge ' + m;
    $('manualBanner').hidden = m !== 'manual';
    $('tPlay').textContent = m === 'auto' ? '⏸ Pause' : '▶ Play';
    $('tPlay').setAttribute('aria-label', m === 'auto' ? 'Pause tour' : 'Play tour');
  }
  function schedule() {
    if (state.timer) clearTimeout(state.timer); state.timer = null;
    if (state.mode !== 'auto' || !state.tour) return;
    const ch = chapter();
    state.timer = setTimeout(() => {
      if (state.mode !== 'auto') return;
      if (state.idx < state.tour.chapters.length - 1) goChapter(state.idx + 1); else { setMode('paused'); }
    }, L.autoplayMs(ch) * speed);
  }
  function renderTourUI() {
    const t = state.tour, n = t.chapters.length;
    $('tourTitle').textContent = t.title;
    $('progressText').textContent = 'Chapter ' + (state.idx + 1) + ' of ' + n;
    $('progressBar').style.width = ((state.idx + 1) / n * 100) + '%';
    const ol = $('chapterList'); ol.replaceChildren();
    t.chapters.forEach((c, i) => ol.appendChild(h('li', {}, h('button', Object.assign({ 'data-ch': String(i), onclick: () => goChapter(i) }, i === state.idx ? { 'aria-current': 'step' } : {}),
      (i + 1) + '. ' + c.title, h('span', { class: 'dt' }, c.date ? L.formatDate(T, c.date) : 'undated · ' + (c.camera ? '' : 'unmapped'))))));
    renderCard($('chapterCard'), chapter(), t);
    $('tPrev').disabled = state.idx === 0; $('tNext').disabled = state.idx === n - 1;
  }
  function goChapter(i) {
    if (!state.tour) return;
    const n = state.tour.chapters.length;
    state.idx = Math.max(0, Math.min(n - 1, i));
    if (state.mode === 'manual') setMode('paused');
    const ch = chapter(), yr = L.chapterYear(ch);
    state.bordersOn = !!ch.date && ch.borders !== false;
    if (yr !== null) setYear(yr, false); else { setStatus('This chapter has no defensible historical date: the timeline is left unchanged and the territory overlay is hidden.'); }
    if (!state.bordersOn) { clearBorders(); if (yr !== null && ch.borders === false) setStatus('Territory overlay hidden for this chapter (not meaningful for legend or text-based material).'); }
    else if (ready) loadSnapshot(state.year);
    updateRange(ch);
    setTourFeatures(ch);
    applySiteFilter();
    moveCamera(ch.camera);
    renderTourUI();
    schedule();
  }
  function showView(v) {
    $('libraryView').hidden = v !== 'library'; $('tourView').hidden = v !== 'tour'; $('detailView').hidden = v !== 'detail';
  }
  function startTour(id) {
    const t = TOURS.find(x => x.id === id); if (!t) return;
    if (state.tour) { if (state.timer) clearTimeout(state.timer); clearTourLayers(); }
    if (t.category === 'myth' && !state.myth) setMyth(true);
    stopTimelinePlay();
    state.tour = t; state.idx = 0; state.detail = null;
    showView('tour'); setMode('paused'); goChapter(0);
  }
  function exitTour() {
    if (state.timer) clearTimeout(state.timer); state.timer = null;
    clearTourLayers();
    state.tour = null; state.idx = 0; state.bordersOn = true; state.snapshot = null;
    setMode('free'); updateRange(null); showView('library');
    setYear(state.year, false);
    setStatus('Tour closed. Free exploration.');
  }
  function togglePlayTour() {
    if (!state.tour) return;
    if (state.mode === 'auto') { setMode('paused'); if (state.timer) clearTimeout(state.timer); return; }
    if (state.mode === 'manual') { goChapter(state.idx); }
    if (state.idx >= state.tour.chapters.length - 1 && state.mode !== 'auto') goChapter(0);
    setMode('auto'); schedule();
  }
  function restartTour() { if (!state.tour) return; setMode('paused'); goChapter(0); }
  function returnToChapter() { if (!state.tour) return; setMode('paused'); goChapter(state.idx); }
  function enterManual() {
    if (!state.tour || state.mode === 'manual') return;
    if (state.timer) clearTimeout(state.timer); state.timer = null;
    setMode('manual'); applySiteFilter();
  }

  // ---------- myth layer ----------
  function setMyth(on) {
    state.myth = on; $('mythToggle').checked = on; $('mythNote').hidden = !on;
    if (ready) map.setLayoutProperty('disc', 'visibility', on ? 'visible' : 'none');
    if (!on && state.tour && state.tour.category === 'myth') exitTour();
  }
  function discoveryFeatures() {
    const out = [];
    TOURS.filter(t => t.category === 'myth').forEach(t => t.chapters.forEach(c => {
      if (c.discovery && c.discovery.anchor) out.push({ type: 'Feature', properties: { tour: t.id, chapter: c.id, label: c.discovery.label }, geometry: { type: 'Point', coordinates: c.discovery.anchor } });
    }));
    return { type: 'FeatureCollection', features: out };
  }
  function unmappedChapters() {
    const out = [];
    TOURS.filter(t => t.category === 'myth').forEach(t => t.chapters.forEach(c => { if (!c.camera && c.id !== 'how-to-read') out.push(c.title); }));
    return out;
  }
  function openDiscovery(tourId, chId) {
    const t = TOURS.find(x => x.id === tourId); if (!t) return;
    const ch = t.chapters.find(c => c.id === chId); if (!ch) return;
    if (state.tour) exitTour();
    state.detail = { t, ch };
    renderCard($('detailCard'), ch, t); showView('detail');
    setTourFeaturesPreview(ch);
    moveCamera(ch.camera);
  }
  function setTourFeaturesPreview(ch) { if (ready) { map.getSource('hist').setData(L.toGeoJSON((ch.features || []).filter(f => f.kind !== 'myth'))); map.getSource('myth').setData(L.toGeoJSON((ch.features || []).filter(f => f.kind === 'myth'))); } }

  // ---------- timeline play (free) ----------
  function stopTimelinePlay() { if (state.playTimer) { clearInterval(state.playTimer); state.playTimer = null; } $('play').textContent = '▶'; }
  function toggleTimelinePlay() {
    if (state.playTimer) return stopTimelinePlay();
    if (state.tour) enterManual();
    if (Number($('slider').value) >= T.MAX_POS) $('slider').value = 0;
    $('play').textContent = '⏸';
    state.playTimer = setInterval(() => {
      const p = Number($('slider').value) + 2;
      if (p >= T.MAX_POS) { $('slider').value = T.MAX_POS; setYear(T.posToYear(T.MAX_POS), true); stopTimelinePlay(); return; }
      $('slider').value = p; setYear(T.posToYear(p), true);
    }, 70);
  }

  // ---------- UI wiring ----------
  function bindUI() {
    $('slider').addEventListener('input', () => { stopTimelinePlay(); enterManual(); setYear(T.posToYear(Number($('slider').value)), true); });
    $('play').addEventListener('click', toggleTimelinePlay);
    $('yearInput').addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      const y = T.parseYear($('yearInput').value);
      if (y === null) { setStatus('Could not read that year. Try "500 BCE" or "1492".'); return; }
      stopTimelinePlay(); enterManual(); setYear(Math.max(T.posToYear(0), Math.min(T.posToYear(T.MAX_POS), y)), false); $('yearInput').blur();
    });
    $('yearInput').addEventListener('blur', () => { $('yearInput').value = T.formatYear(state.year); });
    $('tPlay').addEventListener('click', togglePlayTour);
    $('tNext').addEventListener('click', () => goChapter(state.idx + 1));
    $('tPrev').addEventListener('click', () => goChapter(state.idx - 1));
    $('tRestart').addEventListener('click', restartTour);
    $('tExit').addEventListener('click', exitTour);
    $('manualReturn').addEventListener('click', returnToChapter);
    $('mythToggle').addEventListener('change', () => setMyth($('mythToggle').checked));
    $('detailBack').addEventListener('click', () => { state.detail = null; setTourFeaturesPreview({ features: [] }); showView('library'); });
    document.addEventListener('keydown', e => {
      const tag = e.target && e.target.tagName;
      if (!state.tour || tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') { goChapter(state.idx + 1); e.preventDefault && e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { goChapter(state.idx - 1); e.preventDefault && e.preventDefault(); }
      else if (e.key === 'Escape') exitTour();
    });
    $('unmappedList').textContent = unmappedChapters().join('; ') || 'none';
  }

  // ---------- map ----------
  const KIND_COLORS = ['match', ['get', 'kind'], 'direct', '#f2c14e', 'alliance', '#4aa3df', 'tributary', '#e07a5f', 'occupation', '#c0392b', 'influence', '#57c7a4', 'diffusion', '#f28ab2', 'conflict', '#d9534f', 'site', '#ffffff', 'myth', '#b48cff', '#cccccc'];
  const SOLID = ['==', ['get', 'precision'], 'exact'];
  function addFeatureLayers(prefix, color, dashAll) {
    const src = prefix;
    map.addSource(src, { type: 'geojson', data: EMPTY });
    map.addLayer({ id: prefix + '-fill', type: 'fill', source: src, filter: ['==', ['geometry-type'], 'Polygon'], paint: { 'fill-color': color, 'fill-opacity': 0.16 } });
    map.addLayer({ id: prefix + '-line-dash', type: 'line', source: src, filter: ['all', ['in', ['geometry-type'], ['literal', ['Polygon', 'LineString']]], dashAll ? ['has', 'kind'] : ['!', SOLID]], paint: { 'line-color': color, 'line-width': 2, 'line-dasharray': [2, 2] } });
    if (!dashAll) map.addLayer({ id: prefix + '-line', type: 'line', source: src, filter: ['all', ['in', ['geometry-type'], ['literal', ['Polygon', 'LineString']]], SOLID], paint: { 'line-color': color, 'line-width': 2.5 } });
    map.addLayer({ id: prefix + '-pt', type: 'circle', source: src, filter: ['==', ['geometry-type'], 'Point'], paint: {
      'circle-radius': 8, 'circle-color': color,
      'circle-opacity': ['match', ['get', 'precision'], 'exact', 0.95, 0.35],
      'circle-stroke-width': 2.5, 'circle-stroke-color': color } });
  }
  function featurePopup(e) {
    const f = e.features && e.features[0]; if (!f) return;
    const p = f.properties, d = document.createElement('div');
    d.textContent = p.name + ' — ' + p.kind + ', ' + p.precision + ', ' + p.evidence + (p.note ? '. ' + p.note : '');
    if (state.popup && state.popup.remove) state.popup.remove();
    state.popup = new maplibregl.Popup().setLngLat(e.lngLat).setDOMContent(d).addTo(map);
  }

  async function init() {
    renderLibrary(); bindUI(); setMode('free'); showView('library');
    setYear(state.year, false);
    if (REJECTED.length) setStatus('Some tours were hidden because they failed validation (see console).');
    if (typeof maplibregl === 'undefined') { setStatus('MapLibre failed to load. Tours can still be read; check your internet connection for the map.'); return; }
    const style = await loadStyle();
    map = new maplibregl.Map({ container: 'map', style, center: [35, 36], zoom: 4, minZoom: 2, maxZoom: 9, attributionControl: true });
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
    map.on('error', e => { if (e && e.error) setStatus('Map warning: ' + (e.error.message || e.error)); });
    map.on('dragstart', e => { if (e && e.originalEvent) enterManual(); });
    map.on('load', () => {
      map.addSource('borders', { type: 'geojson', data: EMPTY });
      map.addLayer({ id: 'borders-fill', type: 'fill', source: 'borders', paint: { 'fill-color': ['coalesce', ['get', '_c'], '#888'], 'fill-opacity': ['match', ['get', '_bp'], 1, 0.2, 2, 0.33, 3, 0.48, 0.28] } });
      map.addLayer({ id: 'borders-line', type: 'line', source: 'borders', paint: { 'line-color': '#f0e2c0', 'line-opacity': ['match', ['get', '_bp'], 1, 0.15, 2, 0.35, 3, 0.6, 0.25], 'line-width': 0.8 } });
      addFeatureLayers('hist', KIND_COLORS, false);
      addFeatureLayers('myth', '#b48cff', true);
      map.addSource('sites', { type: 'geojson', data: { type: 'FeatureCollection', features: SITES.map(s => ({ type: 'Feature', geometry: { type: 'Point', coordinates: [s.lon, s.lat] }, properties: { id: s.id, name: s.name, start: s.start, end: s.end, category: s.category } })) } });
      map.addLayer({ id: 'sites', type: 'circle', source: 'sites', paint: { 'circle-radius': 6, 'circle-stroke-width': 1.5, 'circle-stroke-color': '#fff', 'circle-color': ['match', ['get', 'category'], 'monument', '#e8b04a', 'city', '#d9534f', 'settlement', '#6fbf73', 'modern', '#5bc0de', '#ccc'] } });
      map.addSource('disc', { type: 'geojson', data: discoveryFeatures() });
      map.addLayer({ id: 'disc', type: 'circle', source: 'disc', layout: { visibility: state.myth ? 'visible' : 'none' }, paint: { 'circle-radius': 11, 'circle-color': 'rgba(180,140,255,0.25)', 'circle-stroke-width': 3, 'circle-stroke-color': '#b48cff' } });
      ready = true;
      map.on('click', 'sites', e => {
        const f = e.features && e.features[0]; if (!f) return;
        const s = SITES.find(x => x.id === f.properties.id); if (!s) return;
        if (state.tour) enterManual();
        state.detail = null;
        const box = $('detailCard'); box.replaceChildren(h('h3', {}, s.name), h('p', { class: 'meta' }, T.formatYear(s.start) + ' – ' + (s.end >= 2026 ? 'present' : T.formatYear(s.end)) + ' · confidence: ' + s.confidence), h('p', {}, s.summary), h('ul', { class: 'src' }, s.sources.map(u => h('li', {}, h('a', { href: u, target: '_blank', rel: 'noopener' }, u)))));
        if (!state.tour) showView('detail');
        else setStatus(s.name + ': ' + s.summary);
      });
      map.on('click', 'disc', e => { const f = e.features && e.features[0]; if (f) openDiscovery(f.properties.tour, f.properties.chapter); });
      ['hist-fill', 'hist-pt', 'hist-line', 'hist-line-dash', 'myth-fill', 'myth-pt', 'myth-line-dash'].forEach(l => map.on('click', l, featurePopup));
      map.on('click', 'borders-fill', e => {
        if (map.queryRenderedFeatures(e.point, { layers: ['sites', 'hist-pt', 'myth-pt', 'disc'] }).length) return;
        const p = e.features[0].properties, d = document.createElement('div');
        d.textContent = (p.NAME || 'Unnamed region') + (p.SUBJECTO && p.SUBJECTO !== p.NAME ? ' (' + p.SUBJECTO + ')' : '') + ' · border precision ' + (p.BORDERPRECISION || 'n/a');
        new maplibregl.Popup().setLngLat(e.lngLat).setDOMContent(d).addTo(map);
      });
      ['sites', 'borders-fill', 'disc', 'hist-pt', 'myth-pt'].forEach(l => {
        map.on('mouseenter', l, () => { map.getCanvas().style.cursor = 'pointer'; });
        map.on('mouseleave', l, () => { map.getCanvas().style.cursor = ''; });
      });
      setYear(state.year, true);
      if (state.tour) goChapter(state.idx);
    });
  }
  W.__chronos = { state, startTour, exitTour, goChapter, openDiscovery, setMyth, tours: TOURS, rejected: REJECTED };
  init();
})();
