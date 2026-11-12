// Tour index/menu logic (v2.5). Run: node test/test-tourindex.js
const assert = require('assert'), fs = require('fs'), path = require('path'), vm = require('vm');
const TI = require('../js/tourindex.js');
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
const ctx = { console }; ctx.window = ctx; ctx.self = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'data/tour-meta.js'), 'utf8'), ctx);
const META = ctx.TOUR_META;

// every known tour id has a region; known ids are the full v2.5 set
const KNOWN = ['megastructures','trade','writing','rome','greek-poleis','buddhism-spread','myths-mysteries','byzantium','holy-roman-empire','persia-dynasties','weimar-third-reich','british-empire','egypt-kingdoms','macedonia-ancient','china-dynasties','mongol-empire','ottoman-empire','christianity','islam','hindu-traditions','daoism','troy','greek-roman-religion','mesopotamian-religion','mahabharata','russian-empire','communism','british-empire-2','ottoman-empire-2','islam-2','maya','aztec-empire','inca-empire','japan','indus-valley','mauryan-empire','vikings','cold-war','decolonisation','west-african-empires','rome-persia-frontier','buddhism-after-ashoka','mongolia-after-empire','swahili-coast','vietnam-war','indigenous-north-america','colonial-america-revolution','us-slavery-civil-war','us-expansion-removal','us-twentieth-century','canada-new-france','canada-since-confederation'];
KNOWN.forEach(id => { ok(META[id] && META[id].regions.length, 'meta for ' + id); META[id].regions.forEach(r => ok(TI.REGIONS.includes(r), 'valid region ' + r + ' for ' + id)); });
ok(Object.keys(META).length === KNOWN.length, 'no stray meta ids');

// any tour files present in data/tours must be covered by META (runs against the full repo)
const dir = path.join(__dirname, '..', 'data', 'tours');
const tctx = { console }; tctx.window = tctx; tctx.self = tctx; vm.createContext(tctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js/tourlogic.js'), 'utf8'), tctx);
fs.readdirSync(dir).filter(f => f.endsWith('.js')).forEach(f => vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), tctx, { filename: f }));
(tctx.TOUR_REGISTRY || []).forEach(t => ok(META[t.id] || (t.regions && t.regions.length), 'tour present in files but not in META: ' + t.id));

// synthetic tours for ordering and grouping
const T = (id, title, dates, regions) => ({ id, title, regions, chapters: dates.map((d, i) => ({ id: id + i, date: d === null ? null : { start: d[0], end: d[1] } })) });
const tours = [
  T('modern', 'Modern', [[1950, 1990]], ['Europe']),
  T('ancient', 'Ancient', [[-3000, -2000], [-1500, -1000]], ['Asia']),
  T('mid', 'Medieval', [[800, 1200]], ['Europe', 'Asia']),
  T('nodate', 'Undated', [null], undefined),
  T('bce500', 'Boundary BCE', [[-499, -400]], ['Africa']),
  T('bce501', 'Boundary before', [[-500, -400]], ['Africa']),
  T('ce1500', 'Boundary 1500', [[1500, 1600]], ['World']),
];
const m = { ancient: { start: -9999 } };
ok(TI.spanOf(tours[1], m).start === -9999 && TI.spanOf(tours[1], {}).start === -3000 && TI.spanOf(tours[1], {}).end === -1000, 'span with and without override');
ok(TI.spanOf(tours[3], {}).start === null, 'undated tour has null span');
ok(TI.regionsOf(tours[3], {}).join() === 'World', 'missing region falls back to World');
ok(TI.regionsOf({ id: 'x', regions: ['Mars'] }, {}).join() === 'World', 'invalid region falls back to World');

const chrono = TI.groupChronologically(tours, m);
const labels = chrono.map(g => g.label);
ok(labels.join('|') === 'Before 500 BCE|500 BCE – 500 CE|500 – 1500 CE|1500 – 1900 CE|1900 CE onward|Undated', 'era groups in order: ' + labels.join('|'));
ok(chrono[0].items.map(e => e.tour.id).join() === 'ancient,bce501', 'oldest first within era (override puts ancient first)');
ok(chrono[1].items[0].tour.id === 'bce500', '499 BCE is in the 500 BCE-500 CE era');
ok(chrono[3].items[0].tour.id === 'ce1500', 'start of 1500 is in the 1500-1900 era');
const flat = chrono.flatMap(g => g.items).filter(e => e.span.start !== null).map(e => e.span.start);
ok(flat.every((s, i) => i === 0 || s >= flat[i - 1]), 'overall order is non-decreasing (oldest to newest)');
ok(chrono[chrono.length - 1].items[0].tour.id === 'nodate', 'undated tours sit at the bottom');

const geo = TI.groupByGeography(tours, m);
ok(geo.map(g => g.label).join() === 'World,Europe,Asia,Africa', 'regions in fixed order, empty regions dropped');
ok(geo.find(g => g.label === 'Asia').items.map(e => e.tour.id).join() === 'ancient,mid', 'tours sorted chronologically inside a region');
ok(geo.find(g => g.label === 'Europe').items.map(e => e.tour.id).join() === 'mid,modern', 'multi-region tour appears in each of its regions');
ok(TI.optionLabel(TI.entries(tours, m)[0]) === '10000 BCE · Ancient', 'option label format: ' + TI.optionLabel(TI.entries(tours, m)[0]));
ok(TI.formatYear(0) === '1 BCE' && TI.formatYear(1) === '1 CE', 'BCE/CE labels');
console.log('TOUR INDEX TESTS PASSED (' + n + ' assertions)');
