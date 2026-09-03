// Sections 7 (questions to ask Maria), 8 (positioning you), 9 (glossary + key facts).
const blocks = [];
const push = (...b) => blocks.push(...b);

/* ============================ SECTION 7 ============================ */
push(
  { h1: "7 · The Conversation — Comparing Notes, Not Interviewing Her" },
  { lead: "You are not auditioning and you are not interrogating her. You are comparing notes with someone who works the same problem — making AI real — from a different angle. The best openings here do three things at once: connect her work to yours, steer onto the ground where you are strong (energy, utilities, health), and give her something — a pattern, a lens — as much as they ask. That is how you shape the conversation without taking it over." },
  { p: "**How to use this section.** These are not a checklist to fire through. Pick five or six, open with the shared observation, then let her run — an exploratory conversation is won by the person who listens best and builds on what they hear. Each entry gives the opener, why it works, what it quietly signals, and a natural way to take it further." },
  { p: "**The shape of a good opener here:** a sentence of your own view or experience → the genuine question → space for her to disagree. You are offering, then inviting — never quizzing." },

  { h2: "7.A Connecting her pieces (show you see the whole)" },
  { qa: { n: 1, q: "The way I read your work, MINDS and the AI-First blueprint are two halves of one loop — you find the proof, then codify the pattern so it can travel. I’d love to hear where that loop is hardest right now: finding proof in the tough sectors, or getting the pattern adopted once you’ve got it?",
    a: ["**Why it works:** it reflects her two initiatives back as one connected system — almost no one walks in seeing that — and hands her an open, generous question.",
        "**What it signals:** you think in strategy and mechanisms, you did real homework, and you care where she’s going next."],
    say: "Where to take it: if she names adoption as the hard part, that is your cue — adoption in regulated sectors is exactly what you know.",
    sayLabel: "Build on it — " }},
  { qa: { n: 2, q: "Something I keep running into from the policy side is that in regulated sectors adoption stalls on the enabling environment — procurement, standards, trust — as much as on the technology. I’m curious how much of what MINDS surfaces is really about the conditions around the deployment versus the deployment itself.",
    a: ["**Why it works:** it offers your own hard-won lens as a gift, then invites her read — a peer exchange, not a test.",
        "**What it signals:** you understand that scaling AI is a systems-and-conditions problem, and that this is your professional home."],
    say: "This is your flag-planting question — it puts your enabling-environment expertise on the table without a word of self-promotion.",
    sayLabel: "Build on it — " }},

  { h2: "7.B Bringing your world in — energy and utilities" },
  { qa: { n: 3, q: "Your AI’s-energy-dilemma piece really stayed with me — it’s rare to see the demand side and the resilience side held together. In my world, climate-resilient energy and utilities, the same tension shows up: AI is the new load and our best tool for grid resilience at once. I’d genuinely like your read — does it net positive this decade, and is that a technology story or a market-design-and-policy one?",
    a: ["**Why it works:** it engages her own authored work, connects it straight to your domain, and frames the open question the way she thinks — as a system.",
        "**What it signals:** you share her energy foundation, you can hold a two-sided quantitative debate, and the ‘policy’ half is visibly yours to own."],
    say: "If she leans technology, gently hold the market-design side; if she leans policy, you’re already agreeing — deepen with a utilities example.",
    sayLabel: "Build on it — " }},
  { qa: { n: 4, q: "Utilities feel almost like a stress test for the AI-First idea — regulated, safety-critical, slow, and now under real climate pressure. Are you actually seeing the operating-model redesign you describe happen in that kind of sector, or is it still mostly the fast-moving software firms in your cohorts?",
    a: ["**Why it works:** it applies her own framework to your terrain and asks an honest question she’ll enjoy answering candidly.",
        "**What it signals:** you know where the theory meets friction, and you live in the sectors where adoption is hardest and most consequential."],
    say: "Whatever she answers opens a door: if yes, swap examples; if no, that gap is precisely where someone like you helps.",
    sayLabel: "Build on it — " }},

  { h2: "7.C Bringing your world in — health and the public interest" },
  { qa: { n: 5, q: "The MINDS health cases are the ones that stay with me — the Saudi foot-screening pilot especially — because health is exactly where trust, validation and reimbursement decide whether a good model ever reaches a patient. Is pushing deeper into public-interest sectors like health and energy somewhere you want MINDS to go, or is the pull mostly from enterprise?",
    a: ["**Why it works:** it shows you read the actual report, connects to your health background, and asks about her direction rather than her past.",
        "**What it signals:** you understand public-interest adoption — where the enabling environment, not the model, is the gate."],
    say: "If she wants to go deeper there, you have just described your own value; if the pull is enterprise, you’ve named a gap you could help close.",
    sayLabel: "Build on it — " }},

  { h2: "7.D The AI-First thesis, from where you sit" },
  { qa: { n: 6, q: "The line I keep quoting from the blueprint is that the adoption gap is a systems-design failure, not a technology one. From the policy side that rings completely true — the rules were built for a slower world too. I’m curious which of the five building blocks you find leaders most consistently underestimate.",
    a: ["**Why it works:** it agrees with her central claim, extends it into your world in one sentence, then asks an open question about her framework.",
        "**What it signals:** command of the blueprint, plus a systems instinct that reaches beyond the enterprise into the rules around it."],
    say: "Her answer (likely operations redesign) is a chance to note that in regulated sectors the redesign has to include the policy environment.",
    sayLabel: "Build on it — " }},
  { qa: { n: 7, q: "Replicability is the criterion I find most interesting, because in regulated sectors what actually transfers usually isn’t the model — it’s the policy and procurement scaffolding around it. When something travels well across your cohort, what’s really doing the travelling?",
    a: ["**Why it works:** it offers a genuine insight from your practice, then invites her evidence — the archetype of a peer conversation.",
        "**What it signals:** you think about scale the way she does (patterns that generalise), with a policy reading she may not hear often."],
    say: "A natural place to offer a short example of a policy or procurement pattern that made a deployment replicable in your sector.",
    sayLabel: "Build on it — " }},

  { h2: "7.E Where you could help — hold these for later" },
  { p: "Save these for the back third, once the exchange has real warmth. They convert interest into a next step without ever becoming a job ask." },
  { qa: { n: 8, q: "If someone were coming at this agenda from the policy and enabling-environment side — in energy, utilities, health — rather than the technical side, where do you think they’d add the most, and where would they have to earn their stripes?",
    a: ["**Why it works:** it is honest about your angle and asks her to place it — letting her connect the dots to a role, in her words, not yours.",
        "**What it signals:** self-awareness, humility about the adjacency, and serious thought about how you’d actually contribute."],
    say: "Listen hard here — she is effectively describing the shape of a role and what she’d need to trust you with it.",
    sayLabel: "Build on it — " }},
  { qa: { n: 9, q: "Whether or not there’s ever a formal role in this, I’d genuinely like to be useful to this work — a policy read on the energy or health side, an intro, a sounding board. What would actually be helpful to you right now?",
    a: ["**Why it works:** it gives before it takes and keeps the relationship alive past this one meeting — generosity, not a pitch.",
        "**What it signals:** you play long games and add value without needing an immediate transaction, which is how these things become roles."],
    say: "Then deliver whatever you offer within 48 hours. Follow-through is the whole close.",
    sayLabel: "Build on it — " }},

  { callout: [
    "**Three openers to avoid:** (1) anything a search answers in ten seconds (“What is MINDS?”) — it says you didn’t prepare; (2) “Are you hiring?” early — it collapses an exploratory exchange into a transaction; (3) anything that makes her explain the Forum, her own work, or her own field back to you. Open only on ground where your view earns her answer.",
  ]},
  { pageBreak: true },
);

/* ============================ SECTION 8 ============================ */
push(
  { h1: "8 · Positioning You" },
  { lead: "The questions open the door; your own story walks through it. This is your narrative and your answers to the questions she will ask you. The framing is built to Maria’s wavelength — policy as an asset, not an apology; the bracketed specifics are yours to fill (paste me your 4–6 lines and I’ll weave them in)." },
  { callout: [
    "**The reframe to hold throughout:** you are not an AI person trying to get into an AI room. You are a policy specialist in climate-resilient energy, utilities and health — the exact regulated, public-interest sectors where Maria’s work is hardest to land — and you bring the one thing her applications-side team lacks: command of the enabling environment that decides whether AI actually scales there.",
  ]},
  { h2: "8.1 Your one-breath positioning (rehearse until automatic)" },
  { callout: [
    "“I work on the policy and enabling-environment side of climate-resilient energy, utilities and health — the regulated, public-interest sectors where AI is genuinely hard to deploy. That’s the ground where your MINDS proof points and the AI-First pattern most need to hold, and where the bottleneck is as much policy and market design as technology. I’m not here as an AI specialist — I’m here because I know why AI scales or stalls in exactly the sectors you’re trying to transform.”",
  ]},
  { p: "Why this works on her specifically: it names her two strongest applied domains (energy, health), frames you as a systems thinker (her instinct), refuses the AI-hype register (her allergy), and turns ‘policy, not tech’ from a weakness into the scarce asset. Adapt the nouns to your exact experience; keep the shape." },
  { h2: "8.2 Your background → her needs (the map)" },
  { p: "Draft mapping — replace the left column with your real proof points; the right column is the connection to her agenda:" },
  { table: { head: ["Your proof point (fill in)", "Why it matters to Maria's work"], widths: [4200, 5160], rows: [
    ["[A policy / regulatory reform you shaped that changed how a technology or service got adopted]", "The enabling-environment expertise that turns a MINDS pilot into scaled adoption — the scaffolding, not the model."],
    ["[Your climate-resilient energy / utilities work]", "Direct overlap with her energy roots and her ‘AI’s energy dilemma’ work; the grid-resilience frontier where AI is both load and tool."],
    ["[Your health-systems policy work]", "MINDS heartland (the Saudi health case); public-interest adoption where trust, validation and reimbursement are the gate."],
    ["[Multistakeholder / convening work: government + industry + regulators around one table]", "The Forum’s core method. You can build and hold the coalitions that turn dialogue into adoption."],
    ["[A time you translated between the technical/commercial world and the government/regulatory world]", "The exact translator role between ‘AI that works’ and ‘AI that’s allowed, trusted and financed.’"],
  ]}},
  { h2: "8.3 The questions she will ask you — and how to answer" },
  { qa: { n: 1, q: "Tell me about yourself / what brings you here.",
    a: ["Ninety seconds, three beats: **where you work** (policy in climate-resilient energy, utilities, health — the regulated, public-interest end), **the pattern in your work** (making technology adoptable where the enabling environment is the real constraint), and **why her work now** (AI’s hardest, highest-stakes adoption problem lives in exactly your sectors). End on a hook: “…which is why I wanted to compare notes with you specifically.”"],
    say: "Land this: “I’ve spent my career on the part of adoption that isn’t the technology — whether a grid operator, a regulator or a health system can actually put it to work.”",
    sayLabel: "Say this — " }},
  { qa: { n: 2, q: "You’re coming from policy, not applications or AI — why do you think you’d add value here?",
    a: ["Meet it head-on, then convert it. You’re not claiming to be an AI specialist; the field has those. What’s scarce on the applications side is someone who understands why AI stalls or scales in regulated, public-interest sectors — energy, utilities, health — where procurement, standards, trust and market design decide everything. That is exactly where MINDS and the AI-First blueprint have the most to prove."],
    say: "Say this: “In my sectors the model is rarely the bottleneck — the enabling environment is. That’s a policy-and-adoption problem, and it’s my home ground.”",
    sayLabel: "Say this — " }},
  { qa: { n: 3, q: "What would you want to work on?",
    a: ["Have a specific, humble hypothesis tied to her portfolio — e.g. deepening MINDS and the AI-First pattern in energy, utilities and health, or building the ‘enabling-environment playbook’ that makes AI wins replicable in regulated sectors. Offer it as a starting point you’d happily be redirected on, not a demand. Specificity shows you’ve thought; humility shows you’ll listen."],
    say: "Say this: “I have a hypothesis, but you know the gaps better than I do — I’d want to pressure-test it against what you actually need.”",
    sayLabel: "Say this — " }},
  { qa: { n: 4, q: "What do you think is overhyped or wrong in AI right now?",
    a: ["A gift question — she wants a non-hype thinker. Give a crisp, defensible take from your vantage point: the belief that better models solve adoption, when in regulated sectors the real gate is trust, procurement, validation and market design; or agentic-AI theatre that ignores where human oversight and accountability have to sit. Show judgement, not cynicism."],
    say: "Say this: “The hype skips the boring, decisive middle — the trust and procurement layer — which is precisely where adoption is actually won or lost.”",
    sayLabel: "Say this — " }},
  { h2: "8.4 Three things to do in the room" },
  { b: [
    "**Bring one artefact of thought** — a crisp pattern from energy, utilities or health she can use; a way policy made (or blocked) an AI deployment. Give her something to keep.",
    "**Name a tension honestly** — a place her model is hard in regulated sectors, a failure mode you’ve seen. Sycophants are forgettable; honest peers are not.",
    "**Mirror her language** — proof over promise, operating model, deployment, real-world impact, responsible/inclusive, systems. Vocabulary is tribe.",
  ]},
  { h2: "8.5 Three things to avoid" },
  { b: [
    "**AI buzzword bingo** — the fastest way to lose an engineer who has seen every demo. Talk adoption and systems, not models.",
    "**Apologising for being ‘just policy’** — it is your edge here, not a gap. Never frame it as a limitation.",
    "**Collapsing it into a job ask too early** — let the fit reveal itself; make the explicit ask once, late, and light (§8.6).",
  ]},
  { h2: "8.6 The close — the one explicit ask" },
  { p: "In the last few minutes, once the conversation has real warmth, make a single clean ask and then stop: **“This has only made me more interested. If a role or a project where I could help ever takes shape — especially on the energy, utilities or health side — I’d love to be in the conversation. In the meantime I’ll send you [the specific useful thing] and stay in touch.”** Then deliver on that follow-up within 48 hours. An exploratory conversation converts through generosity and follow-through, not pressure." },
  { pageBreak: true },
);

/* ============================ SECTION 9 ============================ */
const glossary = [
  ["Centre for AI Excellence (CAIE)", "The WEF platform for responsible, applied AI adoption — turning AI into productivity, competitiveness and societal benefit. Maria Basso leads AI Applications & Impact here. A European centre is launching in Paris."],
  ["MINDS", "Meaningful, Intelligent, Novel, Deployable Solutions — the WEF programme spotlighting AI deployments that have moved beyond pilots to measurable, responsible impact at scale."],
  ["Impact Council", "The independent, international panel of senior executives and experts that vets MINDS applicants on innovation, impact and replicability."],
  ["Proof over Promise", "The WEF-Accenture report (2026) distilling lessons from 2025 MINDS organisations: the winners integrate AI into core strategy; the adoption divide is organisational, not technological."],
  ["AI-First Operating System", "The WEF-Kearney blueprint (2026) for rebuilding enterprises around intelligence, across operating-model and business-model innovation. Five building blocks."],
  ["AI-enabled vs AI-first", "AI-enabled = AI layered onto existing processes. AI-first = workflows, roles, decisions and business model redesigned around intelligence. The core distinction."],
  ["Intelligence engines", "Building block 1: self-reinforcing, data-driven flywheels that learn from every interaction — working across speed, scale and scope."],
  ["Adaptive technology stack", "Building block 2: a modular stack that plugs the intelligence engine into real systems and evolves as models and vendors change."],
  ["Operations redesign", "Building block 3: re-architecting workflows around intelligence — the block enterprises most underestimate."],
  ["Human-AI teaming", "Building block 4: intelligence as collaborator; roles and decisions redesigned around human-AI work, with human oversight designed in."],
  ["New value creation", "Building block 5: continuous (not episodic) value; measure adoption, trust, growth, learning; unlock new products and business models."],
  ["Intelligence as capital", "The blueprint’s reframe: allocate AI to the highest-leverage workflows, working backwards from the outcomes that matter most."],
  ["Agentic AI", "AI that takes actions across workflows, not just generates content — raising the stakes on trust, oversight and operating-model redesign."],
  ["The adoption paradox", ">$250bn invested in AI in 2025, yet only ~25% of firms report transformative impact — a systems-design gap, not a technology gap."],
  ["AI's energy dilemma", "Maria's Jan-2025 WEF article: AI is both a fast-rising energy load (data centres ~415→945 TWh by 2030) and a powerful energy-optimisation tool (up to −60%)."],
  ["Net-positive AI", "The goal of AI enabling more energy savings across the economy than its own compute consumes."],
  ["C4IR network", "The WEF Centre for the Fourth Industrial Revolution — a global network of centres that localise and replicate the Forum's tech work; CAIE Paris is the first European AI centre in it."],
  ["AI Governance Alliance", "The WEF's large multistakeholder network on responsible AI — the governance counterpart to CAIE's applications-and-impact focus."],
  ["Advanced Manufacturing & Value Chains", "The WEF platform (and Global Lighthouse Network world) where Maria began at the Forum — the industrial, real-economy roots of her work."],
  ["Convening power", "The Forum's actual lever: no regulatory or operational authority, but trusted neutral space and influential knowledge products that leaders choose to adopt."],
];

push(
  { h1: "9 · Glossary and Key Facts" },
  { lead: "The working vocabulary and the numbers. Fluency with these is the fastest signal that you did the work and belong in the conversation." },
  { h2: "9.1 Numbers to have ready" },
  { table: { head: ["Number", "What it is"], widths: [2400, 6960], rows: [
    [">$250 billion", "Global AI investment in 2025 — against which only ~25% of firms report transformative impact."],
    ["~25%", "Share of businesses reporting AI has had a transformative impact — the adoption paradox."],
    ["5 building blocks", "Intelligence engines · adaptive tech stack · operations redesign · human-AI teaming · new value creation."],
    ["3 criteria", "MINDS selection: innovation · impact · replicability."],
    ["18 orgs / 23 countries", "The first MINDS cohort (New Champions 2025, Hangzhou); later cohorts expanded across 12+ sectors and ~28 countries — verify current figures."],
    ["415 → ~945 TWh", "Global data-centre electricity, 2024 → projected 2030 (more than double); ~1% → 3%+ of global electricity."],
    ["up to −60% / −90% / −80%", "AI energy savings in some deployments (−60%); Saudi MoH diabetic-foot pilot: −90% clinician time, −80% cost (MINDS proof points)."],
    ["$15m / $20m", "Fujitsu supply-chain AI: inventory-cost and excess-stock reductions (a MINDS proof point)."],
  ]}},
  { h2: "9.2 Glossary" },
);
for (const [term, def] of glossary) {
  blocks.push({ p: `**${term}.** ${def}` });
}

module.exports = { blocks };
