// Part B, section 0: process, the answer architecture, your spine, evidence map.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "B0 · How to Use Part B" },
  { lead: "Every answer in this volume is fully scripted in your voice, so you can edit it directly. Each script opens with a twenty-second headline (the answer first, as a consultant panel expects), then the full answer. Placeholders in square brackets mark facts only you can supply or confirm." },

  { h2: "1. The two stages" },
  { table: { head: ["", "HR screen", "Panel"], widths: [1900, 3730, 3730], rows: [
    ["What it decides", "Whether you are a credible, motivated internal candidate worth the panel’s time.", "Whether you can build the workstream, work across the frontier-technology teams, and hold your own on substance."],
    ["What they listen for", "A clear reason to move within the Forum; understanding of the role’s scope; collaboration, integrity and impact.", "A point of view; a diagnosis of what the role must solve; realism about a short mandate; fluency on quantum; evidence you have built things."],
    ["Your advantage", "You already know how the Forum works: communities, co-design, knowledge products, senior convenings.", "You can talk about the Forum’s machinery from the inside, not from the website."],
    ["Your risk", "Being seen as moving away from your current team rather than towards this role.", "Being seen as a climate person moving sideways; staying abstract on technology."],
  ]}},

  { h2: "2. The answer architecture" },
  { p: "Your strongest past answers follow the same logic. This is the structure every motivation and ‘why you’ answer in this volume uses:" },
  { n: [
    "**Headline:** the whole answer in three clauses, said first.",
    "**The insight:** not what you did, but what it taught you, including one non-obvious mechanism.",
    "**The organisation’s next problem:** where the Forum’s work is today and what will be hard next, and why that matches your insight.",
    "**The context layer:** the ingredients that make it promising, and the constraint that makes it hard.",
    "**Why it matters:** a specific argument, not a general value statement.",
    "**What you would learn:** growth, stated concretely.",
    "**The close:** a callback to the headline, in three parts.",
  ]},
  { p: "Two style rules: no hedging (‘I think’, ‘sort of’, ‘a bit’, ‘really’), and signpost aloud (‘Three reasons.’ ‘The second layer is…’)." },

  { h2: "3. Your spine" },
  { p: "These are the ideas that recur across your answers. Knowing them cold lets you improvise under probing." },
  { table: { head: ["Element", "Your version"], widths: [2400, 6960], rows: [
    ["Thesis A", "Governance is a design variable of technology transformation, not a downstream constraint. The transformations that worked (China’s renewables build-out) sequenced the state’s role deliberately: incentives and de-risking first, standards next, then a hand-over to the market. Frontier technology today runs the other way: technology first, governance late and reactive."],
    ["Thesis C", "Regulatory design has become a competitive asset. Jurisdictions that design credible, early rules attract frontier industries (Switzerland and the UAE on crypto; the Gulf’s greenfield regimes). The risk is a race to the bottom; the opportunity is a race to quality."],
    ["The precedent: crypto", "The first frontier technology that forced regulators to innovate at speed: sandboxes, token taxonomies, bespoke regimes, then international standards. Also the cautionary tale: comprehensive rules arrived late and divergent, and arbitrage ended in failures like FTX."],
    ["The Forum’s next problem", "GRIP has built its thesis and core products around AI, health and finance. The next challenge is making it technology-specific and embedded: governance built into how the Forum’s frontier programmes are designed, without the Forum becoming a regulator. Quantum is the first test."],
    ["Why quantum matters", "Its upside is among the largest of any technology: simulating molecules and materials for new medicines, batteries, fertiliser catalysts and carbon capture. And, unusually, governance is ahead of the threat: the security transition has deadlines before the machine exists."],
    ["The close", "I learned how transformations are sequenced through the China work; how regulators innovate under pressure through crypto; and what makes a regime credible enough for others to buy into, at NEOM and inside the Forum. This role is where those three meet, starting with quantum."],
  ]}},

  { h2: "4. Evidence map (to avoid repeating yourself)" },
  { p: "Panels notice when the same story appears three times. Each piece of evidence has a primary home; use it elsewhere only in a sentence." },
  { table: { head: ["Evidence", "Primary use", "Secondary use"], widths: [3300, 3100, 2960], rows: [
    ["IEEP: China’s renewables transformation and the replication framework", "Why this role (thesis A)", "How you would codify a replicable model"],
    ["Fortior and Toco: blockchain and crypto-asset regulation (Switzerland, EU)", "What crypto taught regulators (P13)", "Why you (frontier technology precedent)"],
    ["FGS: design and sequencing of flagship platforms (GCF, SGI, FII)", "Building from concept (P21)", "Building a community; sequencing commitments"],
    ["NEOM: making a greenfield regime credible to foreign investors and companies", "The NEOM story (P22); thesis C", "Why regulators and companies need predictability"],
    ["HSF and UN Geneva: comparative regulation; implementation of agreements", "Divergence and interoperability", "Translating frameworks into practice"],
    ["Current Forum role: climate and healthcare-continuity workstream; business-leader community; senior briefings", "Why now, what you bring from inside (HR 2–4)", "Knowledge products that get used; convening"],
  ]}},
  { pageBreak: true },
);

module.exports = { blocks };
