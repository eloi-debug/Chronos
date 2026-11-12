// Batch 4B checks (v2.5). Run: node test/test-batch4b.js
const assert = require('assert');
const { loadData } = require('./load');
const ctx = loadData({ console }, { extra: ['data/sources-batch4b.js', 'data/tours/british-empire-2.js', 'data/tours/ottoman-empire-2.js', 'data/tours/islam-2.js'] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const expected = { 'british-empire-2': 4, 'ottoman-empire-2': 5, 'islam-2': 6 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
Object.keys(expected).forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'registered ' + id);
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
  ok(t.chapters.every(c => c.sources.length > 0 || c.noSourcesReason), id + ' every chapter sourced or explained');
});
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
// death-toll disagreements must be shown, not collapsed
const o = TOURS.find(t => t.id === 'ottoman-empire-2').chapters.find(c => c.id === '1915');
ok(o.alternatives.length >= 3 && /600,000/.test(o.uncertain) && /1\.5 million/.test(o.uncertain), 'Armenian genocide estimates shown as ranges');
const b = TOURS.find(t => t.id === 'british-empire-2').chapters.find(c => c.id === 'bengal');
ok(b.alternatives.length === 2 && /800,000/.test(b.uncertain), 'Bengal famine range and debate shown');
// scope notes are undated/unmapped
ok(TOURS.every(t => t.chapters.some(c => c.id === 'gaps' && c.date === null && c.camera === null)), 'each tour ends with an honest scope note');
console.log('BATCH 4B TESTS PASSED (' + n + ' assertions)');
