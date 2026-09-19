// PART A, Modules 0-1: How to use, and the role/GRIP/panel decoded.
const blocks = [];
const push = (...b) => blocks.push(...b);

/* ===================== SECTION 0 ===================== */
push(
  { h1: "0 · How to Use This Dossier" },
  { lead: "This is an expert-conversion document. After working through it you should be able to hold your own with a senior expert on frontier-technology regulation and perform under a management-consulting-style case panel — reasoning as though you had a decade in the field." },
  { p: "It comes in two parts, mirroring how the interview will test you:" },
  { b: [
    "**Part A — the Knowledge Base (this document).** The subject-matter depth: foundational concepts, the regulatory-innovation discipline, the five frontier-technology domains at genuine *technical* and governance depth, the WEF operating model, the global regulatory landscape, and a chapter that recasts all of it in the *transformation* language your panel thinks in. Read Part A for mastery.",
    "**Part B — Interview & Case Prep (companion document).** How a McKinsey-style partner panel interviews and scores; a frameworks primer; a bank of structured problem-solving cases with issue trees and model answers; and the Personal Experience Interview (PEI) drills built from your own background. Read Part B to rehearse out loud.",
  ]},
  { p: "**How Part A is organised.** After this note and the role brief, the knowledge base runs in eight numbered sections: **(2) Foundational Concepts** — the base vocabulary of technology, regulation and governance you build everything else on; **(3) the Regulatory-Innovation Discipline** — the instruments and craft; **(4) the Frontier Domains** — each with a real technology primer *and* its governance; **(5) Convergence**; **(6) the WEF operating model**; **(7) the global landscape**; **(8) Regulatory Transformation** — the systems lens; then appendices and a glossary." },
  { p: "**Why the two halves matter together.** Your panel is composed of former senior management consultants. They care less about whether you can recite a regulation and more about whether you can *structure* an ambiguous problem, prioritise, quantify where useful, form a hypothesis, and communicate it crisply. Part A gives you the raw material; Part B gives you the operating system. Neither wins alone." },
  { callout: [
    "**The mental model to carry throughout:** treat frontier-technology governance as an *industry-transformation problem*. A country or sector moving from an ungoverned frontier technology to responsible, scaled adoption is running a transformation — with a maturity curve, a capability gap, a scaling slump, an ecosystem to orchestrate, and reference cases to replicate. That framing is both true and exactly the language your panel speaks. It is the connective spine of this whole dossier.",
  ]},
  { h2: "The role in one breath" },
  { p: "You would build and lead a new cross-cutting workstream inside the World Economic Forum’s Global Regulatory Innovation Platform (GRIP) that designs better *ways to regulate* frontier technologies — quantum, autonomous mobility and robotics, biotechnology, planetary systems, and what comes next — and turns multistakeholder dialogue into governance that ships across jurisdictions. You are not a regulator; you are the architect of the model, the convener of the ecosystem, the author of the knowledge products, and the translator between the lab, the ministry and the boardroom." },
  { pageBreak: true },
);

/* ===================== SECTION 1 ===================== */
push(
  { h1: "1 · The Role, GRIP, and the Panel — Decoded" },
  { h2: "1.1 GRIP: the facts, in depth" },
  { p: "The **Global Regulatory Innovation Platform (GRIP)** was launched on 4 July 2025 by the World Economic Forum together with the United Arab Emirates’ **General Secretariat of the Cabinet** — the machinery of the federal government itself, not a single ministry or company. Its founding premise: the widening gap between fast-moving technology and slow-moving legacy regulation is now a first-order economic and social risk, and the response is to help governments *design and adapt* regulation in step with technological change, for what the Forum calls the “Intelligent Age.”" },
  { p: "GRIP’s intellectual signature — and the line you should internalise as your own — is **regulation as a strategic lever, and as modern infrastructure.** In fast-developing fields, the agility and quality of a country’s regulatory model increasingly determine its competitiveness and influence; regulation is not merely a brake on risk but a way to create the conditions in which new ideas develop and scale safely. The Forum’s companion 2025 publication, **“The Regulatory Frontier: Designing the Rules that Shape Innovation,”** frames regulatory capability as “one of the most important infrastructure investments of the digital age” and identifies five design domains for future-ready regulation — **boundaries, learning systems, market access, shared infrastructure, and adaptability.**" },
  { p: "Over a two-year roadmap, GRIP commits to three flagship deliverables. Know them cold:" },
  { table: { head: ["Deliverable", "What it is", "Relevance to your workstream"], widths: [2500, 3800, 3060], rows: [
    ["Global Regulatory Playbook", "Real-world case studies, frameworks and tools for regulators adopting agile approaches.", "The template for the knowledge products your role must produce for the frontier."],
    ["Regulatory Future Readiness Index", "A benchmark of how prepared countries are to govern emerging technologies.", "A diagnostic you can extend into frontier domains and use to rank-motivate governments."],
    ["Global Regulatory Innovation Hub", "A pilot environment to test and refine regulation before scaling; plus a Regulatory Intelligence Hub and Regulatory Innovation Dialogues.", "A ready-made sandbox and convening mechanism for frontier-tech pilots."],
  ]}},
  { p: "GRIP’s initial sector focus is **AI, healthcare and digital finance**. Your workstream is the move *upstream* into the earlier-stage frontier domains where the rules barely exist. A candid delivery read to carry into the room: roughly midway through the roadmap, the report and the dialogues are live, but the Playbook and the Readiness Index appear to be still under construction — which is precisely why the role exists. Confirm the current status the week of the interview." },
  { h3: "1.2 Where your role sits" },
  { p: "The posting is **Policy Lead, GRIP — Frontier Technology and Regulatory Innovation**, temporary to May 2027, in Geneva, reporting to the **Head of Digital Inclusion**. You would build and lead a *new* cross-cutting workstream — you are its founder-operator. The explicit brief: partner with the **Centre for Frontier Technologies and Innovation (CFTI)** and the Forum’s technology initiatives (quantum, autonomous mobility and robotics, biotechnology, planetary systems, and future domains); develop innovative regulatory approaches that enable responsible innovation; create a **scalable, replicable model** that bridges technology development and public policy; convene global leaders; produce knowledge products; and turn dialogue into implementation with governments, regulators, industry, academia and civil society — working in a matrix with the Centre for Cybersecurity and the Centre for AI Excellence, and with Forum communities such as Chief Legal Officers and Chief Compliance Officers." },
  { h3: "1.3 CFTI and the C4IR network" },
  { p: "The **Centre for the Fourth Industrial Revolution (C4IR)** is the Forum’s platform for anticipating exponential technologies and fostering responsible innovation, operating as a **global network of government- and non-profit-hosted centres** that give national “trailblazers” a trusted space to co-design and pilot governance approaches, then feed lessons back to the network. Centres span the United States, Germany, Saudi Arabia, Japan, India and others; in early 2026 the Forum signed agreements for five more, including an **Abu Dhabi Centre for Frontier Technologies** focused on quantum, robotics, propulsion and space systems. For your workstream, the network is the delivery vehicle: prototype a governance approach in one centre, package it into a playbook, replicate it elsewhere — the “scalable, replicable model” the JD demands." },
  { h2: "1.4 The panel — a consultant panel — and what it tests" },
  { p: "Your panel is composed of people with senior management-consulting backgrounds (McKinsey-partner calibre). This is the single most important fact about your preparation, and it changes the interview in four ways:" },
  { b: [
    "**They test structure over recall.** They will not be impressed that you *know* the EU AI Act; they will watch *how* you break down a messy question about it. Lead with a structure, then fill it.",
    "**They test prioritisation and the 80/20.** They want to see you identify the two things that matter most out of ten, and say why — not an exhaustive list.",
    "**They test hypothesis-driven thinking.** State your leading answer early, then pressure-test it — rather than boiling the ocean.",
    "**They test communication and presence.** Top-down, answer-first (the Pyramid Principle), crisp, quantified where useful. Half of a McKinsey-style interview is the Personal Experience Interview — behavioural, probed hard.",
  ]},
  { table: { head: ["Panelist lens", "What they probe", "How to win them"], widths: [2400, 3560, 3400], rows: [
    ["The strategist (your manager / GRIP lead)", "Can you build a workstream from zero, run it in a matrix, make GRIP tangible for the frontier?", "A structured 100-day plan; GRIP’s three deliverables; the regulation-as-infrastructure thesis."],
    ["The domain partner (CFTI / C4IR)", "Frontier-tech fluency and respect for the technologists you’d partner with.", "Each domain’s core governance dilemma; position as translator, not rival expert."],
    ["The regulatory-innovation expert", "Command of the toolkit — sandboxes, adaptive/outcome/risk-based, soft law.", "Precise instruments plus real examples and their evidence and limits."],
    ["The ex-consultant (any seat)", "Structure, prioritisation, hypothesis, quantification, communication.", "Answer-first, MECE structures, a number when it helps, a clear recommendation."],
  ]}},
  { h3: "1.5 Turning “adjacent” into an advantage" },
  { p: "You come adjacent to deep frontier-tech expertise, and the panel will sense it. Convert the gap: **own the translator role** (the Forum needs someone who moves between lab, ministry and boardroom, not another physicist); **be genuinely expert in the craft** of regulatory innovation and in structured problem-solving — the actual job, and where an adjacent, consulting-literate candidate can out-prepare a domain specialist; and **show pattern-transfer** — the reason one governance model travels from fintech to AI to biotech is that the regulatory patterns rhyme even when the science does not. Demonstrating that you see those patterns is exactly the scalable, replicable model the role wants." },
  { pageBreak: true },
);

module.exports = { blocks };
