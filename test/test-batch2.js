// Batch 2 checks (v2.5). Run: node test/test-batch2.js
const assert = require('assert');
const { loadData } = require('./load');
const ctx = loadData({ console }, { extra: ['data/sources-batch2.js', 'data/tours/weimar.js', 'data/tours/british-empire.js'] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const expected = { 'weimar-third-reich': 8, 'british-empire': 8 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
Object.keys(expected).forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'registered ' + id);
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
  ok(t.chapters.every((c, i, a) => i === 0 || c.date.start >= a[i - 1].date.start - 1000), id + ' roughly chronological');
});
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
const w = TOURS.find(t => t.id === 'weimar-third-reich');
ok(w.chapters.some(c => /Holocaust/.test(c.title)) && /six million/.test(w.chapters.find(c => c.id === 'genocide').text), 'genocide named and quantified');
ok(!/glor|triumph|conquest of/i.test(JSON.stringify(w)), 'no celebratory framing words in Nazi tour');
ok(w.chapters.every(c => c.features.every(f => f.kind !== 'myth')), 'no myth features');
console.log('BATCH 2 TESTS PASSED (' + n + ' assertions)');
