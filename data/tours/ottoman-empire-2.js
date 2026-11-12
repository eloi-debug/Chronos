(function () {
  const { B, pt, circ, line } = window.TourKit;
  const cp = pt("Constantinople", 28.9784, 41.0082, "site", "approximate", "attested", "Ottoman capital; centre of modern Istanbul.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "ottoman-empire-2",
    category: "political",
    title: "The Ottoman Empire II: reform, revolution and the Armenian Genocide",
    description: "The Tanzimat reforms, Abdülhamid II's autocracy, the Young Turk Revolution of 1908 and the Armenian Genocide of 1915–16. The genocide chapters state the sources' terms and ranges plainly. It does not cover the Balkan Wars, the Arab provinces, Gallipoli or the end of the empire in detail.",
    scope: "Anatolia, the Balkans and the Armenian provinces",
    span: "1839 to 1916 CE",
    tags: ["Ottoman", "Tanzimat", "Young Turks", "Armenian Genocide", "World War I"],
    chapters: [
      {
        id: "tanzimat", title: "The Tanzimat reforms (1839–1876)", subject: "State-led reform",
        date: { start: 1839, end: 1876, kind: "period" }, camera: { center: [30.0, 40.0], zoom: 4.8 },
        text: "The Tanzimat was the series of reforms under Sultans Abdülmecid I (1839–61) and Abdülaziz (1861–76). The best known are the Edict of Gülhane (3 November 1839) and the Imperial Edict of 1856. Britannica says that to the Ottomans, the purpose of reform was to preserve the Ottoman state. The central reforms were in the army (major reorganisations in 1842 and 1869, the latter on the Prussian conscript model), in administration and in education and law.",
        what: "A reforming state tries to modernise its army, administration and law.",
        where: "Throughout the empire; Constantinople was the centre.",
        why: "Preserving the state against internal weakness and European pressure.",
        uncertain: "The Young Turk Revolution article argues that the Tanzimat inadvertently created a systemic weakness because centralisation removed checks on the sultan's power, which is an interpretation, not a settled fact.",
        evidence: "attested", features: [cp], relatedSites: ["constantinople"], sources: ["brit-tanzimat", "brit-young-turk"]
      },
      {
        id: "1908", title: "Abdülhamid II and the Young Turk Revolution (1878–1913)", subject: "Autocracy, then constitutional government",
        date: { start: 1878, end: 1913, kind: "period" }, year: 1908, camera: { center: [26.0, 41.0], zoom: 5 },
        text: "Reacting against the Tanzimat's liberalisation, Abdülhamid II suspended the short-lived 1876 constitution in 1878 and became despotic as he tried to strengthen the sultanate. The Young Turk Revolution of 3–23 July 1908 was a revolt against him that restored constitutional government. Britannica says the Young Turks, a coalition of reform groups, could not take full control until 1913. It lists peasant discontent over land, taxes and conscription and nationalist agitation in the Balkans as background.",
        what: "A sultan's autocracy is overturned and a constitutional system replaces it, briefly.",
        where: "The empire's European and Anatolian provinces.",
        why: "Britannica names droughts and floods, taxation, conscription and Balkan nationalism as pressures.",
        uncertain: "The sources I read do not describe the Balkan Wars of 1912–13 or the 1913 coup, so those links are not explained.",
        evidence: "attested", features: [cp], relatedSites: ["constantinople"], sources: ["brit-young-turk"]
      },
      {
        id: "1915", title: "War, deportation and mass killing (1915–1916)", subject: "State-directed genocide",
        date: { start: 1915, end: 1916, kind: "event" }, camera: { center: [38.0, 38.5], zoom: 5 },
        text: "In January 1915 the Ottoman army suffered its worst defeat of the war at Sarıkamış against Russian forces. Soon after, the government began to deport Armenians from eastern Anatolia, saying their presence near the front was a threat. On 24 April 1915 authorities arrested 240 Armenian leaders in Constantinople and deported them east, an event Armenians commemorate as the start of the genocide. In May parliament authorised deportations, and through summer and autumn Armenian civilians were marched toward desert camps in what is now Syria and Iraq. Britannica says the marches were overseen by civil and military officials and accompanied by systematic mass murder carried out by irregular forces, Kurds and Circassians. Many survivors starved in camps. About 1.5 million Armenians lived in the empire.",
        what: "A government deports and kills a large part of its Armenian population.",
        where: "From eastern Anatolia and then almost all provinces, toward Syria and Mesopotamia.",
        why: "The Ottoman government gave wartime security as its reason; the Holocaust Memorial Museum says deportations were expanded regardless of distance from combat zones, and Britannica says the Young Turk government directed the genocide.",
        uncertain: "Estimates of those killed range from 600,000 to 1.5 million (Wikipedia), with 'conservative' estimates of 600,000 to more than 1,000,000 (Britannica), and at least 664,000 and possibly as many as 1.2 million (Holocaust Memorial Museum). The Ottoman government's own figure, reported by Wikipedia, was 800,000 killed. The empire's Armenian population in 1914 is given as 1.5 million (US Holocaust Memorial Museum) or 1.5–2.1 million (most historians, Wikipedia). I did not research current official positions on the term 'genocide'; this tour uses it as Britannica, the museum and Wikipedia do.",
        evidence: "attested",
        features: [pt("Sarıkamış", 42.5736, 40.3333, "conflict", "approximate", "attested", "Ottoman defeat, January 1915; marker approximate."), cp, circ("Syrian desert (deportation destination, broad region)", 39.0, 35.5, 250, "conflict", "regional", "attested", "Desert camps in what is now Syria and Iraq; broad region, not a camp location.")],
        alternatives: [
          { label: "600,000–1.5 million", text: "Wikipedia's range for deaths.", sources: ["wiki-armenian-genocide"] },
          { label: "At least 664,000, possibly 1.2 million", text: "United States Holocaust Memorial Museum.", sources: ["ushmm-armenian-overview"] },
          { label: "Official Ottoman statistics: 800,000", text: "Reported by Wikipedia as the official Ottoman figure for 1915–17/18.", sources: ["wiki-armenian-casualties"] }
        ],
        relatedSites: [], sources: ["brit-armenian-genocide", "brit-armenian-genocide-detail", "ushmm-armenian-depth", "ushmm-armenian-overview", "wiki-armenian-genocide", "wiki-armenian-casualties"]
      },
      {
        id: "children-property", title: "Forced conversion, orphans and seized property", subject: "Other forms of destruction",
        date: { start: 1915, end: 1916, kind: "event" }, camera: { center: [38.0, 38.5], zoom: 5 },
        text: "The Holocaust Memorial Museum reports that tens of thousands of Armenian children were forcibly removed from their families and converted to Islam, and that the Ottomans often sought to convert and assimilate children to Muslim and specifically Turkish society. Wikipedia says around 100,000 to 200,000 Armenian women and children were forcibly converted to Islam and integrated into Muslim households, and that Armenian properties were confiscated to build a national economy.",
        what: "The destruction included forced assimilation and expropriation as well as killing.",
        where: "Across the provinces where Armenians lived.",
        why: "The sources describe forced assimilation of children and confiscation of property as part of the campaign.",
        uncertain: "The numbers of converted children differ between the museum (tens of thousands) and Wikipedia (100,000–200,000 women and children).",
        evidence: "attested", features: [], relatedSites: [], sources: ["ushmm-armenian-depth", "wiki-armenian-genocide"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover the Balkan Wars, the Arab provinces, the Gallipoli campaign, the post-war trials, the Turkish War of Independence or the end of the empire in 1922–23 (the first Ottoman tour ends there briefly). Britannica's Young Turk article says that after the war the empire was dissolved.",
        what: "Lists the gaps.",
        where: "Not mapped.",
        why: "These topics need further sources I have not read.",
        uncertain: "The experiences of other communities during the war are not covered here, and nothing in this tour should be read as a complete account of the period.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing omissions; it makes no new historical claims."
      }
    ]
  });
})();
