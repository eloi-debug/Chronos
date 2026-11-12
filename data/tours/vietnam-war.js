(function () {
  const { B, pt, circ, line } = window.TourKit;
  const hanoi = pt("Hanoi", 105.8342, 21.0278, "site", "approximate", "attested", "Capital of North Vietnam.");
  const saigon = pt("Saigon (Ho Chi Minh City)", 106.6297, 10.8231, "site", "approximate", "attested", "Capital of South Vietnam; fell 30 April 1975.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "vietnam-war",
    category: "political",
    title: "The Vietnam War, 1946–1975",
    description: "From the French Indochina War and Dien Bien Phu through the 1954 partition at the 17th parallel, American escalation, the Tet Offensive and the Paris Peace Accords to the fall of Saigon in 1975. It follows events and decisions and leaves out casualty figures, which the sources I read do not give; the human cost is not covered in this tour.",
    scope: "Vietnam and the Gulf of Tonkin",
    span: "1946 to 1975 CE",
    tags: ["Vietnam", "Dien Bien Phu", "Geneva", "Tet", "Saigon", "Cold War"],
    chapters: [
      {
        id: "indochina-war", title: "The French Indochina War and Dien Bien Phu (1946–1954)", subject: "Colonial war",
        date: { start: 1946, end: 1954, kind: "war" }, camera: { center: [104.0, 19.5], zoom: 5 },
        text: "Britannica says the Vietnam War had its origins in the Indochina wars of the 1940s and 1950s, when nationalist groups such as Ho Chi Minh's Viet Minh, inspired by Chinese and Soviet communism, fought the colonial rule first of Japan and then of France. The French Indochina War broke out in 1946 and lasted eight years, with France's war effort largely funded and supplied by the United States. At Dien Bien Phu the Viet Minh general Vo Nguyen Giap surrounded the French base, and it was overrun on 7 May 1954. The State Department says the garrison fell after a four-month siege.",
        what: "France loses Indochina after a long colonial war.",
        where: "Dien Bien Phu, near the border with Laos.",
        why: "Britannica says the French occupied the town to cut Viet Minh supply lines into Laos.",
        uncertain: "Force sizes differ: Britannica says Giap used 40,000 men, while Wikipedia's 1954 summary gives about 20,000 French soldiers against 49,500 Viet Minh. The siege is described as four months (State Department), about two months (Wikipedia) or from 13 March to 7 May (Wikipedia).",
        evidence: "attested", features: [pt("Dien Bien Phu", 102.9628, 21.3856, "conflict", "approximate", "attested", "Battle site; marker approximate."), hanoi],
        alternatives: [{ label: "Length of the siege", text: "The State Department says four months; Wikipedia says 13 March to 7 May 1954, nearly two months.", sources: ["state-dienbienphu", "wiki-1954-vietnam"] }],
        relatedSites: [], sources: ["brit-vietnam-origins", "brit-dbp", "brit-dbp-kids", "state-dienbienphu", "wiki-1954-vietnam"]
      },
      {
        id: "geneva", title: "Geneva and the partition (1954)", subject: "Temporary division",
        date: { start: 1954, end: 1956, kind: "settlement" }, camera: { center: [106.5, 17.0], zoom: 6 },
        text: "The Geneva Accords of July 1954 set a cease-fire line along the 17th parallel, effectively dividing Vietnam in two. North of the line was the Democratic Republic of Vietnam under Ho Chi Minh, with its capital at Hanoi; in the south the French transferred most authority to the State of Vietnam, with its capital at Saigon. The Final Declaration said the line was provisional and 'should not in any way be interpreted as constituting a political or territorial boundary', and called for all-Vietnamese elections before July 1956. The Vassar summary says Vietnam's delegates agreed to the temporary partition under pressure from the Soviet Union and China. The United States made clear it was not bound by the accords; in 1956 it supported South Vietnam's refusal to hold nationwide elections.",
        what: "A temporary line becomes the border between two states.",
        where: "The 17th parallel.",
        why: "Britannica says the US undertook to build a separate anticommunist state in South Vietnam.",
        uncertain: "None of the Geneva documents were treaties binding the participants, and the Final Declaration was left unsigned by all parties, according to Britannica. Different sources stress different parties' roles in the failure of the 1956 elections.",
        evidence: "attested", features: [line("17th parallel (schematic)", [[106.4, 17.0], [107.4, 17.0]], "conflict", "illustrative", "attested", "Schematic provisional demarcation line, not the exact line."), hanoi, saigon],
        relatedSites: [], sources: ["brit-geneva-accords", "brit-vietnam-origins", "vassar-vietnam", "state-dienbienphu", "un-geneva-1954", "wiki-1954-geneva"]
      },
      {
        id: "escalation", title: "American escalation (1964–1965)", subject: "Foreign intervention",
        date: { start: 1964, end: 1965, kind: "period" }, camera: { center: [107.0, 17.0], zoom: 5.5 },
        text: "Vassar's overview says that on 2 August 1964 North Vietnam attacked an American ship in the Gulf of Tonkin, in what it describes as a local and controlled response to American and South Vietnamese espionage along its coast. An unrated timeline says the incidents led the US Congress to pass the Gulf of Tonkin Resolution, giving President Johnson broad authority to expand military involvement, and that the first American combat units landed at Da Nang in 1965.",
        what: "The United States moves from advising to fighting.",
        where: "The Gulf of Tonkin and Da Nang.",
        why: "The sources I read give Cold War containment ('domino theory') as the US motive (Wikipedia, in its 1954 summary) but not a full account of the 1964 decisions.",
        uncertain: "The sources I read describe the 2 August 1964 incident from one angle and do not discuss the wider controversy about it. The Congress resolution and the Da Nang landing come from an unrated timeline.",
        evidence: "attested", features: [circ("Gulf of Tonkin (broad region)", 107.5, 19.5, 200, "conflict", "regional", "attested", "Broad sea region."), pt("Da Nang", 108.2022, 16.0544, "conflict", "approximate", "attested", "Where the first US combat units landed in 1965, per an unrated timeline.")],
        relatedSites: [], sources: ["vassar-vietnam", "timeline-vietnam", "wiki-1954-vietnam"]
      },
      {
        id: "tet", title: "The Tet Offensive (1968)", subject: "Turning point",
        date: { start: 1968, end: 1968, kind: "event" }, camera: { center: [107.0, 14.0], zoom: 5 },
        text: "Vassar's overview says that in late January 1968 the North Vietnamese government and the National Liberation Front launched coordinated attacks on the major southern cities, known in the West as the Tet Offensive, designed to 'break the aggressive will' of the Johnson administration and force Washington to the bargaining table. By then things had gone from bad to worse for the administration, and in the spring of 1968 Johnson engaged the North Vietnamese in secret negotiations in Paris. An unrated timeline calls it a military setback for the North but a major blow to US public confidence.",
        what: "A wave of attacks changes how the war is understood.",
        where: "Cities across South Vietnam, including Saigon.",
        why: "Vassar says it was meant to pressure Washington to negotiate.",
        uncertain: "Whether Tet was a military failure or a political victory for the North is interpretive; the unrated timeline and the Vassar overview stress different aspects.",
        evidence: "attested", features: [saigon], relatedSites: [], sources: ["vassar-vietnam", "timeline-vietnam"]
      },
      {
        id: "paris", title: "The Paris Peace Accords (1973)", subject: "Negotiated US withdrawal",
        date: { start: 1973, end: 1973, kind: "event" }, camera: { center: [106.0, 16.0], zoom: 5 },
        text: "The Paris Peace Accords, signed on 27 January 1973, set out a cease-fire, the withdrawal of all US forces within 60 days and the release of prisoners of war. North Vietnamese troops could remain in the South but not be reinforced. Britannica says that despite the accords, fighting continued and US involvement diminished after Congress prohibited further military action in Indochina. The Vassar overview says the agreement did not end the conflict in Vietnam: from March 1973 the Saigon government fought on in what it calls the 'War of the Flags'.",
        what: "The US withdraws, but the war between Vietnamese forces goes on.",
        where: "Paris, and Vietnam.",
        why: "Britannica says the Nixon administration persuaded Saigon it would not abandon South Vietnam if it signed.",
        uncertain: "Britannica's summary says the accords re-established a demarcation line at the 17th parallel while letting North Vietnamese troops stay in the South; the sources I read do not explain how those two provisions fit together.",
        evidence: "attested", features: [saigon], relatedSites: [], sources: ["brit-paris-accords", "vassar-vietnam"]
      },
      {
        id: "fall", title: "The fall of Saigon (30 April 1975)", subject: "End of the war",
        date: { start: 1975, end: 1975, kind: "event" }, camera: { center: [106.6, 10.8], zoom: 6 },
        text: "Britannica says South Vietnam surrendered unconditionally to North Vietnamese forces by 30 April 1975, leading to the reunification of Vietnam under communist rule. Vassar's overview says that without American military support the South could not hold, that North Vietnamese tanks rolled south along National Highway One, and that on the morning of 30 April communist forces captured the presidential palace in Saigon, ending the war. An unrated timeline describes a chaotic evacuation of American personnel and allies.",
        what: "The Saigon government falls and the country is reunited.",
        where: "Saigon.",
        why: "The sources point to the end of US support.",
        uncertain: "The sources I read give no casualty figures for the war and no account of what followed for people in the South; this tour does not claim to describe the human cost.",
        evidence: "attested", features: [saigon], relatedSites: [], sources: ["brit-paris-accords", "vassar-vietnam", "timeline-vietnam"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover deaths and displacement on any side, Laos and Cambodia, the US antiwar movement, the role of China and the Soviet Union beyond a mention, the South Vietnamese government's internal politics, chemical weapons or the postwar refugees.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "Each needs separate, careful sourcing.",
        uncertain: "The Communism tour covers Vietnam's later communist state only briefly.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing omissions; it makes no new historical claims."
      }
    ]
  });
})();
