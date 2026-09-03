// Body content for the Maria Basso / WEF conversation brief, as a block DSL array.
// Prose uses typographic quotes to avoid JS escaping.

const blocks = [];
const push = (...b) => blocks.push(...b);

/* ============================ SECTION 0 ============================ */
push(
  { h1: "0 · How to Use This Brief" },
  { lead: "This is a conversation-command document for an exploratory meeting — not a scripted interview. The goal is not to survive questions; it is to be the most interesting, most useful person Maria Basso talks to this month, and to leave her thinking “I want this person in my orbit.”" },
  { p: "An exploratory conversation with no job description is a different game from an interview. There is no rubric to pass — which means you are being assessed on something subtler: *how you think, what you notice, and whether working with you would make her work better.* This brief is built to win on exactly that." },
  { p: "Read it in three passes, matched to how much time you have:" },
  { b: [
    "**Pass 1 — the Cheat Sheet (separate file).** One page: who Maria is, the two initiatives, the numbers, your questions, your pitch. Read it last, in the taxi.",
    "**Pass 2 — Sections 7 and 8 (your questions and your positioning).** This is the operational core. Section 7 is the set of questions *you* ask — each engineered to be substantive *and* to reveal something about you. Section 8 is your narrative and the answers to the questions she will ask you. Rehearse these out loud.",
    "**Pass 3 — Sections 1–6 (the knowledge base).** Who Maria is (§1), the Centre she is building (§2), the MINDS programme (§3), the AI-First Operating System blueprint (§4), the AI-energy and AI-industry intersections that are your home turf (§5), and the enterprise-AI reality you must speak fluently (§6). Read once for command, not memorisation.",
  ]},
  { h2: "The conversation in one breath" },
  { callout: [
    "Maria Basso builds the bridge between frontier AI and the real economy — spotlighting AI that actually ships (MINDS) and codifying how enterprises rebuild themselves around intelligence (the AI-First Operating System). She came to it through energy systems and advanced manufacturing, not through a lab. That is your opening: you are not an “AI person” asking to be let in — you are someone who already lives at the intersection of technology and industrial reality, which is precisely the ground she works on.",
  ]},
  { h2: "The three moves that win this conversation" },
  { n: [
    "**Show you understand her actual work, specifically.** Not “I admire the WEF” — but “the AI-First blueprint’s claim that the $250bn adoption gap is a *systems-design* failure, not a technology failure, is the part most people miss.” Specificity is the whole signal.",
    "**Bring her something she doesn’t already have.** A pattern from your sector, a sharp question about a tension in her model, a view on where MINDS goes next. Exploratory conversations are won by people who *add*, not people who *ask to receive*.",
    "**Make the fit obvious without asking for a job.** Let your questions and examples do the work, so that by the end she is the one connecting the dots to a role. The explicit ask (§8.6) comes once, late, and lightly.",
  ]},
  { pageBreak: true },
);

/* ============================ SECTION 1 ============================ */
push(
  { h1: "1 · Maria Basso, Decoded" },
  { lead: "You are not meeting “the WEF.” You are meeting one specific person with a specific trajectory, specific instincts, and a specific view of what good looks like. Understand her, and the conversation almost runs itself." },
  { h2: "1.1 Who she is now" },
  { p: "Maria Basso is **Head of AI Applications and Impact at the World Economic Forum’s Centre for AI Excellence (CAIE)**. In plain terms: she owns the Forum’s work on getting AI *out of the lab and into real operations* — where it delivers measurable value, responsibly, at scale. Her two flagship vehicles are the **MINDS programme** (spotlighting AI solutions already delivering real-world impact) and the **AI-First Operating System** blueprint (how enterprises re-architect themselves around intelligence). She is quoted as the voice of MINDS and is an active WEF Agenda contributor." },
  { h2: "1.2 The trajectory — and why it matters to you" },
  { p: "Her path is the tell. Read it and you understand what she values:" },
  { table: { head: ["Stage", "What it signals"], widths: [3400, 5960], rows: [
    ["MSc, Mechanical Engineering & Innovation in Energy Systems", "She is an engineer first. She thinks in systems, constraints and physical reality — not slideware. Energy is in her foundations, not a talking point."],
    ["United Nations · McKinsey & Company · UC Berkeley", "Development and sustainability agendas, top-tier consulting rigour, and a research/innovation environment. She respects structure, evidence and impact — and has seen hype up close."],
    ["Platform Curator, Advanced Manufacturing & Value Chains Centre (WEF)", "Her entry to the Forum was through the *industrial* economy — factories, supply chains, the Global Lighthouse Network world. This is real-economy transformation, not consumer tech."],
    ["Digital Technologies Portfolio Manager, C4IR", "She scaled from manufacturing into the broader Fourth Industrial Revolution portfolio — digital tech across industries, including the AI-energy nexus (she co-authored “AI’s energy dilemma”, Jan 2025)."],
    ["Head of AI Applications & Impact, Centre for AI Excellence", "The through-line lands: applied AI that changes how industries actually run. The word that recurs across her whole career is impact — not novelty."],
  ]}},
  { callout: [
    "**The one insight to internalise:** Maria is an energy-and-manufacturing systems thinker who now runs applied-AI impact. She is congenitally sceptical of AI theatre and drawn to people who talk about *deployment, operating reality and measurable outcomes*. If your instinct is the same — value over hype, systems over demos — you are speaking her native language. Lead with that.",
  ]},
  { h2: "1.3 What she optimises for (so you can mirror it)" },
  { b: [
    "**Proof over promise.** The literal title of her MINDS report. She wants AI that has *shipped* and moved a number — not roadmaps. Every example you give should have an outcome attached.",
    "**Systems, not point solutions.** Her engineering and manufacturing roots mean she sees the whole value chain. “We bolted a copilot on” bores her; “we redesigned the workflow around the model” interests her.",
    "**Responsible and inclusive by design.** CAIE and the AI Governance Alliance frame everything through trust, human oversight and societal benefit. Responsibility is not a compliance afterthought for her; it is part of what “good” means.",
    "**Replicability and scale.** MINDS explicitly rewards solutions that *transfer* across contexts. She thinks in patterns that generalise, not one-off wins.",
    "**Real economy, global.** Energy, manufacturing, healthcare, financial services — and a genuine Global-South and cross-border lens, not just Silicon Valley.",
  ]},
  { h2: "1.4 What an exploratory conversation is really testing" },
  { p: "With no JD, she is running four quiet assessments. Map your preparation to them:" },
  { table: { head: ["What she's really asking", "How you win it"], widths: [3800, 5560], rows: [
    ["Do you actually get this space, or are you AI-curious?", "Reference her specific work (§3, §4) and the real adoption debate (§6) with precision. Specificity beats enthusiasm."],
    ["Would working with you make my work better?", "Bring a pattern, a question or a view she hasn’t heard. Be additive in the room itself — the conversation is the audition."],
    ["Are you a systems thinker or a hype-follower?", "Talk deployment, operating models, constraints and measurable outcomes. Name a failure mode honestly."],
    ["Where could you actually fit — and do you know?", "Have a clear, humble hypothesis about where you'd add value (§8), tied to her portfolio, not a generic “I’d love to help.”"],
  ]}},
  { h2: "1.5 Reading the room: her likely style" },
  { p: "Expect an engineer-consultant hybrid: warm but substance-seeking, quick to spot vagueness, energised by a sharp idea. She will likely give you room to talk — which is a trap if you fill it with generalities and an opportunity if you fill it with specifics. Match her altitude: strategic enough to see the whole system, concrete enough to name the real mechanism. When she tests an idea, do not defend — build on it. The fastest way to lose her is AI buzzword bingo; the fastest way to earn her is one genuinely useful observation about her own field." },
  { pageBreak: true },
);

/* ============================ SECTION 2 ============================ */
push(
  { h1: "2 · The Centre for AI Excellence — the House She Is Building" },
  { lead: "Understand the institution around Maria and you can speak to where her work fits, where it is going, and where a person like you could plug in. This is the context that separates a prepared candidate from a curious one." },
  { h2: "2.1 What CAIE is" },
  { p: "The **Centre for AI Excellence (CAIE)** is the Forum’s platform for advancing *responsible, applied AI adoption* — turning AI’s potential into productivity, competitiveness and societal benefit across business and society. A **European Centre for AI Excellence** is being established in **Paris** (announced 2025, with VivaTech) as the first centre in Europe focused on AI innovation within the Forum’s **Fourth Industrial Revolution (C4IR) network**. Its stated remit: support cross-border research, foster start-up ecosystems, and promote responsible AI adoption. It sits alongside the Forum’s **AI Governance Alliance** — one of the largest multi-stakeholder AI networks globally." },
  { p: "The distinction to hold in your head: the Forum has **two AI centres of gravity**. One is *governance* (the AI Governance Alliance, safety, rules). The other — Maria’s — is *applications and impact*: how AI actually gets deployed to create value. She lives on the **adoption-and-impact** side. Aim your energy there; nod to governance as the necessary partner, not the main event." },
  { h2: "2.2 Where MINDS and the AI-First blueprint sit" },
  { p: "Maria’s two initiatives are the two halves of one thesis — *making AI real*:" },
  { table: { head: ["Initiative", "The question it answers", "Its role in the portfolio"], widths: [2500, 3760, 3100], rows: [
    ["MINDS programme", "Who is already doing AI that works — and what can we learn from them?", "The evidence engine: a curated, vetted cohort of real deployments with measurable impact."],
    ["AI-First Operating System (with Kearney)", "How does an enterprise re-architect itself so AI creates value at scale, not in pilots?", "The blueprint: the generalised operating- and business-model framework distilled from the evidence."],
  ]}},
  { p: "Said as one line you can use: **MINDS is the proof; the AI-First Operating System is the pattern.** She finds what works, then codifies why — so it can be replicated. That evidence-to-pattern-to-replication loop is the shape of everything she does, and echoing it shows you understand the machine, not just the outputs." },
  { h2: "2.3 The C4IR network — the delivery mechanism" },
  { p: "The **Centre for the Fourth Industrial Revolution (C4IR)** is a global network of centres (in the US, Japan, India, Saudi Arabia, and now Europe/Paris, among others) that localise and pilot the Forum’s technology work in-country. For Maria’s work this is the distribution system: a MINDS pattern or an AI-first playbook proven in one place can be packaged and replicated across the network. If you have any multi-market or cross-border experience, this is where it becomes relevant — the Forum’s superpower is reach, and people who can make things *travel* across contexts are valuable to it." },
  { h2: "2.4 The Forum’s method — convening, not commanding" },
  { p: "The Forum has no operational or regulatory power; its influence is **convening power** — trusted, neutral space plus influential knowledge products that leaders choose to adopt. For Maria’s work that means impact comes through: curated communities (the MINDS cohorts, the Impact Council), knowledge products (the blueprint, the “Proof over Promise” report), and the credibility to get rival firms and governments into one room. Understand this and you will pitch yourself correctly — not as someone who will “build product,” but as someone who can generate insight, curate ecosystems, and turn evidence into influence." },
  { pageBreak: true },
);

/* ============================ SECTION 3 ============================ */
push(
  { h1: "3 · MINDS — Her Flagship Programme" },
  { lead: "This is the initiative most associated with Maria by name. Know it cold — the acronym, the thesis, how it selects, and what it has learned. Referencing a specific MINDS finding is the single fastest way to prove you did more than skim her LinkedIn." },
  { h2: "3.1 What MINDS is" },
  { p: "**MINDS — Meaningful, Intelligent, Novel, Deployable Solutions** — is a WEF programme that identifies and showcases AI solutions that have **moved beyond the pilot phase to deliver measurable, responsible impact at scale**. It exists to close the gap between AI hype and AI reality by spotlighting deployments that actually work, across critical sectors: **healthcare, energy, financial services, manufacturing** and more. In Maria’s framing, MINDS spotlights AI that is “not only innovative but grounded in societal needs… delivering tangible value when designed with people at the centre.”" },
  { h2: "3.2 How it runs — the facts to cite" },
  { b: [
    "**Cohorts.** The first cohort — 18 organisations across 23 countries — was unveiled at the **Annual Meeting of the New Champions 2025 in Hangzhou**. Subsequent cohorts have expanded the programme across more sectors and countries (later cohorts span the mid-20s in organisation count, 12+ sectors, and ~28 countries). *Verify the current cohort’s exact figures the week of your meeting — she will know them precisely.*",
    "**Selection.** Organisations are chosen through a structured evaluation, including review by an **independent international Impact Council** of senior executives and subject-matter experts. The three criteria to name: **innovation, impact, and replicability.**",
    "**Results.** Collectively, MINDS companies report **double-digit gains in productivity and revenue**, driven by operational efficiency. The programme’s whole premise is *measurable* outcomes — “proof over promise.”",
    "**Framing.** Recurring language: AI moving “from pilot to production,” “from potential to performance,” real-world impact, responsible and inclusive deployment. Use this vocabulary — it is hers.",
  ]},
  { h2: "3.3 “Proof over Promise” — the report to know" },
  { p: "**“Proof over Promise: Insights on Real-World AI Adoption from 2025 MINDS Organizations”** (published early 2026, developed with **Accenture**) distils lessons from the first cohorts. The core findings you can deploy:" },
  { b: [
    "**A widening divide** between organisations that have built the *capability to scale* AI and those still stuck in pilots. The differentiator is organisational, not technological.",
    "**Deep integration wins.** Organisations that weave AI into their *core business strategy* — not a side lab — achieve the greatest impact. AI success is a *byproduct of a broader transformation strategy*, not a standalone project.",
    "**Concrete proof points to quote:** a Saudi Ministry of Health pilot used AI-enabled thermal imaging for early detection of diabetic-foot conditions, cutting clinician time by up to **90%** and treatment costs by up to **80%**. Fujitsu deployed supply-chain AI that cut inventory-related costs by **$15m** and excess stock by **$20m**. (These are her case studies — using one shows you read the actual report.)",
  ]},
  { callout: [
    "**The MINDS insight that flatters her thesis (say a version of this):** “The interesting thing about MINDS is that it quietly proves adoption is an operating-model problem, not a model problem. The winners didn’t have better AI — they rebuilt the workflow around it. Which is exactly why the AI-First blueprint had to exist.” This connects her two initiatives in one sentence and shows you see the strategy behind them.",
  ]},
  { h2: "3.4 Where you can be additive on MINDS" },
  { p: "Exploratory conversations reward people who have *views* about the host’s work. Candidate angles to have ready (pick the ones that fit your background): how MINDS could go deeper in **energy and heavy industry** (harder to showcase than software, but higher-stakes); how to measure *durable* impact versus launch-moment metrics; how replicability actually works when the constraint is data or capital, not the model; and how the Global South gets into the cohort, not just cc’d. You are not criticising the programme — you are showing you could help it think." },
  { pageBreak: true },
);

/* ============================ SECTION 4 ============================ */
push(
  { h1: "4 · The AI-First Operating System — the Blueprint" },
  { lead: "This is the publication you were pointed to, and the more strategic half of her work. It is the intellectual spine of the conversation. Know the thesis, the five building blocks, and the one distinction everything hinges on." },
  { h2: "4.1 The thesis — in one paragraph" },
  { p: "**“The AI-First Operating System: A Blueprint for Operating and Business Model Innovation”** (World Economic Forum with **Kearney**, 2026, drawing on 50+ leading organisations) starts from a provocation: more than **$250 billion** was invested in AI globally in 2025, yet only about **25%** of businesses say it has had a transformative impact. The report’s sharp claim is that this gap is **a failure of systems design — not of technology, and not of change management.** Most enterprises are *layering AI on top of existing workflows* instead of *rebuilding the enterprise around intelligence.* The fix is an “AI-first operating system.”" },
  { h2: "4.2 The distinction everything hinges on" },
  { callout: [
    "**AI-enabled vs. AI-first.** An *AI-enabled* organisation adds AI to existing processes — a copilot here, an automation there. An *AI-first* organisation redesigns its workflows, roles, decision-making and business model *around* intelligence, so AI is embedded in how the enterprise runs — not an add-on, but the core capability that shapes how it creates value. The blueprint’s memorable reframe: **treat intelligence like capital** — identify the outcomes that matter most, then work backwards into the workflows where AI creates the greatest operating leverage.",
  ]},
  { h2: "4.3 The five building blocks" },
  { p: "The blueprint sets out **five building blocks of AI-first success.** Know all five and what each means — this is the framework she will be delighted to hear you use precisely:" },
  { table: { head: ["Building block", "What it means"], widths: [2650, 6710], rows: [
    ["1 · Intelligence engines", "Self-reinforcing, data-driven flywheels that learn from every interaction, grow smarter with use, and tie performance back to business outcomes. They work across three dimensions — speed (rapid hypothesis generation), scale (platform operationalisation) and scope (recomposing proven capabilities into new ones)."],
    ["2 · Adaptive technology stack", "A modular tech stack that connects the intelligence engine into the systems where work already happens, while letting the organisation swap models, vendors and applications as the frontier moves. Built to evolve, not to lock in."],
    ["3 · Operations redesign", "Re-architecting workflows and processes around intelligence and automation — the hard organisational work that turns a model into an operating change, rather than bolting AI onto yesterday’s process."],
    ["4 · Human-AI teaming", "Treating intelligence as a collaborator. Teams, roles and decision-making are redesigned around human-AI collaboration and outcome-driven workflows — with clarity on where human oversight belongs, which matters more as agentic AI takes on responsibility."],
    ["5 · New value creation", "Value creation becomes continuous rather than episodic. AI-first leaders measure dynamic outcomes — adoption, trust, growth, learning — enabled by adaptive, self-improving systems, and unlock entirely new products and business models, not just efficiency."],
  ]}},
  { h2: "4.4 Operating model AND business model" },
  { p: "The title’s two nouns matter. **Operating-model innovation** is *how the work gets done* (workflows, teams, decisions, tech). **Business-model innovation** is *how value is created and captured* (new products, new pricing, new markets the intelligence makes possible). The blueprint’s ambition is that AI-first firms don’t just get more efficient — they invent new forms of value. The illustrative case studies to name are **Indeed, Gamma and Cognizant**. If you can connect an operating-model change to a business-model consequence in your own experience, that is exactly the leap the report is arguing for." },
  { h2: "4.5 The agentic-AI horizon" },
  { p: "The blueprint explicitly looks ahead to **agentic AI** — systems that take actions across workflows, not just generate content. Its point: as agents take on more responsibility, success depends on **trust, clear human oversight, and responsible introduction.** This is the live frontier of the whole field (see §6), and it is where the applications question (Maria’s world) and the governance question (the Alliance’s world) meet. Being able to hold both — the value *and* the guardrails — is exactly the balanced judgement she will be listening for." },
  { callout: [
    "**The blueprint insight to land (a version of this):** “What I like about the AI-First framing is that it refuses to let leaders off the hook with a technology excuse. If only a quarter of that $250bn is transforming anything, the bottleneck is the operating model — and that’s an organisational-design problem, which is actually solvable. The five building blocks are really a redesign sequence, not a shopping list.”",
  ]},
  { pageBreak: true },
);

/* ============================ SECTION 5 ============================ */
push(
  { h1: "5 · Your Home Turf — AI × Energy and AI × Industry" },
  { lead: "This is the section where you stop being “adjacent.” Maria’s foundations are energy systems and advanced manufacturing. If those are your worlds too, this is not a bridge you have to build — it is common ground you already stand on. Make it visible." },
  { h2: "5.1 Why this is your advantage" },
  { p: "Most people who approach an AI centre come from software or policy. You (and Maria) come through the *industrial and energy* economy — the harder, more physical, more consequential end of AI adoption, where a model has to survive contact with a grid, a factory or a supply chain. That is rarer and, to her, more credible. The move is not to out-AI the AI experts; it is to be the person who understands where AI meets the real, constrained, capital-intensive economy — because that is precisely where MINDS and the AI-First blueprint most need to prove themselves, and where showcase-friendly software wins run out." },
  { h2: "5.2 AI × Energy — the two-way street (know both directions)" },
  { p: "Maria co-authored **“AI’s energy dilemma: Challenges, opportunities, and a path forward”** (WEF, Jan 2025). The dilemma runs in both directions, and you should be able to speak to each:" },
  { b: [
    "**AI’s demand on energy.** Data centres consumed roughly **415 TWh globally in 2024**, projected to **more than double to ~945 TWh by 2030** — from about 1% of global electricity in 2022 toward 3%+ by 2030. AI-related electricity use may grow up to **50% a year** through 2030. In Ireland, data centres already take **>22%** of national electricity, heading for ~30%. This is now a first-order constraint on AI itself.",
    "**AI’s gift to energy.** In the other direction, AI is already cutting energy use by **up to 60%** in some deployments — optimising energy storage, battery efficiency and smart-grid management. The prize is a **“net-positive”** trajectory: AI enabling more energy savings across the economy than its own compute consumes.",
    "**The path forward** the article frames: regulation, financial incentives, technological innovation and market development — the classic multi-lever, multistakeholder answer the Forum specialises in.",
  ]},
  { callout: [
    "**The energy point that lands with her specifically:** “The AI-energy story is usually told as a threat — data-centre demand. The more useful framing is a systems one: AI is simultaneously the biggest new load *and* one of the best tools for grid and efficiency optimisation. Whether it nets positive is an operating-model and market-design question, not a technology one.” This mirrors both her energy roots and the AI-First thesis in a single move.",
  ]},
  { h2: "5.3 AI × Manufacturing and value chains" },
  { p: "Maria entered the Forum through the **Advanced Manufacturing and Value Chains** platform — the world of factories, industrial operations, supply chains and the Global Lighthouse Network. Industrial AI is where “operations redesign” (building block 3) is hardest and most valuable: predictive maintenance, quality inspection, supply-chain optimisation (the Fujitsu MINDS case is exactly this), digital twins, and now agentic systems on the factory and logistics floor. If you have manufacturing, supply-chain, operations or industrial-tech experience, this is a direct line to her formative work — and a domain where “AI that ships and moves a number” is concrete, not hypothetical." },
  { h2: "5.4 The synthesis to own" },
  { p: "Hold energy and industry together and you arrive at the position that is *distinctively yours*: **you understand AI adoption where the stakes are physical, capital-intensive and systemic — the real economy, not the demo.** That is the exact frontier where Maria’s two initiatives have the most to prove and the fewest natural experts. Do not claim to be an AI researcher. Claim to be the person who can make AI real in the parts of the economy that actually run the world — and let §7’s questions and §8’s proof points carry it." },
  { pageBreak: true },
);

/* ============================ SECTION 6 ============================ */
push(
  { h1: "6 · The Enterprise-AI Reality — Speak the Current Debate" },
  { lead: "To sound like a peer rather than a fan, you need command of the live debate about why enterprise AI mostly disappoints and what the leaders do differently. This is the conversational weather system you and Maria both operate inside." },
  { h2: "6.1 The adoption paradox" },
  { p: "The defining fact of enterprise AI in 2025–26 is the gap between investment and impact: enormous spend (>$250bn in 2025), modest transformation (~a quarter of firms report real impact). Independent research echoes it — most generative-AI pilots never reach production or measurable P&L effect. The consensus explanation, and Maria’s, is not that the models are inadequate; it is that **organisations bolt AI onto legacy processes instead of redesigning around it.** The bottleneck is organisational design, data foundations, and workflow — not model capability." },
  { h2: "6.2 The pilot-to-production chasm" },
  { p: "The reasons pilots stall are worth naming precisely, because they are the problems Maria’s work is trying to solve:" },
  { b: [
    "**No workflow redesign** — the model is added to a process built for humans, so it delivers a demo, not an outcome.",
    "**Weak data and integration foundations** — the intelligence engine has nothing reliable to connect into (building blocks 1–2).",
    "**No ownership or operating-model change** — nobody re-drew roles, incentives or decision rights (building block 3–4).",
    "**Vanity metrics** — success measured by launch and usage, not durable business outcomes (building block 5).",
    "**Trust and governance gaps** — especially as agents act with less human oversight; adoption stalls where trust is missing.",
  ]},
  { h2: "6.3 The agentic shift" },
  { p: "The frontier is moving from generative AI (produces content) to **agentic AI** (takes actions across systems). This raises the stakes on everything above: agents amplify value *and* risk, so the questions of oversight, trust and operating-model redesign get sharper, not softer. The Forum’s framing — rebuild the enterprise for the age of agentic AI, with human oversight designed in — is where the applications agenda and the responsibility agenda converge. Being fluent here signals you are looking at where the field is going, not just where it has been." },
  { h2: "6.4 How to use this in the room" },
  { p: "You do not need to lecture Maria on her own field. You need *two or three* precise observations you can deploy when the moment comes — enough to show you see the system clearly. The register: diagnostic and non-hype. “The interesting failure mode isn’t bad models, it’s good models in unchanged workflows” is the kind of line that tells her you belong in the conversation. Keep §6 as your reservoir; draw on it, don’t recite it." },
  { pageBreak: true },
);

module.exports = { blocks };
