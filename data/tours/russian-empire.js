(function () {
  const { B, pt, circ, line } = window.TourKit;
  const spb = pt("St Petersburg", 30.3351, 59.9343, "site", "approximate", "attested", "Imperial capital; named Petrograd during 1914–24.");
  const moscow = pt("Moscow", 37.6173, 55.7558, "site", "approximate", "attested", "City centre.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "russian-empire",
    category: "political",
    title: "The Russian Empire, 1721–1917",
    description: "How Muscovy became an empire, how it grew through war and the partition of Poland, why the revolution of 1905 forced a constitution, and how defeat in the First World War ended the dynasty. It also records the empire's non-Russian peoples and what the sources leave unexplained.",
    scope: "Eastern Europe, Siberia, the Caucasus and the Baltic",
    span: "1721 to 1917 CE",
    tags: ["Russia", "Peter the Great", "Catherine the Great", "Poland", "1905", "Romanov"],
    chapters: [
      {
        id: "peter", title: "Peter I proclaimed emperor (1721)", subject: "Autocratic empire",
        date: { start: 1721, end: 1721, kind: "event" }, camera: { center: [35.0, 57.0], zoom: 3.8 },
        text: "Britannica says the Russian Empire was established in 1721, when the Russian Senate bestowed the title of emperor on Peter I, who ruled from 1682 to 1725. It describes Russia under Peter as seeking to modernise and expand, with reforms in administration, industry and the military. The empire spread from Siberia across territories in Europe and Asia.",
        what: "Muscovy takes the title of empire and sets out to modernise.",
        where: "From the Baltic to Siberia, with St Petersburg as the new capital.",
        why: "Britannica names modernisation and expansion as Peter's aims.",
        uncertain: "The sources I read give only a short summary of Peter's reforms. The empire's extent in 1721 is not mapped here.",
        evidence: "attested", features: [spb, moscow], relatedSites: [], sources: ["brit-russian-empire"]
      },
      {
        id: "catherine", title: "Catherine II expands the empire (1762–1796)", subject: "Expanding empire",
        date: { start: 1762, end: 1796, kind: "reign" }, camera: { center: [30.0, 50.0], zoom: 4 },
        text: "Catherine the Great ruled from 1762 to 1796 and expanded the empire. In 1772 she took part in the first partition of Poland, a plan proposed by Frederick II of Prussia. She took more Polish land in the second (1793) and third (1795) partitions while Prussia and Austria were busy fighting revolutionary France, and annexed Courland in 1795. In 1783 she annexed Crimea from the Ottomans and, according to an unrated source, took Georgia under a protectorate.",
        what: "Russia gains large parts of eastern Poland-Lithuania, Courland and Crimea.",
        where: "Poland-Lithuania, Courland, Crimea and the Black Sea coast.",
        why: "Britannica says the first partition compensated Russia for its war expenditure.",
        uncertain: "The partitions removed Poland-Lithuania as a state; that was a loss for Poles and Lithuanians, which the sources describe in more detail than I summarise here. The Crimea and Georgia details come from an unrated source.",
        evidence: "attested", features: [pt("Warsaw", 21.0122, 52.2297, "site", "approximate", "attested", "Later part of the Russian partition."), pt("Crimea (Sevastopol area)", 33.5, 44.6, "occupation", "approximate", "attested", "Annexed 1783; marker approximate."), circ("Eastern Poland-Lithuania taken by Russia (broad region)", 27.0, 53.0, 400, "occupation", "regional", "reconstructed", "Broad region only; the partition lines are not drawn.")],
        relatedSites: [], sources: ["brit-russia-catherine", "brit-partitions-poland", "wiki-partitions-poland", "warhistory-catherine"]
      },
      {
        id: "poland-after", title: "Poland inside the empire (1795–1831)", subject: "Absorbed and autonomous territories",
        date: { start: 1795, end: 1831, kind: "period" }, camera: { center: [21.0, 52.0], zoom: 5 },
        text: "By the third partition Russia gained Courland, Lithuanian land east of the Neman and the rest of Volhynian Ukraine. After Napoleon formed the Duchy of Warsaw in 1807, the Congress of Vienna in 1815 created the Congress Kingdom of Poland, an autonomous polity under the Russian tsar. Wikipedia says Russia abolished its autonomy after crushing an insurrection in 1831, and Poles faced confiscations, deportations, forced military service and the closure of their universities.",
        what: "Poland is erased as a state, partly revived, then fully absorbed.",
        where: "Warsaw and the Polish lands.",
        why: "Russian policy responded to uprisings with repression.",
        uncertain: "This chapter describes Russian policy from Polish-focused sources. The sources I read do not give Russian officials' reasoning.",
        evidence: "attested", features: [pt("Warsaw", 21.0122, 52.2297, "occupation", "approximate", "attested", "Capital of the Congress Kingdom.")],
        relatedSites: [], sources: ["brit-partitions-poland", "wiki-russian-partition"]
      },
      {
        id: "serfs", title: "Serfdom, 1812 and emancipation (to 1861)", subject: "Empire dependent on serfdom",
        date: { start: 1812, end: 1861, kind: "period" }, camera: { center: [37.0, 55.0], zoom: 4.2 },
        text: "Britannica notes that Catherine's 1785 charter of nobility served to perpetuate the power of the ruling class until the liberation of the serfs in 1861. An unrated source says Russia had not sustained a foreign invasion since 1709 before Napoleon's 1812 campaign began with an initial Russian retreat.",
        what: "Social power stays with the nobility until the serfs are freed in 1861.",
        where: "Throughout the empire; Moscow lay on Napoleon's route in 1812.",
        why: "The sources I read do not explain how or why emancipation was carried out.",
        uncertain: "This chapter is thin by design. My sources do not cover the 1812 war, the Decembrists, Alexander II's reforms or the terms of emancipation, and I will not fill the gap from memory.",
        evidence: "reconstructed", features: [moscow], relatedSites: [], sources: ["brit-russia-catherine", "warhistory-catherine"]
      },
      {
        id: "1905", title: "Defeat and the Revolution of 1905", subject: "Autocracy forced to concede a constitution",
        date: { start: 1904, end: 1906, kind: "event" }, year: 1905, camera: { center: [30.3, 59.9], zoom: 6 },
        text: "Defeat by Japan in the Russo-Japanese War of 1904–05 helped bring revolution. On 22 January 1905 (Bloody Sunday), more than 100 workers were killed when troops fired on a peaceful march to the Winter Palace in St Petersburg, and strikes and uprisings followed. In October a general strike and the formation of a workers' soviet pressed Nicholas II into issuing the October Manifesto, which promised civil liberties and an elected Duma. The Fundamental Laws of 1906 acted as a constitution but granted far less than promised.",
        what: "The emperor concedes a constitution and legislature without losing his central power.",
        where: "St Petersburg and cities and countryside across the empire.",
        why: "Britannica links the unrest to the humiliating war and long-standing discontent.",
        uncertain: "Nicholas issued the manifesto 'with extreme reluctance'. Britannica says the manifesto satisfied enough moderates to let the revolution be crushed, and the government then fulfilled only part of the promises. Casualty counts for 1905 as a whole are not given in the sources I read.",
        evidence: "attested", features: [spb], relatedSites: [], sources: ["brit-rev-1905", "brit-russia-1905", "brit-october-manifesto", "ebsco-october-manifesto"]
      },
      {
        id: "1917", title: "War, abdication and the end of the dynasty (1914–1918)", subject: "Collapse of the monarchy",
        date: { start: 1914, end: 1918, kind: "event" }, year: 1917, camera: { center: [30.3, 59.9], zoom: 5.5 },
        text: "Britannica says the revolution of 1917 followed corruption, the reactionary policies of Nicholas II and catastrophic losses in the First World War. Riots over food scarcity broke out in Petrograd in February (March in the new calendar), the army joined the rebels, and Nicholas abdicated on 15 March 1917. His brother Grand Duke Michael refused the throne, ending the Romanov dynasty. Nicholas and his family were detained and, on 17 July 1918, killed at Yekaterinburg as White forces approached.",
        what: "The monarchy falls and a provisional government replaces it.",
        where: "Petrograd, with Yekaterinburg as the place of the Romanovs' deaths.",
        why: "Wartime hardship and the loss of the army's loyalty.",
        uncertain: "This tour ends with the dynasty. The Provisional Government, the Bolshevik takeover and what followed are in the Communism tour. Dates follow the new calendar unless noted.",
        evidence: "attested", features: [spb, pt("Yekaterinburg", 60.6122, 56.8389, "site", "approximate", "attested", "Where the imperial family was killed in 1918.")],
        relatedSites: [], sources: ["brit-russian-revolution", "brit-feb-revolution", "brit-rev-summary", "brit-rev-timeline"]
      },
      {
        id: "peoples", title: "An empire of many peoples", subject: "Multi-ethnic empire",
        date: { start: 1914, end: 1914, kind: "snapshot" }, camera: { center: [60.0, 55.0], zoom: 2.8 },
        text: "World History Encyclopedia describes the empire's expansion as beginning under the rulers of Muscovy and accelerating under the tsars, especially Peter and Catherine. Britannica notes that, in 1917, ethnic minorities were eager to escape Russian domination. It also says that a serious fault of Stolypin's policies was a deliberate revival of Russian nationalism and Russification.",
        what: "The empire is shown as a state of many peoples, not only Russians.",
        where: "The whole empire in 1914.",
        why: "Nationalism among non-Russian peoples shaped the revolutions and the Soviet Union's structure.",
        uncertain: "The sources I read name Poles and unspecified 'ethnic minorities' but do not give a breakdown of peoples, languages or religions, so this chapter makes no such claims. Where a border overlay is shown, it is only the nearest earlier snapshot.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["whe-russia-1914", "brit-russian-revolution", "brit-russia-1905"]
      }
    ]
  });
})();
