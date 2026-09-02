const fs = require("fs");
const L = require("./lib.js");
const { docx, Document, Packer, Paragraph, TextRun, AlignmentType,
  INK, ACCENT, MUTE, BODY, build, footer } = L;

const PAGE = { size: { width: 12240, height: 15840 },
  margin: { top: 760, bottom: 640, left: 900, right: 900 } };

const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "Cheat Sheet — Frontier Tech & Regulatory Innovation" },
  { spacer: 20 },
  { h3: "The thesis (open or close with this)" },
  { callout: [
    "In the Intelligent Age, regulation is a strategic lever, not just a brake — its agility and quality shape a country’s competitiveness. My job is the connective tissue between where technology is going and how it gets governed: agile enough to keep pace, credible enough to adopt, practical enough to replicate across borders.",
  ]},
  { h3: "Five must-knows about the role" },
  { b: [
    "**GRIP** — Global Regulatory Innovation Platform; WEF + UAE, launched July 2025; 2-yr roadmap. Three deliverables: **Global Regulatory Playbook · Regulatory Future Readiness Index · Global Regulatory Innovation Hub** (sandbox). Initial focus: AI, health, digital finance.",
    "**Your role** — build a *new cross-cutting workstream* taking GRIP’s model upstream into frontier domains; report to Head of Digital Inclusion; partner CFTI, Cyber, AI Centres. Temp to May 2027, Geneva.",
    "**CFTI / C4IR** — Centre for Frontier Technologies; global network of government-hosted centres (US, Germany, KSA, Japan, India, + Abu Dhabi frontier-tech centre 2026). Your delivery + pilot vehicle.",
    "**The Forum has no rule-making power** — impact = convening, communities, knowledge products, initiatives. You build conditions for better rules, not the rules.",
    "**You are the translator, not the deepest scientist** — expert in the *craft* (regulatory innovation), fast and honest across the science.",
  ]},
  { h3: "The craft — say these precisely" },
  { b: [
    "**Pacing problem** (tech exponential, law incremental) · **Collingridge dilemma** (easy to shape early / hard to predict; hard to change late) · **precaution vs permissionless innovation**.",
    "**Five agile principles** (Deloitte, *Future of Regulation*, 2018; adopted into WEF practice)**:** adaptive · outcome-based · risk-based · collaborative · sandboxes. Plus experimental, data-driven, self/co-regulation, international cooperation.",
    "**Anticipatory governance = foresight → experimentation → learning.** Mechanisms: sandboxes, sunset clauses, mandatory review, RIA, living guidance.",
    "**Soft law** (standards, codes, principles) = the on-ramp to hard law, not the absence of it. **RegTech** (comply) vs **SupTech** (supervise).",
    "**Sandbox** = controlled, time-limited test with real users, relaxed rules + safeguards. UK FCA 2016; 50+ jurisdictions; EU AI Act mandates national sandboxes by 2026. Always pair with a **codification plan**.",
  ]},
  { h3: "Five domains — the one-line dilemma each" },
  { table: { head: ["Domain", "Core governance dilemma", "Anchor fact"], widths: [1900, 5300, 3160], rows: [
    ["AI / GPAI", "Regulate a general-purpose tech whose risks are emergent and unpredictable — model-level vs use-level.", "EU AI Act (risk tiers); GPAI + systemic-risk duties; GPAI Code of Practice 2025."],
    ["Quantum", "Govern a future, cryptographic risk now; dual-use, geopolitical supply chain.", "‘Harvest now, decrypt later’; NIST PQC standards 2024 (ML-KEM/ML-DSA/SLH-DSA)."],
    ["Biotech / synbio", "Capture benefits while preventing catastrophic dual-use misuse; capability outside reach.", "AI-bio convergence outpaces DNA-synthesis screening; BWC has no verification."],
    ["Robotics / AV", "Who’s liable when an autonomous, learning system harms — and how to certify it.", "UNECE ADS reg 2026 (safety case); EU Machinery + Product Liability; SAE 0–5."],
    ["Planetary systems", "Govern global commons (space; climate SRM) where national rules don’t reach.", "Outer Space Treaty 1967; SRM Non-Use Agreement / CBD moratorium."],
  ]}},
  { h3: "Three rulebooks + the Brussels effect" },
  { b: [
    "**EU** = rights + risk, precautionary, comprehensive (AI Act, GDPR). **US** = market-led, sectoral, light-touch (EOs, NIST). **China** = state-directed, vertical (algorithm/GenAI rules, CAC). **UK** = principles-based, pro-innovation, sector regulators.",
    "**Brussels effect** (Bradford): EU rules go global via market access — *real but weakening* as US/China pursue rival models. The prize isn’t harmonised law but **interoperability** (compatible in effect).",
    "**Fragmentation** raises cost, entrenches incumbents, enables forum-shopping. **Small yard, high fence** = targeted export controls.",
  ]},
  { pageBreak: true },
  { h3: "Reusable case frameworks" },
  { b: [
    "**Sandbox design — O-SEE-C:** Objective & success measures · Scope/eligibility · Exemptions · safEguards · Codification plan.",
    "**Divergence — interoperability ladder:** shared terminology → standards/metrics → mutual recognition → minimum baselines → (rarely) harmonised law. Aim as high as politics allows.",
    "**Crisis — C-TAP:** Convene fast · Target the true failure point · Absorb the responsible majority into the fix · Persist into durable rules. (Neither paralysis nor overreaction.)",
    "**Build from zero — 100 days:** Listen & map (1–30) → Focus & frame on 2–3 beachheads (31–60) → Prove with one convening + one product (61–100). Evidence before scale.",
    "**Prioritise domains:** gap severity · right to convene · partner readiness · replicability.",
  ]},
  { h3: "Measuring impact (avoid vanity metrics)" },
  { b: [
    "**Adoption** (did regulators take it up?) → **Outcome** (did a real decision change?) → **System** (did readiness/interoperability improve?). Define at design time; report honestly.",
  ]},
  { h3: "Power phrases — drop these verbatim" },
  { b: [
    "“When capability outruns evaluation science, you regulate the trajectory, not a snapshot.”",
    "“A sandbox without a codification plan is a press release — the point is the learning loop.”",
    "“Soft law isn’t the absence of regulation; it’s the on-ramp to it, and often the only thing fast enough.”",
    "“We don’t make the rules — we build the conditions in which better rules get made and adopted.”",
    "“In a matrix you don’t win by owning turf; you win by making everyone else’s work more usable.”",
    "“You don’t export rules — you export methods; the regulatory patterns rhyme even when the science doesn’t.”",
    "“Some frontiers aren’t a speed problem — they’re a legitimacy problem, and you don’t innovate around legitimacy.”",
    "“Inclusion is a design constraint, not a courtesy — rules built by the few fail on legitimacy and substance.”",
    "“I don’t bet on being right — I build instruments that let us be wrong safely and correct fast.”",
  ]},
  { h3: "Handling the two hardest challenges" },
  { b: [
    "**“Multistakeholderism = corporations writing their own rules.”** → Acknowledge it; it’s a *complement* to democracy/multilateralism, not a replacement; legitimacy earned via inclusion (Global South, civil society), transparency, and government adoption through accountable processes.",
    "**“The Forum can’t legislate, so what’s the point?”** → Convening is the comparative advantage precisely where formal authority is fragmented; the missing ingredient isn’t law, it’s trusted alignment before positions harden + adoptable instruments.",
  ]},
  { h3: "Reports to name" },
  { b: [
    "Agile Governance: Reimagining Policy-making in the 4IR · Agile Regulation for the 4IR — Toolkit for Regulators (2020) · Global Technology Governance Report (2021) · The Regulatory Frontier / GRIP (2025) · Global Risks Report · Future of Jobs Report.",
  ]},
  { h3: "Last-minute confidence check" },
  { callout: [
    "Can I (1) state the thesis; (2) name GRIP’s three deliverables; (3) give each domain’s dilemma in a sentence; (4) define a sandbox and its limits; (5) name the five agile principles; (6) run O-SEE-C, the interoperability ladder and my 100-day plan; (7) handle the multistakeholder-legitimacy challenge without getting defensive? If yes to all seven, I’m ready.",
  ]},
);

const doc = new Document({
  creator: "Interview Preparation",
  title: "GRIP Interview — Cheat Sheet",
  numbering: L.numberingConfig(),
  styles: { default: { document: { run: { font: "Georgia", size: 20, color: BODY } } } },
  sections: [{
    properties: { page: PAGE },
    footers: { default: footer("Cheat Sheet — Frontier Tech & Regulatory Innovation") },
    children: build(blocks),
  }],
});

Packer.toBuffer(doc).then((buf) => {
  const out = process.argv[2] || "GRIP_Cheat_Sheet.docx";
  fs.writeFileSync(out, buf);
  console.log("wrote", out, (buf.length / 1024).toFixed(0) + "KB");
});
