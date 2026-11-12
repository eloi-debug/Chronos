(function () {
  const { B, pt, circ, line } = window.TourKit;
  const harappa = pt("Harappa", 72.8661, 30.6292, "site", "approximate", "attested", "Major city in Punjab, Pakistan.");
  const moh = pt("Mohenjo-daro", 68.1356, 27.3292, "site", "approximate", "attested", "Largest city, in Sindh, Pakistan.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "indus-valley",
    category: "political",
    title: "The Indus Valley Civilization: planned cities and an unexplained decline",
    description: "The Bronze Age cities of the Indus basin: their grid plans and drains, their trade with Mesopotamia, the open question of how they were governed, and the competing explanations for their decline. Where scholars disagree, the tour lists the proposals instead of choosing.",
    scope: "The Indus basin (Pakistan and northwest India)",
    span: "c. 2600 to c. 1700 BCE",
    tags: ["Indus Valley", "Harappa", "Mohenjo-daro", "urban planning", "trade", "decline"],
    chapters: [
      {
        id: "cities", title: "Planned cities (c. 2600–2000 BCE)", subject: "Urban civilisation",
        date: { start: B(2600), end: B(2000), kind: "mature period" }, camera: { center: [69.5, 28.5], zoom: 5.2 },
        text: "Britannica Kids says a fully urban society emerged at Harappa and similar sites about 2600–2500 BCE and continued to about 2000 BCE. The civilisation consisted of two large cities, Harappa and Mohenjo-daro, in Punjab and Sindh in present-day Pakistan, and more than 100 towns and villages. Each large city had a citadel on a raised brick platform to the west and a lower residential city to the east, laid out on a grid. Most larger houses had private wells and bathrooms, and covered drains ran along the streets.",
        what: "A network of planned cities with shared layouts and water systems.",
        where: "The Indus basin; Harappa and Mohenjo-daro were the largest.",
        why: "The sources describe the planning and its results but not who ordered it.",
        uncertain: "Population estimates vary: Wikipedia gives 30,000–60,000 for each of the big cities and one to five million overall; an unrated source gives lower figures. Dates for the mature period differ slightly between sources.",
        evidence: "attested", features: [harappa, moh, circ("Indus civilisation heartland (broad region)", 69.5, 28.5, 700, "influence", "regional", "reconstructed", "Broad region; the civilisation's borders are not drawn.")],
        relatedSites: ["mohenjo-daro"], sources: ["brit-indus", "brit-indus-kids", "whe-indus", "wiki-indus", "brit-india-development"]
      },
      {
        id: "trade", title: "Craft and long-distance trade", subject: "Trading economy",
        date: { start: B(2600), end: B(1900), kind: "mature period" }, camera: { center: [60.0, 28.0], zoom: 3.8 },
        text: "Britannica says Indus trade was extensive and apparently well-regulated, bringing in raw materials and distributing finished goods, and arguably leading to Harappan colonies in both Mesopotamia and Badakhshan. Goods sent to Mesopotamia included timber, ivory, gold, pearls, lapis lazuli and carnelian beads, in exchange for silver, tin, woollen textiles and grain. Mesopotamian documents called the Indus region Meluhha.",
        what: "The cities were linked into a long-distance trade network.",
        where: "From the Indus basin to Mesopotamia and Central Asia.",
        why: "Britannica names the trade as part of the civilisation's economic basis.",
        uncertain: "'Colonies' is Britannica's tentative word ('arguably'). The sources I read do not quantify the trade.",
        evidence: "reconstructed", features: [moh, line("Indus–Mesopotamia exchange (schematic)", [[68.1356, 27.3292], [46.1031, 30.9628]], "influence", "illustrative", "reconstructed", "Schematic link; not a trade route.")],
        relatedSites: ["mohenjo-daro", "eridu"], sources: ["brit-indus", "brit-indus-craft", "brit-pakistan-history"]
      },
      {
        id: "governance", title: "Who ruled? An open question", subject: "Political organisation (unknown)",
        date: null, camera: { center: [69.5, 28.5], zoom: 5.2 },
        text: "Britannica says the outstanding size of the two cities suggests political centralisation, either in two large states or in a single great empire with alternative capitals. The sources I read mention no palaces, royal tombs or royal inscriptions.",
        what: "The political form of the civilisation is uncertain.",
        where: "The two large cities and their region.",
        why: "Without readable political texts the evidence is architectural.",
        uncertain: "Britannica offers two possibilities and does not choose. The script is not discussed in the sources I read, so this chapter says nothing about it.",
        evidence: "disputed", features: [harappa, moh], relatedSites: [], sources: ["brit-indus"], alternatives: [
          { label: "Two large states", text: "Suggested by the two cities' size.", sources: ["brit-indus"] },
          { label: "One empire with alternative capitals", text: "Also suggested by Britannica, with analogies in later Indian history.", sources: ["brit-indus"] }
        ]
      },
      {
        id: "decline", title: "Decline (c. 2000–1700 BCE)", subject: "Urban breakdown",
        date: { start: B(2000), end: B(1700), kind: "decline" }, camera: { center: [69.5, 28.5], zoom: 5.2 },
        text: "Britannica says there is no general agreement about the causes. The main proposals are gradual climate change, sudden environmental events such as flooding or the drying of the Sarasvati river, human activity including invasions, and epidemics. Britannica thinks a mix of natural forces compromised society and human intervention hastened its end, with decline occurring in stages between about 2000 and 1750 BCE. Wikipedia dates the start of decline to about 1900 and abandonment of most cities by about 1700 BCE. Mohenjo-daro had flooded repeatedly and was in decline before it was attacked in the middle of the 2nd millennium BCE.",
        what: "The cities are abandoned and urban features such as seals and specialised crafts disappear.",
        where: "Throughout the Indus region, with Mohenjo-daro's end described in detail.",
        why: "Britannica argues for a combination of causes, not one.",
        uncertain: "Britannica says the end of Mohenjo-daro by raiders is known, while other sources stress gradual environmental change. The question of whether Indo-Aryans were involved is a contested hypothesis, and Britannica lists it as only one theory. Dates run from 1900 to 1700 BCE depending on the source.",
        evidence: "disputed", features: [moh, harappa],
        alternatives: [
          { label: "Gradual climate change", text: "Shifting climate and agricultural failure.", sources: ["brit-indus-end"] },
          { label: "Sudden environmental events", text: "Floods or the drying of the Sarasvati.", sources: ["brit-indus-end", "whe-indus"] },
          { label: "Invasions or raiding", text: "One of four theories listed by Britannica, including possible Indo-Aryans.", sources: ["brit-indus-end", "brit-indus-craft"] },
          { label: "Epidemic", text: "A disease outbreak.", sources: ["brit-indus-end", "brit-indus-kids"] }
        ],
        relatedSites: ["mohenjo-daro"], sources: ["brit-indus-end", "brit-indus-craft", "brit-indus-kids", "whe-indus", "wiki-indus"]
      },
      {
        id: "afterwards", title: "What came after", subject: "Post-urban societies",
        date: { start: B(1700), end: B(1000), kind: "period" }, camera: { center: [76.0, 27.0], zoom: 4.5 },
        text: "Britannica says the collapse of the urban system did not mean a complete breakdown of village life everywhere. The civilisation's southernmost parts may have continued until an Iron Age civilisation developed in India about 1000 BCE, and the stage was set for a second urbanisation in the Ganges valley.",
        what: "People disperse into smaller settlements rather than vanishing.",
        where: "The Indus region and further east and south.",
        why: "Britannica says the end of urban social and political control did not end all ways of life.",
        uncertain: "How strongly Indus culture shaped later Indian civilisation is debated; the Hindu traditions tour treats that question separately.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-indus", "brit-india-development"]
      }
    ]
  });
})();
