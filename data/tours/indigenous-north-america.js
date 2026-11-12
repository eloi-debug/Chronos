(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "indigenous-north-america",
    regions: ["North America"],
    category: "political",
    title: "Indigenous North America: Cahokia and the Haudenosaunee",
    description: "Two Indigenous political histories from what is now the United States and Canada: the Mississippian city of Cahokia and the Haudenosaunee Confederacy. The chapters give Indigenous oral tradition and archaeology as separate lines of evidence and show where dates are disputed. Two societies cannot stand for a continent; the scope note lists what is not covered.",
    scope: "The Mississippi valley and the northeastern woodlands",
    span: "c. 700 CE to the 18th century",
    tags: ["Indigenous", "Cahokia", "Mississippian", "Haudenosaunee", "Great Law of Peace"],
    chapters: [
      {
        id: "cahokia", title: "Cahokia: a city of mounds (c. 700–1350 CE)", subject: "Mississippian urban centre",
        date: { start: 700, end: 1350, kind: "occupation (sources differ on start)" }, camera: { center: [-90.06, 38.66], zoom: 7 },
        text: "Britannica describes Cahokia as a sprawling urban centre of the Middle Mississippian culture on the Mississippi floodplain, flourishing from about 950 to 1350 CE and covering some 5 square miles. Monks Mound, the largest earthwork, is about 1,000 feet long, 700 feet wide and 100 feet high. The Smithsonian says Cahokia grew from a small settlement around 700 CE into a metropolis rivalling London and Paris by 1050, and World History Encyclopedia puts the peak population above 15,000. Britannica says the scale of the public works suggests a dominant religious cult and priest-rulers.",
        what: "Indigenous people build the largest city north of Mexico.",
        where: "The Mississippi River floodplain near Collinsville, Illinois.",
        why: "Britannica infers a priest-ruler class from the scale of the mounds; no written record explains it.",
        uncertain: "The city's original name is lost, and 'Cahokia' is a modern name from a nearby people. Dates differ: 700 to 1350 (Smithsonian), 600 to 1350 (World History Encyclopedia), 950 to 1350 (Britannica for the peak). The 'priest-rulers' idea is an inference from architecture.",
        evidence: "reconstructed", features: [pt("Cahokia Mounds", -90.0617, 38.6551, "site", "approximate", "attested", "World Heritage site near Collinsville, Illinois; marker approximate.")],
        relatedSites: ["cahokia"], sources: ["brit-cahokia", "brit-mississippian", "whe-cahokia", "smithsonian-cahokia"]
      },
      {
        id: "cahokia-decline", title: "Why Cahokia was left", subject: "Decline and reoccupation",
        date: { start: 1250, end: 1350, kind: "decline" }, camera: { center: [-90.06, 38.66], zoom: 7 },
        text: "Britannica says the site and its hinterland declined and were abandoned, probably because of environmental degradation, though disease, climatic change, social stress and warfare may have contributed. The Smithsonian quotes an archaeologist who says the decline was slow and it is not known why people were leaving. World History Encyclopedia says the people did not 'mysteriously vanish': they abandoned the city by about 1350, and recent work shows it was reinhabited by tribes of the Illinois Confederacy by the 1500s, with people living there into the early 1800s.",
        what: "A great city is emptied, but its region stays inhabited.",
        where: "The Cahokia site and the surrounding floodplain.",
        why: "Several causes are proposed; none is established.",
        uncertain: "Causes remain debated: deforestation and flooding, an earthquake, disease and civil unrest all appear in the sources. The idea that the builders 'vanished' is rejected by World History Encyclopedia and Britannica's own statement that residents moved on and were assimilated by other groups.",
        evidence: "disputed", features: [pt("Cahokia Mounds", -90.0617, 38.6551, "site", "approximate", "attested", "Marker approximate.")],
        alternatives: [
          { label: "Environmental degradation", text: "Britannica's leading proposal: logging, runoff, erosion, flooding and crop failure.", sources: ["brit-cahokia"] },
          { label: "Slow demise with unknown causes", text: "The Smithsonian quotes an archaeologist who says the cause is not known.", sources: ["smithsonian-cahokia"] },
          { label: "Overpopulation, earthquake and unrest", text: "World History Encyclopedia lists these and evidence of conflict around 1250.", sources: ["whe-cahokia"] }
        ],
        relatedSites: ["cahokia"], sources: ["brit-cahokia", "whe-cahokia", "smithsonian-cahokia"]
      },
      {
        id: "great-law", title: "The Haudenosaunee Confederacy and the Great Law of Peace", subject: "Confederacy under an oral constitution",
        date: { start: 1142, end: 1600, kind: "founding date disputed" }, year: 1450, camera: { center: [-76.0, 42.9], zoom: 6 },
        text: "Britannica describes the Haudenosaunee Confederacy as a confederation of five (later six) Indigenous peoples across upper New York State: the Mohawk, Oneida, Onondaga, Cayuga and Seneca, joined by the Tuscarora in 1722. The Great Law of Peace (Gayanesshagowa) is the foundational legal and political system, credited to the Peacemaker and Hiawatha, and it guides a council of 50 peace chiefs. Britannica says the tribes united partly to stand together against invasion, each nation having one vote and unanimity being required. The Haudenosaunee Confederacy's own account describes the Peacemaker and Hiawatha travelling from community to community to persuade the chiefs, planting the Great Tree of Peace at Onondaga.",
        what: "Five nations unite under a shared law and council.",
        where: "The Mohawk valley to the Finger Lakes in upper New York State.",
        why: "Oral tradition and Britannica both name the wish to end feuding and resist invasion.",
        uncertain: "Founding-date estimates vary widely: Britannica gives 1570–1600 (Peacemaker story), Wikipedia says many archaeologists favour about 1450 and cites 1142 (a solar eclipse of 31 August), and the Canadian Encyclopedia notes a 1997 proposal of 31 August 1142 and many claims for the mid-16th century. The chapter's timeline year (1450) is the midpoint of Wikipedia's archaeologists' view, not a date I assert.",
        evidence: "disputed", features: [circ("Haudenosaunee homeland (broad region)", -76.5, 42.9, 160, "alliance", "regional", "reconstructed", "Region from the Genesee River to the Hudson valley per the Canadian Encyclopedia; not a border.")],
        alternatives: [
          { label: "About 1142 CE", text: "Proposed in 1997 on the basis of a solar eclipse of 31 August 1142.", sources: ["canadian-enc-iroquois", "wiki-haudenosaunee"] },
          { label: "About 1450 CE", text: "The date favoured by many archaeologists and anthropologists, per Wikipedia.", sources: ["wiki-haudenosaunee"] },
          { label: "1570–1600 CE", text: "Britannica's date for the Peacemaker story.", sources: ["brit-haudenosaunee"] }
        ],
        relatedSites: [], sources: ["brit-haudenosaunee", "brit-great-law", "canadian-enc-iroquois", "wiki-haudenosaunee", "haudenosaunee-confederacy-site"]
      },
      {
        id: "colonial-rivalry", title: "The Confederacy among European empires (17th–18th centuries)", subject: "Indigenous power in imperial rivalry",
        date: { start: 1600, end: 1799, kind: "period" }, camera: { center: [-75.0, 43.5], zoom: 5.5 },
        text: "Britannica says the Haudenosaunee played a strategic role in the French–British rivalry in North America in the 17th and 18th centuries, and that the English recognised the Six Nations at Albany in 1722. Wikipedia says that after American independence and the devastating Sullivan Expedition, many Haudenosaunee fled to British Canada.",
        what: "A confederacy deals with rival empires as a political power.",
        where: "Upper New York and the Great Lakes region.",
        why: "Britannica names the French–British rivalry as the setting.",
        uncertain: "The sources I read do not describe the Haudenosaunee's decisions during the Revolution in detail, and this chapter does not narrate the Sullivan Expedition.",
        evidence: "attested", features: [pt("Albany", -73.7562, 42.6526, "site", "approximate", "attested", "Where the Six Nations were recognised in 1722.")],
        relatedSites: [], sources: ["brit-haudenosaunee", "wiki-haudenosaunee"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "Two societies cannot represent hundreds of nations. This tour does not cover Indigenous peoples of the Plains, Southwest, Northwest Coast, Arctic, California or Southeast beyond the Trail of Tears, or the Indigenous nations of Canada beyond the Haudenosaunee. Later chapters on removal and residential schools appear in the expansion and Canada tours.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "A short, sourced tour is more honest than a long thin one.",
        uncertain: "The sources I used are encyclopedias, a museum-style magazine article and the confederacy's own site; none is an Indigenous scholarly history.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing omissions; it makes no new historical claims."
      }
    ]
  });
})();
