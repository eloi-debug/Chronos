(function () {
  'use strict';
  const W = window, C = W.__chronos, TI = W.TourIndex;
  if (!C || !Array.isArray(C.tours) || !TI) { if (W.console) console.warn('Tour menu not started: app hooks missing.'); return; }
  const META = W.TOUR_META || {};
  const lib = document.getElementById('libraryView');
  if (!lib || !lib.parentNode) return;

  function h(tag, props, ...kids) {
    const e = document.createElement(tag);
    Object.keys(props || {}).forEach(k => {
      const v = props[k]; if (v === false || v == null) return;
      if (k === 'class') e.className = v; else if (k.startsWith('on')) e.addEventListener(k.slice(2), v); else e.setAttribute(k, v === true ? '' : v);
    });
    kids.flat().forEach(c => { if (c == null || c === false) return; e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }

  let mode = 'geo';
  try { const saved = W.localStorage && W.localStorage.getItem('chronos.menuMode'); if (saved === 'geo' || saved === 'chrono') mode = saved; } catch (e) { /* storage unavailable */ }

  const selTour = h('select', { id: 'tmTour' });
  const selChap = h('select', { id: 'tmChapter', disabled: true });
  const info = h('p', { class: 'small', id: 'tmInfo' });
  const go = h('button', { id: 'tmGo', disabled: true }, 'Open');
  const radios = ['geo', 'chrono'].map(v => h('input', Object.assign({ type: 'radio', name: 'tmMode', id: 'tmMode-' + v, value: v }, v === mode ? { checked: true } : {})));
  const wrap = h('section', { id: 'tourMenu', class: 'tourmenu', 'aria-label': 'Browse tours by geography or time' },
    h('h2', {}, 'Browse tours'),
    h('div', { role: 'radiogroup', 'aria-label': 'Group tours by', class: 'tmmodes' },
      h('label', { for: 'tmMode-geo' }, radios[0], ' By geography'),
      h('label', { for: 'tmMode-chrono' }, radios[1], ' Oldest to newest')),
    h('label', { for: 'tmTour' }, 'Tour'), selTour,
    h('label', { for: 'tmChapter' }, 'Topic (chapter)'), selChap,
    info, go);
  lib.parentNode.insertBefore(wrap, lib);

  const byId = id => C.tours.find(t => t.id === id);
  function spanText(t) {
    const s = TI.spanOf(t, META);
    return s.start === null ? 'undated' : TI.formatYear(s.start) + (s.end !== null && s.end !== s.start ? ' – ' + TI.formatYear(s.end) : '');
  }
  function fillTours() {
    const keep = selTour.value;
    selTour.replaceChildren(h('option', { value: '' }, '— choose a tour —'));
    const groups = mode === 'geo' ? TI.groupByGeography(C.tours, META) : TI.groupChronologically(C.tours, META);
    groups.forEach(g => selTour.appendChild(h('optgroup', { label: g.label }, g.items.map(e => h('option', { value: e.tour.id }, TI.optionLabel(e))))));
    if (keep && byId(keep)) selTour.value = keep;
  }
  function fillChapters() {
    const t = byId(selTour.value);
    selChap.replaceChildren();
    if (!t) { selChap.disabled = true; go.disabled = true; info.textContent = ''; return; }
    selChap.appendChild(h('option', { value: '0' }, 'Start at chapter 1'));
    t.chapters.forEach((c, i) => selChap.appendChild(h('option', { value: String(i) }, (i + 1) + '. ' + c.title)));
    selChap.disabled = false; go.disabled = false;
    info.textContent = t.description + ' Scope: ' + t.scope + ' · ' + spanText(t) + ' · ' + t.chapters.length + ' chapters.';
  }
  function open() {
    const t = byId(selTour.value); if (!t) return;
    const idx = Number(selChap.value) || 0;
    C.startTour(t.id);
    if (idx > 0) C.goChapter(idx);
  }
  function sync() {
    const cur = C.state && C.state.tour; if (!cur) return;
    if (selTour.value !== cur.id) { selTour.value = cur.id; fillChapters(); }
    if (selChap.value !== String(C.state.idx) && W.document.activeElement !== selChap) selChap.value = String(C.state.idx);
  }

  function setMode(m) {
    if (m !== 'geo' && m !== 'chrono') return;
    mode = m;
    radios.forEach(r => { r.checked = r.value === m; });
    try { W.localStorage && W.localStorage.setItem('chronos.menuMode', mode); } catch (e) { /* ignore */ }
    fillTours(); fillChapters();
  }
  radios.forEach(r => r.addEventListener('change', () => setMode(r.value)));
  selTour.addEventListener('change', fillChapters);
  go.addEventListener('click', open);
  selChap.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });

  fillTours(); fillChapters();
  const timer = W.setInterval ? W.setInterval(sync, 500) : null;
  W.__tourmenu = { fillTours, fillChapters, open, sync, setMode, elements: { selTour, selChap, go, info }, timer };
})();
