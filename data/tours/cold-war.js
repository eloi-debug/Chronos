(function () {
  const { B, pt, circ, line } = window.TourKit;
  const berlin = pt("Berlin", 13.405, 52.52, "site", "approximate", "attested", "Divided city and a Cold War flashpoint.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "cold-war",
    category: "political",
    title: "The Cold War, 1947–1991",
    description: "The rivalry between the United States and the Soviet Union and their allies: its origins, the Berlin blockade, the formation of NATO and the Warsaw Pact, the Korean War, the Cuban missile crisis, détente and the end in 1989–91. It sits beside the Communism tour, which covers the ideology and the Soviet and Chinese states, and the decolonisation tour, which covers the Third World dimension.",
    scope: "Global, centred on Europe, East Asia and the Caribbean",
    span: "1945 to 1991 CE",
    tags: ["Cold War", "NATO", "Warsaw Pact", "Berlin", "Cuba", "détente"],
    chapters: [
      {
        id: "origins", title: "From wartime alliance to rivalry (1945–1947)", subject: "Superpower rivalry",
        date: { start: 1945, end: 1947, kind: "period" }, camera: { center: [15.0, 50.0], zoom: 3.5 },
        text: "Britannica says the Cold War began after the surrender of Nazi Germany in 1945, when the uneasy alliance between the United States and Britain on one side and the Soviet Union on the other fell apart. The US and Britain feared the expansion of Soviet power and communism, while the Soviets were determined to keep control of eastern Europe, partly as a safeguard against Germany. On 12 March 1947 the Truman Doctrine pledged aid to free peoples under threat, starting with Greece and Turkey. Bernard Baruch first used the term 'Cold War' in 1947.",
        what: "Allies become rivals, and the US commits to containing communism.",
        where: "Europe, with Greece and Turkey as the first beneficiaries of aid.",
        why: "Each side saw the other's aims as a threat to its security.",
        uncertain: "Historians do not fully agree on the starting and ending points, and Wikipedia gives the span as 12 March 1947 to 26 December 1991. How far each side's actions were defensive or expansionist is debated, and I do not settle it.",
        evidence: "attested", features: [berlin], relatedSites: [], sources: ["brit-cold-war", "brit-cold-war-summary", "nato-us", "wiki-cold-war", "wiki-origins-cold-war"]
      },
      {
        id: "blockade", title: "Marshall Plan, Berlin blockade and NATO (1948–1949)", subject: "Division of Europe",
        date: { start: 1948, end: 1949, kind: "event" }, camera: { center: [13.4, 52.5], zoom: 6 },
        text: "The Marshall Plan, launched in 1948, was a large programme to rebuild Europe's economies; the Soviet Union rejected it and set up Comecon. The Berlin blockade lasted from 24 June 1948 to 12 May 1949, when the Soviets tried unsuccessfully to cut off the Western sectors of West Berlin, and the Western allies supplied the city by air. The North Atlantic Treaty was signed on 4 April 1949 and the United States became a founding member of NATO in July.",
        what: "Europe divides into two economic and military blocs.",
        where: "West Berlin and Western Europe.",
        why: "NATO says the Berlin blockade and the communist coup in Czechoslovakia in 1948 reshaped American views of the continent.",
        uncertain: "Comecon's purpose is stated by one Wikipedia article; the sources I read do not describe its functioning.",
        evidence: "attested", features: [berlin], relatedSites: [], sources: ["nato-us", "wiki-origins-cold-war", "brit-cold-war", "brit-cold-war-summary"]
      },
      {
        id: "korea", title: "Peak tension: atomic bombs, China and Korea (1949–1953)", subject: "Global confrontation",
        date: { start: 1949, end: 1953, kind: "period" }, camera: { center: [115.0, 40.0], zoom: 3.2 },
        text: "Britannica lists key events of 1949: the Soviets exploded their first atomic warhead, ending the American monopoly on the atomic bomb, and the Chinese communists came to power in mainland China. In 1950 the Soviet-supported communist government of North Korea invaded US-supported South Korea, setting off a Korean War that lasted until 1953 and ended inconclusively. NATO says its members feared that if the Soviet Union would extend its influence through a client state in Asia, it would do so in Europe.",
        what: "The rivalry becomes global, with a hot war in Asia.",
        where: "Moscow, China and the Korean peninsula.",
        why: "Britannica identifies 1948–53 as the Cold War's peak.",
        uncertain: "The Korean War's causes and course are only outlined here, and the sources I read give no casualty figures.",
        evidence: "attested", features: [circ("Korean peninsula (broad region)", 127.8, 37.0, 250, "conflict", "regional", "attested", "Divided region; the demarcation line is not drawn.")],
        relatedSites: [], sources: ["brit-cold-war", "brit-cold-war-summary", "nato-us"]
      },
      {
        id: "pact", title: "Two alliances (1955)", subject: "Military blocs",
        date: { start: 1955, end: 1955, kind: "event" }, camera: { center: [15.0, 50.0], zoom: 4 },
        text: "West Germany was admitted to NATO in 1955, and the Soviet-bloc countries formed the Warsaw Pact, a unified military organisation, the same year. Alloprof says it was signed on 14 May 1955 by the USSR and satellite states as a counterweight to NATO. The UNC guide notes that under the threat of mutual assured destruction the two nuclear powers and their alliances avoided direct confrontation.",
        what: "Europe is divided into two armed alliances.",
        where: "Western and Eastern Europe.",
        why: "West German entry into NATO and the Soviet need for a counterweight.",
        uncertain: "The exact signing date (14 May 1955) comes from one school-resource page; Britannica and Wikipedia say only 1955. The sources I read do not list every member state, so none is listed here.",
        evidence: "attested", features: [circ("NATO and Warsaw Pact Europe (broad region)", 15.0, 50.0, 1100, "alliance", "regional", "reconstructed", "Very broad region; the dividing line is not drawn."), berlin],
        relatedSites: [], sources: ["brit-cold-war", "alloprof-cold-war", "unc-cold-war"]
      },
      {
        id: "cuba", title: "The Cuban Missile Crisis (October 1962)", subject: "Nuclear brinkmanship",
        date: { start: 1962, end: 1962, kind: "event" }, camera: { center: [-80.0, 23.0], zoom: 5 },
        text: "Britannica says another intense stage of the Cold War ran from 1958 to 1962, as both sides developed intercontinental ballistic missiles. In 1962 the Soviet Union began secretly installing missiles in Cuba that could strike American cities. The confrontation, between 22 October and 20 November 1962, brought the superpowers to the brink of war before an agreement was reached to withdraw the missiles. Alloprof says the crisis led to détente, with each side agreeing not to intervene in the other's area of influence.",
        what: "The closest approach to nuclear war in the Cold War.",
        where: "Cuba, Washington and Moscow.",
        why: "Soviet missiles in Cuba were seen as a direct threat to US cities.",
        uncertain: "The terms of the agreement are only outlined here, and the sources I read do not detail the negotiations or the role of other states.",
        evidence: "attested", features: [pt("Havana", -82.3666, 23.1136, "site", "approximate", "attested", "Cuban capital.")],
        relatedSites: [], sources: ["brit-cold-war", "brit-cold-war-summary", "alloprof-cold-war"]
      },
      {
        id: "detente", title: "Détente and renewed hostility (1970s–1980s)", subject: "Managed rivalry",
        date: { start: 1970, end: 1985, kind: "period" }, camera: { center: [20.0, 45.0], zoom: 2.8 },
        text: "Wikipedia says Nixon and Brezhnev proclaimed 'peaceful coexistence' and established a policy of détente, or cooperation, between the superpowers. Britannica adds that the détente of the 1970s was followed by renewed hostility.",
        what: "Relations thaw, then cool again.",
        where: "Global.",
        why: "The sources I read do not explain the causes of either phase.",
        uncertain: "This chapter is thin because my sources only name détente and its aftermath. It does not cover arms-control treaties, proxy wars in Africa, Asia or Latin America, or the Soviet invasion of Afghanistan.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["wiki-cold-war", "brit-cold-war-summary"]
      },
      {
        id: "end", title: "The end of the Cold War (1985–1991)", subject: "Collapse of one side",
        date: { start: 1985, end: 1991, kind: "period" }, camera: { center: [30.0, 50.0], zoom: 3.5 },
        text: "Britannica says the Cold War began to break down under Mikhail Gorbachev, who relaxed the more totalitarian aspects of the Soviet system and tried to democratise it. Communist regimes collapsed in eastern Europe, democratic governments rose in East Germany, Poland, Hungary and Czechoslovakia, and Germany was reunified under NATO auspices. The Soviet Union collapsed in late 1991, giving rise to 15 independent nations.",
        what: "The Soviet bloc and the Soviet Union itself dissolve.",
        where: "Eastern Europe and the USSR.",
        why: "The Communism tour treats the Soviet collapse's causes in more detail.",
        uncertain: "Britannica and Wikipedia date the end by the Soviet collapse in late 1991; some date it earlier, at the revolutions of 1989.",
        evidence: "attested", features: [berlin], relatedSites: [], sources: ["brit-cold-war", "brit-cold-war-summary", "wiki-cold-war"]
      }
    ]
  });
})();
