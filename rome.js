(function () {
  const { B, pt, circ, line } = window.TourKit;
  const rome = pt("Rome", 12.4964, 41.9028, "site", "exact", "attested", "City centre.");
  const carthage = pt("Carthage", 10.3233, 36.8528, "site", "approximate", "attested", "Site of the Punic city, near modern Tunis.");
  const constant = pt("Constantinople", 28.9784, 41.0082, "site", "approximate", "attested", "City centre of modern Istanbul; the Byzantium tour is planned.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "rome",
    category: "political",
    title: "Rome: city-state, republic, empire",
    description: "How a Latin city-state became a republic, a Mediterranean power and an empire, and how its western half ended. Each chapter names the kind of state and explains why it changed.",
    scope: "Italy, the Mediterranean, the Roman provinces",
    span: "753 BCE (traditional) to 476 CE",
    tags: ["Rome", "republic", "empire", "Punic Wars", "Augustus"],
    chapters: [
      {
        id: "monarchy", title: "A city under kings (traditionally 753–509 BCE)", subject: "Monarchy in a city-state",
        date: { start: B(753), end: B(509), kind: "traditional" }, year: B(600),
        camera: { center: [12.5, 42.4], zoom: 6 },
        text: "Later Romans agreed that their city was founded in 753 BCE and ruled by seven kings, the last of whom, Lucius Tarquinius Superbus, was remembered as a tyrant. In the sixth century BCE Rome was highly prized by its Etruscan neighbours, and one Etruscan king, Porsenna of Clusium, is said to have defeated the Romans.",
        what: "Rome is a monarchy rather than a republic.",
        where: "Rome in central Italy, with the Etruscan city of Clusium to the north.",
        why: "The late-Republic version of the story became the standard Roman history, so it shaped how Romans understood their own political origins.",
        uncertain: "The founding date and the list of seven kings are Roman tradition, not independently confirmed. The territory overlay shows the nearest earlier snapshot map, not a verified border.",
        evidence: "traditional",
        features: [rome, pt("Clusium (Chiusi)", 11.95, 43.017, "site", "approximate", "attested", "Seat of Porsenna according to Britannica; the marker is the modern town of Chiusi.")],
        relatedSites: ["rome"], sources: ["brit-roman-republic", "wiki-overthrow"]
      },
      {
        id: "republic", title: "Magistrates replace the king (traditionally 509 BCE)", subject: "Republic (city-state)",
        date: { start: B(509), end: B(509), kind: "traditional" }, camera: { center: [12.5, 41.9], zoom: 7 },
        text: "Rome replaced its monarchy with elected magistrates. In the traditional account two consuls, each able to veto the other, were elected for one-year terms, and the wealthiest citizens organised assemblies that decided matters for the city.",
        what: "Executive power moves from a king to annually elected officials.",
        where: "The city of Rome itself; this is a change of government, not of territory.",
        why: "Republican office-holding limited any one man's power, which Romans later treated as the defining feature of their state.",
        uncertain: "Modern scholars disagree about how this happened. Many doubt the story of Lucretia and Brutus, and some think the kingship faded gradually or that the date is off.",
        evidence: "traditional", features: [rome], relatedSites: ["rome"],
        alternatives: [
          { label: "Foreign intervention", text: "Britannica reports the prevalent modern view that Porsenna of Clusium defeated Rome and expelled Tarquinius, ending the monarchy as a by-product of military defeat.", sources: ["brit-roman-republic"] },
          { label: "Gradual fading of the kingship", text: "Some scholars suggest the kingship faded over decades into the largely ceremonial rex sacrorum, and that Roman historians compressed this into one dramatic event. The 509 date comes from Varro's chronology.", sources: ["wiki-overthrow"] }
        ],
        sources: ["brit-roman-republic", "natgeo-republic", "wiki-roman-republic", "wiki-overthrow"]
      },
      {
        id: "punic", title: "Rivalry for the Mediterranean (264–146 BCE)", subject: "Republic expanding overseas",
        date: { start: B(264), end: B(146), kind: "event" }, camera: { center: [12.5, 38.8], zoom: 5 },
        text: "Rome fought Carthage in three wars. The first began over Sicily; Hannibal led Carthaginian forces from about 220 to 200 BCE until Scipio Africanus defeated him. In 146 BCE the Romans destroyed Carthage and enslaved its people.",
        what: "A single Italian republic becomes the dominant power of the western Mediterranean.",
        where: "Sicily, Carthage on the North African coast, and Italy.",
        why: "Britannica says Rome felt obliged to protect Italy and to stop Sicily falling to a strong power such as Carthage. Victory encouraged Rome to look to the whole Mediterranean.",
        uncertain: "The sources used here do not separate Rome's directly governed lands from its allies and dependants, so the map does not claim to show them. The straight line below is a schematic link, not a route.",
        evidence: "attested",
        features: [rome, carthage, circ("Sicily", 14.0, 37.6, 130, "conflict", "regional", "attested", "Island whose control triggered the First Punic War."),
          line("Rome–Carthage rivalry (schematic)", [[12.4964, 41.9028], [10.3233, 36.8528]], "conflict", "illustrative", "reconstructed", "A schematic link between the rivals. It is not a campaign route.")],
        relatedSites: ["rome", "carthage"], sources: ["brit-punic", "brit-roman-republic"]
      },
      {
        id: "crisis", title: "Warlords and civil war (60–31 BCE)", subject: "Republic in crisis",
        date: { start: B(60), end: B(31), kind: "event" }, camera: { center: [16.0, 40.0], zoom: 5 },
        text: "A string of powerful military leaders bent the Republic to their will. Julius Caesar became dictator and was assassinated in 44 BCE; Antony, Lepidus and Octavian then ruled as a triumvirate. Octavian defeated Antony at Actium in 31 BCE.",
        what: "Republican institutions survive in name while armies and commanders decide who rules.",
        where: "Rome and the Mediterranean; the decisive naval battle was at Actium off western Greece.",
        why: "Britannica argues that the state had been destabilised by the unchecked ambitions of military leaders and by political violence.",
        uncertain: "Historians disagree about the endpoint of the Republic: Britannica's student article marks 31 BCE, while the standard Republic date is 27 BCE.",
        evidence: "attested",
        features: [rome, pt("Actium", 20.76, 38.95, "conflict", "approximate", "attested", "Naval battle site at the entrance to the Ambracian Gulf; marker is approximate.")],
        relatedSites: ["rome"], sources: ["openstax-augustus", "brit-roman-empire", "brit-augustus", "brit-kids-augustus"]
      },
      {
        id: "principate", title: "A republic in form, a monarchy in practice (27 BCE)", subject: "Principate (empire)",
        date: { start: B(27), end: B(27), kind: "event" }, camera: { center: [12.5, 41.9], zoom: 7 },
        text: "In 27 BCE the Senate gave Octavian the title Augustus and command of the frontier provinces, and recognised him as princeps senatus. He kept the Senate, assemblies, magistrates and priesthoods, so the old institutions survived while he held supreme authority.",
        what: "Rome stops being governed by competing office-holders and becomes an empire under one ruler.",
        where: "Centred on Rome, with control over the frontier provinces through the army.",
        why: "OpenStax says Augustus avoided Caesar's fate by keeping up the appearance that the Republic was alive.",
        uncertain: "Whether to call Augustus's regime a restored republic or an empire is an interpretive choice, and historians quoted by World History Encyclopedia lean towards calling it a monarchy in practice.",
        evidence: "attested", features: [rome], relatedSites: ["rome"],
        alternatives: [
          { label: "Augustus's own framing", text: "He presented his settlement as restoring the Republic and kept republican offices and institutions.", sources: ["whe-principate"] },
          { label: "Modern assessment", text: "OpenStax concludes that despite this claim he had inaugurated the Empire, with himself as emperor.", sources: ["openstax-augustus"] }
        ],
        sources: ["brit-roman-empire", "whe-principate", "openstax-augustus"]
      },
      {
        id: "division", title: "One empire, two halves (313–395 CE)", subject: "Empire with divided administration",
        date: { start: 313, end: 395, kind: "event" }, camera: { center: [20.0, 40.5], zoom: 4 },
        text: "In 313 Constantine and Licinius issued the Edict of Milan, which ended systematic persecution of Christians and gave all persons freedom of worship. Nicene Christianity became the official religion in 380 under Theodosius I. In 395 the empire split into Western and Eastern halves.",
        what: "The empire changes its religious policy and divides into two administrations.",
        where: "Rome in the west, and the city later centred on by the east (Constantinople).",
        why: "The sources used here describe what happened but give limited explanation for the 395 division, so this chapter does not claim to explain it.",
        uncertain: "The Edict of Milan did not make Christianity the official religion; that came in 380. The Byzantium tour that would cover the eastern half is planned, not built.",
        evidence: "attested", features: [rome, constant], relatedSites: ["rome", "constantinople"],
        sources: ["brit-edict-milan", "brit-roman-empire"]
      },
      {
        id: "fall-west", title: "The West ends, the East continues (410–476 CE)", subject: "Western empire dissolves",
        date: { start: 410, end: 476, kind: "event" }, camera: { center: [18.0, 40.5], zoom: 4 },
        text: "The Visigoths sacked Rome in 410. In 476 the Germanic chieftain Odoacer deposed the last western emperor, Romulus Augustulus, who was spared because of his youth and pensioned off in Campania. The Senate sent the imperial insignia to the Eastern emperor Zeno.",
        what: "The line of western emperors ends while the Roman state continues in the east.",
        where: "Italy; the insignia went from Rome to the eastern court at Constantinople.",
        why: "Odoacer ruled Italy himself and recognised eastern authority by sending the insignia east.",
        uncertain: "The 'fall' is a convention. Wikipedia notes that 4 September 476 is the date by convention, and the sources do not describe everyday life changing on that day.",
        evidence: "attested",
        features: [rome, constant, line("Insignia sent east (schematic)", [[12.4964, 41.9028], [28.9784, 41.0082]], "influence", "illustrative", "reconstructed", "Schematic link only; this is not a travel route.")],
        relatedSites: ["rome", "constantinople"], sources: ["brit-roman-decline", "wiki-fall-west"]
      }
    ]
  });
})();
