# v2.5 Batch 1

New tours (all validated: sources, dates, cameras, feature rules): Byzantium (6 chapters), Holy Roman Empire (5), Persia by dynasty (6).

Also: `?v=2.5` cache-busting on every local asset, a no-cache `server.py` (start scripts now use it), an on-page script-error message, and the Planned list updated.

Install: copy these files over the repo root (index.html, server.py, start.sh, start.bat, data/planned.js, data/sources-batch1.js, data/tours/byzantium.js, hre.js, persia.js, test/test-batch1.js), then run `node test/test.js && node test/smoke.js && node test/test-batch1.js`.

Limits: sources are encyclopedic excerpts, not full articles; several chapters note thin coverage (Parthians, HRE Reformation). Not tested in a real browser. Territory shown is the nearest earlier snapshot only.
