# v2.5 Batch 2

Tours: **Weimar Republic to the Nazi dictatorship and its collapse** (8 chapters) and **The British Empire** (8 chapters). Both validated: every chapter has sources, a date or explicit null, a camera, and the what/where/why/uncertain fields.

## Install
1. Copy these files into the repo root, keeping folders.
2. Run `python apply_batch2.py` (adds the script tags to `index.html`, removes the two finished items from `data/planned.js`; safe to run twice).
3. Run `node test/test.js && node test/smoke.js && node test/test-batch1.js && node test/test-batch2.js`.

## Framing decisions
- Nazi tour: the persecution and genocide are chapters in their own right, stated plainly with counts and sources. Territorial expansion is described as annexation and aggression, never as achievement. No imagery. Camp locations are deliberately not mapped, because I did not read a source giving them.
- British Empire tour: includes the violence and exploitation named in the sources (Plassey by betrayal, slavery with compensation to owners, partition displacement), and the final chapter lists plainly what is left out.

## Known limits
- Sources are encyclopedia and museum excerpts, not full articles; four are marked unrated.
- Not tested in a real browser.
- British Empire coverage is selective (India, abolition, Africa, peak, partition, Suez, Hong Kong). Missing: American colonies, Ireland, Opium Wars, settler colonies and Indigenous peoples, Caribbean economies, famines, Middle East mandates, the Commonwealth.
- Nazi tour omits resistance, occupied peoples' experience, other persecuted groups in detail, trials and denazification.
