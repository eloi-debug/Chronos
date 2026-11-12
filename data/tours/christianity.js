(function () {
  const { B, pt, circ, line } = window.TourKit;
  const jer = pt("Jerusalem", 35.2137, 31.7683, "site", "approximate", "attested", "City centre; holy to Jews, Christians and Muslims.");
  const cp = pt("Constantinople", 28.9784, 41.0082, "site", "approximate", "attested", "Centre of modern Istanbul.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "christianity",
    category: "religion",
    title: "Christianity: from a Jewish movement to a divided world religion (with the Crusades)",
    description: "How a movement in Roman Palestine spread through the empire, went from persecution to imperial patronage, split between East and West, launched the Crusades, and divided again in the Reformation. It records historical developments, not doctrinal truth claims, and it treats the Crusades from more than one side.",
    scope: "The Roman world, Byzantium, the Levant and western Europe",
    span: "1st century to 1517 CE",
    tags: ["Christianity", "Constantine", "Schism", "Crusades", "Reformation"],
    chapters: [
      {
        id: "origins", title: "Origins and spread in the Roman Empire (1st–2nd centuries)", subject: "Early Christian communities",
        date: { start: 30, end: 199, kind: "period" }, camera: { center: [25.0, 37.0], zoom: 4.2 },
        text: "Britannica describes early Christianity as developing from the Jewish community of Roman Palestine. Followers of Jesus saw him as the promised Messiah, which is the believers' own account. Paul the Apostle played a key role in bringing gentiles in without requiring Jewish law, and the Roman road system and relative security helped missionaries. By the end of the 2nd century there were communities in Asia Minor, Alexandria, Rome, Gaul and North Africa.",
        what: "A small Jewish movement becomes a network of churches across the empire.",
        where: "Roman Palestine, then Asia Minor, Alexandria, Rome, Gaul and North Africa.",
        why: "Missionary travel, opening the community to gentiles, and imperial roads.",
        uncertain: "The date range is approximate: the sources give 'the end of the 2nd century' for the spread but no date for the movement's start, and 30 CE is a conventional placeholder. This tour records what historians can say, not which beliefs are true.",
        evidence: "reconstructed", features: [jer, pt("Rome", 12.4964, 41.9028, "diffusion", "approximate", "attested", "One of the early communities."), pt("Alexandria", 29.9187, 31.2001, "diffusion", "approximate", "attested", "One of the early communities.")],
        relatedSites: [], sources: ["brit-early-christianity"]
      },
      {
        id: "persecution", title: "Persecution, then toleration (250–313 CE)", subject: "Church under state pressure",
        date: { start: 250, end: 313, kind: "period" }, camera: { center: [20.0, 40.0], zoom: 4 },
        text: "Organised, empire-wide persecutions arose during crises. In 250 Decius ordered all citizens to worship the gods, and many Christians gave in, but the church survived. Diocletian and Galerius launched persecutions in 303, and Galerius acknowledged their failure in 311. In 313 Constantine and Licinius agreed on toleration in the Edict of Milan, and Constantine soon turned to active patronage of the church.",
        what: "State policy flips from suppression to support.",
        where: "Across the Roman Empire.",
        why: "Britannica says public opinion was revolted by the bloodshed of the Diocletianic persecutions, which failed to achieve their goal.",
        uncertain: "The numbers of those killed or who recanted are not given in the sources I read.",
        evidence: "attested", features: [], relatedSites: [], sources: ["brit-early-christianity", "brit-edict-milan"]
      },
      {
        id: "empire-church", title: "Imperial patronage and Nicaea (313–325 CE)", subject: "State-sponsored church",
        date: { start: 313, end: 325, kind: "period" }, camera: { center: [29.0, 40.5], zoom: 5 },
        text: "After 313 Constantine turned to active patronage of the church. Britannica's account of early Christianity runs from the church's Jewish roots to Constantine's conversion and the First Council of Nicaea in 325. In the 3rd century the church had organised itself into provinces matching the civil provinces, with the bishop of the provincial capital as primate, and Nicaea gave this system canonical status.",
        what: "The church moves from tolerated to favoured, and its structure matches the empire's.",
        where: "Nicaea in Anatolia, and the empire's cities.",
        why: "Patronage gave the church resources and a legal position that persecuted movements lacked.",
        uncertain: "Political sponsorship is not the same as the belief of a whole population, and the sources I read do not say how fast belief spread among ordinary people. I did not find a sourced account of when Christianity became the empire's official religion, so this tour does not claim a date.",
        evidence: "attested", features: [pt("Nicaea (İznik)", 29.7208, 40.4297, "site", "approximate", "attested", "Site of the Council of 325."), cp],
        relatedSites: ["constantinople"], sources: ["brit-early-christianity", "brit-edict-milan"]
      },
      {
        id: "schism", title: "East and West divide (1054)", subject: "Church schism",
        date: { start: 1054, end: 1054, kind: "event" }, camera: { center: [20.0, 42.0], zoom: 4.5 },
        text: "The East–West Schism was formalised in 1054 when the legates of Pope Leo IX and Patriarch Michael Cerularius excommunicated each other. Britannica says the separation was six centuries in the making, with disputes over the Filioque clause, papal primacy, church boundaries and rivalry between Latin and Byzantine missionaries. The excommunications were lifted in 1965.",
        what: "The Western (Catholic) and Eastern (Orthodox) churches separate.",
        where: "Between Rome and Constantinople.",
        why: "Theological, political and cultural estrangement over centuries.",
        uncertain: "1054 is a symbolic date: Britannica says neither side considered the act final at the time. The 1204 sack of Constantinople widened the rift.",
        evidence: "attested", features: [cp, pt("Rome", 12.4964, 41.9028, "site", "approximate", "attested", "Seat of the pope.")],
        relatedSites: ["constantinople"], sources: ["brit-schism-1054", "brit-christianity-schism", "ebsco-schism"]
      },
      {
        id: "crusades-begin", title: "The Crusades begin (1095–1099)", subject: "Papally called military expeditions",
        date: { start: 1095, end: 1099, kind: "event" }, camera: { center: [28.0, 38.0], zoom: 4 },
        text: "The Byzantine emperor Alexius Comnenus asked for help from the West after the Seljuqs took most of Asia Minor. At the Council of Clermont on 18 November 1095 Urban II called for a crusade and granted a plenary indulgence. The response was immediate and large. The crusading army took Jerusalem in July 1099 after a five-week siege. Two summaries describe a massacre of the inhabitants.",
        what: "Western Christendom launches a series of wars to retake Jerusalem and the Holy Land.",
        where: "Clermont in France, Anatolia, Antioch and Jerusalem.",
        why: "Britannica names three developments: popular religious fervour, the view of war against 'the infidel' as a work pleasing to God, and western Europe's new capacity to organise such an expedition.",
        uncertain: "The massacre at Jerusalem is described by an unrated war-history site and by a Muslim community centre's summary; Britannica's excerpt does not mention it. The sources vary in tone and none gives a casualty figure.",
        evidence: "attested", features: [pt("Clermont", 3.0833, 45.7772, "site", "approximate", "attested", "Council of Clermont, November 1095."), pt("Antioch", 36.16, 36.2, "conflict", "approximate", "attested", "Taken by the crusaders in 1098."), jer],
        relatedSites: [], sources: ["brit-crusades-first", "warhistory-crusades", "luton-crusades"]
      },
      {
        id: "crusader-states", title: "Crusader states, Saladin and the end (1099–1291)", subject: "Latin states in the Levant",
        date: { start: 1099, end: 1291, kind: "period" }, camera: { center: [35.5, 33.0], zoom: 5.5 },
        text: "The Crusader states, including the kingdom of Jerusalem, were gradually encircled by a single Muslim power. In 1187 at Hattin Saladin destroyed virtually the entire military force of the kingdom of Jerusalem, killed Reginald of Châtillon, ordered the execution of some 200 Templars and Hospitallers and enslaved most foot soldiers. By 1189 almost all the kingdom was in his hands. The Fourth Crusade, diverted to Constantinople in 1204, brutally captured it. The fall of Acre in 1291 marked the end of the Jerusalem crusades.",
        what: "The Latin states rise and fall over almost two centuries.",
        where: "The Levantic coast, Hattin, Jerusalem, Acre and, in 1204, Constantinople.",
        why: "Britannica says that the Muslim encirclement and the loss of Byzantine-Latin cooperation after 1180 left the states exposed.",
        uncertain: "The 1291 fall of Acre is from an unrated site. The Crusades also included campaigns against other targets, which this tour does not cover. One summary says Saladin did not massacre Jerusalem's civilians in 1187, which I did not verify against a second source.",
        evidence: "attested",
        features: [jer, pt("Hattin", 35.45, 32.8, "conflict", "approximate", "attested", "Battle of 1187; marker approximate."), pt("Acre", 35.0818, 32.9234, "conflict", "approximate", "attested", "Fell in 1291."), cp],
        relatedSites: ["constantinople"], sources: ["brit-crusades-states", "brit-christianity-schism", "warhistory-crusades", "luton-crusades"]
      },
      {
        id: "reformation", title: "Western Christianity splits again (1517)", subject: "Reformation",
        date: { start: 1517, end: 1517, kind: "event" }, camera: { center: [10.0, 50.5], zoom: 4.5 },
        text: "In 1517 Martin Luther, a German religious scholar, wrote the Ninety-five Theses arguing against the sale of indulgences. Protestants today regard the theses as the start of the Reformation, which Britannica says split Western Christianity between Roman Catholics and Protestants. Luther held the Bible to be the only source of religious authority. Today Europe has three main branches: Catholicism in the west and southwest, Protestantism in the north, and Orthodoxy in the east and southeast.",
        what: "A second major division creates the Protestant branch.",
        where: "German lands, then across northern Europe.",
        why: "Objections to church practices such as indulgences and disputes about authority.",
        uncertain: "This tour ends here. It does not cover Orthodoxy's later history, missions in Africa, Asia and the Americas, or modern Christianity.",
        evidence: "attested", features: [circ("German lands (broad region)", 10.5, 51.0, 350, "diffusion", "regional", "attested", "Region where the Reformation began; broad region only.")],
        relatedSites: [], sources: ["brit-reformation", "brit-europe-religions"]
      }
    ]
  });
})();
