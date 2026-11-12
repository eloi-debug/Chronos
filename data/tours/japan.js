(function () {
  const { B, pt, circ, line } = window.TourKit;
  const kyoto = pt("Kyoto", 135.7681, 35.0116, "site", "approximate", "attested", "Imperial capital from 794 (Heian-kyō).");
  const tokyo = pt("Tokyo (Edo)", 139.6917, 35.6895, "site", "approximate", "attested", "Tokugawa seat as Edo; imperial capital from 1868.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "japan",
    category: "political",
    title: "Japan: from Yamato to the modern state",
    description: "Japan's political history in nine chapters: rice-farming Yayoi communities, the Yamato kingdom, the imperial state, seven centuries of warrior government, the Sengoku wars, Tokugawa peace and isolation, the Meiji Restoration, imperial expansion and war, and the postwar constitution. Early and wartime chapters rest on thin or unrated sources and say so.",
    scope: "The Japanese archipelago, with Korea and Manchuria noted",
    span: "c. 300 BCE to 1952 CE",
    tags: ["Japan", "Yamato", "shogun", "Tokugawa", "Meiji", "constitution"],
    chapters: [
      {
        id: "yayoi", title: "Rice farming: the Yayoi period (c. 300 BCE–250 CE)", subject: "Agricultural communities",
        date: { start: B(300), end: 250, kind: "Yayoi period" }, camera: { center: [132.0, 34.0], zoom: 5.5 },
        text: "Britannica says Yayoi culture arose in Kyushu while Jōmon culture was still developing elsewhere, and spread gradually eastward until it reached the northern districts of Honshu. It was associated with irrigated rice cultivation and metal objects, and lasted for some five or six centuries, from about the 3rd century BCE to the 2nd or 3rd century CE.",
        what: "A farming culture spreads across the archipelago.",
        where: "From Kyushu eastward through Honshu.",
        why: "Wet rice agriculture and metalworking, according to Britannica.",
        uncertain: "Britannica's excerpt does not say where Yayoi rice farming and metalworking came from, so this chapter makes no claim about their origin.",
        evidence: "reconstructed", features: [circ("Kyushu (origin of Yayoi culture, broad region)", 131.0, 33.0, 150, "diffusion", "regional", "reconstructed", "Broad region only.")],
        relatedSites: [], sources: ["brit-japan-yayoi"]
      },
      {
        id: "yamato", title: "Tombs and the Yamato kingdom (c. 250–6th century)", subject: "Emerging kingdom of clans",
        date: { start: 250, end: 599, kind: "Kofun period (approximate)" }, camera: { center: [135.5, 34.6], zoom: 7 },
        text: "From the 3rd century large tombs, both circular and keyhole-shaped, proliferated across Japan, especially around Ōsaka, which is why the period is called the Tumulus or Kofun period. Britannica says by the end of the 4th century Yamato was a kingdom on the Nara plain with considerable control over the archipelago, and the court peaked in the early 5th century in Kawachi and Izumi. It was headed by a hereditary ruler with members drawn from clan leaders awarded titles (the uji-kabane system). Most scholars divide the period into growth from about 250 to the end of the 4th century, flowering in the 5th century and decline from the early 6th century.",
        what: "A court on the Nara plain gains control over clans across the archipelago.",
        where: "The Nara plain and the Ōsaka area.",
        why: "Britannica says the questions of how unification was first achieved have inspired hypotheses, none entirely convincing.",
        uncertain: "How Yamato came into being is not settled. The collapse of Yamatai and the birth of Yamato are described by Britannica as 'probably' occurring in this period.",
        evidence: "reconstructed", features: [pt("Nara plain", 135.8048, 34.6851, "site", "approximate", "attested", "Heartland of Yamato; marker is modern Nara.")],
        relatedSites: [], sources: ["brit-japan-yamato", "brit-japan-yayoi"]
      },
      {
        id: "imperial-state", title: "The imperial state: Nara and Heian (710–1185)", subject: "Court-centred state",
        date: { start: 710, end: 1185, kind: "period" }, camera: { center: [135.6, 35.0], zoom: 7 },
        text: "Britannica's outline calls the Nara period (710–784) the 'beginning of the imperial state' and the Heian period (794–1185) one of 'changes in ritsuryō government'. A less authoritative slide deck says the capital moved to Nara in 710 and to Heian-kyō (Kyoto) in 794, that Buddhism was officially introduced in 538, and that the Tale of Genji was written in the Heian period. Britannica's account of the postwar occupation also notes the 7th-century Taika Reform as a period of borrowing foreign models.",
        what: "Japan is governed from a court capital on Chinese-influenced models.",
        where: "Nara, then Kyoto.",
        why: "The sources I read do not explain the reasons for the capital moves or the changes in government.",
        uncertain: "This chapter is thin by design: it rests on a table of contents entry and one unrated slide deck, and I will not fill gaps from memory.",
        evidence: "reconstructed", features: [pt("Nara", 135.8048, 34.6851, "site", "approximate", "attested", "Capital from 710."), kyoto],
        relatedSites: [], sources: ["brit-japan-early-modern", "brit-japan-since-1945", "blog-japan-meiji-ww2"]
      },
      {
        id: "warriors", title: "Warrior government: Kamakura and Ashikaga (1185–1573)", subject: "Military rule alongside a ceremonial court",
        date: { start: 1185, end: 1573, kind: "period" }, camera: { center: [137.0, 35.5], zoom: 6 },
        text: "Britannica says the decisive shift from imperial to military rule occurred in 1185, when Minamoto Yoritomo established a military government that evolved into the Kamakura shogunate; in 1192 he took the title of shogun. This began nearly seven centuries of military rule in which the emperor was reduced to a largely ceremonial figurehead. The Kamakura shogunate lasted until 1333 and was followed by the Ashikaga shogunate (1338–1573).",
        what: "Real power passes from the court to the samurai class.",
        where: "Kamakura, in eastern Honshu, then the Ashikaga seat.",
        why: "The sources I read describe the shift but not the causes.",
        uncertain: "Dates differ in convention: 1185 (military government established) and 1192 (title of shogun).",
        evidence: "attested", features: [pt("Kamakura", 139.5466, 35.3192, "site", "approximate", "attested", "Seat of the first shogunate.")],
        relatedSites: [], sources: ["brit-sengoku", "brit-history-japan", "brit-japan-early-modern"]
      },
      {
        id: "sengoku", title: "The Sengoku wars and unification (1467–1603)", subject: "Civil war among lords",
        date: { start: 1467, end: 1603, kind: "period" }, camera: { center: [136.5, 35.3], zoom: 6 },
        text: "Britannica says the Sengoku period, roughly 1467 to 1600, was a time of civil war, political upheaval and social transformation. The weakening of the Ashikaga shogunate led to independent daimyo fighting for supremacy. Central control was re-established by the 'three great unifiers', Oda Nobunaga, Toyotomi Hideyoshi and Tokugawa Ieyasu. In 1600 Ieyasu's forces triumphed at Sekigahara, and he received the title of shogun in 1603.",
        what: "A century and a half of civil war ends with a single ruler.",
        where: "Throughout Japan; Sekigahara in central Honshu.",
        why: "The Ashikaga shogunate's weakness allowed lords to fight for supremacy.",
        uncertain: "The sources I read do not describe the social transformation or the roles of foreign firearms and Christianity in this period.",
        evidence: "attested", features: [pt("Sekigahara", 136.4657, 35.3664, "conflict", "approximate", "attested", "Battle of 1600.")],
        relatedSites: [], sources: ["brit-sengoku", "brit-history-japan"]
      },
      {
        id: "tokugawa", title: "Tokugawa peace and seclusion (1603–1867)", subject: "Military dictatorship with decentralised domains",
        date: { start: 1603, end: 1867, kind: "period" }, camera: { center: [138.0, 36.0], zoom: 5.5 },
        text: "Britannica says the Tokugawa period was the final era of traditional Japan, with over 250 years of internal peace, stability and economic growth under the shogunate founded by Tokugawa Ieyasu. The shogun exercised national authority while regional lords (daimyo) kept substantial control of their domains. Society was divided into warriors, farmers, artisans and merchants with mobility between classes prohibited. The shogunate pursued sakoku, a policy of national seclusion that severely limited foreign contact and banned Christianity from fear of foreign influence and colonial expansion. Commerce, manufacturing and urban culture expanded.",
        what: "A long period of peace under a strict social order.",
        where: "Governed from Edo (Tokyo).",
        why: "Britannica gives the ban on Christianity and the seclusion policy as responses to fears of foreign influence.",
        uncertain: "Britannica says seclusion 'severely limited' contact, not that it ended it. The tour does not describe the Dutch and Chinese trade exceptions, which the sources I read do not cover.",
        evidence: "attested", features: [tokyo], relatedSites: [], sources: ["brit-tokugawa-shogunate", "brit-tokugawa-period", "brit-meiji"]
      },
      {
        id: "meiji", title: "The Meiji Restoration (1868)", subject: "Revolution within the ruling class",
        date: { start: 1853, end: 1869, kind: "period" }, year: 1868, camera: { center: [137.0, 35.8], zoom: 5.5 },
        text: "Facing superior naval power, Britannica says the shogunate was forced to end two centuries of isolation and sign unequal treaties granting foreign powers judicial and economic privileges, after the visit of Commodore Matthew Perry. Young samurai from domains hostile to the Tokugawa took up arms. On 3 January 1868 a coup in Kyoto announced the ouster of the last shogun, Tokugawa Yoshinobu, and proclaimed the young Meiji emperor ruler of Japan. The last Tokugawa forces surrendered in May 1869. The Charter Oath promised a break with feudal class restrictions and the search for knowledge to make Japan a 'rich country with a strong military'. The capital moved to Edo, renamed Tokyo.",
        what: "The shogunate falls and a modernising government takes power in the emperor's name.",
        where: "Kyoto, then Tokyo.",
        why: "Western pressure and the weakness the unequal treaties exposed.",
        uncertain: "Britannica says the emperor's control was returned 'at least nominally'; real power lay with the new leadership. Dates vary (1867 and 1868) depending on whether the shogun's fall or the proclamation is counted.",
        evidence: "attested", features: [kyoto, tokyo], relatedSites: [], sources: ["brit-meiji", "brit-meiji-summary", "brit-empire-japan"]
      },
      {
        id: "empire-war", title: "Empire and war (1894–1945)", subject: "Imperial state and expansion",
        date: { start: 1894, end: 1945, kind: "period" }, camera: { center: [125.0, 35.0], zoom: 3.8 },
        text: "Britannica says the Meiji government transformed Japan from an isolated feudal society into a modern, industrialised global power. A less authoritative blog says expansion led to wars with China in 1894–95 and Russia in 1904–05 and a sphere of influence in Korea and Manchuria, a second war with China from 1937, the attack on Pearl Harbor in December 1941 and an invasion of British, Dutch and other colonies in Southeast Asia. In August 1945 the United States dropped atomic bombs on Hiroshima and Nagasaki, and Japan accepted unconditional surrender.",
        what: "A modernised state expands by war until it is defeated.",
        where: "Korea, Manchuria, China, Southeast Asia and the Pacific.",
        why: "The unrated source gives a 'line of advantage' policy as the stated aim of early expansion.",
        uncertain: "Everything after the modernisation sentence comes from one unrated blog, so treat it as an outline to be checked. This chapter does not describe Japan's occupation regimes or atrocities against civilians in Asia, or Japanese civilian suffering, which need better sources and care.",
        evidence: "reconstructed", features: [circ("Korea and Manchuria (broad region)", 126.0, 41.0, 600, "influence", "regional", "reconstructed", "Region of Japan's 'sphere of influence' per an unrated source; broad region only.")],
        relatedSites: [], sources: ["brit-empire-japan", "blog-japan-meiji-ww2"]
      },
      {
        id: "occupation", title: "Occupation and the 1947 constitution (1945–1952)", subject: "Allied occupation and new constitution",
        date: { start: 1945, end: 1952, kind: "occupation" }, year: 1947, camera: { center: [138.0, 36.0], zoom: 5.5 },
        text: "From 1945 to 1952 Japan was under Allied military occupation headed by the Supreme Commander for the Allied Powers, a post held by General Douglas MacArthur until 1951. Britannica says the policies were demilitarisation, democratisation and an economy able to support a peaceful democracy. When Japanese drafts proved inadequate, MacArthur's staff wrote a draft for the government to deliberate. The new constitution was promulgated on 3 November 1946 and took effect on 3 May 1947. Sovereignty lay with the people, and Article 9 renounced war as a sovereign right and pledged that armed forces would never be maintained.",
        what: "A defeated state gets a democratic constitution drafted under occupation.",
        where: "Tokyo.",
        why: "Britannica says the changes were based on the borrowing of foreign models, as earlier reforms in the 7th century and the 1868 restoration had been.",
        uncertain: "Britannica says MacArthur's staff wrote the draft because Japanese drafts proved inadequate; the sources I read do not give Japanese perspectives on that. This tour ends in 1952.",
        evidence: "attested", features: [tokyo], relatedSites: [], sources: ["brit-japan-since-1945"]
      }
    ]
  });
})();
