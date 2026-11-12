(function () {
  const { B, pt, circ, line } = window.TourKit;
  const pata = pt("Pataliputra (Patna)", 85.1376, 25.5941, "site", "approximate", "attested", "Mauryan capital, near the junction of the Son and Ganges.");
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "mauryan-empire",
    category: "political",
    title: "The Mauryan Empire: the first empire of the subcontinent",
    description: "How Chandragupta Maurya built an empire after Alexander's death, how Ashoka's conquest of Kalinga led him to a new state ideology, how the empire was run, and why it broke up. The Buddhism tour covers Ashoka's role as a patron of Buddhism.",
    scope: "The Indian subcontinent",
    span: "c. 321 to 185 BCE",
    tags: ["Mauryan", "Chandragupta", "Ashoka", "Arthashastra", "Pataliputra"],
    chapters: [
      {
        id: "chandragupta", title: "Chandragupta builds an empire (after 323 BCE)", subject: "Founding of the dynasty",
        date: { start: B(321), end: B(298), kind: "approximate" }, camera: { center: [78.0, 28.0], zoom: 4.3 },
        text: "Britannica says that after Alexander the Great died in 323 BCE, Chandragupta Maurya, founder of the Mauryan dynasty, conquered the Punjab region from the southeastern edges of Alexander's former empire. With peace on his western border he turned east and south, and by the end of his reign he had extended his empire across northern India. The empire was centred at Pataliputra, near the junction of the Son and Ganges rivers.",
        what: "A new dynasty takes over northern India.",
        where: "The Punjab, then the Ganges plain, with Pataliputra as capital.",
        why: "Alexander's death left a power vacuum on the north-western frontier.",
        uncertain: "Britannica gives the empire as lasting from about 321 to 185 BCE; the end of Chandragupta's reign (298 BCE) is my approximation, since the sources I read do not give it.",
        evidence: "reconstructed", features: [pata, circ("Punjab (broad region)", 74.5, 31.0, 200, "direct", "regional", "reconstructed", "Region taken from Alexander's former empire; not a border.")],
        relatedSites: [], sources: ["brit-mauryan"]
      },
      {
        id: "ashoka", title: "Ashoka, Kalinga and dharma (c. 265–232 BCE)", subject: "Imperial state with a moral ideology",
        date: { start: B(273), end: B(232), kind: "reign (sources differ)" }, camera: { center: [82.0, 20.0], zoom: 4.5 },
        text: "Chandragupta's son Bindusara continued the expansion into the Deccan, stopping around present-day Karnataka. Bindusara's son Ashoka (reigned c. 265–238 or c. 273–232 BCE) added Kalinga. Britannica says the brutal conquest led Ashoka to abandon military conquest, embrace Buddhism and institute dharma as the state ideology. Britannica notes that the empire was the first to encompass most of the Indian subcontinent.",
        what: "The empire reaches its largest extent and then changes its stated purpose.",
        where: "From the Deccan to Kalinga on the east coast.",
        why: "Britannica gives the conquest of Kalinga as the cause.",
        uncertain: "Sources differ on Ashoka's reign (265–238 or 273–232 BCE). His edicts are primary sources, but they are public statements by the king. The Spread of Buddhism tour covers his patronage of Buddhism.",
        evidence: "attested", features: [pata, circ("Kalinga (broad region)", 85.5, 20.5, 160, "conflict", "regional", "attested", "Region added by Ashoka; broad region only.")],
        relatedSites: [], sources: ["brit-mauryan", "brit-ashoka-edicts"]
      },
      {
        id: "state", title: "How the empire was run", subject: "Autocracy with a bureaucracy",
        date: { start: B(321), end: B(185), kind: "period" }, camera: { center: [80.0, 24.0], zoom: 4.3 },
        text: "Britannica calls the Mauryan state an efficient and highly organised autocracy with a standing army and civil service, and says its bureaucracy was the model for the Artha-shastra, a work of political economy similar in tone to Machiavelli's The Prince. The Artha-shastra lists seven limbs of the state: the king, administration, territory, capital, treasury, coercive authority and allies. Britannica suggests the empire's population at about 50 million and says the state depended on danda (authority) and dharma, in the sense of social order and the preservation of caste.",
        what: "A bureaucratic state with an army, taxes and a political theory.",
        where: "Pataliputra and the empire's provinces.",
        why: "Revenue and military force held a very large territory together.",
        uncertain: "Britannica says it is extremely difficult to compute the population. The Artha-shastra describes an ideal of statecraft and is not a direct record of how the Mauryas governed; the sources I read do not address that.",
        evidence: "reconstructed", features: [pata], relatedSites: [], sources: ["brit-mauryan", "brit-ashoka-edicts"]
      },
      {
        id: "decline", title: "Why the empire broke up (after 232 BCE)", subject: "Fragmentation",
        date: { start: B(232), end: B(185), kind: "decline" }, camera: { center: [80.0, 24.0], zoom: 4.3 },
        text: "Britannica says that after Ashoka's death the empire shrank because of invasions, defections by southern princes and quarrels over succession. The last ruler, Brihadratha, was killed in 185 BCE by his Brahman commander in chief Pushyamitra, who founded the Shunga dynasty. Britannica's article on Ashoka's edicts rejects two older explanations: that his pro-Buddhist policy caused a Brahmin revolt, and that his non-violence weakened the army. It suggests the revenue from agriculture may not have kept pace with the empire's size. The empire's breakup gave rise to small regional kingdoms.",
        what: "Central power collapses into regional kingdoms.",
        where: "The whole empire.",
        why: "Britannica proposes multiple factors and rejects some traditional ones.",
        uncertain: "The financial explanation is stated as a possibility ('equally possible'). The sources I read do not describe the invasions in detail.",
        evidence: "disputed", features: [pata], relatedSites: [],
        alternatives: [
          { label: "Pro-Buddhist policy provoked a Brahmin revolt (rejected)", text: "Britannica says the edicts do not support this contention.", sources: ["brit-ashoka-edicts"] },
          { label: "Non-violence weakened the army (rejected)", text: "Britannica sees no sign that Ashoka ignored the army.", sources: ["brit-ashoka-edicts"] }
        ],
        sources: ["brit-mauryan", "brit-ashoka-edicts"]
      },
      {
        id: "legacy", title: "Legacy", subject: "Memory of a unified empire",
        date: null, camera: { center: [80.0, 22.0], zoom: 4 },
        text: "Britannica says that after the Mauryas it took many centuries for an empire to re-emerge, and the regional kingdoms that followed often repeated the same regional affiliations in later centuries.",
        what: "The Mauryan empire remains the first subcontinent-wide state.",
        where: "Across South Asia.",
        why: "Few later states controlled so much of the subcontinent.",
        uncertain: "The sources I read do not describe the Mauryas' legacy in Indian political thought or modern memory, so this chapter makes no such claims.",
        evidence: "reconstructed", features: [], relatedSites: [], sources: ["brit-ashoka-edicts", "brit-mauryan"]
      }
    ]
  });
})();
