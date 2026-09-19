// PART A, appendices: instruments compendium, domain reference mini-cases,
// cyber + neurotech deep-dives, who's-who, and a data/timeline appendix.
const blocks = [];
const push = (...b) => blocks.push(...b);

/* -------- Appendix A: instruments compendium -------- */
push(
  { h1: "Appendix A · The Regulatory-Innovation Instruments Compendium" },
  { lead: "A working catalogue of the instruments in the toolkit, beyond the headline five. Being able to reach for the right one — and say why — is the practitioner signal." },
  { table: { head: ["Instrument", "What it is", "Best when"], widths: [2350, 4200, 2810], rows: [
    ["Regulatory sandbox", "Time-limited live testing with relaxed rules and supervision.", "High uncertainty; need real-world evidence."],
    ["Innovation hub / advice", "A ‘front door’ where innovators get informal regulatory guidance.", "Lower-intensity than a sandbox; early-stage."],
    ["Testbed / living lab", "A physical or virtual environment to trial technology at scale.", "Hardware, mobility, infrastructure."],
    ["Pilot / policy prototyping", "A bounded real-world trial of a rule itself.", "Testing a regulation before committing."],
    ["Waivers / no-action letters", "Regulator forbears from enforcement for a defined activity.", "Removing a specific legal blocker fast."],
    ["Outcome-based rules", "Specify the goal, not the method.", "Fast-moving tech that would date a prescriptive rule."],
    ["Risk-tiering / taxonomy", "Classify by risk and regulate proportionately.", "Uneven risk across use-cases."],
    ["Standards (de jure/de facto)", "Technical norms via ISO/IEC/IEEE or the market.", "Cross-border technical alignment; giving soft law teeth."],
    ["Codes of practice", "Structured voluntary commitments, often regulator-blessed.", "Building consensus ahead of binding law."],
    ["Certification / conformity assessment", "Third-party attestation against a standard.", "Assuring safety of a product before market."],
    ["Licensing / authorisation", "Permission to operate, sometimes staged.", "High-hazard activities; gatekeeping."],
    ["Disclosure / transparency duties", "Mandated information (labels, model cards, registries).", "Information asymmetries; limited-risk tech."],
    ["Liability regimes / insurance pools", "Allocate who pays when harm occurs.", "Autonomous systems; novel-harm technologies."],
    ["Sunset clauses / mandatory review", "Rules expire or must be re-appraised.", "Building adaptivity into any regime."],
    ["Moratoria / bans", "Prohibit an activity, temporarily or permanently.", "Catastrophic, irreversible risk (e.g. SRM, germline)."],
    ["RegTech / SupTech", "Automated compliance and supervision; machine-readable rules.", "Scale supervision; continuous oversight."],
    ["International cooperation / mutual recognition", "Align or recognise across borders.", "Borderless technologies; interoperability."],
    ["Regulatory foresight / horizon scanning", "Structured anticipation of what is coming.", "Feeding the whole adaptive cycle."],
  ]}},
  { pageBreak: true },
);

/* -------- Appendix B: domain reference mini-cases -------- */
push(
  { h1: "Appendix B · Domain Reference Mini-Cases" },
  { lead: "Five real governance interventions, each documented in the reference-case format — what was done, what made it work, what is transferable — so you can deploy a concrete example in any answer and model the replication logic your role is built on." },

  { h3: "B1 · AI — the EU AI Act as a governance experiment" },
  { p: "**What was done:** the EU built the first comprehensive, risk-tiered horizontal AI law, pairing binding obligations with a voluntary GPAI Code of Practice and mandated national sandboxes. **What made it work (so far):** a large single market that gives the rules global reach, a phased timeline that buys implementation time, and a standards backbone (CEN-CENELEC) supplying technical detail. **What is transferable:** the risk-tiering logic and the soft-law-to-hard-law sequencing. **What to watch / adapt:** classification gaming, standards delays, and the competitiveness backlash — a jurisdiction with less market power cannot rely on a Brussels effect and should lean harder on interoperability." },

  { h3: "B2 · Quantum — the post-quantum cryptography migration" },
  { p: "**What was done:** NIST ran a multi-year, open, international competition to standardise quantum-resistant cryptography, finalising the first standards in 2024, while governments mandated migration timelines. **What made it work:** a clear, bounded technical problem; an open process that built global trust; and a concrete deadline logic (‘harvest now, decrypt later’). **What is transferable:** anticipatory governance done well — acting years before the risk materialises, via a neutral standard-setter and a migration roadmap. **The convening lesson for you:** a technical, non-partisan agenda where a neutral platform can coordinate is the ideal beachhead for a new workstream." },

  { h3: "B3 · Biotechnology — DNA-synthesis screening norms" },
  { p: "**What was done:** industry (the International Gene Synthesis Consortium), with governments and NGOs, built voluntary screening of synthesis orders against known threat sequences. **What made it work:** a concentrated set of providers, shared reputational interest, and light-touch coordination. **What is failing now:** AI-designed novel sequences evade sequence-matching, so the safeguard is being outrun — the live governance frontier. **What is transferable:** collaborative regulation among a small provider set; **the caution:** where the downside is catastrophic, voluntary norms need a path to binding standards." },

  { h3: "B4 · Autonomous mobility — the UNECE safety-case approach" },
  { p: "**What was done:** UNECE’s GRVA moved vehicle approval from fixed, prescriptive type-approval toward a **safety-case** model — the manufacturer must argue, with evidence, that the system is acceptably safe within a defined operational design domain — culminating in the 2026 UN ADS regulation. **What made it work:** an existing international harmonisation forum (WP.29) and a shared safety vocabulary (SAE levels). **What is transferable:** outcome-based certification for systems that learn and change after deployment. **The gap:** liability allocation remains unresolved (the EU withdrew its AI Liability Directive)." },

  { h3: "B5 · Planetary systems — solar-geoengineering governance by moratorium" },
  { p: "**What was done:** in the absence of a treaty, governance has proceeded by soft instruments — a CBD deployment moratorium, a scientist-led Non-Use Agreement, and regional rejections — alongside a countervailing push to govern *research* transparently. **What made it work (as far as it has):** the legitimacy of scientific consensus and civil-society mobilisation. **What it exposes:** the limits of soft law for a planet-scale, single-actor-deployable, irreversible risk with no legitimate global authority. **The transferable judgement:** name when agility and voluntarism are the wrong tools, and precaution plus legitimacy must lead." },
  { pageBreak: true },
);

/* -------- Appendix C: cyber + neurotech -------- */
push(
  { h1: "Appendix C · Two Adjacent Domains to Master" },
  { h2: "C1 · Cybersecurity — the connective risk" },
  { p: "Cybersecurity is the risk that runs under every connected frontier technology, and the Centre for Cybersecurity is a named partner in your JD. The primer: the shift from perimeter defence to **zero-trust** architectures; **supply-chain** and software-bill-of-materials (SBOM) risk; **operational-technology (OT)** security as factories and infrastructure connect; and the coming **quantum threat** to cryptography. The governance landscape: the EU’s **NIS2 Directive** (raising cyber-resilience obligations across critical sectors), the **Cyber Resilience Act** (security-by-design duties for products with digital elements), the US **NIST Cybersecurity Framework** and sectoral rules, and, internationally, norms of responsible state behaviour in cyberspace under UN processes. The governance dilemma mirrors the others: mandatory baselines vs. innovation and cost, and attribution/accountability across a borderless attack surface. Toolkit angle: standards and certification, information-sharing, and machine-speed (SupTech-style) supervision." },
  { h2: "C2 · Neurotechnology — the next frontier" },
  { p: "Neurotechnology — brain-computer interfaces, neural sensing and neurostimulation — is the emerging domain most likely to be raised as a ‘where next’ question. The primer: invasive vs non-invasive interfaces; the sensitivity of **neural data** (arguably the most intimate personal data there is); and the concept of **neurorights** — mental privacy, cognitive liberty, agency and protection from bias. The governance landscape: **Chile** amended its constitution and passed neurorights legislation; **UNESCO** adopted a global **Recommendation on the Ethics of Neurotechnology (2025)**; the OECD issued neurotech recommendations; and several US states have moved to protect neural data. The dilemma: enabling therapeutic and cognitive benefits while pre-empting surveillance and manipulation of the brain itself — a textbook Collingridge case, and a natural candidate for the anticipatory-governance playbook." },
  { pageBreak: true },
);

/* -------- Appendix D: who's who -------- */
push(
  { h1: "Appendix D · Institutions and Names to Know" },
  { lead: "A quick-reference roster so you can drop the right institution or reference into an answer with confidence." },
  { table: { head: ["Category", "Names worth knowing"], widths: [2500, 6860], rows: [
    ["Regulatory-policy homes", "OECD (regulatory policy, IRC, AI Observatory, anticipatory governance); the World Bank / CGAP (sandbox research); the Datasphere Initiative (sandbox tracking)."],
    ["AI governance", "EU AI Office; NIST; UK AI Security Institute; the network of national AI Safety/Security Institutes; OECD.AI; the Council of Europe (AI Convention); the G7 Hiroshima Process."],
    ["Standards bodies", "ISO, IEC, IEEE, ITU, CEN-CENELEC (EU harmonised standards); NIST (cryptography, AI RMF)."],
    ["Quantum", "NIST (PQC standards); QED-C; national quantum initiatives (US, EU Flagship, UK, China)."],
    ["Biotechnology", "Biological Weapons Convention regime; International Gene Synthesis Consortium; WHO and UNESCO bioethics; the Nuclear Threat Initiative (NTI bio)."],
    ["Mobility & robotics", "UNECE WP.29 / GRVA; SAE International; ISO (robot safety standards)."],
    ["Space & climate", "UNOOSA / COPUOS; the Artemis Accords group; COSPAR (planetary protection); the CBD (geoengineering moratorium)."],
    ["Concepts & authors", "Anu Bradford (Brussels effect); Collingridge (dilemma of control); Gary Marchant (pacing problem); Deloitte / William Eggers (five principles of agile regulation)."],
  ]}},
  { pageBreak: true },
);

/* -------- Appendix E: data & timelines -------- */
push(
  { h1: "Appendix E · Figures, Markets and Timelines" },
  { lead: "A compact data layer for credibility. Use figures sparingly and directionally — the order of magnitude and trend matter more than the decimal." },
  { h3: "Market scale (2025, approximate; all growing double-digit)" },
  { table: { head: ["Domain", "≈ 2025 market", "Trajectory"], widths: [3000, 3000, 3360], rows: [
    ["Artificial intelligence", "Hundreds of $bn", "The largest and fastest-compounding; compute-constrained."],
    ["Robotics (all)", "~$100–110 bn", "→ ~$400 bn by mid-2030s (~14% CAGR); humanoid segment emerging."],
    ["Space economy", "~$440–460 bn", "→ ~$850 bn by 2035 (~7% CAGR); constellation-driven."],
    ["Synthetic biology", "~$25–27 bn", "~20%+ CAGR; AI-bio convergence accelerating."],
    ["Quantum computing", "~$1.9 bn", "→ $3 bn+ by 2028 (~30% CAGR); pre-fault-tolerant."],
  ]}},
  { h3: "Regulatory timeline — the dates to have ready" },
  { table: { head: ["When", "What"], widths: [1900, 7460], rows: [
    ["1967", "Outer Space Treaty enters into force."],
    ["2016", "UK FCA launches the first fintech regulatory sandbox."],
    ["2018", "Deloitte publishes the five principles of agile regulation; He Jiankui affair (human germline editing)."],
    ["2020", "WEF ‘Agile Regulation’ toolkit."],
    ["Aug 2024", "NIST finalises first PQC standards (FIPS 203/204/205); EU AI Act enters into force."],
    ["2024", "Council of Europe AI Convention opened; CBD geoengineering moratorium reaffirmed."],
    ["Feb 2025", "EU AI Act prohibited practices apply; UK renames AISI to AI Security Institute."],
    ["Jul 2025", "GRIP launched (WEF + UAE); EU GPAI Code of Practice published."],
    ["Aug 2025", "EU AI Act GPAI-model obligations apply."],
    ["Jan 2026", "UN regulation on Automated Driving Systems adopted (safety-case approach)."],
    ["Aug 2026", "EU AI Act high-risk rules apply; member-state AI sandboxes due."],
    ["Jan 2027", "EU Machinery Regulation (2023/1230) applies."],
    ["2027", "EU AI Act full application; GRIP roadmap horizon; this role’s end date (May 2027)."],
  ]}},
  { pageBreak: true },
);

module.exports = { blocks };
