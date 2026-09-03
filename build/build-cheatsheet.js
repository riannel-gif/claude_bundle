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
    "I work the policy and enabling-environment side of climate-resilient energy, utilities and health — the regulated, public-interest sectors where AI is genuinely hard to deploy. That’s where your MINDS proof and the AI-First pattern most need to hold, and where the bottleneck is as much policy and market design as technology. I’m not here as an AI specialist — I’m here because I know why AI scales or stalls in exactly the sectors you’re trying to transform.",
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
  { h3: "Your turf — energy, utilities, health (policy lens)" },
  { b: [
    "**Why policy is your edge:** her showcase wins are easy in software, hard in regulated/public-interest sectors — where procurement, standards, trust and market design gate adoption. That’s your domain. It *extends* her AI-First thesis (‘adoption gap = systems-design failure’) into the terrain where it bites.",
    "**AI’s energy dilemma** (her Jan-2025 article): data centres ~**415→945 TWh by 2030** (1%→3%+); AI power up to **+50%/yr**; Ireland >22%→~30%. *And* AI cuts energy up to **−60%** + grid resilience, demand forecasting, DER, outage prediction. Goal: **net-positive AI.**",
    "**Health** = MINDS heartland (Saudi MoH foot-screening: −90% time, −80% cost). Gated by trust, validation, reimbursement — your levers.",
  ]},
  { h3: "Your best openers — offer a view, then ask (pick 5–6)" },
  { b: [
    "MINDS + AI-First are one loop (find proof → codify pattern) — where’s it hardest now, finding proof or getting the pattern adopted?",
    "From the policy side, adoption in regulated sectors stalls on the enabling environment as much as the tech — how much of MINDS is really about the conditions around the deployment?",
    "Your energy-dilemma piece resonated — in climate-resilient energy/utilities AI is load *and* resilience tool. Net positive this decade — technology, or market-design-and-policy?",
    "Utilities are a stress test for AI-First — regulated, safety-critical, slow. Are you seeing the operating-model redesign there, or mostly fast software firms?",
    "Health cases stay with me — trust and reimbursement decide if a model reaches a patient. Push MINDS deeper into public-interest sectors, or is the pull enterprise?",
    "If someone came at this from the policy / enabling-environment side (energy, utilities, health), where would they add most — and where earn their stripes?",
  ]},
  { h3: "The questions SHE’ll ask you" },
  { b: [
    "**“Tell me about yourself.”** → policy in energy/utilities/health → pattern (make tech adoptable where the enabling environment is the constraint) → why her work now. End on a hook.",
    "**“You’re policy, not AI — why add value?”** → in regulated sectors the model isn’t the bottleneck, the enabling environment is; that’s your home ground.",
    "**“What would you work on?”** → one specific, humble hypothesis: deepen MINDS/AI-First in energy/utilities/health, or the enabling-environment playbook for regulated sectors.",
    "**“What’s overhyped in AI?”** → better models don’t solve adoption; trust, procurement, validation and market design do. Judgement, not cynicism.",
  ]},
  { h3: "Power phrases — drop these verbatim" },
  { b: [
    "“In my sectors the model is rarely the bottleneck — the enabling environment is.”",
    "“MINDS quietly proves adoption is a systems-and-conditions problem, not a model problem — which is why the AI-First blueprint had to exist.”",
    "“The same AI that strains the grid is our best tool for grid resilience — whether it nets positive is a market-design and policy question.”",
    "“In regulated sectors what actually transfers isn’t the model — it’s the policy and procurement scaffolding around it.”",
    "“The hype skips the boring, decisive middle — trust and procurement — which is where adoption is actually won or lost.”",
  ]},
  { h3: "Do / Don’t in the room" },
  { b: [
    "**Do:** offer a view then ask (never quiz) · bring one artefact of thought from energy/utilities/health · name an honest tension in her model · mirror her language (proof over promise, operating model, deployment, responsible, systems).",
    "**Don’t:** buzzword bingo · apologise for being ‘just policy’ (it’s your edge) · ask her to explain the Forum · turn it into a job ask too early. Make the one ask late and light, then follow up in 48 hours.",
  ]},
  { h3: "Last-minute confidence check" },
  { callout: [
    "Can I (1) say my one-breath policy pitch; (2) name Maria’s two initiatives and the link between them; (3) spell out MINDS and its 3 criteria; (4) list the 5 building blocks; (5) quote the $250bn/25% gap and one MINDS proof point; (6) speak both sides of AI’s energy dilemma; (7) open 5 questions with a view-then-ask, and answer her four back? If yes to all seven, I’m ready.",
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
