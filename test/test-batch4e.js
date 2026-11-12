// Batch 4E checks (v2.5, final). Run: node test/test-batch4e.js
const assert = require('assert');
const { loadData } = require('./load');
const names = ['rome-persia-frontier', 'buddhism-after-ashoka', 'mongolia-after-empire', 'swahili-coast', 'vietnam-war'];
const ctx = loadData({ console }, { extra: ['data/sources-batch4e.js', ...names.map(n => 'data/tours/' + n + '.js')] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const expected = { 'rome-persia-frontier': 5, 'buddhism-after-ashoka': 5, 'mongolia-after-empire': 4, 'swahili-coast': 5, 'vietnam-war': 7 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
Object.keys(expected).forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'registered ' + id);
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
});
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
const rp = TOURS.find(t => t.id === 'rome-persia-frontier'), v = TOURS.find(t => t.id === 'vietnam-war');
ok(rp.chapters[0].date.start === -53 && rp.chapters[0].date.end === -52, 'Carrhae 54-53 BCE');
ok(rp.chapters[3].date.end === 260, 'Valerian 260 CE');
ok(!/skinned/i.test(JSON.stringify(rp)), 'unverified Valerian detail not repeated');
ok(v.chapters.find(c => c.id === 'indochina-war').alternatives.length === 1, 'siege-length disagreement shown');
ok(/human cost/.test(v.description) && /casualty figures/.test(v.chapters.find(c => c.id === 'fall').uncertain), 'Vietnam tour states it omits casualties');
console.log('BATCH 4E TESTS PASSED (' + n + ' assertions)');
