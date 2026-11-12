(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "mongol-empire",
    category: "political",
    title: "The Mongol Empire and Mongolia",
    description: "How a confederation of steppe tribes became the largest contiguous land empire in history, why it split into four rival realms within two generations, and what remained when it ended. The sources used here are overviews, so the violence of the conquests is acknowledged but not quantified.",
    scope: "Mongolia, China, Central Asia, Russia, the Middle East",
    span: "1206 to the 15th century CE",
    tags: ["Mongols", "Genghis Khan", "Yuan", "Golden Horde", "Mongolia"],
    chapters: [
      {
        id: "1206", title: "Genghis Khan unites the steppe (1206)", subject: "Tribal confederation becomes a state",
        date: { start: 1206, end: 1206, kind: "event" }, camera: { center: [105.0, 47.0], zoom: 4.5 },
        text: "Temüjin, son of Yesügei, was elected Genghis Khan of a federation of tribes on the banks of the Onon River in 1206, which Britannica regards as the beginning of the Mongol Empire. The title means 'universal ruler'. He gained control over Mongols outside the original league and then started campaigns abroad.",
        what: "Rival steppe groups are united under one ruler.",
        where: "The Mongolian steppe, on the Onon River.",
        why: "Temüjin cultivated allies, built an army and defeated rival clans.",
        uncertain: "Dates for Genghis Khan's birth vary by source (Britannica gives 1162). The Britannica timeline says he killed rival leaders, but the sources do not give casualty figures.",
        evidence: "attested", features: [circ("Mongolian steppe (broad region)", 105.0, 47.5, 400, "direct", "regional", "reconstructed", "Homeland region. Not a border.")],
        relatedSites: [], sources: ["brit-mongol-empire", "brit-mongol-people", "brit-mongol-timeline"]
      },
      {
        id: "conquests", title: "Conquests under Genghis Khan (1207–1227)", subject: "Conquest empire",
        date: { start: 1207, end: 1227, kind: "event" }, camera: { center: [95.0, 42.0], zoom: 3.3 },
        text: "Between 1207 and 1227 the Mongols extended their domains as far west as European Russia and as far east as northern China, taking Beijing in 1215. By Genghis Khan's death in 1227 they held a dominion stretching from the China Sea to the Caspian.",
        what: "A steppe state conquers large parts of Eurasia.",
        where: "Northern China, Central Asia and territory toward the Caspian.",
        why: "The sources I read do not explain the military or political reasons, and do not describe the destruction of cities.",
        uncertain: "The conquests involved large-scale warfare, but the sources I read give no casualty or city-level detail, so none is stated. Britannica Kids says the empire was not a unified state but a collection of territories held by military force.",
        evidence: "attested", features: [pt("Beijing (taken 1215)", 116.4074, 39.9042, "conflict", "approximate", "attested", "Marker is modern Beijing.")],
        relatedSites: [], sources: ["brit-mongol-people", "brit-mongol-kids"]
      },
      {
        id: "division", title: "Succession and the four realms (1227–1260)", subject: "Empire divided among descendants",
        date: { start: 1227, end: 1260, kind: "period" }, camera: { center: [80.0, 45.0], zoom: 3 },
        text: "The empire passed to Genghis Khan's four sons, with Ögödei as great khan (chosen in 1229 per the Britannica timeline). Batu began campaigns in Russia and eastern Europe in 1236. Britannica Kids says the empire was divided among Tolui (eastern Mongolia), Ögödei (western Mongolia and northwest China), Chagatai (most of Turkistan) and Jöchi (southwestern Siberia and Russian lands).",
        what: "Territory is split among family branches, setting up separate khanates.",
        where: "Mongolia, Central Asia, Iran, and Russia.",
        why: "Britannica Kids says that, because it was controlled by many military leaders, the empire carried within it the seeds of its own breakdown.",
        uncertain: "The sources disagree on Chagatai's share: one says most of Turkistan and part of western China, another says northern Iran and southern Xinjiang. I do not know which is more accurate, so no regions are drawn for the khanates.",
        evidence: "reconstructed", features: [], relatedSites: [],
        alternatives: [{ label: "Chagatai's inheritance", text: "Britannica's 'Mongol' article gives Chagatai northern Iran and southern Xinjiang; Britannica Kids gives him most of Turkistan and part of western China.", sources: ["brit-mongol-people", "brit-mongol-kids"] }],
        sources: ["brit-mongol-kids", "brit-mongol-people", "brit-mongol-timeline"]
      },
      {
        id: "yuan", title: "Kublai Khan and the Yuan dynasty (1260–1368)", subject: "Mongol dynasty ruling China",
        date: { start: 1260, end: 1368, kind: "period" }, camera: { center: [112.0, 36.0], zoom: 4 },
        text: "Kublai became great khan in 1260, and Britannica says Mongol power reached its zenith under him. The Mongols destroyed the Southern Song and reunified China under the Yuan dynasty. Kublai moved the capital to what is now Beijing and came to regard himself primarily as a Chinese emperor. Britannica gives the Yuan as 1279–1368 in its Mongol Empire article, though its article on the Mongols gives 1206–1368.",
        what: "A Mongol ruler governs China as an emperor.",
        where: "China, with the capital at Beijing.",
        why: "Britannica says Kublai came to regard himself primarily as a Chinese emperor.",
        uncertain: "The Yuan start date differs between Britannica articles: 1279 in one and 1206 in another that counts from the empire's founding. The sources do not say how Kublai's rule related to the western khanates.",
        evidence: "attested", features: [pt("Beijing", 116.4074, 39.9042, "site", "approximate", "attested", "Yuan capital.")],
        relatedSites: [], sources: ["brit-mongol-timeline", "brit-mongol-kids", "brit-mongol-people", "brit-mongol-empire"]
      },
      {
        id: "fragmentation", title: "Fragmentation and assimilation (1368–15th century)", subject: "Rival khanates",
        date: { start: 1368, end: 1499, kind: "period" }, camera: { center: [60.0, 45.0], zoom: 3 },
        text: "Britannica says the empire's segments grew apart. The Golden Horde in Russia became Muslim and Turkic, the Il-Khans in the Middle East became Persian and Islamic, and the great khan of China became Sinicized. By 1368 the Mongols lost China to the Ming. The Il-Khanid dynasty of Persia disintegrated, the Golden Horde was defeated by a Muscovy-led alliance in 1380, and the Golden Horde broke up in the 15th century after the plague and a ruler's murder in the 1340s.",
        what: "A single empire ends in successor states that look like their subjects.",
        where: "Russia, Persia and China.",
        why: "Feuds between khanates and the shift of power to bureaucrats weakened the empire.",
        uncertain: "The sources say only that the Golden Horde broke up 'in the 15th century', so the chapter ends at the century's close. The Il-Khanid collapse date is not given.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-mongol-empire", "brit-mongol-people", "brit-mongol-kids"]
      },
      {
        id: "legacy", title: "What remained: Mongolia after the empire", subject: "Homeland and scattered khanates",
        date: null, camera: { center: [105.0, 47.0], zoom: 4 },
        text: "Britannica says that after the loss of China and the Persian and Russian khanates, the empire was reduced to the Mongol homeland and scattered khanates. The empire is described as the largest contiguous land empire in history, stretching from the Pacific Ocean to the Danube.",
        what: "A world empire shrinks back to its homeland.",
        where: "Mongolia.",
        why: "Division and assimilation outside the homeland.",
        uncertain: "This tour does not cover Mongolia after the 14th century: the Qing era, the 20th-century Mongolian republic and modern Mongolia need further sources. 'Largest contiguous land empire' is a Britannica statement.",
        evidence: "reconstructed", features: [circ("Mongolia (broad region)", 105.0, 47.0, 500, "direct", "regional", "reconstructed", "Homeland region only. Not a border.")],
        relatedSites: [], sources: ["brit-mongol-people", "brit-mongol-empire"]
      }
    ]
  });
})();
