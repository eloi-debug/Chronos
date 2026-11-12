(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "canada-since-confederation",
    regions: ["North America"],
    category: "political",
    title: "Canada since Confederation: union, residential schools and constitution",
    description: "The union of 1867, the residential school system and the Truth and Reconciliation Commission, the patriation of the constitution in 1982 and the 1995 Quebec referendum. It covers constitutional and political milestones in outline and gives the residential schools their own chapters.",
    scope: "Canada",
    span: "1864 to 2015 CE",
    tags: ["Confederation", "residential schools", "Truth and Reconciliation", "Constitution Act 1982", "Quebec referendum"],
    chapters: [
      {
        id: "confederation", title: "Confederation (1864–1867)", subject: "Federal union of colonies",
        date: { start: 1864, end: 1867, kind: "process" }, camera: { center: [-75.0, 46.0], zoom: 4.5 },
        text: "Canadian Confederation united three British North American colonies, the Province of Canada, Nova Scotia and New Brunswick, into the Dominion of Canada on 1 July 1867. The process began with the Charlottetown Conference of 1864, and an agreement for a general federal union was reached at Quebec on 10 October 1864. Britannica says the aim was to strengthen the colonies economically and politically, especially in response to the growing influence of the United States, and the British government approved quickly, keen to relieve itself of the burden of defending them. The British North America Act, passed on 29 March 1867, created four provinces: Ontario, Quebec, Nova Scotia and New Brunswick.",
        what: "Three colonies join as a federal dominion.",
        where: "Charlottetown, Quebec, London and Ottawa.",
        why: "Economic and defence reasons, according to Britannica.",
        uncertain: "The act was passed by the British Parliament, and Indigenous peoples were not parties to it. Quebec's constitutional protections for French language and law are mentioned by Britannica, but how they were negotiated is not described in the excerpts I read.",
        evidence: "attested", features: [pt("Charlottetown", -63.1311, 46.2382, "site", "approximate", "attested", "1864 conference."), pt("Quebec City", -71.2082, 46.8139, "site", "approximate", "attested", "1864 agreement.")],
        relatedSites: [], sources: ["brit-confederation", "brit-bna-act", "brit-canada-union", "justice-bna-act", "wiki-confederation"]
      },
      {
        id: "residential-schools", title: "Residential schools (1867–2000)", subject: "State assimilation policy",
        date: { start: 1867, end: 2000, kind: "period" }, camera: { center: [-100.0, 55.0], zoom: 3 },
        text: "The JSTOR description of the Truth and Reconciliation Commission's report says that between 1867 and 2000 the Canadian government sent over 150,000 Aboriginal children to residential schools across the country. Legal action by former students led to the creation of the Truth and Reconciliation Commission in 2008. The Commission's final report, based on over six years of research, sets out the history and legacy of the schools.",
        what: "Children are removed from their families to government-funded schools.",
        where: "Across Canada.",
        why: "The Commission's calls to action seek to redress the schools' legacy, but the excerpts I read do not state the policy's purposes, so I do not.",
        uncertain: "I read only publisher and government descriptions of the report, not the report itself. The numbers of children who died or went missing are covered in the report's Volume 4, which I did not read, so none is stated here.",
        evidence: "attested", features: [circ("Canada (broad region)", -100.0, 55.0, 2000, "direct", "regional", "attested", "Schools operated across the country; no school locations are drawn.")],
        relatedSites: [], sources: ["jstor-trc", "pm-trc"]
      },
      {
        id: "trc", title: "Truth and Reconciliation (2008–2015)", subject: "Commission and calls to action",
        date: { start: 2008, end: 2015, kind: "process" }, camera: { center: [-97.0, 56.0], zoom: 3 },
        text: "At the Closing Event in June 2015 the Truth and Reconciliation Commission released its Executive Summary, findings and 94 Calls to Action aimed at redressing the legacy of residential schools and advancing reconciliation. The Prime Minister's backgrounder says the Government of Canada committed on 15 December 2015 to work with Indigenous communities, provinces and partners to fully implement the recommendations, starting with the United Nations Declaration on the Rights of Indigenous Peoples. The Commission urged Canada to adopt that declaration as a framework for reconciliation.",
        what: "A commission documents the schools and issues 94 calls to action.",
        where: "Canada.",
        why: "Legal action by former students led to the Commission.",
        uncertain: "This tour does not assess how far the calls to action have been carried out; the sources I read are from 2015 and do not cover later years.",
        evidence: "attested", features: [], relatedSites: [], sources: ["pm-trc", "jstor-trc"]
      },
      {
        id: "patriation", title: "Patriation and the Charter (1982)", subject: "Constitutional independence",
        date: { start: 1980, end: 1982, kind: "process" }, camera: { center: [-75.7, 45.4], zoom: 5 },
        text: "The Constitution Act, 1982 (approved by the British Parliament on 25 March and proclaimed on 17 April 1982) gave Canada full independence by ending British control of its constitution and letting it amend the constitution without approval from Britain. It enacted the Canadian Charter of Rights and Freedoms and an amending formula. The Canadian Encyclopedia says the turning point came with the Quebec referendum of May 1980. Quebec's separatist government protested and went to the courts, but Britannica says the Supreme Court of Canada decisively rejected Quebec's claim to a constitutional veto on 6 December 1982.",
        what: "Canada takes control of its own constitution and adds a Charter of Rights.",
        where: "Ottawa and London.",
        why: "Pierre Trudeau promised after the 1980 referendum to reopen constitutional negotiations.",
        uncertain: "Britannica says the Quebec government and its people were deeply divided about the new constitution. The sources I read do not describe how the Quebec government's objections were later resolved.",
        evidence: "attested", features: [pt("Ottawa", -75.6972, 45.4215, "site", "approximate", "attested", "Capital.")],
        relatedSites: [], sources: ["brit-canada-act", "canadian-enc-const-1982", "brit-quebec-quiet-revolution"]
      },
      {
        id: "referendum", title: "The 1995 Quebec referendum", subject: "Sovereignty referendum",
        date: { start: 1995, end: 1995, kind: "event" }, camera: { center: [-72.0, 52.0], zoom: 3.6 },
        text: "On 30 October 1995 Quebec voters narrowly rejected a proposal that Quebec become sovereign while seeking a new economic and political partnership with Canada, with the 'no' side prevailing by about 1 per cent, fewer than 55,000 votes. Britannica says the failure of the Meech Lake Accord (1987) and the Charlottetown Accord (1992) formed the background. Afterwards the Canadian government passed a resolution recognising Quebec as a distinct society. The Supreme Court of Canada ruled that Quebec could not secede unilaterally but that the government would be obliged to negotiate secession if a clear majority voted for it.",
        what: "Canada narrowly avoids the secession of Quebec.",
        where: "Quebec.",
        why: "Britannica names the failed constitutional accords as background.",
        uncertain: "'Distinct society' is Britannica's wording of the resolution. The sources I read do not describe the campaign, the role of Indigenous nations in Quebec, or the 1980 referendum beyond naming it.",
        evidence: "attested", features: [circ("Quebec (broad region)", -72.0, 52.0, 600, "influence", "regional", "attested", "Broad region; not a border.")],
        relatedSites: [], sources: ["brit-quebec-referendum-1995", "brit-quebec-quiet-revolution"]
      },
      {
        id: "gaps", title: "What this tour leaves out", subject: "Scope note",
        date: null, camera: null,
        text: "This tour does not cover the western provinces and the 1885 Northwest Resistance, the First and Second World Wars, immigration, the Great Depression, the October Crisis, multiculturalism and bilingualism, treaties and land claims, or Canada's role in the world.",
        what: "Lists the omissions.",
        where: "Not mapped.",
        why: "Each needs its own sources.",
        uncertain: "The tour is a selection of constitutional and reconciliation milestones, not a general history of Canada.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: [], noSourcesReason: "Scope note listing omissions; it makes no new historical claims."
      }
    ]
  });
})();
