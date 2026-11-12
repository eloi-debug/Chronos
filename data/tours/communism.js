(function () {
  const { B, pt, circ, line } = window.TourKit;
  const moscow = pt("Moscow", 37.6173, 55.7558, "site", "approximate", "attested", "Capital of the Soviet Union.");
  const berlin = pt("Berlin", 13.405, 52.52, "site", "approximate", "attested", "Divided city; the Wall opened in November 1989.");
  const beijing = pt("Beijing", 116.4074, 39.9042, "site", "approximate", "attested", "Capital of the People's Republic of China.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "communism",
    category: "political",
    title: "Communism: origins, spread and downfall",
    description: "From Marx and Engels's 1848 pamphlet through the Russian Revolution, Stalin's USSR, the Eastern Bloc, Mao's China, Cuba and Vietnam, to the revolutions of 1989 and the end of the Soviet Union. It states the repression, famines and mass deaths the sources record, gives ranges where estimates differ, and does not treat communism as one thing: ideas, parties and states are kept apart.",
    scope: "Europe, Asia and the Americas",
    span: "1848 to 1991 CE (and after)",
    tags: ["communism", "Marxism", "Lenin", "Stalin", "Mao", "Cold War", "1989"],
    chapters: [
      {
        id: "marx", title: "The idea: Marx, Engels and the Manifesto (1848)", subject: "Political theory",
        date: { start: 1848, end: 1848, kind: "publication" }, camera: { center: [10.0, 50.0], zoom: 4 },
        text: "Karl Marx and Friedrich Engels wrote the Communist Manifesto in 1848 for a small group of radicals, the Communist League. It presents history as a history of class struggles, predicts that capitalism will be overthrown by the industrial working class (the proletariat), and calls for the abolition of private property. Britannica says Marxism helped consolidate and radicalise parts of the labour and socialist movements in western Europe.",
        what: "A theory of history and revolution is published.",
        where: "Written in Europe; the sources I read do not say where it circulated first.",
        why: "Marx and Engels held that the poverty and early death of workers were built into capitalism and could only be ended by replacing it.",
        uncertain: "This describes the theory, not whether it was right. Later regimes called themselves Marxist or communist, and what they did differed from the Manifesto's text in ways historians debate.",
        evidence: "attested", features: [], relatedSites: [], sources: ["brit-manifesto", "brit-communism", "brit-marxism"]
      },
      {
        id: "lenin", title: "Lenin and the Bolshevik seizure of power (1917–1922)", subject: "Revolutionary party-state",
        date: { start: 1917, end: 1922, kind: "event" }, camera: { center: [37.0, 57.0], zoom: 4 },
        text: "After the monarchy fell in February 1917, the Provisional Government was opposed by the Petrograd soviet. By September the Bolsheviks under Vladimir Lenin had majorities in the Petrograd and Moscow soviets. In October they staged a nearly bloodless coup, occupying government buildings. The civil war between communists and their opponents lasted until late 1920, and the Soviet Union was proclaimed in 1922. Britannica says Leninism in practice established a permanent dictatorship of the party.",
        what: "A revolutionary party takes power and builds a one-party state.",
        where: "Petrograd and Moscow, then the whole former empire.",
        why: "Wartime hunger and loss of faith in the Provisional Government gave the Bolsheviks urban and military support.",
        uncertain: "The sources I read give no death toll for the civil war, so none is stated. Wikipedia gives 1922 as the end of the revolutionary period, while Britannica Kids says the civil war lasted until late 1920.",
        evidence: "attested", features: [moscow, pt("Petrograd (St Petersburg)", 30.3351, 59.9343, "site", "approximate", "attested", "Scene of both 1917 revolutions.")],
        relatedSites: [], sources: ["brit-rev-summary", "brit-rev-kids", "brit-marxism", "wiki-russian-revolution"]
      },
      {
        id: "stalin", title: "Stalin: industrialisation, famine and terror (1928–1953)", subject: "Dictatorship and state terror",
        date: { start: 1928, end: 1953, kind: "period" }, camera: { center: [50.0, 52.0], zoom: 3.2 },
        text: "Britannica says Joseph Stalin ruled the Soviet Union as a dictator from 1928 to 1953, industrialised it, forcibly collectivised agriculture and consolidated power by intensive police terror, at the cost of the deaths of millions of Soviet citizens. Collectivisation deported some 10 million or more peasants, with 2 million or more premature deaths probably resulting. A major famine in 1932–33 killed some 4 to 5 million people in Ukraine and 2 to 3 million more in the North Caucasus and Lower Volga. The Great Purge of the late 1930s sent millions to prison camps, and the Gulag held about 100,000 in the late 1920s before a huge expansion.",
        what: "A party dictatorship transforms the economy by force and kills and imprisons millions.",
        where: "The whole Soviet Union, with the famine concentrated in Ukraine, the North Caucasus, the Lower Volga and Kazakhstan.",
        why: "Britannica traces the Holodomor to Stalin's 1929 decision to collectivise agriculture.",
        uncertain: "Figures differ by source and by what is counted. Britannica's Holodomor article gives at least 5 million deaths from hunger across the USSR in 1931–34, including at least 3.9 million Ukrainians; Western scholarly estimates of Gulag deaths in 1918–56 range from 1.2 to 1.7 million. Whether the famine was a deliberate act against Ukrainians is a question this tour does not decide.",
        evidence: "attested", features: [moscow, circ("Ukraine (broad region)", 31.0, 49.0, 450, "direct", "regional", "attested", "Region of the worst famine deaths; not a border.")],
        relatedSites: [], sources: ["brit-stalin", "brit-soviet-collectivization", "brit-holodomor", "brit-great-purge", "brit-gulag"]
      },
      {
        id: "eastern-bloc", title: "The Eastern Bloc and the Iron Curtain (1945–1955)", subject: "Soviet sphere of influence",
        date: { start: 1945, end: 1955, kind: "period" }, camera: { center: [22.0, 49.0], zoom: 4 },
        text: "At the 1945 Yalta Conference Stalin pledged free elections in the eastern European countries liberated by the Red Army. Britannica says occupying Soviet forces instead supported takeovers by local communist parties and restructured governments and economies on the Stalinist model. Winston Churchill described an 'iron curtain' across the continent in March 1946. The bloc included Albania, Bulgaria, Czechoslovakia, East Germany, Hungary, Poland and Romania, and the Warsaw Pact formalised it in 1955. Yugoslavia was effectively expelled in 1948 and Albania withdrew in 1961.",
        what: "Communist governments are installed across eastern Europe with Soviet backing.",
        where: "Eastern and central Europe, from the Baltic to the Adriatic.",
        why: "Britannica says the bloc was formed primarily to protect Soviet military interests as a buffer zone.",
        uncertain: "Local support for communist parties varied by country, and the sources I read do not quantify it. Wikipedia lists the three Baltic states as annexed into the USSR rather than as bloc members.",
        evidence: "attested", features: [circ("Eastern Bloc states (broad region)", 22.0, 49.0, 800, "influence", "regional", "reconstructed", "Broad region covering the countries listed by Britannica. Not a border."), berlin],
        relatedSites: [], sources: ["brit-eastern-bloc", "brit-iron-curtain", "wiki-iron-curtain"]
      },
      {
        id: "china", title: "China: Mao, the Great Leap and the Cultural Revolution (1949–1976)", subject: "Communist party-state",
        date: { start: 1949, end: 1976, kind: "period" }, camera: { center: [105.0, 35.0], zoom: 3.6 },
        text: "Mao Zedong was the first chairman of the People's Republic of China, founded in 1949. Britannica says his revolution achieved China's sovereignty and gave land to a formerly landless peasantry, but also ran an authoritarian government that quashed dissidence and caused years of terror, suffering and famine. The Great Leap Forward of 1958–60 caused a famine; estimates of deaths range from about 15 to 30 million (Britannica's Maoism article), about 20 million (Britannica's Great Leap article), 23 to 30 million (a BMJ article), and up to 45 million in more recent estimates cited by Britannica. In 1966 Mao launched the Cultural Revolution, in which Britannica says victims were publicly humiliated, many beaten and tortured, and some killed or driven to suicide.",
        what: "A communist state under Mao carries out campaigns that cause mass death and persecution.",
        where: "Throughout China.",
        why: "The BMJ article says the famine was largely man-made and drought only a contributing factor, while Britannica attributes it to bad policy, oversized communes and falsified reporting.",
        uncertain: "The death toll is uncertain and estimates differ widely because official figures are unreliable. The sources agree that it was catastrophic and disagree on its scale.",
        evidence: "attested", features: [beijing], relatedSites: [],
        alternatives: [
          { label: "About 20 million", text: "Britannica's Great Leap Forward article.", sources: ["brit-great-leap"] },
          { label: "15–30 million", text: "Britannica's article on Maoism.", sources: ["brit-maoism"] },
          { label: "23–30 million, possibly nearer 40 million", text: "A BMJ article says detailed studies give 23–30 million excess deaths and unpublished Chinese materials hint at up to 40 million.", sources: ["bmj-famine"] },
          { label: "45 million", text: "Britannica's facts page cites recent estimates of 45 million.", sources: ["brit-great-leap-facts"] }
        ],
        sources: ["brit-mao", "brit-mao-cultural-rev", "brit-maoism", "brit-great-leap", "brit-great-leap-facts", "brit-china-1958", "bmj-famine"]
      },
      {
        id: "spread", title: "Cold War spread: Korea, Vietnam and Cuba (1950–1976)", subject: "Communist states and proxy wars",
        date: { start: 1950, end: 1976, kind: "period" }, camera: { center: [110.0, 25.0], zoom: 2.8 },
        text: "Korea, divided after the Second World War, became a Cold War battleground when the Soviet client state North Korea invaded South Korea in June 1950. China aided the North, and fighting ended in July 1953 with Korea still divided. In Vietnam, communist North Vietnam, supported by China and the Soviet Union, fought the US-backed South, and Wikipedia says Vietnam was reunited under a Marxist–Leninist government in 1976. In Cuba, Fidel Castro overthrew Fulgencio Batista on 1 January 1959; Britannica says he proclaimed the revolution's Marxist-Leninist nature two years later and aligned Cuba with the Soviet Union.",
        what: "Communist governments take power outside Europe through war and revolution.",
        where: "The Korean peninsula, Vietnam and Cuba.",
        why: "These cases had different causes: a division of Korea after the war, a decades-long war in Vietnam and a home-grown revolution in Cuba that moved toward Moscow.",
        uncertain: "This chapter is a selection, not a full account of communism's spread. It does not cover Laos, Cambodia, Africa or Eastern Europe's later cases, or the US role in detail. Casualty figures for these wars, other than Britannica's 'more than a million combat casualties' for Korea, are not stated.",
        evidence: "attested",
        features: [circ("Korean peninsula (broad region)", 127.8, 37.0, 250, "conflict", "regional", "attested", "Divided region; the demarcation line is not drawn."), circ("Vietnam (broad region)", 106.0, 16.0, 600, "conflict", "regional", "attested", "Broad region; the 1954 division line is not drawn."), pt("Havana", -82.3666, 23.1136, "site", "approximate", "attested", "Entered by Castro's forces on 1 January 1959.")],
        relatedSites: [], sources: ["brit-cold-war", "wiki-marxism-leninism", "brit-cuban-revolution", "brit-cuba"]
      },
      {
        id: "china-reform", title: "A communist party and a market economy (1978 onward)", subject: "Party-state reforming its economy",
        date: { start: 1978, end: 2000, kind: "period" }, camera: { center: [105.0, 35.0], zoom: 3.6 },
        text: "In late 1978 China's leaders adopted the Four Modernizations as their top priority, subordinating other tasks to economic development, and moved to join the international economy. Britannica says rural reform came first, with higher farm prices from 1979, and later reforms increased the use of market forces and privatised or dismantled some state enterprises. Since the mid-1990s the Chinese Communist Party has accelerated market reforms in banking, taxes, trade and investment. The party remained in power.",
        what: "The ruling party keeps political control while introducing markets.",
        where: "China.",
        why: "The sources I read describe the policy change as a break from the Cultural Revolution's priorities.",
        uncertain: "This chapter does not cover Vietnam, Laos, North Korea or Cuba's later paths, or the 1989 protests in China, which need separate research.",
        evidence: "attested", features: [beijing], relatedSites: [], sources: ["brit-china-reforms"]
      },
      {
        id: "1989", title: "The revolutions of 1989 (1989–1990)", subject: "Collapse of the Eastern Bloc regimes",
        date: { start: 1989, end: 1990, kind: "event" }, camera: { center: [18.0, 50.0], zoom: 4.2 },
        text: "Britannica says Warsaw Pact countries shook off their communist governments: Solidarity swept into power in Poland in June 1989, Hungary opened its border with Austria in September, and the Berlin Wall was toppled in November. The Iron Curtain largely ceased to exist in 1989–90 with the communists' abandonment of one-party rule in eastern Europe.",
        what: "One-party communist rule ends across the Eastern Bloc within about a year.",
        where: "Poland, Hungary, East Germany and the rest of the bloc.",
        why: "The sources I read connect the events to Soviet reform under Gorbachev but do not give a full causal account.",
        uncertain: "This chapter lists events. It does not cover Czechoslovakia, Romania, Bulgaria or Yugoslavia individually, and it is silent on the violence in some countries.",
        evidence: "attested", features: [berlin, pt("Warsaw", 21.0122, 52.2297, "site", "approximate", "attested", "Poland's June 1989 election."), pt("Budapest", 19.0402, 47.4979, "site", "approximate", "attested", "Hungary opened its border in September 1989.")],
        relatedSites: [], sources: ["brit-soviet-25th", "brit-iron-curtain"]
      },
      {
        id: "dissolution", title: "The Soviet Union dissolves (1985–1991)", subject: "End of the world's first communist state",
        date: { start: 1985, end: 1991, kind: "period" }, camera: { center: [60.0, 55.0], zoom: 2.8 },
        text: "Mikhail Gorbachev's reforms, perestroika (restructuring) and glasnost (openness), aimed to revive the economy but, according to EBSCO, inadvertently fuelled calls for independence among the republics. The Baltic states became independent in September 1991, and Ukraine's sovereignty was confirmed by plebiscite in December. Leaders of Russia, Ukraine and Belarus signed a treaty on 8 December 1991, Gorbachev resigned on 25 December, and Britannica says the USSR formally ceased to exist on 31 December, replaced by 15 independent states.",
        what: "A communist superpower breaks into 15 countries.",
        where: "Moscow and the 15 Soviet republics.",
        why: "Britannica lists political, economic, military, social and nuclear factors, together with the rise of nationalism and ethnic tensions.",
        uncertain: "Sources date the end to 25 December (Gorbachev's resignation) or 31 December (formal dissolution). The sources I read also say the collapse led to serious disorder and economic chaos; this tour does not cover post-Soviet history, or the communist states that remain beyond what is noted for China and Cuba.",
        evidence: "attested", features: [moscow], relatedSites: [], sources: ["brit-soviet-collapse", "brit-soviet-25th", "ebsco-dissolution"]
      }
    ]
  });
})();
