# Test report

## Performed (automated, in Node 20; no real browser)
- `test/test.js` – 1,132 assertions: timeline mapping and monotonicity; BCE/CE formatting and parsing (no year 0; 1 BCE to 1 CE is one year); snapshot lookup for BCE and CE dates; validator accepts all 7 shipped tours and rejects missing sources, empty sources, reversed date ranges, bad cameras, unmapped features with geometry, exact myth placements and myth chapters with no status; undated and unmapped chapters exist and validate; unmapped features are skipped in GeoJSON; every registered source is used and well-formed; 44 sites valid.
- `test/smoke.js` – 83 checks against the real `app.js` using a simulated DOM and a stub map: library categories and 7 cards; planned list separate; discovery layer and myth toggle off by default; tour start/pause/resume/next/previous/jump/restart/exit; auto-play to the last chapter and stop; switching tours directly; year and slider synchronisation; manual change during a tour and "Return to chapter"; typed years (BCE, invalid); keyboard arrows/Escape and arrows ignored inside inputs; layer cleanup on chapter change and exit; undated/unmapped chapter (no camera move, timeline unchanged, border overlay cleared); myth tour opt-in, toggling the layer off exits the tour; discovery card with "illustrative placement"; regression on site detail and the three v1 tours; reduced motion uses `jumpTo` and never `flyTo`; failed network (basemap and borders) with tours still working; app without MapLibre; tour with a missing source is rejected and gets no card.

## Not performed
- No real browser run. I could not verify that MapLibre accepts every style expression I used (`geometry-type` filters, `in` with literal arrays, data-driven circle opacity), how the map looks, or label/overlap legibility.
- No live fetch of the OpenFreeMap style or the historical-basemaps GeoJSON, so I did not check that the snapshot file names listed in `timeline.js` all exist, nor that those files contain the properties the code expects.
- No real mobile device, screen reader, contrast measurement or keyboard test in a browser. Responsive CSS and focus styles are written but visually unchecked.
- Coordinates and the framing of every historical claim were written from the sources' excerpts but not independently verified; many coordinates are labelled approximate.

## Known limitations
See CONTENT_STATUS.md and SOURCES.md.
