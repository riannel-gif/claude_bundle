// Sections 7 (questions to ask Maria), 8 (positioning you), 9 (glossary + key facts).
const blocks = [];
const push = (...b) => blocks.push(...b);

/* ============================ SECTION 7 ============================ */
push(
  { h1: "7 · The Questions You Ask Maria" },
  { lead: "This is the operational heart of the brief. In an exploratory conversation, your questions are your résumé. Each one below is engineered to do two jobs at once: advance a genuinely interesting discussion, and reveal something about how you think and what you bring. Pick 6–8 that fit you; do not fire all of them. Under each: why it works, what it signals about you, and a follow-up to go deeper." },
  { p: "**How to read each entry:** the bold line is the question to ask. “Why it lands” is the strategic intent. “Signals” is what Maria learns about you by your asking it. The italic line is your follow-up probe once she answers." },

  { h2: "7.A Her vision and the Centre's direction" },
  { qa: { n: 1, q: "You’ve built MINDS to find what works and the AI-First blueprint to codify why — where does that evidence-to-pattern engine go next? What’s the gap you most want to close in the coming year?",
    a: ["**Why it lands:** it shows you see her two initiatives as one connected system, not two press releases — a level of understanding almost no one walks in with.",
        "**Signals:** you think in strategy and mechanisms; you’ve done real homework; you’re interested in where she’s going, not just where she’s been."],
    say: "Follow-up: “Is the harder problem finding the proof, or getting the rest of the market to actually adopt the pattern?”" }},
  { qa: { n: 2, q: "The Centre for AI Excellence sits on the applications-and-impact side, with the AI Governance Alliance on the guardrails side. As agentic AI arrives, how do you keep those two moving together rather than in tension?",
    a: ["**Why it lands:** it demonstrates you understand the Forum’s internal architecture and the real seam in the field — value versus oversight.",
        "**Signals:** you can hold both the upside and the responsibility of AI at once — exactly the balanced judgement applied-AI leadership requires."],
    say: "Follow-up: “Where does human oversight actually belong in an agentic workflow — is that a design question or a governance one?”" }},
  { qa: { n: 3, q: "What does ‘good’ look like to you in this work — when you look back on a year, what has to have happened for it to have been a success?",
    a: ["**Why it lands:** it invites her to articulate her own success metrics, and tells you exactly what to align yourself to.",
        "**Signals:** you’re outcome-oriented and you instinctively define success before activity — her own “proof over promise” instinct."],
    say: "Follow-up: “And what’s the failure mode you work hardest to avoid?”" }},

  { h2: "7.B MINDS" },
  { qa: { n: 4, q: "MINDS rewards innovation, impact and replicability — but replicability is the hardest of the three when the real constraint is data, capital or regulation, not the model. How do you think about which winners actually transfer?",
    a: ["**Why it lands:** you named her three selection criteria *and* put pressure on the most interesting one, showing genuine grip on the programme.",
        "**Signals:** you understand that scaling AI is an economics-and-context problem, not a technology one — a real-economy sensibility."],
    say: "Follow-up: “Do the industrial cases transfer differently from the software ones?”" }},
  { qa: { n: 5, q: "‘Proof over Promise’ found the winners integrate AI into core strategy rather than running it as a side lab. In your cohorts, is that a leadership trait, an operating-model trait, or a data-foundations trait — what’s the real differentiator?",
    a: ["**Why it lands:** it quotes her actual report and pushes past the headline to the causal mechanism.",
        "**Signals:** you read the primary source, and you’re looking for root causes, not talking points."],
    say: "Follow-up: “Have you seen anyone retrofit that integration successfully, or does it have to be built in from the top?”" }},
  { qa: { n: 6, q: "Energy and heavy industry are harder to showcase than software — longer cycles, physical constraints, higher stakes. Does MINDS see enough from those sectors, and what would it take to surface more of it?",
    a: ["**Why it lands:** it opens the door to *your* territory (§5) through a genuine gap in the programme, not a self-promotion.",
        "**Signals:** you come from the harder, physical end of AI adoption — and you’re already thinking about how to help the programme reach it."],
    say: "Follow-up: “Where I come from, the win is often invisible — a few points of yield or uptime. Does that kind of impact register the way a flashy demo does?”" }},

  { h2: "7.C The AI-First Operating System" },
  { qa: { n: 7, q: "The blueprint’s sharpest claim is that the adoption gap is a systems-design failure, not a technology one. In practice, which of the five building blocks do organisations most consistently underestimate — my bet is operations redesign?",
    a: ["**Why it lands:** it engages the central thesis and the five-block framework precisely, then offers your own hypothesis to react to.",
        "**Signals:** command of her framework, plus the confidence to hold a view — and an operating-model instinct, not a tech one."],
    say: "Follow-up: “Because redesigning workflows means redrawing roles and incentives — which is change management people avoid by buying tools instead.”" }},
  { qa: { n: 8, q: "You frame intelligence as capital — allocate it to the highest-leverage workflows. How do leaders actually make that allocation call when every function is asking for AI at once?",
    a: ["**Why it lands:** it takes her most memorable metaphor and pushes it to the hard operational question of prioritisation.",
        "**Signals:** you think like an operator who has had to allocate scarce resources under pressure, not a theorist."],
    say: "Follow-up: “Is there a portfolio logic to it — a few big bets versus many small ones?”" }},
  { qa: { n: 9, q: "The title pairs operating-model and business-model innovation, but most firms stop at efficiency and never reach new value creation. What separates the ones that make that leap to genuinely new business models?",
    a: ["**Why it lands:** it distinguishes the two halves of her title — a nuance most readers miss — and targets the more ambitious one.",
        "**Signals:** you see AI as a value-creation and strategy question, not just a cost-cutting one."],
    say: "Follow-up: “Does new value creation usually come from the data exhaust, or from redesigning the customer offer itself?”" }},

  { h2: "7.D Energy, industry and the real economy (your turf)" },
  { qa: { n: 10, q: "You’ve written about AI’s energy dilemma — the demand side and the optimisation side. Do you think AI nets positive for the energy system this decade, and is that a technology question or a market-design one?",
    a: ["**Why it lands:** it engages her own authored work directly and frames it as a systems question, which is how she thinks.",
        "**Signals:** you share her energy-systems foundation and can hold a genuinely two-sided, quantitative debate."],
    say: "Follow-up: “Because the savings are real but diffuse, and the load is concentrated and visible — which is exactly the kind of asymmetry markets handle badly.”" }},
  { qa: { n: 11, q: "Industrial AI is where operations redesign is hardest and the impact is most physical. From your Advanced Manufacturing years to now, what’s actually changed about getting AI onto the factory or grid floor — and what stubbornly hasn’t?",
    a: ["**Why it lands:** it honours her formative work and invites a then-versus-now reflection, which people enjoy giving.",
        "**Signals:** you know this terrain first-hand and you understand that industrial adoption has its own physics."],
    say: "Follow-up: “Is agentic AI going to move faster in the back office than on the shop floor, or is that where the real prize is?”" }},

  { h2: "7.E Where you could fit — the meta-questions" },
  { p: "Save these for the back third, once rapport is real. They convert interest into a concrete next step without an awkward ask." },
  { qa: { n: 12, q: "If you were bringing someone into this work, where would they add the most value right now — is it generating the evidence, curating the ecosystem, or codifying the patterns into things others can use?",
    a: ["**Why it lands:** it asks her to map the work into roles — surfacing where a person like you fits, in her words, not yours.",
        "**Signals:** you’re thinking concretely about contribution and you respect that she knows her needs better than you do."],
    say: "Follow-up: “And is the constraint right now people, insight, or reach?”" }},
  { qa: { n: 13, q: "Given where I sit — [your one-line background] — the place I think I could be most useful to this agenda is [your hypothesis]. Does that match a real gap, or am I seeing it wrong?",
    a: ["**Why it lands:** it makes a specific, falsifiable offer and invites her to correct it — humble and concrete at once.",
        "**Signals:** you’ve done the work of connecting yourself to her agenda, and you’re secure enough to be told you’re wrong."],
    say: "Follow-up: “What would you want to see from someone before you’d trust them with that?”" }},
  { qa: { n: 14, q: "What’s the best way for me to be useful to you over the next few months, regardless of whether a formal role exists — a pattern from my sector, an intro, a sounding board on the industrial side?",
    a: ["**Why it lands:** it gives before it takes and keeps the relationship alive past this single meeting.",
        "**Signals:** you play long games and add value without needing an immediate transaction — which is how you end up hired."],
    say: "Follow-up: “I’ll follow up with [the specific thing] either way — it’s genuinely useful to think about.”" }},

  { callout: [
    "**Three questions NOT to ask:** (1) anything Google answers in ten seconds (“What is MINDS?”) — it signals you didn’t prepare; (2) “Are you hiring?” early — it collapses an exploratory conversation into a transactional one; (3) anything that makes her explain the Forum to you. Ask questions only *she* can answer well.",
  ]},
  { pageBreak: true },
);

/* ============================ SECTION 8 ============================ */
push(
  { h1: "8 · Positioning You" },
  { lead: "The questions open the door; your own story walks through it. This section is your narrative and your answers to the questions she will ask you. The bracketed placeholders are yours to fill — paste me your 4–6 line background and I will weave the specifics in." },
  { callout: [
    "**Fill-in note.** Everywhere you see [square brackets], insert your specifics. The scaffolding — the structure, the altitude, the framing — is built to Maria’s wavelength; the content is yours. Send me the quick summary and I’ll replace every placeholder with your real material.",
  ]},
  { h2: "8.1 Your one-breath positioning (rehearse until automatic)" },
  { callout: [
    "“I come from [energy / manufacturing / industrial-tech], where I [built / scaled / ran] [X] — so I’ve spent my career at the point where technology meets the real, physical economy. What pulls me toward your work is that this is exactly where AI most needs to prove itself and has the fewest natural translators. I’m not here to be another AI specialist — I’m here because making AI actually work in energy and industry is a systems problem, and that’s the problem I know.”",
  ]},
  { p: "Why this works on her specifically: it leads with the real economy (her roots), frames you as a systems thinker and translator (her instinct), and refuses the AI-hype register (her allergy). Adapt the nouns to your truth; keep the shape." },
  { h2: "8.2 Your background → her needs (the map)" },
  { p: "Draft mapping — replace the left column with your real proof points, keep the right column as the connection to her agenda:" },
  { table: { head: ["Your proof point (fill in)", "Why it matters to Maria's work"], widths: [4200, 5160], rows: [
    ["[A time you deployed technology into a real operation and moved a number]", "Direct MINDS logic — proof over promise, measurable impact, deployment not demo."],
    ["[A time you redesigned a process/workflow, not just added a tool]", "The AI-First thesis in miniature — operations redesign, the block firms underestimate."],
    ["[Your energy and/or manufacturing depth]", "Shared foundation with her; credibility in the hardest, most physical adoption terrain."],
    ["[Any cross-market / multi-stakeholder / scaling work]", "The Forum runs on reach and replicability; you can make things travel across contexts."],
    ["[Any experience turning insight into something others adopted]", "Knowledge-product and ecosystem-curation instinct — how the Forum actually creates impact."],
  ]}},
  { h2: "8.3 The questions she will ask you — and how to answer" },
  { qa: { n: 1, q: "Tell me about yourself / what brings you here.",
    a: ["Ninety seconds, three beats: **where you come from** (the real-economy / systems throughline), **the pattern in your work** (deploying tech into physical operations for measurable impact), and **why her work now** (AI’s hardest, highest-stakes adoption problem is the one you’re built for). End on a hook, not a full stop: “…which is why I wanted to compare notes with you specifically.”"],
    say: "Land this: “I’ve always worked where the technology has to survive contact with reality — a grid, a factory, a supply chain.”" }},
  { qa: { n: 2, q: "You’re not from an AI background — why do you think you’d add value here?",
    a: ["Meet it head-on, then convert it. You’re not claiming to be an AI researcher; the field has plenty. What’s scarce is people who understand where AI meets the constrained, capital-intensive real economy — and that’s exactly where MINDS and the AI-First blueprint most need to prove out. Name your domain depth as the asset, and translation as the skill."],
    say: "Say this: “The models aren’t the bottleneck — the operating model is. That’s an industrial-transformation problem, and that’s my home ground.”" }},
  { qa: { n: 3, q: "What would you want to work on?",
    a: ["Have a specific, humble hypothesis tied to her portfolio — e.g. deepening MINDS/AI-First evidence in energy and heavy industry, or building the pattern-library that makes industrial AI wins replicable. Offer it as a starting point you’d happily be redirected on, not a demand. Specificity shows you’ve thought; humility shows you’ll listen."],
    say: "Say this: “I have a hypothesis, but you know the gaps better than I do — I’d want to pressure-test it against what you actually need.”" }},
  { qa: { n: 4, q: "What do you think is overhyped or wrong in AI right now?",
    a: ["A gift question — she wants a non-hype thinker. Give a crisp, defensible take: the assumption that better models solve adoption, when the real gap is workflow, data and operating-model redesign; or agentic-AI theatre that ignores where human oversight has to sit. Show judgement, not cynicism."],
    say: "Say this: “The hype skips the boring middle — the workflow redesign — which is precisely where the value actually is.”" }},
  { h2: "8.4 Three things to do in the room" },
  { b: [
    "**Bring one artefact of thought** — a crisp observation, a small framework, a pattern from your sector she can use. Give her something to keep.",
    "**Name a tension honestly** — a place her model is hard, a failure mode you’ve seen. Sycophants are forgettable; honest peers are not.",
    "**Mirror her language** — proof over promise, operating model, deployment, real-world impact, systems. Vocabulary is tribe.",
  ]},
  { h2: "8.5 Three things to avoid" },
  { b: [
    "**AI buzzword bingo** — the fastest way to lose an engineer who has seen every demo.",
    "**Asking her to explain her own field** — ask only what she uniquely can answer.",
    "**Collapsing it into a job ask too early** — let the fit reveal itself; make the explicit ask once, late, and light (§8.6).",
  ]},
  { h2: "8.6 The close — the one explicit ask" },
  { p: "In the last few minutes, once the conversation has real warmth, make a single clean ask and then stop: **“This has only made me more interested. If a role or a project where I could help ever takes shape, I’d love to be in the conversation — and in the meantime I’ll send you [the specific useful thing] and stay in touch.”** Then deliver on that follow-up within 48 hours. An exploratory conversation converts through generosity and follow-through, not through pressure." },
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
