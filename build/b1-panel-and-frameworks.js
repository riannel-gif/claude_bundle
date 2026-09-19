// PART B, modules B0-B1: how a consultant panel interviews + frameworks primer.
const blocks = [];
const push = (...b) => blocks.push(...b);

/* ===================== B0 ===================== */
push(
  { h1: "B0 · How a Management-Consulting Panel Interviews" },
  { lead: "Your panel are former senior consultants. They will run this less like a policy interview and more like a partner-round assessment: roughly half behavioural (the Personal Experience Interview), half structured problem-solving and fit. Winning is about how you think and communicate, not how much you know." },
  { h2: "What they are actually scoring" },
  { table: { head: ["Dimension", "What it means", "How to show it"], widths: [2200, 3900, 3260], rows: [
    ["Structure", "Breaking an ambiguous problem into clean, non-overlapping parts.", "Lay out a MECE structure before diving in."],
    ["Prioritisation (80/20)", "Finding the two things that matter most out of ten.", "Say what you’d tackle first and why."],
    ["Hypothesis-driven", "Reasoning from a leading answer you then test.", "State your hypothesis early; look for what would disprove it."],
    ["Quantification / logic", "Comfort with numbers and sound inference.", "Put a rough number on things; show the arithmetic."],
    ["Judgement", "Sensible, real-world trade-off calls.", "Name the trade-off and make a decision."],
    ["Communication / presence", "Top-down, crisp, calm under probing.", "Answer first, then support; signpost; synthesise."],
  ]}},
  { h2: "The four communication habits that mark you as ‘one of us’" },
  { n: [
    "**Answer first (the Pyramid Principle).** Lead with your conclusion, then give the supporting reasons, then the detail. Never build up to the answer — deliver it, then justify it.",
    "**Signpost.** “There are three things I’d look at — let me take them in turn.” It makes you easy to follow and signals structure.",
    "**Synthesise, don’t summarise.** At the end, say what it *means* and what you’d *do*, not what you just said.",
    "**Quantify directionally.** A rough, well-reasoned number beats vague qualifiers. Order of magnitude and logic matter more than precision.",
  ]},
  { h2: "How to run a case live — the six-step drill" },
  { n: [
    "**Take a moment.** It is expected. “Let me take thirty seconds to structure this.”",
    "**Structure.** Lay out a MECE breakdown of the problem — bespoke to the question, not a canned framework.",
    "**Hypothesise.** State your leading answer and what you’d test to confirm it.",
    "**Prioritise.** Say which branch you’d dig into first and why (impact × feasibility).",
    "**Work the branches.** Reason through, quantify where useful, surface trade-offs and risks.",
    "**Synthesise.** A clear recommendation, the top risk, and the immediate next step.",
  ]},
  { callout: [
    "**The cardinal sin is framework-dumping.** Partners penalise a candidate who forces a memorised framework onto a problem. Build a *bespoke* structure that fits the question — the frameworks in B1 are raw material for that, not scripts to recite. Being visibly *coachable* — taking a steer mid-case and adjusting — scores as highly as being right.",
  ]},
  { pageBreak: true },
);

/* ===================== B1 ===================== */
push(
  { h1: "B1 · Frameworks Primer" },
  { lead: "The consultant’s operating system, plus the domain-specific structures from Part A that you can deploy on a governance case. Learn these as building blocks; assemble them bespoke, live." },
  { h2: "B1.1 The universal thinking tools" },
  { b: [
    "**MECE** (Mutually Exclusive, Collectively Exhaustive) — the test every structure must pass: no overlaps, no gaps.",
    "**Issue tree** — decompose a question into branches and sub-branches; the visual backbone of any case answer.",
    "**Hypothesis-driven** — start from a probable answer and test it, rather than analysing everything; it is how consultants avoid boiling the ocean.",
    "**The Pyramid Principle** — communicate top-down: governing thought → key arguments → supporting facts.",
    "**80/20 (Pareto)** — find the few drivers that explain most of the outcome and focus there.",
    "**Driver tree** — break an outcome into the multiplicative levers that move it (useful for any quantification).",
  ]},
  { h2: "B1.2 A reusable issue tree for a governance case" },
  { p: "When asked “should / how should X be governed?”, a clean, MECE default structure is:" },
  { n: [
    "**Problem** — what harm or opportunity are we actually governing? Size and urgency.",
    "**Objectives & trade-offs** — what are we optimising (innovation, safety, rights, competitiveness) and what tensions does that create?",
    "**Options** — the instrument set (from ban → hard rules → risk-tiering → sandbox → standards → soft law → do nothing), matched to the risk profile.",
    "**Actors & feasibility** — who must move (the ecosystem), what they need, and what’s realistic given capability and politics.",
    "**Recommendation & sequencing** — the call, the first move, the risks, and how it scales/replicates.",
  ]},
  { p: "This maps one-to-one onto the transformation-design sequence (diagnose → ambition → levers → rollout) — use whichever framing the question invites." },
  { h2: "B1.3 The role-specific frameworks (from Part A) — your named tools" },
  { table: { head: ["Framework", "Use it when the case is about…", "One-line shape"], widths: [2450, 3550, 3360], rows: [
    ["Regulatory maturity curve", "Assessing or moving a jurisdiction’s governance capacity.", "Absent → reactive → structured → anticipatory → adaptive."],
    ["Capability gap, not tech gap", "Why a jurisdiction fails to govern; what to build.", "Fix capability (technical/org/workforce), not just the rule."],
    ["Scaling slump / pilot purgatory", "Why a sandbox or pilot won’t scale.", "Cross-functional governance + codification + shared metrics."],
    ["Ecosystem orchestration + sequencing", "Building a multistakeholder coalition.", "Minimum first-mover set; taper the state’s role as capability grows."],
    ["Reference-case / replication logic", "Making a model transferable across jurisdictions.", "What/conditions/transferable + ‘if X do Y, if W adapt by Z’."],
    ["Interoperability ladder", "Cross-jurisdiction divergence.", "Terminology → standards → mutual recognition → baselines → law."],
    ["O-SEE-C (sandbox design)", "Designing a sandbox.", "Objective · Scope · Exemptions · safEguards · Codification."],
    ["C-TAP (crisis response)", "A frontier-tech incident.", "Convene fast · Target failure point · Absorb responsible majority · Persist into rules."],
    ["Instrument-selection grid", "Choosing how to regulate.", "Match instrument to risk profile and uncertainty (Part A §2.10)."],
  ]}},
  { h2: "B1.4 Quantifying in a policy case" },
  { p: "Consultant panels love a candidate who can put a number on a governance problem. The move is a **driver tree** built from public anchors you carry in your head. Example — *sizing the cost of AI regulatory fragmentation to a mid-size firm*: (annual compliance cost per jurisdiction) × (number of divergent regimes it must meet) × (share of that cost that is duplicative rather than substantive), plus the opportunity cost of delayed market entry (months delayed × monthly revenue at stake). You will not have exact figures; the panel wants a **sensible structure, explicit assumptions, and an order-of-magnitude answer**, delivered confidently and then sanity-checked. Always end a number with “does that pass the smell test?” and adjust." },
  { callout: [
    "**Rule of thumb for estimation:** state the equation first, then populate it, then sanity-check the result against something you know. The structure is graded; the digits are not.",
  ]},
  { pageBreak: true },
);

module.exports = { blocks };
