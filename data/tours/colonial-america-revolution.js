(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "colonial-america-revolution",
    regions: ["North America"],
    category: "political",
    title: "Colonial America and the Revolution, 1606–1787",
    description: "From the Virginia Company's charter and Jamestown to the end of the French and Indian War, the Proclamation of 1763, the American Revolution and the Constitution. It covers the arrival of the first Africans in Virginia and the colonists' relations with Indigenous peoples where the sources do.",
    scope: "The thirteen British colonies and the Ohio country",
    span: "1606 to 1787 CE",
    tags: ["Jamestown", "slavery", "French and Indian War", "Proclamation of 1763", "Revolution", "Constitution"],
    chapters: [
      {
        id: "jamestown", title: "Jamestown and the Virginia Company (1606–1619)", subject: "Chartered colony",
        date: { start: 1606, end: 1619, kind: "period" }, camera: { center: [-76.78, 37.21], zoom: 7 },
        text: "King James I chartered the Virginia Company in April 1606 to colonise the east coast of North America between 34° and 41° N. In May 1607 the colonists founded Jamestown at the mouth of the James River, the first permanent English settlement in North America. In 1619 the company established continental America's first true legislature, the bicameral General Assembly.",
        what: "A trading company plants a permanent English colony.",
        where: "Jamestown, near Williamsburg, Virginia.",
        why: "A commercial charter, with shareholders in London.",
        uncertain: "The sources I read do not describe relations with the Powhatan peoples, who already lived there, or the colony's early deaths, so this chapter does not.",
        evidence: "attested", features: [pt("Jamestown", -76.7787, 37.2095, "site", "approximate", "attested", "First permanent English settlement, 1607.")],
        relatedSites: [], sources: ["brit-jamestown", "brit-virginia-company"]
      },
      {
        id: "1619", title: "The first Africans in Virginia (1619)", subject: "Beginning of slavery in English America",
        date: { start: 1619, end: 1619, kind: "event" }, camera: { center: [-76.3, 37.0], zoom: 8 },
        text: "In late August 1619 the English warship White Lion arrived at Point Comfort (now Hampton, Virginia) with 'twenty and odd' captive Africans, whom the National Park Service says had been taken from a Portuguese slave ship, the San Juan Bautista, as it carried them toward Mexico. They were sold for food and some were transported to Jamestown. Britannica calls this the beginning of slavery in English America, with a lasting impact on the history of the United States. The Park Service adds that as an institution, slavery did not yet exist in Virginia in 1619.",
        what: "The first recorded arrival of enslaved Africans in the English colony.",
        where: "Point Comfort, Hampton, and Jamestown.",
        why: "The sources I read do not explain why the colony turned to slavery, so I do not.",
        uncertain: "John Rolfe's own account says a Dutch ship brought them, while the Park Service says it was the English warship White Lion carrying a letter of marque, per later research. Wikipedia says they were from the Mbundu people of present-day Angola. Whether slavery 'began' in 1619 is itself a framing: the Park Service says the institution did not yet exist.",
        evidence: "attested", features: [pt("Point Comfort (Hampton)", -76.3, 37.0, "site", "approximate", "attested", "Where the first Africans landed.")],
        alternatives: [{ label: "Rolfe's account", text: "John Rolfe's contemporary record describes a Dutch man-of-war; later research identified the White Lion.", sources: ["nps-african-americans-jamestown"] }],
        relatedSites: [], sources: ["nps-african-americans-jamestown", "encva-first-africans", "wiki-first-africans-virginia", "brit-jamestown"]
      },
      {
        id: "french-indian-war", title: "The French and Indian War (1754–1763)", subject: "Imperial war",
        date: { start: 1754, end: 1763, kind: "war" }, camera: { center: [-78.0, 42.0], zoom: 4.8 },
        text: "Britannica calls the French and Indian War the American phase of a worldwide war fought between France and Great Britain from 1754 to 1763. It determined control of the vast colonial territory of North America. In the Treaty of Paris, signed on 10 February 1763, France renounced to Britain all the mainland of North America east of the Mississippi except New Orleans and its environs, and Spain received Louisiana in compensation. Spain ceded the Floridas to Britain. The Canadian Encyclopedia says the treaty 'created the basis for the modern country of Canada'.",
        what: "France loses its North American empire.",
        where: "The Ohio Valley, the St Lawrence and the Mississippi.",
        why: "Britannica says the war determined control of the vast colonial territory of North America.",
        uncertain: "Treaty summaries differ slightly on which territories went where; this chapter follows Britannica and the State Department. The Indigenous allies on both sides are only named, not described.",
        evidence: "attested", features: [circ("Ohio Valley (broad region)", -81.0, 40.0, 300, "conflict", "regional", "attested", "Where the war began; broad region only.")],
        relatedSites: [], sources: ["brit-french-indian-war", "state-treaty-paris-1763", "brit-treaty-paris-1763", "canadian-enc-paris-1763", "wiki-french-indian-war"]
      },
      {
        id: "proclamation", title: "The Proclamation of 1763", subject: "Imperial frontier policy",
        date: { start: 1763, end: 1763, kind: "event" }, camera: { center: [-82.0, 38.0], zoom: 4.5 },
        text: "Issued on 7 October 1763 by King George III, the Proclamation of 1763 was meant to conciliate Native Americans by checking the encroachment of settlers on their lands after Pontiac's War began. It organised new British provinces (Quebec, East and West Florida and Grenada), created a large British-administered Native American reservation west of the Appalachians, and forbade settlement there. For the first time in the history of European colonisation in the New World, Britannica says, it formalised the concept of Native American land titles, prohibiting patents on tribal lands unless title had first been extinguished by purchase or treaty.",
        what: "Britain tries to stop westward settlement.",
        where: "West of the Appalachians.",
        why: "To end frontier violence and abuses, per Britannica.",
        uncertain: "Britannica says the proclamation was offensive to the colonies as undue interference and that settlers' disregard of it brought decades of continued Indigenous warfare. Wikipedia notes it also affected French Catholic Canadians. How far it caused the Revolution is a matter of interpretation that the sources I read do not settle.",
        evidence: "attested", features: [line("Appalachian limit of the 1763 reservation (schematic)", [[-84.0, 35.5], [-78.5, 41.0]], "direct", "illustrative", "reconstructed", "A schematic line along the Appalachians. The actual proclamation line is not drawn.")],
        relatedSites: [], sources: ["brit-proclamation-1763", "wiki-french-indian-war"]
      },
      {
        id: "revolution", title: "The American Revolution (1775–1783)", subject: "Colonial revolt becoming a republic",
        date: { start: 1775, end: 1783, kind: "war" }, camera: { center: [-76.0, 39.5], zoom: 5 },
        text: "Britannica says 13 of Britain's North American colonies rejected British rule between 1775 and 1783 and founded the United States, with the Declaration of Independence in 1776. It names as the principal cause colonial opposition to British attempts to impose greater control and to make the colonies repay the crown for their defence in the French and Indian War. The Continental Congress approved the Declaration on 4 July 1776. Britannica says the French navy played a key role in bringing about the British surrender at Yorktown, which effectively ended the war, and the peace was formalised in the Treaty of Paris of 1783.",
        what: "A colonial revolt produces a new state.",
        where: "The thirteen colonies; Yorktown, Virginia.",
        why: "Opposition to British control and taxation, per Britannica.",
        uncertain: "'Principal cause' is Britannica's summary; historians weigh economic, ideological and political causes differently. The sources I read do not describe the role of enslaved people, women, Loyalists or Indigenous nations in the war.",
        evidence: "attested", features: [pt("Yorktown", -76.5, 37.24, "conflict", "approximate", "attested", "British surrender, 1781; marker approximate."), pt("Philadelphia", -75.1652, 39.9526, "site", "approximate", "attested", "Where the Continental Congress met.")],
        relatedSites: [], sources: ["brit-american-revolution", "brit-revolution-study"]
      },
      {
        id: "constitution", title: "The Constitution (1787–1788)", subject: "Federal republic",
        date: { start: 1787, end: 1788, kind: "event" }, camera: { center: [-75.2, 39.9], zoom: 6 },
        text: "Britannica notes that the first U.S. constitution, the Articles of Confederation (1781–89), served as a bridge between the Revolutionary government and the federal government under the Constitution of 1787. Delaware was the first state to ratify the Constitution, on 7 December 1787.",
        what: "A weak confederation is replaced by a federal government.",
        where: "Philadelphia, then the states.",
        why: "The sources I read do not explain why the Articles were replaced, so this chapter does not.",
        uncertain: "This chapter is thin: it does not describe the Convention, the compromises over slavery or the ratification debates, which I did not research.",
        evidence: "attested", features: [pt("Philadelphia", -75.1652, 39.9526, "site", "approximate", "attested", "Convention city.")],
        relatedSites: [], sources: ["brit-american-revolution", "brit-revolution-study"]
      }
    ]
  });
})();
