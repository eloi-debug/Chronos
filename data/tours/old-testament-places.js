(function () {
  const { B, pt, circ, line } = window.TourKit;
  const jer = pt("Jerusalem", 35.2137, 31.7683, "site", "approximate", "attested", "City centre; capital of the kingdom of Judah in the biblical account.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "old-testament-places",
    regions: ["Middle East"],
    category: "religion",
    title: "The Old Testament (Hebrew Bible): key events and places",
    description: "Seven stops from Eden to the return from Babylon, each showing where the biblical text places an event, what Jewish and Christian tradition says, and what historians and archaeologists can say. The three lines are kept apart. The tour does not judge whether the narratives are true as faith; where location or date is disputed, it marks the place as a proposal.",
    scope: "The Near East from Mesopotamia and Egypt to Canaan",
    span: "From primeval narratives to c. 515 BCE",
    tags: ["Old Testament", "Hebrew Bible", "Exodus", "Sinai", "David", "Solomon's Temple", "Babylonian exile"],
    chapters: [
      {
        id: "eden-flood", title: "Eden and the Flood: places the text names", subject: "Primeval narratives",
        status: "symbolic", date: null, camera: { center: [44.0, 36.0], zoom: 4.2 },
        text: "Genesis describes a garden of Eden as the source of four rivers and tells of a great flood. Wikipedia lists several proposals for Eden's location: the head of the Persian Gulf where the Tigris and Euphrates reach the sea, Armenia, or the entire Fertile Crescent. Britannica says the name Ararat, where the Ark rested in the biblical account, is the Hebrew equivalent of Urartu, a kingdom that flourished between the Aras and the Upper Tigris rivers. Britannica adds that the Flood story shares similarities with older Babylonian flood stories such as Utnapishtim's in the Gilgamesh epic, but with a monotheistic emphasis.",
        what: "Introduces the opening narratives and the places they name.",
        where: "Eden is not placed on the map. The region called Ararat is shown as a broad region.",
        why: "The narratives are central to Jewish and Christian tradition and have clear Mesopotamian parallels.",
        uncertain: "Eden's location is not agreed, and several scholars treat the narrative as sacred story, not geography, so it is listed as unmapped. The Mesopotamia flood chapters of the Myths & Mysteries tour cover the parallels. The Ark's landing place is a matter of tradition; no source I read identifies a site.",
        evidence: "traditional",
        features: [
          { name: "Garden of Eden", kind: "site", precision: "unmapped", evidence: "traditional", note: "Proposed locations include the head of the Persian Gulf, Armenia and the whole Fertile Crescent; none is established, so it is not drawn.", geometry: null },
          circ("Land of Ararat / Urartu (broad region)", 43.5, 39.5, 260, "site", "regional", "traditional", "Britannica links biblical 'Ararat' to the kingdom of Urartu between the Aras and the Upper Tigris. This marks the biblical region, not a landing site for the Ark.")
        ],
        relatedSites: [], sources: ["wiki-eden", "brit-noahs-ark"]
      },
      {
        id: "patriarchs", title: "Abraham and the patriarchs: Canaan in the narrative", subject: "Patriarchal narratives",
        status: "disputed", date: null, camera: { center: [37.0, 33.0], zoom: 4.8 },
        text: "World History Encyclopedia says that, according to the Bible, the land of Israel was colonised by Abram (later Abraham), developed by his son Isaac and grandson Jacob, also known as Israel. Scholars disagree about these stories. An apologetics-leaning archaeology summary reports that some scholars argue cultural details fit the second millennium BCE, while many mainstream historians see the stories as later literary compositions reflecting first-millennium concerns, with little recoverable historical core.",
        what: "Names the founding figures of the nation in the biblical account.",
        where: "Canaan, which the narrative describes as the land Abraham entered. Individual stops are not mapped.",
        why: "These figures are the starting point for Jewish and Christian ideas of covenant.",
        uncertain: "The sources I read give no dates for the patriarchs, so this chapter is undated. The route from Mesopotamia to Canaan is told in Genesis, which I did not retrieve as a source, so I do not map it. The summary of scholarship comes from one unrated source.",
        evidence: "disputed", features: [circ("Canaan (broad region)", 35.2, 32.0, 150, "site", "regional", "traditional", "The land of the patriarchal narratives; broad region only.")],
        relatedSites: [], sources: ["whe-kingdom-israel", "apologiahub-archaeology"]
      },
      {
        id: "exodus-sinai", title: "Egypt, the Exodus and Mount Sinai", subject: "Exodus and covenant narrative",
        status: "disputed", date: { start: B(1208), end: B(1208), kind: "Merneptah Stele (earliest mention of Israel)" }, camera: { center: [33.0, 29.5], zoom: 5.3 },
        text: "The Merneptah Stele, set up in about 1208 BCE, is the earliest known reference to Israel outside the Bible. It names Israel among peoples in Canaan and says Israel is 'laid waste', and the determinative suggests a people, not a place. The stele does not confirm the Exodus. Archaeologists disagree about the Exodus narrative: an apologetics-leaning summary says there is no direct Egyptian record and no archaeological trace of a large wilderness population in Sinai, so many treat it as largely legendary, while others argue for a smaller historical kernel. Britannica says Mount Sinai is the principal site of divine revelation in Jewish history, where God is said to have given Moses the Ten Commandments, and that the biblical place-names cannot be identified with present sites, so a positive identification is impossible. Jebel Musa in the southern Sinai Peninsula has been the Christian tradition's identification since the 4th century.",
        what: "A people leaves Egypt and receives law at a mountain, in the biblical account.",
        where: "Egypt's eastern Delta and the Sinai Peninsula; the mountain's location is disputed.",
        why: "Sinai is the foundation of the covenant in Jewish tradition.",
        uncertain: "Whether the Exodus happened as told, when, and at what scale is disputed among scholars. Britannica says that scholars differ on the route and that the mountain cannot be positively identified. Other proposals place Sinai near Kadesh-barnea, according to an unrated Bible encyclopedia. The chapter's date is that of the stele, not of the Exodus.",
        evidence: "disputed",
        features: [
          pt("Jebel Musa (traditional Mount Sinai)", 33.9755, 28.5394, "site", "approximate", "traditional", "Traditional Christian identification since the 4th century; not a confirmed site. Marker approximate."),
          circ("Kadesh-barnea area (alternative proposals)", 34.4, 30.7, 50, "site", "regional", "disputed", "Some scholars place Sinai in this region per an unrated Bible encyclopedia; broad region only."),
          pt("Pi-Ramesses (Delta)", 31.83, 30.8, "site", "approximate", "attested", "Egyptian city whose name matches a biblical place-name, per an unrated source; marker approximate.")
        ],
        alternatives: [
          { label: "Traditional site: Jebel Musa", text: "Identified with Sinai in Christian tradition since the 4th century.", sources: ["brit-mount-sinai", "biblegateway-sinai"] },
          { label: "Near Kadesh-barnea", text: "A proposed alternative, because the biblical 'three days' journey' is too short for the traditional site.", sources: ["biblegateway-sinai"] },
          { label: "Exodus as legend or small-scale kernel", text: "Scholars disagree on how much historical core, if any, the narrative preserves.", sources: ["apologiahub-archaeology", "bas-exodus"] }
        ],
        relatedSites: [], sources: ["bas-merneptah", "wiki-merneptah", "brit-mount-sinai", "biblegateway-sinai", "apologiahub-archaeology", "bas-exodus"]
      },
      {
        id: "settlement", title: "Settling the land: Joshua and the highlands", subject: "Settlement and origin of Israel",
        status: "disputed", date: { start: B(1250), end: B(1020), kind: "approximate" }, camera: { center: [35.2, 32.2], zoom: 6 },
        text: "World History Encyclopedia says the Hebrew general Joshua allegedly conquered Canaan around 1250 BCE after the Exodus. Wikipedia's timeline says early Israelites began settling the central highlands of Canaan about 1200 BCE. The apologetics-leaning summary lists three competing models of Israel's origins: conquest, gradual settlement, or an internal transformation of Canaanite populations, and says there is sharp disagreement about the conquest narratives in Joshua.",
        what: "Israelite settlement of the hill country begins.",
        where: "The central highlands of Canaan.",
        why: "The sources I read do not decide between the models.",
        uncertain: "The biblical conquest account and the archaeological picture of gradual highland settlement are different stories, and the sources I read do not reconcile them. The date range is approximate.",
        evidence: "disputed", features: [circ("Central highlands of Canaan (broad region)", 35.2, 32.2, 70, "site", "regional", "reconstructed", "Area of early Israelite settlement per Wikipedia's timeline; broad region only.")],
        relatedSites: [], sources: ["whe-kingdom-israel", "wiki-timeline-israel", "apologiahub-archaeology", "bas-merneptah"]
      },
      {
        id: "monarchy", title: "David, Solomon and the first Temple (c. 1020–922 BCE)", subject: "United monarchy (disputed)",
        status: "disputed", date: { start: B(1020), end: B(922), kind: "biblical-chronology estimate" }, camera: { center: [35.2, 31.8], zoom: 7 },
        text: "Britannica says the Hebrew Bible describes a united kingdom ruled by Saul, David and Solomon, which scholars date to about 1020–922 BCE from correspondences between biblical and extra-biblical texts, although others doubt that such a polity existed. The Tel Dan Stele, a 9th-century BCE Aramaic inscription, mentions a 'house of David' (bytdwd), which most scholars read as a dynasty name. Britannica says the extent of David's kingdom is debated: some see Solomon's building at Megiddo, Gezer and Hazor as evidence of a strong monarchy, while Israel Finkelstein argues that David and Solomon were local chieftains and the northern buildings were the work of the later Omride dynasty. According to Britannica, Solomon's Temple was completed in 957 BCE and housed the Ark of the Covenant.",
        what: "A kingdom is founded around Jerusalem and a temple is built.",
        where: "Jerusalem, with Megiddo, Gezer and Hazor in the debate.",
        why: "The temple became the centre of Israelite worship in the biblical account.",
        uncertain: "A minority of scholars read bytdwd as a place name, not 'house of David'. Wikipedia notes that even a 'house of David' reading does not establish a 9th-century united kingdom. Britannica's date for the Temple (957 BCE) follows the biblical chronology and no source I read confirms it archaeologically.",
        evidence: "disputed",
        features: [jer, pt("Megiddo", 35.1845, 32.585, "site", "approximate", "attested", "Site in the Solomonic building debate."), pt("Tel Dan", 35.652, 33.248, "site", "approximate", "attested", "Where the Tel Dan Stele was found; marker approximate.")],
        alternatives: [
          { label: "A strong united monarchy", text: "Some archaeologists read monumental building at Megiddo, Gezer and Hazor as Solomonic.", sources: ["brit-israel-kingdom"] },
          { label: "Local chieftains", text: "Israel Finkelstein argues David and Solomon ruled a small area around Jerusalem.", sources: ["brit-israel-kingdom"] },
          { label: "'House of David' only shows a dynasty was remembered", text: "Wikipedia notes the stele does not itself establish a united kingdom.", sources: ["wiki-tel-dan"] }
        ],
        relatedSites: [], sources: ["brit-israel-kingdom", "brit-tel-dan", "wiki-tel-dan", "brit-temple-jerusalem", "wiki-timeline-israel"]
      },
      {
        id: "divided", title: "Two kingdoms and the Assyrian conquest (c. 930–721 BCE)", subject: "Kingdoms of Israel and Judah",
        status: "historical", date: { start: B(930), end: B(721), kind: "period" }, camera: { center: [35.3, 32.3], zoom: 6.3 },
        text: "According to the Bible, the kingdom split after Solomon's death, c. 930 BCE, into Israel in the north with its capital at Samaria and Judah in the south with Jerusalem. Wikipedia says there is firm evidence that by the 9th century BCE two distinct states existed, though scholars debate whether they split from a united monarchy or arose independently. The Assyrians besieged Samaria for three years and it fell in 722–720 BCE; the kingdom of Israel ended, its territory became Assyrian provinces and much of its population was deported. Britannica gives the northern kingdom's end as 722/721 BCE.",
        what: "The northern kingdom is destroyed by Assyria; Judah survives.",
        where: "Samaria in the north, Jerusalem in the south.",
        why: "Wikipedia and Britannica attribute the fall of Israel to the Neo-Assyrian conquest.",
        uncertain: "The year of Samaria's fall varies: 722, 721 or 720 BCE, and credit goes to Shalmaneser V or Sargon II. The split from a united kingdom is itself disputed. The 'Lost Ten Tribes' idea mentioned in World History Encyclopedia is a later tradition, which I do not develop.",
        evidence: "attested", features: [pt("Samaria", 35.1906, 32.2767, "conflict", "approximate", "attested", "Capital of the northern kingdom; marker approximate."), jer],
        relatedSites: [], sources: ["whe-kingdom-israel", "brit-israel-kingdom", "wiki-israel-judah", "wiki-timeline-israel"]
      },
      {
        id: "exile", title: "Babylonian exile and return (586–515 BCE)", subject: "Exile and restoration",
        status: "historical", date: { start: B(586), end: B(515), kind: "period" }, camera: { center: [42.0, 33.5], zoom: 4.5 },
        text: "Wikipedia says Judah was destroyed in 586 BCE by the Babylonian king Nebuchadnezzar II, who exiled much of its population to Babylonia; Britannica says Solomon's Temple was destroyed in 587/586 BCE. After Cyrus the Great conquered Babylon, he issued a proclamation allowing the Jews to return and rebuild their Temple, in about 538 BCE according to World History Encyclopedia. Britannica says the Second Temple's construction was completed in 515 BCE. The Second Temple period began under Persian patronage.",
        what: "Jerusalem and its temple are destroyed, then restored.",
        where: "Jerusalem and Babylon.",
        why: "Babylonian conquest, and later Persian policy.",
        uncertain: "The fall of Jerusalem is dated 587 or 586 BCE, and Wikipedia gives the Second Temple's construction as around 516 BCE or between 450 and 400 BCE. Return dates are given as 539 or 538 BCE.",
        evidence: "attested", features: [jer, pt("Babylon", 44.4275, 32.5355, "site", "approximate", "attested", "Place of exile.")],
        relatedSites: ["babylon"], sources: ["wiki-israel-judah", "brit-temple-jerusalem", "whe-kingdom-israel", "wiki-second-temple"]
      }
    ]
  });
})();
