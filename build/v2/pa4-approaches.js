// Part IV: Governance approaches.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "Part IV · Governance Approaches" },
  { lead: "The JD asks for ‘innovative regulatory approaches that enable responsible innovation’. This part sets out what that can mean for an organisation that does not regulate: first the instruments governments and regulators use, then how governments organise for frontier technology and cooperate across borders, and finally the instruments the Forum itself uses, and the conditions under which they get adopted." },

  /* 1 */
  { h2: "1. The instruments governments and regulators use" },
  { p: "The core concepts (the five principles of agile regulation, sandboxes, anticipatory governance, hard and soft law) are defined in Part I, §3 and §5. This compendium groups the full range of instruments by function, so you can recognise what a regulator is describing and discuss its trade-offs." },
  { table: { head: ["Function", "Instruments", "Typical use"], widths: [2100, 3700, 3560], rows: [
    ["Anticipate", "Horizon scanning; technology foresight units; scenario exercises; expert advisory panels.", "Seeing a technology coming before it creates pressure to act."],
    ["Test and learn", "Regulatory sandboxes; innovation hubs (a ‘front door’ for informal guidance); testbeds and living labs; pilot schemes; temporary licences.", "Generating evidence under real conditions before fixing rules."],
    ["Design rules", "Outcome-based rules; risk-based tiers; principles-based regulation; sunset clauses and mandatory review; codes of practice.", "Rules that stay relevant as technology changes."],
    ["Assure", "Technical standards; certification and conformity assessment; safety cases; third-party audit.", "Demonstrating that a product or system meets requirements."],
    ["Inform", "Disclosure and transparency duties; registries; labelling; incident reporting.", "Correcting information gaps between developers, regulators and the public."],
    ["Allocate responsibility", "Liability regimes; insurance requirements; licensing of operators.", "Making clear who pays and who is accountable when harm occurs."],
    ["Restrict", "Bans and moratoria; export controls; investment screening.", "Where risk is catastrophic, irreversible or security-critical."],
    ["Supervise with technology", "RegTech (tools that help firms comply) and SupTech (tools that help supervisors); machine-readable rules.", "Continuous rather than periodic oversight."],
  ]}},

  /* 2 */
  { h2: "2. How governments organise for frontier technology" },
  { p: "Beyond individual instruments, governments are experimenting with institutional designs. Recognising these models lets you discuss regulatory capacity, which is often the real constraint (Part V, §1)." },
  { table: { head: ["Model", "What it is", "Examples"], widths: [2300, 3700, 3360], rows: [
    ["Specialist technical institutes", "Government bodies with deep technical expertise that evaluate frontier technologies and advise regulators.", "National AI Safety or Security Institutes (UK, US, Japan, Singapore and others); national quantum programme offices."],
    ["Regulatory laboratories", "Units empowered to license experiments with emerging technologies and draft future legislation.", "The UAE’s Regulatory Laboratory (RegLab, 2019), created under a 2018 federal law allowing temporary licences for testing innovations: the institutional backdrop to the UAE’s partnership in GRIP."],
    ["Joined-up regulation", "Formal cooperation between regulators whose mandates overlap on a technology.", "The UK Digital Regulation Cooperation Forum (2020), linking competition, data-protection, communications and financial regulators."],
    ["Cross-border regulator networks", "Regulators coordinating testing and supervision across jurisdictions.", "The Global Financial Innovation Network (2019), which enables firms to test across several jurisdictions at once."],
    ["Strategy and mission offices", "Central units coordinating a national technology strategy across ministries.", "National quantum strategies with mission offices (UK, EU, India); bioeconomy strategy coordinators."],
  ]}},

  /* 3 */
  { h2: "3. How jurisdictions cooperate" },
  { p: "Because frontier technologies are borderless, cooperation between jurisdictions is often more valuable than any single national rule. The main mechanisms, from lightest to deepest:" },
  { n: [
    "**Shared vocabulary and principles:** agreeing definitions and values (the OECD AI Principles; the Forum’s Quantum Computing Governance Principles).",
    "**Regulatory dialogues and shared learning:** regulators exchanging evidence and experience (the theme of the Forum’s 2026 paper on autonomous-vehicle regulation).",
    "**Common standards:** technical specifications adopted in several jurisdictions (NIST’s post-quantum algorithms; UNECE vehicle regulations).",
    "**Mutual recognition:** accepting each other’s testing, certification or approvals.",
    "**Minimum common baselines:** agreed floors, above which jurisdictions can differ.",
    "**Harmonised or binding international rules:** treaties and conventions (rare, slow, and usually limited to the most mature or most dangerous areas).",
  ]},
  { p: "The goal is usually **interoperability**, not uniformity: rules that differ in form but are compatible in effect, so that a company or technology can operate across borders without duplicative compliance." },

  /* 4 */
  { h2: "4. The Forum’s own instruments" },
  { p: "The Forum’s contribution to regulatory innovation is through soft-law instruments and processes that governments and companies choose to adopt. The product types were introduced in Part II, §1.3; here is how each works as a governance instrument, with its limits." },
  { table: { head: ["Instrument", "How it influences governance", "Condition for adoption", "Limit"], widths: [1900, 2800, 2500, 2160], rows: [
    ["Principles", "Establish shared expectations early, before rules exist.", "Broad, credible co-authorship.", "Can remain aspirational without operational follow-up."],
    ["Toolkits and playbooks", "Translate principles into steps organisations or regulators can take.", "Practical, specific, tested with users.", "Need updating as technology moves."],
    ["National blueprints piloted through C4IR", "Help a government design a strategy, then test it in-country.", "A willing government counterpart and a local C4IR centre.", "Depends on political continuity."],
    ["Regulator-industry white papers", "Give regulators a structured view of an issue and a roadmap, co-developed with a regulator.", "A regulator willing to co-author (e.g. the UK FCA on quantum security).", "Often limited to one sector or jurisdiction."],
    ["Cross-jurisdiction synthesis", "Show regulators what others are doing and what works.", "Comparable evidence across countries.", "Descriptive unless linked to a dialogue."],
    ["Incubated ratings and standards", "Create measurable benchmarks others adopt and eventually run independently.", "A clear owner to hand over to (e.g. EPFL for the Space Sustainability Rating).", "Needs long-term institutional home."],
    ["Communities of practice", "Keep regulators, legal and compliance leaders and technologists in continuing dialogue.", "Sustained convening and real value to members.", "Hard to maintain without a programme anchor."],
  ]}},
  { h3: "4.1 What makes a Forum governance output get used" },
  { b: [
    "**Co-design with the people who will use it,** including regulators, from the outset rather than at launch.",
    "**Timing** matched to a real decision window (a strategy under design, a deadline approaching, a law under negotiation).",
    "**Specificity:** checklists, model approaches and case evidence rather than general analysis.",
    "**A route to adoption:** a government counterpart, a C4IR pilot, or a community that will carry it forward.",
    "**A handover plan:** clarity about who owns the instrument after the Forum’s initiative moves on.",
  ]},

  /* 5 */
  { h2: "5. Readiness and maturity measurement" },
  { p: "Measurement is itself a governance instrument: benchmarking creates peer pressure and a reason to convene. Relevant examples include GRIP’s Regulatory Future Readiness Index (produced by the core GRIP team), the Forum’s Policy Maturity Index for the bioeconomy, the OECD’s indicators of regulatory policy and governance, the OECD.AI Index, and the Oxford Insights Government AI Readiness Index. For your workstream, these are sources of evidence and of conversations with governments, not products to build." },

  /* 6 */
  { h2: "6. Matching approach to situation" },
  { table: { head: ["When the situation is…", "Approaches that tend to fit"], widths: [3800, 5560], rows: [
    ["Technology early, impacts uncertain", "Foresight, principles, dialogue; integrate governance questions into programme design."],
    ["Technology piloting, regulators need evidence", "Testbeds, pilots and sandboxes run by regulators; shared evidence across jurisdictions."],
    ["Technology deploying, jurisdictions diverging", "Cross-jurisdiction synthesis, regulatory dialogues, common standards, interoperability."],
    ["A hard deadline for a transition", "Roadmaps, readiness toolkits, sector-specific regulatory principles, coordination of timelines."],
    ["Catastrophic or irreversible risk", "Precaution: binding rules, restrictions or moratoria; soft law alone is insufficient."],
  ]}},
  { pageBreak: true },
);

module.exports = { blocks };
