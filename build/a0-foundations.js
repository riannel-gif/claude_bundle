// PART A, Module 2: Foundational Concepts (the base layer).
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "2 · Foundational Concepts" },
  { lead: "Part I — the base layer. Before the instruments (Section 3) and the domains (Section 4), you need a firm grip on three things: what a frontier technology actually is, how technologies emerge and scale, and what “regulation” and “governance” really mean. Master this vocabulary and everything downstream clicks into place — and you will never be caught out by a definitional question." },

  { h2: "2.1 What is a frontier technology?" },
  { p: "The terms are used loosely; use them precisely and you sound like an insider. The family of related ideas:" },
  { b: [
    "**Emerging technology** — a technology still developing and not yet widely adopted, whose eventual impact is uncertain. Broad, catch-all term.",
    "**Frontier technology** — the leading edge of emerging technology: the most advanced, highest-potential, highest-uncertainty technologies (WIPO and UNCTAD use the term for AI, biotech, quantum, robotics, blockchain, and related fields). This is the Forum’s and your JD’s word.",
    "**General-purpose technology (GPT)** — a technology that, like the steam engine, electricity or the computer, is pervasive, improves over time, and spawns complementary innovations across the whole economy. AI is the canonical current GPT — which is exactly why it is so hard to regulate: a horizontal technology resists sector-by-sector rules.",
    "**Deep tech** — technologies built on substantial scientific or engineering advances (quantum, synthetic biology, fusion), as opposed to purely digital or business-model innovation. Long timelines, high capital, high risk.",
    "**Fourth Industrial Revolution (4IR)** — the Forum’s framing (Klaus Schwab) for the current wave fusing the physical, digital and biological worlds. The C4IR network takes its name from it.",
    "**Dual-use technology** — a technology with both beneficial civilian and harmful (often military or weapons) applications. Central to quantum, biotech and AI governance.",
    "**Exponential technology** — one whose capability or cost-performance improves at a compounding rate (the intuition behind Moore’s Law), which is the source of the pacing problem.",
  ]},
  { callout: [
    "**The distinction to keep straight:** *emerging* is the broad set; *frontier* is its leading edge; *general-purpose* describes how horizontally a technology spreads; *deep tech* describes how science-heavy it is; *dual-use* describes its risk profile. A single technology (say AI) can be all of these at once.",
  ]},

  { h2: "2.2 How technologies emerge, scale and diffuse" },
  { p: "Governance has to meet a technology at the right point in its life. The models to know:" },
  { b: [
    "**The innovation pipeline:** *invention* (a new device or method) → *innovation* (its first commercial use) → *diffusion* (its spread through the economy). Regulators usually arrive at diffusion, long after the shaping window has closed — the Collingridge trap.",
    "**The S-curve of adoption:** technologies spread slowly at first, then accelerate through a steep growth phase, then plateau at saturation. Where a technology sits on its S-curve should determine the regulatory instrument — foresight and sandboxes early, standards and hard rules as it steepens.",
    "**Technology Readiness Levels (TRL 1–9):** a NASA-origin scale from basic principles (1) to a proven system in operation (9), now standard in R&D and procurement. Useful shorthand for “how mature is this really?”",
    "**The Gartner hype cycle:** innovation trigger → peak of inflated expectations → trough of disillusionment → slope of enlightenment → plateau of productivity. A caution against regulating (or dismissing) a technology at its hype peak.",
    "**Diffusion of innovations (Rogers):** adoption spreads through innovators → early adopters → early majority → late majority → laggards, gated by a “chasm” between enthusiasts and the mainstream. Governance and public trust are often what bridge that chasm.",
    "**The productivity J-curve:** general-purpose technologies often *depress* measured productivity for years while the economy re-tools around them, before delivering gains — which is why their societal impact (and the case for governing them well) is chronically underestimated early.",
  ]},

  { h2: "2.3 Why frontier technologies break traditional regulation" },
  { p: "Six structural features make frontier technologies uniquely hard to govern. Being able to reel these off is a strong opening structure for almost any governance case." },
  { table: { head: ["Feature", "Why it breaks regulation"], widths: [2500, 6860], rows: [
    ["Pace", "The technology changes faster than the legislative cycle can respond (the pacing problem)."],
    ["Uncertainty", "Impacts are unknowable early and entrenched late (the Collingridge dilemma); rule-makers reason about a moving target."],
    ["Information asymmetry", "Developers understand the technology far better than regulators, who lack the technical capability to keep up."],
    ["Dual-use / general-purpose", "The same capability delivers benefit and harm, and spreads across every sector, defeating narrow, sectoral rules."],
    ["Borderlessness", "The technology ignores jurisdiction, but regulators are national — creating fragmentation and forum-shopping."],
    ["Concentration of power", "Capability (and data, compute, capital) concentrates in a few firms or states, raising questions of accountability and capture."],
  ]}},
  { p: "The constructive answer to all six is **responsible innovation** — the principle that innovation should be steered, through anticipation, inclusion, reflexivity and responsiveness, toward socially beneficial ends, rather than either banned or left entirely to the market. It is the value frame beneath GRIP’s “responsible innovation” language, and the ethical counterweight to pure permissionless innovation." },

  { h2: "2.4 What regulation and governance actually are" },
  { p: "A consultant panel will respect precise use of these terms; muddling them is a tell. The hierarchy of concepts:" },
  { b: [
    "**Policy** — a government’s stated intent and objectives. **Law** — binding rules enacted by a legislature (statutes/acts). **Regulation** — the more detailed, often technical rules made by agencies under delegated legal authority, plus their enforcement. **Governance** — the broadest term: the whole system of rules, norms, institutions and processes — public *and* private — through which collective decisions are made and behaviour is steered. Frontier-tech *governance* deliberately includes far more than law.",
    "**Standards** — technical specifications (ISO/IEC/IEEE), usually voluntary, that can be referenced by law to acquire force. **Norms** — shared expectations of appropriate behaviour, binding through reputation rather than sanction.",
    "**Hard law vs soft law** — binding, enforceable rules vs non-binding instruments (principles, codes, guidance, standards) that shape behaviour without formal sanction. The soft-law-to-hard-law pipeline (Section 3) is central to frontier governance.",
    "**Ex ante vs ex post** — governing *before* deployment (licensing, conformity assessment, bans) vs *after* harm (liability, enforcement, redress). Frontier tech pushes toward ex ante because ex post is too late for irreversible harm.",
  ]},
  { h3: "The families of regulatory approach" },
  { table: { head: ["Approach", "What it does", "Trade-off"], widths: [2350, 4050, 2960], rows: [
    ["Command-and-control", "Prescribes exactly what is required or forbidden.", "Certain and enforceable; rigid and quick to date."],
    ["Principles-based", "Sets high-level principles firms must meet.", "Flexible; less predictable, needs mature regulators."],
    ["Outcome-/performance-based", "Specifies the result, not the method.", "Innovation-friendly; outcomes must be measurable."],
    ["Risk-based", "Allocates effort by level of risk.", "Efficient; depends on good risk classification."],
    ["Self-/co-regulation", "Industry sets and/or enforces rules, alone or with the state.", "Fast and expert; risk of capture and weak teeth."],
    ["Management-based", "Requires firms to have internal processes (risk management, audits).", "Scales oversight; can become box-ticking."],
  ]}},
  { h3: "The regulatory lifecycle" },
  { p: "Any rule moves through a lifecycle you can name to structure a case: **agenda-setting** (a problem gets on the docket) → **design and appraisal** (options, and a Regulatory Impact Assessment of costs and benefits) → **adoption** (legislation or rule-making) → **implementation and enforcement** → **monitoring and ex-post review** (does it still work?). Agile regulation is, in essence, the attempt to make that lifecycle faster, more evidence-based, and genuinely iterative rather than one-and-done." },

  { h2: "2.5 The governance ecosystem — who the actors are" },
  { p: "Governance is produced by an ecosystem, not a single rule-maker. The foundational actor map (expanded operationally in Section 8):" },
  { table: { head: ["Actor", "Role"], widths: [2500, 6860], rows: [
    ["Legislatures", "Make primary law and set the mandate and objectives."],
    ["Regulators / agencies", "Make and enforce detailed rules under delegated authority; the operational core."],
    ["Standards bodies", "Set the technical specifications regulators reference (ISO, IEC, IEEE, ITU, CEN-CENELEC)."],
    ["Industry / operators", "Build and deploy the technology; often the source of self- and co-regulation."],
    ["Academia & research", "Generate evidence, foresight and independent expertise."],
    ["Civil society & the public", "Represent rights, safety and the public interest; a source of legitimacy."],
    ["International organisations", "Enable cooperation and interoperability (OECD, UN family, G7/G20)."],
    ["Courts", "Interpret and enforce, and — via liability — allocate responsibility when harm occurs."],
  ]}},
  { p: "**Multistakeholder governance** is the practice of bringing these actors together to co-produce rules — the Forum’s core method, and the reason your role is a *convening* role rather than a rule-making one (its theory, and its critique, are in Section 6)." },

  { h2: "2.6 The objectives and the central tension" },
  { p: "Strip technology governance to its core and it is the management of one central tension: **enabling beneficial innovation while protecting against its harms** — under uncertainty, across borders, and among concentrated power. Every objective a regulator juggles hangs off that tension: safety, fundamental rights, competition and consumer welfare, national security, competitiveness and growth, public trust, and sustainability. No regime maximises all of them; governance is the art of the trade-off, made explicit. GRIP’s distinctive move — treating regulation as a *strategic lever for competitiveness*, not only a shield against risk — is a deliberate re-weighting of that tension toward enabling, and (as Section 6 discusses) a values choice you should be able to both champion and interrogate." },
  { callout: [
    "**Foundational vocabulary — the fast recall list:** emerging vs frontier vs general-purpose vs deep tech vs dual-use · S-curve · TRL 1–9 · hype cycle · pacing problem · Collingridge dilemma · responsible innovation · law vs regulation vs governance vs standards vs norms · hard vs soft law · ex ante vs ex post · command-and-control vs principles- vs outcome- vs risk-based · self-/co-regulation · the regulatory lifecycle (agenda → design/RIA → adopt → enforce → review) · multistakeholder governance.",
  ]},
  { pageBreak: true },
);

module.exports = { blocks };
