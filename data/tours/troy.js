(function () {
  const { B, pt, circ, line } = window.TourKit;
  const hisarlik = pt("Hisarlık (Troy)", 26.2389, 39.9575, "site", "approximate", "attested", "Mound near the mouth of the Dardanelles identified by most scholars as Troy; marker approximate.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "troy",
    category: "political",
    title: "Troy: legend and archaeology",
    description: "The city of Homer's Iliad and the mound at Hisarlık: what the poems say, what excavators found, what Hittite records add, and what remains unproven. The tour keeps the legend, the dated archaeology and the written evidence in separate chapters.",
    scope: "Northwestern Anatolia and the Aegean",
    span: "c. 3000 BCE to the 4th century CE (site); the war is traditionally dated to the 13th–12th century BCE",
    tags: ["Troy", "Iliad", "Schliemann", "Hittites", "Wilusa"],
    chapters: [
      {
        id: "legend", title: "The legend: Homer, Virgil and the ten-year siege", subject: "Legendary narrative",
        date: { start: B(1300), end: B(1100), kind: "traditional dating by later Greek authors" }, camera: { center: [26.24, 39.96], zoom: 6 },
        text: "In Greek legend Troy was besieged by the Greeks for ten years and finally destroyed. The story is told in Homer's Iliad and Odyssey, which Britannica calls the earliest literary evidence, and in Virgil's Aeneid. Later Greek authors dated the war to the 12th or 13th century BCE.",
        what: "Introduces the story and the date range it is given in tradition.",
        where: "Troy, in Troas in northwestern Anatolia, and the Greek world.",
        why: "The legend is the reason people looked for the city, and it also shapes how archaeological finds were first interpreted.",
        uncertain: "The date range is the later Greek authors' dating of the legend, not an archaeological date. The Homeric poems themselves are literature: the sources I read do not date them, so this tour does not either.",
        evidence: "mythological", features: [hisarlik], relatedSites: [], sources: ["brit-troy-summary", "brit-troy", "brit-odyssey-true"]
      },
      {
        id: "discovery", title: "Finding Hisarlık (1822–1890)", subject: "Archaeological discovery",
        date: { start: 1822, end: 1890, kind: "period" }, camera: { center: [26.24, 39.96], zoom: 8 },
        text: "In 1822 Charles Maclaren identified Hisarlık as the site of Homeric Troy on the basis of ancient literature, and Frank Calvert, who shared his own excavations and knowledge, helped the better-funded Heinrich Schliemann. Between 1870 and 1890 Schliemann excavated on a large scale, and the majority of scholars came to accept the identification. His assistant Wilhelm Dörpfeld continued work in 1893–94, Carl Blegen worked there in 1932–38, and Manfred Korfmann led excavations until his death in 2005.",
        what: "A mound in Turkey is identified with the poems' city and excavated.",
        where: "Hisarlık, on the Karamenderes River near the mouth of the Dardanelles.",
        why: "The match with Homer's geography convinced scholars to search there.",
        uncertain: "Schliemann dug through upper levels in search of Homeric Troy and, according to the Smithsonian, tore up relics. He called a gold cache in Troy II 'Priam's Treasure', but it dates to 2500–2300 BCE, about a thousand years before the traditional date. Britannica says he took sole credit for a discovery others contributed to.",
        evidence: "attested", features: [hisarlik], relatedSites: [], sources: ["brit-hisarlik", "brit-schliemann", "smithsonian-troy", "archaeology-troy"]
      },
      {
        id: "layers", title: "The layers of the mound (c. 3000 BCE–4th century CE)", subject: "Stratified settlement",
        date: { start: B(1300), end: B(1180), kind: "layers VI–VIIa" }, camera: { center: [26.24, 39.96], zoom: 9 },
        text: "Excavations reveal a sequence of nine or ten principal strata, from the early Bronze Age to Roman times. Britannica says Troy VI was destroyed by a violent earthquake a little after 1300 BCE. The survivors quickly rebuilt, creating the short-lived Troy VIIa, which was destroyed by fire. Blegen's expedition concluded it was destroyed about 1260 and was very likely Priam's Troy. More recent investigations date the destruction between 1220 and 1180 BCE and cast doubt on who the attackers were. In 2019 Rüstem Aslan identified a still older layer, Troy 0.",
        what: "The mound holds many successive cities, and one or two of them might correspond to the legend.",
        where: "The citadel mound at Hisarlık.",
        why: "Layer VIIa's fire and unburied bodies suggest violent capture, but the archaeology does not name the attackers.",
        uncertain: "Which layer, if any, is 'Homeric Troy' is disputed: Britannica says Troy VI was once identified as Homeric but its date is too early for the traditional war; the Smithsonian says Troy VI–VIIa. The destruction date of VIIa varies by up to 80 years between expeditions. Whether the site is the actual city of the poems is still debated, according to Britannica, though most scholars accept it.",
        evidence: "disputed", features: [hisarlik], relatedSites: [],
        alternatives: [
          { label: "Troy VIIa, destroyed about 1260 BCE", text: "Blegen's Cincinnati expedition concluded Troy VIIa was likely Priam's capital.", sources: ["brit-troy"] },
          { label: "Later destruction, 1220–1180 BCE", text: "More recent investigations date the destruction later and question the identity of the attackers.", sources: ["brit-troy"] }
        ],
        sources: ["brit-troy", "brit-troy-summary", "smithsonian-troy"]
      },
      {
        id: "hittite", title: "What Hittite records say: Wilusa and Ahhiyawa (1400–1200 BCE)", subject: "Contemporary written evidence",
        date: { start: B(1400), end: B(1200), kind: "tablets" }, camera: { center: [30.0, 39.5], zoom: 5 },
        text: "Hundreds of clay tablets from the Hittite capital Hattusa, some dating between 1400 and 1200 BCE, mention a place called Wilusa in western Anatolia. Most scholars now believe it refers to Troy. One of its kings was named Alaksandu, which resembles Alexandros, a name for Paris in the Iliad. The tablets also mention Ahhiyawans from across the Aegean, whom many linguists connect with Homer's Achaeans. Records suggest Ahhiyawan forces fought a war against Wilusa in the 13th century.",
        what: "Independent documents of the time mention a Troy-like city and Greek-like people.",
        where: "Wilusa in western Anatolia; the Hittite capital at Hattusa.",
        why: "These are the best evidence outside the poems that the setting is rooted in real events or places.",
        uncertain: "The identification of Wilusa with Troy and Ahhiyawa with the Achaeans rests on linguistic similarity and is called 'far from conclusive' by the Archaeological Institute of America. The existence of Troy is not proof that the war happened.",
        evidence: "reconstructed", features: [hisarlik, pt("Hattusa", 34.615, 40.02, "site", "approximate", "attested", "Hittite capital where the tablets were found.")],
        relatedSites: ["hattusa"], sources: ["archaeology-troy", "brit-odyssey-true"]
      },
      {
        id: "debate", title: "What is still debated", subject: "Open questions",
        date: null, camera: { center: [26.24, 39.96], zoom: 7 },
        text: "Britannica says experts believe a real conflict, or a series of conflicts of some scale, over political or commercial supremacy inspired the embellished accounts of the Trojan War. It also notes intense debate about Troy's size, population and status as a trading centre. Excavations have searched for a 'greater Troy' of significant size and prosperity or a 'lesser Troy' of diminished status. Recent findings show that the site has Anatolian roots, according to the Smithsonian.",
        what: "Lists the unsettled questions.",
        where: "Hisarlık and its surroundings.",
        why: "Treating them as open keeps the tour from blending legend and evidence.",
        uncertain: "There is no conclusive proof that the war as told took place. No source I read identifies named heroes such as Achilles, Hector or Priam in the archaeological record.",
        evidence: "disputed", features: [hisarlik], relatedSites: [], sources: ["brit-troy-real", "brit-hisarlik", "smithsonian-troy", "archaeology-troy"]
      },
      {
        id: "later", title: "Ilion and the afterlife of Troy", subject: "Later city and cultural legacy",
        date: { start: B(700), end: 399, kind: "Hellenistic and Roman town (approximate)" }, camera: { center: [26.24, 39.96], zoom: 7 },
        text: "The mound was long known to bear the remains of the Hellenistic and Roman town called Ilion or Ilium. The archaeological layers run from the early Bronze Age to Roman times, up to the 4th century CE according to Britannica. The Troy story was also retold in Greek drama and in Virgil's Aeneid.",
        what: "The place continues as a town while the story becomes literature.",
        where: "Hisarlık.",
        why: "The legend kept attracting visitors and readers long after the Bronze Age city fell.",
        uncertain: "The chapter's start date of 700 BCE is my approximation: the sources I read do not give a date for the Hellenistic town's start. They also do not describe pilgrimage or reception in detail.",
        evidence: "attested", features: [hisarlik], relatedSites: [], sources: ["brit-hisarlik", "brit-troy-summary", "brit-troy"]
      }
    ]
  });
})();
