(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "buddhism-after-ashoka",
    category: "religion",
    title: "Buddhism after Ashoka: Sri Lanka, India's monasteries and Southeast Asia",
    description: "Continues the Buddhism tour: the Mahavihara of Sri Lanka, the monastic universities of India, why Buddhism nearly vanished from its homeland, and how Theravada Buddhism spread from Sri Lanka to Southeast Asia. It records history, not doctrine, and rests on short Britannica excerpts.",
    scope: "India, Sri Lanka and mainland Southeast Asia",
    span: "3rd century BCE to the 19th century CE",
    tags: ["Buddhism", "Theravada", "Sri Lanka", "Nalanda", "decline in India", "Southeast Asia"],
    chapters: [
      {
        id: "sri-lanka", title: "Sri Lanka and the Mahavihara (3rd century BCE onward)", subject: "Royal patronage and a monastic centre",
        date: { start: B(250), end: 1100, kind: "period (approximate)" }, camera: { center: [80.7, 7.9], zoom: 6 },
        text: "According to Sinhalese tradition, Buddhism took root in Sri Lanka soon after the arrival of Ashoka's son Mahinda and six companions, who converted King Devanampiya Tissa and much of the nobility. Tissa built the Mahavihara monastery, which became the main centre of the Theravada version that ultimately dominated Sri Lanka. During the first millennium CE the Theravada tradition coexisted with Hinduism, Mahayana Buddhism and Vajrayana Buddhism. Britannica adds that as Buddhism declined in India it was revived and reformed in Sri Lanka, which became a Theravada kingdom with a unified sangha under Mahavihara leadership.",
        what: "Sri Lanka becomes the centre of Theravada Buddhism.",
        where: "Anuradhapura and the island of Sri Lanka.",
        why: "Royal support and the Mahavihara's authority, according to Britannica.",
        uncertain: "The foundation story is 'Sinhalese tradition'. The date range is approximate, since the excerpts I read do not give a date for the Mahavihara's rise to dominance.",
        evidence: "traditional", features: [circ("Sri Lanka (broad region)", 80.7, 7.9, 130, "diffusion", "regional", "reconstructed", "Whole-island region; no site is claimed.")],
        relatedSites: [], sources: ["brit-buddhism-demise", "brit-theravada-timeline"]
      },
      {
        id: "nalanda", title: "Monastic universities: Nalanda", subject: "Large monasteries",
        date: null, camera: { center: [85.4, 25.1], zoom: 6.5 },
        text: "A Britannica timeline says the Buddhist monastic university of Nalanda in India flourished and remained a world centre of Buddhist study for over 1,000 years. Britannica also says that Indian Buddhism became primarily a monastic movement, and that many monasteries had become very wealthy, employing indentured slaves and paid labourers to care for the monks and the lands they owned.",
        what: "Monasteries become wealthy centres of learning.",
        where: "Nalanda, in Bihar.",
        why: "Britannica later links this wealth and distance from lay supporters to the decline.",
        uncertain: "The timeline entry is garbled in my copy, so I give no date. The labour-practices claim is Britannica's account and I did not check it elsewhere.",
        evidence: "reconstructed", features: [pt("Nalanda", 85.4439, 25.1358, "site", "approximate", "attested", "Monastic university site in Bihar; marker approximate.")],
        relatedSites: [], sources: ["brit-theravada-timeline", "brit-buddhism-demise"]
      },
      {
        id: "decline", title: "Why Buddhism faded in India (to the 19th century)", subject: "Loss of a homeland",
        date: { start: 1100, end: 1899, kind: "decline" }, camera: { center: [80.0, 24.0], zoom: 4.5 },
        text: "Britannica says the collapse of the Pala dynasty in the 12th century gave Indian Buddhism another setback from which it did not recover, and that small pockets of influence remained. It says scholars do not know all the factors. Some suggest Buddhism was so tolerant that it was reabsorbed by a revitalised Hindu tradition, which did happen, but Britannica says a more important factor was that, having become primarily a monastic movement, it had lost touch with its lay supporters. After Muslim invaders sacked the monasteries in the 12th and 13th centuries, the laity showed little interest in a revival. In the 19th century Buddhism was virtually extinct in India, with a few Buddhists in eastern Bengal and Assam.",
        what: "The religion nearly disappears from the land of its origin.",
        where: "Northern and eastern India.",
        why: "Britannica names loss of lay support as the likelier main factor.",
        uncertain: "Britannica says scholars do not know all the contributing factors. The summary article says Buddhism was 'nearly extinct' by the 13th century, while another says 'virtually extinct' by the 19th, which are different emphases.",
        evidence: "disputed", features: [], relatedSites: [],
        alternatives: [
          { label: "Reabsorbed into Hinduism", text: "Britannica says this happened but was less important.", sources: ["brit-buddhism-demise"] },
          { label: "Monasteries cut off from lay supporters", text: "Britannica's preferred explanation.", sources: ["brit-buddhism-demise"] },
          { label: "Nearly extinct by the 13th century", text: "Britannica's summary article dates near-extinction to the 13th century.", sources: ["brit-buddhism-summary"] }
        ],
        sources: ["brit-buddhism-demise", "brit-buddhism-summary"]
      },
      {
        id: "southeast-asia", title: "Theravada in Southeast Asia", subject: "Reform and diffusion from Sri Lanka",
        date: { start: 1100, end: 1299, kind: "period (approximate)" }, camera: { center: [100.0, 15.0], zoom: 4.2 },
        text: "Britannica says the Theravada tradition that was reconstituted in Sri Lanka subsequently spread from there into Southeast Asia, where it exerted a powerful influence. Ashokan emissaries were also said to have gone to Suvarnabhumi, which many modern scholars identify with the Mon country in southern Myanmar and central Thailand. A Britannica timeline says a forest-based Sri Lankan ordination line arrived in Burma and Thailand in the 13th century, that Theravada spread to Laos, and that Pagan was looted by Mongol invaders in 1287.",
        what: "Theravada becomes the dominant tradition of mainland Southeast Asia.",
        where: "Burma, Thailand and Laos.",
        why: "A revived Sri Lankan tradition was exported.",
        uncertain: "The timeline's dates are partly garbled in my copy, so the chapter's dates are approximate. Earlier Buddhist presence in the region is described by Britannica as an identification by modern scholars.",
        evidence: "reconstructed", features: [circ("Mainland Southeast Asia (broad region)", 100.0, 16.0, 600, "diffusion", "regional", "reconstructed", "Broad region; states' borders are not drawn.")],
        relatedSites: [], sources: ["brit-buddhism-demise", "brit-theravada-timeline"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover the Kushan and Gupta periods, Mahayana and Vajrayana in India, Tibet, Central Asia, Buddhist revival in modern India, or Buddhism in the modern world.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "Each needs separate sources.",
        uncertain: "The Spread of Buddhism tour covers transmission to China, Korea, Japan and Java.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing omissions; it makes no new historical claims."
      }
    ]
  });
})();
