// Batch 3B-1 checks (v2.5). Run: node test/test-batch3b1.js
const assert = require('assert');
const { loadData } = require('./load');
const ctx = loadData({ console }, { extra: ['data/sources-batch3b1.js', 'data/tours/christianity.js', 'data/tours/islam.js', 'data/tours/hindu.js', 'data/tours/daoism.js'] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const expected = { christianity: 7, islam: 5, 'hindu-traditions': 5, daoism: 5 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
Object.keys(expected).forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'registered ' + id);
  ok(t.category === 'religion', id + ' category');
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
});
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
// every chapter that rests on tradition says so in its evidence class or uncertainty field
TOURS.forEach(t => t.chapters.forEach(c => ok(typeof c.uncertain === 'string' && c.uncertain.length > 20, 'uncertainty stated ' + c.id)));
// BCE/CE conversion: Indus 2500 BCE = -2499; Celestial Masters 142 CE
const hi = TOURS.find(t => t.id === 'hindu-traditions'), da = TOURS.find(t => t.id === 'daoism');
ok(hi.chapters[1].date.start === -2499, 'Indus 2500 BCE conversion');
ok(da.chapters[2].date.start === 142, 'Celestial Masters CE');
ok(hi.chapters[0].date === null && da.chapters[0].camera === null, 'undated/unmapped chapters present');
console.log('BATCH 3B-1 TESTS PASSED (' + n + ' assertions)');
