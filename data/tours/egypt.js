(function () {
  const { B, pt, circ, line } = window.TourKit;
  const memphis = pt("Memphis", 31.2511, 29.8444, "site", "approximate", "attested", "Old Kingdom capital; marker approximate (the ancient city is largely buried).");
  const thebes = pt("Thebes (Luxor)", 32.6396, 25.6872, "site", "approximate", "attested", "Capital in the Middle and early New Kingdom; marker is modern Luxor.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "egypt-kingdoms",
    category: "political",
    title: "Egypt: the Old, Middle and New Kingdoms",
    description: "Pharaonic Egypt as modern historians divide it: three long kingdoms separated by periods of fragmentation. The tour explains where the labels come from, how dates differ between scholars, and what changed at each boundary.",
    scope: "The Nile Valley and Delta, with Nubia and the Levant at the edges",
    span: "c. 2900 to 332 BCE",
    tags: ["Egypt", "Old Kingdom", "Middle Kingdom", "New Kingdom", "pharaohs"],
    chapters: [
      {
        id: "framework", title: "How historians divide pharaonic Egypt", subject: "Modern periodisation",
        date: { start: B(2900), end: B(332), kind: "span of the framework" }, year: B(2600), camera: { center: [31.5, 27.0], zoom: 5 },
        text: "The Egyptian priest Manetho, in the 3rd century BCE, listed 30 dynasties, and they are still used. The grouping into 'kingdoms' and 'intermediate periods' is modern, from the 19th and 20th centuries. It describes three Golden Ages, the Old, Middle and New Kingdoms, separated by intermediate periods that are often, though not always, considered times of crisis.",
        what: "Explains the labels used in the following chapters.",
        where: "Egypt along the Nile.",
        why: "Historians find the scheme useful, but it was not how Egyptians thought of their own history.",
        uncertain: "Dates differ between chronologies by about 300 years for the Early Dynastic Period, up to 30 years in the New Kingdom, and a few years in the Late Period. All dates here are approximate, and the sources I used disagree: the Old Kingdom starts at c. 2613 (World History Encyclopedia), c. 2543 (Britannica) or c. 2686 BCE (an unrated source).",
        evidence: "reconstructed", features: [], relatedSites: ["giza"],
        sources: ["wiki-egypt-periodization", "wiki-egypt-chronology", "whe-egypt-periods", "brit-egypt-kids"]
      },
      {
        id: "old-kingdom", title: "The Old Kingdom (c. 2543–2118 BCE)", subject: "Centralised kingdom",
        date: { start: B(2543), end: B(2118), kind: "period" }, camera: { center: [31.2, 29.8], zoom: 6.5 },
        text: "Britannica dates the Old Kingdom from the 4th to the 8th dynasties, c. 2543 to c. 2118 BCE. An unrated source describes it as marked by strong kingship, royal building at Saqqara and Giza, and rule from Memphis. It ended in the First Intermediate Period (c. 2118–1980 BCE), which Britannica traces through the 9th and 10th dynasties.",
        what: "A strong central monarchy builds pyramids, then loses control to regional rulers.",
        where: "Memphis and the necropolises at Giza and Saqqara.",
        why: "The sources I read give no causes for the decline, so I do not explain it here.",
        uncertain: "Britannica's start (4th dynasty, c. 2543) differs from other conventions that start the Old Kingdom with the 3rd dynasty. The sources I read do not describe the First Intermediate Period in detail.",
        evidence: "reconstructed", features: [memphis, pt("Giza pyramids", 31.1342, 29.9792, "site", "exact", "attested", "Pyramid complex of the Fourth Dynasty.")],
        relatedSites: ["giza"], sources: ["brit-egypt-old", "brit-egypt-kids", "ancientsociety-egypt"]
      },
      {
        id: "middle-kingdom", title: "The Middle Kingdom (c. 1980–1760 BCE)", subject: "Reunified kingdom",
        date: { start: B(1980), end: B(1760), kind: "period" }, camera: { center: [31.8, 27.5], zoom: 5.5 },
        text: "Britannica says the Middle Kingdom, roughly 1980 to 1760 BCE, marked a period of reunification and stability after the First Intermediate Period. Mentuhotep II campaigned to reunify the country, and the 12th dynasty (c. 1939–1760) formed its core. An unrated source describes administrative reform and a wider state reach, with Thebes as the early capital.",
        what: "Egypt is reunified under Theban kings and then stabilised.",
        where: "Thebes and the whole Nile Valley.",
        why: "The kingdom restored central authority after a period of regional rule.",
        uncertain: "Dates range from 2055–1650 (unrated) to 1980–1760 (Britannica), depending on whether the 13th dynasty is included.",
        evidence: "reconstructed", features: [thebes], relatedSites: ["karnak"],
        sources: ["brit-egypt-middle", "brit-egypt-kids", "whe-egypt-periods", "ancientsociety-egypt"]
      },
      {
        id: "second-intermediate", title: "Division and Hyksos rule (c. 1759–1540 BCE)", subject: "Divided kingdom",
        date: { start: B(1759), end: B(1540), kind: "period" }, camera: { center: [31.5, 29.0], zoom: 5.5 },
        text: "In the Second Intermediate Period, Britannica lists the 13th and 14th dynasties and then the 15th to 17th dynasties (c. 1630–1530 BCE). An unrated source summarises this as divided rule, with Hyksos power in the Delta and a Theban revival in the south.",
        what: "Egypt splits into rival centres, with a foreign dynasty in the north.",
        where: "The Nile Delta in the north, and Thebes in the south.",
        why: "The 'Hyksos' label and the cause of the breakup are not explained in the sources I read.",
        uncertain: "My sources do not explain who the Hyksos were or how they took power, so the chapter is thin. The dating overlaps the end of the Middle Kingdom, and sources disagree by decades.",
        evidence: "reconstructed", features: [circ("Nile Delta (broad region)", 31.0, 30.8, 100, "influence", "regional", "reconstructed", "Region of Hyksos power according to a secondary source. Not a border."), thebes],
        relatedSites: [], sources: ["brit-egypt-middle", "ancientsociety-egypt", "brit-egypt-kids"]
      },
      {
        id: "new-kingdom", title: "The New Kingdom (c. 1539–1077 BCE)", subject: "Imperial kingdom",
        date: { start: B(1539), end: B(1077), kind: "period" }, camera: { center: [32.0, 28.0], zoom: 4.8 },
        text: "Britannica dates the New Kingdom to c. 1539–1077 BCE, covering the 18th to 20th dynasties. An unrated source describes imperial expansion, large temples, Theban prominence and the Ramesside rule of the 19th and 20th dynasties, from about 1292 to 1069. The seat of government moved from Thebes to Akhetaten around 1352, back to Thebes around 1336, to Pi-Ramesses around 1279, and to Memphis around 1213 in that source's account.",
        what: "Egypt becomes an expansionist power with changing capitals.",
        where: "Thebes, Akhetaten (Amarna), Pi-Ramesses and Memphis.",
        why: "My sources describe the empire but not its campaigns, diplomacy or economics.",
        uncertain: "The capital dates come from one unrated source and I did not verify them. Conventional chronologies differ by up to 30 years in the New Kingdom, per Wikipedia.",
        evidence: "reconstructed", features: [thebes, pt("Akhetaten (Amarna)", 30.8953, 27.6455, "site", "approximate", "attested", "Short-lived capital; marker approximate."), pt("Pi-Ramesses", 31.83, 30.8, "site", "approximate", "attested", "Delta capital; marker approximate.")],
        relatedSites: ["karnak"], sources: ["brit-egypt-kids", "wiki-egypt-chronology", "givemehistory-egypt", "whe-egypt-periods"]
      },
      {
        id: "after", title: "After the New Kingdom (c. 1076–332 BCE)", subject: "Fragmented then foreign-dominated Egypt",
        date: { start: B(1076), end: B(332), kind: "period" }, camera: { center: [31.5, 29.0], zoom: 4.8 },
        text: "Britannica Kids lists the Third Intermediate Period (about 1076–655 BCE), when separate pharaohs ruled different regions, and the Late Period (664–332 BCE), the final dynastic period, which it describes as a time of decline. The tour ends at 332 BCE, when the Persian period ended. The Persian and Macedonian conquests are covered in other tours.",
        what: "Native rule weakens and ends.",
        where: "Egypt.",
        why: "My sources do not explain the causes in detail.",
        uncertain: "Dates in this period overlap because rulers in different regions reigned at the same time. The Kids article describes the Late Period as a decline, but that is a modern judgement.",
        evidence: "reconstructed", features: [], relatedSites: ["alexandria"], sources: ["brit-egypt-kids", "wiki-egypt-periodization"]
      }
    ]
  });
})();
