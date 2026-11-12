(function () {
  const { B, pt, circ, line } = window.TourKit;
  const area = circ("Core imperial lands (very broad region)", 10.5, 50.0, 500, "influence", "regional", "reconstructed", "Broad central-European area. The empire's extent changed over a thousand years and this is not a border.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "holy-roman-empire",
    category: "political",
    title: "The Holy Roman Empire: an elective empire of princes",
    description: "How an imperial title revived in 962 became a loose federation of princes, why it lasted until 1806, and how the Reformation and the Peace of Westphalia hollowed out its centre.",
    scope: "Central Europe and northern Italy",
    span: "962 to 1806 CE",
    tags: ["Holy Roman Empire", "Otto I", "Golden Bull", "Westphalia", "electors"],
    chapters: [
      {
        id: "otto-962", title: "Otto I is crowned emperor (962 CE)", subject: "Elective monarchy with an imperial title",
        date: { start: 962, end: 962, kind: "event" }, camera: { center: [11.0, 47.0], zoom: 4.2 },
        text: "Otto I was duke of Saxony and German king from 936. In 962 Pope John XII crowned him emperor in Rome, linking his rule to Charlemagne and the Carolingians. Britannica credits him with consolidating the German Reich by suppressing rebellious vassals and defeating the Hungarians.",
        what: "A German king revives the imperial title in the west.",
        where: "Saxony and the German lands, with the coronation in Rome.",
        why: "The title gave German kings a claim to universal Christian leadership, tied to the pope who crowned them.",
        uncertain: "Dating the empire's start is a convention: 962 is the usual functional date, but some accounts begin at Charlemagne in 800. Borders are not drawn because the empire had none in the modern sense.",
        evidence: "attested", features: [pt("Rome (coronation)", 12.4964, 41.9028, "site", "approximate", "attested", "Where Otto I was crowned."), area],
        alternatives: [{ label: "Beginning in 800 with Charlemagne", text: "A reference page that dates the empire 800–1806 treats 962 as the 'functional founding'.", sources: ["epoch-hre"] }],
        relatedSites: [], sources: ["brit-otto1", "epoch-hre", "brit-hre-summary"]
      },
      {
        id: "golden-bull", title: "Seven electors choose the emperor (1356 CE)", subject: "Elective monarchy codified",
        date: { start: 1356, end: 1356, kind: "event" }, camera: { center: [9.0, 49.5], zoom: 5 },
        text: "Until 1356 the emperor was chosen by the German princes. Emperor Charles IV promulgated the Golden Bull, which placed the election firmly in the hands of seven electors, to ensure that the candidate chosen by the majority succeeded without dispute. It also aimed to remove papal interference.",
        what: "The informal choosing of kings becomes a fixed constitutional procedure.",
        where: "Promulgated at Nürnberg in January 1356, with later chapters added at Metz in December.",
        why: "Britannica says the purpose was to eliminate papal interference and to recognise the importance of the princes, especially the electors.",
        uncertain: "This chapter covers only the outline. The electors' identities and how the system worked in practice are not covered.",
        evidence: "attested", features: [pt("Nürnberg", 11.0767, 49.4521, "site", "approximate", "attested", "First 23 chapters, January 1356."), pt("Metz", 6.1757, 49.1193, "site", "approximate", "attested", "Concluding chapters, December 1356."), area],
        relatedSites: [], sources: ["brit-golden-bull", "brit-hre-summary"]
      },
      {
        id: "reformation", title: "The Reformation divides the princes (16th century)", subject: "Imperial constitution under religious strain",
        date: { start: 1500, end: 1599, kind: "period" }, camera: { center: [10.0, 50.0], zoom: 4.8 },
        text: "During the Reformation the German princes largely defected to the Protestant camp, opposing the Catholic emperor. Outside their own hereditary domains, emperors shared power with the imperial diet.",
        what: "Religious division turns princes into opponents of the emperor.",
        where: "Across the German lands.",
        why: "Princes could protect their own faith and territories against an emperor who was Catholic.",
        uncertain: "The sources I reviewed give only this brief summary; the Peace of Augsburg, specific wars and confessional borders are not covered here.",
        evidence: "reconstructed", features: [area], relatedSites: [], sources: ["brit-hre-summary"]
      },
      {
        id: "westphalia", title: "Westphalia: princes become sovereigns (1648 CE)", subject: "Federation of sovereign states under an emperor",
        date: { start: 1648, end: 1648, kind: "event" }, camera: { center: [8.0, 51.5], zoom: 5.2 },
        text: "The Peace of Westphalia ended the German phase of the Thirty Years' War. It recognised the full territorial sovereignty of the empire's member states, including the right to make treaties, and it extended toleration to Calvinists. Sweden and France gained territory and a say in imperial affairs.",
        what: "The empire becomes a loose federation of about 300 effectively sovereign princes.",
        where: "Münster and Osnabrück, in Westphalia, signed the treaties; the effects covered all the German lands.",
        why: "Britannica says the settlement sealed the fragmentation of the empire into hundreds of autonomous, mostly small entities.",
        uncertain: "Historians argue about how revolutionary Westphalia was. Britannica stresses the weakening of the emperor, while a paper from the Institute for International Law and Justice argues it should be read as a constitutional settlement of religious conflict, not just a birth of state sovereignty.",
        evidence: "attested",
        features: [pt("Münster", 7.6261, 51.9607, "site", "approximate", "attested", "Treaty city."), pt("Osnabrück", 8.0472, 52.2799, "site", "approximate", "attested", "Treaty city."), area],
        alternatives: [{ label: "A constitutional settlement of religion", text: "A paper from the Institute for International Law and Justice argues Westphalia mainly established proto-liberal religious liberties for the empire's estates.", sources: ["iilj-westphalia"] }],
        relatedSites: [], sources: ["brit-westphalia", "brit-germany-westphalia", "brit-hre-summary", "iilj-westphalia"]
      },
      {
        id: "dissolution", title: "The end of the empire (1806 CE)", subject: "Dissolution of the empire",
        date: { start: 1806, end: 1806, kind: "event" }, camera: { center: [10.0, 50.0], zoom: 4.8 },
        text: "On 1 August 1806 the confederated states announced their separation from the empire. On 6 August Francis II abdicated the imperial crown, which Britannica says officially ended an empire of a millennium. Francis had already proclaimed himself emperor of Austria in 1804.",
        what: "The last emperor releases the states from their obligations and the empire ends.",
        where: "German lands; the states left the empire to join a confederation under French protection.",
        why: "A reference page links the break to Napoleon's victory at Austerlitz in 1805 and the formation of the Confederation of the Rhine.",
        uncertain: "The French-protection explanation comes from an unrated secondary source, and the dates come from Britannica. I did not research the empire's legacy in the later German states.",
        evidence: "attested", features: [area], relatedSites: [], sources: ["brit-germany-end-hre", "wiki-dissolution-hre", "stories-hre"]
      }
    ]
  });
})();
