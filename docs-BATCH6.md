# v2.5 Batch 6: Old and New Testament places (religion & beliefs)

Two tours, 7 chapters each, category "religion", region Middle East (the New Testament tour also lists Europe). Both appear in the Browse tours menu automatically because each tour carries its own `regions`.

## What each tour shows
- **The Old Testament (Hebrew Bible): key events and places:** Eden and the Flood (Eden unmapped), the patriarchs, the Exodus and Mount Sinai, settlement of the land, David, Solomon and the first Temple, the two kingdoms and the Assyrian conquest, the Babylonian exile and return.
- **The New Testament: key events and places:** the Roman setting, Bethlehem and Nazareth, Galilee and Capernaum, Jerusalem (the crucifixion), Paul's journeys from Damascus to Rome, and the destruction of Jerusalem in 70 CE, plus a scope note.

## How faith, tradition and history are separated
- Each chapter says what the text states, what tradition holds and what historians or archaeologists can say. Statements of belief ("according to the Gospels", "Christian tradition") are attributed, not asserted.
- The resurrection and miracles are reported as faith claims. The tour records that Jesus's disciples came to believe he had risen, as Britannica puts it, and takes no position.
- Locations carry the evidence class they deserve: `attested` for places excavation has identified (Capernaum, Samaria), `traditional` for identifications by pilgrimage tradition (Bethlehem's Nativity grotto, the Holy Sepulchre, Jebel Musa), `disputed` for rival proposals (Gordon's Calvary, Kadesh-barnea). No single site is drawn for Eden, which is listed as unmapped. Mapped markers are approximate.
- Competing views are listed side by side: Sinai's location, the united monarchy, the Exodus, Golgotha, and Jesus's birthplace (Bethlehem or Nazareth).

## Install
1. Unzip over the repo root.  2. `python apply_batch6.py` (idempotent).  3. `node test/test-batch6.js` and the earlier tests, including `node test/test-tourindex.js`.  4. `python server.py`, hard refresh.

## Limits
- Sources: encyclopedias and archaeology societies, with several unrated pages (flagged in the chapters). I did not read the biblical texts as sources; where an itinerary comes only from the text (the patriarchs' route), it is not mapped.
- Not covered: the Gospels' differences and dating, canon formation, Revelation, the Maccabean and Hellenistic periods, Jewish history after 70 CE, and Islamic or Jewish readings of these places.
- This tour does not claim to settle any theological question. It was not reviewed by a theologian or historian of religion, and I would recommend that before wider use.
- Not tested in a real browser.
