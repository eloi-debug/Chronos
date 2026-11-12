(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "us-twentieth-century",
    regions: ["North America"],
    category: "political",
    title: "The United States, 1929–1965: Depression, war and civil rights",
    description: "The Great Depression and the New Deal, the Second World War and the incarceration of Japanese Americans, and the Civil Rights and Voting Rights Acts of 1964–65. It covers the domestic story; the Cold War and the Vietnam War have their own tours.",
    scope: "The United States",
    span: "1929 to 1965 CE",
    tags: ["Great Depression", "New Deal", "World War II", "Japanese American incarceration", "Civil Rights Act", "Voting Rights Act"],
    chapters: [
      {
        id: "depression", title: "The Great Depression (1929–1939)", subject: "Economic collapse",
        date: { start: 1929, end: 1939, kind: "period" }, camera: { center: [-96.0, 38.0], zoom: 3.6 },
        text: "Britannica says the Great Depression began in the United States in 1929 and spread worldwide; it was the longest and most severe economic downturn in modern history. In the United States, industrial production between 1929 and 1933 fell by nearly 47 per cent, GDP fell 30 per cent and unemployment exceeded 20 per cent. The New Deal article says banks were in crisis and nearly a quarter of the workforce was unemployed.",
        what: "The economy collapses and a quarter of workers lose jobs.",
        where: "Throughout the United States.",
        why: "The excerpts I read do not give causes, so this chapter does not.",
        uncertain: "Unemployment is given as 'more than 20 per cent' and 'nearly a quarter' in two Britannica articles. Dates for the Depression's end vary (about 1939).",
        evidence: "attested", features: [], relatedSites: [], sources: ["brit-great-depression", "brit-new-deal"]
      },
      {
        id: "new-deal", title: "The New Deal (1933–1939)", subject: "Expansion of federal government",
        date: { start: 1933, end: 1939, kind: "period" }, camera: { center: [-77.0, 38.9], zoom: 6 },
        text: "Franklin D. Roosevelt's New Deal, 1933–39, aimed to provide immediate relief and to reform industry, agriculture, finance, labour and housing, vastly increasing the federal government's role. Early programs included the Agricultural Adjustment Administration, which paid farmers to cut production. Later programs included the Social Security Act of 1935, the Works Progress Administration and the National Labor Relations Act. The Library of Congress says the New Deal improved the lives of many in the short term and set a precedent for a federal role in economic and social affairs.",
        what: "The federal government takes on relief, regulation and social insurance.",
        where: "Washington and the whole country.",
        why: "Britannica and the Library of Congress say the assumption was that federal power was needed to end the depression.",
        uncertain: "Whether the New Deal ended the Depression is debated: Britannica's Depression article says fiscal expansion 'arguably' stimulated production, and I do not settle that. The New Deal's exclusions of many Black workers are not described in the excerpts I read.",
        evidence: "attested", features: [pt("Washington, D.C.", -77.0369, 38.9072, "site", "approximate", "attested", "Federal capital.")],
        relatedSites: [], sources: ["brit-new-deal", "loc-new-deal", "brit-great-depression"]
      },
      {
        id: "internment", title: "War and the incarceration of Japanese Americans (1941–1945)", subject: "Wartime civil-liberties violation",
        date: { start: 1941, end: 1945, kind: "period" }, camera: { center: [-118.0, 38.0], zoom: 4.5 },
        text: "The Japanese attack on Pearl Harbor on 7 December 1941 brought the United States into the Second World War. On 19 February 1942 President Roosevelt issued Executive Order 9066, which allowed military commanders to exclude civilians from military areas. It did not name Japanese Americans, but it was applied to virtually the entire Japanese American population on the West Coast: some 120,000 people, mostly American citizens, were forced from their homes and held in ten camps in remote areas. In December 1944 the Supreme Court ruled in Ex parte Endo that the War Relocation Authority could not detain citizens against whom no charges of disloyalty had been made. Congress passed the Civil Liberties Act in 1988, calling it a 'grave injustice' and paying about $1.6 billion in reparations.",
        what: "The U.S. government imprisons people because of their ancestry.",
        where: "The West Coast and ten inland camps.",
        why: "Fear of espionage and sabotage after Pearl Harbor, according to the National Archives and the Holocaust Museum.",
        uncertain: "Counts differ slightly: about 120,000 (Holocaust Museum, Britannica's question page), approximately 122,000 (National Archives) and more than 110,000 (Britannica). This chapter covers only this episode of the war; military campaigns are not described.",
        evidence: "attested", features: [pt("Manzanar", -118.1537, 36.7274, "site", "approximate", "attested", "One of the ten camps, in California; marker approximate.")],
        relatedSites: [], sources: ["nara-eo9066", "brit-eo9066", "ushmm-japanese-american"]
      },
      {
        id: "civil-rights", title: "The Civil Rights and Voting Rights Acts (1964–1965)", subject: "Federal civil-rights legislation",
        date: { start: 1964, end: 1965, kind: "event" }, camera: { center: [-87.0, 32.5], zoom: 4.5 },
        text: "The Civil Rights Act, signed by Lyndon Johnson on 2 July 1964, prohibited discrimination in public places, provided for school integration and made employment discrimination illegal. The National Archives calls it the most sweeping civil rights legislation since Reconstruction. It outlawed segregation in theatres, restaurants and hotels, and created the Equal Employment Opportunity Commission. The Voting Rights Act, signed on 6 August 1965 after violence against marchers in Selma, Alabama and the murder of voting-rights activists in Mississippi, outlawed literacy tests, provided for federal examiners and required 'preclearance' for changes to voting rules in covered jurisdictions. The Library of Congress says the share of Black adults registered to vote in the South rose from 35 per cent in 1964 to almost 65 per cent by 1969.",
        what: "Federal law ends legal segregation and protects the vote.",
        where: "Washington; Selma, Alabama; Mississippi.",
        why: "The National Archives says violence against peaceful marchers persuaded Congress to act.",
        uncertain: "The Library of Congress says the act did not fulfil all activists' goals and further mobilisation was needed. Later changes to the Voting Rights Act, the movement's earlier decades, and the role of Black organisers are not described in the excerpts I read.",
        evidence: "attested", features: [pt("Selma", -87.0211, 32.4074, "conflict", "approximate", "attested", "City of the 1965 marches.")],
        relatedSites: [], sources: ["nara-civil-rights-act", "nara-voting-rights-act", "loc-civil-rights-impact", "brit-civil-rights-act", "brit-voting-rights-act"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover the First World War, the 1920s, the war's course, the Holocaust and the US response, the atomic bomb, the Great Migration, the Jim Crow era before 1964, women's suffrage, labour movements, the Cold War at home or any history after 1965. The Cold War and Vietnam War tours cover some of that period.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "A short sourced tour is more reliable than a long thin one.",
        uncertain: "The sources I used are mostly Britannica and U.S. government archives.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing omissions; it makes no new historical claims."
      }
    ]
  });
})();
