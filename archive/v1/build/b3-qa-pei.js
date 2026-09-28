// PART B, modules B3-B5: Q&A bank, PEI/behavioural, and the 100-day artifact.
const blocks = [];
const push = (...b) => blocks.push(...b);

/* ===================== B3 · Q&A ===================== */
push(
  { h1: "B3 · The Expert Q&A Bank" },
  { lead: "The substantive questions, recalibrated for a consultant panel: every answer leads with the point, then supports it, and closes with a signal phrase — the compressed line that tells an expert you belong. Rehearse the signal phrases until they are automatic." },
  { h2: "B3.1 Frontier-tech fluency" },
  { qa: { n: 1, q: "Pick a frontier technology and give us its single hardest governance problem.",
    a: ["AI. The hardest problem is regulating a general-purpose technology whose risks are emergent and whose own developers can’t fully predict its capabilities — so rule-writers are always aiming at a moving target, and are forced to choose between governing the model and governing the use. The EU AI Act tries both, with horizontal risk tiers plus specific duties for general-purpose models with systemic risk. The transferable lesson: when capability outruns evaluation science, you regulate the trajectory with adaptive instruments, not a snapshot with a fixed definition."],
    say: "“When capability outruns evaluation science, you regulate the trajectory, not a snapshot.”" }},
  { qa: { n: 2, q: "Why work on quantum governance now, when fault-tolerant machines are years away?",
    a: ["Because the most consequential risk is already live: ‘harvest now, decrypt later’ means adversaries can steal encrypted data today and decrypt it once quantum-capable, so long-secrecy data is already exposed. That’s why the real action of the decade has already happened — NIST finalised post-quantum cryptography standards in 2024 and governments are mandating migration on decade timelines. Quantum is anticipatory governance made concrete."],
    say: "“Quantum governance is already here — we’re migrating the world’s cryptography before the threat arrives.”" }},
  { qa: { n: 3, q: "What worries you most about the AI-bio convergence?",
    a: ["That our safeguards were built for a slower, expert-gated world. DNA-synthesis screening works by matching orders against known threat sequences, but generative design tools can produce novel sequences that match nothing known — so the threat and the safeguard are advancing on different curves. This is where I resist pure agility: for low-probability, catastrophic, irreversible risk, precaution can matter more than speed, and the fix is collaborative — providers, AI developers and biosecurity agencies co-designing screening, with a path to binding standards."],
    say: "“The threat and the safeguard are on different curves — closing that gap is a collaboration problem, not a statute problem.”" }},
  { qa: { n: 4, q: "Is solar geoengineering governable?",
    a: ["That question is the governance problem in one line: SRM is cheap, fast and planet-wide, yet there’s no legitimate global body to authorise, monitor or halt it, and it carries termination-shock risk. There are two honest camps — ‘ungovernable and irreversible, so ban outdoor experiments’ (the Non-Use Agreement, the CBD moratorium) and ‘it may be needed, so govern the research transparently now.’ For a Forum role my instinct is to convene that disagreement, and to be clear that for planet-scale irreversible risk, legitimacy and precaution outrank agility."],
    say: "“Some frontiers aren’t a speed problem — they’re a legitimacy problem, and you don’t innovate around legitimacy.”" }},
  { qa: { n: 5, q: "Autonomous systems cause harm. Who’s liable, and why is it hard?",
    a: ["Hard because liability law assumes a fixed product and a human in control, and autonomy breaks both. A self-driving vehicle learns and updates after sale, and the decision that caused harm may trace to manufacturer, software developer, operator or owner. The direction of travel is to modernise strict product liability to cover software and AI and to certify via a safety-case rather than one-time type approval — though the EU’s withdrawal of its AI Liability Directive in 2025 left a real gap."],
    say: "“Autonomy breaks two assumptions at once — a fixed product and a human in the loop — so liability and certification both have to be re-engineered.”" }},
  { h2: "B3.2 Regulatory-innovation craft" },
  { qa: { n: 6, q: "What is a regulatory sandbox, really — and what are its limits?",
    a: ["A controlled, time-limited environment to test innovations with real users under supervision, with some rules relaxed and safeguards in place. The FCA pioneered it in 2016; there are now 60-plus tech sandboxes globally and the EU AI Act mandates a national one in every member state by 2026. The evidence is real but narrow: the UK sandbox raised participants’ capital by about 15%, but a decade on there’s no proof it improved regulation broadly, and it risks regulatory privilege for insiders. So I never propose one without a codification plan, real supervisory capacity, and safeguards against unequal treatment."],
    say: "“A sandbox is an experiment, not an answer — the value is the learning loop back to the rulebook.”" }},
  { qa: { n: 7, q: "Name the principles of agile regulation and tell us when each applies.",
    a: ["Five, from Deloitte’s Future of Regulation and adopted into WEF practice: adaptive (regulate-monitor-iterate, for fast-moving tech); outcome-based (specify the goal not the method, to leave room to innovate); risk-based (concentrate effort where harm is greatest — the AI Act’s tiers); collaborative (co- and self-regulation, when the state can’t see everything); and sandboxes (for high uncertainty needing evidence fast). The skill isn’t reciting them — it’s matching instrument to situation and naming the trade-off."],
    say: "“The skill isn’t listing the five principles — it’s matching instrument to situation and naming the cost of each.”" }},
  { qa: { n: 8, q: "Isn’t soft law just a way of avoiding real regulation?",
    a: ["No — it’s how you govern at the speed of technology, and it’s often the R&D phase for hard law. The EU’s voluntary GPAI Code of Practice operationalises the binding AI Act; the OECD principles seeded national laws; regulators reference technical standards to give soft law teeth. The caveat: soft law is weakest exactly where the downside is catastrophic and actors can defect — bio-risk — so I treat it as a spectrum from principles to codes to referenced standards to binding law, and choose how far along the risk profile demands."],
    say: "“Soft law isn’t the absence of regulation — it’s the on-ramp to it, and often the only thing fast enough.”" }},
  { qa: { n: 9, q: "How do you regulate something you don’t yet understand?",
    a: ["You don’t fake certainty — you build institutions for learning. That’s anticipatory governance: foresight to see it coming, experimentation (sandboxes, testbeds) to generate evidence, and learning loops that feed evidence back into revised rules, via sunset clauses, mandatory review and living guidance. The Collingridge dilemma says early tech is easy to shape but hard to predict; the whole point is to act within that uncertainty using reversible, revisable instruments."],
    say: "“You replace the illusion of certainty with institutions for learning — foresight, experimentation, revision.”" }},
  { qa: { n: 10, q: "How would you measure whether a regulatory-innovation initiative worked?",
    a: ["At three levels, defined at design time, not retrofitted. Adoption: did regulators take up the framework, sandbox or standard? Outcome: did it change a real decision — a pilot authorised, a rule revised, a risk mitigated? System: did readiness or interoperability improve across jurisdictions — which is what GRIP’s Readiness Index tracks? I’d avoid vanity metrics like convenings held, and I’d report honestly where it didn’t move — credibility with regulators depends on not overclaiming."],
    say: "“Measure adoption, outcome and system-level readiness — not convenings held or PDFs shipped.”" }},
  { h2: "B3.3 The WEF model and the role" },
  { qa: { n: 11, q: "The Forum can’t make law. So what’s the point of this work?",
    a: ["The Forum’s power is convening, not legislating — and for the frontier that’s often the more useful power, because the binding venues are fragmented or gridlocked. What’s missing is trusted space where regulators, firms, scientists and civil society align before positions harden, plus knowledge products governments adopt through their own accountable processes. My job isn’t to write rules — it’s to build the conditions in which better rules get made, and make adoption easy."],
    say: "“We don’t make the rules — we build the conditions in which better rules get made and adopted.”" }},
  { qa: { n: 12, q: "Critics say multistakeholder governance lets corporations write their own rules. Your response?",
    a: ["It’s a fair critique and I’d rather engage it than dodge it. Done badly, multistakeholder work dilutes accountability and over-weights corporate voice. So legitimacy has to be earned: genuine inclusion — especially the Global South and civil society — transparency about who’s in the room, and outputs adopted through governments’ own democratic processes. It’s a complement to multilateralism, not a substitute; a frontier workstream that’s only industry and rich-world regulators would fail on its own terms."],
    say: "“Legitimacy is earned through inclusion and transparency — it’s a complement to democracy, never a replacement.”" }},
  { qa: { n: 13, q: "What do you know about GRIP, and how does your workstream fit?",
    a: ["GRIP is the Forum’s Global Regulatory Innovation Platform, launched in 2025 with the UAE, built on the idea that in the Intelligent Age regulation is a strategic lever and a form of infrastructure, not just a brake. Two-year roadmap, three deliverables: a Playbook, a Readiness Index and an Innovation Hub, focused initially on AI, health and digital finance. My workstream takes that proven method upstream into the earlier-stage frontier domains — quantum, autonomous systems, biotech, planetary systems — where the rules barely exist, in partnership with the Centre for Frontier Technologies."],
    say: "“I’d take GRIP’s proven method upstream, into the frontiers where the rulebook is still blank.”" }},
  { qa: { n: 14, q: "How do you work across Centres without empire-building?",
    a: ["By defining my value as connective, not competitive. The frontier is converging — AI-bio, AI-quantum, embodied AI — and convergence is exactly what siloed teams miss, so a cross-cutting regulatory-innovation lens is additive to their deep domain work. Practically: co-own outputs, credit generously, bring the regulatory craft they don’t specialise in, and make them look good to their own stakeholders. In a matrix you earn the right to convene by making everyone else’s work more usable."],
    say: "“In a matrix you don’t win by owning turf — you win by making everyone else’s work more usable.”" }},
  { h2: "B3.4 Judgement and the hard ones" },
  { qa: { n: 15, q: "Does GRIP lean toward any of the regulatory models — EU, US, China?",
    a: ["Officially it’s about interoperability across all of them, but its centre of gravity is the pro-innovation, enabling school — ‘regulation as competitiveness and infrastructure’ — which is closer to the UK/Singapore/UAE end than the EU’s precautionary starting point, and its showcase cases are the UAE, India and Brazil, not Brussels. That’s a strength for adoption and speed, but the blind spot is the precautionary, rights-first questions the EU foregrounds — and for catastrophic bio or climate risk, precaution is good governance. Part of my job is making sure the enabling frame doesn’t crowd that out."],
    say: "“GRIP leans enabling, not precautionary — a strength for speed, but I’d guard against it crowding out the risks that need precaution.”" }},
  { qa: { n: 16, q: "What would you do if a technology you’d championed a light-touch approach for turned out far more dangerous than expected?",
    a: ["That’s exactly why I build reversibility in from the start. Good regulatory innovation isn’t a bet on being right — it’s instruments designed to be revised: staged rollouts, review triggers, sunset clauses, kill-switches on pilots. If the evidence turned worse, the adaptive design lets us tighten fast without having burned the option, and I’d own the call publicly and move — credibility depends on updating visibly on evidence. The failure mode to avoid isn’t being wrong early; it’s being locked in and slow to correct."],
    say: "“I don’t bet on being right — I build instruments that let us be wrong safely and correct fast.”" }},
  { qa: { n: 17, q: "How do you make sure the Global South is genuinely in the room?",
    a: ["By treating it as a design constraint, not a courtesy. Frontier governance built only by wealthy jurisdictions fails on legitimacy and on substance — the capability and compute gaps are real, and rules built by the few entrench existing advantage. So I’d build Global South co-leadership from scoping, use the C4IR network’s presence in emerging economies, design instruments that work with lower regulatory capacity, and measure representation honestly. Interoperability that ignores most of the world isn’t interoperability."],
    say: "“Inclusion is a design constraint, not a courtesy — rules built by the few fail on both legitimacy and substance.”" }},
  { qa: { n: 18, q: "Why you, coming from energy and public affairs rather than deep frontier tech?",
    a: ["Because the job isn’t to be the deepest specialist in any one technology — it’s to design regulatory approaches that travel across domains and to convene the ecosystem that adopts them. That’s the meta-skill I’ve built: I’ve studied how a state architects an industry transformation and sequences its intervention, reverse-engineered it into a replication framework across jurisdictions, advised governments on standing up multistakeholder platforms, and worked inside a frontier-tech regulatory regime with a sandbox. The regulatory patterns rhyme even when the science differs — and I’m a fast, honest translator between the lab, the ministry and the boardroom."],
    say: "“The job isn’t to be the deepest specialist — it’s to be the translator and model-builder who makes governance travel across domains.”" }},
  { pageBreak: true },
);

/* ===================== B4 · PEI ===================== */
push(
  { h1: "B4 · The Personal Experience Interview (PEI)" },
  { lead: "Roughly half of a McKinsey-style interview is behavioural, and it is probed hard. The interviewer takes one story for 10–20 minutes and asks 10–25 follow-ups: “What exactly did you say?” “How did they react?” “What were you thinking?” Vague or rehearsed-sounding stories collapse under this. Prepare depth, not scripts." },
  { h2: "B4.1 The four dimensions (renamed by McKinsey in 2025)" },
  { table: { head: ["Dimension", "What it tests", "The question behind the question"], widths: [1700, 4100, 3560], rows: [
    ["Leadership", "Setting direction, mobilising a team, delivering through others.", "Can you make a group achieve something it wouldn’t have alone?"],
    ["Connection", "Persuading and influencing through relationships and soft skills.", "Can you change someone’s mind or behaviour without authority?"],
    ["Drive", "Initiative, ownership, building from scratch, pushing through.", "Do you make things happen that no one asked you to?"],
    ["Growth", "Driving change despite resistance; learning from failure; adapting.", "How do you behave when it’s hard or you got it wrong?"],
  ]}},
  { h2: "B4.2 How to structure a PEI story" },
  { p: "Open with a tight **SPAR** telling (Situation, Problem, Action, Result) in 3–4 minutes, then let the interviewer drill. Rules: pick a story where **you** were the protagonist (not the team); make the stakes and the tension explicit; be ready with the granular detail (who said what, what you decided and why, the number that shows the result); and choose the dimension the story evidences *best*, not the story you like most. Prepare at least **eight stories — two per dimension** — and never reuse one in the same round." },
  { h2: "B4.3 Your story bank — candidates from your background" },
  { p: "These are scaffolds mapped to your real experience. Fill each with authentic, granular specifics — especially exact words, decisions and measurable results — because the follow-ups go deep. Do not stretch the facts; the probing is designed to find seams." },
  { h3: "Leadership" },
  { b: [
    "**The climate & healthcare-continuity workstream (current).** You set the research agenda, mobilised multistakeholder engagement, and delivered a thought-leadership paper. Emphasise: how you set direction under ambiguity and got independent actors to deliver. Likely probes: how you handled a stakeholder who wouldn’t engage; a moment the agenda was contested and how you resolved it.",
    "**A flagship platform at FGS** (e.g. the Global Cybersecurity Forum or Saudi Green Initiative). Emphasise: mobilising senior government stakeholders toward a shared design. Probes: a decision you drove when principals disagreed; what you personally owned versus advised.",
  ]},
  { h3: "Connection (persuasion / influence)" },
  { b: [
    "**NEOM frontier-biotech positioning.** You translated a novel technology and an unfamiliar regulatory regime into propositions credible to international investors. Emphasise: winning over a sceptical counterpart by bridging technical and commercial worlds. Probes: the exact objection you faced and how you turned it; how you knew you’d succeeded.",
    "**Aligning rival stakeholders in a convening.** Any moment you moved two parties from opposed positions to a shared one. Probes: what you said to each side; the concession that unlocked it.",
  ]},
  { h3: "Drive (initiative / building from scratch)" },
  { b: [
    "**The IEEP / thesis work.** You self-directed the research reverse-engineering China’s renewable-energy transformation into a replication framework — building an intellectual artefact from nothing. Emphasise: initiative, ownership, and the fact that you built the exact kind of replicable model this role needs. Probes: why you chose that problem; what you did when the evidence didn’t fit.",
    "**Building a market-entry / community from zero** (the carbon-credit venture across Swiss/Danish markets, or the Workforce Heat Resilience community). Emphasise: creating something where nothing existed and owning the outcome. Probes: the first concrete step you took; a setback and how you pushed through.",
  ]},
  { h3: "Growth (resistance / learning from failure)" },
  { b: [
    "**A career or domain pivot** (energy → Gulf public affairs → frontier tech), and how you adapted, learned a new field fast, and turned adjacency into an asset. Probes: what was hardest; what you’d do differently.",
    "**A genuine setback** — a project that stalled, a convening that didn’t land, advice that wasn’t taken. Choose one real failure, own it cleanly, and show the specific lesson you applied afterwards. Probes: your role in the failure (not others’); the evidence you actually changed.",
  ]},
  { callout: [
    "**The single most important PEI habit:** speak in the first person singular. “I decided… I said… I chose…” — not “we.” The panel is scoring *you*, and “we” is where weak candidates hide.",
  ]},
  { h2: "B4.4 ‘Why this role / why you’ — the answer to anchor everything" },
  { p: "“Because the gap between where technology is going and how we govern it is a defining problem of the decade, and this seat sits exactly on it — with the Forum’s convening power and GRIP’s live model behind it. Why me: I build the connective tissue between technical, policy and commercial worlds; I’ve architected and reverse-engineered industry transformations and turned them into replicable models; I’ve stood up multistakeholder platforms and worked inside a frontier-tech regulatory regime. I’m not the deepest specialist in any single frontier technology — that isn’t the job. The job is designing governance that travels across domains, and being the fast, honest translator that makes it happen.”" },
  { pageBreak: true },
);

/* ===================== B5 · 100-day artifact ===================== */
push(
  { h1: "B5 · The 100-Day Plan (a strategic artifact to memorise)" },
  { lead: "Consultant panels love a candidate who arrives with a structured plan. Keep this on the tip of your tongue; it doubles as the answer to ‘how would you start?’ and as evidence of transformation thinking." },
  { table: { head: ["Phase", "Focus", "Concrete outputs"], widths: [2200, 3200, 3960], rows: [
    ["Days 1–30 · Listen & map", "Diagnose: existing GRIP assets, the sharpest governance gaps, and the internal stakeholder map.", "A landscape of frontier-governance gaps; a stakeholder map; a shortlist of beachhead domains."],
    ["Days 31–60 · Focus & frame", "Pick 2–3 beachheads on a transparent filter; agree the ambition and success measures.", "A signed-off strategy note with a clear thesis and metrics; internal buy-in across Centres."],
    ["Days 61–100 · Prove", "Stand up one concrete convening and one knowledge-product outline; secure first-mover commitments.", "One convening wired to a decision; a Playbook/Index outline; a documented, reusable model."],
  ]}},
  { p: "The discipline to state aloud: **evidence before scale, capability before rules, internal coalition before external ambition** — two beachheads deep, not five shallow. Leading candidates for beachheads: **quantum-to-PQC-migration governance** (fast, winnable, replicable, non-partisan) and **AI-bio biosecurity** (highest stakes). The reusable model — not any single report — is the real year-one deliverable." },
  { callout: [
    "**Close any ‘how would you start’ answer with this:** “Diagnose, define the ambition, design the levers, roll out and replicate — with the government’s role engineered to taper as the ecosystem matures. It’s the transformation playbook, applied to governance.”",
  ]},
  { pageBreak: true },
);

module.exports = { blocks };
