// PART B, module B2: structured problem-solving cases.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "B2 · Structured Problem-Solving Cases" },
  { lead: "Ten cases a consultant panel is likely to pose for this role, each with a bespoke structure (issue tree), a model walk-through, and a crisp recommendation. Rehearse them aloud, answer-first. The framework named in each is a tool, not a script — adapt it to the exact prompt." },

  { h2: "Case 1 — Design a sandbox for autonomous delivery" },
  { p: "**Prompt:** “A member government wants to allow autonomous sidewalk-delivery robots but its laws don’t contemplate them. It asks the Forum to help design a regulatory sandbox. How would you approach it?”" },
  { h3: "Structure (say this first)" },
  { n: [
    "**Objective** — what does the government actually need: evidence for permanent rules, investment, or speed? (Usually evidence.)",
    "**Scope & eligibility** — which robots, which areas, how many operators.",
    "**Exemptions** — which rules relaxed, which never.",
    "**Safeguards** — insurance, incident reporting, caps, data-sharing, human oversight.",
    "**Codification** — how sandbox learning becomes permanent rules (the step most miss).",
  ]},
  { h3: "Model walk-through" },
  { p: "I’d design the sandbox as an evidence-generation engine, not a PR exercise. Eligibility: a defined class of low-speed, weight-limited robots, a handful of operators, geofenced to specific districts. In exchange for relaxing ill-fitting vehicle/pavement rules, I’d require insurance, real-time incident reporting, a data-sharing agreement, and human oversight. A named supervisor, a 12-month term, evaluation gates at 3/6/12 months, and — critically — a codification plan up front so the sandbox outputs a safety-case template and draft permanent rules. I’d bring the city, insurers and disability-access advocates into the design, because pavements are shared space and legitimacy depends on it. **Recommendation:** a geofenced, time-boxed sandbox with a built-in codification path; **top risk:** an early incident killing public trust, mitigated by conservative caps and transparent reporting. **Framework:** O-SEE-C." },

  { h2: "Case 2 — Three jurisdictions diverge on AI" },
  { p: "**Prompt:** “The EU, US and China are heading toward incompatible AI rules and compliance is fragmenting. What can the Forum realistically do?”" },
  { h3: "Structure" },
  { n: [
    "**Diagnose** — the divergence reflects genuine value differences (rights, markets, control); full harmonisation is off the table.",
    "**Reframe the goal** — aim for interoperability (compatible in effect), not identical rules.",
    "**Find the achievable layer** — technical alignment (standards, evaluation methods, terminology) is more tractable than legal alignment.",
    "**Convene the willing** — a plurilateral coalition where alignment is possible now.",
    "**Be explicit about limits** — the Forum can lower friction, not make Beijing and Brussels agree on values.",
  ]},
  { h3: "Model walk-through" },
  { p: "The honest answer is that you don’t harmonise three rulebooks built on different values — you reduce the *cost* of their divergence. Three moves: target the technical layer where engineers agree more easily than legislators (shared standards, evaluation methods, a common taxonomy via ISO/IEC and the G7 process); build a **crosswalk** so a firm compliant in one regime knows what it still needs elsewhere (a natural GRIP Playbook); and convene a coalition of like-minded regulators to align where they can. **Recommendation:** climb the interoperability ladder as far as politics allows — terminology → standards → mutual recognition → minimum baselines — and stop short of pretending at harmonised law. **Framework:** interoperability ladder." },

  { h2: "Case 3 — Stand up the workstream from zero" },
  { p: "**Prompt:** “You have the job and a blank sheet. What do you build in year one?”" },
  { h3: "Structure — transformation design" },
  { n: [
    "**Diagnose** — map existing GRIP assets, the sharpest governance gaps, and internal stakeholders.",
    "**Define ambition** — pick 2–3 beachhead domains against a transparent filter; agree success measures.",
    "**Design levers** — convenings, a knowledge product, a pilot, a capability-build.",
    "**Roll out** — sequence first-mover commitments; prove a reference case; then replicate.",
  ]},
  { h3: "Model walk-through" },
  { p: "Listen-and-map (days 1–30), focus-and-frame (31–60), prove (61–100), then convert to assets in the back half of year one. By year-end I’d want: a signed-off strategy with success measures; two beachhead domains chosen on gap severity, right-to-convene, partner-readiness and replicability (quantum-to-PQC migration and AI-bio biosecurity are my leading candidates); one flagship convening per beachhead wired to a concrete decision; one co-created knowledge product; and a documented, reusable model so domains three and four cost less than the first. **Discipline:** evidence before scale, capability before rules, internal coalition before external ambition. **Recommendation:** two domains deep, not five shallow. **Framework:** diagnose → ambition → levers → rollout." },

  { h2: "Case 4 — Prioritise the domains" },
  { p: "**Prompt:** “You can’t cover five frontier domains at once. How do you choose, and can you put any numbers on it?”" },
  { h3: "Structure — a weighted prioritisation" },
  { n: [
    "**Criteria** — gap severity/urgency; the Forum’s right and ability to convene; partner readiness; replicability.",
    "**Score** — rate each domain (say 1–5) on each criterion; weight by strategic fit.",
    "**Sequence** — start narrow and deep on the top two; bank a win; expand using the reusable model.",
  ]},
  { h3: "Model walk-through (with a light scoring pass)" },
  { p: "I’d make the prioritisation defensible by scoring it. On a 1–5 scale across the four criteria, quantum-to-PQC migration scores high on urgency (deadlines are live), right-to-convene (cross-industry, non-partisan) and replicability (a clean anticipatory-governance template); AI-bio biosecurity scores very high on severity (catastrophic tail) but lower on partner-readiness (security-sensitive). AV/robotics scores medium (national regulators already active); space and climate intervention score high on importance but low on near-term tractability. **Recommendation:** lead with quantum-migration governance (fast, winnable, replicable) and AI-bio biosecurity (highest stakes), and treat the reusable model as the real deliverable. **Framework:** prioritisation filter + driver-scoring." },

  { h2: "Case 5 — Break the pilot purgatory" },
  { p: "**Prompt:** “A government has run a dozen successful AV pilots over three years but none has scaled into national rules. What’s wrong and what do you do?”" },
  { h3: "Structure" },
  { n: [
    "**Diagnose the stall** — is it capability, integration, governance, or codification?",
    "**Locate the gap** — usually not technology but cross-agency integration and a missing codification path.",
    "**Fix the system, not the pilot** — cross-functional governance, shared metrics, a graduation route.",
  ]},
  { h3: "Model walk-through" },
  { p: "This is textbook scaling slump: pilots designed as standalone experiments, not as replicable systems, with no owner for the expensive cross-agency integration. The problem is almost never the technology — it’s a capability and governance gap. I’d stand up a cross-functional governance body with a real mandate and shared KPIs across transport, digital and safety agencies; require every pilot to produce a codification output (a safety-case template and draft rules); and appoint owners for the integration work. **Recommendation:** shift from running more pilots to building the graduation machinery that turns pilots into rules. **Framework:** scaling slump / capability gap." },

  { h2: "Case 6 — A country wants to lead on quantum governance" },
  { p: "**Prompt:** “A member state wants to become the global reference for quantum governance. Advise them.”" },
  { h3: "Structure" },
  { n: [
    "**Where are they** on the regulatory maturity curve, and what’s the credible ambition?",
    "**What’s the real near-term issue** — it’s cryptographic (PQC migration), not computational.",
    "**What capability** do they need to build to lead (technical, institutional, standards influence)?",
    "**How do they win reference status** — first-mover commitments, standards leadership, a replicable model.",
  ]},
  { h3: "Model walk-through" },
  { p: "‘Leading on quantum governance’ in the near term means leading on the **PQC migration** and on standards influence, not regulating quantum computers that don’t yet exist. I’d advise: run a national crypto-inventory and migration programme on a public timeline (instant credibility); invest in standards-body participation to shape the rules others adopt; build the technical capability inside the regulator; and publish the migration as a **reference case** with conditional logic other states can replicate — which is how a small country exports influence. **Recommendation:** own the migration and the standards seat; package it as a replicable model. **Framework:** maturity curve + capability gap + reference case." },

  { h2: "Case 7 — A bio-AI incident" },
  { p: "**Prompt:** “A startup used an AI tool to design a dangerous novel protein and ordered synthesis before anyone caught it. Media storm; governments want to act fast. How does the Forum respond, and how do you prevent an overreaction that kills the field?”" },
  { h3: "Structure — balance paralysis vs overreaction" },
  { n: [
    "**Convene fast** — a trusted, neutral table within days: synthesis providers, AI developers, biosecurity agencies, regulators.",
    "**Target the true failure point** — the gap between generative design and sequence-based screening.",
    "**Absorb the responsible majority** — make good actors part of the fix so rules land on the failure mode, not the field.",
    "**Persist into durable rules** — use the political energy to harden voluntary screening toward binding standards.",
  ]},
  { h3: "Model walk-through" },
  { p: "Two failure modes to steer between: doing nothing (lose trust) and a blanket ban (push research underground, punish the responsible majority). The Forum’s value in a crisis is a neutral, fast convening. I’d target the actual failure — screening that can’t catch AI-designed novel sequences — with concrete, adoptable measures (strengthened screening standards, KYC for synthesis, safeguards at the AI-model layer), not a ban on protein design. **The honest judgement to voice:** this is the one area where I lean toward precaution, because the downside is catastrophic and irreversible — but precaution aimed at the *mechanism*, not a moratorium on knowledge. **Framework:** C-TAP." },

  { h2: "Case 8 — Scope a flagship knowledge product" },
  { p: "**Prompt:** “Design a Forum report that would genuinely move frontier-tech regulation. What is it, and how do you keep it off the shelf?”" },
  { h3: "Structure" },
  { n: [
    "**Format** — diagnostic (creates demand) + toolkit (creates use).",
    "**Co-creation** — the users in the room from the outline, so they own it.",
    "**Action-orientation** — model provisions and checklists, not essays.",
    "**Distribution** — timed to a decision window; wired to convening and the C4IR network.",
  ]},
  { h3: "Model walk-through" },
  { p: "I’d build a **Frontier Governance Readiness Playbook** — extending GRIP’s Readiness Index into the frontier domains — because the format forces the two things that make products influential: a **diagnostic** that lets governments benchmark themselves (demand + competitive pressure) and a **toolkit** of adaptable instruments (model sandbox designs, risk-tiering templates, a soft-law-to-hard-law pathway) a ministry can use on Monday. To keep it off the shelf: co-create with a regulator-and-technologist working group from the outline; make every section action-oriented; time the launch to a live decision and a Forum moment; and pair it with convening and C4IR follow-through. **Recommendation:** influence is engineered at scoping — written to be used, tested with its users, wired to distribution. **Framework:** diagnostic + toolkit; reference-case logic." },

  { h2: "Case 9 — Size the cost of fragmentation" },
  { p: "**Prompt:** “Roughly how big is the problem of AI regulatory fragmentation? Give me a number.”" },
  { h3: "Structure — a driver tree" },
  { n: [
    "**Direct compliance cost** = (cost per jurisdiction to comply) × (number of divergent regimes) × (share that is duplicative, not substantive).",
    "**Opportunity cost** = (months of delayed market entry) × (monthly revenue at stake) across affected firms.",
    "**Scale up** from a representative firm to the affected population; sanity-check.",
  ]},
  { h3: "Model walk-through" },
  { p: "I’d anchor on a representative multinational: say it must meet four materially different regimes, each costing low-single-digit millions a year in compliance, of which perhaps half is pure duplication rather than genuine risk mitigation — so a few million per firm in avoidable cost, before opportunity cost. Multiply across the population of large AI-deploying firms and you’re quickly into the billions annually, with the heavier, unmeasured cost being *deterred* deployment and entrenchment of incumbents who can afford four rulebooks. **I’d state the equation, my assumptions, an order-of-magnitude answer (‘billions annually, plus a larger deterrence effect’), then sanity-check it.** The panel is grading the structure and the assumptions, not the digits. **Framework:** driver tree + 80/20 (the duplication and deterrence terms dominate)." },

  { h2: "Case 10 — The matrix / turf case" },
  { p: "**Prompt:** “Six months in, the AI Centre feels your workstream is treading on its territory. How do you handle it?”" },
  { h3: "Structure" },
  { n: [
    "**Diagnose** — is it real overlap, a perception, or a credit/visibility issue?",
    "**Reframe** — define your value as connective (convergence, regulatory craft), not competitive.",
    "**Act** — co-own outputs, agree a clear division, credit generously, escalate only if unresolved.",
  ]},
  { h3: "Model walk-through" },
  { p: "First I’d treat it as a signal, not a threat, and go find out what’s really driving it — usually credit or a fear of duplication rather than genuine overlap. Then I’d reframe: my workstream is additive because the frontier is *converging* (AI-bio, AI-quantum) and I bring the regulatory-innovation craft they don’t specialise in. Practically: agree an explicit division of scope, co-own the outputs that touch both of us, and make them look good to their own stakeholders. In a matrix you earn the right to convene by making everyone else’s work more usable. **Recommendation:** resolve it directly and structurally (a written scope split + joint output), escalate to the Head only if it persists. **Framework:** stakeholder diagnosis + connective positioning." },
  { pageBreak: true },
);

module.exports = { blocks };
