// Part B, sections 4-6: behavioural preparation, questions to ask, final checklist.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "B4 · Behavioural Preparation" },
  { lead: "Former consultants often probe experience the way McKinsey’s Personal Experience Interview does: one story, explored in depth, with many follow-up questions. The stories below are mapped to the JD’s requirements. Prepare each in detail; do not add facts you cannot defend." },
  { h2: "1. What the probing looks like" },
  { p: "You tell one story in three or four minutes (situation, problem, what you did, result), then expect ten or more follow-ups: What exactly did you say? Who disagreed, and why? What options did you consider? What would you do differently? The test is whether you personally drove the outcome, and whether you can recall it precisely. Use ‘I’, not ‘we’." },
  { h2: "2. Your story bank" },
  { table: { head: ["Story (from your record)", "What it evidences", "JD requirement it answers"], widths: [3300, 3200, 2860], rows: [
    ["Advising on the design and sequencing of a flagship platform at FGS (e.g. the Global Cybersecurity Forum or the Saudi Green Initiative).", "Building from concept; sequencing commitments; working with very senior government leaders.", "Multistakeholder platforms; entrepreneurial build; senior relationships."],
    ["NEOM’s food and biotechnology programme within its bespoke regulatory environment.", "Translating frontier technology and regulation into propositions decision-makers act on.", "Frontier technology and governance; translation."],
    ["Leading your current climate and healthcare-continuity workstream.", "Setting a research agenda; running a workstream end to end; producing a knowledge product.", "Leading a workstream; thought leadership."],
    ["Building the cross-sector community of business leaders on workforce heat resilience.", "Community building and sustaining engagement.", "Multistakeholder community."],
    ["The IEEP research on China’s renewable-energy transformation and the replication framework.", "Analytical rigour; sequencing and replication logic.", "Scalable, replicable model."],
    ["Comparative regulatory analysis at Herbert Smith Freehills, and implementation guidance at the UN in Geneva.", "Regulatory expertise across jurisdictions; turning agreements into practice.", "Regulation and law; international organisations."],
    ["A setback: a project, convening or piece of advice that did not land.", "Honesty and learning.", "Resilience; judgement."],
  ]}},
  { callout: [
    "**Two checks before the interview.** For every story, be ready to state precisely what you did (not the team), and one concrete result. And make sure every claim matches your CV wording exactly, particularly on NEOM’s regulatory regime and the carbon-credit work: the probing is designed to find the seams.",
  ]},

  { h1: "B5 · Questions to Ask" },
  { p: "You have already asked the Head of Digital Inclusion about the UAE partnership, key relationships and success metrics; build on those answers rather than repeating them." },
  { h2: "For the panel" },
  { b: [
    "How did the decision to start with the quantum team come about, and what does the team hope to get from the collaboration?",
    "What is the intended scope of ‘planetary systems’ as a technology initiative?",
    "How do you see the balance between depth with one team and coverage across all of them in the first months?",
    "Which regulators or governments are already closest to the frontier-technology teams’ work?",
    "What would make you say, in May 2027, that this workstream had been worth creating?",
    "How does this work connect to the Centres for AI Excellence and Cybersecurity day to day?",
  ]},
  { h2: "For HR" },
  { b: [
    "Who will be on the panel, and what format should I expect?",
    "What is the timeline to a decision, and the intended start date?",
    "How does the Forum typically handle continuity for people in temporary roles when the work is going well?",
  ]},

  { h1: "B6 · Final Checklist" },
  { table: { head: ["Have ready", "Content"], widths: [2400, 6960], rows: [
    ["The role in five verbs", "Connect, integrate, convene, translate, codify. Not: writing regulation, running sandboxes, building GRIP’s index or paper."],
    ["Your three messages", "Technology, policy and law; platforms from concept to delivery; sequencing and replication."],
    ["Why quantum first", "Hard deadlines (2030/2035); the FCA precedent (2024); fragmentation across jurisdictions; existing Forum body of work; Abu Dhabi centre focus."],
    ["Five quantum facts", "NIST PQC standards (Aug 2024); Gidney 2025 (<1M qubits, <1 week); Willow below threshold (2024) and Helios 48 logical qubits (2025); IBM Starling 200 logical qubits by 2029; McKinsey 2026: ~$12.6bn invested in 2025."],
    ["Two frameworks", "Mosca’s theorem (X + Y > Z); governance questions by maturity stage."],
    ["The case structure", "Governing principles, phased framework, dependencies, transition logic, feedback architecture."],
    ["Realism", "Six to eight months of tenure: one collaboration completed, a second under way, a method documented."],
  ]}},
);

module.exports = { blocks };
