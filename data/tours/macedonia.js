(function () {
  const { B, pt, circ, line } = window.TourKit;
  const pella = pt("Pella", 22.5233, 40.7596, "site", "approximate", "attested", "Macedonian capital; Alexander was born here (Britannica: northwest of Thessaloniki).");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "macedonia-ancient",
    category: "political",
    title: "Ancient Macedonia: kingdom, world empire, successor state",
    description: "How a Balkan kingdom became the base for Alexander's empire, why that empire broke into successor kingdoms within a generation, and how Rome ended the Macedonian monarchy. It covers the ancient kingdom only, not the modern state of North Macedonia.",
    scope: "Macedonia, Greece, Persia and the Hellenistic kingdoms",
    span: "to 146 BCE",
    tags: ["Macedonia", "Philip II", "Alexander", "Hellenistic", "Antigonid"],
    chapters: [
      {
        id: "before-philip", title: "A kingdom among rival chiefdoms (before 359 BCE)", subject: "Kingdom within a Balkan patchwork",
        date: null, camera: { center: [22.0, 40.8], zoom: 6 },
        text: "Britannica describes the region's politics before the Romans as a shifting succession of contending city-states and chiefdoms that occasionally integrated into short-lived empires. The kingdom of Philip II in the mid-4th century BCE is the one most closely identified with Macedonia, but none of the states established in that era was very durable.",
        what: "Macedonia is one of several competing powers in the Balkans.",
        where: "Northern Greece, with Pella as the royal capital.",
        why: "The kingdom's later rise needs this unstable background.",
        uncertain: "The sources I read do not describe the early kings, so this chapter has no date and is deliberately brief. It does not cover the question of how Macedonians related to Greeks.",
        evidence: "reconstructed", features: [pella], relatedSites: [], sources: ["brit-n-macedonia"]
      },
      {
        id: "philip", title: "Philip II builds a power (359–336 BCE)", subject: "Kingdom becoming a hegemon",
        date: { start: B(359), end: B(336), kind: "reign" }, camera: { center: [22.8, 39.5], zoom: 5.5 },
        text: "An unrated reference page says Philip II (382–336 BCE) turned a fractured kingdom into a unified state that dominated the Greek world. His victory at Chaeronea in 338 BCE over a coalition including Athens and Thebes ended Greek independence and led to the Corinthian League under his command, with Sparta not part of it. He was assassinated in 336 BCE by a bodyguard, and his son Alexander succeeded him.",
        what: "Macedonia becomes the dominant power in Greece.",
        where: "Pella, Chaeronea in Boeotia, and the Greek cities.",
        why: "The page credits Philip's military and political reforms and his plan to expand, which it says set the stage for Alexander's conquests.",
        uncertain: "The accession year (359 BCE) is from standard chronology and not in the excerpt I read. Most of this chapter comes from an unrated source. Philip's motives and the reason for his assassination are debated.",
        evidence: "reconstructed", features: [pella, pt("Chaeronea", 22.8444, 38.4894, "conflict", "approximate", "attested", "Battle of 338 BCE; marker approximate."), pt("Aegae (Vergina)", 22.3197, 40.4878, "site", "approximate", "attested", "Where Philip was killed, according to the unrated source; marker approximate.")],
        relatedSites: [], sources: ["alexander-site-philip", "brit-n-macedonia"]
      },
      {
        id: "alexander", title: "Alexander's empire (336–323 BCE)", subject: "Conquest empire",
        date: { start: B(336), end: B(323), kind: "reign" }, camera: { center: [48.0, 35.0], zoom: 3.4 },
        text: "Alexander was king of Macedonia from 336 to 323 BCE. He overthrew the Achaemenid Empire, carried Macedonian arms to India and laid the foundations for the Hellenistic world of territorial kingdoms. He died in Babylon at 32 or 33 without a clear arrangement for his succession.",
        what: "A kingdom's army conquers the Persian realm.",
        where: "From Macedonia through Egypt and the Near East to India, with Babylon as the place of death.",
        why: "Britannica credits him with laying the foundations of the Hellenistic world of territorial kingdoms. The Persia tour covers the Achaemenid side of the story.",
        uncertain: "The date of death differs: Britannica gives 13 June 323 BCE and Wikipedia gives 10 or 11 June. Britannica reports speculation about the cause, with malaria, typhoid and poisoning proposed. Alexander's empire was held together by his own rule, which is why it did not last.",
        evidence: "attested", features: [pella, pt("Babylon", 44.4275, 32.5355, "site", "approximate", "attested", "Where Alexander died.")],
        relatedSites: ["babylon"], sources: ["brit-alexander", "wiki-alexander-death"]
      },
      {
        id: "diadochi", title: "The successors divide the empire (323–275 BCE)", subject: "Empire fragmenting into kingdoms",
        date: { start: B(323), end: B(275), kind: "period" }, camera: { center: [35.0, 36.0], zoom: 3.6 },
        text: "Alexander left no clear heir, and his generals, the Diadochi, fought for control. Civil wars from 323 to 301 BCE ended with the Battle of Ipsus in 301. By 275 the empire had splintered into three major kingdoms: the Ptolemaic Kingdom in Egypt, the Seleucid Empire in the east and Antigonid Macedonia.",
        what: "One empire becomes three Hellenistic kingdoms.",
        where: "Egypt (capital Alexandria), Syria and the east, and Macedonia (capital Pella).",
        why: "EBSCO says Alexander left no clear heir, and his generals first named co-rulers before turning to war. The generals took the title of king, following Antigonus in 306.",
        uncertain: "A university course page divides the conflicts into four wars of succession and two phases, and treats Pergamum as a fourth successor state, so the number of states depends on how they are counted.",
        evidence: "attested", features: [pella, pt("Alexandria", 29.9187, 31.2001, "site", "approximate", "attested", "Capital of the Ptolemies."), circ("Seleucid heartland, Syria (broad region)", 38.0, 35.5, 350, "influence", "regional", "reconstructed", "Broad region only; the Seleucid state's borders changed.")],
        relatedSites: ["alexandria"], sources: ["brit-diadochoi", "ebsco-diadochi", "purdue-succession", "brit-alexander"]
      },
      {
        id: "antigonids", title: "Antigonid Macedonia (c. 279–168 BCE)", subject: "Hellenistic kingdom",
        date: { start: B(279), end: B(168), kind: "period" }, camera: { center: [22.5, 40.0], zoom: 5.5 },
        text: "Antigonus I proclaimed himself king in 306 BCE and died in battle. After a turbulent period, Antigonus II Gonatas stabilised the kingdom in 276. After four wars with Rome, beginning in 229, the Romans defeated Philip V at Cynoscephalae in 197 and his son Perseus at Pydna in 168. The monarchy was abolished.",
        what: "The Macedonian monarchy survives for a century, then loses to Rome.",
        where: "Macedonia and Greece.",
        why: "Rome intervened in Greek affairs and defeated Macedonia in successive wars.",
        uncertain: "The start date of the dynasty is 306 in one source and the stable kingdom 276–279 in others. Marker positions are approximate.",
        evidence: "attested", features: [pella, pt("Cynoscephalae (Thessaly)", 22.7, 39.4, "conflict", "approximate", "attested", "Battle of 197 BCE; marker approximate."), pt("Pydna", 22.6, 40.4, "conflict", "approximate", "attested", "Battle of 168 BCE; marker approximate.")],
        relatedSites: [], sources: ["ebsco-antigonid", "ebsco-diadochi", "purdue-succession"]
      },
      {
        id: "roman-province", title: "Rome ends the kingdom (168–146 BCE and after)", subject: "Roman province",
        date: { start: B(168), end: B(146), kind: "period" }, camera: { center: [22.5, 40.5], zoom: 5.2 },
        text: "After Pydna, Rome abolished the monarchy and set up four independent Macedonian republics. When that failed, Rome intervened again, and in 146 BCE it reduced Macedonia to a province, the first such Roman province in the Aegean world. In the same year the Romans destroyed Corinth. Rome later extended its control over the Balkans: the Illyrians were subdued in 9 CE.",
        what: "An independent kingdom becomes a province of Rome.",
        where: "Macedonia, Corinth and the wider Balkans.",
        why: "Britannica says the Romans began expanding into the Balkans at the end of the 3rd century BCE in search of metal ores, slaves and agricultural produce.",
        uncertain: "The 'four republics' arrangement and the uprising of 148 BCE are described in two EBSCO and Purdue summaries only. This tour does not cover the modern state of North Macedonia or modern disputes over the name, which are separate subjects.",
        evidence: "attested", features: [pt("Corinth", 22.8806, 37.9056, "conflict", "approximate", "attested", "Destroyed by the Romans in 146 BCE."), pella],
        relatedSites: [], sources: ["ebsco-antigonid", "purdue-succession", "brit-n-macedonia", "ebsco-diadochi"]
      }
    ]
  });
})();
