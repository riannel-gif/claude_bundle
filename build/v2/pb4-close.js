// Part B, sections 4-5: questions to ask, final checklist.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "B4 · Questions to Ask" },
  { p: "You have already asked the Head of Digital Inclusion about the UAE partnership, key relationships and success metrics. Build on those answers rather than repeating them; reference them where natural (‘When I spoke with [Head], they mentioned…’)." },
  { h2: "For the panel" },
  { b: [
    "How did the decision to start with the quantum team come about, and what does the team hope to get from the collaboration?",
    "What is the intended scope of ‘planetary systems’ as a technology initiative?",
    "Where do you see the balance between depth with one team and coverage across all of them in the first months?",
    "Which regulators or governments are already closest to the frontier-technology teams’ work?",
    "What would make you say, in May 2027, that this workstream had been worth creating?",
  ]},
  { h2: "For HR" },
  { b: [
    "What will the panel format be, and who will be on it?",
    "What is the timeline to a decision, and how is an internal move typically coordinated with the current team?",
  ]},

  { h1: "B5 · Final Checklist" },
  { table: { head: ["Have ready", "Content"], widths: [2400, 6960], rows: [
    ["Your headline", "I have seen how transformations are sequenced (China), how regulators innovate under pressure (crypto), and what makes a regime credible (NEOM, the Forum). This role is where those meet, starting with quantum."],
    ["The Forum’s next problem", "Making GRIP’s thesis technology-specific and embedded in frontier programmes, without the Forum becoming a regulator. The hard part: earning the right to integrate."],
    ["The role in five verbs", "Connect, integrate, convene, translate, codify. Not: writing regulation, running sandboxes, GRIP’s index or paper."],
    ["Crypto facts", "FCA sandbox (2016); FINMA token taxonomy (2018); ADGM framework (2018); FATF standard (2019); Basel standard (2022); MiCA applicable end-2024; FTX (2022)."],
    ["Quantum facts", "NIST PQC standards (Aug 2024); deadlines 2030/2035 (US, EU, UK); Gidney 2025 (<1M qubits, <1 week); Willow below threshold (2024); Helios 48 logical qubits (2025); IBM Starling 2029; ~$12.6bn invested in 2025."],
    ["Quantum stakes", "Simulation for medicines, batteries, fertiliser catalysts, carbon capture; sensing for diagnostics and navigation. Transformative, later than the hype."],
    ["Frameworks", "Mosca’s theorem; governance questions by maturity stage; the six scoping questions; the case architecture (principles, phases, dependencies, transition, feedback)."],
    ["Realism", "Six to eight months of tenure: one collaboration completed, a second under way, a method documented."],
  ]}},
  { callout: [
    "**Delivery reminders.** Headline first, every time. No hedging. Signpost (‘Three reasons.’). Use ‘I’ in stories. If interrupted, you should already have made your point.",
  ]},
);

module.exports = { blocks };
