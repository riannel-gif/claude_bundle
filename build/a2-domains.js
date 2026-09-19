// PART A, Module 3-4: the frontier-technology domains (deep) + convergence.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "3 · The Frontier-Technology Domains" },
  { lead: "You will not be the deepest expert on any of these. You must hold, for each, a real technology primer, the state of the art, the key players, the single core governance dilemma, the regulatory landscape by jurisdiction, and the open questions — enough to reason intelligently under case pressure and to earn a technologist’s respect." },
  { p: "Apply the same seven-part scan to each domain so your knowledge is structured and recallable: **(1) what it is (the primer); (2) state of the art and scale; (3) key players; (4) the core governance dilemma; (5) the regulatory landscape; (6) standards and bodies; (7) open questions and the toolkit angle.** The dilemmas are the payload — lead with them in any case." },

  /* ---------------- 3.1 AI ---------------- */
  { h2: "3.1 Artificial Intelligence and Foundation Models" },
  { h3: "The primer" },
  { p: "Modern AI is dominated by **machine learning** — systems that learn patterns from data rather than following hand-coded rules — and specifically by **deep learning** using neural networks. The centre of gravity is the **foundation model** (or **general-purpose AI**, GPAI in EU terminology): a very large model, typically a **transformer**, pre-trained on broad data via self-supervision and then adaptable to many downstream tasks. **Large language models (LLMs)** are the best-known class. The current frontier is **agentic AI** — models that plan and take actions through tools, not just generate text — and **multimodal** models spanning text, image, audio and video. Key technical concepts an expert uses: **training vs. inference**, **compute** (measured in FLOPs), **fine-tuning**, **RAG** (retrieval-augmented generation), **RLHF** (reinforcement learning from human feedback), **evaluations/“evals”** and **red-teaming**, **hallucination**, and **alignment**." },
  { h3: "State of the art and scale" },
  { p: "Capability is advancing faster than the science of *evaluating* capability — the root of the governance problem. The AI market is the largest of the frontier domains (hundreds of billions of dollars and rising steeply), development is concentrated in a handful of US and Chinese labs, and **compute, data and capital** are the binding constraints, which is why *compute governance* has become a policy lever in its own right." },
  { h3: "Key players" },
  { p: "Frontier labs (OpenAI, Anthropic, Google DeepMind, Meta, xAI, Mistral; in China, DeepSeek, Alibaba, Zhipu), compute providers (NVIDIA, the hyperscalers), and on the governance side the **EU AI Office**, **NIST** (and its US AI Safety/■ Standards work), the **UK AI Security Institute**, the **OECD.AI** observatory, and the network of national **AI Safety/Security Institutes**." },
  { h3: "Core governance dilemma" },
  { p: "**How do you regulate a general-purpose technology whose risks are emergent, whose own developers cannot fully predict its capabilities, and whose development is concentrated in a few firms — without freezing innovation or licensing harm?** The recurring sub-tension: govern the **model** (at the foundation layer) or the **use** (at the application layer)." },
  { h3: "Regulatory landscape" },
  { b: [
    "**EU — the AI Act:** the first comprehensive horizontal AI law; in force since August 2024, phasing in — prohibited practices and AI-literacy duties (Feb 2025), **GPAI-model obligations (Aug 2025)**, most high-risk rules (Aug 2026), full application (2027). Risk-tiered (unacceptable/high/limited/minimal). GPAI models with **systemic risk** (a compute threshold of 10^25 FLOPs is the presumptive trigger) face extra duties — model evaluation, adversarial testing, serious-incident reporting to the AI Office, and cybersecurity — supported by a voluntary **GPAI Code of Practice (July 2025)**.",
    "**United States** — market-led and sectoral: executive action and agency guidance rather than a comprehensive statute, the **NIST AI Risk Management Framework** as the voluntary backbone, and a fast-growing patchwork of state laws (Colorado, California).",
    "**United Kingdom** — deliberately **principles-based and pro-innovation**, empowering existing sector regulators rather than passing one AI law, paired with the **AI Security Institute** (renamed from the AI Safety Institute in early 2025, a telling pivot toward security and criminal-misuse threats).",
    "**China** — vertical and targeted: measures on recommendation algorithms, deep synthesis and generative AI, with an **algorithm registry** and security/labelling requirements filed to the Cyberspace Administration of China (CAC).",
    "**International** — the OECD AI Principles, the **G7 Hiroshima Process** code of conduct, and the **Council of Europe Framework Convention on AI** (opened 2024, the first binding international AI treaty, rights-anchored and open beyond Europe).",
  ]},
  { h3: "Open questions and the toolkit angle" },
  { p: "Open: the immature science of frontier-model **evaluation**; liability across the AI value chain; **open-weight** models and the diffusion of capability; **compute governance**; the copyright/training-data fight; and agentic AI’s accountability gap. Toolkit angle: AI is the canonical case for **sandboxes, outcome-based rules and adaptive review** — the AI Act mandates national sandboxes, and the voluntary Code of Practice is a live example of the soft-law-to-hard-law pipeline." },

  /* ---------------- 3.2 Quantum ---------------- */
  { h2: "3.2 Quantum Technologies" },
  { h3: "The primer" },
  { p: "Three distinct strands, often confused: **quantum computing** (using superposition and entanglement of **qubits** to solve certain problems intractable for classical computers), **quantum communication** (notably **quantum key distribution, QKD**, for theoretically eavesdrop-evident encryption), and **quantum sensing** (ultra-precise measurement of time, gravity and magnetic fields). Today’s machines are **NISQ** — noisy intermediate-scale quantum — still limited by error rates; the field’s holy grail is **fault-tolerant, error-corrected** computing. The policy driver is not a working machine but the *anticipation* of one." },
  { h3: "State of the art and scale" },
  { p: "The quantum-computing market was roughly **$1.9 billion in 2025**, growing ~30% a year and expected to pass **$3 billion by 2028** (QED-C), with longer forecasts running to the tens of billions by the mid-2030s. Investment is heavily state-backed and geopolitically concentrated (US, China, EU, UK). The near-term consequence that matters most is cryptographic, not computational." },
  { h3: "Key players" },
  { p: "IBM, Google Quantum AI, Quantinuum, IonQ, PsiQuantum, and China’s state programmes; on the governance side, **NIST** (cryptographic standards), national quantum initiatives, and export-control authorities." },
  { h3: "Core governance dilemma" },
  { p: "**How do you govern a technology whose most consequential risk is future and cryptographic — the day a quantum computer breaks today’s public-key encryption — while its benefits are dual-use and its supply chain is a geopolitical battleground?** The signature threat is **“harvest now, decrypt later”**: adversaries stealing encrypted data today to decrypt once quantum-capable, which means data with a long secrecy life is *already* exposed." },
  { h3: "Regulatory landscape" },
  { b: [
    "**Post-quantum cryptography (PQC) standards** — the concrete governance action of the decade. NIST published the first finalised standards in August 2024: **FIPS 203 (ML-KEM / Kyber), 204 (ML-DSA / Dilithium), 205 (SLH-DSA / SPHINCS+)**, with further algorithms (HQC, and FN-DSA / Falcon) following.",
    "**Migration mandates** — US policy (NSM-10, OMB guidance, CNSA 2.0) requires federal agencies to inventory quantum-vulnerable systems and migrate to quantum-safe cryptography on timelines running to the early-2030s; the EU and UK have parallel roadmaps.",
    "**Export controls** — the US, France, the Netherlands, the UK, Spain and China have introduced or tightened controls on quantum hardware and know-how; quantum sits firmly inside the “small yard, high fence” tech-security agenda.",
    "**Standards and coordination** — largely via NIST, ISO/IEC and national strategies; there is **no comprehensive international quantum treaty**, which is itself the governance gap.",
  ]},
  { h3: "Open questions and the toolkit angle" },
  { p: "Open: the **quantum divide** (a few states and firms racing ahead); standard-setting as geopolitical contest; the workforce and migration cost; QKD vs PQC as the path to quantum-safe security; and dual-use export policy that does not strangle open science. Toolkit angle: quantum is a case for **anticipatory governance and foresight** above all — the PQC migration is a masterclass in acting *before* the risk materialises, and a natural, non-partisan convening agenda for a frontier-tech workstream." },

  /* ---------------- 3.3 Biotech ---------------- */
  { h2: "3.3 Biotechnology and Synthetic Biology" },
  { h3: "The primer" },
  { p: "The revolution rests on cheap, precise tools: **CRISPR-Cas** gene editing (and successors like base and prime editing), **synthetic biology** (engineering biology like software — designing and constructing new genetic parts and circuits), **AI-driven protein and sequence design** (e.g. structure prediction and generative design), and plummeting costs of **DNA synthesis and sequencing**. Together they compress what took years into weeks. Governance-critical concepts: **dual-use research of concern (DURC)**, **gain-of-function** research, **biosafety** (protecting people from accidental exposure) vs **biosecurity** (preventing deliberate misuse), and **DNA-synthesis screening**." },
  { h3: "State of the art and scale" },
  { p: "The synthetic-biology market was roughly **$25–27 billion in 2025**, growing ~20% a year toward the hundreds of billions by the mid-2030s. The defining new risk vector is the **AI-bio convergence**: generative design tools that can propose novel biological sequences are advancing faster than the screening systems meant to catch dangerous ones." },
  { h3: "Key players" },
  { p: "Firms across therapeutics, agriculture and industrial biology; DNA-synthesis providers and the **International Gene Synthesis Consortium (IGSC)**; and on governance the **Biological Weapons Convention (BWC)** regime, national biosafety authorities, WHO and UNESCO bioethics bodies, and the **Nuclear Threat Initiative (NTI) bio** programme (a key convener of screening norms)." },
  { h3: "Core governance dilemma" },
  { p: "**How do you capture biotech’s enormous benefits — new medicines, food security, climate solutions — while preventing catastrophic dual-use misuse, when the same knowledge and tools enable both and much of the capability sits outside traditional regulatory reach?** The sharpest current edge: **AI tools are outpacing the sequence-based biosecurity screening that DNA-synthesis providers rely on.**" },
  { h3: "Regulatory landscape" },
  { b: [
    "**Biosecurity / dual-use** — the **BWC** is the treaty backbone but famously **lacks a verification mechanism**; governance leans on national DURC policies and voluntary DNA-synthesis screening. Recent moves: a US executive order (2025) directing a biosafety/biosecurity refresh; proposed US legislation to tighten synthesis screening; the EU’s preparatory work on a **Biotech Act**; South Korea’s **Synthetic Biology Promotion Act (2025)**.",
    "**Biosafety / environment** — the **Cartagena Protocol** (living modified organisms) and **Nagoya Protocol** (access and benefit-sharing) sit under the Convention on Biological Diversity. Gene-editing product rules diverge sharply: the EU is **process-based** and strict (GMO framework), the US **product-based** and lighter.",
    "**Ethics** — human **germline** editing remains broadly off-limits after the 2018 He Jiankui affair; UNESCO and WHO run active bioethics and human-genome-editing governance processes.",
  ]},
  { h3: "Open questions and the toolkit angle" },
  { p: "Open: how to govern the AI-bio convergence; how to screen synthesis without stifling research; how to reach non-state and DIY-bio actors; and how to add verification to a treaty regime that lacks it. Toolkit angle: biotech needs **collaborative regulation and standards** (industry screening norms), **international cooperation** (a borderless risk), and honest recognition of the **limits of soft law** where the downside is catastrophic — the domain where you show you know when agility must yield to precaution." },

  /* ---------------- 3.4 Robotics / AV ---------------- */
  { h2: "3.4 Robotics and Autonomous Mobility" },
  { h3: "The primer" },
  { p: "Two converging fronts: **autonomous vehicles (AVs)** — self-driving cars, trucks and delivery robots, classified on the **SAE Levels 0–5** scale from no automation to full autonomy, built on a perception-planning-control stack of sensors (lidar, radar, cameras), sensor fusion and ML — and **general-purpose / humanoid robotics** and **embodied AI**, riding the AI wave. The unifying feature is **autonomous physical action in shared human spaces**, which makes safety and liability concrete rather than abstract. Governance concepts: the **safety case** (a structured, evidence-based argument that a system is acceptably safe), **type approval**, **operational design domain (ODD)**, and **product liability**." },
  { h3: "State of the art and scale" },
  { p: "The robotics market was roughly **$100–110 billion in 2025**, forecast to more than triple by the mid-2030s (~14% CAGR), with a fast-emerging humanoid segment. Robotaxis operate commercially in parts of the US and China; humanoid robots are moving from demos toward pilots." },
  { h3: "Key players" },
  { p: "Waymo, Cruise, Baidu Apollo, Tesla, Zoox in AVs; Boston Dynamics, Figure, Agility, Tesla Optimus, Unitree in humanoids; and on governance the **UNECE World Forum (WP.29)** and its automated-vehicle working party **GRVA**, the EU institutions, and standards bodies (ISO, SAE)." },
  { h3: "Core governance dilemma" },
  { p: "**When an autonomous system acts in the world and causes harm, who is responsible — manufacturer, software developer, operator, owner — and how do you certify the safety of a system that learns and changes after deployment?** Traditional product-safety and liability law assumes a fixed product and a human in control; autonomy breaks both assumptions." },
  { h3: "Regulatory landscape" },
  { b: [
    "**International vehicle rules** — UNECE WP.29 / GRVA set harmonised rules; a **UN regulation on Automated Driving Systems (adopted January 2026)** anchors approval in a **safety-case approach**. SAE Levels 0–5 are the universal shorthand.",
    "**EU** — a layered stack: the **AI Act** (safe/ethical AI design), the revised **Machinery Regulation (2023/1230, applying January 2027)** adding autonomy thresholds, lifetime cybersecurity and risk classification, and the revised **Product Liability Directive** extending strict liability to software and AI.",
    "**Liability innovation** — the hardest live question; approaches range from strict manufacturer liability to no-fault insurance pools. The EU **withdrew its separate AI Liability Directive in 2025**, leaving the updated product-liability regime to carry the load — a notable governance gap.",
    "**Humanoid / consumer robots** — largely ungoverned: as of late 2025 there is no comprehensive US, EU or international regime for personal humanoid robots; **ISO 25785-1 (2025)** is a first safety standard, but only for industrial bipedal robots.",
  ]},
  { h3: "Open questions and the toolkit angle" },
  { p: "Open: liability allocation; safety assurance for learning systems; certification of continuously updated software; labour displacement; and consumer-robot safety. Toolkit angle: mobility is the home turf of **sandboxes and pilots** (geofenced testbeds), **outcome-based safety cases**, and **standards** — and a vivid case for co-designing rules with cities and insurers, not only manufacturers." },

  /* ---------------- 3.5 Planetary Systems ---------------- */
  { h2: "3.5 Planetary Systems — Space and Climate Intervention" },
  { p: "“Planetary systems” spans two governance frontiers the Forum groups together: activity in **outer space** and deliberate intervention in **Earth’s climate system**. Both concern **global commons** where national regulation is structurally insufficient." },
  { h3: "Space — primer, scale and dilemma" },
  { p: "The space economy was roughly **$440–460 billion in 2025**, heading toward **~$850 billion by 2035**, driven by mega-constellations (thousands of satellites in low Earth orbit), cheaper launch, in-space services and resource ambitions. This commercialisation has outrun a treaty regime written for a state-only era. **Core dilemma: how do you govern a global commons filling with private actors — allocating orbits and spectrum, assigning collision and debris liability, and clarifying resource rights — when the foundational law predates the commercial space economy and there is no pathway to bind even agreed norms?**" },
  { b: [
    "**The framework** — the **Outer Space Treaty (1967)** plus four companion treaties (Rescue, **Liability 1972**, Registration, Moon); administered via **UNOOSA / COPUOS**. Core principles: space for the benefit of all, no national appropriation, state responsibility for national (including private) activity.",
    "**The gaps** — no binding regime for **space-traffic management**, active **debris removal**, mega-constellation coordination, or resource property rights; **Kessler-syndrome** collision cascades are the systemic risk. The **Artemis Accords** and national space-resource laws are filling the vacuum unilaterally; **COSPAR planetary-protection** guidelines govern contamination.",
  ]},
  { h3: "Climate intervention (geoengineering) — primer and dilemma" },
  { p: "Two families: **carbon dioxide removal (CDR)** — generally seen as necessary and more governable — and **solar radiation modification (SRM)**, e.g. stratospheric aerosol injection to reflect sunlight, which is cheap, fast, globally consequential and deeply contested. **Core dilemma: who gets to set the planet’s thermostat?** A single actor could deploy SRM with planet-wide effects, yet there is no legitimate global body to authorise, monitor or halt it — and SRM carries a **termination-shock** risk if started and then stopped abruptly." },
  { b: [
    "**State of governance** — a **Convention on Biological Diversity moratorium** on deployment (2010, reaffirmed since); a scientist-led **Non-Use Agreement** (580+ signatories) calling for a ban on outdoor experiments and deployment; an EU scientific-advisers recommendation (2024) for an EU-wide SRM moratorium; regional rejection (AMCEN, 2025); and research-governance initiatives (e.g. a UK research programme) on the other side of the argument.",
    "**The framing to hold** — the debate splits into “ungovernable and irreversible, so ban it” versus “it may be needed as a last resort, so govern the research transparently now.” Steelmanning *both* sides is exactly the balanced posture a Forum policy lead needs.",
  ]},
  { h3: "Regulatory-innovation angle (both)" },
  { p: "Planetary systems are the ultimate test of **international regulatory cooperation, soft law and anticipatory governance** — commons problems where multistakeholder convening (the Forum’s comparative advantage) may be the only viable path when treaties are gridlocked. They are also where you show intellectual honesty about the *limits* of agility: for planet-scale, irreversible risks, precaution and legitimacy outrank speed." },

  /* ---------------- 4 Convergence ---------------- */
  { h1: "4 · Convergence and the Next Frontier" },
  { p: "The most sophisticated point you can make is that the frontier is increasingly about **convergence**, not single technologies — and convergence is precisely what siloed, sector-by-sector regulation misses, which is the strategic case for a *cross-cutting* regulatory-innovation workstream." },
  { table: { head: ["Convergence", "What it enables", "Why it defeats siloed regulation"], widths: [2200, 4000, 3160], rows: [
    ["AI × biology", "Models that design proteins and genetic sequences; automated labs.", "Sits between the AI regulator and the bio regulator; neither owns it."],
    ["AI × quantum", "Quantum-accelerated ML; quantum-broken cryptography.", "Spans compute policy, cryptography standards and export control at once."],
    ["AI × robotics", "Embodied intelligence; general-purpose physical agents.", "Merges software-AI rules with product-safety and liability regimes."],
    ["Digital × everything", "Cyber risk as the connective tissue under all of it.", "A cross-cutting risk no single-technology regulator can contain."],
  ]}},
  { p: "Keep two adjacent domains in your back pocket as the next frontiers: **cybersecurity** (the connective risk under everything digital, and the reason the Centre for Cybersecurity is a natural partner) and **neurotechnology** (brain-computer interfaces and “neurorights,” an emerging governance area on which Chile has legislated and UNESCO has adopted a global recommendation). Naming convergence and neurotech signals that you see where governance is heading, not just where it is." },
  { pageBreak: true },
);

module.exports = { blocks };
