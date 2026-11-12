(function () {
  const { B, pt, circ, line } = window.TourKit;
  const ten = pt("Tenochtitlan", -99.1332, 19.4326, "site", "approximate", "attested", "Aztec capital; now under Mexico City.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "aztec-empire",
    category: "political",
    title: "The Aztec Empire: Triple Alliance and conquest",
    description: "How the Mexica founded Tenochtitlan in 1325, built an empire through the 1428 Triple Alliance, and how the Spanish, indigenous allies and smallpox ended it in 1521. It records the founding legend and the sources' accounts separately, and it names the role of indigenous allies and epidemic disease.",
    scope: "The Valley of Mexico and central Mexico",
    span: "1325 to 1521 CE",
    tags: ["Aztec", "Mexica", "Tenochtitlan", "Triple Alliance", "Cortés", "smallpox"],
    chapters: [
      {
        id: "founding", title: "Founding Tenochtitlan (1325)", subject: "City-state and migration legend",
        date: { start: 1325, end: 1325, kind: "traditional" }, camera: { center: [-99.1, 19.45], zoom: 8 },
        text: "Britannica says the Aztec, also called the Mexica or Tenochca, were a Nahuatl-speaking people who founded Tenochtitlan on an island in Lake Texcoco in 1325. According to their calendar, the year was 'two house'. Their long pilgrimage ended when elders on the island saw the eagle, the cactus and the serpent, a sign interpreted by their gods, and they built a temple and the first dwellings there.",
        what: "A migrating people settles an island in a lake.",
        where: "An island in Lake Texcoco, now beneath Mexico City.",
        why: "The sources give the story the Mexica told of the place being shown by a sign.",
        uncertain: "The eagle-and-cactus story is a founding legend. The year 1325 comes from the Mexica calendar as recorded later. The sources I read do not give archaeological dating of the city.",
        evidence: "traditional", features: [ten], relatedSites: ["tenochtitlan"], sources: ["brit-mexico-aztecs", "brit-aztec", "brit-tenochtitlan", "wiki-aztec"]
      },
      {
        id: "triple-alliance", title: "The Triple Alliance (1428)", subject: "Alliance of three city-states",
        date: { start: 1427, end: 1440, kind: "event" }, year: 1428, camera: { center: [-99.0, 19.5], zoom: 8 },
        text: "In 1427 Tenochtitlan, Texcoco, Tlacopan and Huexotzinco went to war against Azcapotzalco, and emerged victorious in 1428, according to Wikipedia. Britannica says that during the reign of Itzcóatl an alliance was formed between Tenochtitlan, Texcoco and Tlacopan, and that it allowed the Aztecs to become the dominant power in central Mexico. Wikipedia notes that the empire is also called the Triple Alliance, and that the alliance's states ruled the Valley of Mexico and the area around it from 1428 to 1521.",
        what: "Three city-states combine to dominate the Valley of Mexico.",
        where: "Tenochtitlan, Texcoco and Tlacopan around Lake Texcoco.",
        why: "Britannica says they conquered their old allies and overlords at Azcapotzalco, under Itzcoatl and his adviser Tlacaelel.",
        uncertain: "The 'Aztec Empire' was an alliance, not a single centralised state, and the sources I read do not describe how tribute or rule worked.",
        evidence: "attested", features: [ten, pt("Texcoco", -98.8833, 19.5167, "alliance", "approximate", "attested", "Alliance member."), pt("Tlacopan", -99.2167, 19.4667, "alliance", "approximate", "attested", "Alliance member.")],
        relatedSites: ["tenochtitlan"], sources: ["brit-aztec-timeline", "brit-mexico-aztecs", "wiki-aztec", "brit-aztec-facts"]
      },
      {
        id: "empire", title: "The empire at its height (15th–early 16th centuries)", subject: "Tributary alliance empire",
        date: { start: 1440, end: 1519, kind: "period" }, camera: { center: [-98.5, 18.5], zoom: 5.2 },
        text: "Britannica says the Aztecs established a vast empire in central and southern Mexico during the 15th and early 16th centuries, and that they were accomplished in agriculture, monumental architecture and trade. By the late 15th century Tenochtitlan was the dominant capital. Britannica says it was built on two islands in Lake Texcoco and connected to the mainland by several causeways.",
        what: "The alliance becomes the dominant power over a wide area.",
        where: "Central and southern Mexico.",
        why: "The sources do not explain how the alliance governed its subjects or what the subjects owed.",
        uncertain: "The sources I read do not describe tribute, religion or war practices, so this chapter does not. The empire's extent is not drawn because I found no map source.",
        evidence: "reconstructed", features: [ten], relatedSites: ["tenochtitlan"], sources: ["brit-aztec", "brit-aztec-timeline", "brit-tenochtitlan"]
      },
      {
        id: "conquest", title: "Cortés, allies and the siege (1519–1521)", subject: "Conquest by Spaniards and indigenous allies",
        date: { start: 1519, end: 1521, kind: "event" }, camera: { center: [-98.5, 19.2], zoom: 7 },
        text: "Britannica says the Spanish conquistadors, led by Hernán Cortés, had superior weaponry and indigenous allies who resented Aztec rule. In June 1520 the Aztecs expelled the Spanish from Tenochtitlan, but the conquistadors launched a destructive 75-day siege. The final offensive began on 22 May 1521 with help from the Aztecs' native rivals, and on 13 August 1521 Cuauhtémoc was defeated and the capital fell. Wikipedia says Cortés raised an army from Tlaxcalans, Texcocans, Totonacs and others discontented with Aztec rule.",
        what: "The empire's capital falls to a coalition of Spaniards and indigenous peoples.",
        where: "Tenochtitlan, with Tlaxcala as the main ally's home.",
        why: "Britannica gives three factors: superior weapons, the allies and smallpox.",
        uncertain: "Britannica calls the campaign 'brutal' and the siege 'destructive'; the sources I read give no casualty figures for the fighting.",
        evidence: "attested", features: [ten, pt("Tlaxcala", -98.2375, 19.3133, "alliance", "approximate", "attested", "Home of a major anti-Aztec ally.")],
        relatedSites: ["tenochtitlan"], sources: ["brit-aztec", "brit-aztec-timeline", "brit-mexico-city-video", "wiki-aztec", "brit-mexico-aztecs"]
      },
      {
        id: "smallpox", title: "Smallpox and what remained", subject: "Epidemic and aftermath",
        date: { start: 1520, end: 1521, kind: "epidemic" }, camera: { center: [-99.13, 19.43], zoom: 8 },
        text: "Britannica says a significant factor in the Spanish victory was the introduction of smallpox, to which the Aztecs had no immunity, and which decimated their population. Wikipedia reports that the outbreak killed more than half the region's population, including the emperor Cuitláhuac. Britannica's video summary adds that the Spanish destroyed the city and later built Mexico City on the same site.",
        what: "Disease and conquest together destroy the city's population and political order.",
        where: "Tenochtitlan and the Valley of Mexico.",
        why: "Populations that had never encountered smallpox had no immunity.",
        uncertain: "'More than 50%' is from Wikipedia and not a precise figure. The sources I read do not describe indigenous life after 1521, the Nahua peoples' survival, or Aztec heritage in modern Mexico.",
        evidence: "attested", features: [ten], relatedSites: ["tenochtitlan"], sources: ["brit-aztec", "wiki-aztec", "brit-mexico-city-video"]
      }
    ]
  });
})();
