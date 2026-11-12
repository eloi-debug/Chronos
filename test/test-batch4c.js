// Batch 4C checks (v2.5). Run: node test/test-batch4c.js
const assert = require('assert');
const { loadData } = require('./load');
const ctx = loadData({ console }, { extra: ['data/sources-batch4c.js', 'data/tours/maya.js', 'data/tours/aztec.js', 'data/tours/inca.js', 'data/tours/japan.js'] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const expected = { maya: 5, 'aztec-empire': 5, 'inca-empire': 5, japan: 9 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
Object.keys(expected).forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'registered ' + id);
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
  ok(t.chapters.every((c, i, a) => i === 0 || c.date.start >= a[i - 1].date.start - 1000), id + ' roughly chronological');
});
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
// BCE/CE conversion
const maya = TOURS.find(t => t.id === 'maya'), jp = TOURS.find(t => t.id === 'japan');
ok(maya.chapters[0].date.start === -1999 && maya.chapters[0].date.end === 250, 'Preclassic 2000 BCE-250 CE');
ok(jp.chapters[0].date.start === -299, 'Yayoi 300 BCE');
// Maya survival and Inca record-keeping are stated
ok(/did not disappear|themselves continued|Maya themselves/.test(JSON.stringify(maya.chapters[4])), 'Maya continuity noted');
ok(/no writing/.test(TOURS.find(t => t.id === 'inca-empire').chapters[1].text), 'Inca had no writing noted');
// Japan's wartime chapter must flag its weak sourcing
ok(/unrated blog/.test(jp.chapters.find(c => c.id === 'empire-war').uncertain), 'wartime chapter flags unrated source');
console.log('BATCH 4C TESTS PASSED (' + n + ' assertions)');
