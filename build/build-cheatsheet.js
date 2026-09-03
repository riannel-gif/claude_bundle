const fs = require("fs");
const L = require("./lib.js");
const { docx, Document, Packer, Paragraph, TextRun, AlignmentType,
  INK, ACCENT, MUTE, BODY, build, footer } = L;

const PAGE = { size: { width: 12240, height: 15840 },
  margin: { top: 760, bottom: 640, left: 900, right: 900 } };

const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "Cheat Sheet — Conversation with Maria Basso (WEF)" },
  { spacer: 20 },
  { h3: "Your one-breath positioning (open or close with this)" },
  { callout: [
    "I come from [energy / manufacturing / industrial-tech], where I [built / scaled / ran] [X] — so I’ve spent my career where technology meets the real, physical economy. That’s exactly where AI most needs to prove itself and has the fewest natural translators. I’m not here to be another AI specialist; making AI work in energy and industry is a systems problem, and that’s the problem I know.",
  ]},
  { h3: "Who she is — five must-knows" },
  { b: [
    "**Maria Basso** — Head of AI Applications & Impact, **Centre for AI Excellence (CAIE)**, WEF. Owns applied, real-world AI *impact*.",
    "**Her roots:** MSc Mechanical Engineering & Innovation in **Energy Systems**; ex-UN, McKinsey, UC Berkeley; entered WEF via **Advanced Manufacturing & Value Chains**, then C4IR digital tech. An engineer and systems thinker, not a lab AI person.",
    "**Her two initiatives:** **MINDS** (finds AI that works) + **AI-First Operating System** (codifies why). Proof, then pattern.",
    "**She optimises for:** proof over promise · systems not point-solutions · responsible & inclusive · replicability · the real economy.",
    "**Her allergy:** AI hype and demo theatre. Her draw: measurable deployment and operating-model change.",
  ]},
  { h3: "MINDS — say these precisely" },
  { b: [
    "**MINDS = Meaningful, Intelligent, Novel, Deployable Solutions.** Spotlights AI past the pilot stage delivering measurable, responsible impact at scale.",
    "**Selection criteria:** innovation · impact · **replicability**, vetted by an independent **Impact Council**. Cohort 1 = 18 orgs / 23 countries (New Champions 2025, Hangzhou); later cohorts wider — *verify current figures*.",
    "**‘Proof over Promise’** (with Accenture): winners integrate AI into **core strategy**, not a side lab; the adoption divide is organisational, not technological.",
    "**Proof points to quote:** Saudi MoH diabetic-foot AI (−90% clinician time, −80% cost); Fujitsu supply-chain AI (−$15m inventory, −$20m excess stock).",
  ]},
  { h3: "AI-First Operating System — the five blocks" },
  { table: { head: ["Block", "In one line"], widths: [3000, 7360], rows: [
    ["1 · Intelligence engines", "Self-reinforcing data flywheels — speed, scale, scope."],
    ["2 · Adaptive tech stack", "Modular; plugs in, evolves as models/vendors change."],
    ["3 · Operations redesign", "Rebuild workflows around intelligence (the underestimated one)."],
    ["4 · Human-AI teaming", "Intelligence as collaborator; human oversight designed in."],
    ["5 · New value creation", "Continuous value; new products & business models, not just efficiency."],
  ]}},
  { b: [
    "**Thesis:** >$250bn invested in AI in 2025, only ~25% see transformative impact — a **systems-design failure, not a technology one.** AI-*enabled* (bolt-on) vs **AI-first** (redesigned around intelligence). **Treat intelligence like capital.** With Kearney; cases Indeed, Gamma, Cognizant.",
  ]},
  { pageBreak: true },
  { h3: "Your turf — AI × Energy and AI × Industry" },
  { b: [
    "**AI’s energy dilemma** (her Jan-2025 article): data centres ~**415→945 TWh by 2030** (1%→3%+ of electricity); AI power use up to **+50%/yr**; Ireland >22%→~30%. *And* AI cuts energy up to **−60%** (storage, grid). Goal: **net-positive AI.**",
    "**Industrial AI** = where operations redesign is hardest and most physical (her Advanced Manufacturing roots): predictive maintenance, quality, supply chain, digital twins, agentic ops.",
    "**Your synthesis:** you understand AI adoption where stakes are physical, capital-intensive, systemic — the real economy, not the demo.",
  ]},
  { h3: "Your best questions (pick 6–8)" },
  { b: [
    "Where does the evidence-to-pattern engine (MINDS → AI-First) go next — the gap you most want to close?",
    "Which of the five building blocks do firms most underestimate — my bet is operations redesign?",
    "Replicability is the hardest MINDS criterion when the constraint is data/capital, not the model — how do you pick what transfers?",
    "Does AI net positive for the energy system this decade — technology question or market-design question?",
    "Industrial AI vs software: does it register in MINDS the way flashy demos do — and should it?",
    "If you were bringing someone into this work, where’s the most value now — generating evidence, curating the ecosystem, or codifying patterns?",
  ]},
  { h3: "The questions SHE’ll ask you" },
  { b: [
    "**“Tell me about yourself.”** → real-economy throughline → pattern (deploy tech, move a number) → why her work now. End on a hook.",
    "**“You’re not from AI — why add value?”** → models aren’t the bottleneck, the operating model is; that’s an industrial-transformation problem = your home ground.",
    "**“What would you work on?”** → one specific, humble hypothesis tied to her portfolio; happy to be redirected.",
    "**“What’s overhyped in AI?”** → better models don’t solve adoption; workflow/data/operating-model redesign does. Judgement, not cynicism.",
  ]},
  { h3: "Power phrases — drop these verbatim" },
  { b: [
    "“The interesting failure mode isn’t bad models — it’s good models in unchanged workflows.”",
    "“MINDS quietly proves adoption is an operating-model problem, not a model problem — which is why the AI-First blueprint had to exist.”",
    "“I’ve always worked where the technology has to survive contact with reality — a grid, a factory, a supply chain.”",
    "“The AI-energy story is usually told as a threat; it’s really a systems question — biggest new load and one of the best optimisation tools at once.”",
    "“Intelligence as capital means the hard part is allocation — every function wants AI at once.”",
  ]},
  { h3: "Do / Don’t in the room" },
  { b: [
    "**Do:** bring one artefact of thought · name an honest tension in her model · mirror her language (proof over promise, operating model, deployment, systems).",
    "**Don’t:** buzzword bingo · ask her to explain the Forum · turn it into a job ask too early. Make the one explicit ask late and light, then follow up in 48 hours.",
  ]},
  { h3: "Last-minute confidence check" },
  { callout: [
    "Can I (1) say my one-breath pitch; (2) name Maria’s two initiatives and the link between them; (3) spell out MINDS and its 3 criteria; (4) list the 5 building blocks; (5) quote the $250bn/25% gap and one MINDS proof point; (6) speak both sides of AI’s energy dilemma; (7) ask 6 sharp questions and answer her four back? If yes to all seven, I’m ready.",
  ]},
);

const doc = new Document({
  creator: "Conversation Preparation",
  title: "Maria Basso Conversation — Cheat Sheet",
  numbering: L.numberingConfig(),
  styles: { default: { document: { run: { font: "Georgia", size: 20, color: BODY } } } },
  sections: [{
    properties: { page: PAGE },
    footers: { default: footer("Cheat Sheet — Conversation with Maria Basso, WEF") },
    children: build(blocks),
  }],
});

Packer.toBuffer(doc).then((buf) => {
  const out = process.argv[2] || "Maria_Basso_Cheat_Sheet.docx";
  fs.writeFileSync(out, buf);
  console.log("wrote", out, (buf.length / 1024).toFixed(0) + "KB");
});
