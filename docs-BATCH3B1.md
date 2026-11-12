# v2.5 Batch 3B-1 (religions)

Tours: **Christianity (with the Crusades)** 7 chapters, **Islam: origins and first caliphates (to 750 CE)** 5, **Hindu traditions** 5, **Daoism** 5. All validated: sources, dates (or explicit null), cameras (or explicit null), what/where/why/uncertain.

## Install
1. Unzip over the repo root. 2. `python apply_batch3b1.py` (safe to run twice). 3. `node test/test-batch3b1.js` plus the earlier test files. 4. `python server.py`, hard refresh.

## How faith and history are separated
Each chapter states traditional or faith claims as such ("said to have", "Muslim tradition places"), keeps texts, practices and political sponsorship distinct, and uses the evidence classes `traditional` and `disputed` where scholars disagree. None of these tours judges religious truth.

## Honest limits
- Sources are encyclopedia excerpts (some unrated). Several chapters are short and say what they omit.
- Islam stops at 750 CE: no Sunni–Shia history, Abbasid era, Fatimids, Ottomans (separate tour), or spread to Africa and Asia.
- Hindu traditions: no bhakti, temples, philosophical schools, or spread abroad; the Mahabharata/Ramayana are not covered (Mahabharata tour planned).
- Daoism stops at the Tang; no ritual, alchemy, or modern Daoism.
- Christianity: no Orthodoxy after 1054, missions outside Europe, or modern Christianity; the Crusades are covered to 1291 and only the Levant campaigns. The Jerusalem 1099 massacre rests on two non-Britannica sources.
- Not tested in a real browser.

## Still to come (Batch 3B-2): Troy, Greek and Roman religion, Mesopotamian religion and the Enuma Elish, the Mahabharata contexts.
