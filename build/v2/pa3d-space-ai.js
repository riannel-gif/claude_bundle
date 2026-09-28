// Part III, sections 4-5: Space and planetary systems; AI as the convergence layer.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  /* 4 */
  { h2: "4. Space and planetary systems" },
  { h3: "4.1 The primer" },
  { p: "Satellites operate in orbits defined by altitude. **Low Earth Orbit (LEO)**, roughly 160 to 2,000 km, offers low latency and cheap access, and hosts the ‘mega-constellations’ of thousands of small satellites providing broadband (such as Starlink). **Medium Earth Orbit** hosts navigation systems (GPS, Galileo). **Geostationary orbit** (about 35,786 km) keeps a satellite fixed over one point, suited to broadcasting and weather. The transformation of the last decade is economic: reusable rockets have cut launch costs by roughly an order of magnitude, opening space to commercial operators and to many more countries." },
  { p: "Space value comes from three services used on Earth: communications, positioning-navigation-timing (PNT), and Earth observation. The Forum’s 2024 analysis with McKinsey projects the space economy growing from about $630 billion (2023) to $1.8 trillion by 2035, with more than 60% of demand coming from sectors such as supply chains and transport, food, defence, retail and digital communications. Space is therefore increasingly an enabling infrastructure for the whole economy rather than a sector apart." },
  { h3: "4.2 Debris and sustainability" },
  { p: "There are over one million pieces of debris larger than one centimetre in orbit, travelling at over 25,000 km/h. The systemic risk is a collision cascade (the **Kessler syndrome**), in which collisions create debris that causes further collisions, potentially rendering valuable orbits unusable. The Forum’s 2026 report estimates the direct cost of inaction at up to about $42 billion over a decade. Responses include post-mission disposal rules (the US FCC cut the permitted time for deorbiting LEO satellites from 25 to 5 years in 2022), industry commitments (the Forum’s 2023 Debris Mitigation Recommendations), ratings (the Space Sustainability Rating) and active debris removal missions." },
  { h3: "4.3 The legal framework and its gaps" },
  { p: "The foundation is the **Outer Space Treaty (1967)**: space is free for exploration by all, cannot be claimed by any nation, and states are responsible for their national activities, including those of private companies. Four further UN treaties cover rescue, liability, registration and the Moon; UNOOSA and the UN Committee on the Peaceful Uses of Outer Space (COPUOS) are the multilateral forums; the ITU allocates radio spectrum and orbital positions; national agencies license launches and operations. The US-led **Artemis Accords** (2020) set out principles for civil exploration and resource use and have attracted dozens of signatories; the European Commission proposed an **EU Space Act** in 2025 on safety, resilience and sustainability." },
  { p: "The gaps are well known: no binding international regime for **space traffic management**, for **active debris removal**, or for **property rights over space resources**; unclear liability for private collisions; and growing concerns over the impact of mega-constellations on astronomy and on equitable access to orbits and spectrum." },
  { h3: "4.4 Earth systems and climate intervention" },
  { p: "‘Planetary systems’ may also extend to technologies that observe or intervene in Earth’s systems. Earth observation from space is central to climate monitoring, agriculture and disaster response. Deliberate climate intervention divides into **carbon dioxide removal** (removing CO₂ from the atmosphere; broadly seen as necessary and governable) and **solar radiation modification** (reflecting sunlight, for example by injecting aerosols into the stratosphere; cheap and fast but globally consequential, unevenly distributed in its effects, and subject to ‘termination shock’ if stopped abruptly). Governance of the latter is contested: the Convention on Biological Diversity maintains a moratorium on deployment, and a scientist-led non-use initiative opposes outdoor experiments, while others argue for transparent research governance." },
  { h3: "4.5 The governance issue map for space" },
  { table: { head: ["Issue", "Where the gap is"], widths: [2800, 6560], rows: [
    ["Space traffic management and debris", "No binding international regime; coordination between operators is voluntary."],
    ["Resource rights", "Divergent national laws and the Artemis Accords versus other states’ positions."],
    ["Access and equity", "Emerging space nations risk being rule-takers on orbits and spectrum."],
    ["Dual use and security", "Commercial capabilities increasingly used in conflicts; rising counter-space activity."],
  ]}},

  /* 5 */
  { h2: "5. AI as the convergence layer" },
  { p: "AI is owned at the Forum by the Centre for AI Excellence, so it is covered here in brief, as the layer that runs through every other frontier technology. You need enough to recognise where AI changes the governance questions of the domains you would work on." },
  { h3: "5.1 The primer in brief" },
  { p: "Machine learning systems learn patterns from data rather than following hand-written rules. Deep learning uses many-layered neural networks. The **transformer** architecture (2017) made it possible to train very large **foundation models** on broad data and adapt them to many tasks; large language models are the best-known example. Capability has improved predictably with more data, parameters and computing power (‘scaling laws’), and new abilities often appear at scale without being explicitly trained. The current frontier is **agentic AI** (systems that plan and act through tools) and **multimodal** models. The binding inputs are specialised chips, data centres, data and capital." },
  { h3: "5.2 The governance landscape in brief" },
  { table: { head: ["Jurisdiction", "Approach"], widths: [2100, 7260], rows: [
    ["European Union", "The AI Act (in force since August 2024, applying in phases to 2027): risk-based tiers, with specific obligations for general-purpose AI models since August 2025, supported by a voluntary Code of Practice."],
    ["United States", "Largely sectoral and market-led at federal level, with voluntary NIST frameworks and a growing body of state law."],
    ["United Kingdom", "Principles applied by existing sector regulators, with the AI Security Institute evaluating frontier models."],
    ["China", "Targeted rules on recommendation algorithms, deep synthesis and generative AI, with registration and labelling requirements."],
    ["International", "OECD AI Principles; the G7 Hiroshima Process; the Council of Europe Framework Convention on AI (the first binding international AI treaty); and, since 2025, a UN Independent International Scientific Panel on AI and a Global Dialogue on AI Governance."],
  ]}},
  { h3: "5.3 Where AI converges with the other frontier technologies" },
  { table: { head: ["Convergence", "What it enables", "Why it matters for governance"], widths: [2000, 3700, 3660], rows: [
    ["AI and quantum", "Quantum hardware controlled and error-corrected with AI; possible quantum acceleration of some AI tasks.", "Spans AI policy, cryptography and export control at once."],
    ["AI and biology", "AI-designed proteins and genomes; automated laboratories.", "The sharpest biosecurity concern (Part III, §3.4); falls between regulators."],
    ["AI and robotics (‘physical AI’)", "Robot foundation models; general-purpose robots; autonomous vehicles.", "Joins software-AI rules to product-safety and liability regimes."],
    ["AI and space", "Automated analysis of Earth observation data; autonomous spacecraft operations.", "Raises data, privacy and security questions at planetary scale."],
  ]}},
  { p: "Convergence is the strongest argument for a cross-cutting workstream: the most consequential governance questions increasingly arise where two technologies meet, which is exactly where single-technology teams and single-sector regulators are least equipped." },
  { pageBreak: true },
);

module.exports = { blocks };
