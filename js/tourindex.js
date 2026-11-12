(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.TourIndex = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  const REGIONS = ['World', 'Europe', 'Middle East', 'Asia', 'Africa', 'North America', 'Latin America & Caribbean'];
  const ERAS = [
    { label: 'Before 500 BCE', test: s => s < -499 },
    { label: '500 BCE – 500 CE', test: s => s < 500 },
    { label: '500 – 1500 CE', test: s => s < 1500 },
    { label: '1500 – 1900 CE', test: s => s < 1900 },
    { label: '1900 CE onward', test: () => true }
  ];
  // Years are astronomical (1 BCE = 0). A tour's span is read from its dated chapters unless META overrides.
  function spanOf(tour, meta) {
    const m = (meta && meta[tour.id]) || {};
    const ds = (tour.chapters || []).filter(c => c.date && Number.isInteger(c.date.start)).map(c => c.date);
    let start = ds.length ? Math.min.apply(null, ds.map(d => d.start)) : null;
    let end = ds.length ? Math.max.apply(null, ds.map(d => (Number.isInteger(d.end) ? d.end : d.start))) : null;
    if (Number.isInteger(m.start)) start = m.start;
    if (Number.isInteger(m.end)) end = m.end;
    return { start, end };
  }
  function regionsOf(tour, meta) {
    const own = Array.isArray(tour.regions) && tour.regions.length ? tour.regions : null;
    const fromMeta = meta && meta[tour.id] && Array.isArray(meta[tour.id].regions) ? meta[tour.id].regions : null;
    const list = (own || fromMeta || ['World']).filter(r => REGIONS.includes(r));
    return list.length ? list : ['World'];
  }
  function compare(a, b) {
    const sa = a.span.start, sb = b.span.start;
    if (sa === null && sb !== null) return 1;
    if (sb === null && sa !== null) return -1;
    if (sa !== sb) return sa - sb;
    const ea = a.span.end === null ? Infinity : a.span.end, eb = b.span.end === null ? Infinity : b.span.end;
    if (ea !== eb) return ea - eb;
    return a.tour.title.localeCompare(b.tour.title);
  }
  function entries(tours, meta) { return tours.map(t => ({ tour: t, span: spanOf(t, meta), regions: regionsOf(t, meta) })).sort(compare); }
  function groupByGeography(tours, meta) {
    const all = entries(tours, meta);
    return REGIONS.map(r => ({ label: r, items: all.filter(e => e.regions.includes(r)) })).filter(g => g.items.length);
  }
  function groupChronologically(tours, meta) {
    const all = entries(tours, meta), out = [];
    ERAS.forEach(() => out.push([]));
    const undated = [];
    all.forEach(e => {
      if (e.span.start === null) { undated.push(e); return; }
      const i = ERAS.findIndex(era => era.test(e.span.start));
      out[i].push(e);
    });
    const groups = ERAS.map((era, i) => ({ label: era.label, items: out[i] })).filter(g => g.items.length);
    if (undated.length) groups.push({ label: 'Undated', items: undated });
    return groups;
  }
  function formatYear(y) { return y <= 0 ? (1 - y) + ' BCE' : y + ' CE'; }
  function optionLabel(entry) { return (entry.span.start === null ? 'undated' : formatYear(entry.span.start)) + ' · ' + entry.tour.title; }
  return { REGIONS, ERAS, spanOf, regionsOf, entries, groupByGeography, groupChronologically, optionLabel, formatYear };
});
