# Changes in v2
- New tour system: library by category with description, scope, span, chapter count and estimated minutes; play/pause, next/previous, restart, exit; chapter list with jump and progress; auto-play vs paused vs manual-exploration modes with a "Return to chapter" button.
- Chapter cards answer: what changed, where, why it matters, what is uncertain; plus subject type, evidence class, date kind, alternative interpretations and linked sources.
- Content model separated from rendering: `data/tours/*.js` (tours), `data/sources.js` (source register), `js/tourlogic.js` (validation and helpers). Add a tour by adding a file and a script tag.
- Validation at load: a tour with unknown sources, bad dates, bad cameras, or invalid features is hidden and logged instead of crashing.
- Feature layers for tour geometry with different treatments: solid = exact; dashed/translucent = approximate, regional or schematic; purple dashed = myth.
- Opt-in Myths & Mysteries layer with purple ring discovery markers (off by default), narrative cards, and a list of legends with no map location.
- Timeline range band shows each chapter's date range; undated chapters leave the timeline alone.
- Accessibility: keyboard arrows/Escape for tours, aria-live chapter card, focus outlines, skip link, reduced-motion support (jump instead of fly), higher-contrast colours.
- Preserved: all v1 features (timeline, play, year input, 44 sites, border snapshots) and the three v1 tours (converted, labelled lightly sourced).
