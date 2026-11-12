(function () {
  const { B, pt, circ, line } = window.TourKit;
  const kilwa = pt("Kilwa Kisiwani", 39.5167, -8.9583, "site", "approximate", "attested", "Island city-state off the coast of Tanzania; marker approximate.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "swahili-coast",
    category: "political",
    title: "The Swahili coast: Indian Ocean city-states",
    description: "East Africa's trading ports from the first millennium to the 19th century: the early Zanzibar archipelago, the Persian and Arab settlements of the 12th century, the dominance of Kilwa through the Sofala gold trade, the Portuguese disruption after 1498, and the Omani clove empire of Zanzibar. It rests on a textbook chapter and an Oxford volume abstract, so it is an outline.",
    scope: "The East African coast and islands, from Somalia to Mozambique",
    span: "c. 500 to 1890 CE",
    tags: ["Swahili coast", "Kilwa", "Zanzibar", "Indian Ocean trade", "Portuguese", "Oman"],
    chapters: [
      {
        id: "early", title: "The first golden age: Unguja Ukuu and early ports (mid-1st millennium onward)", subject: "Early trading ports",
        date: { start: 500, end: 1099, kind: "period (approximate)" }, camera: { center: [39.3, -6.0], zoom: 5.5 },
        text: "An Oxford University Press chapter says the first golden age of the Zanzibar archipelago blossomed from the middle of the first millennium CE, when connections began across the Indian Ocean from the western seaboard as far as China. It was spearheaded by Unguja Ukuu, followed by ports on Pemba and Unguja, including Kizimkazi, which has a 12th-century Kufic inscription. An unrated paper says exports included ivory, gold and slaves, in exchange for beads, cloth and perfumes from the Middle East, India and the Far East.",
        what: "East African ports join the Indian Ocean trade network.",
        where: "Zanzibar (Unguja), Pemba and the coast.",
        why: "The sources I read do not explain why these ports developed when they did.",
        uncertain: "'Golden age' is the author's term. The slave trade is part of the picture in the unrated source, which this tour does not detail.",
        evidence: "reconstructed", features: [pt("Unguja Ukuu (Zanzibar)", 39.28, -6.27, "site", "approximate", "attested", "Early port; marker approximate.")],
        relatedSites: [], sources: ["oup-zanzibar", "academia-swahili"]
      },
      {
        id: "kilwa", title: "Kilwa and the gold trade (12th–15th centuries)", subject: "Trading city-states",
        date: { start: 1100, end: 1499, kind: "period" }, camera: { center: [39.5, -8.0], zoom: 5.2 },
        text: "OpenStax says that in the 12th century large numbers of Persians settled on the East African coast, and that their city-states grew into port cities from Mogadishu to Sofala. Kilwa, on an island off the coast of Tanzania, became the most powerful. According to legend it was founded in the 10th century by Ali ibn al-Hassan Shirazi, the son of a Persian noble and an enslaved Ethiopian woman. In the 1180s its ruler gained control of Sofala, in what is now Mozambique, and the gold trade allowed Kilwa to establish or assume control of cities including Mombasa, Pemba, Mafia and Zanzibar. The Oxford chapter says that by the 14th century Zanzibar was being bypassed as ports developed on the mainland, with Mombasa receiving Indian textiles and Zimbabwean gold exported via Sofala.",
        what: "Kilwa dominates the coast through the gold trade.",
        where: "Kilwa, Sofala, Mombasa and other ports.",
        why: "OpenStax links Kilwa's rise to its island harbour and its control of Sofala gold.",
        uncertain: "The foundation story is called a legend. The Persian origin story is one reading; the Oxford chapter stresses 'Islamisation and Arab immigration', and the sources I read do not say how the Swahili language and culture developed.",
        evidence: "reconstructed", features: [kilwa, pt("Sofala", 34.73, -20.15, "site", "approximate", "attested", "Gold port; marker approximate."), pt("Mombasa", 39.6682, -4.0435, "site", "approximate", "attested", "Port for Indian textile imports.")],
        relatedSites: [], sources: ["openstax-swahili", "oup-zanzibar"]
      },
      {
        id: "portuguese", title: "The Portuguese arrive (1498–early 16th century)", subject: "European intrusion",
        date: { start: 1498, end: 1520, kind: "period" }, camera: { center: [39.5, -6.0], zoom: 4.8 },
        text: "The Oxford chapter says that when the Portuguese entered the Indian Ocean in 1498 they were entering a zone of free trade, but they wanted to build a maritime empire that would monopolise trade and divert it to the Cape route. For them East Africa mattered as a source of gold and ivory from Sofala to pay for spices in India. They repeatedly ransacked Kilwa and Mombasa. OpenStax says Portugal's early 16th-century attempt to seize the coast's wealth was helped by internal dissent in Kilwa, where rulers of other cities regarded the Portuguese as potential allies, and the Sheikh of Malindi had signed a trade agreement with Vasco da Gama in 1498.",
        what: "A European power attacks and disrupts the coast's trade.",
        where: "Kilwa, Mombasa and Malindi.",
        why: "Portugal wanted to control Indian Ocean trade; local rivalries helped it.",
        uncertain: "The Oxford chapter says the Portuguese did not succeed in their monopoly but disrupted the older patterns of trade; how much damage they did is not quantified in the sources I read.",
        evidence: "attested", features: [kilwa, pt("Malindi", 40.1169, -3.2175, "alliance", "approximate", "attested", "Signed a trade agreement with da Gama in 1498."), pt("Mombasa", 39.6682, -4.0435, "conflict", "approximate", "attested", "Repeatedly attacked.")],
        relatedSites: [], sources: ["oup-zanzibar", "openstax-swahili"]
      },
      {
        id: "zanzibar", title: "Oman, Zanzibar and the 19th-century commercial empire", subject: "Omani-ruled trading state",
        date: { start: 1700, end: 1890, kind: "period (approximate)" }, camera: { center: [39.2, -6.2], zoom: 5.5 },
        text: "OpenStax says the Omanis continued the profitable slave trade as well as the trade in elephant ivory that had long been part of Zanzibar's economy. The Oxford chapter says that after the Portuguese interlude the Swahili civilisation tried to recover its initiative but could no longer hold its own, and that in the 19th century Zanzibar developed as the seat of a vast commercial empire based on the clove economy, with commerce from the Indian to the Atlantic Ocean and a hinterland reaching as far as the African Great Lakes.",
        what: "Zanzibar becomes the centre of a commercial empire built on cloves, ivory and the slave trade.",
        where: "Zanzibar and its inland trade routes.",
        why: "The sources I read do not give the causes of Oman's rise on the coast.",
        uncertain: "The start date 1700 is my approximation: the excerpts I read do not say when Omani rule began. The scale of the slave trade is not quantified in the sources I read, and it involved suffering on a large scale that this chapter does not describe.",
        evidence: "reconstructed", features: [pt("Zanzibar (Stone Town)", 39.1925, -6.1659, "site", "approximate", "attested", "Seat of the 19th-century clove economy.")],
        relatedSites: [], sources: ["oup-zanzibar", "openstax-swahili"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover Swahili language and literature, architecture, religion, daily life, the inland peoples who supplied ivory and gold, Great Zimbabwe, German and British colonial rule or independence.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "These are large subjects that need their own sources.",
        uncertain: "My first search for the Swahili coast returned nothing usable, and this tour rests on a few sources found on a second try.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing omissions; it makes no new historical claims."
      }
    ]
  });
})();
