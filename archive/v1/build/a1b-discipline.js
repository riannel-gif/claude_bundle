// PART A, Module 3: the regulatory-innovation discipline (deep).
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "3 · The Regulatory-Innovation Discipline" },
  { lead: "This is the deepest layer of the craft and the one an adjacent, consulting-literate candidate can most convincingly master. Treat it as a body of theory with its own instruments, evidence base, and design choices — not a bag of buzzwords." },

  { h2: "3.1 The problem space" },
  { p: "Five linked ideas define the intellectual terrain. Naming them precisely signals that you know the literature." },
  { b: [
    "**The pacing problem** (Marchant). Technology develops exponentially; law develops incrementally. The widening gap leaves citizens with outdated protections *and* innovators with rules that do not fit — harm and lost opportunity at once.",
    "**The Collingridge dilemma** (the dilemma of control). Early in a technology’s life it is easy to shape but hard to predict; by the time its impacts are clear, it is entrenched and hard to change. Anticipatory governance is the attempt to act in that early, uncertain window.",
    "**Precaution vs. permissionless innovation.** The precautionary principle (dominant in the EU) requires proof of safety before deployment; permissionless innovation (historically dominant in the US) permits, then intervenes on evidence of harm. Most modern regulatory innovation tries to fuse the *learning* of the second with the *safety* of the first — which is what a sandbox is.",
    "**The innovation principle** — the idea that regulators should explicitly weigh the cost to innovation of a proposed rule, as a counterweight to precaution. Contested, but increasingly cited in EU better-regulation debates.",
    "**Regulatory Impact Assessment (RIA)** — the workhorse discipline of ex-ante appraisal (costs, benefits, alternatives) that turns regulation from assertion into evidence. The OECD is its custodian.",
  ]},
  { h2: "3.2 The five principles of agile regulation" },
  { p: "Five principles are the shared vocabulary of the field. They were crystallised by **Deloitte’s *The Future of Regulation* (Eggers, Turley and Kishnani, 2018)** and echoed in the Forum’s **“Agile Regulation for the Fourth Industrial Revolution: A Toolkit for Regulators” (2020)**. Attribute them accurately — knowing they are Deloitte’s framing adopted into Forum practice is itself a mark of fluency." },
  { table: { head: ["Principle", "Meaning", "Example"], widths: [2050, 4050, 3260], rows: [
    ["Adaptive regulation", "“Regulate, monitor, iterate.” Rules are living instruments, revised as evidence accrues, with review clauses built in.", "Sunset clauses; scheduled statutory reviews; iterative rulemaking."],
    ["Outcome-based regulation", "Specify the outcome to achieve, not the technology or method to use.", "“Systems must be safe/explainable” rather than “use algorithm X.”"],
    ["Risk-based (risk-weighted) regulation", "Concentrate regulatory effort where potential harm is greatest; light-touch where it is low.", "The EU AI Act’s tiers: unacceptable / high / limited / minimal."],
    ["Collaborative regulation", "Co- and self-regulation with industry; alignment across regulators and borders.", "Codes of practice; standards recognised by regulators."],
    ["Regulatory sandboxes", "Controlled, time-limited testing with real users under supervision and relaxed rules.", "UK FCA fintech sandbox; EU AI Act national sandboxes."],
  ]}},
  { p: "Around the five sit the rest of the toolkit, worth naming to show range: **experimental regulation** (regulators and firms jointly run trials), **data-driven regulation** (real-time, data-led supervision), **self- and co-regulation** (industry-led governance recognised by the state), **joined-up regulation** (one-stop shops across agencies), and **international regulatory cooperation**." },

  { h2: "3.3 Regulatory sandboxes — the flagship instrument, in depth" },
  { p: "The sandbox is the single most important instrument to discuss fluently: it is the field’s signature idea and GRIP’s own “Innovation Hub.” A regulatory sandbox is a **controlled, time-limited environment in which firms test new products, services or business models with real customers, under close supervision, with certain rules relaxed or waived and with safeguards** (participant caps, disclosure, insurance, exit plans)." },
  { h3: "Origin, spread and the numbers" },
  { b: [
    "**Origin:** pioneered by the UK’s Financial Conduct Authority (FCA) for fintech in **2016**; “a decade on,” the model has diffused across finance, energy, health, mobility and data.",
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

  { h2: "3.4 Anticipatory and adaptive governance" },
  { p: "If the sandbox is the instrument, **anticipatory governance** is the mindset. The current framing describes a culture built on three capabilities:" },
  { n: [
    "**Regulatory foresight** — systematic horizon-scanning and scenario work to see technologies coming (the antidote to the Collingridge dilemma).",
    "**Regulatory experimentation** — sandboxes, pilots, testbeds and living labs that generate real-world evidence before rules are fixed.",
    "**Regulatory learning** — institutionalised feedback loops that turn that evidence back into revised rules (the “adaptive” half).",
  ]},
  { p: "The mechanisms that operationalise this: **sunset clauses**, **mandatory post-implementation review**, **iterative / staged rulemaking**, **regulatory impact assessment**, and **living guidance** updated more like software than statute. The OECD’s 2025 work on “steering AI’s future” through **anticipatory governance** is the reference text to cite." },

  { h2: "3.5 Outcome-based and risk-based regulation" },
  { p: "**Outcome-based regulation** specifies the end (safety, explainability, non-discrimination) and leaves the means to the innovator — durable against technological change because it does not encode a particular technology. Its risk is enforceability: outcomes must be measurable and auditable, or the rule is toothless. **Risk-based regulation** concentrates scarce regulatory effort where harm is greatest; the canonical implementation is the **EU AI Act’s four tiers** — *unacceptable* (prohibited), *high-risk* (conformity assessment, documentation, human oversight), *limited* (transparency duties), and *minimal* (unregulated). The design challenge is *classification*: everything turns on which tier a system lands in, and gaming the boundary is the predictable failure mode." },

  { h2: "3.6 Standards and soft law" },
  { p: "Soft law is how you govern at the speed of technology. It spans **technical standards** (ISO, IEC, IEEE, CEN-CENELEC), **codes of practice**, **principles and guidelines**, and **voluntary commitments**. Two moves make you sound expert:" },
  { b: [
    "**Distinguish *de jure* from *de facto* standards** — those set by formal bodies vs those that win in the market — and note that regulators increasingly *reference* standards to give soft law teeth. The EU’s **“New Approach”** (legislation sets essential requirements; harmonised standards provide the technical detail) is the template, and it is exactly how the AI Act relies on CEN-CENELEC standards.",
    "**Name the soft-law-to-hard-law pipeline.** Principles and codes are often the R&D phase for binding law: the OECD AI Principles → national statutes; the EU’s voluntary **GPAI Code of Practice (July 2025)** → the binding AI Act obligations it operationalises. Soft law buys time and builds consensus while hard law catches up — and it is weakest exactly where the downside is catastrophic and actors have incentives to defect (bio-risk), which is where you argue agility must yield to precaution.",
  ]},

  { h2: "3.7 RegTech and SupTech" },
  { p: "**RegTech** is technology that helps the regulated comply (automated reporting, KYC/AML, monitoring). **SupTech** is technology that helps the *supervisor* regulate (real-time data feeds, machine-readable rules, algorithmic market surveillance). The frontier concept to cite is **machine-readable and machine-executable regulation** — rules published as code so compliance can be automated and supervision made continuous rather than periodic. This is the natural bridge between “regulatory innovation” and the frontier technologies themselves, and a credible plank for any modernisation agenda." },

  { h2: "3.8 International regulatory cooperation" },
  { p: "Because frontier technologies are borderless and your mandate is cross-jurisdictional, the international layer is central. The vocabulary: **mutual recognition** (accept each other’s conformity assessments), **regulatory interoperability** (rules different in form but compatible in effect), **regulatory diplomacy**, **minimum common standards**, and **plurilateral coordination** (coalitions of the willing where universal treaties stall). The OECD is the reference institution for the discipline of international regulatory co-operation (IRC); the G7, G20 and standards bodies are the practical venues." },

  { h2: "3.9 Regulatory maturity and readiness models" },
  { p: "This section is the hinge to the transformation lens your panel prizes (Part 8). Just as manufacturers are scored on a maturity curve, governments are increasingly scored on their *readiness to govern* emerging technology. Know the instruments:" },
  { b: [
    "**GRIP’s own Regulatory Future Readiness Index** — benchmarks countries’ preparedness to govern emerging technology (dimensions still being finalised; expect capability, agility, institutional and international-cooperation axes).",
    "**OECD.AI Index** — organises national AI readiness around R&D, infrastructure, governance, accessibility and policy environment.",
    "**Oxford Insights Government AI Readiness Index** — scores governments on government, technology-sector and data-and-infrastructure pillars.",
    "**OECD indicators of regulatory management systems (iREG)** — measure the quality of a country’s RIA, stakeholder-engagement and ex-post-review machinery.",
  ]},
  { p: "The strategic point: a readiness index is not just measurement — it is a *convening and motivation* device. Benchmarking creates competitive pressure to improve and gives you a reason to bring governments to the table. This is the diagnostic front-end of a regulatory transformation." },

  { h2: "3.10 Choosing the instrument, and naming the trade-offs" },
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
