(function () {
  const { B, pt, circ, line } = window.TourKit;
  const tim = pt("Timbuktu", -3.0026, 16.7666, "site", "approximate", "attested", "Trading and learning centre, founded around the 11th century according to Britannica.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "west-african-empires",
    category: "political",
    title: "West African empires: Ghana, Mali and Songhai",
    description: "Three successive states of the western Sahel that controlled the trans-Saharan trade in gold and other goods from roughly the 4th to the 16th century. The sources I could find are brief, several are unrated, and the Swahili coast and other African regions are not covered, so this tour is a short outline.",
    scope: "The western Sahel and the Niger and Senegal valleys",
    span: "c. 4th to 16th century CE",
    tags: ["Ghana", "Mali", "Songhai", "Timbuktu", "trans-Saharan trade", "Mansa Musa"],
    chapters: [
      {
        id: "ghana", title: "The kingdom of Ghana (c. 4th–11th centuries)", subject: "Trading kingdom",
        date: { start: 300, end: 1076, kind: "period (approximate)" }, camera: { center: [-8.0, 15.0], zoom: 4.5 },
        text: "Britannica says the Soninke kingdom of Ghana, which existed from the 4th to the 11th century, was situated at the head of the Senegal and Niger rivers and controlled the lucrative trade across the Sahara, in which gold, enslaved people, ivory and gum arabic flowed north to North Africa for nearly a millennium. The Almoravid invasion of 1076 led to Ghana's downfall.",
        what: "A kingdom grows rich on the gold trade.",
        where: "The upper Senegal and Niger rivers, in what is now Mali and Mauritania.",
        why: "It controlled the trade routes between the Sahara and the forest zone.",
        uncertain: "An unrated source dates Ghana to c. 300–1200 and describes salt traded for gold. The cause of the kingdom's decline is attributed to the Almoravids by Britannica; other explanations are not discussed in the sources I read. The trade included enslaved people.",
        evidence: "reconstructed", features: [circ("Ghana kingdom heartland (broad region)", -8.0, 15.0, 400, "direct", "regional", "reconstructed", "Broad region only; the kingdom's borders are unknown.")],
        relatedSites: [], sources: ["brit-mali-precolonial", "sudan-times-trade"]
      },
      {
        id: "mali", title: "The Mali Empire (13th–15th centuries)", subject: "Empire of the upper Niger",
        date: { start: 1200, end: 1499, kind: "period (approximate)" }, camera: { center: [-5.0, 15.0], zoom: 4.2 },
        text: "Britannica says the Mandinka empire of Mali flourished from the 13th to the 15th century, established around the upper Niger. Under Mali, caravan routes extended east through Djenné and Timbuktu. World History Encyclopedia says the Mali kings converted to Islam and that Mansa Musa (r. 1312–1337) visited Cairo and Mecca and returned with scholars and architects. An unrated source credits Sundiata Keita with founding the empire and dates Mansa Musa's pilgrimage to 1324.",
        what: "A new empire takes over the Saharan trade.",
        where: "The upper Niger, Djenné and Timbuktu.",
        why: "Britannica says Mali took over Ghana's dominance after the Almoravid invasion.",
        uncertain: "Mansa Musa's reign is given as 1312–1337 by World History Encyclopedia and the pilgrimage as 1324 by an unrated source. The Mali Empire's dates differ across sources (1215–1450 or 1240–1645).",
        evidence: "reconstructed", features: [tim, pt("Djenné", -4.55, 13.9, "site", "approximate", "attested", "Trade and learning centre on the Niger.")],
        relatedSites: ["timbuktu"], sources: ["brit-mali-precolonial", "whe-islam-africa", "stanford-islam-westafrica", "sudan-times-trade"]
      },
      {
        id: "songhai", title: "Songhai (15th–16th centuries)", subject: "Successor empire",
        date: { start: 1400, end: 1599, kind: "period (approximate)" }, camera: { center: [0.0, 15.5], zoom: 4.2 },
        text: "Britannica says Mali's decline in the 15th century allowed the Songhai kingdom in the east to gain independence, and that during the Songhai period Djenné and Timbuktu thrived as centres of trade and Islamic learning. An unrated source says Songhai under rulers such as Sunni Ali and Askia Muhammad expanded its control over important trade cities such as Gao and Djenné and extended its reach to the Mediterranean markets.",
        what: "Power shifts east along the Niger.",
        where: "Gao, Djenné and Timbuktu.",
        why: "Mali's decline in the 15th century.",
        uncertain: "Rulers' names come from an unrated source. The sources I read do not describe Songhai's end.",
        evidence: "reconstructed", features: [tim, pt("Gao", -0.0439, 16.2719, "site", "approximate", "attested", "Songhai centre; marker approximate.")],
        relatedSites: ["timbuktu"], sources: ["brit-mali-precolonial", "sudan-times-trade", "brit-islamic-saharan"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover the Swahili coast and Indian Ocean trade, Great Zimbabwe, Ethiopia, the Hausa states, Benin, Kongo, the Atlantic slave trade or African societies without large states. The searches I ran for the Swahili coast returned nothing usable.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "Africa's history is not represented by three Sahelian empires.",
        uncertain: "Several statements in this tour rest on unrated websites and should be checked against specialist history before publication.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-islamic-saharan"]
      }
    ]
  });
})();
