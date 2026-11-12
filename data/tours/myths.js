(function () {
  const { B, pt, circ } = window.TourKit;
  const MYTH_NOTE = "Myths & Mysteries layer: stories and proposals, not verified history.";
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "myths-mysteries",
    category: "myth",
    title: "Myths & Mysteries: Atlantis, Hyperborea, Asgard and the flood",
    description: "Four famous legends traced back to their texts. Each chapter separates the story, the sources, proposed locations and what evidence exists. Placements are labelled proposals or illustrations, and some stories have no map location at all.",
    scope: "Mediterranean, Black Sea, Mesopotamia, northern Europe (text-based)",
    span: "Texts from c. 1650 BCE to c. 1220 CE; stories mostly undated",
    tags: ["Atlantis", "Hyperborea", "Asgard", "flood", "mythology"],
    chapters: [
      {
        id: "how-to-read", title: "How to read this layer", subject: "Editorial note",
        status: "symbolic", date: null, camera: null, borders: false, features: [], relatedSites: [],
        text: "Everything in this tour is a story or a proposal about a story. Each chapter carries one of five status labels: historical (a real person, place or event), disputed (scholars disagree), hypothetical (a proposal without agreed evidence), symbolic (told to make a point) or mythological (a traditional narrative). Markers are purple and dashed, never exact, and a chapter with no defensible place or date has neither.",
        what: "Explains the labels and map conventions used in the following chapters.",
        where: "Not mapped.",
        why: "Legends are interesting partly because they blur the line between myth and memory, so the layer keeps that line visible.",
        uncertain: "These are this app's own editorial labels, not a scholarly classification.",
        evidence: "traditional", sources: [], noSourcesReason: "Editorial note describing this app's labels; it makes no historical claims."
      },
      {
        id: "atlantis-text", title: "Atlantis: what Plato wrote", subject: "Platonic dialogue (Timaeus and Critias)",
        status: "symbolic", date: { start: B(360), end: B(360), kind: "composition, approximate" }, camera: { center: [-5.6, 36.0], zoom: 5 }, borders: false,
        text: "The only primary sources for Atlantis are two dialogues by Plato, Timaeus and Critias, written about 360 BCE. In them, Egyptian priests tell the Athenian Solon of an island larger than Asia Minor and Libya combined, beyond the Pillars of Hercules. Its empire attacked Athens and failed; then earthquakes and floods swallowed the island in a day and a night. Critias breaks off unfinished.",
        what: "Introduces the story and its source.",
        where: "Beyond the Pillars of Hercules (the Strait of Gibraltar), according to the text.",
        why: "Many scholars read it as a parable about a powerful, ambitious society brought down by its own hubris and about how an ordered state compares with a corrupt one.",
        uncertain: "Plato's characters insist the story is real history, but this is part of a dialogue. Aristotle reportedly thought Plato invented it, while Crantor is cited as an ancient writer who took it as fact.",
        evidence: "traditional",
        features: [pt("Strait of Gibraltar (the text's reference point)", -5.6, 35.97, "site", "approximate", "attested", "The Pillars of Hercules are usually identified with the Strait of Gibraltar. This marks the text's reference point, not a claim about Atlantis.")],
        relatedSites: [], sources: ["brit-atlantis", "brit-critias", "wiki-atlantis", "arcus-timaeus"],
        alternatives: [
          { label: "Philosophical allegory (majority view)", text: "Britannica says it is widely considered a philosophical allegory rather than historical fact.", sources: ["brit-critias", "brit-atlantis"] },
          { label: "Believed literally", text: "Medieval European writers who received the tale from Arab geographers believed it was true, and later writers tried to identify it with an actual country.", sources: ["brit-atlantis"] }
        ]
      },
      {
        id: "atlantis-places", title: "Atlantis: proposed places and inspirations", subject: "Proposals, not findings",
        status: "hypothetical", date: null, camera: { center: [0.0, 36.0], zoom: 3.6 }, borders: false,
        text: "Plato's text puts Atlantis in the Atlantic, but readers have proposed many other places. One scholarly suggestion is that the story's sudden loss of an island may echo the eruption of Minoan Santorini. Another is that the aggressive island empire stands for a military power Plato knew, such as Persia or Carthage. Archaeologists and classical philologists broadly treat it as a utopian invention.",
        what: "Compares attributable proposals for the story's origins.",
        where: "The purple circle is an illustrative placement of 'beyond the Pillars of Hercules'. Santorini is a proposed association.",
        why: "Mapping a legend shows how much of its geography comes from the text and how much from later readers.",
        uncertain: "None of the sources reviewed document archaeological evidence of an Atlantean civilisation. The Santorini idea is a proposal about inspiration, not a claim that Atlantis was Santorini.",
        evidence: "speculative",
        features: [
          circ("Atlantic, beyond Gibraltar (illustrative placement)", -16.0, 36.0, 700, "myth", "illustrative", "speculative", "Illustrative placement of Plato's 'beyond the Pillars of Hercules'. No coordinates are given in the text and no site is proposed here."),
          pt("Santorini (proposed association)", 25.4, 36.4, "myth", "approximate", "speculative", "Proposal that the sinking of Atlantis echoes the Minoan eruption of Thera/Santorini (ThoughtCo). This association is not established.")],
        discovery: { anchor: [-16.0, 36.0], label: "Atlantis (illustrative placement, not a site)" },
        alternatives: [
          { label: "Santorini eruption as inspiration", text: "ThoughtCo says the explosive disappearance of an island might refer to the eruption of Minoan Santorini.", sources: ["thoughtco-atlantis"] },
          { label: "Political allegory", text: "The aggressive 'barbarian' island empire may refer to Persia or Carthage, both imperial military powers. Unmapped.", sources: ["thoughtco-atlantis"] },
          { label: "Scholarly consensus", text: "Wikipedia cites archaeologists and classical philologists who read Atlantis as utopia or metaphor rather than an actual place.", sources: ["wiki-atlantis"] }
        ],
        sources: ["brit-atlantis", "thoughtco-atlantis", "wiki-atlantis"]
      },
      {
        id: "hyperborea-sources", title: "Hyperborea: the people beyond the north wind", subject: "Greek mythic ethnography",
        status: "mythological", date: { start: B(450), end: B(450), kind: "earliest detailed account, approximate" }, camera: { center: [25.27, 37.4], zoom: 5 }, borders: false,
        text: "Hyperboreans were a mythical people in the far north, beloved of Apollo, who lived to a great age in happiness. The earliest surviving detailed account is in Herodotus (Histories, Book 4), written about 450 BCE. He relays an older poem (the lost Arimaspea by Aristeas) describing a chain of peoples, and the sanctuary on Delos was said to receive offerings that passed through that chain. Herodotus himself doubted the people existed.",
        what: "Gathers the ancient references.",
        where: "Delos is the one real-world place attached to the tradition, through an offering ritual.",
        why: "The story links the Greek world to its unknown north and to the cult of Apollo.",
        uncertain: "Modern scholars treat the myth as an amalgam of utopian ideas, 'edge of the earth' stories, the cult of Apollo and exaggerated reports of phenomena in northern Europe such as the midnight sun.",
        evidence: "mythological",
        features: [pt("Delos (Apollo's sanctuary)", 25.2667, 37.3967, "site", "exact", "attested", "Attested sanctuary. Greek tradition connects it to Hyperborean offerings; the offerings themselves are a story.")],
        discovery: { anchor: [25.2667, 37.3967], label: "Hyperborea (the one real place in its tradition: Delos)" },
        relatedSites: [], sources: ["wiki-hyperborea", "myth-atlas-hyperborea"]
      },
      {
        id: "hyperborea-places", title: "Hyperborea: competing locations", subject: "Ancient placements, none confirmed",
        status: "disputed", date: null, camera: { center: [40.0, 50.0], zoom: 3 }, borders: false,
        text: "Ancient writers disagreed on where Hyperborea lay. Pindar is reported to place it near the Danube, Hecataeus of Abdera on an island beyond the Celts, Herodotus in northeast Asia, and Pomponius Mela near the Arctic. Modern esoteric writers put it at the North Pole. No Hyperborean city has been found.",
        what: "Maps the competing proposals as broad regions.",
        where: "Two regions are mapped; the island beyond the Celts and the Arctic are not mapped because no defensible area exists.",
        why: "Every location depends on which text one reads, which shows that the places moved as geographic knowledge changed.",
        uncertain: "Herodotus's chain runs through the Issedones, estimated to have lived in the Kazakh steppe, and the Hyperboreans lie beyond the one-eyed Arimaspians and gold-guarding griffins, so the Kazakh steppe is a waypoint, not Hyperborea.",
        evidence: "speculative",
        features: [
          circ("Danube region (Pindar, as reported)", 22.0, 45.0, 350, "myth", "regional", "speculative", "Placement attributed to Pindar by a secondary source; broad region only."),
          circ("Issedones, Kazakh steppe (Herodotus's waypoint)", 68.0, 49.0, 450, "myth", "regional", "speculative", "Waypoint in the chain described by Aristeas; Hyperborea lies beyond it. Broad region."),
          { name: "Island beyond the Celts (Hecataeus)", kind: "myth", precision: "unmapped", evidence: "speculative", note: "Hecataeus of Abdera's placement; no area can be defended, so it is not drawn.", geometry: null },
          { name: "Arctic (Pomponius Mela) and polar claims", kind: "myth", precision: "unmapped", evidence: "speculative", note: "Not drawn: no evidence connects Hyperborea to a specific Arctic location.", geometry: null }],
        alternatives: [
          { label: "Pindar: near the Danube", text: "Greek Reporter says Pindar explicitly connects Hyperborea with the Danube region.", sources: ["greekreporter-hyperborea"] },
          { label: "Herodotus: far northeast", text: "Wikipedia notes Herodotus assumed Hyperborea lay somewhere in Northeast Asia.", sources: ["wiki-hyperborea"] },
          { label: "Other ancient and modern placements", text: "Next Level Soul lists Hecataeus of Abdera (an island beyond the Celts), Pomponius Mela (near the Arctic) and modern esoteric writers (the North Pole), and says no Hyperborean city has been found.", sources: ["nextlevelsoul-hyperborea"] }
        ],
        relatedSites: [], sources: ["wiki-hyperborea", "greekreporter-hyperborea", "myth-atlas-hyperborea", "nextlevelsoul-hyperborea"]
      },
      {
        id: "asgard", title: "Asgard: the home of the gods", subject: "Old Norse mythology (Prose Edda)",
        status: "mythological", date: null, camera: null, borders: false,
        text: "In Norse mythology Asgard is the enclosure of the Æsir, the gods. The fullest source is the Prose Edda, an Icelandic textbook compiled by Snorri Sturluson around 1220 CE, drawing on older poems that survive in the Poetic Edda. In its Gylfaginning section, King Gylfi travels to Asgard in disguise. As a Christian, Snorri framed the gods as human migrants from Troy in Asia whose descendants were mistaken for gods.",
        what: "A narrative card about a mythic realm.",
        where: "Not mapped. The text describes a realm of the gods, and the only 'real-world' link is Snorri's own medieval claim of Trojan origins.",
        why: "Placing Asgard on a map would imply a real location that the sources do not provide.",
        uncertain: "Snorri's account is the work of a named author around 1220 CE, centuries after the pre-Christian beliefs it describes. It is not an eyewitness or archaeological record, and no source reviewed connects Asgard to an excavated site.",
        evidence: "mythological", features: [], relatedSites: [],
        sources: ["wiki-prose-edda", "norsegods-edda"]
      },
      {
        id: "flood-texts", title: "Flood traditions: Mesopotamian texts", subject: "Mesopotamian literary tradition",
        status: "mythological", date: { start: B(1646), end: B(1626), kind: "dated Atra-Hasis tablet" }, camera: { center: [44.0, 33.0], zoom: 5 }, borders: false,
        text: "Mesopotamia preserved three flood stories: the Sumerian Flood Story, the Atrahasis Epic and Tablet XI of the Epic of Gilgamesh. In Atra-Hasis the gods grow annoyed at human noise, send a flood, and Enki (Ea) has Atra-Hasis build a boat. In Gilgamesh XI the survivor Utnapishtim tells how he became immortal. A tablet of Atra-Hasis dated 1646–1626 BCE is known, and the Gilgamesh standard version is traditionally attributed to the scribe Sîn-lēqi-unninni.",
        what: "Places the stories in their textual history.",
        where: "The region of Mesopotamia where these tablets were written.",
        why: "Wikipedia reports that many scholars think the Gilgamesh flood episode was added to Tablet XI using the Atra-Hasis story, because it fits the epic's theme of immortality.",
        uncertain: "The flood itself has no date. The 1646–1626 BCE range is the date of one manuscript, not of an event. Biblical flood accounts resemble the Mesopotamian ones; BioLogos attributes this to cultural connections.",
        evidence: "mythological",
        features: [circ("Mesopotamia (region where the texts were written)", 45.0, 32.5, 250, "myth", "regional", "attested", "Marks where the tablets were composed and copied, not where a flood happened.")],
        discovery: { anchor: [45.0, 32.5], label: "Flood traditions (Mesopotamian texts, region only)" },
        relatedSites: [], sources: ["wiki-gilgamesh-flood", "wiki-atrahasis", "cojs-gilgamesh", "brit-flood-compare", "ancienttexts-tab11", "biologos-flood"]
      },
      {
        id: "flood-geology", title: "Flood traditions: what geology can and cannot say", subject: "Scientific hypotheses about a regional event",
        status: "hypothetical", date: { start: B(5600), end: B(5600), kind: "proposed, contested" }, camera: { center: [34.0, 43.5], zoom: 4.5 }, borders: false,
        text: "In 1997 William Ryan, Walter Pitman and colleagues proposed that Mediterranean water burst into a lower Black Sea freshwater lake around 7,600 years ago (about 5600 BCE). Popular books connected this to flood myths. Later work disputes it: a 2011 study found no underwater archaeological evidence of a catastrophic submergence, and a 2022 review found insufficient evidence for a flood scenario. Danube Delta cores suggested a Black Sea level about 30 m below present, implying a rise of 5–10 m rather than 50–60 m.",
        what: "Separates an actual regional hypothesis from the stories.",
        where: "The Black Sea basin, shown as a broad region.",
        why: "Rising sea levels after the last ice age are real, but whether any story preserves a memory of them is unprovable.",
        uncertain: "A regional hypothesis does not establish a single worldwide flood, and no source reviewed shows that Mesopotamian or biblical texts derive from it. Irving Finkel is reported to favour local Tigris–Euphrates flooding as the source of the Mesopotamian tradition, but that report comes from an unrated secondary source.",
        evidence: "disputed",
        features: [circ("Black Sea basin (hypothesis region)", 34.0, 43.3, 450, "myth", "regional", "disputed", "Region of the Ryan–Pitman proposal. Disputed; not a flood site.")],
        alternatives: [
          { label: "Rapid catastrophic flooding", text: "Ryan and Pitman's proposal, based on cores and shelf features, of a flood about 5600 BCE.", sources: ["wiki-blacksea", "theories-blacksea"] },
          { label: "Gradual or smaller change", text: "Critics argue the reconnection was gradual or a smaller rise (Danube Delta evidence), and found no archaeological evidence for a catastrophe.", sources: ["wiki-blacksea", "sciencedaily-danube"] },
          { label: "Local Mesopotamian flooding", text: "Irving Finkel is reported to attribute the Mesopotamian tradition to local river floods rather than a distant event.", sources: ["theories-blacksea"] }
        ],
        sources: ["wiki-blacksea", "sciencedaily-danube", "theories-blacksea"]
      }
    ]
  });
})();
