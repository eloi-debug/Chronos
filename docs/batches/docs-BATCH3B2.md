# v2.5 Batch 3B-2

Tours: **Troy: legend and archaeology** (6 chapters, political), **Greek and Roman religion** (6), **Mesopotamian religion and the Enuma Elish** (5), **The Mahabharata: epic, tradition and evidence** (5).

## Install
1. Unzip over the repo root. 2. `python apply_batch3b2.py` (idempotent; also empties the Planned list and hides its box). 3. `node test/test-batch3b2.js` plus the earlier test files. 4. `python server.py`, hard refresh.

## How legend, text and evidence are separated
- Troy: legend (Homer, Virgil) / excavation history / dated layers / Hittite documents / open questions / later town are separate chapters with different evidence classes.
- Enuma Elish: story, composition date (with 3 alternatives listed), manuscript dates, and the festival link are separate chapters; the text-festival link is flagged as debated.
- Mahabharata: traditional setting, scholarly composition (500 BCE–400 CE), the war's date (kept off the timeline, with alternatives) and archaeology (Painted Grey Ware, 1200–600 BCE) are separate chapters. Traditional places are drawn in the purple 'myth' style, never exact.
- Greek and Roman religion: undated chapters where sources give no dates; the Delphi chamber case shows ancient testimony versus excavation.

## Limits
- Sources are encyclopedia excerpts. The Mahabharata archaeology chapters rely on several unrated websites and one Wikipedia article; treat them as pointers, not settled findings.
- The Bhagavadgita chapter is only a short note; Gita content and later interpretation are not covered.
- The Troy chapter on the Hellenistic and Roman town starts at a date I approximated.
- Religion tours that carry a `status` field show it in data but the card only displays the myth warning for the Myths & Mysteries category.
- Not tested in a real browser.
