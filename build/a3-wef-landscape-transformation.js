// PART A, Modules 5-7: WEF operating model, global landscape, and the
// regulatory-transformation lens (the consulting bridge).
const blocks = [];
const push = (...b) => blocks.push(...b);

/* ===================== SECTION 5 ===================== */
push(
  { h1: "5 · The World Economic Forum Operating Model" },
  { lead: "A consultant panel will test whether you understand the Forum as an operating system — its theory of change, its levers, and its limits — not just its brand." },
  { h2: "5.1 What the Forum is, and how it actually creates impact" },
  { p: "The World Economic Forum is the international organisation for **public-private cooperation**, convening leaders from politics, business, academia and civil society to shape agendas. Crucially, it has **no regulatory or legislative power.** Its influence is *convening* power — and for frontier technology, where binding venues are fragmented or gridlocked, that is often the more useful power. Your job is not to make rules but to build the conditions in which better rules get made and adopted. The Forum’s levers of impact:" },
  { b: [
    "**Trusted convening** — bringing rivals and counterparts into the same room under Chatham House norms (Davos is the symbol; the year-round communities are the substance).",
    "**Communities** — standing groups (Chief Legal Officers, Chief Compliance Officers, Young Global Leaders, Global Future Councils) that give initiatives their membership and reach.",
    "**Knowledge products** — reports, frameworks, playbooks, indices and white papers that shape how decision-makers frame problems (the currency your role trades in).",
    "**Platforms and initiatives** — multi-year, multistakeholder vehicles (GRIP is one) that turn dialogue into pilots, commitments and toolkits.",
    "**The C4IR network** — government-hosted centres that localise and operationalise governance work in-country.",
  ]},
  { h2: "5.2 Multistakeholder governance — and how to handle the critique" },
  { p: "The Forum’s theory of change is **multistakeholder governance**: convene enough of the relevant actors — states, firms, academia, civil society — and the resulting consensus is both more legitimate and more implementable than a state-only process. Know the critique, because a sharp panel will probe it: multistakeholderism can **dilute democratic accountability**, privilege **corporate voice**, lack **clear rules of representation and accountability**, and enable powerful actors to **forum-shop**. The Forum’s own **Global Redesign Initiative** put these questions on the table." },
  { callout: [
    "**How to answer a legitimacy challenge:** acknowledge it directly; argue that multistakeholder convening is a *complement* to democratic and multilateral processes, not a replacement; and stress the safeguards that earn legitimacy — transparency, genuinely inclusive representation (especially the Global South and civil society), and outputs governments freely adopt through their own accountable processes. Never sound defensive; sound like someone who has thought about the institution’s own limits.",
  ]},
  { h2: "5.3 The Agile Governance lineage and the reports to name" },
  { table: { head: ["Forum work", "What it established", "Use it to…"], widths: [3050, 3550, 2760], rows: [
    ["Agile Governance: Reimagining Policy-making in the 4IR (white paper)", "The founding case for adaptive, human-centred policy-making.", "Show you know the intellectual roots of GRIP."],
    ["Agile Regulation for the 4IR — A Toolkit for Regulators (2020)", "A practical toolkit building on the five-principles approach.", "Speak the Forum’s house vocabulary precisely."],
    ["Global Technology Governance Report (2021)", "A cross-technology governance-gap analysis.", "Frame the cross-cutting, convergence argument."],
    ["The Regulatory Frontier / GRIP (2025)", "Regulation as infrastructure; the three GRIP deliverables; five design domains.", "Anchor to the current, live mandate."],
    ["Global Risks Report; Future of Jobs Report", "The Forum’s flagship annual signals on risk and work.", "Connect tech governance to the Forum’s wider agenda."],
  ]}},
  { p: "The register to hit when talking about the Forum: **impact with humility.** Be genuinely enthusiastic about convening power and reach, while showing you understand the model succeeds only when its outputs are adopted by actors with real authority, and that legitimacy must be continually earned through inclusion and transparency." },
  { pageBreak: true },

  /* ===================== SECTION 6 ===================== */
  { h1: "6 · Global Regulatory Landscape and Geopolitics" },
  { lead: "Frontier-tech governance is now geopolitics by other means. You need the map of who regulates how, why they diverge, and where the openings for cooperation lie." },
  { h2: "6.1 The three rulebooks (plus the middle path)" },
  { table: { head: ["Jurisdiction", "Philosophy", "Signature instruments", "Optimises for"], widths: [1450, 3050, 2650, 2210], rows: [
    ["European Union", "Rights- and risk-based; precautionary; comprehensive horizontal law.", "AI Act; GDPR; Digital Services/Markets Acts; product-liability regime.", "Fundamental rights, safety, the single market — and regulatory export."],
    ["United States", "Market-led; sectoral; light-touch; innovation-first.", "Executive orders; NIST frameworks; agency guidance; state laws.", "Innovation speed, competitiveness, private-sector leadership."],
    ["China", "State-directed; vertical and targeted; control-oriented.", "Algorithm/deep-synthesis/generative-AI rules; CAC filings.", "State control, social stability, strategic industrial policy."],
    ["United Kingdom", "Principles-based, pro-innovation; empowers existing regulators.", "Cross-sector principles; sector regulators; AI Security Institute.", "Agility and inward investment without a single big statute."],
  ]}},
  { h2: "6.2 The Brussels effect and its limits" },
  { p: "The **Brussels effect** (Anu Bradford) is the mechanism by which EU rules become de facto global standards: to access the EU’s large market, firms adopt EU-compliant practices everywhere (the *de facto* effect), and other governments then copy the EU template (the *de jure* effect). GDPR is the archetype; the AI Act is the test case. The sophisticated, current view — voice it — is that the effect is **real but weakening**: the US and China are actively pursuing rival models, the EU itself is under competitiveness pressure to simplify (the Draghi-report anxiety), and for a borderless technology a territorial theory of influence explains less than it used to. The frontier is shifting from *exporting regulation* to *exercising governance*." },
  { h2: "6.3 Fragmentation versus interoperability" },
  { p: "The meta-problem your role addresses is **regulatory fragmentation**: the same product can be lawful in one jurisdiction, require a conformity assessment in a second, an algorithmic audit in a third and a state filing in a fourth. Fragmentation raises compliance cost, entrenches large incumbents (only they can afford four rulebooks), enables **forum-shopping**, and slows beneficial diffusion. The prize is **interoperability** — not identical rules, but rules *compatible in effect* through mutual recognition, common standards and minimum baselines. Convening for interoperability is precisely the Forum’s comparative advantage." },
  { h2: "6.4 The institutional map" },
  { table: { head: ["Body", "Role in frontier-tech governance"], widths: [2650, 6710], rows: [
    ["OECD", "The reference house for regulatory policy and international regulatory co-operation; OECD AI Principles; the AI Policy Observatory; anticipatory-governance work."],
    ["ISO / IEC / IEEE / CEN-CENELEC", "Technical standard-setting — the soft-law machinery regulators reference to give agile rules teeth (e.g. AI Act harmonised standards)."],
    ["G7 / G20", "Political coordination; the G7 Hiroshima Process on AI; agenda-setting for tech governance."],
    ["UN family (UNOOSA, ITU, UNESCO, WHO)", "Space (UNOOSA/COPUOS), telecoms and standards (ITU), AI ethics and neurorights (UNESCO), health/biotech (WHO), plus UN AI processes and the Global Digital Compact."],
    ["Council of Europe", "The Framework Convention on AI — the first binding international AI treaty, rights-anchored and open beyond Europe."],
    ["NIST", "De facto global influence via frameworks (AI RMF) and standards (PQC) despite being a national body."],
  ]}},
  { h2: "6.5 The geopolitics of the frontier" },
  { p: "Two forces to name. **Techno-nationalism / tech sovereignty:** states increasingly treat frontier technologies as strategic national assets — via industrial policy, subsidies and **export controls** (the “small yard, high fence” doctrine of restricting a narrow set of critical technologies while keeping the rest open), with **standard-setting itself now a geopolitical contest**. **The commons counter-pressure:** some frontier domains — space, climate intervention, catastrophic bio-risk — are irreducibly global and cannot be secured by any state alone, and the **Global South** risks being rule-taker rather than rule-maker (the digital and capability divide). Your workstream lives in the tension between competitive advantage and shared-risk cooperation; holding both truths at once is the mark of a serious frontier-governance strategist." },
  { pageBreak: true },

  /* ===================== SECTION 7 — the consulting bridge ===================== */
  { h1: "7 · Regulatory Transformation — the Systems Lens" },
  { lead: "This chapter recasts everything above as a transformation problem, using the exact frameworks a management-consulting panel reasons with. It is your highest-leverage material: it makes governance legible to ex-consultants, and it maps directly onto your own background in industry transformation and replication." },
  { p: "The core move: **treat a country or sector going from an ungoverned frontier technology to responsible, scaled adoption as running a transformation** — with a maturity curve, a capability gap, a scaling slump, an ecosystem to orchestrate, and reference cases to replicate. Every sub-section below has a manufacturing-transformation analogue your panel will recognise, and a governance translation you can deploy." },

  { h2: "7.1 The regulatory maturity curve" },
  { p: "Just as manufacturers move up a maturity ladder (standardised → digitised → connected → predictive → autonomous), a jurisdiction’s capacity to govern emerging technology can be staged. A useful five-level curve to offer in a case:" },
  { table: { head: ["Level", "Regulatory maturity", "Characteristic"], widths: [900, 2600, 5860], rows: [
    ["1", "Absent", "No rules; the technology outpaces any framework (the default frontier state)."],
    ["2", "Reactive", "Rules written after harm occurs; slow, litigation-driven, backward-looking."],
    ["3", "Structured", "Risk-based rules and RIA in place, but static and quick to date."],
    ["4", "Anticipatory", "Foresight, sandboxes and pilots generate evidence *before* rules are fixed."],
    ["5", "Adaptive / Agile", "Living rules with feedback loops; the regime learns and revises continuously."],
  ]}},
  { p: "The strategic point: most frontier domains sit at Level 1–2, GRIP’s ambition is to move jurisdictions to Level 4–5, and the Readiness Index is the diagnostic that scores where a country sits. This staging is also how you *sequence* your workstream — you cannot sell an adaptive regime to a jurisdiction that lacks basic institutional capacity, any more than you sell an autonomous factory to a plant that has not yet digitised." },

  { h2: "7.2 The capability gap, not the technology gap" },
  { p: "Borrow the single most important insight in your manufacturing notes and apply it to governance: **jurisdictions that fail to govern emerging technology usually have a capability gap, not a rules gap.** The bottleneck is rarely the absence of a statute; it is the absence of the *capability* to design, run and adapt one — technical literacy inside the regulator, cross-agency coordination, data and analytics, foresight capacity, and workforce. Three capability layers, mirroring the manufacturing model:" },
  { b: [
    "**Technical / institutional capability** — can the regulator understand the technology, run a sandbox, read a model evaluation, coordinate across agencies?",
    "**Organisational capability** — governance structures, cross-functional coordination, change management, and a learning-organisation culture that captures and reuses experience.",
    "**Workforce capability** — the scarce “translator” and technical-supervisor layer (the governance analogue of the manufacturing technician shortage) who sit between policymakers and technologists.",
  ]},
  { p: "So the right question in a case is rarely “what rule should they write?” It is “**what capability are they missing, and how do we build it?**” That reframe is exactly what a consultant panel wants to hear, and it is where your regulatory-innovation toolkit (sandboxes to build technical capacity, standards to import expertise, international cooperation to borrow capability) becomes the answer." },

  { h2: "7.3 The governance scaling slump" },
  { p: "Manufacturers stall in “pilot purgatory” — successful pilots that never scale because they were built as standalone experiments, not as replicable systems, and because integration across functions is the expensive, un-owned part. Governance has an exact analogue:" },
  { b: [
    "**Pilot purgatory in policy:** a sandbox or pilot proves a concept but never graduates into permanent, scaled rules — because no one designed the codification path and no one owns cross-agency integration.",
    "**Siloed functions:** the most-cited barrier to scale. Frontier governance cuts across ministries (economy, health, security, digital), and regimes with strong silos fail — the fix is shared mandates, cross-functional governance bodies, and reorganising the work around outcomes rather than departments.",
    "**Two-speed regulators:** advanced capability in pockets, legacy everywhere else — the governance version of the manufacturing “two-speed organisation.”",
  ]},
  { p: "The lever that breaks the slump is the same in both worlds: **cross-functional governance with a real mandate, shared metrics, and a codification/replication plan built in from the pilot stage.**" },

  { h2: "7.4 Ecosystem orchestration" },
  { p: "No single actor governs a frontier technology; an *ecosystem* does. Orchestration means **designing the conditions and incentives under which independent actors — with different and sometimes conflicting interests — collectively produce an outcome none could produce alone.** The actor groups in a regulatory ecosystem:" },
  { table: { head: ["Actor group", "Role", "What they need to move"], widths: [2500, 3700, 3160], rows: [
    ["Regulators & governments", "Set rules, standards, mandates.", "Political cover, evidence, capability."],
    ["Industry / operators", "Build and deploy the technology.", "Certainty, a legal path to test, a level field."],
    ["Standards & enabler bodies", "Provide technical norms and validation.", "Consensus and reference use by regulators."],
    ["Academia & research", "Generate evidence and foresight.", "Access, funding, translation into policy."],
    ["Civil society", "Represent rights, safety, the public interest.", "Genuine inclusion and transparency."],
    ["Financial institutions", "Provide the capital that scales adoption.", "Predictable rules and de-risking."],
    ["International organisations", "Enable interoperability and cooperation.", "Aligned incentives across borders."],
  ]}},
  { p: "The orchestration insight that connects directly to your own background: **sequencing.** You do not need every actor at once — you identify the minimum set of *first-mover commitments* that make others follow (a lead government commits, two or three industry players join, standards bodies codify, financiers price it in), and you engineer the government’s role to taper as the ecosystem matures — heavy scaffolding and de-risking early, graduating to lighter, self- and co-regulation as capability builds. This is the regulatory expression of exactly the industry-transformation sequencing you studied in the renewable-energy transition." },

  { h2: "7.5 Reference cases and replication logic" },
  { p: "GRIP’s Playbook, and the “scalable, replicable model” in your JD, both rest on one idea: a **reference case** — a real-world implementation documented rigorously enough to serve as a blueprint others can learn from, adapt and replicate. For a reference case to be valuable it must capture three things:" },
  { n: [
    "**What was done** — the actual intervention.",
    "**What conditions made it work** — the context that mattered.",
    "**What is transferable** — the underlying logic others can apply.",
  ]},
  { p: "And it must contain **conditional logic**, not a copy-paste template: *“if your context is X, do Y; if your context is W, adapt by doing Z.”* This is the difference between a case study and a playbook. It is also, precisely, the intellectual move behind your own work reverse-engineering the ecosystem conditions and sequencing of a national transformation into a replication framework for other jurisdictions — you have already built the artefact GRIP is trying to build, in a different domain." },
  { callout: [
    "**The line to land with the panel:** “A reference case isn’t a success story — it’s a transferable model with the conditional logic made explicit. You don’t export the rule; you export the method: if context X, do Y; if W, adapt by Z. That’s what makes a governance approach replicable across jurisdictions, and it’s the work I’ve done before in industrial transformation.”",
  ]},

  { h2: "7.6 Transformation design applied to your workstream" },
  { p: "Finally, the design sequence a consultant uses to run any transformation — and which you can apply verbatim to standing up a frontier-tech governance initiative:" },
  { n: [
    "**Diagnostic** — where a jurisdiction/sector is on the maturity curve; its capabilities (technical, institutional, workforce); the gap between start-point and goal.",
    "**Define the ambition** — a concrete picture of the end state, co-designed with the actors who will own and drive it; start with the most advanced or willing sector and keep ambition at a level the ecosystem can actually carry.",
    "**Design the roadmap and levers** — the workstreams (capability-building, sandboxes, standards, cooperation), each broken into levers, each into measures: **workstreams → levers → measures.**",
    "**Roll out** — sequence first-mover commitments, prove a reference case, then replicate.",
  ]},
  { p: "This is the backbone of your 100-day plan (Part B) and the answer to any “how would you build this?” case: **diagnose → define ambition → design levers → roll out and replicate**, with evidence before scale, capability before rules, and the government’s role engineered to taper as the ecosystem matures." },
  { pageBreak: true },
);

module.exports = { blocks };
