# v2.5 Batch 5: USA and Canada tours + tour menu

## New tours (all region "North America", validated like earlier batches)
Indigenous North America: Cahokia and the Haudenosaunee (5 chapters), Colonial America and the Revolution (6), Slavery, the Civil War and Reconstruction (4), Westward expansion and Indigenous removal (4), The United States 1929-1965: Depression, war and civil rights (5), New France and the British Conquest of Canada (5), Canada since Confederation (6).

## New UI: "Browse tours" menu
A panel above the tour library with two modes (remembered between visits):
- **By geography:** regions World, Europe, Middle East, Asia, Africa, North America, Latin America & Caribbean. Inside each region tours run oldest to newest. A tour can appear in several regions (for example the Mongol Empire appears under Asia, Europe and the Middle East).
- **Oldest to newest:** one list in era groups (Before 500 BCE, 500 BCE-500 CE, 500-1500 CE, 1500-1900 CE, 1900 CE onward, then Undated), oldest at the top.
Choosing a tour fills a second dropdown with its topics (chapters). "Open" starts the tour, optionally at the chosen chapter. The menu follows a tour started from the library cards. It uses native selects, so it is keyboard- and screen-reader-friendly.

Files: `js/tourindex.js` (sorting/grouping logic), `js/tourmenu.js` (UI), `tourmenu.css`, `data/tour-meta.js` (region for every tour; a tour's own `regions` field takes precedence). The app code (`js/app.js`) is unchanged: the menu uses the hooks it already exposes (`window.__chronos`).

## Install
1. Unzip over the repo root.  2. `python apply_batch5.py`  (idempotent).
3. `node test/test-batch5.js && node test/test-tourindex.js && node test/test-tourmenu.js` plus the earlier tests.  4. `python server.py`, hard refresh.
`test-tourindex.js` also checks that every tour file in `data/tours/` has a region, so run it after adding any tour.

## Judgement calls to review
- Region assignments are mine (for example Troy and Macedonia are listed under both Middle East and Europe; Christianity under World, Europe and Middle East). Edit `data/tour-meta.js` to change them.
- A tour's start year for sorting is its earliest dated chapter, with one override (Troy: c. 3000 BCE). Tours whose first chapter starts later than the topic's real beginning may sort later than expected.

## Limits
- Not tested in a real browser; tests use a simulated page.
- The USA/Canada set is selective. Not covered: the First World War and 1920s, WWII military history, Jim Crow beyond Reconstruction, women's suffrage, labour, immigration, the Cold War at home, Vietnam-era protest, anything after 1965 (US) or after 2015 (Canada), the War of 1812, Western Canada, Acadia, Loyalists, Indigenous nations beyond those named.
- Sources are encyclopedias, government archives and museums; no peer-reviewed article was read in full. Residential-school chapters rest on publisher and government descriptions of the TRC report, not the report itself.
