// Batch 4A checks (v2.5). Run: node test/test-batch4a.js
const assert = require('assert');
const { loadData } = require('./load');
const ctx = loadData({ console }, { extra: ['data/sources-batch4a.js', 'data/tours/russian-empire.js', 'data/tours/communism.js'] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const expected = { 'russian-empire': 7, communism: 9 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
Object.keys(expected).forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'registered ' + id);
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
  ok(t.chapters.every((c, i, a) => i === 0 || c.date.start >= a[i - 1].date.start - 100), id + ' roughly chronological');
});
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
// communism tour must state repression and the range of famine estimates
const c = TOURS.find(t => t.id === 'communism');
const stalin = c.chapters.find(x => x.id === 'stalin'), china = c.chapters.find(x => x.id === 'china');
ok(/millions/.test(stalin.text) && /Gulag/.test(stalin.text) && /famine/.test(stalin.text), 'Stalin chapter names terror, famine, Gulag');
ok(china.alternatives.length === 4, 'Great Leap estimates listed side by side');
ok(c.chapters.some(x => x.id === '1989') && c.chapters.some(x => x.id === 'dissolution'), 'downfall chapters present');
ok(!/glor|triumph|heroic/i.test(JSON.stringify(c.chapters.map(x => x.text))), 'no celebratory wording');
// the empire tour is thin where sources are thin, and says so
const r = TOURS.find(t => t.id === 'russian-empire');
ok(/thin by design/.test(r.chapters.find(x => x.id === 'serfs').uncertain), 'serfs chapter admits thin coverage');
console.log('BATCH 4A TESTS PASSED (' + n + ' assertions)');
