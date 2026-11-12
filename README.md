# Chronos

An interactive map and non-linear timeline of human history, from Göbekli Tepe (about 9600 BCE) to today, with **54 guided tours (about 315 chapters)**. Each chapter says what changed, where, why it matters and what is uncertain, and links its sources.

## Run it
Needs Python 3 (or any static file server) and an internet connection (the map library, basemap and border data load from public servers).

    python server.py        # or: py server.py   (Windows), or ./start.sh, start.bat
    # then open http://localhost:8000 and press Ctrl+Shift+R once

`server.py` sends no-cache headers so you never see stale files after an update.

## Use it
- **Browse tours** (top of the panel): choose a tour by geography or oldest to newest, then pick a topic (chapter) and press Open.
- **Tours** start paused. Play auto-advances; moving the timeline or map switches to manual exploration, and "Return to chapter" restores the chapter.
- **Timeline**: non-linear slider, a year box (`500 BCE`, `1492`) and play. Borders shown are the nearest earlier snapshot, never interpolated.
- **Myths & Mysteries** layer is off by default; it holds legends and proposals, not verified history.

## How it is built
No build step and no dependencies beyond MapLibre loaded from a CDN.

    index.html, style.css, tourmenu.css
    js/        app.js (map and UI), timeline.js, tourlogic.js (validation), tourindex.js + tourmenu.js (tour menu)
    data/      sites.js, sources*.js (source register), tour-meta.js (regions), tours/*.js (one file per tour)
    test/      test.js, smoke.js, test-*.js
    tools/     run-tests.js, make-sources-md.js, batch-installers/ (historical)
    docs/      CONTENT_STATUS.md, SOURCES.md (generated), batches/, history/

Dates are astronomical years (1 BCE = 0, so 509 BCE = -508; use `B(509)` in tour files).

## Add a tour
1. Copy a file in `data/tours/`, edit it, and add a `<script>` tag for it in `index.html` (and a `regions` array in the tour, or an entry in `data/tour-meta.js`).
2. Add any new sources to a `data/sources-*.js` file and load it before the tour.
3. Every chapter needs `sources` (or `noSourcesReason`), `date` and `camera` (an object or `null`), and the `what / where / why / uncertain` fields. Run `npm test` (or `node tools/run-tests.js`); a tour that fails validation is hidden at runtime.

## Test
    node tools/run-tests.js     # same as: npm test

Tests validate every tour and source, BCE/CE conversions, the tour menu, and the app against a simulated page. **They do not run a real browser.**

## Honest limits
Sources are mostly encyclopedias and government, museum or university pages; some are marked unrated. Many tours are outlines and say so in their own scope notes. Sensitive tours (the Holocaust, the Armenian Genocide, communism, empire, religion) state numbers as ranges and separate faith claims from evidence, but have not been reviewed by specialists. Coordinates are approximate and many regions are broad circles, not borders. See `docs/CONTENT_STATUS.md`.

## Licences
Border data (historical-basemaps) is GPL-3.0; basemap data is OpenStreetMap (ODbL); MapLibre is BSD-3-Clause. See `DATA_LICENSES.md`. Tour text was written for this project and paraphrases its linked sources.
