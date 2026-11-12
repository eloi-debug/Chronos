(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "us-expansion-removal",
    regions: ["North America"],
    category: "political",
    title: "Westward expansion and Indigenous removal",
    description: "The Louisiana Purchase, the Indian Removal Act and the Trail of Tears, Manifest Destiny and the Mexican–American War. It states what expansion meant for the Indigenous peoples and for Mexico, as the sources record it, with their estimates of the dead given as ranges.",
    scope: "The United States and the lands beyond the Mississippi",
    span: "1803 to 1848 CE",
    tags: ["Louisiana Purchase", "Indian Removal Act", "Trail of Tears", "Manifest Destiny", "Mexican–American War"],
    chapters: [
      {
        id: "louisiana", title: "The Louisiana Purchase (1803)", subject: "Territorial purchase",
        date: { start: 1803, end: 1803, kind: "event" }, camera: { center: [-97.0, 40.0], zoom: 3.8 },
        text: "In 1803 President Thomas Jefferson completed the Louisiana Purchase from France, which doubled the size of the country. The land included all or part of 15 present-day states, and after negotiations with Spain the south-western boundary was changed in 1819, so that the final territory included all or part of 13 modern states.",
        what: "The United States doubles its area.",
        where: "The western half of the Mississippi basin.",
        why: "The sources I read do not explain why France sold.",
        uncertain: "The purchase was of France's claim, not of land the Indigenous nations who lived there had ceded; the sources I read do not discuss their position. The state counts (15 and 13) come from the same Britannica summary and describe different boundaries.",
        evidence: "attested", features: [circ("Louisiana Purchase (broad region)", -100.0, 41.0, 1300, "direct", "regional", "reconstructed", "Very broad region; the actual boundaries are not drawn.")],
        relatedSites: [], sources: ["brit-manifest-timeline", "brit-manifest-facts"]
      },
      {
        id: "removal", title: "Indian Removal and the Trail of Tears (1830–1839)", subject: "Forced removal of Indigenous nations",
        date: { start: 1830, end: 1839, kind: "period" }, year: 1838, camera: { center: [-87.0, 35.0], zoom: 4.5 },
        text: "President Andrew Jackson signed the Indian Removal Act on 28 May 1830, authorising negotiation of land exchanges and removal of eastern tribes to Indian Territory west of the Mississippi. Britannica says the discovery of gold on Cherokee land in Georgia catalysed political efforts to dispossess Indians east of the river. The Cherokee fought removal in court: the Supreme Court declined to protect them in Cherokee Nation v. Georgia (1831) and ruled for them in Worcester v. Georgia (1832), but Georgia ignored the ruling and Jackson refused to enforce it. In 1838 the U.S. military began forcing Cherokee from their homes at gunpoint; as many as 16,000 were held in camps and sent west in the fall and winter of 1838–39 on a 116-day journey. About 4,000 Cherokee died.",
        what: "The U.S. government forcibly removes Southeastern nations, causing thousands of deaths.",
        where: "The Southeast, to Indian Territory (now Oklahoma).",
        why: "Britannica names land hunger and the gold discovery; Jackson promoted the policy.",
        uncertain: "Overall removal totals differ: Britannica gives about 100,000 people removed and some 15,000 dead (Trail of Tears article), and up to 25 per cent of some 100,000 perished (Indian Removal Act article). About 4,000 of roughly 15,000 Cherokee died. The Trail of Tears term covers all the Southeastern nations, not only the Cherokee, and one source says perhaps a third to a half of those removed were from the Northeast.",
        evidence: "attested",
        features: [pt("New Echota (Georgia)", -84.9, 34.5, "occupation", "approximate", "attested", "Cherokee capital region; marker approximate."), circ("Indian Territory (broad region)", -96.0, 35.5, 250, "occupation", "regional", "attested", "Destination of the removed nations; broad region only.")],
        alternatives: [
          { label: "About 15,000 deaths among about 100,000 removed", text: "Britannica's Trail of Tears article.", sources: ["brit-trail-of-tears", "brit-trail-summary"] },
          { label: "Up to 25 per cent of about 100,000", text: "Britannica's Indian Removal Act article.", sources: ["brit-indian-removal-act"] }
        ],
        relatedSites: [], sources: ["brit-indian-removal-act", "brit-trail-of-tears", "brit-trail-summary", "brit-cherokee"]
      },
      {
        id: "manifest-destiny", title: "Manifest Destiny (1840s)", subject: "Expansionist ideology",
        date: { start: 1840, end: 1848, kind: "period" }, camera: { center: [-100.0, 38.0], zoom: 3.4 },
        text: "Britannica defines Manifest Destiny as the belief in the supposed inevitability of the United States expanding westward to the Pacific and beyond. It became a rallying cry and a rationale for foreign policy in the mid-1800s, and Democrats adopted it as a slogan. Many Americans, including many Whigs, were initially against it: some had humanitarian concerns about relocating settled Indian nations and others doubted the country's ability to rule so extensive an empire.",
        what: "An idea justifies westward expansion.",
        where: "The continent.",
        why: "Britannica presents it as both rallying cry and justification.",
        uncertain: "'Supposed inevitability' is Britannica's phrase. The sources I read do not describe Indigenous or Mexican views of the idea.",
        evidence: "attested", features: [], relatedSites: [], sources: ["brit-manifest-facts", "brit-manifest-timeline"]
      },
      {
        id: "mexican-war", title: "The Mexican–American War (1846–1848)", subject: "War and territorial cession",
        date: { start: 1846, end: 1848, kind: "war" }, camera: { center: [-108.0, 33.0], zoom: 4 },
        text: "Britannica says the U.S. annexation of Texas and westward movement sparked the Mexican–American War (1846–48). The Treaty of Guadalupe Hidalgo (2 February 1848) gave the United States more than 525,000 square miles of Mexican territory, including most of present Arizona, California, Nevada, New Mexico, Texas, Utah and western Colorado.",
        what: "Mexico cedes more than 525,000 square miles.",
        where: "The Southwest and California.",
        why: "Texas annexation and expansion; the sources I read give no further causes.",
        uncertain: "The sources I read do not describe Mexican perspectives, the war's course, its casualties or the fate of Mexicans and Indigenous peoples in the ceded land.",
        evidence: "attested", features: [circ("Mexican Cession (broad region)", -112.0, 36.0, 800, "occupation", "regional", "reconstructed", "Very broad region; actual boundaries are not drawn.")],
        relatedSites: [], sources: ["brit-manifest-timeline", "brit-manifest-facts"]
      }
    ]
  });
})();
