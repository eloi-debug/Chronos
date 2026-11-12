(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "daoism",
    category: "religion",
    title: "Daoism: from sages and texts to an organised religion",
    description: "How the Daoist tradition grew from the Daodejing and Zhuangzi into the organised Celestial Masters movement, and how it related to Chinese states. Keeps the traditional story of Laozi separate from what historians can say about the texts.",
    scope: "China",
    span: "6th century BCE (traditional) to the Tang dynasty",
    tags: ["Daoism", "Laozi", "Zhuangzi", "Celestial Masters", "Daodejing"],
    chapters: [
      {
        id: "laozi", title: "Laozi and the Daodejing: tradition and scholarship", subject: "Founding figure and foundational text",
        date: { start: B(600), end: B(501), kind: "traditional" }, camera: null,
        text: "Chinese tradition holds that Laozi flourished in the 6th century BCE and wrote the Daodejing. Britannica says little else is known about him, and that modern scholars do not believe the Daodejing was written by one person; it was probably composed after his death by many authors. Britannica dates the Daodejing to about 300 BCE. Laozi is venerated as a philosopher by Confucians and as a saint or god in popular religion. Daoism emphasises living in harmony with the Dao, the Way, and non-action (wuwei).",
        what: "Introduces the tradition's central figure and text.",
        where: "No location is given in the sources I read, so the chapter is not mapped.",
        why: "Separating the traditional account from what historians infer about the text avoids treating the legend as biography.",
        uncertain: "Whether Laozi existed is uncertain: the Dao article says he is 'assumed, if he existed' to have been a contemporary of Confucius. The dates for him are traditional, and the Daodejing's date is later than the tradition suggests.",
        evidence: "traditional", features: [], relatedSites: [], sources: ["brit-laozi", "brit-dao", "sep-laozi", "brit-daoism-teachers"]
      },
      {
        id: "zhuangzi", title: "Zhuangzi and the philosophical tradition (4th–3rd centuries BCE)", subject: "Philosophical Daoism",
        date: { start: B(369), end: B(286), kind: "life of Zhuangzi" }, camera: { center: [112.0, 34.0], zoom: 4.2 },
        text: "Britannica says Zhuangzi lived from 369 to 286 BCE and was a major interpreter of Daoism. His work, the Zhuangzi, was partly composed by his disciples and is considered more comprehensive than the Daodejing. The tradition that came to be called Daoism traced itself back to Laozi and to him.",
        what: "A second foundational text enlarges the tradition.",
        where: "China; the sources I read do not locate him.",
        why: "Together, the two works became the basis of later philosophical and religious Daoism.",
        uncertain: "The Zhuangzi is a composite work, so statements about 'Zhuangzi's teaching' are statements about the text.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-daoism-teachers", "brit-dao"]
      },
      {
        id: "celestial-masters", title: "The Celestial Masters (142–215 CE)", subject: "First organised religious Daoism",
        date: { start: 142, end: 215, kind: "period" }, camera: { center: [104.5, 30.5], zoom: 5 },
        text: "Britannica says the history of organised religious Daoism begins with the Way of the Celestial Masters, a movement founded by Zhang Daoling in the second half of the 2nd century CE. Zhang is said to have received a revelation in 142 from Taishang Laojun, 'Lord Lao the Most High', in the mountains of Sichuan. In 215 Zhang Lu, his grandson, submitted to the Han general Cao Cao, who six years later founded the Wei dynasty, and the sect won official recognition. By the end of the 3rd century it counted many of North China's most powerful families among its adherents.",
        what: "Daoism becomes an organised religion with a lineage and a relationship to the state.",
        where: "The mountains of Sichuan, then North China.",
        why: "Britannica says the sect's flexible ideology of compromise helped it make progress at court.",
        uncertain: "The 142 revelation is a religious claim reported as 'said to have'. Britannica notes another movement in the northeast arose at about the same time.",
        evidence: "traditional", features: [circ("Sichuan mountains (broad region)", 104.0, 30.5, 150, "influence", "regional", "traditional", "Region where the revelation is said to have occurred; broad region only.")],
        relatedSites: [], sources: ["brit-taoism-development", "sep-laozi"]
      },
      {
        id: "tang", title: "Daoism and the Tang state (618–907 CE)", subject: "State patronage",
        date: { start: 618, end: 906, kind: "period" }, camera: { center: [110.0, 34.5], zoom: 4.3 },
        text: "During the Tang, the imperial Li family traced its ancestry to Laozi, and Laozi was worshipped as an imperial ancestor. The Daodejing received considerable imperial attention, with no fewer than eight emperors composing or commissioning a commentary. In the eighth century the Daoist master Zhang Junxiang cited about thirty commentaries in his study of the text.",
        what: "A dynasty links itself to the tradition's founder.",
        where: "Tang China.",
        why: "The family claim gave the dynasty a sacred ancestry.",
        uncertain: "Patronage by emperors does not show how many ordinary people practised Daoism. Britannica's China article notes Daoism was never patronised to an extent comparable to Buddhism. Dates for the Tang vary between sources (618–906 and 618–907).",
        evidence: "attested", features: [pt("Xi'an (Chang'an area)", 108.94, 34.34, "site", "approximate", "attested", "Tang capital region; the sources I read do not link Daoism to a specific site.")],
        relatedSites: ["xian"], sources: ["sep-laozi", "brit-laozi", "brit-china-daoism"]
      },
      {
        id: "limits", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour stops at the Tang. It does not cover Daoist ritual, alchemy and the search for immortality, the schools that emerged after the Tang, relations with Buddhism and Confucianism beyond the notes above, or Daoism in Taiwan, Southeast Asia and the modern world. Britannica notes that modern scholars acknowledge Daoism's influence on the development of Buddhism.",
        what: "Lists the gaps so the outline is not mistaken for a full history.",
        where: "Not mapped.",
        why: "A short sourced tour is more useful if it states its limits.",
        uncertain: "The sources I read were encyclopedia overviews, and several describe belief claims in the tradition's own terms.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-laozi"]
      }
    ]
  });
})();
