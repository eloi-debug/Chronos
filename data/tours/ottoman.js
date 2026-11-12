(function () {
  const { B, pt, circ, line } = window.TourKit;
  const cp = pt("Constantinople (Istanbul)", 28.9784, 41.0082, "site", "approximate", "attested", "Ottoman capital from 1453.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "ottoman-empire",
    category: "political",
    title: "The Ottoman Empire: from frontier principality to republic",
    description: "How a Turkish tribal state in western Anatolia became one of the most powerful states in the world, why it declined over centuries, and how it ended in 1922. The sources used are encyclopedia overviews, so the tour follows the main arc and flags what it leaves out.",
    scope: "Anatolia, the Balkans, the Middle East and North Africa",
    span: "c. 1300 to 1923 CE",
    tags: ["Ottoman", "Mehmed II", "Süleyman", "Constantinople", "Atatürk"],
    chapters: [
      {
        id: "origins", title: "Osman's principality (early 14th century)", subject: "Frontier principality",
        date: { start: 1300, end: 1324, kind: "approximate" }, camera: { center: [30.5, 40.0], zoom: 5.5 },
        text: "Early in the 14th century the Turkish tribal chieftain Osman I founded a state in western Anatolia that endured for almost six centuries. His dynasty was called Osmanli, 'sons of Osman', which became 'Ottoman' in English. Britannica says the empire grew by conquering lands of the Byzantine Empire and beyond.",
        what: "A small Turkish state begins on the Byzantine frontier.",
        where: "Western Anatolia.",
        why: "The sources I read do not explain the principality's early success.",
        uncertain: "Osman's dates are given as '1258?–1324/26' by Britannica Kids, which is itself uncertain. The region drawn is a broad circle, not a border.",
        evidence: "reconstructed", features: [circ("Western Anatolia (broad region)", 30.5, 40.0, 150, "direct", "regional", "reconstructed", "Region of the early state. Not a border.")],
        relatedSites: [], sources: ["brit-ottoman-kids", "brit-ottoman"]
      },
      {
        id: "1453", title: "Constantinople and the Balkans (to 1481)", subject: "Expansion into an empire",
        date: { start: 1444, end: 1481, kind: "period" }, year: 1453, camera: { center: [26.0, 41.0], zoom: 5 },
        text: "Mehmed II, who ruled in 1444–46 and 1451–81, finished the Balkan conquests and seized all of Anatolia. He completed the siege of Constantinople in 1453 and made it the Ottoman capital. The empire grew by conquering Byzantine lands.",
        what: "The Byzantine Empire ends and the Ottomans take its capital.",
        where: "Constantinople and the Balkans.",
        why: "Mehmed II's father, Murad, had begun the Balkan conquests; the task was finished under his son.",
        uncertain: "The fall of the city is covered in more detail in the Byzantium tour. This chapter relies on one encyclopedia article.",
        evidence: "attested", features: [cp], relatedSites: ["constantinople"], sources: ["brit-ottoman-kids"]
      },
      {
        id: "suleyman", title: "Süleyman and the empire at its height (1520–1566)", subject: "Imperial peak",
        date: { start: 1520, end: 1566, kind: "reign" }, camera: { center: [25.0, 44.0], zoom: 4 },
        text: "Britannica Kids says that during Süleyman's long reign the empire was at the height of its political power and close to its maximum extent. It included most of southeastern Europe, including present-day Hungary, the Balkan region, Greece and parts of Ukraine. The same article says the seeds of decline were already planted: as Süleyman grew tired of campaigns, his viziers took more authority.",
        what: "The empire reaches its largest extent, and power begins to move from the sultan to officials.",
        where: "Southeastern Europe, with Constantinople as the capital.",
        why: "A long reign and expansion made the state powerful, but the sultans became less involved in government.",
        uncertain: "The reign dates come from standard chronology and are not in the excerpt I read. The extent drawn is a broad region, not a border, and the empire's reach in the Middle East and North Africa is not covered by my sources.",
        evidence: "reconstructed", features: [cp, circ("Southeastern Europe under Ottoman rule (broad region)", 21.0, 43.0, 500, "direct", "regional", "reconstructed", "Britannica Kids lists Hungary, the Balkans, Greece and parts of Ukraine. Broad region only; borders changed.")],
        relatedSites: ["constantinople"], sources: ["brit-ottoman-kids", "brit-ottoman"]
      },
      {
        id: "lepanto", title: "Lepanto and the first cracks (1571)", subject: "Empire facing European powers",
        date: { start: 1571, end: 1571, kind: "event" }, camera: { center: [21.0, 38.3], zoom: 6 },
        text: "In 1571 the combined fleets of Venice, Spain and the Papal States defeated the Turks at the naval Battle of Lepanto, off the coast of Greece, during the reign of Selim II. Britannica Kids says the defeat dispelled the myth of the invincible Turk. After Süleyman, the army gained control of the sultanate and used it for its own benefit, and few later sultans could rule effectively.",
        what: "A major naval defeat and weaker sultans mark a shift.",
        where: "Off western Greece.",
        why: "Britannica Kids links the weakness at home to the growing strength of European nation-states under strong monarchies.",
        uncertain: "Britannica Kids' account of decline is brief and one-sided. The empire remained a major power for centuries after Lepanto, and the sources I read do not discuss that.",
        evidence: "attested", features: [pt("Lepanto (naval battle area)", 21.3, 38.35, "conflict", "approximate", "attested", "Battle off western Greece; marker approximate.")],
        relatedSites: [], sources: ["brit-ottoman-kids"]
      },
      {
        id: "decline", title: "Centuries of reform and strain (17th–early 20th centuries)", subject: "Declining empire",
        date: { start: 1600, end: 1913, kind: "period" }, camera: { center: [35.0, 38.0], zoom: 3.8 },
        text: "Britannica says the empire had already been in decline for centuries, struggling to maintain a bloated bureaucracy or a centralised administration after various attempts at reform.",
        what: "Repeated reform attempts fail to restore central control.",
        where: "Across the empire.",
        why: "Britannica names the bureaucracy and weak central administration.",
        uncertain: "'Decline' is Britannica's framing and is contested by many historians. This chapter is deliberately brief because the sources I read give no detail on the reforms, the Tanzimat or the wars, which I did not research.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-ottoman"]
      },
      {
        id: "end", title: "Defeat, partition and the Turkish Republic (1918–1923)", subject: "Dissolution and successor republic",
        date: { start: 1918, end: 1923, kind: "event" }, year: 1922, camera: { center: [33.0, 39.5], zoom: 5 },
        text: "After the empire's defeat in the First World War, nationalist movements and partition agreements among the Allies forced it to break into numerous territories, with Turkey as the immediate successor. Britannica Kids says the postwar settlement that greatly reduced Ottoman territory outraged Turkish nationalists. A new government under Mustafa Kemal (Atatürk) emerged at Ankara. The last sultan, Mehmed VI, fled in 1922 after the sultanate was abolished, and the republic was proclaimed in 1923.",
        what: "The empire ends and a republic replaces it.",
        where: "Ankara and the lands of the former empire.",
        why: "Defeat, Allied partition plans and Turkish nationalism.",
        uncertain: "Sources date the end to 1922 (the sultanate's abolition) and 1923 (the republic). This chapter does not cover the war itself, the Armenian genocide, or the population exchanges, which are major subjects I did not research.",
        evidence: "attested", features: [pt("Ankara", 32.8597, 39.9334, "site", "approximate", "attested", "Seat of the nationalist government.")],
        relatedSites: [], sources: ["brit-ottoman", "brit-ottoman-kids"]
      }
    ]
  });
})();
