// Batch 3A checks (v2.5). Run: node test/test-batch3a.js
const assert = require('assert');
const { loadData } = require('./load');
const ctx = loadData({ console }, { extra: ['data/sources-batch3a.js', 'data/tours/egypt.js', 'data/tours/macedonia.js', 'data/tours/china.js', 'data/tours/mongol.js', 'data/tours/ottoman.js'] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const expected = { 'egypt-kingdoms': 6, 'macedonia-ancient': 6, 'china-dynasties': 7, 'mongol-empire': 6, 'ottoman-empire': 6 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
Object.keys(expected).forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'registered ' + id);
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
});
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
// BCE/CE conversion spot checks (astronomical years: 1 BCE = 0)
const eg = TOURS.find(t => t.id === 'egypt-kingdoms'), ch = TOURS.find(t => t.id === 'china-dynasties');
ok(eg.chapters[1].date.start === -2542, 'Old Kingdom 2543 BCE -> -2542');
ok(ch.chapters[1].date.start === -220 && ch.chapters[1].date.end === 220, 'Qin 221 BCE -> -220, Han end 220 CE');
ok(TOURS.find(t => t.id === 'macedonia-ancient').chapters.some(c => c.date === null), 'undated chapter present');
console.log('BATCH 3A TESTS PASSED (' + n + ' assertions)');
