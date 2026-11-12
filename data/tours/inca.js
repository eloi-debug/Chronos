(function () {
  const { B, pt, circ, line } = window.TourKit;
  const cuzco = pt("Cuzco", -71.9675, -13.5319, "site", "approximate", "attested", "Inca capital.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "inca-empire",
    category: "political",
    title: "The Inca Empire: Tawantinsuyu and the Spanish conquest",
    description: "How a highland state centred on Cuzco grew in under a century into a vast Andean empire, how its roads and quipu-based communication worked, and how civil war and the Spanish destroyed it in 1532–33. The Inca kept records on knotted cords, not writing, so the tour relies heavily on Spanish-era accounts and says so.",
    scope: "The Andes and Pacific coast of South America",
    span: "c. 12th century to 1533 CE",
    tags: ["Inca", "Cuzco", "quipu", "roads", "Atahuallpa", "Pizarro"],
    chapters: [
      {
        id: "cuzco", title: "Cuzco and the rapid expansion (12th–15th centuries)", subject: "Highland state becoming an empire",
        date: { start: 1100, end: 1532, kind: "period (approximate)" }, camera: { center: [-72.0, -13.5], zoom: 4.5 },
        text: "Britannica Kids says the Inca established their capital at Cuzco in the 1100s. In fewer than 100 years they expanded from Cuzco to conquer lands along the Pacific coast of South America, from modern Ecuador south to central Chile, and inland across the Andes. Britannica says that at the time of the Spanish conquest the empire stretched from the northern border of modern Ecuador to the Maule River in central Chile.",
        what: "A small highland polity becomes a vast Andean state.",
        where: "From Cuzco along the Andes and the Pacific coast.",
        why: "The sources I read describe the speed of expansion but not its methods.",
        uncertain: "Dates are approximate. 'Fewer than 100 years' refers to the 15th-century expansion. The sources I read do not describe how the Inca governed conquered peoples.",
        evidence: "reconstructed", features: [cuzco, line("Inca extent along the Andes (schematic axis)", [[-78.0, 0.8], [-72.0, -13.5], [-71.5, -35.5]], "direct", "illustrative", "reconstructed", "A schematic north–south axis from northern Ecuador to the Maule River. It is not a border and it is not a route.")],
        relatedSites: [], sources: ["brit-inca-kids", "brit-inca"]
      },
      {
        id: "roads", title: "Roads, relays and knotted cords", subject: "Administration without writing",
        date: { start: 1400, end: 1532, kind: "period" }, camera: { center: [-75.0, -15.0], zoom: 3.8 },
        text: "The Inca built a vast network of roads with tunnels and suspension bridges, including two main north–south roads, one along the coast of about 3,600 km and one inland along the Andes. Britannica Kids puts the whole system at about 40,000 km. Some roads were built by earlier Andean peoples, but the system reached its greatest extent under the Inca in the 1400s. Use was strictly limited to government and military business, and a relay service carried messages in the form of knotted cords called quipu at about 241 km a day. The Inca had no writing; quipu used knots and their positions to represent numbers.",
        what: "A road and message system holds the empire together.",
        where: "The coast and the Andes.",
        why: "Britannica says the network greatly facilitated the Spanish conquest.",
        uncertain: "What quipu recorded beyond numbers is not described in the sources I read, and I make no claim about that. The road totals are rounded.",
        evidence: "attested", features: [cuzco], relatedSites: [], sources: ["brit-inca", "brit-inca-kids"]
      },
      {
        id: "civil-war", title: "Civil war between two brothers (c. 1527–1532)", subject: "Dynastic civil war",
        date: { start: 1527, end: 1532, kind: "war" }, camera: { center: [-77.5, -4.0], zoom: 5 },
        text: "After the emperor Huayna Capac died around 1527, Britannica says the empire was split between Atahuallpa, who ruled the north from Quito, and his half-brother Huáscar, the legitimate heir, who ruled from Cuzco. The war devastated Inca cities and decimated the population, and Atahuallpa defeated Huáscar's army near Cuzco in 1532.",
        what: "A succession dispute splits the empire just before the Spanish arrive.",
        where: "Quito and Cuzco.",
        why: "Atahuallpa initiated the war against his half-brother, according to Britannica.",
        uncertain: "Britannica Kids calls the two sons of Huayna Capac, and Britannica calls them half-brothers. Atahuallpa's birth year is given as 'around 1502'.",
        evidence: "attested", features: [cuzco, pt("Quito", -78.4678, -0.1807, "site", "approximate", "attested", "Atahuallpa's northern base.")],
        relatedSites: [], sources: ["brit-atahuallpa", "brit-inca-kids", "hs-inca-sources"]
      },
      {
        id: "cajamarca", title: "Cajamarca (1532–1533)", subject: "Capture of the ruler",
        date: { start: 1532, end: 1533, kind: "event" }, camera: { center: [-78.5, -7.2], zoom: 7 },
        text: "Francisco Pizarro, who had come in search of gold, entered Cajamarca on 15 November 1532 with about 180 soldiers. Britannica Kids says the Spanish took advantage of the weakened state of the empire, invited Atahuallpa to a feast, took him prisoner and slaughtered thousands of his men. He offered to fill a room with gold and silver for his release, which Pizarro accepted. After the ransom was paid, the Spanish executed Atahuallpa by strangulation on 29 August 1533, which Britannica says marked the effective end of the Inca empire.",
        what: "A small Spanish force seizes and kills the ruler of a divided empire.",
        where: "Cajamarca in northern Peru.",
        why: "Civil war had weakened the empire, and the road network helped the conquerors.",
        uncertain: "Accounts of what happened at Cajamarca come from Spanish sources, which the HistorySkills page presents as documents to be read critically. The number killed is stated only as 'thousands'.",
        evidence: "attested", features: [pt("Cajamarca", -78.5, -7.1617, "conflict", "approximate", "attested", "Where Atahuallpa was captured.")],
        relatedSites: [], sources: ["brit-atahuallpa", "brit-inca-kids", "hs-inca-sources"]
      },
      {
        id: "aftermath", title: "Cuzco falls and Lima is founded (1533–1535)", subject: "Spanish colonial takeover",
        date: { start: 1533, end: 1535, kind: "event" }, camera: { center: [-75.0, -12.0], zoom: 5.5 },
        text: "Britannica says the empire's disintegration was hastened by the Spanish, who captured Cuzco in 1533 and established Lima in 1535.",
        what: "Spain takes the Inca capital and founds a new one.",
        where: "Cuzco and Lima.",
        why: "Gold, and the collapse of Inca central authority.",
        uncertain: "The sources I read stop at 1535. They do not describe Inca resistance, colonial rule, or what happened to the people afterward, so this tour does not claim the Inca ended entirely in 1533.",
        evidence: "attested", features: [cuzco, pt("Lima", -77.0428, -12.0464, "site", "approximate", "attested", "Founded by the Spanish in 1535.")],
        relatedSites: [], sources: ["brit-atahuallpa", "brit-inca"]
      }
    ]
  });
})();
