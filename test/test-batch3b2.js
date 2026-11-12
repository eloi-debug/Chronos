// Batch 3B-2 checks (v2.5). Run: node test/test-batch3b2.js
const assert = require('assert');
const { loadData } = require('./load');
const ctx = loadData({ console }, { extra: ['data/sources-batch3b2.js', 'data/tours/troy.js', 'data/tours/greek-roman-religion.js', 'data/tours/mesopotamian-religion.js', 'data/tours/mahabharata.js'] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const expected = { troy: 6, 'greek-roman-religion': 6, 'mesopotamian-religion': 5, mahabharata: 5 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
Object.keys(expected).forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'registered ' + id);
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
});
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
// the Mahabharata keeps setting, composition and archaeology apart
const m = TOURS.find(t => t.id === 'mahabharata');
const byId = id => m.chapters.find(c => c.id === id);
ok(byId('war-date').date === null, 'war date is deliberately off the timeline');
ok(byId('composition').date.start === -499 && byId('composition').date.end === 400, 'composition range 500 BCE-400 CE');
ok(byId('archaeology').date.start === -1199, 'PGW 1200 BCE');
ok(m.chapters.every(c => c.features.every(f => f.kind !== 'myth' || f.precision !== 'exact')), 'no exact placements for traditional sites');
// Troy keeps legend, excavation and documents in separate chapters
const t = TOURS.find(x => x.id === 'troy');
ok(t.chapters[0].evidence === 'mythological' && t.chapters[2].evidence === 'disputed', 'Troy evidence classes');
// Enuma Elish dating chapter lists alternatives
const e = TOURS.find(x => x.id === 'mesopotamian-religion').chapters.find(c => c.id === 'dating');
ok(e.alternatives.length >= 3, 'dating alternatives listed');
console.log('BATCH 3B-2 TESTS PASSED (' + n + ' assertions)');
