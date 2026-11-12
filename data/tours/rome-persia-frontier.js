(function () {
  const { B, pt, circ, line } = window.TourKit;
  const ctesiphon = pt("Ctesiphon", 44.58, 33.09, "conflict", "approximate", "attested", "Parthian and Sasanian capital on the Tigris; marker approximate.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "rome-persia-frontier",
    category: "political",
    title: "Rome and Persia II: the long frontier war",
    description: "From Carrhae in 53 BCE to Valerian's capture in 260 CE: the wars between Rome and the Parthian and Sasanian empires over Armenia and Mesopotamia. It continues the Persia tour, whose last chapter covers the final war of 602–628, and uses short excerpts, so it is an outline.",
    scope: "Mesopotamia, Armenia and Syria",
    span: "54 BCE to 260 CE",
    tags: ["Rome", "Parthia", "Sasanian", "Carrhae", "Valerian", "Mesopotamia"],
    chapters: [
      {
        id: "carrhae", title: "Carrhae: the Republic's first defeat by Parthia (53 BCE)", subject: "Roman expedition against Parthia",
        date: { start: B(54), end: B(53), kind: "campaign" }, camera: { center: [39.0, 37.0], zoom: 5.5 },
        text: "Wikipedia says battles between the Parthian Empire and the Roman Republic began in 54 BCE, and that this first incursion was repulsed, notably at the Battle of Carrhae in 53 BCE. Britannica says the Roman senator Marcus Licinius Crassus was elected to a second consular term in 55 BCE alongside Pompey. Livius places the defeat of Crassus at Harran (Carrhae), an ancient city in Mesopotamia with a temple of the moon god Sin.",
        what: "A Roman army is defeated deep in Mesopotamia.",
        where: "Carrhae (Harran), in northern Mesopotamia.",
        why: "The excerpts I read do not give the causes of the expedition or the course of the battle.",
        uncertain: "My sources give the outline and the place only. Casualty figures and the details of Crassus's death are not covered here.",
        evidence: "attested", features: [pt("Carrhae (Harran)", 39.03, 36.86, "conflict", "approximate", "attested", "Battle site; marker is modern Harran, Türkiye.")],
        relatedSites: [], sources: ["brit-carrhae", "livius-carrhae", "wiki-roman-parthian"]
      },
      {
        id: "trajan", title: "Trajan invades Mesopotamia (113–117 CE)", subject: "Roman expansion east",
        date: { start: 113, end: 117, kind: "campaign" }, camera: { center: [43.0, 35.0], zoom: 5 },
        text: "World History Encyclopedia says that in 114 CE the emperor Trajan successfully invaded Armenia and Upper Mesopotamia, captured the Parthian capital Ctesiphon and annexed both territories. Another Jewish uprising, declining troop morale and illness forced him to withdraw. His successor Hadrian made peace with the Parthians and left the provinces to client kings.",
        what: "Rome takes and then abandons Mesopotamia.",
        where: "Armenia, Upper Mesopotamia and Ctesiphon.",
        why: "World History Encyclopedia gives unrest, morale and illness as reasons for the withdrawal.",
        uncertain: "Dates for the campaign vary in the sources I saw, so the range is approximate.",
        evidence: "attested", features: [ctesiphon], relatedSites: [], sources: ["whe-legions-mesopotamia", "wiki-roman-parthian"]
      },
      {
        id: "severus", title: "Septimius Severus and the Mesopotamian province (196–198 CE)", subject: "Roman annexation",
        date: { start: 196, end: 198, kind: "campaign" }, camera: { center: [43.0, 35.5], zoom: 5 },
        text: "Wikipedia says that under Vologases V (r. 191–208) the Parthian Empire was declining because of wars with the Romans, civil wars and regional revolts. Septimius Severus invaded in 196 and again two years later, sacking Ctesiphon. World History Encyclopedia says Mesopotamia was finally annexed by Severus in his campaign of 198 as a bulwark for the eastern provinces, and that he created two new legions, Legio I and III Parthica, to defend it.",
        what: "Rome holds Mesopotamia as a province.",
        where: "Ctesiphon and Mesopotamia.",
        why: "Severus saw the territory as a defensive buffer.",
        uncertain: "The sources I read do not explain the Parthian decline beyond the causes named, or the year the Parthian dynasty fell to the Sasanians (see the Persia tour).",
        evidence: "attested", features: [ctesiphon], relatedSites: [], sources: ["wiki-shapur1", "whe-legions-mesopotamia"]
      },
      {
        id: "valerian", title: "Shapur I captures an emperor (240–260 CE)", subject: "Sasanian offensive",
        date: { start: 240, end: 260, kind: "campaigns" }, camera: { center: [39.0, 36.5], zoom: 5 },
        text: "World History Encyclopedia says that in 260 CE King Shapur I of the Sasanian Empire (224–651) invaded the Roman province and defeated and captured the emperor Valerian near Edessa, and that Valerian's son Gallienus took the throne. Wikipedia says Valerian had recovered Antioch by 257, pursued the Persians to Edessa and was captured with the remnant of his army, the first time a Roman emperor was taken prisoner. Shapur then advanced into Asia Minor and deported many Roman subjects. The Roman–Persian wars article says that Odaenathus of Palmyra then forced the Persians to withdraw.",
        what: "A Roman emperor is captured by a Persian king.",
        where: "Edessa and Syria.",
        why: "Rome was at war on several fronts, according to the sources, though the excerpts I read do not give details.",
        uncertain: "World History Encyclopedia adds a claim about Valerian's treatment in captivity; the other sources I read do not mention it, so I have not repeated it as fact. Shapur's reign is given as 240–270.",
        evidence: "attested", features: [pt("Edessa (Urfa)", 38.79, 37.16, "conflict", "approximate", "attested", "Battle area between Carrhae and Edessa; marker approximate.")],
        relatedSites: [], sources: ["whe-legions-mesopotamia", "wiki-edessa", "wiki-shapur1", "wiki-roman-persian-wars"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover the other Roman–Parthian wars, the third-century Roman crisis, Palmyra, the 4th- to 6th-century wars or the war of 602–628, the last of which is in the Persia and Byzantium tours.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "Each needs separate sources.",
        uncertain: "Wikipedia's article on the Roman–Parthian wars lists further wars that this tour does not describe.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["wiki-roman-parthian"]
      }
    ]
  });
})();
