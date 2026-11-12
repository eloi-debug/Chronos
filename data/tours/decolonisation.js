(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "decolonisation",
    category: "political",
    title: "Decolonisation after 1945: Bandung, Ghana, Algeria and the Portuguese empire",
    description: "How the European empires ended after the Second World War, focusing on Africa and on the Afro-Asian conference at Bandung. It contrasts negotiated independence (Ghana), a violent war of independence (Algeria) and the Portuguese wars that ended with a coup in Lisbon. It is a selection, not a full account of decolonisation.",
    scope: "Africa and Asia (Bandung)",
    span: "1955 to 1975 CE",
    tags: ["decolonisation", "Bandung", "Non-Aligned Movement", "Ghana", "Algeria", "Angola", "Mozambique"],
    chapters: [
      {
        id: "bandung", title: "Bandung and the Non-Aligned Movement (1955–1961)", subject: "Collective voice of new states",
        date: { start: 1955, end: 1961, kind: "period" }, camera: { center: [107.6, -6.9], zoom: 4.5 },
        text: "In April 1955, 29 Asian and African governments met at Bandung, Indonesia, to discuss peace, the Third World's role in the Cold War, economic development and decolonisation. Britannica says the conference condemned 'colonialism in all of its manifestations', which implicitly included Soviet policies as well as Western ones, and the State Department says its principles were political self-determination, respect for sovereignty and non-interference. It led to the Non-Aligned Movement, founded at Belgrade in 1961 under the leadership of Tito, Nasser, Nehru, Nkrumah and Sukarno.",
        what: "Newly independent states claim a role outside the two Cold War blocs.",
        where: "Bandung (Indonesia), then Belgrade.",
        why: "Many delegates came from states that had recently emerged from colonial rule.",
        uncertain: "The State Department says the solidarity of Bandung weakened by the end of the 1960s, and Britannica says the movement's unity fractured in the 1960s. The sources I read do not assess what Bandung achieved in practice.",
        evidence: "attested", features: [pt("Bandung", 107.6191, -6.9175, "site", "approximate", "attested", "Site of the 1955 conference.")],
        relatedSites: [], sources: ["state-bandung", "brit-bandung", "brit-nam"]
      },
      {
        id: "ghana", title: "Ghana: negotiated independence (1957)", subject: "Peaceful transfer of power",
        date: { start: 1957, end: 1957, kind: "event" }, camera: { center: [-1.0, 7.9], zoom: 5.5 },
        text: "On 6 March 1957 Ghana, formerly the Gold Coast, became the first sub-Saharan country to gain independence from European colonial rule. Wikipedia says its leader Kwame Nkrumah had made his goal clear from the 1945 Pan-African Congress, and the transition followed a 1956 election. Explaining History calls the peaceful transition a psychological and political game-changer that showed independence was achievable.",
        what: "The first sub-Saharan colony becomes independent.",
        where: "The Gold Coast, now Ghana.",
        why: "Organised nationalist politics and an election.",
        uncertain: "'Peaceful' is the Explaining History description. The sources I read do not describe the colonial government's decision-making or the later problems of the new state.",
        evidence: "attested", features: [pt("Accra", -0.1870, 5.6037, "site", "approximate", "attested", "Capital of Ghana.")],
        relatedSites: [], sources: ["wiki-decol-africa", "wiki-postcolonial-africa", "explaininghistory-1960"]
      },
      {
        id: "1960", title: "The Year of Africa (1960)", subject: "Wave of independence",
        date: { start: 1960, end: 1960, kind: "event" }, camera: { center: [15.0, 5.0], zoom: 3.2 },
        text: "Wikipedia says 1960 saw 17 African nations declare independence: 14 from the French empire, two from Britain (Nigeria and Somalia, per an unrated list) and one from Belgium (the Congo, on 30 June). Britannica says the Belgian and French colonies in Central Africa ended abruptly in 1960. Explaining History says France granted independence to 'pliable elites' to avoid a repeat of the Algerian war, a view that is an interpretation.",
        what: "Most of French sub-Saharan Africa and the Belgian Congo become independent within a year.",
        where: "West and Central Africa.",
        why: "The sources point to postwar pressure, nationalist movements and the cost of colonial wars.",
        uncertain: "The count of 17 comes from Wikipedia; details of which countries gained independence come from an unrated list and should be verified. The chapter does not cover the Congo crisis that followed.",
        evidence: "attested", features: [circ("French and Belgian Africa (broad region)", 15.0, 5.0, 1700, "influence", "regional", "reconstructed", "Very broad region; no borders drawn.")],
        relatedSites: [], sources: ["wiki-postcolonial-africa", "brit-decol-africa", "explaininghistory-1960", "provenance-decol"]
      },
      {
        id: "algeria", title: "Algeria: a settler colony and a war (1954–1962)", subject: "War of independence",
        date: { start: 1954, end: 1962, kind: "war" }, camera: { center: [2.0, 28.0], zoom: 4.5 },
        text: "Algeria was legally treated as part of France and had a large European settler population. The National Liberation Front (FLN) began an armed insurrection in 1954. Wikipedia says the war lasted until independence negotiations in 1962 and that Algeria gained independence when the French government signed a peace accord. An unrated source says the war killed several hundred thousand Algerians and that about a million Europeans left; this is repeated in two unrated sources and should be verified.",
        what: "A colonial state resists independence for eight years.",
        where: "Algeria.",
        why: "Explaining History says France drew lessons from the cost of its wars in Indochina and Algeria.",
        uncertain: "Dates conflict across sources: Wikipedia's text says 20 February 1962 for the peace accord and its table says 3 July 1962 for independence, while an unrated source gives 5 July. The death toll comes from unrated sources and is stated only as 'several hundred thousand'.",
        evidence: "reconstructed", features: [pt("Algiers", 3.0588, 36.7538, "conflict", "approximate", "attested", "Capital; scene of urban fighting.")],
        relatedSites: [], sources: ["wiki-decol-africa", "wiki-postcolonial-africa", "provenance-decol", "explaininghistory-1960"]
      },
      {
        id: "portugal", title: "Portugal's empire and the 1974 coup (1961–1975)", subject: "Colonial wars ending an old regime",
        date: { start: 1962, end: 1975, kind: "period" }, camera: { center: [15.0, -8.0], zoom: 3.4 },
        text: "Britannica says Portugal and Spain were the last to hold to the colonial principle in western Africa. Guinean nationalists took up arms in 1962 and after ten years had expelled the Portuguese from three-quarters of Portuguese Guinea. In 1974 the strain of those wars caused the Portuguese people and army to overthrow their dictatorship. Independence was recognised for Guinea-Bissau in 1974 and for Cape Verde and São Tomé and Príncipe in 1975. Angola and Mozambique fought long liberation wars from the 1960s led by the MPLA, UNITA and FNLA in Angola and Frelimo in Mozambique, and gained independence in 1975.",
        what: "Wars in Africa bring down the regime in Lisbon, and the colonies become independent.",
        where: "Guinea-Bissau, Angola and Mozambique.",
        why: "Britannica gives the strain of the colonial wars as the reason for the 1974 coup.",
        uncertain: "The sources I read do not give casualties. Angola's independence movements were rivals, and this tour does not cover the civil war that followed.",
        evidence: "attested", features: [pt("Luanda", 13.2344, -8.8383, "site", "approximate", "attested", "Capital of Angola."), pt("Maputo", 32.5732, -25.9692, "site", "approximate", "attested", "Capital of Mozambique.")],
        relatedSites: [], sources: ["brit-decol-africa", "brit-west-africa-decol"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "Britannica says the process in Africa was complete by the end of 1980. This tour does not cover South Africa, Rhodesia and Namibia, Kenya, the Congo crisis, Asian decolonisation (India is in the British Empire tour), Indonesia, Indochina, the Middle East or the Caribbean.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "Each needs its own sources.",
        uncertain: "'Decolonisation' covers very different processes, and the cases chosen here are a selection.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-decol-africa"]
      }
    ]
  });
})();
