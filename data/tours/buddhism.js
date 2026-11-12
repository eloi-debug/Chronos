(function () {
  const { B, pt, circ, line } = window.TourKit;
  const magadha = circ("Magadha and Kosala (broad region)", 84.0, 26.0, 220, "influence", "regional", "reconstructed", "Britannica places the beginnings in the kingdoms of Magadha and Kosala in northeastern India. The circle is a schematic region, not a border.");
  const ceylon = circ("Sri Lanka", 80.7, 7.8, 130, "diffusion", "regional", "reconstructed", "Whole-island region; no specific site is claimed.");
  const luoyang = pt("Luoyang", 112.45, 34.62, "diffusion", "approximate", "reconstructed", "Han capital region; marker is the modern city, and the ancient city lay nearby.");
  const gandhara = circ("Gandhara (broad region)", 71.8, 34.2, 150, "diffusion", "regional", "reconstructed", "Region in modern Pakistan. Not a border.");
  const korea = circ("Korean peninsula", 127.8, 37.0, 250, "diffusion", "regional", "reconstructed", "Peninsula-wide region; the three kingdoms' borders are not mapped.");
  const japan = circ("Japanese archipelago (broad region)", 135.5, 35.0, 300, "diffusion", "regional", "reconstructed", "Regional marker only. The sources used here do not name a specific court location.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "buddhism-spread",
    category: "religion",
    title: "The spread of Buddhism across Asia",
    description: "How a community in northeastern India reached Sri Lanka, Central Asia, China, Korea, Japan and Southeast Asia through royal patronage, missionaries, trade routes and translation. It records transmission history, not doctrine.",
    scope: "South, Central, East and Southeast Asia",
    span: "c. 480 BCE to the 7th century CE",
    tags: ["Buddhism", "Ashoka", "Silk Road", "Gandhara", "China", "Japan"],
    chapters: [
      {
        id: "origins", title: "A community in Magadha and Kosala (c. 480 BCE)", subject: "Early Buddhist community (sangha)",
        date: { start: B(480), end: B(480), kind: "approximate" }, camera: { center: [84.0, 26.0], zoom: 5.5 },
        text: "Buddhism began in northeastern India in the kingdoms of Magadha and Kosala. The followers began as a community of monks, nuns and lay supporters in northern and central India. After the Buddha's death, given by Britannica as about 480 BCE, many followers became wandering ascetics who travelled across the subcontinent.",
        what: "A new religious community forms and starts to spread by travel.",
        where: "Northeastern India, in the kingdoms of Magadha and Kosala.",
        why: "Wandering teachers carried teachings beyond the first region, which set the pattern for later missionary spread.",
        uncertain: "The date of the Buddha's death is given as approximate, and the region drawn is schematic. This tour covers historical transmission and does not evaluate religious claims.",
        evidence: "reconstructed", features: [magadha], relatedSites: [], sources: ["brit-buddhism-spread"]
      },
      {
        id: "ashoka", title: "Royal patronage under Ashoka (3rd century BCE)", subject: "Mauryan state patronage",
        date: { start: B(260), end: B(260), kind: "event" }, camera: { center: [82.5, 17.0], zoom: 4.5 },
        text: "Ashoka's first major event, which he describes in an edict, was a campaign against Kalinga in 260 BCE. The suffering it caused made him reconsider conquest by violence and he was drawn to Buddhism. He built stupas and, according to Britannica, sent missionaries including his son (or younger brother) Mahinda to Sri Lanka.",
        what: "A powerful ruler's support makes Buddhism a state-backed religion.",
        where: "From Magadha to Kalinga, then to Sri Lanka. A local tradition asserts contacts with Khotan and Nepal.",
        why: "Edicts, monasteries and missionaries gave the tradition resources and reach beyond its home region.",
        uncertain: "Royal sponsorship shows what a ruler supported, not what everyone in his territory believed. The Khotan link is local tradition, and Mahinda's relationship to Ashoka differs between sources.",
        evidence: "reconstructed",
        features: [magadha, circ("Kalinga (broad region)", 85.5, 20.5, 160, "conflict", "regional", "attested", "Campaign in 260 BCE described in an Ashoka edict. Region schematic."), ceylon,
          pt("Khotan", 79.92, 37.11, "diffusion", "approximate", "traditional", "Local tradition asserts contact; marker is the modern oasis city."),
          line("Missionary transmission to Sri Lanka (schematic)", [[84.0, 26.0], [80.7, 7.8]], "diffusion", "illustrative", "reconstructed", "Schematic; not a travel route.")],
        relatedSites: [], sources: ["brit-ashoka", "brit-buddhism-spread"]
      },
      {
        id: "silk-road", title: "Trade routes and Gandhara (early centuries CE)", subject: "Buddhism along trade routes",
        date: { start: 1, end: 300, kind: "period" }, camera: { center: [78.0, 35.0], zoom: 3.8 },
        text: "Monks and texts travelled along the Silk Road. Britannica says Buddhism reached Gandhara in modern Pakistan, where in the early centuries CE it interacted with Hellenistic and Roman art and ideas. Wikipedia reports that the first documented translation efforts in China in the 2nd century CE came via the Kushan Empire under Kanishka.",
        what: "A religion of one region becomes pan-Asian through merchant networks and translation.",
        where: "Gandhara, Central Asia and the overland and maritime Silk Roads.",
        why: "Trade routes carried monks, texts and patrons across political boundaries.",
        uncertain: "The date range is broad because Britannica says only 'early centuries'. Kushan connections come from a Wikipedia summary and should be checked against specialist scholarship.",
        evidence: "reconstructed",
        features: [gandhara], relatedSites: [], sources: ["brit-buddhism-spread", "wiki-silk-buddhism", "wiki-chinese-buddhism"]
      },
      {
        id: "china", title: "Entering Han China (1st century CE)", subject: "Buddhism in Han China",
        date: { start: B(100), end: 65, kind: "disputed window" }, year: 65, camera: { center: [112.0, 34.5], zoom: 5 },
        text: "Most scholars place Buddhism's arrival in China in the 1st century CE during the Han dynasty, though no one knows exactly when. Around 65 CE it was practised at the courts of Emperor Ming at Luoyang and King Ying at Pengcheng. At first it was adopted mainly by immigrant communities and gradually spread among the Han Chinese; many translators came from Central Asia.",
        what: "Buddhism enters China and starts to blend with local traditions.",
        where: "Northwestern China into the Han capital region around Luoyang.",
        why: "Translation of Indian texts into Chinese, plus merchant networks, gave Buddhism a foothold that later spread into Korea, Japan and Vietnam.",
        uncertain: "The story that Emperor Ming dreamed of a radiant figure is considered by modern scholarship to be little more than legend. Zürcher puts the introduction between the first half of the 1st century BCE and the middle of the 1st century CE.",
        evidence: "disputed",
        features: [luoyang, pt("Pengcheng (Xuzhou)", 117.18, 34.26, "diffusion", "approximate", "reconstructed", "Court of King Ying of Chu, according to Wikipedia's Silk Road summary."), gandhara,
          line("Transmission from Gandhara region to Han China (schematic)", [[71.8, 34.2], [112.45, 34.62]], "diffusion", "illustrative", "reconstructed", "Schematic; no route is implied.")],
        alternatives: [
          { label: "Legend of Emperor Ming's dream", text: "A traditional account dates the introduction to about 60–68 CE; scholars treat it as legend.", sources: ["ebsco-buddhism-china"] },
          { label: "Earlier or later entry", text: "Some accounts place the introduction as early as the 3rd century BCE; scholars note that Kenneth Ch'en argues Buddhism was already present before Ming.", sources: ["ebsco-buddhism-china"] }
        ],
        relatedSites: [], sources: ["wiki-chinese-buddhism", "wiki-silk-buddhism", "ebsco-buddhism-china", "whe-buddhism-map"]
      },
      {
        id: "korea-japan", title: "Courts adopt the religion: Korea and Japan (4th–6th centuries)", subject: "Court-sponsored transmission",
        date: { start: 372, end: 599, kind: "period" }, camera: { center: [130.0, 36.0], zoom: 4.5 },
        text: "Buddhism reached the Korean peninsula from China in the 4th century CE, first in Koguryŏ, then the other kingdoms. As Britannica puts it, the court accepted it first and it then extended to the people. It came to Japan from Korea in the 6th century; the powerful Soga clan accepted it while others rejected it.",
        what: "Buddhism becomes established in the Korean kingdoms and Japan, with disputes over acceptance.",
        where: "The Korean peninsula and the Japanese archipelago, via northern China.",
        why: "Rulers and clans backed it, and in Japan it was first regarded as a talisman for protecting the country.",
        uncertain: "Specific monk names and dates (such as 372 and 384) come from later chronicles via Wikipedia. The maps show regions only, and the political borders of the Three Kingdoms are not drawn.",
        evidence: "reconstructed", features: [korea, japan, line("China to Korea (schematic)", [[112.45, 34.62], [127.8, 37.0]], "diffusion", "illustrative", "reconstructed", "Schematic."), line("Korea to Japan (schematic)", [[127.8, 37.0], [135.5, 35.0]], "diffusion", "illustrative", "reconstructed", "Schematic.")],
        relatedSites: [], sources: ["brit-buddhism-korea-japan", "wiki-silk-buddhism", "whe-buddhism-map"]
      },
      {
        id: "southeast-asia", title: "Maritime Asia and Java (by the 5th century)", subject: "Missionaries and maritime networks",
        date: { start: 400, end: 499, kind: "period" }, camera: { center: [108.0, 3.0], zoom: 3.5 },
        text: "Missionaries helped spread Buddhism into Southeast Asia, reaching Java by the 5th century CE, according to Britannica. Wikipedia describes the overland and maritime Silk Roads as interlinked, which scholars have called the 'great circle of Buddhism'.",
        what: "Buddhism takes hold in island Southeast Asia as well as the overland north.",
        where: "Java and the sea routes of the Indian Ocean and South China Sea.",
        why: "Maritime trade connected South Asia, Southeast Asia and China.",
        uncertain: "Britannica says Ashoka's missions possibly reached Southeast Asia. The sources used here do not describe the routes, so no route is drawn.",
        evidence: "reconstructed", features: [circ("Java (broad region)", 110.4, -7.4, 330, "diffusion", "regional", "reconstructed", "Island-wide region only.")],
        relatedSites: [], sources: ["brit-buddhism-spread", "wiki-chinese-buddhism"]
      },
      {
        id: "adaptation", title: "Local adaptation and what is left out (6th–7th centuries)", subject: "Regional Buddhist schools",
        date: { start: 500, end: 699, kind: "period" }, camera: { center: [112.0, 34.0], zoom: 3.8 },
        text: "In China, schools such as Tiantai and Chan developed in the 6th and 7th centuries and later passed to Korea and Japan as Tendai and Zen. Britannica observes that Buddhism put down roots in the Chinese family system but found anchorage in the nation itself in Japan, and that introduction into Tibet caused controversies similar to those in Japan.",
        what: "Regional traditions develop their own forms rather than copying one original model.",
        where: "China, Korea and Japan, with Tibet noted in the sources.",
        why: "Buddhism's reception depended on local politics, family structures and existing beliefs.",
        uncertain: "This tour omits Buddhism after Ashoka inside India, Theravada in mainland Southeast Asia, Tibet, and the modern world, and does not cover Buddhism's decline or revival in any region. Those chapters are planned.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["ebsco-buddhism-china", "brit-buddhism-korea-japan", "wiki-chinese-buddhism"]
      }
    ]
  });
})();
