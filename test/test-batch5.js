// Batch 5 checks: USA and Canada tours. Run: node test/test-batch5.js
const assert = require('assert');
const { loadData } = require('./load');
const names = ['indigenous-north-america', 'colonial-america-revolution', 'us-slavery-civil-war', 'us-expansion-removal', 'us-twentieth-century', 'canada-new-france', 'canada-since-confederation'];
const ctx = loadData({ console }, { extra: ['data/sources-batch5.js', ...names.map(n => 'data/tours/' + n + '.js')] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const expected = { 'indigenous-north-america': 5, 'colonial-america-revolution': 6, 'us-slavery-civil-war': 4, 'us-expansion-removal': 4, 'us-twentieth-century': 5, 'canada-new-france': 5, 'canada-since-confederation': 6 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
Object.keys(expected).forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'registered ' + id);
  ok(t.regions && t.regions[0] === 'North America', id + ' region');
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
});
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
const get = (tid, cid) => TOURS.find(t => t.id === tid).chapters.find(c => c.id === cid);
// disputed or conflicting figures are shown, not collapsed
ok(get('indigenous-north-america', 'great-law').alternatives.length === 3, 'Haudenosaunee founding-date proposals listed');
ok(get('indigenous-north-america', 'cahokia-decline').alternatives.length === 3, 'Cahokia decline theories listed');
ok(get('us-expansion-removal', 'removal').alternatives.length === 2 && /4,000/.test(get('us-expansion-removal', 'removal').text), 'removal death estimates shown');
ok(/120,000/.test(get('us-twentieth-century', 'internment').text) && /1988/.test(get('us-twentieth-century', 'internment').text), 'internment numbers and redress stated');
ok(get('colonial-america-revolution', '1619').alternatives.length === 1, '1619 ship-identification disagreement shown');
// BCE/CE: no BCE dates in this batch, all starts are CE
TOURS.forEach(t => t.chapters.forEach(c => { if (c.date) ok(c.date.start > 0, t.id + ' ' + c.id + ' date is CE'); }));
// every tour ends with the scope note or a clearly limited final chapter
ok(['indigenous-north-america', 'us-twentieth-century', 'canada-new-france', 'canada-since-confederation'].every(id => TOURS.find(t => t.id === id).chapters.some(c => c.id === 'gaps')), 'scope notes present');
console.log('BATCH 5 TESTS PASSED (' + n + ' assertions)');
