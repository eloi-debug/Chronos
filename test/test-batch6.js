// Batch 6 checks: Old and New Testament places. Run: node test/test-batch6.js
const assert = require('assert');
const { loadData } = require('./load');
const names = ['old-testament-places', 'new-testament-places'];
const ctx = loadData({ console }, { extra: ['data/sources-batch6.js', ...names.map(n => 'data/tours/' + n + '.js')] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const expected = { 'old-testament-places': 7, 'new-testament-places': 7 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
Object.keys(expected).forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'registered ' + id);
  ok(t.category === 'religion' && Array.isArray(t.regions) && t.regions.length, id + ' is a religion tour with regions');
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
});
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
const ot = TOURS.find(t => t.id === 'old-testament-places'), nt = TOURS.find(t => t.id === 'new-testament-places');
const get = (t, id) => t.chapters.find(c => c.id === id);
// disputed or traditional places are labelled as such, never as plain "attested" pins
const traditional = f => f.evidence === 'traditional' || f.evidence === 'disputed';
ok(get(ot, 'eden-flood').features.some(f => f.precision === 'unmapped'), 'Eden is not placed on the map');
ok(get(ot, 'exodus-sinai').features.filter(f => /Sinai|Kadesh/.test(f.name)).every(traditional), 'Sinai proposals are marked traditional/disputed');
ok(get(nt, 'jerusalem').features.every(f => /Sepulchre|Gordon/.test(f.name) ? traditional(f) : true), 'Golgotha candidates are marked traditional/disputed');
ok(get(nt, 'birth').features.find(f => /Bethlehem/.test(f.name)).evidence === 'traditional', 'Bethlehem is marked as a traditional site');
// alternatives are shown
ok(get(ot, 'exodus-sinai').alternatives.length === 3 && get(ot, 'monarchy').alternatives.length === 3, 'competing positions listed');
ok(get(nt, 'jerusalem').alternatives.length === 2 && get(nt, 'birth').alternatives.length === 1, 'site and birthplace alternatives listed');
// resurrection is reported as a faith claim
ok(/faith claim/.test(get(nt, 'jerusalem').uncertain) && /does not take a position/.test(get(nt, 'jerusalem').uncertain), 'resurrection framed as a faith claim without a verdict');
// BCE/CE conversion: Merneptah 1208 BCE = -1207, Cyrus-era chapter ends 515 BCE = -514
ok(get(ot, 'exodus-sinai').date.start === -1207 && get(ot, 'exile').date.end === -514, 'BCE conversion');
ok(get(nt, 'temple-70').date.start === 66 && get(nt, 'birth').date.start === -5, 'CE dates and 6 BCE conversion');
// undated chapters exist where no defensible date is given
ok(get(ot, 'eden-flood').date === null && get(ot, 'patriarchs').date === null, 'primeval and patriarchal chapters undated');
console.log('BATCH 6 TESTS PASSED (' + n + ' assertions)');
