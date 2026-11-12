(function () {
  const { B, pt, circ, line } = window.TourKit;
  const cp = pt("Constantinople", 28.9784, 41.0082, "site", "approximate", "attested", "Centre of modern Istanbul; the ancient city lay on the same peninsula.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "byzantium",
    category: "political",
    title: "Byzantium: the Roman state in the east",
    description: "From Constantine's 'New Rome' to the Ottoman conquest: the eastern Roman empire's recoveries, losses, its dismemberment in 1204 and its end in 1453. Explains why a Roman state lasted a thousand years after Rome's fall in the west.",
    scope: "Eastern Mediterranean, Anatolia, the Balkans, the Near East",
    span: "324 to 1453 CE",
    tags: ["Byzantium", "Constantinople", "Justinian", "Fourth Crusade", "Ottomans"],
    chapters: [
      {
        id: "new-rome", title: "A new Rome on the Bosporus (324–330 CE)", subject: "Roman empire with a new capital",
        date: { start: 324, end: 330, kind: "event" }, camera: { center: [29.0, 41.0], zoom: 6 },
        text: "Constantine established a 'New Rome' in 324 on the site of the Greek colony of Byzantium and dedicated it in 330. It grew rapidly through favours to immigrants, received a senate and a proconsul, and became the administrative capital of the empire. After Rome's fall in 476, the eastern half carried on with Constantinople as its capital.",
        what: "The empire's centre of gravity moves east to a purpose-built capital.",
        where: "Byzantium on the European shore of the Bosporus, between the Mediterranean and the Black Sea.",
        why: "Britannica says the dedication confirmed a divorce between the emperors and Rome that had been in the making for more than a century. The site was a natural crossing between Europe and Anatolia.",
        uncertain: "'Byzantine' is a modern label derived from the old city's name. The people of the time called the state Roman, and Britannica notes the area was generally termed the Eastern Roman Empire. The label's start date is a convention.",
        evidence: "attested", features: [cp], relatedSites: ["constantinople"],
        sources: ["brit-rome-constantine", "brit-constantine-christianity", "brit-byzantine", "brit-byzantine-summary"]
      },
      {
        id: "justinian", title: "Reconquest under Justinian (527–565 CE)", subject: "Empire attempting to restore the west",
        date: { start: 527, end: 565, kind: "reign" }, camera: { center: [15.0, 38.0], zoom: 4 },
        text: "After the western empire fell to Germanic invaders, Justinian I pursued an ambitious policy of reconquest. It restored Roman rule over much of the Mediterranean, though the sources note that Britain, Gaul and much of Iberia were never regained.",
        what: "The eastern empire briefly extends its direct rule across much of the Mediterranean again.",
        where: "Around the Mediterranean; this tour does not map individual campaigns.",
        why: "Justinian treated the western losses as something to be reversed. The wars strained the eastern state's resources.",
        uncertain: "The regnal dates are from standard chronologies, and the excerpt I read does not state them. The sources I reviewed do not give campaign-level detail or the exact extent, so the territory overlay is only the nearest earlier snapshot.",
        evidence: "reconstructed", features: [cp], relatedSites: ["constantinople"],
        sources: ["wiki-byz-decline", "brit-byzantine"]
      },
      {
        id: "persia-arabs", title: "Exhaustion and the loss of the south (602–642 CE)", subject: "Empire at war with Persia, then the Arabs",
        date: { start: 602, end: 642, kind: "event" }, camera: { center: [38.0, 35.0], zoom: 4.5 },
        text: "A war with Sasanian Persia from 602 to 628 was called the Last Great War of Antiquity. The Persians took the Levant, parts of Anatolia and Egypt, and Heraclius won only after defeating the main Persian army near Nineveh in 627 and restoring the True Cross to Jerusalem in 630. Then Arab armies, victorious at the Yarmuk in 636, took Syria, Palestine, Egypt and Byzantine Mesopotamia.",
        what: "The empire's wealthiest provinces in the south and east are lost, and it contracts to Anatolia and scattered footholds.",
        where: "The Levant, Egypt, Mesopotamia and Anatolia, with Persian forces reaching the Bosporus in 626.",
        why: "Wikipedia says the war and a century of near-continuous conflict left both empires crippled, so neither could resist the Arab conquests.",
        uncertain: "Siege and battle sites are approximate, and the sources give no per-province dates for the Arab conquest beyond the Yarmuk and the general span.",
        evidence: "attested",
        features: [cp, pt("Nineveh (battle area)", 43.15, 36.37, "conflict", "approximate", "attested", "Battle of December 627 near the ruins of Nineveh; marker approximate."), pt("Jerusalem", 35.2137, 31.7683, "site", "approximate", "attested", "True Cross restored 630."), pt("Alexandria", 29.9187, 31.2001, "site", "approximate", "attested", "Taken by the Persians, later lost to the Arabs.")],
        alternatives: [{ label: "Survival after the loss", text: "Wikipedia notes that, unlike Persia, the Byzantine Empire survived the Arab assault and repulsed sieges of its capital in 674–678 and 717–718.", sources: ["wiki-byz-sasanian-war"] }],
        relatedSites: ["constantinople", "alexandria"], sources: ["brit-heraclius", "wiki-byz-sasanian-war"]
      },
      {
        id: "1204", title: "The empire partitioned (1204 CE)", subject: "Empire dismembered by a Crusader-Venetian force",
        date: { start: 1202, end: 1204, kind: "event" }, year: 1204, camera: { center: [26.0, 40.0], zoom: 4.8 },
        text: "Pope Innocent III launched the Fourth Crusade in 1202 to reclaim Jerusalem. It was diverted to Constantinople to restore the ousted Isaac II and his son Alexius IV. When the promised rewards failed, the Venetians and Crusaders took the city in April 1204 and looted it. The Partitio Romaniae divided the empire, and Baldwin of Flanders became Latin emperor.",
        what: "A Christian army from the West conquers the capital of a Christian empire, which splits into rival states.",
        where: "Constantinople; successor states formed at Nicaea, Epirus and Trebizond, with Venetian and crusader holdings in Thrace, the Aegean and the Morea.",
        why: "Britannica argues the Crusade's diversion, plus broken promises and anti-Latin feeling in the city, led the Venetians and Crusaders to take their own reward.",
        uncertain: "World History Encyclopedia suggests the diversion may not have been cynically planned by everyone involved; the sources I reviewed do not settle how planned it was. Successor-state locations are approximate.",
        evidence: "attested",
        features: [cp, pt("Venice", 12.3155, 45.4408, "alliance", "approximate", "attested", "The Venetians had a leading role in the Crusade and took three-eighths of the city."),
          pt("Nicaea (Empire of Nicaea)", 29.72, 40.43, "site", "approximate", "attested", "Successor state in exile; marker is modern İznik."),
          pt("Trebizond", 39.72, 41.0, "site", "approximate", "attested", "Successor state on the Black Sea; marker is modern Trabzon."),
          circ("Epirus (broad region)", 20.9, 39.5, 90, "site", "regional", "attested", "Successor state in western Greece; broad region only.")],
        relatedSites: ["constantinople"], sources: ["brit-byz-fourth-crusade", "whe-1204", "wiki-byz-decline"]
      },
      {
        id: "restoration-decline", title: "Restoration and slow decline (1261–1400 CE)", subject: "Reduced empire under the Palaiologoi",
        date: { start: 1261, end: 1400, kind: "period" }, camera: { center: [27.0, 40.0], zoom: 5 },
        text: "The Empire of Nicaea recaptured Constantinople in 1261, and the Palaiologoi ruled until 1453. The restored empire never regained its former extent or power. The Ottomans conquered the European heartland during the 14th century and made the Byzantines a vassal state in 1371. By 1400 the capital was blockaded and the empire was on the verge of destruction.",
        what: "A restored empire shrinks into a city-state surrounded by the Ottomans.",
        where: "Constantinople, Anatolia and the Balkans.",
        why: "The 1204 sack left lasting damage and the rival Christian states drained the empire's resources.",
        uncertain: "Historians commonly call the loss of the capital in 1204 a fatal blow, though the sources note the empire survived another 250 years. How much to attribute to 1204 versus later Ottoman power is a matter of interpretation.",
        evidence: "attested", features: [cp], relatedSites: ["constantinople"],
        alternatives: [{ label: "A fatal blow", text: "Many historians cite the loss of the capital in 1204 as a fatal blow.", sources: ["wiki-byz-decline"] }, { label: "A true restoration", text: "A Koç University guide notes the Byzantines reasserted themselves and endured another 250 years, with their greatest revival in 1261.", sources: ["ku-late-byzantine"] }],
        sources: ["wiki-byz-decline", "ku-late-byzantine"]
      },
      {
        id: "1453", title: "The fall of Constantinople (1453 CE)", subject: "End of the Roman state in the east",
        date: { start: 1453, end: 1453, kind: "event" }, camera: { center: [29.0, 41.0], zoom: 6 },
        text: "On 29 May 1453 Sultan Mehmed II took the city. The Ottomans breached the land walls after a siege, Emperor Constantine XI died in the fighting, and Mehmed made Constantinople his new capital. The last Byzantine pockets fell within a decade: Athens in 1456–58 and the Morea in 1460.",
        what: "The last territory of the Roman state in the east ends and the Ottoman Empire expands into Eastern Europe.",
        where: "Constantinople, then the Aegean and the Peloponnese.",
        why: "By 1400 the empire had lost almost everything but the capital, which was under blockade.",
        uncertain: "Sources disagree on the siege length: Britannica says 55 days and Wikipedia says 53. The circumstances of Constantine XI's death remain surrounded in myth. The 'end' of the Roman Empire is a convention.",
        evidence: "attested",
        features: [cp, pt("Athens", 23.7257, 37.9715, "conflict", "approximate", "attested", "Fell to the Ottomans 1456–58."), circ("Morea (broad region)", 22.3, 37.3, 120, "conflict", "regional", "attested", "Surrendered 1460; broad region only.")],
        relatedSites: ["constantinople"], sources: ["brit-fall-1453", "wiki-fall-1453"]
      }
    ]
  });
})();
