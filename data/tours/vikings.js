(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "vikings",
    category: "political",
    title: "The Vikings: raiders, settlers and Atlantic explorers",
    description: "From the raid on Lindisfarne in 793 to the settlement of Iceland and Greenland and the brief Norse presence in North America. The tour covers the Viking Age in the British Isles, Normandy and the North Atlantic, and states what the sources I read do not cover, such as eastern Europe.",
    scope: "Scandinavia, the British Isles, Normandy and the North Atlantic",
    span: "793 to c. 1000 CE",
    tags: ["Vikings", "Lindisfarne", "Danelaw", "Normandy", "Iceland", "Vinland"],
    chapters: [
      {
        id: "lindisfarne", title: "Lindisfarne and the start of the Viking Age (793)", subject: "Raiding",
        date: { start: 793, end: 793, kind: "event" }, camera: { center: [-1.8, 55.7], zoom: 7 },
        text: "On 7 June 793 Vikings attacked the monastery at Lindisfarne (Holy Island) off the coast of Northumbria, then the foremost centre of Christianity in that kingdom. Britannica says it was the first recorded Viking raid in England and in Europe more broadly, that it sent shock waves through English Christendom and is often cited as the beginning of the Viking Age. EBSCO says the raiders were from Denmark.",
        what: "A coastal monastery is attacked from the sea.",
        where: "Lindisfarne, off the Northumbrian coast.",
        why: "The sources I read do not explain the Vikings' motives.",
        uncertain: "Britannica Kids says it was not the earliest raid in England but the first to show how serious a threat the Vikings posed; Britannica calls it the first recorded raid. The sources disagree, and the exact date is given only by EBSCO.",
        evidence: "attested", features: [pt("Lindisfarne (Holy Island)", -1.8, 55.67, "conflict", "approximate", "attested", "Monastery raided in 793.")],
        relatedSites: [], sources: ["brit-lindisfarne", "brit-vikings-kids", "ebsco-viking"]
      },
      {
        id: "great-army", title: "The Great Army and the Danelaw (865 onward)", subject: "Conquest and settlement",
        date: { start: 865, end: 899, kind: "period (approximate)" }, camera: { center: [-1.0, 53.0], zoom: 5.5 },
        text: "Britannica says raiding in England began in earnest in 865, when a force led by the sons of Ragnar Lothbrok conquered the ancient kingdoms of East Anglia and Northumbria and reduced Mercia to a fraction of its former size. EBSCO says the raids led to significant changes in the regions invaded, including the establishment of the Danelaw in England.",
        what: "Raiders become conquerors and settlers in eastern England.",
        where: "East Anglia, Northumbria and Mercia.",
        why: "The sources I read do not explain why raiding turned into conquest.",
        uncertain: "The end year 899 is my approximation: the excerpts I read do not say how long the Danelaw lasted or how it was governed. The leaders' names and roles are given as in Britannica ('perhaps Hubba').",
        evidence: "attested", features: [circ("East Anglia, Northumbria, Mercia (broad region)", -1.0, 53.0, 220, "occupation", "regional", "reconstructed", "Kingdoms conquered or reduced from 865; broad region only, not the Danelaw's boundary.")],
        relatedSites: [], sources: ["brit-viking", "ebsco-viking"]
      },
      {
        id: "normandy", title: "Normandy", subject: "Settlement in France",
        date: null, camera: { center: [0.0, 49.2], zoom: 6.5 },
        text: "Britannica Kids says that Rollo's Scandinavian countrymen immigrated in large numbers to settle in northern France, adopted the French language, customs and religion and became known as Normans, and the region became Normandy.",
        what: "Viking settlers become a French-speaking people.",
        where: "Northern France.",
        why: "The sources I read do not give the date or terms of Rollo's grant, so the chapter has no date.",
        uncertain: "This is a brief outline from a single reference article for children.",
        evidence: "reconstructed", features: [circ("Normandy (broad region)", 0.0, 49.2, 120, "occupation", "regional", "reconstructed", "Broad region; not a border.")],
        relatedSites: [], sources: ["brit-vikings-kids"]
      },
      {
        id: "atlantic", title: "Iceland, Greenland and Vinland (c. 900–1000)", subject: "Atlantic settlement",
        date: { start: 900, end: 1010, kind: "period (approximate)" }, camera: { center: [-40.0, 60.0], zoom: 2.8 },
        text: "Britannica says settlers poured into Iceland from at least about 900 and that colonies were founded in Greenland and attempted in North America. Britannica Kids says Erik the Red sailed west from Iceland about 982, named Greenland and founded the first colony there. About the year 1000 a Norse crew landed at L'Anse aux Meadows at the northern tip of Newfoundland, which the Vikings used as a base to explore Canada's Atlantic region. They called the area Vinland, 'Land of Wine', for the wild grapes.",
        what: "Norse settlers cross the North Atlantic and briefly reach North America.",
        where: "Iceland, Greenland and Newfoundland.",
        why: "The sources I read do not give motives.",
        uncertain: "Two sagas (the Saga of the Greenlanders and Erik the Red's Saga) give somewhat different accounts of the first visits to North America (Britannica), and Britannica Kids places Vinland 'probably' in eastern New Brunswick. Who led the Newfoundland landing is not settled in the excerpts I read: EBSCO credits Erik the Red and Leif Eriksson with the western expeditions. The L'Anse aux Meadows site is an archaeological one; the saga details are not.",
        evidence: "reconstructed",
        features: [pt("L'Anse aux Meadows", -55.53, 51.62, "site", "approximate", "attested", "Norse site at the northern tip of Newfoundland; marker approximate."), circ("Iceland (broad region)", -19.0, 64.9, 250, "occupation", "regional", "attested", "Settled from about 900."), circ("Greenland (southwest, broad region)", -45.0, 61.0, 250, "occupation", "regional", "attested", "Colonies founded from Iceland; broad region only.")],
        alternatives: [
          { label: "Different saga accounts", text: "Britannica says the two sagas give somewhat different accounts of the first Viking visits.", sources: ["brit-viking"] },
          { label: "Leif Eriksson and Erik the Red", text: "EBSCO credits notable figures including Erik the Red and Leif Eriksson with the western expeditions.", sources: ["ebsco-viking"] }
        ],
        relatedSites: [], sources: ["brit-viking", "brit-vikings-kids", "ebsco-viking"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover the Vikings in eastern Europe and Russia, Constantinople and the Mediterranean, Scandinavian society, religion, ships, trade or the end of the Viking Age, which the sources I read did not address.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "A short sourced tour is better than a long unsourced one.",
        uncertain: "Viking raiding is described in sources as brutal; this tour gives no casualty figures because the sources I read give none.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing omissions; it makes no new historical claims."
      }
    ]
  });
})();
