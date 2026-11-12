(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Timeline = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  // Years are astronomical: 1 BCE = 0, 2 BCE = -1, 1 CE = 1.
  const ANCHORS = [[0, -9600], [250, -3000], [500, -500], [620, 1], [780, 1000], [900, 1800], [1000, 2026]];
  const MIN_POS = 0, MAX_POS = 1000;
  const BC = [10000, 8000, 5000, 4000, 3000, 2000, 1500, 1000, 700, 500, 400, 323, 300, 200, 100, 1];
  const AD = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1279, 1300, 1400, 1492, 1500,
    1530, 1600, 1650, 1700, 1715, 1783, 1800, 1815, 1878, 1880, 1900, 1914, 1920, 1930, 1938, 1945, 1960, 1994, 2000, 2010];
  const SNAPSHOTS = BC.map(n => 1 - n).concat(AD);

  function posToYear(p) {
    p = Math.max(MIN_POS, Math.min(MAX_POS, p));
    for (let i = 1; i < ANCHORS.length; i++) {
      const [p0, y0] = ANCHORS[i - 1], [p1, y1] = ANCHORS[i];
      if (p <= p1) return Math.round(y0 + (y1 - y0) * (p - p0) / (p1 - p0));
    }
    return ANCHORS[ANCHORS.length - 1][1];
  }
  function yearToPos(y) {
    y = Math.max(ANCHORS[0][1], Math.min(ANCHORS[ANCHORS.length - 1][1], y));
    for (let i = 1; i < ANCHORS.length; i++) {
      const [p0, y0] = ANCHORS[i - 1], [p1, y1] = ANCHORS[i];
      if (y <= y1) return Math.round(p0 + (p1 - p0) * (y - y0) / (y1 - y0));
    }
    return MAX_POS;
  }
  function formatYear(y) { return y <= 0 ? (1 - y) + ' BCE' : y + ' CE'; }
  function parseYear(str) {
    const m = /^\s*(-?)(\d+)\s*(bce|bc|ce|ad)?\s*$/i.exec(String(str));
    if (!m) return null;
    const n = parseInt(m[2], 10), suf = (m[3] || '').toLowerCase();
    if (n === 0) return null;
    if (suf === 'bce' || suf === 'bc' || m[1] === '-') return 1 - n;
    return n;
  }
  function snapshotFor(y) {
    let best = SNAPSHOTS[0];
    for (const s of SNAPSHOTS) if (s <= y) best = s;
    return best;
  }
  function snapshotFile(s) { return s <= 0 ? 'world_bc' + (1 - s) + '.geojson' : 'world_' + s + '.geojson'; }
  return { ANCHORS, MIN_POS, MAX_POS, SNAPSHOTS, posToYear, yearToPos, formatYear, parseYear, snapshotFor, snapshotFile };
});
