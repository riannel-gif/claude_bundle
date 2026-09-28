// Part V: Barriers, tensions and geopolitics.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "Part V · Barriers, Tensions and Geopolitics" },
  { lead: "Why does responsible scaling of frontier technologies stall, even when everyone agrees on the goal? This part names the barriers, the underlying tensions, and the geopolitical forces that shape them. It is the material behind any ‘what is the real problem here?’ question." },

  /* 1 */
  { h2: "1. Barriers to responsible scaling" },
  { p: "The barriers are remarkably consistent across technologies. Grouping them into three families gives you a reliable diagnostic structure." },
  { h3: "1.1 Institutional barriers" },
  { b: [
    "**Regulatory capacity gap.** Regulators often lack the technical expertise, data and staff to understand frontier technologies. The constraint is more often capability than the absence of a rule.",
    "**Siloed mandates.** Frontier technologies, and especially their convergences, cut across ministries and regulators; nobody owns the whole question.",
    "**Slow cycles.** Legislative and regulatory processes take years; technology changes in months.",
    "**Late integration.** Governance is considered after a technology has matured and business models have locked in, when change is expensive (the Collingridge dilemma in practice).",
    "**Pilot purgatory.** Pilots and sandboxes prove a concept but never translate into general rules, because nobody designed the path from pilot to policy.",
  ]},
  { h3: "1.2 Ecosystem barriers" },
  { b: [
    "**Fragmentation.** Divergent national rules multiply compliance costs, favour large incumbents that can afford them, and invite forum-shopping.",
    "**Hype and claims integrity.** Overstated claims distort investment and public procurement; understated risks delay preparation.",
    "**Talent shortages,** in both technical roles and ‘translator’ roles that combine technical and policy literacy.",
    "**Supply-chain chokepoints** in critical components and materials.",
    "**Concentration** of capability, data and capital in a few companies and countries.",
  ]},
  { h3: "1.3 Societal barriers" },
  { b: [
    "**Public trust.** A single high-profile incident can set back a technology for years; Europe’s experience with GMOs shows how durable backlash can be.",
    "**Inclusion and the divide.** Most countries risk becoming rule-takers for technologies designed and regulated elsewhere.",
    "**Workforce disruption,** which creates political resistance when transitions are not managed.",
  ]},
  { h3: "1.4 How the barriers show up in each technology" },
  { table: { head: ["Barrier", "Quantum", "Autonomous mobility and robotics", "Biotechnology"], widths: [1900, 2480, 2490, 2490], rows: [
    ["Capacity gap", "Few regulators understand cryptographic migration or quantum claims.", "Validating learning systems exceeds most regulators’ tools.", "Assessing AI-designed biology and bespoke therapies."],
    ["Fragmentation", "Divergent post-quantum timelines, algorithms and certification.", "Different national approval, liability and operating rules.", "Gene-edited products classified differently across markets."],
    ["Late integration", "Long-lived devices designed today without crypto-agility.", "Humanoids reaching homes and workplaces before any framework.", "Screening systems designed before AI-enabled design existed."],
    ["Hype and trust", "Contested ‘quantum advantage’ claims.", "Incident-driven backlash against robotaxis.", "Public wariness shaped by the GMO debate."],
    ["Concentration and divide", "Full-stack capability in a handful of countries.", "Data and fleet scale concentrated in US and Chinese firms.", "Benefits of genetic resources flowing mainly to rich countries."],
  ]}},

  /* 2 */
  { h2: "2. The core tensions" },
  { p: "Beneath the barriers sit tensions that cannot be solved, only managed. Naming them explicitly is a mark of maturity in any answer." },
  { table: { head: ["Tension", "What it means"], widths: [2800, 6560], rows: [
    ["Innovation and protection", "Room to experiment versus safeguards against harm."],
    ["Speed and legitimacy", "Agile, fast rule-making versus democratic process and inclusion."],
    ["Flexibility and certainty", "Adaptive rules versus the predictability investors need."],
    ["Openness and security", "Open science and talent mobility versus dual-use risk and export control."],
    ["National advantage and shared commons", "Competitiveness and sovereignty versus interoperability and global public goods."],
    ["Precaution and permission", "Prove safety first (the EU’s default) versus permit and correct (the US default)."],
  ]}},

  /* 3 */
  { h2: "3. Geopolitics" },
  { h3: "3.1 Three rulebooks, and the middle paths" },
  { table: { head: ["Model", "Philosophy", "Typical instruments"], widths: [2000, 3700, 3660], rows: [
    ["European Union", "Rights- and risk-based; precautionary; comprehensive horizontal law.", "The AI Act, GDPR, product-liability reform; strategic-autonomy framing for quantum and biotech."],
    ["United States", "Market-led; sectoral; innovation-first; increasingly security-driven.", "Executive action, agency guidance, voluntary NIST frameworks, export controls, industrial policy."],
    ["China", "State-directed; targeted and fast-moving; strategic industrial policy.", "Specific rules per application; registration requirements; national standards systems; city-level pilots."],
    ["United Kingdom", "Principles-based and pro-innovation, working through existing regulators.", "Regulator cooperation forums; specialist institutes; enabling legislation such as the Automated Vehicles Act."],
    ["Gulf states", "Positioning as agile, investment-friendly regulatory hubs and conveners.", "Regulatory laboratories and temporary licences (UAE); national technology champions (TII); C4IR centres; partnership with the Forum on GRIP."],
  ]}},
  { h3: "3.2 The Brussels effect, and its limits" },
  { p: "Anu Bradford’s ‘Brussels effect’ describes how EU rules become global standards because firms adopt them worldwide to access the EU market, and other governments copy them. GDPR is the archetype. The effect is real but weakening for frontier technologies: the US and China pursue rival models, the EU itself is prioritising competitiveness and simplification, and technical standards set outside Europe (for example NIST’s post-quantum algorithms) can matter more than legislation." },
  { h3: "3.3 Technology sovereignty and export controls" },
  { p: "Governments increasingly treat frontier technologies as strategic assets. The US approach of tight controls on a narrow set of critical technologies (‘small yard, high fence’) now covers advanced semiconductors, quantum items and some biotechnology; allies have introduced parallel but not identical controls. Research security, investment screening and supply-chain policy sit alongside. For a convener, this means some conversations are constrained, and that security agencies need to be in the room alongside innovation ministries." },
  { h3: "3.4 Standards as a geopolitical arena" },
  { p: "Whoever sets technical standards shapes markets for decades. Standards bodies (ISO, IEC, ITU, IETF, and national bodies such as NIST) have become contested arenas, with countries investing in participation and in alternative national standards (China’s standards systems for humanoid robots and cryptography are examples)." },
  { h3: "3.5 What this means for a convening organisation" },
  { p: "The Forum’s comparative advantage lies where no single government can act alone and where public and private actors need a neutral space: comparing approaches across jurisdictions, linking regulators to the companies that will implement rules, bringing security and innovation communities together, and piloting frameworks through the C4IR network. Its limits are equally clear: it cannot enforce, it does not set technical standards, and its legitimacy depends on inclusion and transparency (Part II, §4)." },

  /* 4 */
  { h2: "4. Lessons from past technology governance" },
  { p: "Experts reason by analogy. These precedents are the ones most often invoked in frontier-technology debates; knowing what each actually teaches (and where the analogy breaks) lets you use them with authority." },
  { table: { head: ["Precedent", "What happened", "The lesson", "Where it applies today"], widths: [1700, 2800, 2600, 2260], rows: [
    ["Montreal Protocol (1987)", "Governments agreed to phase out ozone-depleting CFCs on fixed schedules, with substitutes available and a fund to help developing countries comply.", "A technology phase-out works when substitutes exist, deadlines are staged, and poorer countries get support.", "The post-quantum migration: substitutes exist (PQC), deadlines are set, capacity support is missing."],
    ["Y2K (1990s)", "Organisations inventoried and fixed date-handling code before a known deadline.", "Inventory first; supply chains matter; a deadline mobilises boards.", "PQC migration, except that Q-Day has no fixed date, which makes mobilisation harder."],
    ["Asilomar Conference (1975)", "Scientists paused and set their own safety guidelines for recombinant DNA, later adopted into government rules.", "Early self-governance by a research community can seed durable rules.", "AI-bio safeguards; early quantum principles."],
    ["Aviation safety", "An international body (ICAO), independent accident investigation and confidential incident reporting created a strong safety-learning culture.", "Shared, blame-free incident learning across borders makes a complex technology safe.", "Autonomous vehicles and robots: cross-jurisdiction incident learning."],
    ["Basel Committee (1974)", "Central banks agreed non-binding standards that were then adopted into national law worldwide.", "Soft law through a network of regulators can achieve near-global alignment without a treaty.", "Regulator networks for frontier technologies."],
    ["Internet governance", "Multistakeholder bodies (ICANN, 1998; the Internet Governance Forum, 2006) manage key functions and dialogue.", "Multistakeholder governance can run critical infrastructure, but faces persistent legitimacy debates.", "The Forum’s own model (Part II, §4)."],
    ["GMOs in Europe", "Public opposition led to a de facto moratorium (1998–2004) and restrictive rules that lasted for decades.", "Neglecting public trust early can lock in restrictive regulation for a generation.", "Gene editing, humanoids, any technology with visible public risk."],
    ["Nuclear (IAEA, 1957; NPT, 1968)", "An international agency with verification powers, backed by a treaty.", "Verification is possible when materials are physical and traceable; it is much harder for software and biology.", "Often proposed as a model for AI and bio; the analogy is weaker than it appears."],
  ]}},
  { pageBreak: true },
);

module.exports = { blocks };
