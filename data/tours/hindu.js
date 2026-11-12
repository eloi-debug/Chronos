(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "hindu-traditions",
    category: "religion",
    title: "Hindu traditions: texts, ideas and a modern name",
    description: "The Indus Valley setting, the Vedic texts, the Upanishads and the later epics and Puranas, with attention to how scholars date the texts and why 'Hinduism' is a modern umbrella term for many traditions. The tour keeps texts, practices and communities distinct and does not cover later devotional movements or the spread abroad.",
    scope: "The Indian subcontinent",
    span: "c. 2500 BCE to the early centuries CE (texts and ideas)",
    tags: ["Hinduism", "Vedas", "Upanishads", "dharma", "Indus Valley"],
    chapters: [
      {
        id: "term", title: "A modern name for many traditions", subject: "Terminology",
        date: null, camera: { center: [78.0, 22.0], zoom: 4 },
        text: "Britannica Kids says the term 'Hinduism' was coined by British writers in the 19th century for religious ideas and practices distinctive to India. It built on 'Hindu', a word used for centuries by outsiders, beginning with the Greeks and Persians, for the people of the Indus region. Residents began to use it themselves in the 16th century to distinguish themselves from the Turks, and it gradually became religious rather than geographic or ethnic. Manitoba's education guide says most Hindus share the Vedas as a principal body of scripture and a system of values called dharma, but defining Hinduism is a challenge.",
        what: "Explains why the name is recent while the traditions are old.",
        where: "South Asia.",
        why: "It prevents reading a single church-like religion backwards into history.",
        uncertain: "Scholars and practitioners define 'Hindu' differently, and this tour does not settle that.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-hinduism-kids", "manitoba-hinduism"]
      },
      {
        id: "indus", title: "The Indus Valley and the question of origins (c. 2500–1500 BCE)", subject: "Civilisation and disputed continuity",
        date: { start: B(2500), end: B(1500), kind: "period" }, camera: { center: [68.5, 28.0], zoom: 4.6 },
        text: "Britannica Kids says a highly developed civilisation existed in the Indus valley from about 2300 to 1500 BCE. A Manitoba education guide traces the origins of Hinduism to that valley, and says evidence of early practice is archaeologically dated to the vanished culture. The same guide describes the Aryan migration thesis, in which Aryan groups entered the subcontinent and became the dominant cultural force, with Hinduism deriving from their religion recorded in the Vedas along with indigenous traditions. Britannica says the Aryans presumably entered from the Iranian regions.",
        what: "Two possible sources of Hindu traditions: a local urban civilisation and a later arrival of Vedic-speaking peoples.",
        where: "The Indus basin, in modern Pakistan and northwest India.",
        why: "The origin question shapes how Vedic and later traditions are interpreted.",
        uncertain: "The relationship between Indus religion and later Hindu practice is disputed, The sources are not consistent: Manitoba's guide states Indus-Hindu continuity as a fact, while Britannica describes the Aryan entry with 'presumably'. Wikipedia places the Indo-Aryan migrations between 1900 and 1400 BCE.",
        evidence: "disputed", features: [circ("Indus Valley civilisation (broad region)", 68.5, 28.0, 600, "influence", "regional", "reconstructed", "Broad region of the civilisation, not a border.")],
        alternatives: [{ label: "Indo-Aryan migration", text: "Wikipedia gives the introduction of the Vedic religion by Indo-Aryan migrations as starting between 1900 and 1400 BCE.", sources: ["wiki-history-hinduism"] }],
        relatedSites: ["mohenjo-daro"], sources: ["brit-hinduism-kids", "manitoba-hinduism", "brit-india-vedic", "wiki-history-hinduism"]
      },
      {
        id: "vedas", title: "The Vedas (c. 1500–800 BCE)", subject: "Oral sacred texts",
        date: { start: B(1500), end: B(800), kind: "composition, approximate" }, camera: { center: [76.0, 29.0], zoom: 4.6 },
        text: "The Vedas are four collections: the Rigveda, Yajurveda, Samaveda and Atharvaveda. They are composed in archaic Sanskrit, generally dated between 1500 and 800 BCE, and transmitted orally. The Rigveda is believed to be the earliest, a collection of 1,028 hymns whose final recension is often dated to 1200 BCE. The religion it records was polytheistic and centred on ritual sacrifice, and it introduces the fourfold social division called varna.",
        what: "A body of oral hymns and ritual texts is composed and passed on.",
        where: "Northwestern India and the Ganges region.",
        why: "Britannica calls this the earliest stratum of religious activity in India for which written materials exist.",
        uncertain: "Britannica says the texts were continually revised and cannot be dated accurately. Dates vary: 1500–1200 BCE for the Rigveda in Wikipedia and Kids, 1500–800 BCE for all four in Britannica. Vedic texts represent the elite and do not necessarily show popular practice.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-india-vedic", "brit-vedic-period", "brit-hinduism-kids", "wiki-history-hinduism"]
      },
      {
        id: "upanishads", title: "The Upanishads (c. 800–200 BCE)", subject: "Philosophical texts",
        date: { start: B(800), end: B(200), kind: "composition, disputed" }, camera: { center: [80.0, 26.0], zoom: 5 },
        text: "The Upanishads are the concluding portions of the Vedas, which is why they are called Vedanta. They speculate about the connection between humanity and the cosmos and emphasise knowledge of the ultimate identity of all phenomena over ritual. Britannica says they were composed during social and economic upheaval, as rural tribal society gave way to urban life under monarchies. The Manitoba guide adds that they introduce reincarnation, karma and moksha.",
        what: "The focus shifts from sacrifice towards knowledge and liberation.",
        where: "The Ganges plain.",
        why: "Britannica links the texts to a period of urban and political change.",
        uncertain: "Dates conflict: Britannica gives roughly 700–500 BCE for their compilation and 13 Upanishads from the mid-5th to the 2nd century BCE, Kids gives 800–500 BCE, and Wikipedia says the earliest were composed in the 9th and 8th centuries BCE. Upanishads continued to be composed up to about 1400 CE.",
        evidence: "reconstructed", features: [circ("Ganges plain (broad region)", 80.0, 26.0, 350, "influence", "regional", "reconstructed", "Broad region; the sources describe the setting only generally.")],
        alternatives: [{ label: "Earlier dating", text: "Wikipedia places the earliest Upanishads in the 9th and 8th centuries BCE.", sources: ["wiki-history-hinduism"] }],
        relatedSites: [], sources: ["brit-upanishads", "brit-upanishad", "brit-hinduism-kids", "manitoba-hinduism", "wiki-history-hinduism"]
      },
      {
        id: "epics-puranas", title: "Epics, Puranas and the turn to 'Hindu' religion", subject: "Later textual and devotional traditions",
        date: { start: B(600), end: 300, kind: "period, approximate" }, camera: { center: [80.0, 22.0], zoom: 4.2 },
        text: "Wikipedia describes a second urbanisation (600–200 BCE) as a formative period for Hinduism, Jainism and Buddhism, followed by a turning point between the Vedic religion and the Hindu religions during the Epic and Early Puranic period. The Manitoba guide lists the Upanishads, Puranas, Ramayana and Bhagavad Gita among the later scriptural texts that built on the Vedas.",
        what: "New texts and religious forms build on and depart from the Vedic base.",
        where: "Across the subcontinent.",
        why: "The sources I read do not explain the mechanisms of this change.",
        uncertain: "The end date of 300 CE is my approximation because the excerpt I read does not give the period's dates. This chapter is deliberately thin. The Mahabharata and Ramayana, bhakti devotion, temples, philosophical schools, and the spread to Southeast Asia are not covered. The Mahabharata has its own planned tour.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["wiki-history-hinduism", "manitoba-hinduism"]
      }
    ]
  });
})();
