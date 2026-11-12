# Chronos 2.0 – 11,000 years of human history

Interactive map and non-linear timeline from Göbekli Tepe (~9600 BCE) to today, now with guided tours (political powers, religions, and an opt-in Myths & Mysteries layer). No build step, API keys or paid services.

## Run
Requires Python 3 (or any static file server) and an internet connection (MapLibre, the basemap and border data load from public servers).
- Windows: double-click `start.bat`
- macOS/Linux: `./start.sh`
- Open http://localhost:8000
- Alternative: `npx serve .`

## Use
- Open a tour from the library. Tours start **paused**; press Play for auto-play. Arrow keys move between chapters, Esc exits.
- Moving the timeline, typing a year or dragging the map switches to **manual exploration**; "Return to chapter" restores the chapter.
- The shaded band on the timeline is the chapter's date range. Chapters without a defensible date leave the timeline alone.
- Tick "Myths & Mysteries layer" to show purple markers for legends. Starting that tour enables the layer. Everything in it is legend or proposal, not verified history.
- Solid outlines = exact or attested. Dashed = approximate, regional or schematic. Purple = myth or speculation.

## Tests
`node test/test.js` (logic and data validation) and `node test/smoke.js` (simulated-DOM integration test with a stub map). `npm test` runs both. These do not run a real browser; see TEST_REPORT.md.

## Add a tour
Copy `data/tours/rome.js`, change the content, and add a `<script>` tag in `index.html`. Required per chapter: `id, title, text`, `date` (object or `null`), `camera` (object or `null`), `what/where/why/uncertain`, `sources` (IDs from `data/sources.js`) or `noSourcesReason`. Myth tours also need `status`. Run `node test/test.js` to validate. Dates are astronomical years (`B(509)` = 509 BCE = -508).

## Documentation
CONTENT_STATUS.md (what is done and planned), SOURCES.md (source register and limits), DATA_LICENSES.md, CHANGES.md, TEST_REPORT.md.
