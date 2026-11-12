(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "canada-new-france",
    regions: ["North America"],
    category: "political",
    title: "New France and the British Conquest of Canada",
    description: "From Champlain's Quebec in 1608 to the British conquest of 1759–60, the Treaty of Paris of 1763 and the Quebec Act of 1774. It covers the French colony from the French perspective of the sources; Indigenous nations appear where the sources name them.",
    scope: "The St Lawrence valley and the Great Lakes",
    span: "1608 to 1774 CE",
    tags: ["New France", "Champlain", "Quebec", "Plains of Abraham", "Quebec Act"],
    chapters: [
      {
        id: "quebec", title: "Champlain founds Quebec (1608)", subject: "Colony of New France",
        date: { start: 1608, end: 1608, kind: "event" }, camera: { center: [-71.2, 46.8], zoom: 7 },
        text: "Britannica says permanent European colonisation began in 1608, when Samuel de Champlain founded a fort at Cape Diamond, the site of present-day Quebec City, then known as Stadacona. By the middle of the 17th century the French settlement's population was a modest 3,200.",
        what: "A fur-trade outpost becomes a permanent French settlement.",
        where: "Cape Diamond, at Quebec City.",
        why: "The sources I read do not explain the founding's purpose.",
        uncertain: "The place had an Indigenous name (Stadacona), but the sources I read say nothing about the people who lived there or their relations with Champlain.",
        evidence: "attested", features: [pt("Quebec City", -71.2082, 46.8139, "site", "approximate", "attested", "Founded 1608.")],
        relatedSites: [], sources: ["brit-quebec-history"]
      },
      {
        id: "conquest", title: "The Battle of Quebec and the conquest (1759–1760)", subject: "Imperial war",
        date: { start: 1759, end: 1760, kind: "war" }, camera: { center: [-71.2, 46.8], zoom: 7 },
        text: "On 13 September 1759 a British force under James Wolfe defeated the French under the marquis de Montcalm on the Plains of Abraham. The battle lasted less than an hour, and both commanders died of their wounds. Montreal surrendered to the British on 8 September 1760. Britannica says the battle led to British control of Canada and indirectly to the American Revolution and the Loyalist migration north.",
        what: "Britain takes Quebec and then all of New France.",
        where: "The Plains of Abraham at Quebec; Montreal.",
        why: "Quebec was the French stronghold.",
        uncertain: "'Indirectly led to the American Revolution' is Britannica's claim and is an interpretation. Casualty figures and the Indigenous allies' role are not covered in the sources I read.",
        evidence: "attested", features: [pt("Plains of Abraham", -71.2108, 46.8008, "conflict", "approximate", "attested", "Battle site at Quebec City."), pt("Montreal", -73.5673, 45.5017, "conflict", "approximate", "attested", "Surrendered 8 September 1760.")],
        relatedSites: [], sources: ["brit-battle-quebec"]
      },
      {
        id: "treaty", title: "The Treaty of Paris and the Proclamation (1763)", subject: "Cession",
        date: { start: 1763, end: 1763, kind: "event" }, camera: { center: [-72.0, 47.0], zoom: 4.5 },
        text: "By the Treaty of Paris of 10 February 1763, France ceded New France to Britain. The Canadian Encyclopedia says it 'created the basis for the modern country of Canada'. Britain guaranteed French Canadians limited freedom of worship, and gave them 18 months to emigrate if they chose; France kept fishing rights and the islands of Saint-Pierre and Miquelon. The Proclamation of 1763 created the province of Quebec among the new British territories.",
        what: "A French colony becomes a British province.",
        where: "The St Lawrence valley.",
        why: "Britain's victory in the Seven Years' War.",
        uncertain: "Wikipedia says the Proclamation also had provisions preventing Roman Catholic Canadians from participating in civic life, which the Canadian Encyclopedia's guarantee of limited worship does not mention.",
        evidence: "attested", features: [pt("Quebec City", -71.2082, 46.8139, "site", "approximate", "attested", "Capital of the new province.")],
        relatedSites: [], sources: ["canadian-enc-paris-1763", "brit-proclamation-1763", "wiki-french-indian-war"]
      },
      {
        id: "quebec-act", title: "The Quebec Act (1774)", subject: "Accommodation of a conquered colony",
        date: { start: 1774, end: 1774, kind: "event" }, camera: { center: [-77.0, 46.0], zoom: 4.2 },
        text: "To maintain the allegiance of the French Catholic colony of Quebec by appealing to its religious leaders, the British government enacted the Quebec Act in 1774. Britannica says it let Catholics practise their religion freely, legitimised the French seigneurial system, acknowledged the French civil code, and expanded Quebec's borders into the Ohio and Mississippi valleys to accommodate fur traders and preserve relations with Indigenous peoples.",
        what: "Britain accepts French law and religion in Quebec.",
        where: "Quebec, including the Ohio and Mississippi valleys.",
        why: "To keep Quebec's loyalty as tension with the thirteen colonies grew.",
        uncertain: "The act's effect on the thirteen colonies is not described in the sources I read. Indigenous reactions to the border expansion are not described either.",
        evidence: "attested", features: [pt("Quebec City", -71.2082, 46.8139, "site", "approximate", "attested", "Colonial capital.")],
        relatedSites: [], sources: ["brit-quebec-history"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover Acadia, the Indigenous nations of New France (Wendat, Algonquin, Mi'kmaq and others), the fur trade, the Catholic Church, the seigneurial system in detail, the Loyalists or the War of 1812.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "Each needs its own sources.",
        uncertain: "The tour rests largely on Britannica and the Canadian Encyclopedia.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing omissions; it makes no new historical claims."
      }
    ]
  });
})();
