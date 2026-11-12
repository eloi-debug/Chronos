(function () {
  const { B, pt, circ, line } = window.TourKit;
  const delphi = pt("Delphi", 22.5009, 38.4824, "site", "approximate", "attested", "Sanctuary and oracle of Apollo; marker approximate.");
  const olympia = pt("Olympia", 21.63, 37.6385, "site", "approximate", "attested", "Sanctuary of Zeus where the Olympic Games were held.");
  const eleusis = pt("Eleusis", 23.5392, 38.0412, "site", "approximate", "attested", "Sanctuary of Demeter and Persephone.");
  const rome = pt("Rome", 12.4964, 41.9028, "site", "approximate", "attested", "City centre.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "greek-roman-religion",
    category: "religion",
    title: "Greek and Roman religion: gods, rites and civic life",
    description: "How the ancient Greeks and Romans worshipped: gods tied to cities and sanctuaries, sacrifice, oracles and games, mystery cults, the Roman state priesthoods, and the emperor's place in religion, until Christianity displaced the older cults. It describes practice and institutions and distinguishes what ancient sources say from what archaeology shows.",
    scope: "Greece, Italy and the Roman Empire",
    span: "c. 600 BCE to the 4th century CE",
    tags: ["Greek religion", "Roman religion", "Delphi", "Eleusis", "pontifex maximus", "imperial cult"],
    chapters: [
      {
        id: "greek-gods", title: "Greek gods, sacrifice and the polis", subject: "Polytheistic civic religion",
        date: null, camera: { center: [23.0, 38.5], zoom: 5.5 },
        text: "Greek religion was polytheistic. Britannica names Zeus as chief deity and others including Apollo, Aphrodite, Ares, Artemis, Demeter, Dionysus and Hermes. Worship centred on rituals and sacrifices, offered at dawn on the altar in the sacred precinct (temenos), usually east of the temple. The gods were content with the burnt portion, and the priests and worshippers shared the rest of the meat.",
        what: "Introduces the pantheon and the basic ritual.",
        where: "Throughout the Greek world, in sanctuaries.",
        why: "Rituals, not creeds, were the main proof of piety.",
        uncertain: "Greek religion was practised over many centuries and regions. The sources I read give a general picture and no dates, so this chapter is undated, and local cults varied.",
        evidence: "reconstructed", features: [pt("Athens (Acropolis)", 23.7257, 37.9715, "site", "approximate", "attested", "Sacred precinct with an olive in the temenos of Pandrosos, per Britannica.")],
        relatedSites: ["athens"], sources: ["brit-greek-religion", "brit-greek-sacred"]
      },
      {
        id: "oracles-games", title: "Oracles and festival games (Delphi and Olympia)", subject: "Panhellenic sanctuaries",
        date: null, camera: { center: [22.0, 38.0], zoom: 6.2 },
        text: "Oracles such as that of Apollo at Delphi were consulted for guidance. Britannica says most oracular shrines had a subterranean chamber, but no trace of one has been found at Delphi, though the Pythia was always said to descend. The Olympic Games formed part of the great festival of Zeus, held every fourth summer in his sacred precinct, the Altis, beside the river Alpheius. The games at Nemea, Delphi and the Isthmus followed the Olympian pattern.",
        what: "Religion also organised shared festivals across Greek cities.",
        where: "Delphi and Olympia.",
        why: "Festivals brought many city-states together around common worship.",
        uncertain: "The Delphi detail is a good example of the gap between ancient testimony and archaeology: texts describe a chamber that excavation has not found. The sources I read do not give dates for the games.",
        evidence: "reconstructed", features: [delphi, olympia], relatedSites: [], sources: ["brit-greek-sacred", "brit-greek-religion"]
      },
      {
        id: "eleusis", title: "Mystery cults: Eleusis", subject: "Initiatory cult",
        date: { start: B(600), end: B(600), kind: "annexation by Athens, approximate" }, camera: { center: [23.5, 38.0], zoom: 8 },
        text: "The Eleusinian Mysteries celebrated Demeter and Persephone, with rites held in the Telesterion at Eleusis between Athens and Megara. The festivals reenacted the sowing, sprouting and reaping of grain. At first the cult was local and initiation was tribal; Britannica says that when Eleusis was annexed to Athens about 600 BCE, initiation lost its function of conferring civic status and became a purely religious ceremony.",
        what: "A local agricultural cult becomes a religious initiation open beyond the community.",
        where: "Eleusis in Attica.",
        why: "Athenian control changed the cult's role.",
        uncertain: "The rites were secret, so the sources I read describe their setting and meaning in general terms only. The 600 BCE date is given as approximate (about 600).",
        evidence: "reconstructed", features: [eleusis], relatedSites: [], sources: ["brit-mystery"]
      },
      {
        id: "roman-gods", title: "Early Roman gods and the Capitoline Triad", subject: "Roman state and household cults",
        date: { start: B(509), end: B(507), kind: "traditional dedication of the Capitoline temple" }, camera: { center: [12.5, 41.9], zoom: 8 },
        text: "The earliest Roman gods were the sky god Jupiter, the war god Mars and Quirinus, with Janus and Vesta also important early. Many other deities were borrowed from or associated with Greek gods. Households had shrines for the Lares and Penates. The most important Roman temple was devoted to the Capitoline Triad of Jupiter, Juno and Minerva, begun by the Etruscan kings and believed to have been dedicated in 509 or 507 BCE after their expulsion.",
        what: "A distinct set of Roman cults is shaped by Etruscan and Greek influence.",
        where: "Rome, with the Capitoline Hill as the centre of state worship.",
        why: "The temple tied the new republic to its chief gods.",
        uncertain: "The dedication date is 'believed' (509 or 507 BCE) in Britannica, and it follows the same traditional chronology as the Republic's founding. The Etruscan origin of the temple is also qualified ('began and perhaps finished').",
        evidence: "traditional", features: [rome], relatedSites: ["rome"], sources: ["brit-roman-beliefs", "brit-roman-summary"]
      },
      {
        id: "roman-state", title: "Priests, augurs and a state religion", subject: "State cult",
        date: null, camera: { center: [12.5, 41.9], zoom: 7 },
        text: "Prayer and sacrifice were offered at temples presided over by priests. The chief priest, head of the state religion, was the pontifex maximus, and the augurs practised divination to determine whether the gods approved of an action. Britannica says the cults of Rome were official in the city itself and supported from the state treasury, but that the state did not press a creed on people in the empire.",
        what: "Describes the institutions of Roman state religion.",
        where: "Rome and the empire.",
        why: "Religion was part of how the state operated, not a separate sphere.",
        uncertain: "Britannica qualifies its own statement about 'official religion', so 'state religion' in the Roman sense differs from a modern state church. The chapter is undated because the sources describe the institutions across centuries.",
        evidence: "reconstructed", features: [rome], relatedSites: ["rome"], sources: ["brit-roman-summary", "brit-rome-3rd"]
      },
      {
        id: "empire-christianity", title: "The emperor, the old gods and Christianity (30 BCE–4th century CE)", subject: "Imperial cult and its displacement",
        date: { start: B(30), end: 399, kind: "period" }, camera: { center: [20.0, 40.0], zoom: 4 },
        text: "After the civil wars ended in 30 BCE, Octavian judged that restoring all the old religious forms would answer a popular belief that disasters were due to neglect of religious duties. The Roman imperial cult identified emperors with the divinely sanctioned authority of the state. Wikipedia reports that the traditional cult was a focus of legislation under Decius and Diocletian. According to Britannica, from 312 CE Christianity became the official religion by a complex and gradual process. Wikipedia adds that Theodosius I ended official support for all other creeds and cults. The emperors passed the title pontifex maximus to the popes.",
        what: "The old cults are revived, tied to the emperor, and then replaced.",
        where: "Throughout the empire.",
        why: "Britannica argues Christianity prevailed, in part because it satisfied Constantine's need for divine support.",
        uncertain: "Sources give different framings. Britannica calls the change from 312 gradual, and Wikipedia gives a decisive step under Theodosius I, without a year in the excerpt I read. 'Pagan' practice did not vanish: Britannica says Roman paganism exerted permanent influences.",
        evidence: "attested", features: [rome, pt("Constantinople", 28.9784, 41.0082, "site", "approximate", "attested", "Eastern capital of the Christianised empire.")],
        relatedSites: ["rome", "constantinople"], sources: ["brit-roman-imperial", "wiki-imperial-cult", "brit-rome-3rd"]
      }
    ]
  });
})();
