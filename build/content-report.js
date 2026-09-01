// Body content for the interview dossier, as a block DSL array.
// Prose uses typographic quotes to avoid JS escaping.

const blocks = [];
const push = (...b) => blocks.push(...b);

/* ============================ SECTION 0 ============================ */
push(
  { h1: "0 · How to Use This Dossier" },
  { lead: "This is a cram-and-command document. It is built so you can go from “adjacent” to “sounds like one of us” in front of a senior World Economic Forum panel — including under management-consulting-style case pressure." },
  { p: "Read it in three passes, matched to how much time you have before the interview:" },
  { b: [
    "**Pass 1 — the Cheat Sheet (separate file).** Two pages: the vocabulary, the frameworks, the numbers, the power phrases, and the ten questions you must not fumble. Read it last, the morning of.",
    "**Pass 2 — Sections 6 and 7 (Q&A and cases).** This is where you rehearse *out loud*. Every answer models the structure, altitude and vocabulary a panelist expects. Practise delivering the “signal phrase” in each — the compressed line that tells an expert you actually understand the field.",
    "**Pass 3 — Sections 1–5 (the knowledge base).** The regulatory-innovation craft (§2), the five frontier domains (§3), the WEF operating model (§4), and the global landscape (§5). This is the reservoir the Q&A draws on. Read it once for understanding, not memorisation.",
  ]},
  { h2: "The role in one breath" },
  { callout: [
    "You would build and lead a **new cross-cutting workstream** inside the Forum’s **Global Regulatory Innovation Platform (GRIP)** that invents better *ways to regulate* frontier technologies — quantum, autonomous mobility and robotics, biotechnology, planetary systems, and whatever comes next — and turns multistakeholder dialogue into regulation and governance that actually ships. You are not a regulator. You are the person who designs the model, convenes the ecosystem, produces the knowledge products, and makes “responsible innovation” operational across jurisdictions.",
  ]},
  { h2: "If you remember nothing else — ten anchors" },
  { n: [
    "**Regulation is a strategic lever, not just a brake.** GRIP’s core thesis: in the Intelligent Age, the *quality and agility* of a country’s regulatory model shapes its competitiveness — regulation creates conditions for ideas to scale safely, it doesn’t only contain risk.",
    "**The problem you exist to solve is the pacing problem** — technology moves exponentially, law moves incrementally, and the gap is where both harm and lost opportunity live.",
    "**The craft has a name and a toolkit:** agile / anticipatory / adaptive regulation — sandboxes, outcome-based rules, risk-based tiering, collaborative and experimental regulation, standards and soft law, RegTech/SupTech, and international regulatory cooperation.",
    "**GRIP is real and recent:** launched July 2025 by the Forum with the United Arab Emirates; a two-year roadmap; three deliverables — a **Global Regulatory Playbook**, a **Regulatory Future Readiness Index**, and a **Global Regulatory Innovation Hub** (a live pilot/sandbox environment).",
    "**You sit across Centres.** GRIP is cross-cutting; your workstream bridges GRIP with the Centre for Frontier Technologies and Innovation, plus Cybersecurity and AI. Your value is *connective*, not siloed.",
    "**Five domains, one lens.** For each frontier technology, know its *core governance dilemma* — the single hardest trade-off — and you can hold your own with a subject expert without being one.",
    "**The world has three rulebooks** — the EU’s rights-and-risk model, the US market-led model, and China’s state-directed model — plus the UK’s principles-based middle path. Fragmentation is the meta-problem; interoperability is the prize.",
    "**The Forum’s method is convening, not legislating.** Impact comes through trusted multistakeholder communities, influential knowledge products, and initiatives that governments and companies choose to adopt.",
    "**Soft law is not weak law.** Standards, codes of practice and principles are how you govern faster than statute — and they often harden into binding rules later.",
    "**Your differentiator is translation** — turning emerging technology into practical, implementation-ready governance that a minister, a general counsel and a startup founder can all act on.",
  ]},
  { pageBreak: true },
);

/* ============================ SECTION 1 ============================ */
push(
  { h1: "1 · The Role and the Panel, Decoded" },
  { h2: "1.1 What GRIP actually is (the facts you can cite)" },
  { p: "The **Global Regulatory Innovation Platform (GRIP)** was launched in July 2025 by the World Economic Forum together with the Government of the United Arab Emirates. Its premise is that a widening gap between fast-moving technology and slow-moving, legacy regulation is now a first-order economic and social risk — and that the answer is to help governments *design and adapt* regulation in step with technological change, framed for what the Forum calls the “Intelligent Age.”" },
  { p: "GRIP is deliberately positioned around a reframe you should adopt as your own: **regulation as a strategic lever.** In fast-developing fields, the agility and quality of the regulatory model increasingly determine a country’s competitiveness and influence — so policymakers should treat regulation not merely as a way to contain risk, but as a way to create the conditions for new ideas to develop and scale safely." },
  { p: "Over a two-year roadmap, GRIP commits to three concrete knowledge products. Know these cold — they are the most likely single fact-set the panel will expect you to recognise:" },
  { table: { head: ["GRIP deliverable", "What it is", "Why it matters to your workstream"], widths: [2600, 3700, 3060], rows: [
    ["Global Regulatory Playbook", "Real-world case studies, frameworks and tools for regulators adopting agile approaches.", "The template for the “influential knowledge products” your role must produce for frontier tech."],
    ["Regulatory Future Readiness Index", "A benchmark of how prepared countries are to govern emerging technologies.", "A diagnostic you can extend into frontier domains and use to convene and rank-motivate governments."],
    ["Global Regulatory Innovation Hub", "A pilot environment where governments, startups and enterprises can test and refine regulation before scaling.", "A ready-made sandbox mechanism you can point frontier-tech pilots into."],
  ]}},
  { p: "GRIP’s initial sector focus is **AI, healthcare and digital finance** — dynamic, high-stakes sectors where the pacing problem is already acute. Your workstream is the move *upstream* into the earlier-stage frontier domains where the rules barely exist yet. The Forum’s companion 2025 publication, **“The Regulatory Frontier: Designing the Rules that Shape Innovation,”** is the sister text to know by name." },
  { h2: "1.2 Where your role sits" },
  { p: "The posting is **Policy Lead, GRIP — Frontier Technology and Regulatory Innovation**, a temporary role (end date May 2027) based in Geneva, reporting to the **Head of Digital Inclusion**. You would *build and lead a new cross-cutting workstream* — meaning it does not exist yet and you are its founder-operator. The explicit brief:" },
  { b: [
    "Partner closely with the **Centre for Frontier Technologies and Innovation (CFTI)** and the Forum’s technology initiatives — **quantum technologies, autonomous mobility and robotics, biotechnology, planetary systems**, and future frontier domains.",
    "Develop **innovative regulatory approaches** that enable responsible innovation and accelerate societal impact.",
    "Create a **scalable, replicable model** for regulatory innovation that bridges technology development and public policy — replicable across industries and jurisdictions.",
    "Convene global leaders, produce knowledge products, and **turn dialogue into implementation** through partnerships with governments, regulators, industry, academia and civil society.",
    "Work in a matrixed way with the **Centre for Cybersecurity** and the **Centre for AI Excellence**, and with Forum communities such as Chief Legal Officers and Chief Compliance Officers.",
  ]},
  { callout: [
    "**The one-sentence self-thesis to rehearse:** “I build the connective tissue between where technology is going and how it gets governed — designing regulatory approaches that are agile enough to keep pace, credible enough for regulators to adopt, and practical enough to be replicated across borders.”",
  ]},
  { h2: "1.3 CFTI and the C4IR network" },
  { p: "The **Centre for the Fourth Industrial Revolution (C4IR)** is the Forum’s platform for anticipating exponential technologies and fostering responsible innovation. It operates as a **global network of government- and non-profit-hosted centres** that give national “trailblazers” a trusted space to share, learn and problem-solve. The network spans centres in the United States, Germany, Saudi Arabia, Japan and India, and in early 2026 the Forum signed agreements for five more — including an **Abu Dhabi Centre for Frontier Technologies** focused on quantum computing, robotics, propulsion and space systems, and related AI applications. Knowing the network model matters because your workstream would plug *into* it: the centres are your delivery vehicles and pilot sites." },
  { h2: "1.4 What “success” looks like in this seat" },
  { p: "Read against the JD, success is four things, and your interview narrative should hit all four:" },
  { table: { head: ["Success dimension", "What the JD is really asking", "Your proof-point to prepare"], widths: [2200, 4000, 3160], rows: [
    ["A model", "A scalable, replicable method for regulatory innovation — not one-off projects.", "A time you designed a repeatable framework/process others adopted."],
    ["Content", "High-quality, action-oriented thought leadership that governments and industry actually use.", "A report/playbook/tool you authored that changed a decision."],
    ["Community", "A robust, engaged multistakeholder ecosystem across the regulatory value chain.", "A coalition or working group you built and sustained."],
    ["Impact", "Dialogue converted into concrete regulatory or governance outcomes.", "A convening that led to an actual policy, pilot, standard or commitment."],
  ]}},
  { h2: "1.5 The panel — and what each seat is testing" },
  { p: "You will likely face some combination of your prospective manager (Head of Digital Inclusion) and leaders from CFTI/C4IR, Cybersecurity and AI, possibly with an external regulator or partner. Map your preparation to what each is probing:" },
  { table: { head: ["Panelist archetype", "What they test", "How to win them"], widths: [2500, 3400, 3460], rows: [
    ["Your manager (Digital Inclusion / GRIP)", "Can you build a workstream from zero, operate in a matrix, and make GRIP’s model tangible for frontier tech?", "Show a 100-day plan, name GRIP’s three deliverables, and speak the “regulation-as-lever” thesis."],
    ["CFTI / C4IR leader", "Frontier-tech fluency and respect for the technologists you’d partner with.", "Nail each domain’s core governance dilemma; position yourself as translator, not rival expert."],
    ["Regulatory-innovation expert", "Command of the actual toolkit — sandboxes, adaptive/outcome-based/risk-based, soft law.", "Use the toolkit precisely and name real examples (UK FCA sandbox, EU AI Act sandboxes)."],
    ["Cyber / AI Centre partner", "Whether you’ll collaborate or empire-build; cross-cutting instincts.", "Frame your workstream as connective and credit adjacent Centres explicitly."],
    ["External regulator / partner", "Diplomatic credibility with senior public-sector leaders; can you be trusted in the room.", "Demonstrate multistakeholder facilitation and cultural range; be humble about limits."],
  ]}},
  { h2: "1.6 Turning “adjacent” into an advantage" },
  { p: "You are coming in adjacent to deep frontier-tech expertise, and the panel will sense it. Do not fake depth — convert the gap into a strength with three moves. **First, own the translator role:** the Forum does not need another quantum physicist; it needs someone who can move between the lab, the ministry and the boardroom. **Second, go deep on the craft, not the science:** be genuinely expert in regulatory innovation (§2) — that is the actual job, and it is where an adjacent candidate can legitimately out-prepare a domain specialist. **Third, show pattern-transfer:** the reason one governance model can travel from fintech to AI to biotech is that the *regulatory* patterns rhyme even when the science doesn’t — demonstrating that you see those patterns is exactly the “scalable, replicable model” the role wants." },
  { pageBreak: true },
);

/* ============================ SECTION 2 ============================ */
push(
  { h1: "2 · The Regulatory-Innovation Toolkit — the Core Craft" },
  { lead: "This is the deepest technical layer of the job and the one an adjacent candidate can most convincingly master. If you are fluent here, you are credible everywhere else." },
  { h2: "2.1 The problem the whole field exists to solve" },
  { p: "Three linked ideas define the intellectual terrain. Name them and you signal that you know the literature, not just the buzzwords." },
  { b: [
    "**The pacing problem.** Technology develops exponentially; law and regulation develop incrementally. The widening gap between them leaves citizens with outdated protections *and* leaves innovators with rules that don’t fit — harm and lost opportunity at the same time.",
    "**The Collingridge dilemma (the dilemma of control).** Early in a technology’s life it is easy to shape but hard to predict; by the time its impacts are clear, it is entrenched and hard to change. Anticipatory governance is the attempt to act in that early, uncertain window anyway.",
    "**Precaution versus permissionless innovation.** The precautionary principle (dominant in the EU) says: prove it safe before deployment. Permissionless innovation (historically dominant in the US) says: allow it, then intervene on evidence of harm. Most modern regulatory innovation is an attempt to get the *learning* of permissionless with the *safety* of precaution — which is exactly what a sandbox is.",
  ]},
  { h2: "2.2 The five principles of agile regulation" },
  { p: "The Forum’s own **“Agile Regulation for the Fourth Industrial Revolution: A Toolkit for Regulators” (2020)** crystallised five principles that are now the shared vocabulary of the field. Memorise all five and you can speak the Forum’s house language:" },
  { table: { head: ["Principle", "What it means", "Concrete example"], widths: [2050, 4050, 3260], rows: [
    ["Adaptive regulation", "“Regulate, monitor, iterate.” Rules are living instruments, revised as evidence accumulates — with review clauses and feedback loops built in.", "Sunset clauses; scheduled statutory reviews; iterative rulemaking."],
    ["Outcome-based regulation", "Specify the outcome to achieve, not the technology or method to use — letting innovators find the means.", "“Systems must be safe/explainable” rather than “use algorithm X.”"],
    ["Risk-based (risk-weighted) regulation", "Concentrate regulatory effort where potential harm is greatest; light-touch where it is low.", "The EU AI Act’s tiers: unacceptable / high / limited / minimal risk."],
    ["Collaborative regulation", "Co-design and co-/self-regulation with industry, and alignment across regulators and borders.", "Codes of practice; industry standards recognised by regulators."],
    ["Regulatory sandboxes", "Controlled, time-limited environments to test innovations with real users under supervision and relaxed rules.", "UK FCA fintech sandbox; AI Act national sandboxes."],
  ]}},
  { p: "Around those five sit the rest of the toolkit, worth naming to show range: **experimental regulation** (regulators and firms jointly run trials and learn), **data-driven regulation** (real-time supervision using data), **self- and co-regulation** (industry-led governance recognised by the state), **joined-up regulation** (one-stop shops across agencies), and **international regulatory cooperation** (mutual recognition and interoperability across borders)." },
  { h2: "2.3 Regulatory sandboxes — the flagship instrument" },
  { p: "The sandbox is the single most important instrument to be able to discuss in detail, because it is both the field’s signature idea and GRIP’s own “Innovation Hub.” A regulatory sandbox is a **controlled, time-limited space in which firms test new products, services or business models with real customers, under close supervision, with certain rules relaxed or waived and with safeguards (participant limits, disclosure, exit plans).**" },
  { b: [
    "**Origin and spread.** Pioneered by the UK’s Financial Conduct Authority for fintech in 2016; now adopted in **50+ jurisdictions** across finance, energy, health, mobility and data.",
    "**What it buys the regulator:** early sight of emerging tech, evidence for future rules, and relationships with innovators. **What it buys the firm:** a legal path to test, faster time-to-market, and regulatory certainty.",
    "**Variants to name:** *thematic* sandboxes (one technology), *cross-border* sandboxes (multi-regulator, e.g. the EU’s), *policy prototyping*, and *TechSprints*. The EU AI Act **mandates that every member state establish at least one AI regulatory sandbox by August 2026** — a concrete, current fact worth deploying.",
    "**The honest limits (say these unprompted to show maturity):** sandboxes can privilege well-resourced incumbents; they don’t scale rules automatically (the “graduation” or exit problem); they risk becoming PR rather than learning; and they need real regulatory capacity to run well. A sophisticated answer pairs the sandbox with a plan to *codify* what the sandbox learns.",
  ]},
  { h2: "2.4 Anticipatory and adaptive governance" },
  { p: "If sandboxes are the instrument, **anticipatory governance** is the mindset. The current academic framing describes a culture built on three capabilities you can cite directly:" },
  { n: [
    "**Regulatory foresight** — systematic horizon-scanning and scenario work to see technologies coming (the antidote to the Collingridge dilemma).",
    "**Regulatory experimentation** — sandboxes, pilots, testbeds and living labs that generate real-world evidence before rules are fixed.",
    "**Regulatory learning** — institutionalised feedback loops that turn that evidence back into revised rules (the “adaptive” half of the cycle).",
  ]},
  { p: "The practical mechanisms that operationalise this — worth having on the tip of your tongue — are **sunset clauses**, **mandatory post-implementation review**, **iterative / staged rulemaking**, **regulatory impact assessment (RIA)**, and **living guidance** that is updated more like software than statute." },
  { h2: "2.5 Standards and soft law" },
  { p: "Soft law is how you govern at the speed of technology. It includes **technical standards** (ISO/IEC, IEEE, CEN-CENELEC), **codes of practice**, **principles and guidelines**, and **voluntary commitments**. Two moves make you sound expert here:" },
  { b: [
    "**Distinguish *de jure* from *de facto* standards** — those set by formal bodies versus those that win in the market — and note that regulators increasingly *reference* standards to give soft law teeth (the “New Approach” in EU product law is the classic template).",
    "**Name the soft-law-to-hard-law pipeline.** Principles and codes (fast, flexible, non-binding) are often the R&D phase for binding regulation: the OECD AI Principles → national laws; the EU’s voluntary **GPAI Code of Practice (July 2025)** → the binding AI Act obligations it operationalises. Soft law buys time and builds consensus while hard law catches up.",
  ]},
  { h2: "2.6 RegTech and SupTech" },
  { p: "**RegTech** is technology that helps the regulated comply (automated reporting, KYC/AML, compliance monitoring). **SupTech** is technology that helps the *supervisor* regulate (real-time data feeds, machine-readable regulation, algorithmic market surveillance). The forward idea to cite is **machine-readable and even “machine-executable” regulation** — rules published as code so compliance can be automated and supervision made continuous rather than periodic. This is the natural bridge between “regulatory innovation” and the frontier technologies themselves." },
  { h2: "2.7 International regulatory cooperation" },
  { p: "Because frontier technologies are borderless and your mandate is explicitly cross-jurisdictional, the international layer is central. The vocabulary: **mutual recognition** (accept each other’s conformity assessments), **regulatory interoperability** (rules different in form but compatible in effect), **regulatory diplomacy**, **minimum common standards**, and **plurilateral coordination** (coalitions of the willing where universal treaties stall). The OECD is the reference institution for the discipline of international regulatory co-operation (IRC); the G7 and standards bodies are the practical venues." },
  { h2: "2.8 Choosing the instrument — and naming the trade-offs" },
  { p: "Panels reward candidates who don’t just list tools but *match tool to situation* and are honest about costs. Use this as your mental selection grid:" },
  { table: { head: ["When the situation is…", "Reach for…", "Because…"], widths: [3100, 3100, 3160], rows: [
    ["High uncertainty, need evidence fast", "Sandbox / pilot / testbed", "Generates real-world data without committing to premature rules."],
    ["Fast-moving tech, static rules would date", "Outcome-based + adaptive rules", "Specifies ends not means; built to be revised."],
    ["Uneven risk across use-cases", "Risk-based tiering", "Concentrates scarce regulatory effort where harm is greatest."],
    ["Global technology, national regulators", "Standards + international cooperation", "Soft law and interoperability move faster than treaties."],
    ["Consensus not yet mature", "Principles / codes of practice", "Build alignment now; harden into law later."],
  ]}},
  { callout: [
    "**The three trade-offs to name aloud in any case:** innovation vs. protection (permissiveness vs. safety); speed vs. legitimacy (agile rules vs. democratic due process); and flexibility vs. certainty (adaptive rules vs. the predictability business needs to invest). Good regulatory innovation is the art of *managing* these tensions, not pretending they don’t exist.",
  ]},
  { pageBreak: true },
);

/* ============================ SECTION 3 ============================ */
push(
  { h1: "3 · The Frontier-Technology Domains" },
  { lead: "You will not be the deepest expert on any of these. You must hold, for each, the state of play, the single core governance dilemma, the current regulatory landscape, and the open questions — enough to reason intelligently in a case and to earn a technologist’s respect." },
  { h2: "3.0 One lens for every domain" },
  { p: "Apply the same five-part scan to each technology so your knowledge is structured and recallable under pressure: **(1) what it is and where it stands; (2) the core governance dilemma — the hardest single trade-off; (3) the current regulatory landscape; (4) the open questions; (5) the regulatory-innovation angle — how the §2 toolkit applies.** The dilemmas are the payload; lead with them." },

  { h2: "3.1 Artificial Intelligence and Foundation Models" },
  { h3: "State of play" },
  { p: "The centre of gravity is **general-purpose AI (GPAI) / foundation models** — large models trained on broad data and adaptable to many tasks — and increasingly **agentic AI** that can take actions, not just generate content. Capability is advancing faster than evaluation science, which is the root of the governance problem." },
  { h3: "Core governance dilemma" },
  { p: "**How do you regulate a general-purpose technology whose risks are emergent, whose capabilities its own developers cannot fully predict, and whose development is concentrated in a handful of firms — without either freezing innovation or licensing harm?** The sub-tension: model-level rules (govern the foundation model) versus use-level rules (govern the application)." },
  { h3: "Regulatory landscape" },
  { b: [
    "**EU AI Act** — the world’s first comprehensive horizontal AI law; in force since August 2024, phasing in: banned practices and AI-literacy duties (Feb 2025), **GPAI-model obligations (Aug 2025)**, most high-risk rules (Aug 2026), full application (2027). It is **risk-tiered**: unacceptable (prohibited), high-risk (conformity assessment), limited (transparency), minimal. GPAI models with **systemic risk** face extra duties — model evaluation, adversarial testing/red-teaming, incident reporting to the new **AI Office**, and cybersecurity — supported by a voluntary **GPAI Code of Practice (July 2025)**.",
    "**United States** — market-led and sectoral; executive action and agency guidance rather than a comprehensive statute; the **NIST AI Risk Management Framework** as the voluntary backbone; growing state-level laws.",
    "**United Kingdom** — a deliberately **principles-based, pro-innovation** approach that empowers existing sector regulators rather than creating one AI law, paired with an AI Safety Institute for frontier-model evaluation.",
    "**China** — vertical and targeted: measures on recommendation algorithms, deep synthesis and generative AI, with algorithm registry filings to the Cyberspace Administration.",
    "**International** — OECD AI Principles, the **G7 Hiroshima Process** code of conduct, the **Council of Europe Framework Convention on AI** (the first binding international AI treaty), and UN processes.",
  ]},
  { h3: "Open questions / the regulatory-innovation angle" },
  { p: "Open: how to evaluate frontier models (the immature science of “evals” and red-teaming); liability across the AI value chain; open-source models and diffusion of capability; compute governance; and the copyright/training-data fight. The toolkit angle: **AI is the canonical case for sandboxes, outcome-based rules and adaptive review** — the AI Act itself mandates national sandboxes, and the voluntary Code of Practice is a live example of the soft-law-to-hard-law pipeline." },

  { h2: "3.2 Quantum Technologies" },
  { h3: "State of play" },
  { p: "Three strands: **quantum computing** (still noisy, pre-fault-tolerant, but advancing), **quantum communication** (quantum key distribution), and **quantum sensing** (ultra-precise measurement). The near-term policy driver is not a working quantum computer — it is the *anticipation* of one." },
  { h3: "Core governance dilemma" },
  { p: "**How do you govern a technology whose most consequential risk is future and cryptographic — the day a quantum computer breaks today’s public-key encryption — while its benefits are dual-use and its supply chain is a geopolitical battleground?** The signature threat is **“harvest now, decrypt later”**: adversaries stealing encrypted data today to decrypt once quantum-capable." },
  { h3: "Regulatory landscape" },
  { b: [
    "**Post-quantum cryptography (PQC) standards** — NIST published the first finalised PQC standards in August 2024: **FIPS 203 (ML-KEM / Kyber), 204 (ML-DSA / Dilithium), 205 (SLH-DSA / SPHINCS+)**, with further algorithms (HQC, FN-DSA/Falcon) following. This is the concrete governance action of the decade for quantum.",
    "**Migration mandates** — US policy (NSM-10, OMB guidance, CNSA 2.0) requires federal agencies to inventory quantum-vulnerable systems and migrate to quantum-safe cryptography on timelines running to the early-2030s.",
    "**Export controls** — the US, France, the Netherlands, the UK, Spain and China have introduced or tightened controls on quantum hardware and know-how; quantum is now firmly inside the “small yard, high fence” tech-security agenda.",
    "**Standards and coordination** — largely via NIST, ISO/IEC and national quantum strategies; there is no comprehensive international quantum treaty, which is itself the governance gap.",
  ]},
  { h3: "Open questions / the regulatory-innovation angle" },
  { p: "Open: the **quantum divide** (a handful of states and firms racing ahead); standard-setting as geopolitical contest; workforce and the migration cost; and dual-use export policy that doesn’t strangle science. Toolkit angle: quantum is a case for **anticipatory governance and foresight** above all — the migration to PQC is a masterclass in acting *before* the risk materialises, and a natural convening agenda for a frontier-tech workstream." },

  { h2: "3.3 Biotechnology and Synthetic Biology" },
  { h3: "State of play" },
  { p: "Precision gene editing (CRISPR and successors), **synthetic biology** (engineering biology like software), AI-designed proteins, and cheap DNA synthesis are compressing what used to take years into weeks. The market is scaling fast, and the **AI-bio convergence** is the defining new risk vector." },
  { h3: "Core governance dilemma" },
  { p: "**How do you capture biotech’s enormous benefits — new medicines, food security, climate solutions — while preventing catastrophic dual-use misuse, when the same knowledge and tools enable both, and much of the capability sits outside traditional regulatory reach?** The sharpest edge now: **AI tools (generative protein and sequence design) are outpacing the biosecurity screening that DNA-synthesis providers rely on.**" },
  { h3: "Regulatory landscape" },
  { b: [
    "**Biosecurity / dual-use** — the **Biological Weapons Convention (BWC)** is the treaty backbone but famously **lacks a verification mechanism**; governance leans on national **dual-use research of concern (DURC)** policies and voluntary **DNA-synthesis screening** (e.g. the International Gene Synthesis Consortium).",
    "**Recent moves** — a US executive order (2025) directing a biosafety/biosecurity policy refresh; proposed US legislation to tighten synthesis screening; the EU’s preparatory work on a **Biotech Act**; South Korea’s Synthetic Biology Promotion Act (2025).",
    "**Biosafety / environment** — the **Cartagena Protocol** (living modified organisms) and **Nagoya Protocol** (access and benefit-sharing) sit under the Convention on Biological Diversity; gene-editing product rules differ sharply between the EU (process-based, strict) and the US (product-based, lighter).",
    "**Ethics** — human germline editing remains broadly off-limits after the 2018 He Jiankui affair; UNESCO and WHO have active bioethics processes.",
  ]},
  { h3: "Open questions / the regulatory-innovation angle" },
  { p: "Open: how to govern AI-bio convergence; how to screen synthesis without stifling research; how to reach non-state and DIY-bio actors; and how to update a verification-free treaty regime. Toolkit angle: biotech needs **collaborative regulation and standards** (industry screening norms), **international cooperation** (a borderless risk), and hard thinking about the limits of soft law where the downside is catastrophic — a place to show you know when agility must yield to precaution." },

  { h2: "3.4 Robotics and Autonomous Mobility" },
  { h3: "State of play" },
  { p: "Two converging fronts: **autonomous vehicles** (self-driving cars, trucks and delivery), maturing from pilots toward deployment, and **general-purpose / humanoid robotics** and embodied AI, moving fast on the back of the AI wave. The unifying feature is **autonomous physical action in shared human spaces** — which makes safety and liability concrete, not abstract." },
  { h3: "Core governance dilemma" },
  { p: "**When an autonomous system acts in the world and causes harm, who is responsible — the manufacturer, the software developer, the operator, the owner — and how do you certify the safety of a system that learns and changes after it is deployed?** Traditional product-safety and liability law assumes a fixed product and a human in control; autonomy breaks both assumptions." },
  { h3: "Regulatory landscape" },
  { b: [
    "**International vehicle rules** — the **UNECE World Forum (WP.29)** and its automated-vehicle working party (GRVA) set harmonised rules; a UN regulation on Automated Driving Systems (adopted January 2026) anchors approval in a **“safety case” approach**. **SAE Levels 0–5** are the universal shorthand for automation.",
    "**EU** — a layered stack: the **AI Act** (safe/ethical AI design), the revised **Machinery Regulation (2023/1230, applying 2027)** adding autonomy thresholds, lifetime cybersecurity and risk classification, and the revised **Product Liability Directive** extending strict liability to software and AI.",
    "**Liability innovation** — the hardest live question; approaches range from strict manufacturer liability to no-fault insurance pools; the EU withdrew its separate AI Liability Directive, leaving the updated product-liability regime to carry the load.",
    "**Humanoid / consumer robots** — largely ungoverned: as of late 2025 there is no comprehensive US, EU or international regime for personal humanoid robots; **ISO 25785-1 (2025)** is a first safety standard, but only for industrial bipedal robots.",
  ]},
  { h3: "Open questions / the regulatory-innovation angle" },
  { p: "Open: liability allocation; safety assurance for learning systems; certification of continuously updated software; labour displacement; and consumer-robot safety. Toolkit angle: mobility is the home turf of **sandboxes and pilots** (testbeds, geofenced trials), **outcome-based safety cases**, and **standards** — and a vivid case for co-designing rules with cities and insurers as much as with manufacturers." },

  { h2: "3.5 Planetary Systems — Space and Climate Intervention" },
  { p: "“Planetary systems” spans two governance frontiers the Forum groups together: activity in **outer space**, and deliberate intervention in **Earth’s climate system**. Both share a defining feature — they concern **global commons** where national regulation is structurally insufficient." },
  { h3: "Space — state of play and dilemma" },
  { p: "Commercialisation (mega-constellations, launch, in-space services, resource ambitions) has outrun a treaty regime written for a state-only era. **Core dilemma: how do you govern a global commons filling with private actors — allocating orbits, assigning collision and debris liability, and clarifying resource rights — when the foundational law predates the commercial space economy and there is no pathway to bind even agreed norms?**" },
  { b: [
    "**The framework** — the **Outer Space Treaty (1967)** plus four companion treaties (Rescue, **Liability 1972**, Registration, Moon); administered via **UNOOSA/COPUOS**. Principles: space for the benefit of all, no national appropriation, state responsibility for national (including private) activity.",
    "**The gaps** — no binding regime for space-traffic management, debris removal, mega-constellation coordination, or resource property rights; the **Artemis Accords** and national space-resource laws are filling the vacuum unilaterally; **COSPAR planetary-protection** guidelines govern contamination.",
  ]},
  { h3: "Climate intervention (geoengineering) — state of play and dilemma" },
  { p: "Two families: **carbon dioxide removal (CDR)**, generally seen as necessary and more governable, and **solar radiation modification (SRM)** — reflecting sunlight to cool the planet — which is cheap, fast, globally consequential and deeply contested. **Core dilemma: who gets to set the planet’s thermostat?** A single actor could deploy SRM with planet-wide effects, yet there is no legitimate global body to authorise, monitor or halt it." },
  { b: [
    "**The state of governance** — a **Convention on Biological Diversity moratorium** on deployment (2010, reaffirmed 2024); a scientist-led **Non-Use Agreement** calling for a ban on outdoor experiments and deployment; an EU scientific-advisers recommendation (2024) for an EU-wide SRM moratorium; regional rejection (e.g. AMCEN, 2025); and research-governance initiatives (e.g. a UK research programme) on the other side of the argument.",
    "**The framing to hold** — the debate splits into “ungovernable, so ban it” versus “it may be needed, so govern the research now.” Being able to steelman *both* sides is exactly the balanced posture a Forum policy lead needs.",
  ]},
  { h3: "Regulatory-innovation angle (both)" },
  { p: "Planetary systems are the ultimate test of **international regulatory cooperation, soft law and anticipatory governance** — commons problems where multistakeholder convening (the Forum’s comparative advantage) may be the only viable path when treaties are gridlocked. They are also where you show intellectual honesty about the *limits* of agility: for planet-scale, irreversible risks, precaution and legitimacy can matter more than speed." },

  { h2: "3.6 Cross-cutting: convergence and the next frontier" },
  { p: "The most sophisticated point you can make is that the frontier is increasingly about **convergence**, not single technologies: **AI-bio** (models designing biology), **AI-quantum** (quantum-accelerated AI and quantum-broken cryptography), and **AI-robotics** (embodied intelligence). Convergence multiplies both capability and risk and defeats siloed, sector-by-sector regulation — which is the strategic argument for a *cross-cutting* regulatory-innovation workstream in the first place. Keep **cybersecurity** (the connective risk under everything digital) and **neurotechnology** (brain-computer interfaces and “neurorights,” an emerging governance area Chile and UNESCO have moved on) in your back pocket as the next domains on the horizon." },
  { pageBreak: true },
);

/* ============================ SECTION 4 ============================ */
push(
  { h1: "4 · The World Economic Forum Operating Model" },
  { lead: "Panels reliably test whether you understand *how the Forum works*. Fluency here is often the difference between a strong external candidate and one who is clearly ready to operate inside the institution." },
  { h2: "4.1 What the Forum is — and how it actually creates impact" },
  { p: "The World Economic Forum is the international organisation for **public-private cooperation**, convening leaders from politics, business, academia and civil society to shape agendas. Crucially, it has **no regulatory or legislative power.** Its influence is *convening* power. That distinction is the key to the whole role: your job is not to make rules but to build the conditions in which better rules get made and adopted. The Forum’s levers of impact are:" },
  { b: [
    "**Trusted convening** — bringing rivals and counterparts into the same room under Chatham House norms (Davos is the symbol, but the year-round communities are the substance).",
    "**Communities** — standing groups (e.g. Chief Legal Officers, Chief Compliance Officers, Young Global Leaders, Global Future Councils) that give initiatives their membership and reach.",
    "**Knowledge products** — reports, frameworks, playbooks, indices and white papers that shape how decision-makers frame problems (the currency your role trades in).",
    "**Platforms and initiatives** — multi-year, multistakeholder vehicles (GRIP is one) that turn dialogue into pilots, commitments and toolkits.",
    "**The C4IR network** — government-hosted centres that localise and operationalise governance work in-country.",
  ]},
  { h2: "4.2 Multistakeholder governance — and how to handle the critique" },
  { p: "The Forum’s theory of change is **multistakeholder governance**: convene enough of the relevant actors — states, firms, academia, civil society — and the resulting consensus is both more legitimate and more implementable than a state-only process. It is the ideological core of the institution and of this role." },
  { p: "You should also know the critique, because a sharp panel may probe it and a candidate who can engage it honestly stands out. Critics argue multistakeholderism can **dilute democratic accountability**, privilege **corporate voice** over public interest, lack **clear rules of representation and accountability**, and let powerful actors **forum-shop** for friendly venues. The Forum’s own **Global Redesign Initiative** put these questions squarely on the table." },
  { callout: [
    "**How to answer a multistakeholder-legitimacy challenge:** acknowledge the critique directly; argue that multistakeholder convening is a *complement* to democratic and multilateral processes, not a replacement; and stress the safeguards that earn legitimacy — transparency, genuinely inclusive representation (especially the Global South and civil society), and outputs that governments freely choose to adopt through their own accountable processes. Never sound defensive; sound like someone who has thought about the institution’s own limits.",
  ]},
  { h2: "4.3 The C4IR network in practice" },
  { p: "The **Centre for the Fourth Industrial Revolution** operates as a distributed network of government- and non-profit-hosted centres that co-design and pilot governance approaches nationally, then feed lessons back to the global network. For your workstream this is the delivery mechanism: a frontier-tech regulatory pilot can be prototyped in one centre (say, quantum or space in Abu Dhabi) and, if it works, packaged into a playbook and replicated elsewhere — which is precisely the “scalable, replicable model” the JD asks for." },
  { h2: "4.4 The Agile Governance lineage and the reports to name" },
  { p: "Show that you know the Forum has a *body of work* here, not just a new platform. The lineage:" },
  { table: { head: ["Forum work", "What it established", "Use it to…"], widths: [3050, 3550, 2760], rows: [
    ["Agile Governance: Reimagining Policy-making in the 4IR (white paper)", "The founding case for adaptive, responsive, human-centred policy-making.", "Show you know the intellectual roots of GRIP."],
    ["Agile Regulation for the 4IR — A Toolkit for Regulators (2020)", "The five principles and the practical toolkit (§2.2).", "Speak the Forum’s house vocabulary precisely."],
    ["Global Technology Governance Report (2021)", "A cross-technology governance-gap analysis.", "Frame the cross-cutting, convergence argument."],
    ["The Regulatory Frontier / GRIP (2025)", "Regulation as a strategic lever; the three GRIP deliverables.", "Anchor to the current, live mandate."],
    ["Global Risks Report; Future of Jobs Report", "The Forum’s flagship annual signals on risk and work.", "Connect tech governance to the Forum’s wider agenda."],
  ]}},
  { h2: "4.5 Talking about the Forum credibly" },
  { p: "The register to hit: **impact with humility.** Be genuinely enthusiastic about convening power and the model’s reach, while showing you understand its limits — that the Forum succeeds only when its outputs are adopted by actors with real authority, and that legitimacy has to be continually earned through inclusion and transparency. That balance is exactly the judgement the role requires." },
  { pageBreak: true },
);

/* ============================ SECTION 5 ============================ */
push(
  { h1: "5 · Global Regulatory Landscape and Geopolitics" },
  { lead: "Frontier-tech governance is now geopolitics by other means. You need the map of who regulates how, why they diverge, and where the openings for cooperation lie." },
  { h2: "5.1 The three rulebooks (plus the middle path)" },
  { table: { head: ["Jurisdiction", "Regulatory philosophy", "Signature instruments", "What it optimises for"], widths: [1450, 3050, 2650, 2210], rows: [
    ["European Union", "Rights- and risk-based; precautionary; comprehensive horizontal law.", "AI Act; GDPR; Digital Services/Markets Acts; product-liability regime.", "Fundamental rights, safety, a single market — and regulatory export."],
    ["United States", "Market-led; sectoral; light-touch; innovation-first.", "Executive orders; NIST frameworks; agency guidance; state laws.", "Innovation speed, competitiveness, private-sector leadership."],
    ["China", "State-directed; vertical and targeted; control-oriented.", "Algorithm/deep-synthesis/generative-AI rules; CAC filings.", "State control, social stability, strategic industrial policy."],
    ["United Kingdom", "Principles-based, pro-innovation; empowers existing regulators.", "Cross-sector principles; sector regulators; AI Safety Institute.", "Agility and inward investment without a single big statute."],
  ]}},
  { h2: "5.2 The Brussels effect and its limits" },
  { p: "The **Brussels effect** (Anu Bradford) is the mechanism by which EU rules become de facto global standards: to access the EU’s large market, firms adopt EU-compliant practices everywhere (the *de facto* effect), and other governments then copy the EU template (the *de jure* effect). GDPR is the archetype; the AI Act is the test case. The sophisticated, current view — which you should voice — is that the effect is **real but weakening**: the US and China are actively pursuing rival models, the EU itself is under pressure to simplify to stay competitive, and for a borderless technology a territorial theory of influence explains less than it used to. The frontier is shifting from *exporting regulation* to *exercising governance*." },
  { h2: "5.3 Fragmentation versus interoperability" },
  { p: "The meta-problem your role addresses is **regulatory fragmentation**: the same product can be lawful in one jurisdiction, require a conformity assessment in a second, an algorithmic audit in a third and a state filing in a fourth. Fragmentation raises compliance cost, entrenches large incumbents (only they can afford four rulebooks), enables **forum-shopping**, and slows beneficial diffusion. The prize is **interoperability** — not identical rules, but rules that are *compatible in effect* through mutual recognition, common standards and minimum baselines. Convening for interoperability, precisely, is the Forum’s comparative advantage." },
  { h2: "5.4 The institutional map" },
  { table: { head: ["Body", "Role in frontier-tech governance"], widths: [2650, 6710], rows: [
    ["OECD", "The reference house for regulatory policy and international regulatory co-operation; the OECD AI Principles; policy observatories and toolkits."],
    ["ISO / IEC / IEEE / CEN-CENELEC", "Technical standard-setting — the soft-law machinery regulators reference to give agile rules teeth."],
    ["G7 / G20", "Political coordination; the G7 Hiroshima Process on AI; agenda-setting for tech governance."],
    ["UN family (UNOOSA, ITU, UNESCO, WHO)", "Space (UNOOSA/COPUOS), telecoms and standards (ITU), AI and bioethics (UNESCO), health/biotech (WHO), plus the UN AI processes."],
    ["Council of Europe", "The Framework Convention on AI — the first binding international AI treaty, rights-anchored and open beyond Europe."],
    ["NIST", "De facto global influence via frameworks (AI RMF) and standards (PQC) despite being a national body."],
  ]}},
  { h2: "5.5 The geopolitics of the frontier" },
  { p: "Two forces to name. **Techno-nationalism / tech sovereignty:** states increasingly treat frontier tech as strategic national assets — via industrial policy, subsidies and **export controls** (the “small yard, high fence” doctrine of restricting a narrow set of critical technologies while keeping the rest open). **The commons counter-pressure:** some frontier domains — space, climate intervention, catastrophic bio-risk — are irreducibly global and cannot be secured by any state alone. Your workstream lives in the tension between these two: helping states pursue competitive advantage *and* build the minimum cooperation that shared risks demand. Holding both truths at once is the mark of a serious frontier-governance strategist." },
  { pageBreak: true },
);

module.exports = { blocks };
