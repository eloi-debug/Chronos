(function () {
  const { B } = window.TourKit;
  // Original v1 overview tours converted to the v2 schema. Summaries here are NOT individually cited (legacy: true).
  const mk = (id, title, desc, scope, span, steps) => ({
    id, category: "overview", legacy: true, title, description: desc, scope, span, tags: ["overview"],
    chapters: steps.map((s, i) => ({ id: id + "-" + (i + 1), title: s.title, subject: "Overview", date: { start: s.year, end: s.year, kind: "approximate" }, year: s.year,
      camera: { center: s.center, zoom: s.zoom }, text: s.text, evidence: "reconstructed", features: [], sources: [] }))
  });
  const T = (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []);
  T.push(mk("megastructures", "The rise of megastructures", "Original overview tour: monumental building from the Neolithic to the Bronze Age.", "Anatolia, Britain, Egypt, Peru", "c. 9500 to 2560 BCE", [
    { year: -9500, center: [38.92, 37.22], zoom: 6, title: "Göbekli Tepe", text: "Hunter-gatherers raise carved stone pillar enclosures in southeastern Turkey, thousands of years before pottery or metal." },
    { year: -7000, center: [32.83, 37.67], zoom: 6, title: "Çatalhöyük", text: "Farming makes towns possible. Thousands live in a dense settlement of mud-brick houses." },
    { year: -3000, center: [-1.83, 51.18], zoom: 6, title: "Stonehenge begins", text: "Neolithic Britain starts a monument that will be rebuilt over about 1,500 years." },
    { year: -2800, center: [-77.52, -10.89], zoom: 6, title: "Caral", text: "On the Peruvian coast, a monumental city rises independently of the Old World." },
    { year: -2560, center: [31.13, 29.98], zoom: 6, title: "Giza", text: "Egypt's Fourth Dynasty builds pyramids with state-organised labour." }]));
  T.push(mk("trade", "Trade networks and cities", "Original overview tour: cities and long-distance exchange.", "Mesopotamia to West Africa", "c. 3300 BCE to 1300 CE", [
    { year: -3300, center: [45.64, 31.32], zoom: 5, title: "Uruk", text: "Southern Mesopotamia hosts some of the first large cities and administrative record-keeping." },
    { year: -2400, center: [68.14, 27.33], zoom: 5, title: "Indus cities", text: "Planned cities such as Mohenjo-daro join a trade network reaching Mesopotamia." },
    { year: -800, center: [10.32, 36.85], zoom: 4, title: "Phoenician Carthage", text: "Phoenician sailors found colonies across the Mediterranean." },
    { year: 0, center: [66.96, 39.65], zoom: 4, title: "Silk Road hubs", text: "Central Asian oases such as Samarkand connect China, India, Persia and Rome." },
    { year: 800, center: [44.37, 33.32], zoom: 4, title: "Abbasid Baghdad", text: "A capital of trade and learning linking Asia, Africa and Europe." },
    { year: 1300, center: [-3.0, 16.77], zoom: 4, title: "Timbuktu", text: "Trans-Saharan caravans carry gold and salt to a scholarly city." }]));
  T.push(mk("writing", "The spread of writing", "Original overview tour: from accounting tablets to the printing press.", "Mesopotamia, China, Mediterranean, Europe", "c. 3300 BCE to 1450 CE", [
    { year: -3300, center: [45.64, 31.32], zoom: 5, title: "Proto-cuneiform", text: "Accounting tablets from Uruk are among the earliest known writing." },
    { year: -1200, center: [114.3, 36.13], zoom: 5, title: "Oracle bones", text: "Shang kings record divination on bone and shell at Anyang." },
    { year: -1000, center: [35.65, 34.12], zoom: 5, title: "Alphabet at Byblos", text: "Phoenician city-states use a compact consonant alphabet that later scripts descend from." },
    { year: -447, center: [23.73, 37.97], zoom: 5, title: "Greek literacy", text: "The Greeks adapted the Phoenician alphabet by adding vowels; Athens is a centre of written drama and philosophy." },
    { year: 1450, center: [8.25, 49.99], zoom: 5, title: "Movable type", text: "Printing in Mainz speeds up the spread of books across Europe." }]));
})();
