(function () {
  const { B, pt, circ, line } = window.TourKit;
  const mecca = pt("Mecca", 39.8262, 21.4225, "site", "approximate", "attested", "City centre.");
  const medina = pt("Medina (Yathrib)", 39.6142, 24.4686, "site", "approximate", "attested", "City centre.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "islam",
    category: "religion",
    title: "Islam: origins and the first caliphates (to 750 CE)",
    description: "The emergence of Islam in Arabia, the founding of the first Muslim community at Medina, the conquests and caliphates that followed, and the shift from the Umayyads to the Abbasids. This tour covers the early period only; later centuries, Sunni–Shia history and the spread to Africa and Asia are not yet included.",
    scope: "Arabia, the Levant, Iran, Egypt, North Africa and Iberia",
    span: "c. 570 to 750 CE",
    tags: ["Islam", "Muhammad", "Hijrah", "caliphate", "Umayyad", "Abbasid"],
    chapters: [
      {
        id: "arabia", title: "Arabia and the first revelations (c. 610–622 CE)", subject: "Emergence of a religious community",
        date: { start: 610, end: 621, kind: "traditional" }, camera: { center: [40.0, 22.5], zoom: 5.5 },
        text: "Britannica says Muhammad is traditionally said to have been born in Mecca in 570 and to have died in 632. Islam arose in Arabia in the 7th century CE. Muslim tradition places the first revelations near Mecca around 610. World History Encyclopedia says he began preaching a monotheistic faith in Mecca from 610 and that the Meccans persecuted the Muslim community.",
        what: "A new monotheistic community forms in Mecca under pressure.",
        where: "Mecca, in the Hejaz region of Arabia.",
        why: "Persecution is what the sources give as the reason for the migration that followed.",
        uncertain: "The dates of Muhammad's life and the first revelations rest on later Muslim tradition (Britannica: 'traditionally said'). This tour records what historians can say and does not assess religious claims.",
        evidence: "traditional", features: [mecca], relatedSites: [], sources: ["brit-hijrah", "whe-early-conquests", "brit-arabia", "chronosatlas-islam"]
      },
      {
        id: "hijrah", title: "The Hijrah and the first Muslim state (622 CE)", subject: "Community becomes a polity",
        date: { start: 622, end: 622, kind: "event" }, camera: { center: [40.0, 23.0], zoom: 6 },
        text: "In 622 Muhammad migrated from Mecca to Yathrib (Medina) at the invitation of its clans to escape persecution. There he negotiated the Constitution of Medina with the local clans, which Britannica says established the Muslim community as a sociopolitical entity for the first time. The year is the starting point of the Muslim era, which the caliph Umar introduced in 639, with 1 Muharram corresponding to 16 July 622.",
        what: "A persecuted community becomes a political community.",
        where: "From Mecca to Medina (Yathrib) in the Hejaz.",
        why: "Medina offered protection and a role for Muhammad as arbitrator.",
        uncertain: "The year 622 is standard, but the conversion to an exact calendar day depends on chronology and calendar assumptions.",
        evidence: "attested", features: [mecca, medina, line("Hijrah (schematic)", [[39.8262, 21.4225], [39.6142, 24.4686]], "diffusion", "illustrative", "attested", "Schematic link, not the route taken.")],
        relatedSites: [], sources: ["brit-hijrah", "wiki-first-islamic-state", "whe-early-conquests"]
      },
      {
        id: "rashidun", title: "The Rashidun caliphate (632–661 CE)", subject: "Caliphate",
        date: { start: 632, end: 661, kind: "period" }, camera: { center: [42.0, 30.0], zoom: 3.8 },
        text: "After Muhammad's death in 632, Abu Bakr was proclaimed caliph and laid the foundation of the Rashidun Caliphate. Within a few decades the realm expanded from Medina to cover Arabia, Iraq, Syria, the Levant, Iran, Egypt and parts of North Africa, and at its peak reached from North Africa to parts of modern Pakistan. The First Fitna (656–661), the first civil war, temporarily stalled expansion.",
        what: "A community in Arabia becomes the ruler of much of the Near East.",
        where: "From Medina across Arabia into the Byzantine and Sasanian lands.",
        why: "World History Encyclopedia says the realm was nearly broken up after Muhammad's death and that Abu Bakr averted this by proclaiming himself caliph.",
        uncertain: "Conquest does not equal conversion: the sources I read describe political expansion and do not say how fast the conquered populations became Muslim. Where the territory overlay appears, it is the nearest earlier snapshot only.",
        evidence: "attested", features: [medina], relatedSites: [], sources: ["whe-early-conquests", "wiki-first-islamic-state"]
      },
      {
        id: "umayyad", title: "The Umayyads and the move to Damascus (661–750 CE)", subject: "Dynastic caliphate",
        date: { start: 661, end: 750, kind: "period" }, camera: { center: [20.0, 33.0], zoom: 3.4 },
        text: "After Ali was murdered in 661 by the Kharijites, the governor of Syria, Muawiya, took power and founded the Umayyad dynasty, which resumed the conquests. An unrated timeline describes the caliphate centred on Damascus, turning from an elected position to a hereditary monarchy, and its forces crossing into Iberia.",
        what: "The caliphate becomes a hereditary dynasty ruling from Syria and extending to Iberia.",
        where: "Damascus, North Africa and the Iberian Peninsula.",
        why: "Wikipedia and World History Encyclopedia attribute the dynasty's rise to the end of the first civil war.",
        uncertain: "Several details, including the Iberian conquest, come from an unrated timeline and are not checked. The sources I read do not describe the Sunni–Shia divide that developed from the succession disputes.",
        evidence: "attested", features: [pt("Damascus", 36.2765, 33.5138, "site", "approximate", "attested", "Umayyad capital."), pt("Córdoba", -4.7794, 37.8882, "diffusion", "approximate", "attested", "Later seat of an Umayyad emirate in Iberia, per the unrated timeline.")],
        relatedSites: [], sources: ["whe-early-conquests", "chronosatlas-islam", "wiki-first-islamic-state"]
      },
      {
        id: "abbasids", title: "The Abbasids and what this tour leaves out (750 CE onward)", subject: "New dynasty",
        date: { start: 750, end: 750, kind: "event" }, camera: { center: [44.0, 33.0], zoom: 4 },
        text: "In 750 the Abbasid family overthrew the Umayyads and took the caliphate, and a surviving Umayyad prince established an independent emirate in Córdoba, according to the unrated timeline. Wikipedia dates the Abbasid Caliphate to 750–1258.",
        what: "A dynasty change splits the Muslim world's political unity.",
        where: "Mesopotamia and Iberia.",
        why: "The sources I read do not explain why the Abbasids succeeded.",
        uncertain: "This tour stops at 750. It does not cover the Abbasid era, Baghdad, the Sunni–Shia history, the Fatimids, later dynasties, Islam's spread to Africa and Asia, or the Ottomans (see that tour). Those chapters need further research.",
        evidence: "reconstructed", features: [pt("Baghdad", 44.3661, 33.3152, "site", "approximate", "attested", "Later Abbasid capital.")],
        relatedSites: ["baghdad"], sources: ["wiki-first-islamic-state", "chronosatlas-islam"]
      }
    ]
  });
})();
