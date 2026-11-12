(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "british-empire",
    category: "political",
    title: "The British Empire: trade, rule, abolition and decolonisation",
    description: "A selective tour of how a trading company became a ruler in India, how Britain ended slavery in its colonies, how the empire expanded in Africa and reached its peak, and how it contracted after 1947. It covers violence and exploitation as well as administration, and it lists plainly what it leaves out.",
    scope: "South Asia, the Caribbean, Africa, Egypt, East Asia (selective)",
    span: "1600 to 1997 CE",
    tags: ["British Empire", "East India Company", "Raj", "abolition", "decolonisation", "partition"],
    chapters: [
      {
        id: "company", title: "A trading company turns into a ruler (1600–1765)", subject: "Chartered trading company becomes a territorial power",
        date: { start: 1600, end: 1765, kind: "period" }, year: 1757, camera: { center: [88.3, 23.5], zoom: 5.5 },
        text: "The East India Company was founded in 1600 to trade in the Indian Ocean. On 23 June 1757 its forces under Robert Clive defeated the Nawab of Bengal at Plassey, helped by the betrayal of the nawab's commander, Mir Jafar. The Company installed Mir Jafar as nawab, and in 1765 it obtained the diwani, the right to collect Bengal's revenue, from the Mughal emperor.",
        what: "A company with armies gains control of a wealthy region and its taxes.",
        where: "Bengal, around Plassey and Calcutta (Kolkata).",
        why: "Britannica says the Company's transformation into a colonial power began with Plassey. The wider setting was Anglo-French rivalry in the Seven Years' War.",
        uncertain: "Accounts differ on the battle's size, but they agree that betrayal rather than overwhelming force decided it. The date of 'beginning of British rule' is a convention: Wikipedia credits Plassey with de facto control of Bengal and gives 1773 for complete control.",
        evidence: "attested", features: [pt("Plassey (Palashi)", 88.25, 23.8, "conflict", "approximate", "attested", "Battle site on the Hooghly River; coordinates from Wikipedia's infobox, approximate."), pt("Kolkata (Calcutta)", 88.3639, 22.5726, "site", "approximate", "attested", "Company base; Fort William.")],
        relatedSites: [], sources: ["brit-eic", "brit-plassey", "nam-plassey", "wiki-eic"]
      },
      {
        id: "company-rule", title: "Company rule and the Crown takeover (1765–1858)", subject: "Company rule alongside treaty-bound princely states",
        date: { start: 1765, end: 1858, kind: "period" }, camera: { center: [79.0, 22.0], zoom: 3.8 },
        text: "The Company consolidated Bengal and Bihar after the Battle of Buxar in 1764, defeated Tipu Sultan in 1799 and won the Second Sikh War in 1848–49. Its commercial monopoly was broken in 1813, and from 1834 it was just a managing agency for the British government of India. By 1858 most of modern India, Pakistan and Bangladesh, plus Lower Burma, was ruled by the Company or by princely states tied to it by treaties. After the Indian Rebellion of 1857 the Government of India Act of 1858 gave the Crown direct control.",
        what: "Control grows from one region to most of the subcontinent, then passes from the Company to the Crown.",
        where: "Bengal and Bihar, southern India, Punjab, and later the whole subcontinent.",
        why: "The National Army Museum says the British used the revenues and military strength gained in Bengal to push out their European rivals, the French and the Dutch, from the rest of India.",
        uncertain: "The map does not separate directly ruled territory from princely states, though the sources say both existed. The causes and course of the 1857 rebellion are not covered here.",
        evidence: "attested", features: [circ("South Asia under Company or treaty-tied rulers (broad region)", 80.0, 22.0, 1200, "influence", "regional", "reconstructed", "Very broad area. Direct rule and princely states are not separated and no border is drawn.")],
        relatedSites: [], sources: ["brit-eic", "brit-plassey", "wiki-eic", "nam-plassey"]
      },
      {
        id: "abolition", title: "Ending the slave trade and slavery (1807–1840)", subject: "Imperial legislation",
        date: { start: 1807, end: 1840, kind: "period" }, camera: { center: [-72.0, 17.0], zoom: 4 },
        text: "Britain outlawed the slave trade in 1807. After the large Baptist War revolt in Jamaica in 1831, Parliament passed the Slavery Abolition Act of 1833, which took effect on 1 August 1834 and freed more than 800,000 enslaved Africans, mainly in the Caribbean and South Africa. In practice, enslaved people over six years old were made 'apprentices' who continued to serve their former owners for several years, and the Act paid compensation to the slave-owners.",
        what: "Slavery is outlawed in most British colonies, but on terms that favoured owners over the formerly enslaved.",
        where: "The Caribbean, South Africa and a small number in Canada.",
        why: "Britannica names changes in the British economy, the struggles of enslaved Africans and planters' fears of uprisings as factors in passing the act.",
        uncertain: "These sources describe abolition but not Britain's earlier role in the slave trade, so this chapter does not tell that story. The Act did not stop the trade elsewhere, as demand continued in places like Cuba and Brazil.",
        evidence: "attested", features: [circ("British Caribbean (broad region)", -72.0, 17.0, 900, "direct", "regional", "attested", "Broad region where most of the freed people lived; not a border.")],
        relatedSites: [], sources: ["brit-slavery-act", "libretexts-slavery"]
      },
      {
        id: "scramble", title: "The scramble for Africa (1882–1902)", subject: "Imperial expansion by treaty and force",
        date: { start: 1882, end: 1902, kind: "period" }, camera: { center: [25.0, -5.0], zoom: 2.8 },
        text: "In 1882 Britain began a military occupation of Egypt to protect its financial interests. At the Berlin Conference of 1884–85, held at Bismarck's invitation with no African representatives, European powers agreed a framework for recognising 'effective occupation' of territory. Historians now view it as a cover for profiteering and imperial ambition. In 1899 war broke out with the Boer republics, and the Peace of Vereeniging of 31 May 1902 put the Transvaal and Orange Free State under British administration.",
        what: "Most of Africa is claimed by European powers within a few decades, with Britain gaining many colonies.",
        where: "Egypt, southern Africa and the rest of the continent.",
        why: "Jealousy and suspicion between European powers, plus competing claims along the Congo and elsewhere.",
        uncertain: "The sources I read do not describe African resistance, the violence of conquest or colonial administration in detail.",
        evidence: "attested", features: [circ("Transvaal and Orange Free State (broad region)", 28.0, -27.0, 350, "conflict", "regional", "attested", "The Boer republics, annexed after the 1899–1902 war. Broad region only."), pt("Cape Town (Cape of Good Hope)", 18.4241, -33.9249, "site", "approximate", "attested", "Britain acquired the Cape in 1806."), pt("Egypt (Cairo)", 31.2357, 30.0444, "occupation", "approximate", "attested", "Occupied by Britain from 1882.")],
        relatedSites: [], sources: ["brit-berlin-conf", "brit-scramble", "brit-africa-timeline", "brit-empire"]
      },
      {
        id: "peak", title: "The empire at its largest (1913–1920)", subject: "Global empire of colonies, dominions and protectorates",
        date: { start: 1913, end: 1920, kind: "period" }, camera: { center: [30.0, 15.0], zoom: 2 },
        text: "By 1913 the British Empire ruled about 412 million people, 23 per cent of the world's population, and by 1920 it covered about 35.5 million square kilometres, or 24 per cent of the Earth's land. It included self-governing dominions such as Canada, Australia, New Zealand and South Africa, crown colonies in Africa, British India and parts of the Middle East.",
        what: "The empire reaches its greatest extent, mixing very different forms of rule.",
        where: "Worldwide.",
        why: "Earlier expansion in India, Africa and elsewhere, and gains after the First World War.",
        uncertain: "Figures differ by source: an unrated encyclopedia gives 470–570 million people and about a quarter of the world's population by 1921. The map shows no territory because the dominions, colonies and protectorates had very different degrees of self-rule and a single outline would mislead.",
        evidence: "reconstructed", features: [], relatedSites: [],
        alternatives: [{ label: "Other estimates", text: "New World Encyclopedia gives 470 to 570 million people by 1921.", sources: ["nwe-empire"] }],
        sources: ["wiki-british-empire", "hs-empire-size", "nwe-empire"]
      },
      {
        id: "partition", title: "Independence and Partition (1947)", subject: "Decolonisation by partition",
        date: { start: 1947, end: 1947, kind: "event" }, camera: { center: [75.0, 28.0], zoom: 4.5 },
        text: "The British Parliament passed the Indian Independence Act on 18 July 1947, dividing British India into the dominions of India and Pakistan, and the partition of Punjab and Bengal. It took effect on 15 August 1947, and the Radcliffe Line was published on 17 August. The partition caused immense communal violence and displaced about 15 million Hindus, Muslims and Sikhs. Burma and Ceylon followed in 1948 and Malaya in 1957.",
        what: "British rule ends in South Asia with a division that caused one of history's largest displacements.",
        where: "Punjab and Bengal, divided between India and Pakistan (East Pakistan is now Bangladesh).",
        why: "CVCE says the postwar British government lacked the means for a new colonial war, and the dispute between Congress and the Muslim League over unity versus a separate Muslim state escalated into violence.",
        uncertain: "Estimates of the dead are not given in these sources, so none is quoted. The Radcliffe Line is not drawn on this map because I did not use a source with its coordinates.",
        evidence: "attested", features: [pt("New Delhi", 77.209, 28.6139, "site", "approximate", "attested", "Capital of independent India."), pt("Lahore", 74.3587, 31.5204, "site", "approximate", "attested", "Punjab city on the new border region; marker approximate.")],
        relatedSites: [], sources: ["brit-partition", "brit-india-transfer", "cvce-decolonisation"]
      },
      {
        id: "suez", title: "Suez: the limits of British power (1956)", subject: "Failed military intervention",
        date: { start: 1956, end: 1957, kind: "event" }, year: 1956, camera: { center: [32.3, 31.0], zoom: 6 },
        text: "On 26 July 1956 Egypt's president Nasser nationalised the Suez Canal, which was controlled by British and French interests. Britain and France secretly agreed with Israel that Israel would invade Egypt and they would intervene as peacemakers. After Israel invaded on 29 October, British and French forces landed at Port Said on 5–6 November. Opposition at home, US-sponsored UN resolutions and Soviet threats stopped the operation, and the UN evacuated the troops by 22 December.",
        what: "Britain and France fail to retake the canal and lose influence in the Middle East.",
        where: "The Suez Canal and Port Said.",
        why: "Britain and France feared losing the oil route and wanted to remove Nasser.",
        uncertain: "The secret agreement is documented by BBC History and Britannica's account of the plan. The sources I read do not cover Britain's other late-colonial conflicts.",
        evidence: "attested", features: [pt("Port Said", 32.3019, 31.2653, "conflict", "approximate", "attested", "Landing site of British and French forces in November 1956.")],
        relatedSites: [], sources: ["brit-suez", "bbc-suez"]
      },
      {
        id: "hongkong", title: "Hong Kong and what this tour leaves out (1997)", subject: "End of the last major colony",
        date: { start: 1997, end: 1997, kind: "event" }, camera: { center: [114.17, 22.32], zoom: 7 },
        text: "On 1 July 1997 Hong Kong passed to Chinese sovereignty, ending 156 years of British rule. The handover followed the 1984 Sino-British Joint Declaration, which promised Hong Kong a high degree of autonomy under Chinese rule, except in foreign affairs and defence, for 50 years.",
        what: "The last major British colony is handed over by agreement.",
        where: "Hong Kong.",
        why: "The 1984 agreement set a 13-year transition.",
        uncertain: "This tour leaves out major subjects: the American colonies, Ireland, the Opium Wars, Australia, Canada and Indigenous peoples, the Caribbean's economies, famines such as Bengal in 1943, Middle Eastern mandates, Kenya, the Commonwealth, and the legacies of empire. Those need sources I have not read.",
        evidence: "attested", features: [pt("Hong Kong", 114.1694, 22.3193, "site", "approximate", "attested", "Handed over on 1 July 1997.")],
        relatedSites: [], sources: ["brit-hongkong"]
      }
    ]
  });
})();
