// DOM-level test of js/tourmenu.js with a stub document. Run: node test/test-tourmenu.js
const assert = require('assert'), fs = require('fs'), path = require('path'), vm = require('vm');
let n = 0; const ok = (c, m) => { assert(c, m); n++; };
class Node {
  constructor(tag) { this.tag = tag; this.children = []; this.attrs = {}; this.listeners = {}; this.value = ''; this._text = ''; this.disabled = false; this.parentNode = null; this.className = ''; this.checked = false; }
  set textContent(v) { this._text = String(v); this.children = []; } get textContent() { return this._text + this.children.map(c => c.textContent).join(''); }
  appendChild(c) { c.parentNode = this; this.children.push(c); return c; }
  replaceChildren(...k) { this.children = []; k.forEach(c => this.appendChild(c)); }
  insertBefore(n2, ref) { const i = this.children.indexOf(ref); n2.parentNode = this; if (i < 0) this.children.push(n2); else this.children.splice(i, 0, n2); return n2; }
  setAttribute(k, v) { this.attrs[k] = v; if (k === 'disabled') this.disabled = true; if (k === 'checked') this.checked = true; if (k === 'value') this.value = v; }
  addEventListener(e, f) { (this.listeners[e] = this.listeners[e] || []).push(f); }
  fire(e, ev = {}) { (this.listeners[e] || []).forEach(f => f(ev)); }
  find(p) { const r = []; (function w(x) { if (p(x)) r.push(x); x.children.forEach(w); })(this); return r; }
}
const panel = new Node('aside'), lib = new Node('section'); panel.appendChild(lib);
const doc = { getElementById: id => (id === 'libraryView' ? lib : null), createElement: t => new Node(t), createTextNode: t => { const x = new Node('#text'); x._text = t; return x; }, activeElement: null };
const calls = [];
const tours = [
  { id: 'old', title: 'Old Tour', description: 'd1', scope: 's1', span: 'x', regions: ['Asia'], chapters: [{ id: 'a', title: 'First', date: { start: -2000, end: -1500 } }, { id: 'b', title: 'Second', date: { start: -1400, end: -1000 } }] },
  { id: 'new', title: 'New Tour', description: 'd2', scope: 's2', span: 'x', regions: ['Europe'], chapters: [{ id: 'c', title: 'Only', date: { start: 1900, end: 1950 } }] },
  { id: 'both', title: 'Both Tour', description: 'd3', scope: 's3', span: 'x', regions: ['Europe', 'Asia'], chapters: [{ id: 'd', title: 'Mid', date: { start: 800, end: 900 } }] }
];
const state = { tour: null, idx: 0 };
const ctx = { console, document: doc, TOUR_META: {}, setInterval: () => 0, localStorage: { _d: {}, getItem(k) { return this._d[k] || null; }, setItem(k, v) { this._d[k] = v; } },
  __chronos: { tours, state, startTour: id => { calls.push(['start', id]); state.tour = tours.find(t => t.id === id); state.idx = 0; }, goChapter: i => { calls.push(['go', i]); state.idx = i; } } };
ctx.window = ctx; ctx.self = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js/tourindex.js'), 'utf8'), ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js/tourmenu.js'), 'utf8'), ctx, { filename: 'tourmenu.js' });
const M = ctx.__tourmenu, E = M.elements;
ok(panel.children[0].attrs.id === 'tourMenu' && panel.children[1] === lib, 'menu inserted before the library');
const opts = () => E.selTour.find(x => x.tag === 'option').map(o => o.textContent);
const groups = () => E.selTour.find(x => x.tag === 'optgroup').map(g => g.attrs.label);
ok(groups().join() === 'Europe,Asia', 'geography groups (default): ' + groups().join());
ok(opts().filter(t => /Both/.test(t)).length === 2, 'multi-region tour listed in each region');
ok(E.go.disabled === true && E.selChap.disabled === true, 'open disabled until a tour is chosen');
// choose a tour -> chapters appear
E.selTour.value = 'old'; E.selTour.fire('change');
ok(E.selChap.disabled === false && E.go.disabled === false, 'chapter select enabled');
ok(E.selChap.find(x => x.tag === 'option').map(o => o.textContent).join('|') === 'Start at chapter 1|1. First|2. Second', 'chapter list (topics)');
ok(/d1/.test(E.info.textContent) && /2 chapters/.test(E.info.textContent) && /2001 BCE – 1001 BCE/.test(E.info.textContent), 'info line: ' + E.info.textContent);
// open at chapter 2
E.selChap.value = '1'; E.go.fire('click');
ok(calls.length === 2 && calls[0][0] === 'start' && calls[0][1] === 'old' && calls[1][0] === 'go' && calls[1][1] === 1, 'open starts the tour then jumps to the chosen chapter');
calls.length = 0; E.selChap.value = '0'; E.go.fire('click');
ok(calls.length === 1 && calls[0][0] === 'start', 'chapter 1 needs no jump');
// switch to chronological
M.setMode('chrono');
ok(groups().join('|') === 'Before 500 BCE|500 – 1500 CE|1900 CE onward', 'era groups: ' + groups().join('|'));
const chronoOpts = opts().filter(t => t.indexOf('—') < 0);
ok(chronoOpts[0].startsWith('2001 BCE') && /Old Tour$/.test(chronoOpts[0]) && /New Tour$/.test(chronoOpts[chronoOpts.length - 1]), 'oldest first, newest last: ' + chronoOpts.join(' / '));
ok(E.selTour.value === 'old', 'selection survives a mode change');
// sync with a tour started elsewhere (e.g. from a library card)
state.tour = tours[1]; state.idx = 0; M.sync();
ok(E.selTour.value === 'new' && E.selChap.value === '0', 'menu follows a tour started elsewhere');
// no tour cleared: sync does nothing
state.tour = null; M.sync(); ok(true, 'sync with no active tour is harmless');
// choosing the blank option resets chapters
E.selTour.value = ''; E.selTour.fire('change');
ok(E.selChap.disabled === true && E.go.disabled === true && E.info.textContent === '', 'blank choice clears chapters');
// opening with nothing selected does nothing
calls.length = 0; M.open(); ok(calls.length === 0, 'open with no tour does nothing');
// persisted mode
ok(ctx.localStorage._d['chronos.menuMode'] === 'chrono', 'mode is remembered');
console.log('TOUR MENU DOM TESTS PASSED (' + n + ' checks)');
