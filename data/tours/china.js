(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "china-dynasties",
    category: "political",
    title: "Imperial China: the major dynasties",
    description: "From the Shang to the fall of the Qing in 1912: a dynasty-by-dynasty outline of unification, division, conquest and collapse. Built from outline-level sources, so it explains the sequence and the turning points but not the full detail of any one dynasty.",
    scope: "China and its neighbours",
    span: "c. 17th century BCE to 1912 CE",
    tags: ["China", "Shang", "Zhou", "Qin", "Han", "Tang", "Song", "Yuan", "Ming", "Qing"],
    chapters: [
      {
        id: "shang-zhou", title: "Shang and Zhou (c. 17th century to 221 BCE)", subject: "Early dynasties and a divided age",
        date: { start: B(1600), end: B(221), kind: "period" }, camera: { center: [113.0, 35.0], zoom: 4.8 },
        text: "Britannica says the Shang (c. 17th century BCE) is the first dynasty for which there is definite historical material, with a writing system and a calendar. The Zhou, a subject state of the Shang, overthrew its rulers in the mid-11th century BCE and ruled until the 3rd century BCE. Daoism and Confucianism were founded in this era. A conflict-ridden Warring States period lasted from the 5th century until 221 BCE.",
        what: "A state with writing is replaced by its vassal, and later breaks into rival states.",
        where: "The Yellow River region; Anyang is the late Shang site.",
        why: "The sources I read do not explain the reasons for the Zhou conquest or the decline into the Warring States.",
        uncertain: "Britannica names the Shang as the first dynasty with definite historical material, which leaves the status of an earlier 'Xia' dynasty unestablished here. Dates before the Warring States are approximate.",
        evidence: "reconstructed", features: [pt("Anyang (Yinxu)", 114.3, 36.127, "site", "approximate", "attested", "Late Shang capital with oracle-bone inscriptions; marker approximate.")],
        relatedSites: ["anyang"], sources: ["brit-china-summary", "brit-china-facts"]
      },
      {
        id: "qin-han", title: "Qin and Han unify China (221 BCE–220 CE)", subject: "Imperial unification",
        date: { start: B(221), end: 220, kind: "period" }, camera: { center: [110.0, 34.5], zoom: 4.3 },
        text: "The Qin dynasty, from whose name 'China' is derived, was set up after its rulers conquered rival states and created a unified empire. The Han dynasty was established in 206 BCE and ruled until 220 CE. Britannica notes that Wudi (141–87 BCE) had the longest reign of the entire Han period. By the end of the 2nd century CE the Han empire had virtually ceased to exist.",
        what: "A unified empire is created, then re-created under a longer-lived dynasty.",
        where: "The Wei and Yellow river heartland and the wider north China plain.",
        why: "The sources give only an outline of causes.",
        uncertain: "The sources I read do not explain how the Qin fell or how the Han began. The Han is conventionally divided into Western and Eastern halves, which this tour does not cover.",
        evidence: "reconstructed", features: [pt("Xi'an (Chang'an area)", 108.94, 34.34, "site", "approximate", "attested", "Capital region of the Qin and Western Han; marker is modern Xi'an.")],
        relatedSites: ["xian"], sources: ["brit-china-summary", "brit-china-han", "brit-six-dynasties"]
      },
      {
        id: "division", title: "Division: the Six Dynasties (220–589 CE)", subject: "Fragmented states",
        date: { start: 220, end: 589, kind: "period" }, camera: { center: [112.0, 32.0], zoom: 4.2 },
        text: "A time of turbulence followed the Han. Britannica names the 'Six Dynasties': the kingdom of Wu (222–280), then Dong Jin (317–420), Liu-Song (420–479), Nan Qi (479–502), Nan Liang (502–557) and Nan Chen (557–589). The six were actually five, and all but Dong Jin are known as the Southern Dynasties. Chinese reunification came with the Sui in 581.",
        what: "Empire breaks up into competing states, with southern dynasties succeeding each other.",
        where: "Mainly south China for the dynasties named; northern states are not covered.",
        why: "The sources do not give the causes of collapse after the Han.",
        uncertain: "The sources I read cover only the southern dynasties and do not describe the north, so the picture is one-sided.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-six-dynasties", "brit-china-summary"]
      },
      {
        id: "sui-tang", title: "Reunification: Sui and Tang (581–907 CE)", subject: "Reunited empire",
        date: { start: 581, end: 907, kind: "period" }, camera: { center: [108.0, 34.5], zoom: 4.2 },
        text: "Reunification was achieved with the Sui dynasty, founded in 581, and continued under the Tang (618–907). Britannica's contents list singles out a 'period of Tang power' from 626 to 755. The five dynasties and ten kingdoms period followed the Tang.",
        what: "China is reunified and then governed by a long-lived dynasty.",
        where: "North China and the Tang capital region around Chang'an.",
        why: "The sources I read do not explain either the reunification or the end of Tang power.",
        uncertain: "The date 755 for the end of Tang power comes from Britannica's table of contents only, and this chapter does not explain it.",
        evidence: "reconstructed", features: [pt("Xi'an (Chang'an area)", 108.94, 34.34, "site", "approximate", "attested", "Marker is modern Xi'an.")],
        relatedSites: ["xian"], sources: ["brit-china-summary", "brit-china-facts"]
      },
      {
        id: "song", title: "Song and the loss of the north (960–1279 CE)", subject: "Dynasty under northern pressure",
        date: { start: 960, end: 1279, kind: "period" }, camera: { center: [114.0, 32.0], zoom: 4.2 },
        text: "After the Song dynasty was founded in 960, Britannica says its capital was moved to the south because of northern invasions. In 1279 the dynasty was overthrown and Mongol (Yuan) domination began.",
        what: "A dynasty loses its northern territory and survives in the south until the Mongol conquest.",
        where: "South China after the shift.",
        why: "Invasions from the north.",
        uncertain: "My sources do not name the invaders or the capitals, so those details are omitted. The Mongol conquest is covered in the Mongol Empire tour.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-china-summary"]
      },
      {
        id: "yuan-ming", title: "Yuan and Ming (1279–1644 CE)", subject: "Foreign dynasty, then native restoration",
        date: { start: 1279, end: 1644, kind: "period" }, camera: { center: [114.0, 35.0], zoom: 4 },
        text: "Kublai Khan reunified China under the Mongol Yuan dynasty after destroying the Southern Song. The Yuan lost China in 1368 to the native Ming dynasty, which ruled from 1368 to 1644. Britannica says the Ming cultivated antiforeign feelings to the point that China closed itself off from the rest of the world, which is a sweeping summary.",
        what: "China is ruled by Mongols, then by a native dynasty that turns inward.",
        where: "All of China, with Beijing as the Yuan capital.",
        why: "Britannica says power shifted from Mongols to their bureaucrats and the khanates feuded.",
        uncertain: "The claim that the Ming 'closed itself off' is an old generalisation, and the sources I read give no detail on Ming maritime or trade contacts.",
        evidence: "reconstructed", features: [pt("Beijing", 116.4074, 39.9042, "site", "approximate", "attested", "Capital moved here by Kublai.")],
        relatedSites: [], sources: ["brit-mongol-timeline", "brit-china-summary", "brit-mongol-people"]
      },
      {
        id: "qing-end", title: "The Qing and the end of empire (1644–1912 CE)", subject: "Conquest dynasty, then republic",
        date: { start: 1644, end: 1912, kind: "period" }, camera: { center: [114.0, 33.0], zoom: 4.2 },
        text: "The Manchu overran Ming China in 1644 and set up the Qing dynasty. The Xinhai Revolution began with a mutiny at Wuchang on 10 October 1911 and spread as province after province declared against the government. On 12 February 1912 the six-year-old Emperor Puyi abdicated, ending the Qing and the 2,000-year-old imperial system. Sun Yat-sen became provisional president and was soon replaced by Yuan Shikai.",
        what: "The last dynasty falls and a republic is declared.",
        where: "Wuchang (Wuhan) and Beijing.",
        why: "Wikipedia traces the background to defeats by Western powers in the Opium Wars and the court's resistance to reform, though this is a summary.",
        uncertain: "Sources give the Qing as 267 years, and the end date is 1911 or 1912 depending on whether the revolution or the abdication is counted. Yuan Shikai's role in the abdication is described differently by different authors.",
        evidence: "attested", features: [pt("Wuchang (Wuhan)", 114.3, 30.55, "conflict", "approximate", "attested", "Uprising of 10 October 1911."), pt("Beijing", 116.4074, 39.9042, "site", "approximate", "attested", "Capital where Puyi abdicated.")],
        relatedSites: [], sources: ["brit-china-summary", "brit-chinese-revolution", "brit-puyi", "wiki-1911", "wiki-abdication-edict"]
      }
    ]
  });
})();
