(function () {
  const { B, pt, circ, line } = window.TourKit;
  const baghdad = pt("Baghdad", 44.3661, 33.3152, "site", "approximate", "attested", "Abbasid capital from 762.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "islam-2",
    category: "religion",
    title: "Islam II: Karbala, Baghdad and the spread by trade",
    description: "Continues the early Islam tour: the killing at Karbala and the divide between Sunni and Shia Muslims, the Abbasid Caliphate and Baghdad's House of Wisdom, the Mongol destruction of Baghdad in 1258, and how Islam spread through trade and Sufi teachers into West Africa and Southeast Asia. It describes history and does not rule on doctrine.",
    scope: "The Middle East, West Africa and Southeast Asia",
    span: "680 to the 15th century CE",
    tags: ["Islam", "Karbala", "Abbasid", "Baghdad", "House of Wisdom", "Mongols", "trade"],
    chapters: [
      {
        id: "karbala", title: "Karbala and a divided community (680 CE)", subject: "Political conflict becoming a religious division",
        date: { start: 680, end: 680, kind: "event" }, camera: { center: [44.0, 32.6], zoom: 6.5 },
        text: "On 10 October 680 Husayn ibn Ali, grandson of the Prophet Muhammad, and his small party were defeated and massacred at Karbala, in what is now Iraq, by the army of the Umayyad caliph Yazid I. Britannica says the battle helped solidify the Umayyad dynasty's position but also deepened the divide between Sunni and Shia Muslims. World History Encyclopedia notes that political tensions had divided the community from Muhammad's death, and that Husayn is venerated as a martyr by both Shia and, in a different way, Sunni Muslims.",
        what: "A killing of the Prophet's grandson becomes central to Shia religious identity.",
        where: "Karbala, near the Euphrates in southern Iraq.",
        why: "Wikipedia cites the historian Heinz Halm: before 680, Shi'ism had no religious aspect, and Husayn's death was the event that created it as a distinct sect.",
        uncertain: "World History Encyclopedia says it is unclear when Sunnism and Shi'ism diverged as distinct sects, so the date of the split is a matter of interpretation. This chapter describes events and scholarship, not which branch is correct.",
        evidence: "attested", features: [pt("Karbala", 44.0242, 32.616, "conflict", "approximate", "attested", "Battle site near the Euphrates; marker is the modern city and approximate.")],
        relatedSites: [], sources: ["brit-karbala", "whe-karbala", "wiki-karbala"]
      },
      {
        id: "abbasid-rev", title: "The Abbasid Revolution and the founding of Baghdad (749–762)", subject: "Dynastic caliphate",
        date: { start: 749, end: 762, kind: "period" }, camera: { center: [44.5, 33.0], zoom: 5.5 },
        text: "The first Abbasid caliph, Abu al-Abbas al-Saffah, was proclaimed in the mosque at Kufa in 749, an event Britannica calls the 'Abbasid Revolution', which ushered in the golden age of Islamic Iraq. In 762 al-Mansur founded a new capital on the site of the old village of Baghdad, officially named the 'City of Peace'. Under the Abbasids the caliphate's focus shifted east, and Baghdad grew into one of the largest cities in the world, possibly reaching 500,000 people by about 800. The Abbasid Caliphate lasted from 750 to 1258.",
        what: "A new dynasty moves the Muslim world's centre to Iraq.",
        where: "Kufa, then Baghdad.",
        why: "World History Encyclopedia links the revolution to the discord that followed Karbala.",
        uncertain: "'Golden age' is a later label. The 750–1258 span and the 500,000 population figure are from encyclopedia and school sources and should be treated as approximate.",
        evidence: "attested", features: [baghdad, pt("Kufa", 44.4, 32.03, "site", "approximate", "attested", "Where the first Abbasid caliph was proclaimed; marker approximate.")],
        relatedSites: ["baghdad"], sources: ["brit-iraq-abbasid", "brit-abbasid", "twinkl-baghdad", "whe-karbala"]
      },
      {
        id: "wisdom", title: "The House of Wisdom and translation (819–833)", subject: "Scholarly patronage",
        date: { start: 819, end: 833, kind: "reign of al-Ma'mun" }, camera: { center: [44.4, 33.3], zoom: 7 },
        text: "During al-Ma'mun's reign in Baghdad (819–833), Iraq became the centre of remarkable cultural activity, notably translations of Greek science and philosophy into Arabic. The caliph collected texts, employed translators such as Hunayn ibn Ishaq and established the Bayt al-Hikmah (House of Wisdom), with a library and an observatory. Britannica says this had a profound effect on Muslim intellectual life and on western Europe, because much of the science and philosophy taught in medieval universities came from these Arabic translations, rendered into Latin in Spain in the 12th century. Persian and Syriac texts were also translated.",
        what: "A caliph's patronage turns Baghdad into a centre of translation and scholarship.",
        where: "Baghdad.",
        why: "Patronage of translators and an academy.",
        uncertain: "A school-resource page gives 830 for the House of Wisdom's construction; Britannica attributes it to al-Ma'mun's reign without a date. How the institution actually worked is not described in the sources I read.",
        evidence: "attested", features: [baghdad], relatedSites: ["baghdad"], sources: ["brit-iraq-abbasid", "brit-abbasid", "twinkl-baghdad"]
      },
      {
        id: "1258", title: "The Mongols destroy Baghdad (1256–1258)", subject: "End of the Abbasid caliphate in Baghdad",
        date: { start: 1256, end: 1258, kind: "event" }, camera: { center: [46.0, 34.0], zoom: 5.5 },
        text: "In 1256 Hülegü Khan, grandson of Genghis Khan, crossed the Oxus and destroyed the fortress of Alamut. In 1258 he besieged Baghdad, and Britannica says divided counsels prevented the city's salvation. The last Abbasid caliph of Baghdad, al-Musta'sim, was captured and executed, and Hülegü largely destroyed the city. Britannica says eastern Islam fell to non-Muslim rulers.",
        what: "The Abbasid caliphate in Baghdad ends with the city's sack.",
        where: "Baghdad.",
        why: "Hülegü's campaign was part of a Mongol programme of subduing the Islamic world, according to Britannica.",
        uncertain: "The sources I read give no casualty figures for the sack, so none is stated. The Mongol Empire tour covers the wider conquests.",
        evidence: "attested", features: [baghdad], relatedSites: ["baghdad"], sources: ["brit-iran-mongol", "brit-hulegu"]
      },
      {
        id: "trade", title: "Spread by trade, Sufis and rulers (8th–15th centuries)", subject: "Gradual conversion beyond the caliphate",
        date: { start: 700, end: 1499, kind: "period" }, camera: { center: [30.0, 10.0], zoom: 2.6 },
        text: "Beyond the lands conquered early, Islam spread largely along trade and pilgrimage routes. Britannica says that in the Sudanic belt, Islam came through learned teaching-trading families, and ruling elites usually became Muslim first without displacing indigenous religious practices. World History Encyclopedia reports that the Mali Empire's kings converted, with Mansa Musa (r. 1312–1337) visiting Cairo and Mecca and bringing back scholars and architects, and that Timbuktu's mosque and schools gained international reputation. Wikipedia says Islam reached Southeast Asia through Muslim traders and Sufi orders, with the first Muslim gravestone in the region dated 1082.",
        what: "Islam becomes a religion of West Africa and maritime Southeast Asia without a single conquest.",
        where: "The Sahel (Timbuktu, Gao) and the Straits of Malacca region.",
        why: "Merchants, scholars and rulers adopted Islam for the commercial and legal networks it offered.",
        uncertain: "Conversion was complex: a Stanford source describes three stages (containment, mixing and reform), and World History Encyclopedia says Berbers were 'variously coerced or enticed' to convert. The date for the first Muslim gravestone in Southeast Asia, and the first Mali king to convert, differ between sources. The Mali Empire's dates differ between sources (1215–1450 and 1240–1645).",
        evidence: "reconstructed",
        features: [pt("Timbuktu", -3.0026, 16.7666, "diffusion", "approximate", "attested", "Centre of learning in the Mali Empire."), pt("Malacca", 102.25, 2.19, "diffusion", "approximate", "reconstructed", "Trade hub on the strait; marker approximate."), circ("Sahel and Sudanic belt (broad region)", 0.0, 14.0, 1100, "diffusion", "regional", "reconstructed", "Broad region of trans-Saharan Islam; not a border.")],
        relatedSites: ["timbuktu"], sources: ["brit-islamic-saharan", "whe-islam-africa", "stanford-islam-westafrica", "wiki-spread-islam"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover Islam in the Fatimid, Seljuk, Mughal or Safavid states, the Crusades from the Muslim side, Islam in Spain, Central and South Asia, or the Ottomans (see that tour), nor Muslim theology and law.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "Each needs separate sourcing.",
        uncertain: "Sunni and Shia Islam each include many schools and movements, and this tour describes only a few events in their history.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing omissions; it makes no new historical claims."
      }
    ]
  });
})();
