// Part III, section 1: Quantum technologies (flagship deep-dive).
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "Part III · Key Technologies" },
  { lead: "Deep primers for the technologies you would work on. Quantum is treated in the most depth because it is the likely first collaboration; autonomous mobility and robotics, and biotechnology, follow at close to the same depth; space and AI are covered as context and convergence. Each section ends with the governance issue map for that technology." },

  { h2: "1. Quantum technologies" },
  { p: "‘Quantum technologies’ covers three distinct families that are often blurred together: **quantum computing** (processing information using quantum states), **quantum communication** (transmitting information securely using quantum states), and **quantum sensing** (measuring physical quantities with quantum-enhanced precision). A fourth topic, **post-quantum cryptography**, is not a quantum technology at all but the classical response to the threat quantum computing poses to today’s encryption. Keeping these four apart is the first mark of fluency." },

  /* 1.1 */
  { h3: "1.1 The physics you need, in plain terms" },
  { p: "**Qubits and superposition.** A classical bit is either 0 or 1. A qubit can be in a superposition: a combination of 0 and 1 described by two numbers called amplitudes. The amplitudes determine the probability of each result when the qubit is measured (the probability is the square of the amplitude’s size). The popular phrase ‘a qubit is 0 and 1 at the same time’ is a simplification; the precise point is that the qubit carries amplitudes that behave like waves." },
  { p: "**Measurement.** Measuring a qubit always produces a plain 0 or 1, and destroys the superposition. You never read out the amplitudes directly. This is the constraint that shapes everything: a quantum computer is only useful if an algorithm can arrange for the right answer to be the likely measurement result." },
  { p: "**Interference.** Because amplitudes behave like waves, they can reinforce or cancel each other. Quantum algorithms are carefully choreographed so that paths leading to wrong answers cancel and paths leading to the right answer reinforce. Interference, not ‘trying every answer in parallel’, is the real source of quantum advantage. This is also why quantum computers are not faster at everything: only problems with the right mathematical structure can be exploited this way." },
  { p: "**Entanglement.** Two or more qubits can share a joint state that cannot be described as separate states for each. Measuring one entangled qubit tells you something about its partner, however far apart they are. Entanglement does not allow faster-than-light communication, but it is essential to quantum algorithms, to quantum networking, and to quantum sensing." },
  { p: "**Why quantum computers are hard to simulate, and hard to build.** Describing the state of n qubits in general requires 2ⁿ amplitudes, which is why classical computers cannot simulate large quantum systems: fifty qubits already strain supercomputers, three hundred exceed the number of atoms in the observable universe. The same fragility that makes quantum states powerful makes them hard to keep: any interaction with the environment (heat, vibration, stray fields) leaks information and destroys the state. This loss is called **decoherence**, and it is why most quantum computers operate near absolute zero, in vacuum, or with precisely controlled lasers." },

  /* 1.2 */
  { h3: "1.2 What quantum computers are good for, and what they are not" },
  { table: { head: ["Problem class", "Type of speed-up", "Relevance", "Realistic timing"], widths: [2200, 2000, 3060, 2100], rows: [
    ["Factoring and discrete logarithms (Shor’s algorithm, 1994)", "Super-polynomial over the best known classical methods.", "Breaks RSA, elliptic-curve and Diffie–Hellman cryptography: the basis of most internet security.", "Requires a large fault-tolerant machine (§1.6)."],
    ["Unstructured search (Grover’s algorithm, 1996)", "Quadratic (square-root) speed-up.", "Halves the effective strength of symmetric keys and hashes; fixed by doubling key sizes (e.g. AES-256).", "Limited practical impact; overheads eat much of the gain."],
    ["Simulating molecules and materials", "Potentially exponential for some systems.", "The most credible early commercial value: catalysts, batteries, fertilisers, drug candidates, new materials.", "Some early results; industrially useful problems mostly need fault tolerance."],
    ["Optimisation (e.g. QAOA, quantum annealing)", "Unproven; heuristic.", "Heavily marketed for logistics and finance.", "Advantage not yet demonstrated convincingly; treat claims with care."],
    ["Quantum machine learning", "Speculative.", "Possible niche gains; loading classical data into a quantum computer is a major bottleneck.", "Research stage."],
  ]}},
  { p: "**The vocabulary of milestones.** *Quantum supremacy* (Google, 2019) meant a quantum computer performing a contrived task (random circuit sampling) faster than any classical computer; it has no practical use. *Quantum utility* (IBM’s term, 2023) means reliable results on problems beyond brute-force classical simulation. *Quantum advantage* means doing a useful task better, faster or cheaper than the best classical alternative. In October 2025 Google reported a *verifiable* advantage on its Willow chip (an algorithm called Quantum Echoes, roughly 13,000 times faster than the best classical estimate for that task). Claims of advantage are regularly narrowed or overturned when classical algorithms improve, which is itself a governance issue (claims integrity, §1.10)." },
  { p: "**Hybrid computing.** In practice quantum processors will work alongside classical supercomputers, handling the parts of a problem they are suited to. Several national computing centres (including EuroHPC sites in Europe) are already integrating quantum processors into supercomputing infrastructure." },

  /* 1.3 */
  { h3: "1.3 Hardware: the competing approaches" },
  { p: "No single way of building qubits has won. Each ‘modality’ trades off speed, accuracy, scale and engineering difficulty." },
  { table: { head: ["Modality", "How the qubit is made", "Leading players", "Strengths", "Weaknesses"], widths: [1500, 2100, 1900, 1930, 1930], rows: [
    ["Superconducting circuits", "Tiny electrical circuits cooled to about 10 millikelvin behave as artificial atoms.", "IBM, Google, Rigetti, IQM; variants from AWS and Alice & Bob (‘cat qubits’).", "Fast gates; built with chip-fabrication techniques.", "Needs dilution refrigerators; wiring and connectivity limits; short coherence."],
    ["Trapped ions", "Individual charged atoms held by electromagnetic fields and controlled by lasers.", "Quantinuum, IonQ.", "Highest gate accuracy; any qubit can interact with any other.", "Slower operations; scaling requires moving ions or linking modules."],
    ["Neutral atoms", "Uncharged atoms held in arrays by focused laser ‘tweezers’.", "QuEra, Pasqal, Atom Computing, Infleqtion.", "Large, reconfigurable arrays (hundreds to thousands of atoms).", "Slower cycles; atoms can be lost."],
    ["Photonic", "Qubits encoded in particles of light.", "PsiQuantum, Xanadu, Quandela.", "Mostly room-temperature components; natural fit with networking; uses existing semiconductor fabs.", "Photon loss; many operations are probabilistic."],
    ["Spin qubits in silicon", "The spin of single electrons in silicon devices.", "Intel, Diraq, Quantum Motion.", "Very small; compatible with conventional chip manufacturing.", "Earlier stage."],
    ["Topological", "Exotic quasi-particles whose information is intrinsically protected.", "Microsoft (Majorana 1, 2025).", "In principle, built-in error protection.", "Existence and performance still contested."],
    ["Quantum annealers", "Special-purpose devices that settle into low-energy states.", "D-Wave.", "Available at scale today for some optimisation tasks.", "Not universal quantum computers; advantage disputed."],
  ]}},
  { p: "**The supply chain behind the hardware** is narrow and strategically sensitive: dilution refrigerators (a handful of suppliers, notably in Finland and the UK), helium-3, specialised lasers and optics, cryogenic electronics and isotopically pure materials. These are the kinds of chokepoints that export controls and supply-chain policy target (§1.9)." },

  /* 1.4 */
  { h3: "1.4 Error correction and the road to fault tolerance" },
  { p: "Today’s best physical qubits make an error roughly once every thousand two-qubit operations. The algorithms that matter need error rates millions to billions of times lower. The solution is **quantum error correction (QEC)**: spreading one reliable **logical qubit** across many noisy **physical qubits**, continuously detecting errors without directly measuring the protected information, and correcting them in real time using fast classical decoders." },
  { p: "**The threshold theorem** is the idea that makes this work: if physical error rates are below a certain threshold (around 1% for the widely used surface code), then adding more physical qubits per logical qubit suppresses logical errors exponentially. Below threshold, scale helps; above it, scale makes things worse. The historical overhead was hundreds to thousands of physical qubits per logical qubit; newer codes (such as IBM’s quantum LDPC codes, and high-rate codes on trapped ions) aim to cut this substantially." },
  { table: { head: ["Milestone", "Date", "Why it matters"], widths: [3700, 1300, 4360], rows: [
    ["Google Willow (105 superconducting qubits) operates below threshold: logical errors roughly halve each time the code is enlarged.", "Dec 2024", "First convincing experimental evidence that error correction improves with scale."],
    ["Quantinuum Helios (98 trapped ions; 99.92% two-qubit fidelity) runs 48 fully error-corrected logical qubits, at close to two physical qubits per logical qubit.", "Nov 2025", "Shows that high-fidelity hardware can dramatically lower the overhead of error correction."],
    ["Neutral-atom systems (QuEra and partners; Atom Computing with Microsoft) demonstrate dozens of logical qubits.", "2025", "A second modality at scale; competition is broadening."],
    ["IBM roadmap: Starling (200 logical qubits, 100 million gates) by 2029; Blue Jay (2,000 logical qubits, 1 billion gates) by 2033.", "Published 2025", "The most detailed public path to fault tolerance."],
    ["Quantinuum targets universal fault-tolerant computing by around 2029–2030; photonic players target utility-scale machines on a similar horizon.", "Published 2025–26", "Industry consensus has moved from ‘decades away’ to ‘around the end of the decade’ for early fault-tolerant machines."],
  ]}},
  { p: "**What an expert takes from this:** the question has shifted from *whether* fault-tolerant machines can be built to *when* and *at what cost*. Early fault-tolerant machines (hundreds of logical qubits) are credibly expected around 2029–2033. A machine able to break RSA-2048 needs far more resources than those first machines, but estimates of what it needs keep falling (§1.6)." },

  /* 1.5 */
  { h3: "1.5 Quantum sensing and quantum communication" },
  { p: "**Quantum sensing** uses the extreme sensitivity of quantum states to their environment as a feature. Examples: next-generation atomic clocks; magnetometers based on defects in diamond (nitrogen-vacancy centres) for brain imaging or detecting underground structures; atom-interferometer gravimeters for mineral exploration and infrastructure monitoring; and quantum inertial navigation that works without GPS. Sensing is closer to market than computing, has strong defence interest, and has attracted almost no dedicated governance attention: a classic early-integration opportunity." },
  { p: "**Quantum communication** centres on **quantum key distribution (QKD)**, first proposed as the BB84 protocol (Bennett and Brassard, 1984). Two parties exchange quantum states to agree a secret key; any eavesdropping disturbs the states and can be detected. China has invested most visibly (the Micius satellite from 2016 and a roughly 2,000 km terrestrial backbone), and the EU is building a quantum communication infrastructure (EuroQCI). QKD has real limits: it needs special hardware, distance is limited without ‘trusted nodes’ or future quantum repeaters, and it still relies on classical cryptography for authentication. Several national security agencies (including the US NSA, the UK NCSC and France’s ANSSI) therefore recommend post-quantum cryptography as the primary defence and see QKD as a niche complement. The long-term vision of a **quantum internet** (networks distributing entanglement between quantum computers and sensors) remains a research goal." },

  /* 1.6 */
  { h3: "1.6 The cryptographic threat" },
  { p: "**What is at risk.** Public-key cryptography lets strangers establish secure connections and verify identity. Its two workhorses, RSA (based on the difficulty of factoring large numbers) and elliptic-curve cryptography (based on the discrete-logarithm problem), secure web traffic (TLS), VPNs, software updates, digital certificates and identities, payment systems and blockchain signatures. Shor’s algorithm solves both underlying problems efficiently, so a large enough quantum computer would break confidentiality (anyone could read past and future key exchanges) and authenticity (anyone could forge signatures). Symmetric encryption (such as AES) and hash functions are only weakened, and are protected by using longer keys." },
  { p: "**The threat is already active.** In a *harvest-now, decrypt-later* attack, adversaries collect encrypted data today to decrypt once a capable machine exists; anything that must stay secret for years (health records, state secrets, intellectual property, financial data) is therefore already exposed. A parallel *trust-now, forge-later* risk applies to long-lived signatures, for example in firmware of vehicles, satellites or infrastructure that will still be operating when forgery becomes possible." },
  { p: "**How big a machine is needed.** The hypothetical machine is called a *cryptographically relevant quantum computer* (CRQC); the day it exists is informally called *Q-Day*. Estimates have fallen sharply. In 2019, Gidney and Ekerå estimated that breaking RSA-2048 would take about 20 million noisy qubits running for eight hours. In May 2025, Gidney (Google) estimated fewer than one million noisy qubits running for under a week: a twentyfold reduction in six years, driven by better algorithms and error-correction techniques. No such machine exists (today’s devices have hundreds to a few thousand physical qubits), but the direction of travel is clear. Expert surveys, notably the Global Risk Institute’s annual Quantum Threat Timeline Report, place a meaningful probability on a CRQC within ten to fifteen years." },
  { callout: [
    "**Mosca’s theorem (Michele Mosca), the single most useful framework in quantum security.** Let X be how long your data must stay secure, Y how long it will take you to migrate to quantum-safe cryptography, and Z how long until a CRQC exists. If X + Y > Z, you are already too late. Health records must stay confidential for decades; large organisations take a decade or more to migrate. That is why governments are acting now, even though Z is uncertain.",
  ]},

  /* 1.7 */
  { h3: "1.7 Post-quantum cryptography and the migration" },
  { p: "**What PQC is.** Post-quantum cryptography means new *classical* algorithms, running on ordinary computers, based on mathematical problems believed to be hard for quantum computers as well (mainly lattice problems, hash functions and error-correcting codes). Unlike QKD, it needs no new hardware; it needs software, firmware and protocol upgrades across every system that uses public-key cryptography." },
  { p: "**The standards.** The US National Institute of Standards and Technology (NIST) ran an open international competition from 2016 (82 submissions). In August 2024 it published the first three standards: **FIPS 203 (ML-KEM**, derived from CRYSTALS-Kyber, for establishing keys), **FIPS 204 (ML-DSA**, derived from Dilithium, for signatures) and **FIPS 205 (SLH-DSA**, derived from SPHINCS+, a hash-based signature scheme as a conservative backup). A fourth, **FN-DSA** (derived from Falcon), is being finalised, and in March 2025 NIST selected **HQC**, a code-based algorithm, as a backup to ML-KEM. Other countries (including China and South Korea) are developing or selecting their own algorithms, which creates a risk of divergence." },
  { p: "**How migration works.** The practical steps are: build a cryptographic inventory (where is public-key cryptography used, by which systems and suppliers?); prioritise by data lifetime and exposure; adopt **crypto-agility** (designing systems so algorithms can be swapped without rebuilding them); use **hybrid** schemes during the transition (combining a classical and a post-quantum algorithm so security holds if either survives); and work through suppliers, because most organisations depend on vendors’ products. Early adopters show it is feasible: hybrid post-quantum key exchange is now enabled by default in major web browsers and content-delivery networks, and messaging services such as Signal (2023) and Apple’s iMessage (2024) have added post-quantum protection. The hard cases are long-lived devices (vehicles, satellites, industrial control systems, medical devices) and organisations with little cryptographic expertise." },
  { h3: "1.7.1 The deadlines, jurisdiction by jurisdiction" },
  { table: { head: ["Jurisdiction", "Key instruments", "Timeline"], widths: [1700, 3700, 3960], rows: [
    ["United States", "National Security Memorandum 10 (2022); OMB M-23-02 (annual inventories); NSA’s CNSA 2.0 for national security systems; NIST IR 8547 (draft, Nov 2024).", "NIST: quantum-vulnerable algorithms deprecated after 2030 and disallowed after 2035. CNSA 2.0: most national-security categories exclusively quantum-resistant by 2030–2033; all by 2035."],
    ["European Union", "Commission Recommendation on PQC (April 2024); Coordinated Implementation Roadmap adopted by member states (June 2025).", "All member states start the transition by end-2026; high-risk use cases migrated by end-2030; as many medium- and low-risk systems as feasible by 2035."],
    ["United Kingdom", "NCSC migration timelines (March 2025).", "Discovery and planning complete by 2028; highest-priority migration by 2031; full migration by 2035."],
    ["Australia", "Australian Signals Directorate guidance.", "An earlier end-date: traditional public-key algorithms to be phased out by around 2030."],
  ]}},
  { p: "**Why this is a GRIP-type problem.** The broad direction is aligned (start now, prioritise high-risk systems, finish by 2035), but the detail diverges: dates, algorithm choices, whether hybrid schemes are required, certification regimes, and sector-specific supervisory expectations. Multinational companies, global supply chains and cross-border protocols must satisfy all of them. The Forum’s 2024 paper with the UK FCA already named ‘avoid fragmentation’ as a principle for finance; the equivalent work for other critical sectors (telecommunications, energy, health, government services) and across jurisdictions largely does not yet exist." },
  { h3: "1.7.2 Which sectors are most exposed" },
  { p: "Exposure depends on two variables from Mosca’s theorem: how long data or systems must remain secure, and how hard the systems are to upgrade." },
  { table: { head: ["Sector", "Why it is exposed", "State of preparation"], widths: [1900, 4000, 3460], rows: [
    ["Financial services", "Payments, interbank messaging, trading and long-lived customer data all rely on public-key cryptography.", "Most advanced: supervisors engaged (e.g. the UK FCA with the Forum; BIS Innovation Hub experiments; Europol’s Quantum Safe Financial Forum)."],
    ["Telecommunications", "Network infrastructure, subscriber authentication and long equipment lifecycles.", "Industry work through the GSMA’s post-quantum telco task force; uneven across operators."],
    ["Energy and critical infrastructure", "Industrial control systems run for 20 to 30 years and are hard to patch.", "Early; often dependent on vendors’ roadmaps."],
    ["Health", "Medical records must stay confidential for a lifetime; connected medical devices are long-lived.", "Early; limited cryptographic expertise in many providers."],
    ["Government and defence", "Classified information; national identity systems and e-passports.", "Driven by national mandates (NSM-10, CNSA 2.0, EU and UK roadmaps)."],
    ["Automotive, IoT and space", "Vehicles, devices and satellites operate for 15 years or more, and firmware signatures must stay trustworthy throughout.", "Early; design choices made today determine exposure in the 2040s."],
    ["Digital assets", "Blockchain signatures (such as ECDSA) are quantum-vulnerable, and exposed public keys can be targeted.", "Debated within crypto-asset communities; no agreed migration path."],
  ]}},

  /* 1.8 */
  { h3: "1.8 The quantum economy" },
  { table: { head: ["Indicator", "Figure", "Source"], widths: [3900, 2900, 2560], rows: [
    ["Investment in quantum start-ups, 2025", "About $12.6 billion (roughly 6x 2024)", "McKinsey Quantum Technology Monitor 2026"],
    ["Revenue of quantum computing companies, 2025", "Over $1 billion; projected about $4.4 billion by 2028", "McKinsey Quantum Technology Monitor 2026"],
    ["Potential quantum technology market", "Around $100 billion within a decade", "McKinsey Quantum Technology Monitor 2025"],
    ["Announced public investment worldwide", "Over $39 billion (and rising)", "Forum, Quantum Economy Blueprint (2024)"],
    ["EU public funding for quantum R&D", "Over €11 billion in the past five years", "European Commission"],
    ["Companies collaborating with quantum firms", "300+", "McKinsey Quantum Technology Monitor 2026"],
  ]}},
  { p: "**Where value is expected.** Computing: chemicals, materials, pharmaceuticals, finance and logistics. Communication: security for critical networks. Sensing: defence and navigation, healthcare, geoscience and infrastructure monitoring. The Forum’s 2025 manufacturing paper documents early industrial cases (Part II, §2.1). The binding constraints are talent (a well-documented shortage of quantum engineers and ‘quantum-literate’ professionals), access to hardware, and the long time to value." },

  /* 1.9 */
  { h3: "1.9 National strategies and geopolitics" },
  { table: { head: ["Country or bloc", "Strategy and posture"], widths: [2200, 7160], rows: [
    ["United States", "National Quantum Initiative Act (2018) coordinating federal R&D; DARPA’s Quantum Benchmarking Initiative testing whether utility-scale machines are feasible; export controls on quantum items introduced in September 2024."],
    ["European Union", "Quantum Flagship (2018, €1 billion); Quantum Europe Strategy (July 2025) aiming for global leadership by 2030; a European Quantum Act expected in 2026 covering research, industrial capacity (pilot lines, design facilities) and supply-chain resilience and governance; quantum computers integrated into EuroHPC; EuroQCI for secure communication."],
    ["United Kingdom", "National Quantum Strategy (2023) committing £2.5 billion over ten years, with time-bound quantum missions."],
    ["China", "Sustained state investment; world lead in deployed QKD networks; strong programmes in superconducting and photonic computing; its own cryptographic standards."],
    ["India", "National Quantum Mission (2023), about ₹6,000 crore to 2031."],
    ["Gulf states", "UAE through the Technology Innovation Institute (host of the new Abu Dhabi Centre for Frontier Technologies); Saudi Arabia piloting the Forum’s Quantum Economy Blueprint with C4IR Saudi Arabia."],
    ["Others", "Japan, South Korea, Canada, Australia (including a major public investment in PsiQuantum), Singapore, the Netherlands, Germany and France all have national programmes."],
  ]}},
  { p: "**The geopolitical dynamics to name:** quantum is treated as a strategic technology, so research security, export controls and investment screening sit alongside industrial policy; allied export-control regimes are not fully aligned; and a **quantum divide** is opening between the few countries with full-stack capability and the many without, which the Forum’s Blueprint was designed to address. The United Nations designated 2025 the International Year of Quantum Science and Technology, marking a century since the foundations of quantum mechanics." },

  /* 1.10 */
  { h3: "1.10 The governance issue map for quantum" },
  { p: "This is the synthesis an expert carries: the live governance issues, who is already working on them, and where the gaps are. It is the natural starting agenda for a GRIP collaboration with the quantum team." },
  { table: { head: ["Issue", "What is at stake", "Who is active", "Where the gap is"], widths: [1800, 2600, 2300, 2660], rows: [
    ["Security transition (PQC migration)", "Confidentiality and trust in every digital system; hard deadlines to 2035.", "NIST, cybersecurity agencies, EU member states, financial regulators; Forum work with the UK FCA (finance).", "Coherence across jurisdictions; sectors beyond finance; supply-chain and SME readiness; capacity in the Global South."],
    ["Dual use and export controls", "Security versus open science and talent mobility.", "Export-control authorities; research-security offices.", "Structured dialogue between security and innovation communities; allied alignment."],
    ["Claims integrity and benchmarking", "Hype distorts investment and public procurement.", "DARPA benchmarking; standards bodies.", "Shared, trusted benchmarks that governments and investors can use."],
    ["Access and the quantum divide", "Concentration of capability in a few states and firms.", "Forum Quantum Economy Blueprint; cloud access providers.", "Implementation support for countries adopting strategies."],
    ["Standards", "Interoperable protocols; certification of QKD and PQC products; hardware metrics.", "NIST, ISO/IEC JTC 3, ETSI, IETF.", "Coordination between standards bodies and regulators."],
    ["Responsible use of quantum computing", "Future applications in drug design, finance, defence.", "Forum Quantum Computing Governance Principles (2022).", "Turning principles into practice as applications arrive."],
    ["Quantum sensing", "Privacy, surveillance and defence uses; near-term market.", "Largely defence ministries.", "Almost no civilian governance framework yet: a clear case for anticipatory work."],
    ["Talent and supply chain", "Skills shortages; chokepoints in cryogenics and components.", "National strategies; EU Quantum Act.", "International cooperation on skills and supply resilience."],
  ]}},
  { h3: "1.11 The live debates among quantum experts" },
  { p: "Knowing where experts disagree is what separates fluency from familiarity. These are the debates you are most likely to hear from the quantum team and its community." },
  { b: [
    "**How soon?** Optimists point to published hardware roadmaps and falling resource estimates and expect early fault-tolerant machines around 2029–2033. Sceptics stress the engineering challenge of scaling (wiring, cooling, control, manufacturing yield) and argue commercially useful advantage may take much longer. The governance consequence is that security preparation cannot wait for the debate to be settled (Mosca’s theorem), while investment and industrial policy should be robust to either outcome.",
    "**Hybrid or pure post-quantum cryptography?** France’s ANSSI and Germany’s BSI recommend hybrid schemes during the transition, as a hedge against weaknesses in new algorithms; the US NSA does not require hybrid for national security systems. Multinationals have to reconcile both positions.",
    "**QKD or PQC?** Covered in §1.5: several Western agencies prefer PQC; China and parts of the EU invest heavily in QKD infrastructure.",
    "**Should quantum computing itself be regulated?** The dominant view is to govern *uses* (and the security transition) rather than the technology, with export controls as the main exception. Early principles (such as the Forum’s 2022 Governance Principles) are seen as the right instrument at this stage.",
    "**Openness versus security.** Open-source software (such as IBM’s Qiskit) and cloud access have democratised quantum research, while export controls and research-security rules pull in the other direction.",
    "**Claims and credibility.** Each new ‘advantage’ claim is scrutinised by classical-algorithm researchers; experts are wary of hype damaging public and investor trust, as happened with earlier technology cycles.",
    "**National champions or global ecosystem?** Strategies increasingly emphasise sovereignty and domestic supply chains, while the science remains deeply international; the quantum divide is the equity dimension of this tension.",
  ]},
  { pageBreak: true },
);

module.exports = { blocks };
