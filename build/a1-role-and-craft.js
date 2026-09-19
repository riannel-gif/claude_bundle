// PART A, Modules 0-2: How to use, the role/GRIP/panel decoded, and the
// regulatory-innovation discipline (deep). Block DSL consumed by lib.build().

const blocks = [];
const push = (...b) => blocks.push(...b);

/* ===================== SECTION 0 ===================== */
push(
  { h1: "0 · How to Use This Dossier" },
  { lead: "This is an expert-conversion document. It is built so that, after working through it, you can hold your own with a senior expert on frontier-technology regulation and perform under a management-consulting-style case panel — reasoning as though you had a decade in the field." },
  { p: "It comes in two parts, mirroring how the interview will actually test you:" },
  { b: [
    "**Part A — the Knowledge Base (this document).** The subject-matter depth: the regulatory-innovation discipline, the five frontier-technology domains at genuine technical and governance depth, the WEF operating model, the global regulatory landscape, and a chapter that recasts all of it in the *transformation* language your panel thinks in. Read Part A for mastery.",
    "**Part B — Interview & Case Prep (companion document).** How a McKinsey-style partner panel interviews and scores; a frameworks primer; a bank of structured problem-solving cases with issue trees and model answers; and the Personal Experience Interview (PEI) drills built from your own background. Read Part B to rehearse out loud.",
  ]},
  { p: "**Why the two halves matter together.** Your panel is composed of former senior management consultants. That changes the test in a specific way: they care less about whether you can recite a regulation and more about whether you can *structure* an ambiguous problem, prioritise, quantify where useful, form a hypothesis, and communicate it crisply. Part A gives you the raw material; Part B gives you the operating system. Neither wins alone." },
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
    "**They test hypothesis-driven thinking.** Consultants reason from a hypothesis they then test, rather than boiling the ocean. State your leading answer early, then pressure-test it.",
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

/* ===================== SECTION 2 ===================== */
push(
  { h1: "2 · The Regulatory-Innovation Discipline" },
  { lead: "This is the deepest layer of the craft and the one an adjacent, consulting-literate candidate can most convincingly master. Treat it as a body of theory with its own instruments, evidence base, and design choices — not a bag of buzzwords." },

  { h2: "2.1 The problem space" },
  { p: "Five linked ideas define the intellectual terrain. Naming them precisely signals that you know the literature." },
  { b: [
    "**The pacing problem** (Marchant). Technology develops exponentially; law develops incrementally. The widening gap leaves citizens with outdated protections *and* innovators with rules that do not fit — harm and lost opportunity at once.",
    "**The Collingridge dilemma** (the dilemma of control). Early in a technology’s life it is easy to shape but hard to predict; by the time its impacts are clear, it is entrenched and hard to change. Anticipatory governance is the attempt to act in that early, uncertain window.",
    "**Precaution vs. permissionless innovation.** The precautionary principle (dominant in the EU) requires proof of safety before deployment; permissionless innovation (historically dominant in the US) permits, then intervenes on evidence of harm. Most modern regulatory innovation tries to fuse the *learning* of the second with the *safety* of the first — which is what a sandbox is.",
    "**The innovation principle** — the idea that regulators should explicitly weigh the cost to innovation of a proposed rule, as a counterweight to precaution. Contested, but increasingly cited in EU better-regulation debates.",
    "**Regulatory Impact Assessment (RIA)** — the workhorse discipline of ex-ante appraisal (costs, benefits, alternatives) that turns regulation from assertion into evidence. The OECD is its custodian.",
  ]},
  { h2: "2.2 The five principles of agile regulation" },
  { p: "Five principles are the shared vocabulary of the field. They were crystallised by **Deloitte’s *The Future of Regulation* (Eggers, Turley and Kishnani, 2018)** and echoed in the Forum’s **“Agile Regulation for the Fourth Industrial Revolution: A Toolkit for Regulators” (2020)**. Attribute them accurately — knowing they are Deloitte’s framing adopted into Forum practice is itself a mark of fluency." },
  { table: { head: ["Principle", "Meaning", "Example"], widths: [2050, 4050, 3260], rows: [
    ["Adaptive regulation", "“Regulate, monitor, iterate.” Rules are living instruments, revised as evidence accrues, with review clauses built in.", "Sunset clauses; scheduled statutory reviews; iterative rulemaking."],
    ["Outcome-based regulation", "Specify the outcome to achieve, not the technology or method to use.", "“Systems must be safe/explainable” rather than “use algorithm X.”"],
    ["Risk-based (risk-weighted) regulation", "Concentrate regulatory effort where potential harm is greatest; light-touch where it is low.", "The EU AI Act’s tiers: unacceptable / high / limited / minimal."],
    ["Collaborative regulation", "Co- and self-regulation with industry; alignment across regulators and borders.", "Codes of practice; standards recognised by regulators."],
    ["Regulatory sandboxes", "Controlled, time-limited testing with real users under supervision and relaxed rules.", "UK FCA fintech sandbox; EU AI Act national sandboxes."],
  ]}},
  { p: "Around the five sit the rest of the toolkit, worth naming to show range: **experimental regulation** (regulators and firms jointly run trials), **data-driven regulation** (real-time, data-led supervision), **self- and co-regulation** (industry-led governance recognised by the state), **joined-up regulation** (one-stop shops across agencies), and **international regulatory cooperation**." },

  { h2: "2.3 Regulatory sandboxes — the flagship instrument, in depth" },
  { p: "The sandbox is the single most important instrument to discuss fluently: it is the field’s signature idea and GRIP’s own “Innovation Hub.” A regulatory sandbox is a **controlled, time-limited environment in which firms test new products, services or business models with real customers, under close supervision, with certain rules relaxed or waived and with safeguards** (participant caps, disclosure, insurance, exit plans)." },
  { h3: "Origin, spread and the numbers" },
  { b: [
    "**Origin:** pioneered by the UK’s Financial Conduct Authority (FCA) for fintech in **2016**; now “a decade on,” the model has diffused across finance, energy, health, mobility and data.",
    "**Scale:** by 2025 there were **60+ sandboxes** touching data, AI or technology worldwide, of which roughly **31 are national AI-focused** sandboxes (Datasphere Initiative). Jurisdictions include the UK, Singapore, the UAE, Brazil, France, Kenya and Utah (US).",
    "**Evidence it works — cautiously:** the best-identified study finds the UK FCA sandbox **increased participants’ capital raised by ~15%** and **raised the probability of raising capital by ~50%**, with positive correlation between sandboxes and fintech investment inflows.",
    "**Evidence it is oversold:** a decade on there is still no academic consensus that sandboxes improve the broader enterprise of regulation; the identified benefits accrue mainly to *participating firms*, not to the regulatory system or consumers at large.",
  ]},
  { h3: "Design choices (what you actually decide when you build one)" },
  { p: "Sound like a practitioner by naming the design levers: **eligibility** (which firms/technologies), **scope of relaxation** (which rules waived, which never), **safeguards** (caps, disclosure, insurance, kill-switches), **duration and cohorts** (fixed windows vs rolling), **supervisory intensity**, **exit/graduation path** (how a tested innovation moves to permanent rules), and **cross-border design** (single vs multi-regulator). The EU AI Act **mandates that every member state establish at least one AI regulatory sandbox by 2 August 2026** (Articles 57–58) — a concrete, current fact to deploy." },
  { h3: "The honest critiques (say these unprompted — it signals maturity)" },
  { b: [
    "**The sandbox paradox / regulatory privilege:** relaxing rules for sandbox entrants can create unequal treatment — participants face different liability for comparable conduct — advantaging insiders and well-resourced incumbents.",
    "**The graduation problem:** sandboxes generate learning that does not automatically become rules; without a codification plan the lessons evaporate.",
    "**The triple challenge for AI sandboxes** (capacity, coordination, attractiveness): regulators often lack the technical capacity to run them, member states struggle to coordinate, and the most capable AI firms may not find them attractive enough to join.",
    "**PR risk:** a sandbox with no supervisory capacity behind it becomes a marketing exercise rather than a learning engine.",
  ]},
  { callout: [
    "**The one-line judgement to deliver:** “A sandbox is an experiment, not an answer. Its value is the learning loop back to the rulebook — so I never propose one without a codification plan, real supervisory capacity, and safeguards against turning a regulatory relaxation into a competitive privilege.”",
  ]},

  { h2: "2.4 Anticipatory and adaptive governance" },
  { p: "If the sandbox is the instrument, **anticipatory governance** is the mindset. The current framing describes a culture built on three capabilities:" },
  { n: [
    "**Regulatory foresight** — systematic horizon-scanning and scenario work to see technologies coming (the antidote to the Collingridge dilemma).",
    "**Regulatory experimentation** — sandboxes, pilots, testbeds and living labs that generate real-world evidence before rules are fixed.",
    "**Regulatory learning** — institutionalised feedback loops that turn that evidence back into revised rules (the “adaptive” half).",
  ]},
  { p: "The mechanisms that operationalise this: **sunset clauses**, **mandatory post-implementation review**, **iterative / staged rulemaking**, **regulatory impact assessment**, and **living guidance** updated more like software than statute. The OECD’s 2025 work on “steering AI’s future” through **anticipatory governance** is the reference text to cite." },

  { h2: "2.5 Outcome-based and risk-based regulation" },
  { p: "**Outcome-based regulation** specifies the end (safety, explainability, non-discrimination) and leaves the means to the innovator — durable against technological change because it does not encode a particular technology. Its risk is enforceability: outcomes must be measurable and auditable, or the rule is toothless. **Risk-based regulation** concentrates scarce regulatory effort where harm is greatest; the canonical implementation is the **EU AI Act’s four tiers** — *unacceptable* (prohibited), *high-risk* (conformity assessment, documentation, human oversight), *limited* (transparency duties), and *minimal* (unregulated). The design challenge is *classification*: everything turns on which tier a system lands in, and gaming the boundary is the predictable failure mode." },

  { h2: "2.6 Standards and soft law" },
  { p: "Soft law is how you govern at the speed of technology. It spans **technical standards** (ISO, IEC, IEEE, CEN-CENELEC), **codes of practice**, **principles and guidelines**, and **voluntary commitments**. Two moves make you sound expert:" },
  { b: [
    "**Distinguish *de jure* from *de facto* standards** — those set by formal bodies vs those that win in the market — and note that regulators increasingly *reference* standards to give soft law teeth. The EU’s **“New Approach”** (legislation sets essential requirements; harmonised standards provide the technical detail) is the template, and it is exactly how the AI Act relies on CEN-CENELEC standards.",
    "**Name the soft-law-to-hard-law pipeline.** Principles and codes are often the R&D phase for binding law: the OECD AI Principles → national statutes; the EU’s voluntary **GPAI Code of Practice (July 2025)** → the binding AI Act obligations it operationalises. Soft law buys time and builds consensus while hard law catches up — and it is weakest exactly where the downside is catastrophic and actors have incentives to defect (bio-risk), which is where you argue agility must yield to precaution.",
  ]},

  { h2: "2.7 RegTech and SupTech" },
  { p: "**RegTech** is technology that helps the regulated comply (automated reporting, KYC/AML, monitoring). **SupTech** is technology that helps the *supervisor* regulate (real-time data feeds, machine-readable rules, algorithmic market surveillance). The frontier concept to cite is **machine-readable and machine-executable regulation** — rules published as code so compliance can be automated and supervision made continuous rather than periodic. This is the natural bridge between “regulatory innovation” and the frontier technologies themselves, and a credible plank for any modernisation agenda." },

  { h2: "2.8 International regulatory cooperation" },
  { p: "Because frontier technologies are borderless and your mandate is cross-jurisdictional, the international layer is central. The vocabulary: **mutual recognition** (accept each other’s conformity assessments), **regulatory interoperability** (rules different in form but compatible in effect), **regulatory diplomacy**, **minimum common standards**, and **plurilateral coordination** (coalitions of the willing where universal treaties stall). The OECD is the reference institution for the discipline of international regulatory co-operation (IRC); the G7, G20 and standards bodies are the practical venues." },

  { h2: "2.9 Regulatory maturity and readiness models" },
  { p: "This section is the hinge to the transformation lens your panel prizes (Section 6). Just as manufacturers are scored on a maturity curve, governments are increasingly scored on their *readiness to govern* emerging technology. Know the instruments:" },
  { b: [
    "**GRIP’s own Regulatory Future Readiness Index** — benchmarks countries’ preparedness to govern emerging technology (dimensions still being finalised; expect capability, agility, institutional and international-cooperation axes).",
    "**OECD.AI Index** — organises national AI readiness around R&D, infrastructure, governance, accessibility and policy environment.",
    "**Oxford Insights Government AI Readiness Index** — scores governments on government, technology-sector and data-and-infrastructure pillars.",
    "**OECD indicators of regulatory management systems (iREG)** — measure the quality of a country’s RIA, stakeholder-engagement and ex-post-review machinery.",
  ]},
  { p: "The strategic point: a readiness index is not just measurement — it is a *convening and motivation* device. Benchmarking creates competitive pressure to improve and gives you a reason to bring governments to the table. This is the diagnostic front-end of a regulatory transformation." },

  { h2: "2.10 Choosing the instrument, and naming the trade-offs" },
  { table: { head: ["When the situation is…", "Reach for…", "Because…"], widths: [3100, 3100, 3160], rows: [
    ["High uncertainty, need evidence fast", "Sandbox / pilot / testbed", "Generates real-world data without premature rules."],
    ["Fast-moving tech, static rules would date", "Outcome-based + adaptive rules", "Specifies ends not means; built to be revised."],
    ["Uneven risk across use-cases", "Risk-based tiering", "Concentrates scarce effort where harm is greatest."],
    ["Global technology, national regulators", "Standards + international cooperation", "Soft law and interoperability move faster than treaties."],
    ["Consensus not yet mature", "Principles / codes of practice", "Build alignment now; harden into law later."],
    ["Catastrophic, irreversible downside", "Hard rules + precaution", "Agility must yield where a single failure is unacceptable."],
  ]}},
  { callout: [
    "**The three trade-offs to name aloud in any case:** innovation vs. protection (permissiveness vs. safety); speed vs. legitimacy (agile rules vs. democratic due process); flexibility vs. certainty (adaptive rules vs. the predictability business needs to invest). Good regulatory innovation *manages* these tensions; it does not pretend they are absent.",
  ]},
  { pageBreak: true },
);

module.exports = { blocks };
