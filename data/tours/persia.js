(function () {
  const { B, pt, circ, line } = window.TourKit;
  const persepolis = pt("Persepolis", 52.8916, 29.9355, "site", "approximate", "attested", "Achaemenid ceremonial capital; fell to Alexander in April 330 BCE.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "persia-dynasties",
    category: "political",
    title: "Persia: three dynasties, not one empire",
    description: "The Achaemenid, Parthian and Sasanian states were separate dynasties with different origins and rivals. This tour separates them and shows how each rose, how Rome and Byzantium shaped them, and why the last one fell.",
    scope: "Iran, Mesopotamia, Anatolia and Central Asia",
    span: "559 BCE to 651 CE",
    tags: ["Persia", "Achaemenid", "Parthian", "Sasanian", "Alexander"],
    chapters: [
      {
        id: "cyrus", title: "Cyrus and the first Persian empire (559–539 BCE)", subject: "Dynastic empire (Achaemenid)",
        date: { start: B(559), end: B(539), kind: "event" }, camera: { center: [50.0, 33.0], zoom: 4.2 },
        text: "The Achaemenid Empire was founded by Cyrus II, who inherited the throne of Anshan in 559 BCE. He united several Persian and Iranian groups, conquered his Median cousins (549), then Lydia (546) and Babylon (539). The early dynasty were kings of Anshan in modern Fars.",
        what: "A regional kingdom becomes the largest empire the Middle East had seen.",
        where: "From Fars across Iran into Anatolia and Mesopotamia.",
        why: "Britannica says Cyrus united groups that had not been under his father's control, and then conquered the neighbouring kingdoms in turn.",
        uncertain: "Britannica's two articles give different anchor dates for the start (559 as the reign and 549 for the Median conquest). The overlay shows nearest-earlier snapshots only.",
        evidence: "attested",
        features: [circ("Fars heartland (Anshan, broad region)", 52.5, 30.0, 150, "direct", "regional", "reconstructed", "Region of the early Achaemenid kings. Not a border."), pt("Babylon", 44.4275, 32.5355, "conflict", "approximate", "attested", "Conquered 539 BCE."), pt("Sardis (Lydia)", 28.04, 38.49, "conflict", "approximate", "attested", "Capital of Lydia, conquered 546 BCE; marker approximate.")],
        relatedSites: ["babylon", "persepolis"], sources: ["brit-achaemenid", "brit-ancient-me-achaemenid"]
      },
      {
        id: "darius", title: "Consolidation under Darius I (522–486 BCE)", subject: "Imperial administration",
        date: { start: B(522), end: B(486), kind: "reign" }, camera: { center: [48.0, 33.0], zoom: 4 },
        text: "Under Darius I the empire was consolidated and reorganised. Britannica adds that at its height the empire ruled the whole of the Middle East, that Aramaic became its official language and that its official religion was Zoroastrianism. Greek resistance prevented it from expanding into Europe.",
        what: "An empire of conquest becomes an administered state with a common language of government.",
        where: "Persepolis and the empire's provinces across the Middle East.",
        why: "Administrative reorganisation and a common administrative language let the court govern a huge, diverse area.",
        uncertain: "Darius's regnal dates are from standard chronologies and are not in the excerpt I read. 'Official religion' is Britannica's wording; scholars debate how Zoroastrianism related to royal practice. The Greek wars are covered in the Greek tour. The overlay shows only the nearest-earlier snapshot.",
        evidence: "reconstructed", features: [persepolis], relatedSites: ["persepolis"], sources: ["brit-achaemenid", "brit-ancient-me-achaemenid"]
      },
      {
        id: "alexander", title: "Alexander ends the Achaemenid state (334–330 BCE)", subject: "Dynastic collapse under invasion",
        date: { start: B(334), end: B(330), kind: "event" }, camera: { center: [45.0, 36.0], zoom: 4 },
        text: "Alexander of Macedon invaded Anatolia in 334 BCE. Darius III lost at the Granicus in May 334, Persepolis fell in April 330, and Darius was murdered that summer while fleeing. Britannica says Alexander completed the conquest of the Persian realm nine years after crossing.",
        what: "The Achaemenid dynasty ends and its lands pass to a Macedonian conqueror.",
        where: "Anatolia, Mesopotamia and the Iranian plateau.",
        why: "Britannica marks the beginning of the end from the Granicus defeat, after an Egyptian rebellion in 337–336 had already strained the empire.",
        uncertain: "Britannica's two articles give different spans for the completion of the conquest. Troop numbers and detailed causes are not covered in this tour.",
        evidence: "attested",
        features: [persepolis, pt("Granicus (battle area)", 27.3, 40.2, "conflict", "approximate", "attested", "River in northwest Anatolia; marker approximate.")],
        relatedSites: ["persepolis"], sources: ["brit-achaemenid", "brit-ancient-me-achaemenid"]
      },
      {
        id: "parthians", title: "Seleucid rule and the Parthian rise (c. 250 BCE onward)", subject: "Successor kingdom, then a new dynasty (Parthian)",
        date: { start: B(250), end: B(100), kind: "period" }, camera: { center: [52.0, 35.0], zoom: 4 },
        text: "After Alexander's death his empire broke into Macedonian successor states. The Seleucid kings of Syria controlled most of Anatolia, Mesopotamia and Iran. About 250 BCE the still seminomadic Parthians emerged from a small area southeast of the Caspian Sea, established control over Iran, declared independence from the Seleucids and expanded into Mesopotamia in the 2nd century BCE.",
        what: "Control of Iran passes from a Macedonian successor state to a new Iranian dynasty.",
        where: "Southeast of the Caspian Sea, then across Iran into Mesopotamia.",
        why: "The Seleucid state was one of several successor states, and the Parthians broke away and expanded.",
        uncertain: "The sources I reviewed give only the outline. They do not describe Parthian institutions or their wars with Rome, so this chapter is thin. The Parthian origin area is shown as a broad region.",
        evidence: "reconstructed", features: [circ("Parthian origin area, southeast of the Caspian (broad region)", 55.0, 37.0, 250, "direct", "regional", "reconstructed", "Britannica says only 'a small area southeast of the Caspian Sea'; this is a broad region, not a border.")],
        relatedSites: [], sources: ["brit-ancient-me-achaemenid"]
      },
      {
        id: "sasanians", title: "The Sasanian empire (224–651 CE)", subject: "Dynastic empire (Sasanian)",
        date: { start: 224, end: 651, kind: "period" }, camera: { center: [55.0, 33.0], zoom: 3.6 },
        text: "Ardashir I overthrew the Parthians and became king of kings in 224. The empire changed constantly in size as it reacted to Rome and Byzantium in the west and to the Kushans and Hephthalites in the east. Under Shapur I (241–272) it stretched from Sogdiana and Iberia in the north to the Mazun region of Arabia in the south, and from the Indus to the upper Tigris and Euphrates.",
        what: "A new Persian dynasty replaces the Parthians and becomes Rome's main rival.",
        where: "Iran and Mesopotamia, with frontiers from the Caucasus to the Indus at its greatest.",
        why: "The empire's changing size reflects its pressure from rivals on both sides.",
        uncertain: "Britannica gives the end date as both 642 and 651, and says the Arabs destroyed the dynasty in 637–651, so the end date is a convention. The map shows only a broad area because the borders shifted.",
        evidence: "reconstructed", features: [circ("Iranian plateau (broad region)", 54.0, 32.0, 600, "direct", "regional", "reconstructed", "Core area only; Sasanian borders changed and are not drawn.")],
        relatedSites: [], sources: ["brit-sasanian", "brit-ancient-me-achaemenid"]
      },
      {
        id: "last-war", title: "Last war with Byzantium and the Arab conquest (602–651 CE)", subject: "Dynastic collapse after exhaustion",
        date: { start: 602, end: 651, kind: "event" }, camera: { center: [45.0, 34.0], zoom: 4 },
        text: "The Byzantine–Sasanian war of 602–628 was the last and most devastating of the Roman–Persian wars. After the Persians failed at Constantinople in 626, Heraclius invaded the Persian heartland in 627 and won near Nineveh. Wikipedia says the war left both empires crippled and the Sasanian state rapidly collapsed under Arab attacks, which Britannica dates to 637–651.",
        what: "The Sasanian dynasty ends, and its lands pass to the Muslim Arabs.",
        where: "Mesopotamia, Anatolia and Iran.",
        why: "After a century of near-continuous war, Persia was exhausted and civil-war torn when the Arabs attacked.",
        uncertain: "Unlike Persia, Byzantium survived the Arab assault. Sources I reviewed do not explain why in detail. Nineveh is approximate.",
        evidence: "attested",
        features: [pt("Nineveh (battle area)", 43.15, 36.37, "conflict", "approximate", "attested", "Battle of December 627.")],
        relatedSites: [], sources: ["wiki-byz-sasanian-war", "brit-sasanian", "brit-heraclius"]
      }
    ]
  });
})();
