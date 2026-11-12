(function () {
  const { B, pt, circ, line } = window.TourKit;
  const berlin = pt("Berlin", 13.405, 52.52, "site", "approximate", "attested", "Capital of the German Reich; city centre.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "weimar-third-reich",
    category: "political",
    title: "Weimar Republic to the Nazi dictatorship and its collapse",
    description: "How Germany's first democracy was founded, strained and dismantled; how the Nazi state persecuted Jews and others and committed genocide; how its aggression began a world war; and how it ended in 1945. This tour treats the regime's violence as the central fact and does not present conquest as achievement.",
    scope: "Germany and German-occupied Europe",
    span: "1918 to 1949 CE",
    tags: ["Weimar", "Nazi Germany", "Holocaust", "World War II", "dictatorship"],
    chapters: [
      {
        id: "founding", title: "A republic is founded (1918–1919)", subject: "Federal democratic republic",
        date: { start: 1918, end: 1919, kind: "event" }, camera: { center: [11.5, 51.0], zoom: 5.2 },
        text: "A republic was proclaimed at the end of the First World War and the Kaiser's abdication was announced. A national assembly met in Weimar from 6 February to 11 August 1919 and adopted a constitution. Britannica says it was hailed as the most modern democratic constitution of its day, with a popularly elected president who held considerable powers.",
        what: "A monarchy gives way to a parliamentary republic with civil rights and a strong central government.",
        where: "Berlin was the capital, and the assembly met in Weimar in Thuringia.",
        why: "The republic was created amid defeat and unrest, and the assembly met away from Berlin.",
        uncertain: "Sources disagree on the proclamation date: Wikipedia gives 9 November 1918, while Britannica Kids gives 8 November. Critics have blamed the system of proportional representation and the president's emergency powers, but Britannica argues the later dictatorship owed far more to events and social forces than to constitutional defects.",
        evidence: "attested", features: [berlin, pt("Weimar", 11.3235, 50.9795, "site", "approximate", "attested", "Where the constituent assembly met in 1919.")],
        relatedSites: [], sources: ["brit-weimar", "brit-weimar-kids", "brit-germany-constitution", "wiki-weimar"]
      },
      {
        id: "crisis-1923", title: "Occupation and hyperinflation (1923)", subject: "Republic in economic crisis",
        date: { start: 1923, end: 1923, kind: "event" }, camera: { center: [8.0, 51.0], zoom: 5.5 },
        text: "In January 1923 France and Belgium occupied the Ruhr industrial district after Germany fell behind on reparations. The government urged workers and employers to stop work, and paid idle workers with a rapidly inflating currency. By November it took 4.2 trillion marks to buy one US dollar. Savings and pensions were wiped out, and Britannica says the inflation fuelled radicalism on both the left and the right.",
        what: "A fiscal and political crisis destroys the savings of much of the middle class.",
        where: "The Ruhr valley, and the whole country.",
        why: "Inflation was rooted in the debt from financing the war, and the Ruhr occupation triggered its collapse.",
        uncertain: "Specific price examples in the sources are illustrative. Gustav Stresemann's new currency, the Rentenmark, stabilised the situation, but Britannica says he fell from office soon after.",
        evidence: "attested", features: [circ("Ruhr district (broad region)", 7.2, 51.5, 60, "occupation", "regional", "attested", "French–Belgian occupation from January 1923. Broad region only."), berlin],
        relatedSites: [], sources: ["brit-germany-crisis", "brit-weimar-kids", "hs-weimar"]
      },
      {
        id: "depression", title: "Stabilisation, then the Great Depression (1923–1932)", subject: "Republic under economic and political strain",
        date: { start: 1923, end: 1932, kind: "period" }, camera: { center: [11.5, 51.0], zoom: 5.2 },
        text: "A period of recovery followed from 1923 to 1929. Germany had become reliant on foreign loans, particularly from American banks, so the 1929 stock-market crash hit it hard; Britannica Kids says Germany fell into a slump worse than any other European country's. The Wikipedia summary says unemployment and unrest led to the collapse of the Müller coalition and the start of presidential cabinets.",
        what: "A democracy dependent on foreign loans loses its parliamentary government as the economy collapses.",
        where: "Throughout Germany.",
        why: "The sudden withdrawal of loans crippled recovery and increased support for radical parties.",
        uncertain: "Historians weigh economic, constitutional and social causes differently. The sources I reviewed give only an outline of party politics and election results, and no figures are quoted here.",
        evidence: "reconstructed", features: [berlin], relatedSites: [], sources: ["brit-weimar-kids", "wiki-weimar", "hs-weimar"]
      },
      {
        id: "dictatorship", title: "From chancellor to dictator (January–March 1933)", subject: "Constitutional republic becomes a one-party dictatorship",
        date: { start: 1933, end: 1933, kind: "event" }, camera: { center: [13.4, 52.5], zoom: 7 },
        text: "President Hindenburg appointed Adolf Hitler chancellor on 30 January 1933. The Reichstag building burned on 27 February, and the government falsely portrayed it as part of a Communist plot. A decree the next day suspended civil rights and allowed imprisonment without trial. On 23 March the Reichstag passed the Enabling Act, 444 votes to 94, which let the government make laws without parliament.",
        what: "Democratic institutions are replaced with rule by one man and one party, within weeks.",
        where: "Berlin.",
        why: "The Nazi party lacked a majority, so the government used the fire as a pretext for emergency powers and then obtained legislative powers through a vote.",
        uncertain: "Britannica reports that many believe the Nazis themselves contrived the fire; other accounts treat the question as unresolved, and this tour does not decide it. Hitler took office through legal appointment, not a coup, which is why historians stress the role of political deadlock.",
        evidence: "attested", features: [berlin], relatedSites: [],
        alternatives: [{ label: "Who set the Reichstag fire?", text: "Britannica says it was widely believed to have been contrived by the Nazi government, while Wikipedia states only that the building 'caught fire' and Hitler accused the communists. This tour makes no claim beyond the decree and the vote.", sources: ["brit-reichstag-fire", "brit-enabling"] }],
        sources: ["brit-enabling", "brit-reichstag-fire", "ushmm-1933", "bundestag-enabling"]
      },
      {
        id: "persecution", title: "Persecution of Jews and other targeted groups (1933–1939)", subject: "Dictatorship and state-sponsored persecution",
        date: { start: 1933, end: 1939, kind: "period" }, camera: { center: [11.0, 50.5], zoom: 5 },
        text: "The persecution of Jews began soon after Hitler took power, with a boycott of Jewish businesses and the dismissal of Jewish civil servants. Under the Nuremberg Laws of 1935 Jews lost their German citizenship. During the Kristallnacht pogrom in November 1938 about 7,500 Jewish businesses were gutted, more than 1,000 synagogues burned or damaged, and at least 91 Jews were killed. Jews were then imprisoned in concentration camps or forced into ghettos.",
        what: "Discrimination becomes law and then organised violence.",
        where: "Throughout Germany; the laws were announced at Nuremberg.",
        why: "The regime was driven by antisemitism and made persecution a policy of the state.",
        uncertain: "The numbers come from Britannica and are minimum figures. The sources I read here focus on Jews, but the regime also persecuted other groups, which this tour does not detail.",
        evidence: "attested", features: [pt("Nuremberg", 11.0767, 49.4521, "site", "approximate", "attested", "City where the 1935 laws were announced."), berlin],
        relatedSites: [], sources: ["brit-holocaust", "ushmm-1933"]
      },
      {
        id: "aggression", title: "Annexation and aggression (1938–1939)", subject: "Dictatorship pursuing territorial aggression",
        date: { start: 1938, end: 1939, kind: "event" }, camera: { center: [16.0, 49.5], zoom: 5 },
        text: "In March 1938 Germany annexed Austria. After a crisis over Czechoslovakia's Sudetenland, Britain, France and Italy agreed at Munich in September 1938 to hand it over to Germany. On 15 March 1939 Hitler seized what remained of Czechoslovakia. After a German–Soviet non-aggression pact, Germany invaded Poland on 1 September 1939, and Britain and France declared war on 3 September.",
        what: "Annexations and an invasion turn a dictatorship's aims into a European, then a world, war.",
        where: "Vienna, Prague and the Sudetenland, then Poland.",
        why: "Britannica says the Munich agreement came to symbolise yielding to a dictator's demands, and that the pact with the Soviet Union secretly sealed Poland's fate.",
        uncertain: "'Self-determination' was Hitler's justification for the Anschluss and was a pretext. The sources I read do not describe resistance or the experience of occupied peoples, so the map shows locations only.",
        evidence: "attested", features: [pt("Vienna", 16.3738, 48.2082, "occupation", "approximate", "attested", "Annexed March 1938."), pt("Munich", 11.582, 48.1351, "site", "approximate", "attested", "Agreement of September 1938."), pt("Prague", 14.4378, 50.0755, "occupation", "approximate", "attested", "Occupied March 1939."), pt("Warsaw", 21.0122, 52.2297, "conflict", "approximate", "attested", "Poland invaded 1 September 1939.")],
        relatedSites: [], sources: ["brit-germany-foreign", "wiki-anschluss"]
      },
      {
        id: "genocide", title: "The Holocaust (1939–1945)", subject: "Genocide carried out by a dictatorship and its collaborators",
        date: { start: 1941, end: 1945, kind: "event" }, camera: { center: [18.0, 51.0], zoom: 4.2 },
        text: "Nazi Germany and its collaborators systematically killed six million Jewish men, women and children, and millions of others, during the war. On 20 January 1942, fifteen senior officials met at a villa at Wannsee to coordinate what they called the 'Final Solution', meaning the systematic physical annihilation of European Jews. The planners spoke of about 11 million Jews. Jews from across occupied Europe were deported to concentration and extermination camps, where they were killed or forced into slave labour.",
        what: "A state's policy of persecution becomes organised mass murder.",
        where: "Across German-occupied Europe. Camp locations are not mapped here, because I did not read sources giving them.",
        why: "The Wannsee meeting is evidence of how officials coordinated an already-developing programme; the genocide was driven by antisemitism.",
        uncertain: "The dates for the start of mass killing are not given in the sources I read; 1941 is an approximate start for the chapter. Figures such as six million are standard estimates, and the 11 million figure is the planners' own number, not a count of victims.",
        evidence: "attested", features: [pt("Wannsee villa", 13.1624, 52.4328, "site", "approximate", "attested", "Berlin suburb where officials met on 20 January 1942; marker approximate.")],
        relatedSites: [], sources: ["brit-holocaust", "ushmm-wannsee"]
      },
      {
        id: "collapse", title: "Defeat and occupation (1945–1949)", subject: "State dissolved; four-power occupation",
        date: { start: 1945, end: 1949, kind: "event" }, year: 1945, camera: { center: [11.5, 51.0], zoom: 5 },
        text: "Hitler killed himself on 30 April 1945 as Soviet forces closed in on Berlin. The German surrender was signed at Reims on 7 May, and the Soviets required a second signing at Berlin on 8 May. Sovereign authority passed to the United States, Britain, the Soviet Union and France, which divided Germany and Berlin into four zones under an Allied Control Council. Disputes between the Soviet Union and the Western powers led to two German states in 1949.",
        what: "The Nazi state ends and Germany is divided under foreign occupation.",
        where: "Berlin, Reims and the four occupation zones.",
        why: "Britannica says the zones reflected earlier Allied agreements, and that disagreements over reparations and economic policy drove the zones apart.",
        uncertain: "Two surrender dates appear: 7 May (Reims) and 8 May (Berlin), because the Soviets did not recognise the first ceremony. Trials, denazification and the memory of the crimes are not covered here.",
        evidence: "attested", features: [berlin, pt("Reims", 4.0317, 49.2583, "site", "approximate", "attested", "Where the first surrender was signed, 7 May 1945.")],
        relatedSites: [], sources: ["brit-third-reich-defeat", "brit-germany-surrender", "nara-surrender", "brit-20c-allied", "brit-germany-partition", "brit-germany-divided"]
      }
    ]
  });
})();
