const fs = require("fs");
const L = require("../lib.js");
const { Document, Packer, BODY, build, footer } = L;

const PAGE = { size: { width: 12240, height: 15840 }, margin: { top: 760, bottom: 640, left: 900, right: 900 } };
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "Cheat Sheet · GRIP Frontier Technology Policy Lead" },
  { h3: "The role" },
  { b: [
    "**Five verbs:** connect (GRIP and the frontier-technology teams), integrate (governance questions into programmes early), convene (regulators, companies incl. CLOs/CCOs, academia, civil society), translate (technology into practical governance insight), codify (a reusable method).",
    "**Not:** writing regulation; designing or running sandboxes; building GRIP’s Readiness Index or flagship paper; being the technical expert.",
    "**Why quantum first:** PQC deadlines (2030/2035); precedent of the Forum–FCA paper (2024); fragmentation across jurisdictions; existing Forum body of work; Abu Dhabi C4IR centre focus.",
    "**Your three messages:** technology, policy and law; platforms from concept to delivery (GCF, SGI, FII); sequencing and replication (IEEP, China renewables).",
  ]},
  { h3: "Quantum essentials" },
  { b: [
    "**Physics:** superposition (amplitudes), measurement (one classical result), interference (the real source of advantage), entanglement, decoherence. n qubits = 2ⁿ amplitudes.",
    "**Algorithms:** Shor (1994) breaks RSA/ECC; Grover (1996) only halves symmetric strength (use AES-256); simulation of chemistry/materials is the likeliest early value; optimisation claims unproven.",
    "**Error correction:** logical qubits from many physical; threshold theorem (~1% for surface code). Willow below threshold (Dec 2024); Quantinuum Helios 48 error-corrected logical qubits (Nov 2025); IBM Starling 200 logical by 2029, Blue Jay 2,000 by 2033.",
    "**Threat:** harvest now, decrypt later; CRQC / Q-Day; Gidney 2025: RSA-2048 with <1M noisy qubits in <1 week (vs ~20M in 2019). **Mosca:** X (data life) + Y (migration time) > Z (time to CRQC) = already late.",
    "**PQC:** NIST FIPS 203 ML-KEM, 204 ML-DSA, 205 SLH-DSA (Aug 2024); FN-DSA coming; HQC backup (Mar 2025). Crypto-agility; hybrid (ANSSI/BSI yes, NSA not required).",
    "**Deadlines:** US: NIST deprecate 2030 / disallow 2035; CNSA 2.0. EU: start by end-2026, high-risk by 2030, rest by 2035 (June 2025 roadmap). UK NCSC: 2028 / 2031 / 2035.",
    "**QKD vs PQC:** PQC is the backbone (NSA, NCSC, ANSSI); QKD niche; China and EU invest in QKD.",
    "**Economy:** ~$12.6bn invested in 2025; QC revenue >$1bn (McKinsey 2026); >$39bn public funding (Forum 2024); EU Quantum Europe Strategy (July 2025), Quantum Act expected 2026.",
    "**Forum body of work:** Governance Principles (2022, 9 themes, 7 values); Readiness Toolkit (2023, Deloitte, 5 principles); Quantum Security for the Financial Sector (2024, UK FCA); Quantum Economy Blueprint (2024, piloted in KSA); manufacturing and supply chains (2025, Accenture).",
    "**Issue map gaps:** coherence beyond finance and across jurisdictions; claims integrity; quantum sensing (no framework); quantum divide; talent and supply chain.",
  ]},
  { h3: "Autonomous mobility and robotics" },
  { b: [
    "Sense–plan–act; perception, localisation, prediction, planning, control. SAE 0–5; ODD; the long tail. Modular vs end-to-end.",
    "Waymo ~500k paid rides/week (early 2026); Apollo Go >250k weekly driverless rides; WeRide driverless in Dubai (2026). UK AV Act 2024 + pilots 2026; UNECE ADS regulation (Jan 2026, safety case); NHTSA first commercial robotaxi exemption (Zoox, July 2026).",
    "Humanoids: China 2025 mass-production year (140+ makers); China standard system (Feb 2026); no framework for shared spaces. Standards: ISO 26262, 21448 (SOTIF), UL 4600, ISO 10218 (2025), ISO/TS 15066.",
    "Forum: AV Timeline and Roadmap (2025); From Regulatory Diversity to Shared Learning (2026). Rwanda drones (2018) = Forum co-design, government adoption.",
  ]},
  { h3: "Biotechnology" },
  { b: [
    "DNA→RNA→protein; read (sequencing), write (synthesis), edit (CRISPR, base, prime). Somatic vs germline. Casgevy (2023).",
    "Product (US, 1986 Coordinated Framework) vs process (EU GMO rules). EU NGT deal (Dec 2025); EU Biotech Act proposal (Dec 2025); NSCEB report (Apr 2025).",
    "AI-bio chain: model safeguards → synthesis screening → customer verification → international. BWC has no verification.",
    "Forum: Bioeconomy Initiative; Policy Maturity Index (~1,000 instruments, 7 geographies). Bioeconomy $4–5tn.",
  ]},
  { h3: "Governance essentials" },
  { b: [
    "Pacing problem (Marchant); Collingridge dilemma; three clocks (technology, regulation, society); RRI (anticipation, inclusion, reflexivity, responsiveness).",
    "Five agile principles (Deloitte 2018; WEF toolkit 2020). Soft law → hard law. Interoperability, not uniformity.",
    "Forum instruments: principles, readiness toolkits, regulator-facing papers, national blueprints via C4IR, cross-jurisdiction synthesis, incubated ratings (SSR → EPFL), communities.",
    "Precedents: Montreal Protocol (phase-out + substitutes + support) ≈ PQC; aviation incident learning ≈ AVs; Basel Committee (soft-law regulator network); Asilomar (self-governance); GMOs (trust backlash).",
  ]},
  { h3: "Case structure (Phase 4 standard)" },
  { b: [
    "Governing principles → phased framework (foundations, proof of value, institutionalisation) → six-dimension matrix → dependency map (why binding) → transition logic (trigger, steady-state owner) → feedback architecture (conditions, sequencing, failures, replication brief).",
    "Realism: 6–8 months of tenure. One collaboration completed, a second under way, a method documented. Davos 2027 as a convening moment, not a launch.",
  ]},
);

const doc = new Document({
  creator: "Interview Preparation",
  title: "GRIP Frontier Technology Policy Lead — Cheat Sheet",
  numbering: L.numberingConfig(),
  styles: { default: { document: { run: { font: "Georgia", size: 19, color: BODY } } } },
  sections: [{ properties: { page: PAGE }, footers: { default: footer("Cheat Sheet · GRIP Frontier Technology Policy Lead") }, children: build(blocks) }],
});
Packer.toBuffer(doc).then((buf) => {
  const out = process.argv[2] || "GRIP_Cheat_Sheet.docx";
  fs.writeFileSync(out, buf);
  console.log("wrote", out, (buf.length / 1024).toFixed(0) + "KB");
});
