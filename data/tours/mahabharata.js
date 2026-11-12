(function () {
  const { B, pt, circ, line } = window.TourKit;
  const kuru = circ("Kuru country, Ganga–Yamuna region (broad region)", 77.2, 29.5, 150, "myth", "regional", "disputed", "Region associated with the Kuru kingdom in Vedic texts and with the epic's setting. Broad region; not a border and not a battlefield.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "mahabharata",
    category: "religion",
    title: "The Mahabharata: epic, tradition and evidence",
    description: "What the Mahabharata is, how scholars date its composition, how its central war is dated in tradition and in modern proposals, and what archaeology can and cannot say. The traditional setting, the composition of the text and the archaeological evidence are treated as three separate questions.",
    scope: "Northern India (the Ganga–Yamuna region and Haryana)",
    span: "Composition c. 500 BCE to 400 CE; the war's date is debated",
    tags: ["Mahabharata", "Kurukshetra", "Bhagavad Gita", "Kuru", "Painted Grey Ware"],
    chapters: [
      {
        id: "epic", title: "The epic and its place in tradition", subject: "Sanskrit epic and sacred text",
        status: "mythological", date: null, camera: { center: [77.2, 29.5], zoom: 5.5 },
        text: "Britannica describes the Mahabharata as a mass of mythological and didactic material arranged around a central heroic narrative about the struggle for sovereignty between two groups of cousins, the Kauravas (sons of Dhritarashtra, a descendant of Kuru) and the Pandavas (sons of Pandu). The feud culminates in great battles at Kurukshetra, north of Delhi in Haryana. Authorship is traditionally ascribed to the sage Vyasa, who appears in the work as the grandfather of both families.",
        what: "Introduces the work and its story.",
        where: "Kurukshetra, in Haryana, and the Kuru country around it.",
        why: "It is a foundational text for many Hindu traditions.",
        uncertain: "Britannica says it is unlikely that any single person wrote the poem. The traditional ascription to Vyasa is a statement of tradition. This tour records the text's history, not its religious authority.",
        evidence: "traditional", features: [pt("Kurukshetra", 76.84, 29.97, "myth", "approximate", "traditional", "Traditional site of the war; Britannica places it north of Delhi in Haryana. The marker is the modern town and does not locate a battlefield."), kuru],
        relatedSites: [], sources: ["brit-mahabharata"]
      },
      {
        id: "composition", title: "When the text was composed (c. 500 BCE–400 CE)", subject: "Composition and transmission",
        status: "historical", date: { start: B(500), end: 400, kind: "composition, scholarly estimate" }, camera: null,
        text: "Britannica says the Mahabharata appeared in its present form about 400 CE. Wikipedia's article on the war cites estimates for the composition between 500 BCE and 400 CE. The sources describe a long process of accumulation, with a heroic core surrounded by later mythological and didactic material.",
        what: "Gives the scholarly range for the text, which is much later than the events it describes.",
        where: "Not mapped: the sources I read do not locate its composition.",
        why: "The gap between the composition and the narrated events matters for judging its value as history.",
        uncertain: "The end date, 400 CE, is the text's present form. When the earliest version was composed is uncertain, and the lower bound comes from one Wikipedia citation.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-mahabharata", "wiki-kurukshetra"]
      },
      {
        id: "war-date", title: "Dating the war: tradition and modern proposals", subject: "The war's date",
        status: "disputed", date: null, camera: null,
        text: "Britannica says the date and even the historical occurrence of the central war are much debated. Wikipedia says its historicity remains a matter of scholarly discussion, and that the war is not mentioned in Vedic literature. It notes that the Battle of the Ten Kings in the Rigveda may have formed the core of the story, and that the epic greatly expanded the war, which makes the account dubious. Proposed dates in the secondary literature include about 836 BCE (B. B. Lal, correlating Painted Grey Ware), about 950 BCE (John Keay), 750–350 BCE (Asko Parpola), and a traditional date around 3138 BCE tied to the start of the Kali Yuga in 3102 BCE.",
        what: "Shows how far apart the proposed dates are.",
        where: "Not mapped: placing the war on the timeline would imply a date that sources do not support.",
        why: "The proposals differ because they rest on different kinds of evidence: tradition, genealogies, astronomy or pottery.",
        uncertain: "The 3138 BCE figure is from an unrated website describing the traditional reckoning. A Wikipedia-cited statement by A. L. Basham is that a great battle at Kurukshetra, 'magnified to titanic proportions', may be the basis of the epic. Nothing in the sources I read dates a specific event.",
        evidence: "disputed", features: [], relatedSites: [],
        alternatives: [
          { label: "Traditional reckoning (c. 3138 BCE)", text: "Based on the start of the Kali Yuga in 3102 BCE, per an unrated website.", sources: ["vedalingo-date"] },
          { label: "Lal: about 836 BCE", text: "Uses an average reign length and Painted Grey Ware sites.", sources: ["wiki-kurukshetra"] },
          { label: "Parpola: c. 750–350 BCE", text: "Later phase of the Painted Grey Ware culture.", sources: ["wiki-kurukshetra"] },
          { label: "No datable war", text: "A summary of mainstream historical archaeology says a dateable 'war' cannot be extracted, though there may be a historical kernel in the Kuru confederation c. 1100–800 BCE.", sources: ["dharmic-atlas"] }
        ],
        sources: ["brit-mahabharata", "wiki-kurukshetra", "vedalingo-date", "dharmic-atlas"]
      },
      {
        id: "archaeology", title: "What archaeology shows (c. 1200–600 BCE)", subject: "Material evidence",
        status: "hypothetical", date: { start: B(1200), end: B(600), kind: "Painted Grey Ware culture" }, camera: { center: [77.5, 29.3], zoom: 6.5 },
        text: "Painted Grey Ware (PGW) is an Iron Age pottery tradition found at about 700 sites in the Gangetic plain, dated broadly to 1200–600 BCE. PGW has been found at sites linked to the epic, including Hastinapura, which was excavated by B. B. Lal. Michael Witzel concludes the epic's general setting has a historical precedent in the Vedic period, when the Kuru kingdom was the centre of political power from roughly 1200 to 800 BCE.",
        what: "Separates the real archaeological culture from the story.",
        where: "The Ganga–Yamuna region, including Hastinapura and Kurukshetra.",
        why: "PGW shows settlement in the region in the right period, but it does not identify a war.",
        uncertain: "Scholars debate whether PGW at a site shows the epic is historical. One secondary source notes there is no archaeological signature, such as a destruction layer or fortifications, that marks a battle of the described scale, and another says archaeology has not identified a battlefield conclusively linked to the war. Several of these claims come from unrated websites.",
        evidence: "disputed", features: [pt("Hastinapura (approximate)", 78.0, 29.17, "myth", "approximate", "disputed", "Excavated site associated with the Kuru capital in the epic; coordinates are approximate and the identification is an association, not a proof."), kuru],
        relatedSites: [], sources: ["wiki-kurukshetra", "dharmic-atlas", "swaveda-kurukshetra"]
      },
      {
        id: "gita", title: "The Bhagavadgita and the epic's religious role", subject: "Sacred text within an epic",
        status: "mythological", date: null, camera: null,
        text: "Britannica notes that some sections of the Mahabharata, including the Narayaniya, the Bhagavadgita (book 6), the Anugita and the Harivamsha, are important sources of early Vaishnava theology in which Krishna is an avatar of the god Vishnu.",
        what: "Shows how a section of the epic became central to a religious tradition.",
        where: "Not mapped.",
        why: "These sections give the epic a religious role beyond its story.",
        uncertain: "The sources I read do not date the Bhagavadgita separately from the epic, so this tour gives it no date. It does not discuss the Gita's content or later interpretation, which need dedicated sources.",
        evidence: "traditional", features: [], relatedSites: [], sources: ["brit-mahabharata"]
      }
    ]
  });
})();
