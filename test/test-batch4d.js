// Batch 4D checks (v2.5). Run: node test/test-batch4d.js
const assert = require('assert');
const { loadData } = require('./load');
const names = ['indus-valley', 'mauryan-empire', 'vikings', 'cold-war', 'decolonisation', 'west-african-empires'];
const ctx = loadData({ console }, { extra: ['data/sources-batch4d.js', ...names.map(n => 'data/tours/' + n + '.js')] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const expected = { 'indus-valley': 5, 'mauryan-empire': 5, vikings: 5, 'cold-war': 7, decolonisation: 6, 'west-african-empires': 4 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
Object.keys(expected).forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'registered ' + id);
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
});
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
// BCE/CE conversion checks
const iv = TOURS.find(t => t.id === 'indus-valley'), ma = TOURS.find(t => t.id === 'mauryan-empire');
ok(iv.chapters[0].date.start === -2599 && iv.chapters[0].date.end === -1999, 'Indus 2600-2000 BCE');
ok(ma.chapters[3].date.end === -184, 'Mauryan end 185 BCE -> -184');
// the Indus decline lists the four theories side by side
ok(iv.chapters.find(c => c.id === 'decline').alternatives.length === 4, 'four decline theories listed');
// unresolved questions stay undated or flagged
ok(iv.chapters.find(c => c.id === 'governance').date === null, 'Indus governance chapter undated');
// West Africa tour flags weak sourcing
ok(/unrated/.test(TOURS.find(t => t.id === 'west-african-empires').chapters.slice(-1)[0].uncertain), 'West Africa flags unrated sources');
// Algeria dates conflict is disclosed
ok(/20 February/.test(TOURS.find(t => t.id === 'decolonisation').chapters.find(c => c.id === 'algeria').uncertain), 'Algeria date conflict disclosed');
console.log('BATCH 4D TESTS PASSED (' + n + ' assertions)');
