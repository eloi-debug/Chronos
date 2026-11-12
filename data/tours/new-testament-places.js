(function () {
  const { B, pt, circ, line } = window.TourKit;
  const jer = pt("Jerusalem", 35.2137, 31.7683, "site", "approximate", "attested", "City centre.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "new-testament-places",
    regions: ["Middle East", "Europe"],
    category: "religion",
    title: "The New Testament: key events and places",
    description: "From Bethlehem and Nazareth through Galilee to Jerusalem, then Paul's journeys to Rome and the destruction of the Temple in 70 CE. For each stop it shows what the Gospels and Acts say, what Christian tradition holds, and what historians and archaeologists can say. The resurrection and other faith claims are reported as faith claims. Traditional sites are marked as traditions, not proven locations.",
    scope: "Roman Judea and Galilee, Syria, Asia Minor, Greece and Rome",
    span: "c. 6 BCE to 73 CE",
    tags: ["New Testament", "Jesus", "Galilee", "Jerusalem", "Paul", "Acts", "Temple destruction"],
    chapters: [
      {
        id: "setting", title: "The setting: Roman Judea and Galilee", subject: "Historical context",
        date: { start: B(6), end: 36, kind: "period (approximate)" }, camera: { center: [35.3, 32.3], zoom: 6.3 },
        text: "Britannica says the prime sources for Jesus are the four canonical Gospels, which at certain points find independent confirmation in Paul's letters. Non-Christian references by Josephus, Tacitus and Suetonius are almost negligible, but they refute the notion that Jesus never existed. Luke dates events by reference to Tiberius's 15th year (c. 29), Pontius Pilate in office as prefect of Judaea (26–36), Herod Antipas as tetrarch (4 BCE–39 CE) and Philip as tetrarch (4 BCE–37 CE). The Galilean villages of Jesus's day were settled in the second and first centuries BCE as Judean families moved north under the expanding Hasmonean kingdom, according to a church magazine article, and had populations of a few hundred to a few thousand.",
        what: "Names the political setting for the Gospel stories.",
        where: "Galilee in the north, Judea around Jerusalem.",
        why: "Dating and location in the Gospels depend on these rulers.",
        uncertain: "The chronology of Jesus's life is uncertain, and the Gospels do not always agree. The church-magazine source for village settlement is a believer's publication and should be checked.",
        evidence: "attested", features: [circ("Galilee (broad region)", 35.45, 32.85, 40, "site", "regional", "attested", "Northern region of Jesus's ministry; broad region only."), circ("Judea (broad region)", 35.2, 31.6, 40, "site", "regional", "attested", "Region around Jerusalem; broad region only.")],
        relatedSites: [], sources: ["brit-christianity-jesus", "brit-biblical-lit-jesus", "brit-jesus", "church-galilee-villages"]
      },
      {
        id: "birth", title: "Bethlehem and Nazareth: birth and upbringing", subject: "Infancy narratives",
        date: { start: B(6), end: B(4), kind: "birth (approximate)" }, camera: { center: [35.25, 32.0], zoom: 8 },
        text: "Britannica dates Jesus's birth to about 6–4 BCE. According to Matthew and Luke he was born in Bethlehem, and Christian tradition marks the site at the Church of the Nativity, built in the 4th century by St Helena over a cave that Justin Martyr had identified in the 2nd century. Britannica says Jesus was a Galilean from Nazareth, a village near Sepphoris. Biblical Archaeology Review reports a courtyard house from the time of Jesus in Nazareth. Luke connects the birth with a Roman census that Josephus dates to 6–7 CE.",
        what: "The Gospels place Jesus's birth in Bethlehem and his upbringing in Nazareth.",
        where: "Bethlehem (about 8 km south of Jerusalem) and Nazareth in Galilee.",
        why: "Christian theology links Bethlehem with a prophecy in Micah.",
        uncertain: "Britannica says some modern New Testament scholars see parts of the Gospel accounts as later additions and hold that Jesus was born in Nazareth. The census date given by Josephus (6–7 CE) conflicts with a birth in 6–4 BCE, so the chronology is unresolved. The Church of the Nativity site is a tradition from the 2nd century onward.",
        evidence: "traditional",
        features: [pt("Bethlehem (Church of the Nativity)", 35.2074, 31.7042, "site", "approximate", "traditional", "Traditional site of the Nativity; marker approximate."), pt("Nazareth", 35.3035, 32.6996, "site", "approximate", "attested", "Jesus's childhood home according to the Gospels.")],
        alternatives: [{ label: "Born in Nazareth", text: "Britannica reports that some modern New Testament scholars hold this view.", sources: ["brit-bethlehem"] }],
        relatedSites: [], sources: ["brit-jesus", "brit-bethlehem", "brit-nativity-church", "bas-where-jesus-walked", "brit-christianity-jesus"]
      },
      {
        id: "galilee", title: "Galilee: baptism, ministry and Capernaum", subject: "Public ministry",
        date: { start: 27, end: 30, kind: "approximate" }, camera: { center: [35.55, 32.85], zoom: 9 },
        text: "Britannica says the Baptism of Jesus and the start of his ministry can be dated about 27/28 CE from the dates in Luke. As a young adult he was baptised by John the Baptist and became an itinerant preacher and healer. Capernaum, on the north-west shore of the Sea of Galilee, was a garrison town and customs station and, Britannica says, his second home, where he chose disciples including Peter, Andrew and Matthew. Excavations have uncovered a 2nd–3rd century synagogue there, and an older one from the time of Jesus may lie beneath it. An unrated source says Italian excavators found a first-century house beneath an octagonal Byzantine church that may be Peter's house, but proof is lacking. The length of the ministry is about one year in the Synoptic Gospels and about three in John.",
        what: "Jesus preaches and gathers disciples around the Sea of Galilee.",
        where: "Capernaum and the Sea of Galilee.",
        why: "Britannica names Capernaum as the base of his Galilean ministry.",
        uncertain: "'Miracles' and healings reported in the Gospels are faith claims, which this tour records but does not evaluate. The house of Peter identification is unproven. The ministry's length (one year or three) depends on which Gospel is followed.",
        evidence: "traditional",
        features: [pt("Capernaum", 35.5753, 32.8803, "site", "approximate", "attested", "Identified by excavation; marker approximate."), circ("Sea of Galilee", 35.59, 32.82, 11, "site", "regional", "attested", "Freshwater lake of the ministry.")],
        relatedSites: [], sources: ["brit-biblical-lit-jesus", "brit-capernaum", "brit-jesus", "bas-house-of-peter", "bas-where-jesus-walked"]
      },
      {
        id: "jerusalem", title: "Jerusalem: arrest, trial and crucifixion", subject: "Passion narratives",
        date: { start: 29, end: 33, kind: "approximate" }, year: 30, camera: { center: [35.23, 31.78], zoom: 11 },
        text: "Britannica says that between 29 and 33 CE Jesus went to Jerusalem for Passover, where he was arrested, tried and executed. The crucifixion under Pontius Pilate, prefect of Judaea in 26–36, was probably about 29–30, 'but again certainty is impossible'. The Gospels place the crucifixion at Golgotha, outside Jerusalem's walls. Britannica says the exact location is uncertain, but most scholars prefer the spot now under the Church of the Holy Sepulchre or Gordon's Calvary north of the Damascus Gate, and that no rival site is supported by any real evidence. The Holy Sepulchre has been continuously recognised since the 4th century, but whether it is the actual location has been hotly debated. Britannica reports that, according to his disciples, Jesus rose from the dead and appeared to them.",
        what: "Jesus is executed by Roman authorities in Jerusalem.",
        where: "Golgotha and the tomb, in or near the Church of the Holy Sepulchre.",
        why: "The Gospels describe an arrest in the context of Passover; this tour does not interpret motives.",
        uncertain: "The resurrection is a central faith claim of Christianity. Historians can say that Jesus's disciples came to believe he had risen, as Britannica puts it, but cannot verify the claim, and this tour does not take a position. The site of Golgotha is uncertain; the Holy Sepulchre tradition rests on identification in 325 by Helena, Constantine's mother, per Wikipedia.",
        evidence: "traditional",
        features: [pt("Church of the Holy Sepulchre (traditional Golgotha)", 35.2299, 31.7784, "site", "approximate", "traditional", "Traditional site since the 4th century; its authenticity is debated. Marker approximate."), pt("Gordon's Calvary / Garden Tomb (alternative)", 35.2297, 31.7835, "site", "approximate", "disputed", "A 19th-century Protestant proposal north of the Damascus Gate; marker approximate.")],
        alternatives: [
          { label: "Church of the Holy Sepulchre", text: "Continuously recognised since the 4th century. Some remains are read as the course of the second north wall; if so, the site lay just outside the city wall in Jesus's time, as Britannica notes.", sources: ["brit-holy-sepulchre", "brit-golgotha"] },
          { label: "Gordon's Calvary", text: "Proposed in the 19th century by Protestant scholars; Wikipedia says there is no consensus on the site.", sources: ["wiki-calvary", "brit-golgotha"] }
        ],
        relatedSites: [], sources: ["brit-jesus", "brit-christianity-jesus", "brit-golgotha", "brit-holy-sepulchre", "wiki-calvary", "kids-jerusalem"]
      },
      {
        id: "paul", title: "Paul's journeys: Damascus to Rome", subject: "Early Christian mission",
        date: { start: 33, end: 64, kind: "approximate" }, camera: { center: [28.0, 38.5], zoom: 4.5 },
        text: "Britannica says Paul was on the road to Damascus to persecute Christians when a vision changed his life; he was converted about 33 CE and died, probably in Rome, around 62–64. During about 20 years from the mid-30s to the mid-50s he established several churches in Asia Minor and at least three in Europe, including Corinth. Paul's seven undisputed letters are Romans, 1 and 2 Corinthians, Galatians, Philippians, 1 Thessalonians and Philemon. A Gallio inscription places him in Corinth in 51 CE; according to Acts he then spent about three years in Ephesus (c. 52–55) before being arrested in Jerusalem, held two years at Caesarea and sent to Rome around 58.",
        what: "Christianity spreads from Judea across the eastern Mediterranean.",
        where: "Damascus, Antioch, Philippi, Thessalonica, Corinth, Ephesus, Caesarea and Rome.",
        why: "Britannica says Paul preached the death, resurrection and lordship of Jesus Christ and wanted to keep pressing west.",
        uncertain: "Britannica says the chronology of Paul's journeys is difficult because Acts does not agree with Paul's own letters, which are more reliable. Dates for his birth, conversion and death are approximate. The lines on the map are schematic and do not follow his routes.",
        evidence: "reconstructed",
        features: [pt("Damascus", 36.2765, 33.5138, "site", "approximate", "attested", "Site of Paul's conversion according to Acts."), pt("Antioch", 36.2, 36.2, "site", "approximate", "attested", "Early centre of the mission; marker approximate."), pt("Philippi", 24.2857, 41.0133, "site", "approximate", "attested", "City in Macedonia; marker approximate."), pt("Thessalonica", 22.9444, 40.6401, "site", "approximate", "attested", "City in Macedonia."), pt("Corinth", 22.8806, 37.9056, "site", "approximate", "attested", "Where Paul spent about 18 months."), pt("Ephesus", 27.3417, 37.9411, "site", "approximate", "attested", "Where Paul stayed about three years, per Acts."), pt("Caesarea", 34.8928, 32.5006, "site", "approximate", "attested", "Where Paul was held, per Acts."), pt("Rome", 12.4964, 41.9028, "site", "approximate", "attested", "Where Paul was imprisoned and probably died."), line("Paul's mission, west to Rome (schematic)", [[36.2765, 33.5138], [36.2, 36.2], [27.3417, 37.9411], [22.8806, 37.9056], [12.4964, 41.9028]], "diffusion", "illustrative", "reconstructed", "Schematic link between key cities, not Paul's actual routes.")],
        relatedSites: [], sources: ["brit-paul", "brit-paul-mission", "brit-biblical-lit-jesus"]
      },
      {
        id: "temple-70", title: "Jerusalem destroyed (66–73 CE)", subject: "End of the Second Temple",
        date: { start: 66, end: 73, kind: "First Jewish Revolt" }, year: 70, camera: { center: [35.23, 31.78], zoom: 11 },
        text: "In April 70 CE, about the time of Passover, the Roman general Titus besieged Jerusalem during the First Jewish Revolt. By August the Romans had breached the final defences and massacred much of the remaining population, and they destroyed the Second Temple. Britannica says the Western Wall is the only extant trace of the Second Temple. Britannica's Holy Sepulchre article notes that the Christian church in Jerusalem fled to Pella about 66 CE. Wikipedia says the loss of the Temple prompted the development of Rabbinic Judaism. The Temple had been rebuilt by Herod the Great starting in 20 or 18 BCE.",
        what: "The Temple that stood in Jesus's day is destroyed.",
        where: "Jerusalem; the Jerusalem church fled to Pella.",
        why: "Rome crushed the Jewish revolt.",
        uncertain: "The Temple's destruction is dated to August 70, either 4 or 30 August by Wikipedia's accounts. This is a Roman-era event rather than a New Testament one; it is included because it ended the Temple that appears in the Gospels. The sources I read do not give casualty figures.",
        evidence: "attested", features: [pt("Temple Mount, Jerusalem", 35.2354, 31.7780, "site", "approximate", "attested", "Site of the First and Second Temples; marker approximate.")],
        relatedSites: [], sources: ["brit-siege-70", "wiki-siege-70", "brit-temple-jerusalem", "wiki-second-temple", "brit-holy-sepulchre"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover the writing, dating and canonisation of the New Testament books, Gospel differences in detail, Peter and the Jerusalem church, Revelation and Patmos, the Roman persecutions or the later growth of the church (see the Christianity tour).",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "Each needs separate sources.",
        uncertain: "Everything here is an outline from encyclopedia and archaeology-society excerpts. Believers and scholars read these places and events differently, and nothing in this tour replaces a specialist history or the texts themselves.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing omissions; it makes no new historical claims."
      }
    ]
  });
})();
