// Batch 1 checks (v2.5). Run: node test/test-batch1.js
const assert = require('assert');
const { loadData } = require('./load');
const ctx = loadData({ console }, { extra: ['data/sources-batch1.js', 'data/tours/byzantium.js', 'data/tours/hre.js', 'data/tours/persia.js'] });
const L = ctx.TourLogic, SRC = ctx.SOURCES, TOURS = ctx.TOUR_REGISTRY;
const ids = ['byzantium', 'holy-roman-empire', 'persia-dynasties'];
const expected = { byzantium: 6, 'holy-roman-empire': 5, 'persia-dynasties': 6 };
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
ids.forEach(id => {
  const t = TOURS.find(x => x.id === id); ok(t, 'tour registered: ' + id);
  const errs = L.validate(t, SRC); ok(errs.length === 0, 'validation errors:\n' + errs.join('\n'));
  ok(t.chapters.length === expected[id], id + ' chapter count');
  t.chapters.forEach(c => { ok(c.sources.length >= 1, 'sources ' + c.id); ok(c.what && c.where && c.why && c.uncertain, 'four-question fields ' + c.id); });
});
// no existing tour or source id was displaced
const idsAll = TOURS.map(t => t.id); ok(new Set(idsAll).size === idsAll.length, 'unique tour ids');
// every batch-1 source is used
const used = new Set(); TOURS.forEach(t => t.chapters.forEach(c => { (c.sources || []).forEach(s => used.add(s)); (c.alternatives || []).forEach(a => (a.sources || []).forEach(s => used.add(s))); }));
Object.keys(SRC).forEach(k => ok(used.has(k), 'source unused: ' + k));
// BCE/CE sanity for Persia: Cyrus 559 BCE = -558, Sasanian start 224 CE
const per = TOURS.find(t => t.id === 'persia-dynasties');
ok(per.chapters[0].date.start === -558 && per.chapters[4].date.start === 224, 'Persia BCE/CE conversion');
ok(per.chapters.every((c, i, a) => i === 0 || c.date.start >= a[i - 1].date.start), 'Persia chapters in chronological order');
console.log('BATCH 1 TESTS PASSED (' + n + ' assertions)');
