(function () {
  const { B, pt, circ, line } = window.TourKit;
  const athens = pt("Athens", 23.7257, 37.9715, "site", "exact", "attested", "City centre.");
  const sparta = pt("Sparta", 22.43, 37.0745, "site", "approximate", "attested", "Britannica notes few ruins survive, so the marker is the modern town.");
  const delos = pt("Delos", 25.2667, 37.3967, "site", "exact", "attested", "Sanctuary island of Apollo; the league's first headquarters and treasury.");
  const aegean = circ("Aegean member states (broad region)", 25.5, 38.5, 330, "alliance", "regional", "reconstructed", "Britannica describes the members as islands and coastal states around the northern and eastern Aegean. Membership counts vary from 150 to 330 in sources, so no per-city map is drawn.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "greek-poleis",
    category: "political",
    title: "Sparta, Athens and the Delian League",
    description: "From a Spartan-led alliance to an Athenian alliance that became an empire, the war that broke it, and the collapse of Spartan power. Distinguishes city-states, alliances and empire.",
    scope: "Greece and the Aegean",
    span: "6th century to 338 BCE",
    tags: ["Greece", "Sparta", "Athens", "alliance", "Delian League", "Persia"],
    chapters: [
      {
        id: "sparta", title: "Sparta: a military oligarchy (6th–2nd centuries BCE)", subject: "City-state (military oligarchy) leading an alliance",
        date: { start: B(600), end: B(101), kind: "period" }, year: B(500), camera: { center: [22.4, 37.4], zoom: 7 },
        text: "Sparta, in Laconia in the southeastern Peloponnese, was ruled by a military oligarchy. Full citizens trained as warriors, perioikoi handled trade and industry, and helots worked the land under severe conditions. Sparta led the Peloponnesian League, an alliance of independent states.",
        what: "A single city-state organises its society for war and leads a land-power alliance.",
        where: "Laconia, with allies across much of the Peloponnese and central Greece, including Corinth.",
        why: "Control of Messenia supplied helot labour that freed Spartan citizens for military training.",
        uncertain: "Few Spartan ruins survive, and the description of Spartan society comes largely from later and outside writers. The alliance area drawn is a broad region, not a border.",
        evidence: "reconstructed",
        features: [sparta, circ("Peloponnesian League heartland (broad region)", 22.4, 37.8, 140, "alliance", "regional", "reconstructed", "Britannica: allies included most major land powers of the Peloponnese and central Greece, plus Corinth. Not a border.")],
        relatedSites: [], sources: ["brit-sparta", "historyskills-leuctra", "brit-peloponnesian"]
      },
      {
        id: "persian-wars", title: "Facing Persia (492–449 BCE)", subject: "Coalition of Greek states against the Achaemenid Persian Empire",
        date: { start: B(492), end: B(449), kind: "event" }, camera: { center: [23.4, 38.3], zoom: 7 },
        text: "Persia invaded mainland Greece twice between 490 and 479 BCE. Athenians and Plataeans repulsed the first invasion at Marathon in September 490. In 480 a small force under the Spartan king Leonidas held Thermopylae for three days, the Greek fleet won at Salamis, and the Greeks won at Plataea in 479.",
        what: "A loose set of rival city-states cooperates against a much larger empire.",
        where: "Marathon and Athens in Attica, Thermopylae in central Greece, Salamis off Athens, and Plataea in Boeotia.",
        why: "The victory at Plataea ended the Persian invasions of the mainland and set the stage for the alliance founded in 478 BCE (next chapter).",
        uncertain: "Troop numbers vary across ancient narratives, so they should be treated as estimates. The Spartans arrived late at Marathon, possibly because of a festival or a local revolt. Battlefield markers are approximate.",
        evidence: "attested",
        features: [athens, sparta,
          pt("Marathon", 23.9667, 38.1167, "conflict", "approximate", "attested", "Plain of Marathon, Attica."),
          pt("Thermopylae", 22.5367, 38.7967, "conflict", "approximate", "attested", "Coastal pass in central Greece."),
          pt("Salamis (strait)", 23.5, 37.95, "conflict", "approximate", "attested", "Strait between Salamis island and Attica."),
          pt("Plataea", 23.2667, 38.2167, "conflict", "approximate", "attested", "Boeotia.")],
        relatedSites: [], sources: ["brit-greco-persian", "brit-marathon", "whe-marathon"]
      },
      {
        id: "league-founded", title: "A league to fight Persia (478 BCE)", subject: "Alliance (symmachia) led by Athens",
        date: { start: B(478), end: B(477), kind: "event" }, camera: { center: [25.0, 38.0], zoom: 6 },
        text: "The Delian League was a confederacy of Greek states under Athenian leadership. It aimed to protect against Persia and support the Ionians in Anatolia. Members could join voluntarily and paid tribute in ships, manpower or money; the treasury and meetings were on the sacred island of Delos.",
        what: "A voluntary alliance of many Aegean states forms under Athenian leadership.",
        where: "Delos, Athens and the coasts and islands of the Aegean.",
        why: "Sparta was reluctant to commit heavily overseas, while Athens had become a major sea power and was willing to lead.",
        uncertain: "Sources disagree on the founding year: 478 BCE (Britannica, Wikipedia) or 477 (a University of Waterloo classics handout). Membership is given as between 150 and 330 states.",
        evidence: "reconstructed", features: [delos, athens, aegean], relatedSites: [],
        sources: ["brit-delian", "wiki-delian", "uwaterloo-delian"]
      },
      {
        id: "athenian-empire", title: "An alliance becomes an empire (460–446 BCE)", subject: "Alliance transforming into an empire",
        date: { start: B(460), end: B(446), kind: "event" }, year: B(454), camera: { center: [24.5, 37.8], zoom: 6 },
        text: "Relations between Athens and Sparta broke down in 461. Athens fought the Peloponnesian League from 460 to 446 and subjugated Aegina, Boeotia and central Greece, but a large expedition to Egypt lost most of the league fleet. The treasury moved from Delos to Athens in 454.",
        what: "Allies who contributed as partners become tribute-paying subjects of Athens.",
        where: "The Aegean, Aegina, Boeotia and central Greece, with a failed campaign in Egypt.",
        why: "Athens extended its reach and demanded ever more tribute, and Britannica calls the result in effect an Athenian empire.",
        uncertain: "Britannica and Wikipedia both call it an empire, but the sources used here do not give each member's status, so the map shows only a broad tributary region. The treasury move is described as a symbolic act in Wikipedia.",
        evidence: "reconstructed",
        features: [delos, athens,
          circ("Tributary Aegean states (broad region)", 25.5, 38.5, 330, "tributary", "regional", "reconstructed", "Broad region only; individual member status is not mapped."),
          line("Treasury moved to Athens, 454 BCE (schematic)", [[25.2667, 37.3967], [23.7257, 37.9715]], "direct", "illustrative", "reconstructed", "Schematic link."),
          pt("Aegina", 23.4286, 37.7467, "conflict", "approximate", "attested", "Subjugated by Athens during this period according to Britannica.")],
        relatedSites: [], sources: ["brit-delian", "wiki-delian"]
      },
      {
        id: "peloponnesian-war", title: "The war that broke the league (431–404 BCE)", subject: "Rival alliances at war",
        date: { start: B(431), end: B(404), kind: "event" }, camera: { center: [24.5, 38.5], zoom: 5.5 },
        text: "Athens, head of the Delian League, fought Sparta, head of the Peloponnesian League. Tribute and military demands on Athens' allies rose during the war. Persia backed Sparta from 413, Sparta won at Aegospotami in 405, Athens fell, and the league was dissolved in 404.",
        what: "A war between two alliance systems ends with Athens' empire dissolved and Spartan oligarchies installed.",
        where: "Greece and the Aegean; the decisive battle was at Aegospotami on the Hellespont.",
        why: "Wikipedia says the threat the league posed to Spartan leadership, combined with Athens' heavy-handed administration, led to war.",
        uncertain: "The decisive battle site is approximate. Britannica says Sparta imposed the terms that disbanded the league, while Wikipedia credits the general Lysander with directing the dissolution.",
        evidence: "attested",
        features: [athens, sparta, pt("Aegospotami", 26.65, 40.4, "conflict", "approximate", "attested", "On the Thracian Chersonese; marker approximate.")],
        relatedSites: [], sources: ["brit-peloponnesian", "wiki-peloponnesian", "brit-delian"]
      },
      {
        id: "sparta-decline", title: "Sparta overreaches (382–362 BCE)", subject: "Hegemonic city-state in decline",
        date: { start: B(382), end: B(362), kind: "event" }, camera: { center: [22.7, 38.0], zoom: 6.5 },
        text: "Sparta occupied the Theban citadel in 382 BCE and became involved in Persian civil wars, overextending its power. In 371 Thebes under Epaminondas crushed a Spartan army at Leuctra and the Spartan king Cleombrotus was killed. Thebes then helped found Messene in 369, freeing the Messenian helots.",
        what: "Sparta loses its leadership of Greece and much of its territory and labour supply.",
        where: "Boeotia (Leuctra), Messenia, and the Peloponnese.",
        why: "Allies and subject states drifted away after the defeat, and Wikipedia reports that more than a quarter of Sparta's full citizens died.",
        uncertain: "Aristotle is reported to have called Leuctra the single blow that ended Spartan dominance, while another source stresses the long-run shrinking of the citizen body. Marker positions are approximate.",
        evidence: "attested",
        features: [sparta, pt("Leuctra", 23.17, 38.19, "conflict", "approximate", "attested", "Boeotia; marker approximate."),
          pt("Thebes", 23.319, 38.32, "site", "approximate", "attested", "Leader of the Boeotian League."),
          pt("Messene (Mount Ithome area)", 21.92, 37.18, "site", "approximate", "attested", "Founded 369 BCE; marker approximate.")],
        alternatives: [
          { label: "A single decisive blow", text: "Wikipedia reports that, per Aristotle, Leuctra was the blow that ended Spartan dominance.", sources: ["wiki-leuctra"] },
          { label: "Long-term shrinking of the citizen body", text: "HistorySkills argues that strict citizenship rules had already left the Spartiates too few to refill their ranks.", sources: ["historyskills-leuctra"] }
        ],
        relatedSites: [], sources: ["brit-sparta", "brit-leuctra", "whe-leuctra", "wiki-leuctra", "historyskills-leuctra"]
      },
      {
        id: "legacy", title: "Weakened city-states and Macedonia (338 BCE)", subject: "City-states under a rising kingdom",
        date: { start: B(338), end: B(338), kind: "event" }, camera: { center: [23.0, 39.0], zoom: 5 },
        text: "Theban dominance was short-lived, and Athens and Sparta stayed weak. World History Encyclopedia says that left the Greek cities open to conquest, which Philip II of Macedonia exploited in 338 BCE. Sparta's oligarchy nevertheless lasted into the second century BCE according to Britannica.",
        what: "The era of competing city-state hegemonies ends with outside domination.",
        where: "The Greek mainland, from Athens and Sparta to the north.",
        why: "Britannica Kids notes that the Peloponnesian War weakened all the city-states, making them vulnerable to Macedonia.",
        uncertain: "This tour stops at 338 BCE. The Macedonian kingdom, the Hellenistic period and Rome's absorption of Greece are not covered.",
        evidence: "attested", features: [athens, sparta], relatedSites: [],
        sources: ["whe-leuctra", "brit-sparta", "brit-peloponnesian-kids"]
      }
    ]
  });
})();
