(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "mongolia-after-empire",
    category: "political",
    title: "Mongolia after the empire",
    description: "What happened to the Mongol homeland after the world empire broke apart: Altan Khan's 16th-century revival in the Ordos, rule and influence by China and Russia from the 17th century, the shift to religious leaders after the Qing fell, and the Mongolian People's Republic of 1924. The sources I found are a single Britannica overview, so this is a short outline.",
    scope: "Mongolia and neighbouring Inner Asia",
    span: "14th century to 1924 CE",
    tags: ["Mongolia", "Altan Khan", "Qing", "Russia", "Mongolian People's Republic", "Ulaanbaatar"],
    chapters: [
      {
        id: "after-empire", title: "A collapsed empire and a reduced homeland", subject: "Fragmented steppe polities",
        date: { start: 1368, end: 1542, kind: "period (approximate)" }, camera: { center: [105.0, 46.5], zoom: 4 },
        text: "Britannica says the Mongol empire eventually collapsed and split, and that parts of Mongolia came under the influence of China and Russia from the 17th century to the 20th century. For the period between the Yuan's fall and the 16th century, the sources I read give no detail.",
        what: "The homeland is left as a set of rival groups.",
        where: "Mongolia and the steppe.",
        why: "See the Mongol Empire tour for the break-up of the empire.",
        uncertain: "This chapter exists to mark a gap: my sources do not cover the 14th and 15th centuries, and the date range is a placeholder.",
        evidence: "reconstructed", features: [circ("Mongolia (broad region)", 105.0, 46.5, 600, "direct", "regional", "reconstructed", "Homeland region only; not a border.")],
        relatedSites: [], sources: ["brit-mongolia-history"]
      },
      {
        id: "altan", title: "Altan Khan and the Ordos Mongols (1543–1583)", subject: "Regional khanate",
        date: { start: 1543, end: 1583, kind: "reign" }, camera: { center: [109.0, 39.5], zoom: 5.5 },
        text: "Britannica says ascendancy passed to the Mongols of the Ordos Plateau, in the great loop of the Yellow River, under Altan Khan (reigned 1543–83). He used a geographic base that allowed him to develop agriculture and trade, challenged the Oirat in Tibet and pressured the Chinese. Britannica says the Khalkha in the north and the Chahar in the south had lagged behind for lack of a suitably diversified base.",
        what: "A Mongol leader builds a trading and agricultural base on the Chinese frontier.",
        where: "The Ordos Plateau, inside the loop of the Yellow River.",
        why: "Britannica credits the Ordos's geography.",
        uncertain: "The sources I read do not mention Altan Khan's relation to Tibetan Buddhism, which other works emphasise; I make no claim about it.",
        evidence: "attested", features: [circ("Ordos Plateau (broad region)", 108.5, 39.0, 180, "direct", "regional", "reconstructed", "Region inside the Yellow River loop; not a border.")],
        relatedSites: [], sources: ["brit-mongolia-history"]
      },
      {
        id: "qing-russia", title: "China and Russia (17th–early 20th centuries)", subject: "Imperial spheres",
        date: { start: 1600, end: 1911, kind: "period" }, camera: { center: [105.0, 46.5], zoom: 3.8 },
        text: "Britannica says parts of Mongolia came under the influence of China and Russia from the 17th century to the 20th century. It adds that with the fall of the Qing dynasty in the early 20th century, control in Mongolia shifted to religious leaders and local nobles.",
        what: "Mongolia is pulled between two empires.",
        where: "Mongolia, with China to the south and Russia to the north.",
        why: "The sources I read give no details of how Qing or Russian control worked.",
        uncertain: "This chapter is a summary of two sentences. It does not cover the Qing conquest, the Qing banner system, or Russian trade and diplomacy.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-mongolia-history"]
      },
      {
        id: "republic", title: "The Mongolian People's Republic (1924)", subject: "People's republic",
        date: { start: 1924, end: 1924, kind: "event" }, camera: { center: [106.9, 47.9], zoom: 6 },
        text: "Britannica says the Mongolian People's Republic was proclaimed in November 1924, and that the capital, centred on the main monastery of the Bogd Gegeen, was renamed Ulaanbaatar, 'Red Hero'.",
        what: "A republic is proclaimed and the capital is renamed.",
        where: "Ulaanbaatar.",
        why: "The sources I read do not explain the republic's relation to the Soviet Union.",
        uncertain: "This tour stops in 1924. The Soviet relationship, the 20th-century purges, the 1990 democratic revolution and today's Mongolia are not covered.",
        evidence: "attested", features: [pt("Ulaanbaatar", 106.9057, 47.8864, "site", "approximate", "attested", "Capital, renamed in 1924.")],
        relatedSites: [], sources: ["brit-mongolia-history"]
      }
    ]
  });
})();
