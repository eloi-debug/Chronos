(function () {
  const { B, pt, circ, line } = window.TourKit;
  const babylon = pt("Babylon", 44.4275, 32.5355, "site", "approximate", "attested", "Marduk's city; marker approximate.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "mesopotamian-religion",
    category: "religion",
    title: "Mesopotamian religion and the Enuma Elish",
    description: "The gods, temples and kingship of ancient Mesopotamia, and the Babylonian creation epic Enuma Elish: what the story says, when scholars think it was composed, and how it relates to ritual. Keeps the story, the date of the text and the evidence for its use separate.",
    scope: "Mesopotamia (modern Iraq)",
    span: "c. 3000 BCE to the Seleucid era",
    tags: ["Mesopotamia", "Enuma Elish", "Marduk", "Akitu", "ziggurat", "Anu", "Enlil"],
    chapters: [
      {
        id: "pantheon", title: "Gods who owned cities", subject: "Polytheistic city religion",
        date: null, camera: { center: [45.0, 32.0], zoom: 5.5 },
        text: "Mesopotamian religion covers the beliefs and practices of the Sumerians and Akkadians and their Babylonian and Assyrian successors. Britannica says that the gods were organised as a kind of assembly, with each owning an estate and controlling a city. The leading gods were An (Anu), the god of heaven, Enlil, god of winds and agriculture with his cult centre at Nippur, and Enki (Ea), god of fresh waters and a troubleshooter. Inanna (Ishtar) was the goddess of war and love. Anu's Sumerian counterpart An dates from at least 3000 BCE, and his holy city was Uruk.",
        what: "Describes the pantheon and how gods were tied to cities.",
        where: "Uruk, Nippur and other cities.",
        why: "Britannica says religion was the only intellectual framework, shaping social, economic, legal, political and military institutions.",
        uncertain: "The pantheon changed over some three millennia, and the sources I read give a composite picture. Sumerian, Akkadian, Babylonian and Assyrian versions differ in names and emphasis.",
        evidence: "reconstructed", features: [pt("Uruk", 45.6361, 31.3228, "site", "approximate", "attested", "Holy city of Anu."), pt("Nippur", 45.23, 32.13, "site", "approximate", "attested", "Cult centre of Enlil; marker approximate.")],
        relatedSites: ["uruk"], sources: ["brit-mesopotamian-religion", "brit-mesopotamian-gods", "brit-mesopotamian-summary", "brit-anu"]
      },
      {
        id: "temples", title: "Temples and ziggurats (c. 2200–500 BCE)", subject: "Cult architecture",
        date: { start: B(2200), end: B(500), kind: "period" }, camera: { center: [46.1, 31.0], zoom: 6 },
        text: "Ziggurats were stepped temple towers built in the major cities of Mesopotamia from about 2200 to 500 BCE. About 25 are known. The best preserved is at Ur, a three-tier structure with a shrine at the top dedicated to the moon god Nanna (Sin), which was an important building for at least 2,000 years. Britannica says the gods were believed to own and manage temples and lands.",
        what: "Monumental temples express the gods' ownership of the cities.",
        where: "Sumer, Babylonia and Assyria, with the best example at Ur.",
        why: "Temples were the gods' estates.",
        uncertain: "What the ziggurat's upper shrine was used for is not explained in the sources I read.",
        evidence: "attested", features: [pt("Ur (ziggurat)", 46.1031, 30.9628, "site", "approximate", "attested", "Best-preserved ziggurat; marker approximate.")],
        relatedSites: [], sources: ["brit-mesopotamian-religion", "brit-mesopotamian-myth"]
      },
      {
        id: "enuma-elish", title: "The Enuma Elish: the story", subject: "Babylonian creation epic",
        date: null, camera: { center: [44.4, 32.5], zoom: 6 },
        text: "In Britannica's summary of the Enuma Elish, the epic begins with a universe of watery chaos. The god Marduk emerges, slays the sea goddess Tiamat, splits her body, and makes the sky from one half and the earth from the other. Humankind is created from the blood of Kingu, Tiamat's cohort, and Babylon is established as Marduk's city. Britannica says the underlying theme is Marduk's rise to rule the gods, and that the epic affirms the supremacy of Babylon and Marduk.",
        what: "The story presents creation as order won from chaos and links it to Babylon.",
        where: "Babylon, as Marduk's city in the story.",
        why: "It gives a divine justification for Babylon's standing.",
        uncertain: "This chapter is a summary of a traditional narrative. It makes no claim that events occurred. A different Mesopotamian tradition, the Atrahasis myth, has Enki advise that a god be killed and humans made from his flesh and blood mixed with clay.",
        evidence: "mythological", features: [babylon], relatedSites: ["babylon"],
        alternatives: [{ label: "Another Mesopotamian account of human creation", text: "In the Akkadian Atrahasis myth, Enki advises killing a god and mixing his flesh and blood with clay.", sources: ["brit-mesopotamian-gods"] }],
        sources: ["brit-enuma-elish", "brit-mesopotamian-myth", "brit-mesopotamian-gods"]
      },
      {
        id: "dating", title: "When was it written? Composition and manuscripts", subject: "Textual history",
        date: { start: B(1400), end: B(1100), kind: "composition, disputed" }, camera: { center: [44.4, 32.5], zoom: 5.5 },
        text: "Britannica says the Enuma Elish was written by an unknown poet at an undetermined date, possibly in the 14th century BCE. Wikipedia places it in the late 2nd millennium BCE and says Marduk's rise is generally viewed as starting from the Second Dynasty of Isin, after Nebuchadnezzar I brought the god's statue back from Elam, though a late Kassite date is sometimes proposed. The earliest surviving manuscript comes from Assur and dates to the 9th century BCE. A fragmentary copy was found in the ruined library of Ashurbanipal at Nineveh. An unrated source notes some scholars argue for an earlier Old Babylonian date under Hammurabi.",
        what: "Separates the composition date from the dates of the surviving tablets.",
        where: "Babylon, Assur and Nineveh.",
        why: "The date affects how the poem is read, for example as a product of Babylon's political revival.",
        uncertain: "Estimates range from 18th-century BCE proposals through c. 1200 and 1100 to the 14th century BCE. The surviving manuscripts are centuries later than any proposed composition date.",
        evidence: "disputed", features: [babylon, pt("Nineveh", 43.15, 36.37, "site", "approximate", "attested", "Library of Ashurbanipal, where a copy was found."), pt("Assur", 43.26, 35.46, "site", "approximate", "attested", "Earliest known manuscript; marker approximate.")],
        alternatives: [
          { label: "14th century BCE", text: "Britannica says possibly in the 14th century BCE, at an undetermined date.", sources: ["brit-enuma-elish"] },
          { label: "Reign of Nebuchadnezzar I (late 12th century BCE)", text: "Often linked to the return of Marduk's statue, though debated.", sources: ["wiki-enuma-elish", "salman-enuma"] },
          { label: "Old Babylonian origin", text: "Some scholars argue for an earlier date under Hammurabi.", sources: ["salman-enuma"] }
        ],
        relatedSites: ["babylon"], sources: ["brit-enuma-elish", "wiki-enuma-elish", "salman-enuma"]
      },
      {
        id: "akitu", title: "Kingship and the Akitu festival", subject: "Ritual and royal ideology",
        date: null, camera: { center: [44.4, 32.5], zoom: 6 },
        text: "Britannica says the Enuma Elish was recited during the Akitu, the Babylonian New Year festival in spring, to symbolise the renewal of the world and the triumph over chaos. It adds that the king was seen as a god's agent on earth rather than a god's son, and presided as chief priest at the festival. Wikipedia reports a ritual text from the Seleucid period saying the epic was recited at Akitu, but notes scholarly debate over whether the reading occurred, its purpose, and which text is meant.",
        what: "Links the story to an annual ritual and to the king's role.",
        where: "Babylon, in Marduk's temple.",
        why: "The festival tied cosmic order to the king and the city.",
        uncertain: "The link between poem and ritual is debated: the Seleucid ritual text is late, and it is unclear whether the festival was created for the poem, the reverse, or neither. Britannica's account of the recitation is stated more confidently than Wikipedia's.",
        evidence: "disputed", features: [babylon], relatedSites: ["babylon"],
        sources: ["brit-akitu", "brit-enuma-elish", "brit-mesopotamian-summary", "wiki-enuma-elish"]
      }
    ]
  });
})();
