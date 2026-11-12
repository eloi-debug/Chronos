(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "british-empire-2",
    category: "political",
    title: "The British Empire II: famine, opium and the costs of rule",
    description: "Three episodes from the British Empire's record that the first tour left out: the Great Irish Famine (1845–52), the First Opium War and the cession of Hong Kong (1839–42), and the Bengal famine of 1943. It states the death tolls and the debates over responsibility as the sources give them. It is still a selection, not a history of the empire.",
    scope: "Ireland, China and Bengal",
    span: "1801 to 1943 CE",
    tags: ["British Empire", "Ireland", "Great Famine", "Opium War", "Hong Kong", "Bengal famine"],
    chapters: [
      {
        id: "ireland", title: "Ireland: union and the Great Famine (1801–1852)", subject: "Part of the United Kingdom, governed from London",
        date: { start: 1845, end: 1852, kind: "famine years" }, camera: { center: [-8.0, 53.3], zoom: 5.5 },
        text: "Ireland was incorporated into the United Kingdom in January 1801 under the Acts of Union. In 1845 a potato blight began to destroy the crop on which about a third of Ireland's population depended. Britannica says about one million people died of starvation and disease and perhaps two million more emigrated, and Ireland's population fell from almost 8.4 million in 1844 to 6.6 million by 1851. The UK Parliament's account describes Peel buying £100,000 of Indian corn in 1845, then Russell's government limiting relief under laissez-faire principles, with Charles Trevelyan directing the effort and placing the financial burden on Irish landowners, who in turn evicted tenants.",
        what: "A famine in part of the UK, handled by a government that limited aid.",
        where: "All of Ireland, with the west and south hit hardest.",
        why: "Blight destroyed the crop; the UK Parliament page and RTÉ stress that relief policy shaped the outcome.",
        uncertain: "Death tolls vary: about 1 million (Britannica, UK Parliament), 775,000 to 1.5 million (Wikipedia). Whether Ireland counts as part of 'the empire' is itself a question: legally it was part of the UK. Historians and museums disagree on responsibility, for example over food exports and over the earlier policy of closing ports in 1782–84, which one unrated museum page contrasts with 1846–47.",
        evidence: "attested", features: [pt("Dublin", -6.2603, 53.3498, "site", "approximate", "attested", "Seat of the Lord Lieutenant."), pt("Cork", -8.4756, 51.8985, "site", "approximate", "attested", "Port to which Peel's Indian corn was shipped.")],
        alternatives: [
          { label: "A policy failure", text: "The JSTOR book description says attempts to deal with the humanitarian crisis were muddled by competing economic and social goals, hampered by long-standing prejudice and Anglo-Irish tensions.", sources: ["jstor-famine"] },
          { label: "Early response prompt", text: "Wikipedia reports that F. S. L. Lyons characterised the initial response to the early, less severe phase of the famine as prompt and relatively successful.", sources: ["wiki-great-famine"] }
        ],
        relatedSites: [], sources: ["uk-parl-famine", "brit-great-famine", "rte-famine", "wiki-great-famine", "ighm-famine"]
      },
      {
        id: "opium", title: "The First Opium War and Hong Kong (1839–1842)", subject: "Imperial war and unequal treaty",
        date: { start: 1839, end: 1842, kind: "war" }, camera: { center: [114.5, 28.0], zoom: 4.5 },
        text: "The First Opium War between Britain and Qing China ended with the Treaty of Nanjing, signed on 29 August 1842, the first of the 'unequal treaties'. China ceded Hong Kong Island, paid an indemnity of $21 million, opened five ports (including Shanghai) and abolished the cohong system of controlled trade. A supplementary treaty of 1843 let British citizens be tried in British courts. Britannica adds that after the war Britain remained dissatisfied: opium stayed illegal in China but British merchants kept smuggling it.",
        what: "A war over trade ends with territory, money and legal privileges for Britain.",
        where: "Guangzhou (Canton), Nanjing, Shanghai and Hong Kong Island.",
        why: "The sources I read describe the settlement and its terms, and say little about the war's origins or the opium trade's scale.",
        uncertain: "The war's causes and the ethics of the opium trade are not explained in the excerpts I read, so this chapter does not assess them. Wikipedia says British forces raised the flag over Hong Kong in January 1841, before the treaty; the cession date is conventionally 1842.",
        evidence: "attested", features: [pt("Nanjing", 118.7969, 32.0603, "conflict", "approximate", "attested", "Where the treaty was signed aboard HMS Cornwallis."), pt("Hong Kong Island", 114.1694, 22.3193, "occupation", "approximate", "attested", "Ceded to Britain; handed back in 1997."), pt("Shanghai", 121.4737, 31.2304, "influence", "approximate", "attested", "One of the five treaty ports.")],
        relatedSites: [], sources: ["brit-nanjing", "brit-first-opium", "brit-china-opium", "wiki-first-opium", "wiki-nanking"]
      },
      {
        id: "bengal", title: "The Bengal famine (1943)", subject: "Wartime colonial government",
        date: { start: 1943, end: 1944, kind: "famine" }, camera: { center: [88.5, 23.0], zoom: 5.5 },
        text: "A famine in Bengal in 1943 killed about three million people according to Britannica, mostly by malnutrition and disease. Britannica says it did not coincide with a significant fall in food production. After Burma fell to Japan in 1942, rice imports stopped and a cyclone damaged the crop. British authorities, fearing invasion, stockpiled food for troops, exported quantities to British forces in the Middle East and confiscated boats and other transport in Chittagong. Britannica says the government's failure to halt rice exports or seek relief supplies turned this into a disaster.",
        what: "A famine happens without a harvest failure, in wartime, under colonial rule.",
        where: "Bengal, in eastern British India (now West Bengal and Bangladesh).",
        why: "Britannica and BBC point to wartime policies, inflation and hoarding; Wikipedia cites research that British policies under Churchill significantly contributed.",
        uncertain: "Estimates run from 800,000 to 3.8 million (Wikipedia) to about three million (Britannica, BBC). Wikipedia notes that the causes have been debated for decades, including natural forces, market failures, wartime priorities and the allocation of shipping. I have not read the primary documents.",
        evidence: "attested", features: [pt("Kolkata (Calcutta)", 88.3639, 22.5726, "site", "approximate", "attested", "Largest city; rationed while rural areas were not, per one unrated source."), pt("Chittagong", 91.8, 22.35, "occupation", "approximate", "attested", "Where boats and carts were confiscated; marker approximate.")],
        alternatives: [
          { label: "Mainly wartime policy failures", text: "Britannica, the BBC and Explaining History describe British denial policies, exports and slow relief as central.", sources: ["brit-bengal-famine", "bbc-bengal-famine", "explaininghistory-bengal"] },
          { label: "Complex and still debated", text: "Wikipedia lists natural disasters, the loss of Burmese rice, inflation, hoarding and shipping priorities alongside policy, and notes the debate over culpability continues.", sources: ["wiki-bengal-famine"] }
        ],
        relatedSites: [], sources: ["brit-bengal-famine", "bbc-bengal-famine", "wiki-bengal-famine", "explaininghistory-bengal"]
      },
      {
        id: "gaps", title: "What this tour still leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "These three episodes are a selection. The sources I searched for the American colonies, the Caribbean economy after abolition, the settler colonies and Indigenous peoples, the Middle East mandates, Kenya and the end of empire elsewhere returned too little to build chapters on.",
        what: "States the remaining gaps.",
        where: "Not mapped.",
        why: "A short sourced tour is more reliable than a long thin one.",
        uncertain: "Adding more chapters is a research task, not a writing one. The first British Empire tour covers India, abolition, Africa, Partition, Suez and Hong Kong.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing what the tour does not cover; it makes no historical claims."
      }
    ]
  });
})();
