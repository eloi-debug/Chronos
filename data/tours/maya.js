(function () {
  const { B, pt, circ, line } = window.TourKit;
  const tikal = pt("Tikal", -89.6237, 17.222, "site", "approximate", "attested", "Major Classic-period city in the Guatemalan lowlands.");
  const calakmul = pt("Calakmul", -89.81, 18.1056, "site", "approximate", "attested", "Tikal's great rival.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "maya",
    category: "political",
    title: "The Maya: city-states, collapse and survival",
    description: "From early villages to the Classic-period city-states of the lowlands, the 9th-century political collapse, the Postclassic cities of Yucatán and the last independent Maya city taken by Spain in 1697. The Maya did not vanish: this tour separates the collapse of lowland cities from the continued existence of Maya peoples.",
    scope: "Mexico's Yucatán, Guatemala, Belize and Honduras",
    span: "c. 2000 BCE to 1697 CE",
    tags: ["Maya", "Tikal", "Calakmul", "Chichen Itza", "collapse", "Spanish conquest"],
    chapters: [
      {
        id: "preclassic", title: "Villages and early states (c. 2000 BCE–250 CE)", subject: "Early complex societies",
        date: { start: B(2000), end: 250, kind: "Preclassic period" }, camera: { center: [-90.0, 17.5], zoom: 5.2 },
        text: "Britannica says the Maya had settled in villages and were practising agriculture as early as 1500 BCE. Wikipedia dates the Preclassic period to about 2000 BCE–250 CE, when the first complex societies appeared and maize, beans, squash and chili were cultivated. In the Late Preclassic Kaminaljuyu was a major highland centre and Komchen grew in northern Yucatán. Wikipedia says the Late Preclassic flourishing collapsed in the 1st century CE and many great cities were abandoned, for a cause that is unknown.",
        what: "Farming villages become complex societies with cities.",
        where: "The Maya lowlands, highlands and Pacific coast.",
        why: "The sources describe the setting and the crops, not the reasons for state formation.",
        uncertain: "The start of the Preclassic differs between sources (about 1500 BCE for villages, 2000 BCE in Wikipedia). The end-of-Preclassic collapse is unexplained.",
        evidence: "reconstructed", features: [circ("Maya region (broad region)", -90.0, 17.5, 450, "influence", "regional", "reconstructed", "Broad cultural region; the Maya never formed a single state and no border is drawn.")],
        relatedSites: ["tikal"], sources: ["brit-maya", "wiki-maya"]
      },
      {
        id: "classic", title: "The Classic period: rival city-states (250–900 CE)", subject: "Network of city-states",
        date: { start: 250, end: 900, kind: "Classic period" }, camera: { center: [-90.0, 17.5], zoom: 5.5 },
        text: "Britannica says the Classic period lasted from about 250 to about 900 CE. At its height Maya civilisation consisted of more than 40 cities, each with 5,000 to 50,000 people, including Tikal, Uaxactún, Copán, Bonampak, Dos Pilas, Calakmul, Palenque and Río Bec. Wikipedia defines the period by the raising of sculpted monuments with Long Count dates, and says the city-states were linked by a complex trade network, with Tikal and Calakmul as the two great rivals.",
        what: "Dozens of independent cities compete and trade.",
        where: "The southern and central lowlands.",
        why: "The sources give the political structure but not the causes of any particular war or alliance.",
        uncertain: "Population figures per city are ranges. The 'Classic' label is based on dated monuments, so it reflects what archaeologists can read, not necessarily political history.",
        evidence: "attested", features: [tikal, calakmul, pt("Copán", -89.1586, 14.8397, "site", "approximate", "attested", "City in modern Honduras."), pt("Palenque", -92.0462, 17.4838, "site", "approximate", "attested", "City in modern Chiapas, Mexico.")],
        relatedSites: ["tikal"], sources: ["brit-maya", "wiki-maya"]
      },
      {
        id: "collapse", title: "The 9th-century collapse (c. 790–900 CE)", subject: "Political collapse of lowland cities",
        date: { start: 790, end: 909, kind: "collapse" }, camera: { center: [-90.0, 17.3], zoom: 6 },
        text: "Britannica reports that from about 790 in the western part of the central subregion, stela erection virtually stopped, and the paralysis spread eastward over the next 40 years. The last Long Count date in the central subregion corresponds to 889, and by the close of the 9th century almost all of it was abandoned. Wikipedia says the central region suffered a major political collapse, with the abandonment of cities, the ending of dynasties and a northward shift of activity.",
        what: "The great southern cities lose their kings and their populations.",
        where: "The central and southern lowlands.",
        why: "No universally accepted theory explains the collapse, according to Wikipedia. It likely combined endemic warfare, overpopulation with severe environmental degradation, and drought; Britannica names armed conflict and exhaustion of farmland as proposals.",
        uncertain: "Britannica says massive foreign invasion can be discounted as a factor. The cause remains debated, and the end date of 909 is my rounding of 'soon after the close of the 9th century'.",
        evidence: "disputed", features: [tikal, calakmul], relatedSites: ["tikal"],
        alternatives: [
          { label: "Warfare and exhausted farmland", text: "Some scholars suggest armed conflict and the exhaustion of agricultural land.", sources: ["brit-maya"] },
          { label: "Multiple causes", text: "Wikipedia lists internecine warfare, overpopulation, environmental degradation and drought.", sources: ["wiki-maya"] }
        ],
        sources: ["brit-maya", "brit-maya-collapse", "wiki-maya"]
      },
      {
        id: "postclassic", title: "Postclassic cities (900–1519 CE)", subject: "Northern and highland kingdoms",
        date: { start: 900, end: 1519, kind: "Postclassic period" }, camera: { center: [-89.0, 19.5], zoom: 6 },
        text: "Britannica says that during the Postclassic period, cities such as Chichén Itzá, Uxmal and Mayapán on the Yucatán Peninsula continued to flourish for several centuries after the lowland cities had been depopulated. Wikipedia reports that Chichén Itzá and its Puuc neighbours declined dramatically in the 11th century, that no dominant power existed until Mayapán rose in the 12th century, and that the aggressive K'iche' kingdom expanded in the Guatemalan highlands.",
        what: "Political life shifts north and to the highlands.",
        where: "Yucatán and the Guatemalan highlands.",
        why: "Many Postclassic Maya groups had migration myths, according to Wikipedia, which suggests population moved north from the southern lowlands.",
        uncertain: "The sources I read do not describe how the Postclassic cities were governed or how they related to central Mexico.",
        evidence: "attested", features: [pt("Chichén Itzá", -88.5678, 20.6843, "site", "approximate", "attested", "Postclassic city in northern Yucatán."), pt("Mayapán", -89.4614, 20.6292, "site", "approximate", "attested", "Dominant city from the 12th century.")],
        relatedSites: ["chichen-itza"], sources: ["brit-maya", "wiki-maya", "brit-maya-collapse"]
      },
      {
        id: "conquest", title: "Spanish conquest and survival (16th–17th centuries)", subject: "Colonial conquest of independent kingdoms",
        date: { start: 1519, end: 1697, kind: "period" }, camera: { center: [-89.5, 17.5], zoom: 6 },
        text: "Wikipedia says the Spanish Empire colonised Mesoamerica in the 16th century in a lengthy series of campaigns, culminating in the fall of Nojpetén in 1697. This left the Maya kingdoms of the Petén Basin independent until Martín de Ursúa assaulted the Itza capital. Britannica says that by the time the Spaniards conquered the area, most Maya had become village-dwelling farmers who practised the religious rites of their forebears.",
        what: "Spain absorbs the last independent Maya kingdoms.",
        where: "Yucatán, the highlands and the Petén; the last city was Nojpetén.",
        why: "The sources I read do not explain why the campaigns took so long.",
        uncertain: "The Maya themselves continued to exist as peoples, which is why the tour does not end with the conquest. Later history (colonial rule, the 19th- and 20th-century struggles and today's Maya communities) is not covered.",
        evidence: "attested", features: [pt("Nojpetén (Flores)", -89.8903, 16.9333, "conflict", "approximate", "attested", "Last independent Maya city, taken in 1697; marker approximate.")],
        relatedSites: [], sources: ["wiki-maya", "brit-maya"]
      }
    ]
  });
})();
