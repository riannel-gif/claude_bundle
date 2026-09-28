// Part B, section 0: how the process works, positioning, and the JD-to-question map.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "B0 · The Interview Process and Your Positioning" },
  { lead: "Two stages are confirmed: an HR screening interview, then a panel interview with team members who have senior management-consulting backgrounds. This volume prepares you for both, working backwards from the JD to the questions each stage is most likely to ask." },
  { h2: "1. What each stage is testing" },
  { table: { head: ["", "HR screen", "Panel"], widths: [1900, 3730, 3730], rows: [
    ["Purpose", "Confirm you are a credible, motivated, well-fitting candidate worth the panel’s time; check logistics.", "Decide whether you can do the job: build the workstream, work across the frontier-technology teams, and hold your own on substance."],
    ["Typical format", "30–45 minutes by video. Competency-based questions on collaboration, working style, ethics and impact; motivation; CV walk-through; practical conditions.", "45–75 minutes. Motivation and fit; JD-based competency questions; ‘how would you approach…’ hypotheticals; technical probes, most likely on quantum."],
    ["What a strong answer looks like", "Clear, concise, specific examples; genuine knowledge of the Forum; comfort with a temporary, matrixed role.", "Answer first, then structure; grounded in the Forum’s actual work; explicit trade-offs; a concrete next step. Consultants will push for ‘so what?’ and ‘what would you do on Monday?’"],
    ["Main risk", "Sounding generic about the Forum, or misdescribing the role (e.g. as writing regulation).", "Staying abstract; over-claiming technical depth; proposing things the Forum does not do."],
  ]}},
  { h2: "2. The three messages to land in every interview" },
  { p: "Every answer should reinforce at least one of these. They are built from your actual record." },
  { n: [
    "**I work where technology, policy and law meet.** A trained lawyer who has done comparative regulatory analysis across jurisdictions (EU energy and renewables), implementation guidance on international agreements at the UN in Geneva, and positioning of frontier technologies inside a bespoke regulatory regime (NEOM’s food and biotechnology programme).",
    "**I build multistakeholder platforms from concept to delivery.** Advising senior government leaders on the design and sequencing of flagship platforms (the Global Cybersecurity Forum, the Saudi Green Initiative, the Future Investment Initiative), and today leading a workstream and building a cross-sector community of business leaders.",
    "**I think in sequencing and replication.** My early work reverse-engineered how China sequenced its renewable-energy transformation into a framework other countries could replicate. That is the same intellectual move as turning one collaboration with the quantum team into a model for every frontier-technology team.",
  ]},
  { callout: [
    "**The honest framing of your gap.** You are not a quantum physicist, a roboticist or a biologist, and the role does not need one. It needs someone who understands the technologies well enough to see the governance questions they raise, earns the trust of the technical teams, and connects them to regulators, companies and governments. Say this plainly; then show it with Part A-level knowledge.",
  ]},
  { h2: "3. From the JD to the questions" },
  { p: "Each responsibility and requirement in the JD generates a predictable question. The references point to where each is answered in this volume." },
  { table: { head: ["JD line", "What they will probe", "Where answered"], widths: [3300, 3700, 2360], rows: [
    ["Lead development and execution of a new cross-cutting workstream; define vision, priorities, roadmap", "Can you build from zero, prioritise, and plan to May 2027?", "Panel A1, A2, A5; Cases 1 and 2"],
    ["Primary liaison between GRIP and CFTI and industry teams", "Can you work in a matrix without authority, and add value to technical teams?", "HR 7; Panel A3; Case 2"],
    ["Integrate regulatory thinking early in technology development and programme design", "Do you know what this means in practice?", "Panel A4; Case 1"],
    ["Monitor global regulatory and technology trends", "Do you have a system, not just curiosity?", "Panel B3"],
    ["Develop thought leadership, frameworks, reports, playbooks; translate technology into practical governance insight", "Can you produce outputs that governments and industry actually use?", "Panel B1, B2, B4"],
    ["Build a multistakeholder community; manage senior relationships; run working groups and high-level dialogues", "Who would you convene, and how would you make a dialogue produce an outcome?", "HR 9; Panel C1–C3"],
    ["Synergies with CLO and CCO communities and C4IR centres", "Do you understand what these communities need?", "Panel C2, C4"],
    ["Strong understanding of frontier technologies and their governance implications", "Is your knowledge real, especially on quantum?", "Panel D1–D6"],
    ["Track record managing complex multistakeholder projects; entrepreneurial, concept to implementation", "Evidence from your past.", "HR 1, 7, 8; Panel E2, E3; B4 stories"],
    ["Cross-cultural work with senior public and private leaders", "Evidence, and judgement in sensitive settings.", "HR 9, 10; Panel F2, F3"],
    ["Project management and attention to detail", "Can you run the machinery, not just the ideas?", "HR 11"],
  ]}},
  { pageBreak: true },
);

module.exports = { blocks };
