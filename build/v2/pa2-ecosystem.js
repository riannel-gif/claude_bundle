// Part II: The Ecosystem.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "Part II · The Ecosystem" },
  { lead: "Frontier-technology governance is produced by an ecosystem, not by any single rule-maker. This part maps the Forum as an institution, what its frontier-technology teams have already produced, the external actors around each technology, and the multistakeholder model that ties them together." },

  /* 1 */
  { h2: "1. The Forum as an institution" },
  { p: "The World Economic Forum is an independent international organisation for public-private cooperation, headquartered in Geneva. It has no legislative, regulatory or enforcement power. Its influence comes from who it can bring together, the credibility of what it publishes, and the willingness of governments and companies to adopt what is co-designed on its platforms." },
  { h3: "1.1 The levers of impact" },
  { table: { head: ["Lever", "What it is", "How it creates impact"], widths: [2100, 3800, 3460], rows: [
    ["Convening", "Bringing governments, companies, academia and civil society into the same room, under Chatham House norms where needed.", "Allows alignment before positions harden; creates relationships that outlast the meeting."],
    ["Communities", "Standing groups: industry communities, Chief Legal Officers, Chief Compliance Officers, Global Future Councils (expert councils), Technology Pioneers (start-ups), Young Global Leaders.", "Supply expertise, membership, and channels for adoption."],
    ["Initiatives and platforms", "Multi-year, multistakeholder programmes with a defined objective (GRIP is one).", "Turn dialogue into frameworks, pilots and commitments."],
    ["Knowledge products", "Insight reports, white papers, principles, toolkits, blueprints, playbooks, outlooks and indices.", "Shape how decision-makers frame problems and what they consider good practice."],
    ["C4IR network", "Government- or institution-hosted Centres for the Fourth Industrial Revolution in over 20 countries.", "Pilot frameworks with governments in-country and feed lessons back globally."],
    ["Annual Meeting and summits", "Davos, the Annual Meeting of the New Champions, and topical summits.", "Moments to launch products, secure commitments, and reach leaders."],
  ]}},
  { h3: "1.2 How knowledge products are made" },
  { p: "Most Forum outputs are co-designed with a community rather than written in isolation: a working group or network of member companies, government representatives and experts shapes the content over several months, often with a knowledge partner (Accenture, Deloitte, McKinsey and BCG appear frequently in frontier-technology work). This matters for your role in two ways: outputs carry the legitimacy of the community that built them, and the process of building them is itself a convening instrument. A product with no community behind it rarely gets adopted." },
  { h3: "1.3 The grammar of Forum products" },
  { p: "Reading across the frontier-technology portfolio, the Forum uses a recognisable set of product types. Knowing them lets you propose outputs that fit how the institution actually works." },
  { table: { head: ["Product type", "Purpose", "Frontier-technology example"], widths: [2200, 3700, 3460], rows: [
    ["Principles", "Establish shared values and expectations for a technology.", "Quantum Computing Governance Principles (2022)."],
    ["Readiness toolkit", "Guide organisations through a transition.", "Quantum Readiness Toolkit (2023, with Deloitte)."],
    ["Regulatory-facing white paper", "Inform how regulators approach an issue, with principles and a roadmap.", "Quantum Security for the Financial Sector: Informing Global Regulatory Approaches (2024, with the UK FCA)."],
    ["National blueprint", "Help governments design a national strategy; piloted through C4IR.", "Quantum Economy Blueprint (2024), piloted with C4IR Saudi Arabia."],
    ["Timeline and roadmap", "Give a grounded view of when a technology will scale.", "Autonomous Vehicles: Timeline and Roadmap Ahead (2025)."],
    ["Cross-jurisdiction synthesis", "Compare regulatory approaches and extract shared lessons.", "Autonomous Vehicles: From Regulatory Diversity to Shared Learning (2026)."],
    ["Rating or standard incubation", "Create a measurable benchmark others can adopt.", "Space Sustainability Rating (incubated by the Forum, now operated independently)."],
    ["Industry statement or call to action", "Secure collective commitments.", "Space Industry Debris Mitigation Recommendations (2023); Clear Orbit, Secure Future (2026)."],
    ["Policy index", "Benchmark policy maturity across countries.", "Bioeconomy Initiative’s Policy Maturity Index."],
  ]}},

  /* 2 */
  { h2: "2. The frontier-technology teams and their bodies of work" },
  { p: "Before proposing anything, an expert knows what already exists. The tables below list the most relevant public outputs. Titles and dates were checked against public Forum pages as of September 2026; check each team’s page before the interview for anything newer." },
  { h3: "2.1 Quantum technologies" },
  { table: { head: ["Output", "Year", "What it did"], widths: [3900, 900, 4560], rows: [
    ["Quantum Computing Governance Principles", "2022", "First set of principles for responsible quantum computing, from the Forum’s Quantum Computing Network: nine themes (including transformative capabilities, access to hardware, open innovation, creating awareness, cybersecurity, standardisation and workforce) underpinned by seven core values (common good, accountability, inclusiveness, equitability, non-maleficence, accessibility, transparency)."],
    ["Transitioning to a Quantum-Secure Economy", "2022", "Flagship framing of the quantum security transition for organisations and policy-makers."],
    ["Quantum Readiness Toolkit: Building a Quantum-Secure Economy (with Deloitte)", "2023", "Five principles for organisations: institutionalise quantum risk in governance; raise awareness; treat quantum risk alongside existing cyber risk; make strategic technology decisions (including crypto-agility); collaborate across the ecosystem."],
    ["Quantum Security for the Financial Sector: Informing Global Regulatory Approaches (with the UK FCA)", "2024", "Guiding principles and a roadmap for regulators and industry, including reusing existing frameworks, increasing transparency between regulators and firms, and avoiding regulatory fragmentation through international alignment."],
    ["Quantum Economy Blueprint", "2024", "Framework for countries designing national quantum strategies, built on the nine themes of the Governance Principles; addresses access and the ‘quantum divide’. Piloted with C4IR Saudi Arabia (lessons published 2026)."],
    ["Embracing the Quantum Economy: A Pathway for Business Leaders", "2024", "Guidance for companies on preparing for quantum."],
    ["Quantum Technologies: Key Opportunities for Advanced Manufacturing and Supply Chains (with Accenture)", "2025", "Use cases across design, operations and supply chains (e.g. Ford Otosan scheduling, Port of Rotterdam quantum-secured network) and a roadmap from hybrid pilots to policy, talent and security measures."],
    ["Quantum Economy Network", "Ongoing", "The community through which the quantum work is developed."],
  ]}},
  { p: "**What this tells you:** the quantum team has moved from principles (2022) to organisational readiness (2023), to regulators (2024, finance only), to national strategy (2024) and industrial adoption (2025). The regulatory-facing work so far is sector-specific (finance) and jurisdiction-specific (UK regulator). That is the most obvious space for a GRIP collaboration: extending regulatory coherence beyond one sector and one jurisdiction (see Part B, Case 1)." },
  { h3: "2.2 Autonomous mobility and robotics" },
  { table: { head: ["Output", "Year", "What it did"], widths: [3900, 900, 4560], rows: [
    ["Autonomous Vehicles: Timeline and Roadmap Ahead", "2025", "Grounded adoption timeline across personal vehicles, robotaxis and trucks: assisted rather than autonomous features dominate personal vehicles through 2035; hub-to-hub trucks could reach roughly 30% of new mid-distance truck sales in the US by 2035. Five actions: public trust, technology, regulatory alignment, business models, industry collaboration."],
    ["Autonomous Vehicles: From Regulatory Diversity to Shared Learning (with Accenture)", "2026", "Compares divergent national approaches to AV regulation and argues for mechanisms that let jurisdictions learn from each other. This is GRIP’s thesis applied to one technology."],
    ["Intelligent Industrial Operations Outlook", "2026", "First edition; maps the shift from automation to intelligent, connected and increasingly autonomous industrial operations, including physical AI."],
    ["Frontier technologies for operations (initiative)", "Ongoing", "Work on how AI, physical AI and quantum reshape industrial operations."],
  ]}},
  { h3: "2.3 Biotechnology" },
  { table: { head: ["Output", "Year", "What it did"], widths: [3900, 900, 4560], rows: [
    ["Bioeconomy Initiative (including BioBASED work)", "Ongoing", "Accelerates a technology-driven bioeconomy by strengthening ecosystems across countries and industries."],
    ["Accelerating the Tech-Driven Bioeconomy", "Recent", "Framing of how technology is transforming the bioeconomy and what enables it."],
    ["Policy Maturity Index", "Recent", "Assesses nearly a thousand bioeconomy policy instruments across seven geographies: a ready-made evidence base on regulatory approaches."],
  ]}},
  { h3: "2.4 Space and planetary systems" },
  { table: { head: ["Output", "Year", "What it did"], widths: [3900, 900, 4560], rows: [
    ["Space Sustainability Rating", "Launched 2021", "Conceived by the Forum’s Global Future Council on Space; developed with ESA, MIT Media Lab and others; scores missions on debris mitigation and other sustainability criteria; now operated by EPFL’s eSpace centre. The clearest case of the Forum incubating a governance instrument and handing it on."],
    ["Space Industry Debris Mitigation Recommendations", "2023", "Recommendations endorsed by major satellite operators, including limiting post-mission orbital lifetime and improving operator coordination."],
    ["Space: The $1.8 Trillion Opportunity for Global Economic Growth (with McKinsey)", "2024", "Space economy projected to grow from about $630 billion (2023) to $1.8 trillion by 2035."],
    ["Clear Orbit, Secure Future: A Call to Action on Space Debris", "2026", "Data-driven forecast of the cost of inaction on debris (up to about $42 billion over a decade)."],
  ]}},
  { p: "The JD lists ‘planetary systems’ as a technology initiative. Its exact scope (space alone, or space together with Earth observation and climate-related technologies) is worth confirming in the interview; it is a good question to ask." },

  /* 3 */
  { h2: "3. The external actors around each technology" },
  { p: "Each technology has its own cast. Knowing who matters is what allows you to build the right community." },
  { table: { head: ["Actor type", "Quantum", "Autonomous mobility and robotics", "Biotechnology"], widths: [1700, 2560, 2550, 2550], rows: [
    ["Governments and strategy owners", "National quantum programmes (US National Quantum Initiative; EU Quantum Europe Strategy; UK National Quantum Technologies Programme; China; India’s National Quantum Mission; Japan; Saudi Arabia; UAE via TII).", "Transport ministries and agencies (US DOT/NHTSA; UK DfT and its Centre for Connected and Autonomous Vehicles; China’s MIIT; EU type-approval authorities); city and state regulators.", "Health, agriculture and environment ministries; national bioeconomy strategies (50+ countries)."],
    ["Regulators and security agencies", "Cybersecurity agencies (NIST, CISA, NSA in the US; ENISA; ANSSI; BSI; UK NCSC); financial regulators (e.g. UK FCA); export-control authorities.", "Vehicle safety regulators; product-safety and liability authorities; insurance regulators.", "FDA, EMA, EFSA; US Coordinated Framework agencies (FDA, USDA, EPA); biosecurity authorities."],
    ["Standards bodies", "NIST (post-quantum standards); ISO/IEC JTC 3 on quantum technologies; ETSI; IETF (protocols).", "UNECE WP.29/GRVA; ISO 26262 and ISO 21448; UL 4600; SAE J3016 (automation levels); ISO 10218 and ISO/TS 15066 (robots).", "ISO biotechnology committees; biosafety guidance (WHO); DNA-synthesis screening standards."],
    ["International bodies", "OECD; Wassenaar Arrangement (export controls); UN International Year of Quantum (2025).", "UNECE; OECD International Transport Forum.", "Biological Weapons Convention; WHO; Convention on Biological Diversity (Cartagena and Nagoya protocols)."],
    ["Industry", "Hardware: IBM, Google, Quantinuum, IonQ, PsiQuantum, QuEra, Pasqal. Post-quantum security vendors. Banks, telecoms and critical-infrastructure operators as adopters.", "Waymo, Baidu Apollo Go, Zoox, Tesla, WeRide, Pony.ai, Aurora; robot makers (ABB, FANUC, KUKA; humanoid firms such as Figure, Agility, Unitree).", "Pharma and biotech; synthetic-biology platforms; DNA-synthesis providers (International Gene Synthesis Consortium)."],
    ["Research and civil society", "University quantum centres; quantum industry consortia (e.g. QED-C).", "Road-safety groups; labour unions; disability-access advocates.", "Biosecurity NGOs (e.g. NTI | bio); bioethics bodies; patient groups."],
  ]}},

  /* 4 */
  { h2: "4. The multistakeholder model, and its critics" },
  { p: "The Forum’s theory of change is multistakeholder governance: if the relevant actors (states, firms, academia, civil society) shape a solution together, the result is both more legitimate and more likely to be implemented than one designed by any of them alone. It is the reason a convening organisation can matter in a field defined by regulation." },
  { p: "The critique is well established and a sharp panel may raise it: multistakeholder processes can dilute democratic accountability, give corporations disproportionate voice, lack clear rules on who represents whom, and let powerful actors choose the venue that suits them. A credible answer acknowledges this directly and names the safeguards that earn legitimacy: transparency about who is in the room and why; genuine inclusion of civil society and of the Global South; outputs that governments adopt through their own accountable processes, so the Forum complements rather than replaces democratic and multilateral institutions." },

  /* 5 */
  { h2: "5. How a Forum initiative runs" },
  { p: "Understanding the lifecycle of an initiative tells you where a cross-cutting governance workstream can plug in, and when it is too late to do so." },
  { table: { head: ["Stage", "What happens", "Where governance input has most leverage"], widths: [1900, 3900, 3560], rows: [
    ["1. Scoping", "The team defines the problem, the objective, the partners and the business case, usually with member companies and government constituents.", "Highest: this is where regulatory questions and regulators can be written into the programme’s design (Part I, §6)."],
    ["2. Community formation", "A steering group or working group is assembled: companies, governments, international organisations, academia, civil society; often with co-chairs.", "Ensuring regulators, legal and compliance leaders, and under-represented regions are at the table."],
    ["3. Co-design", "Workshops, interviews and drafting, frequently with a knowledge partner.", "Shaping content so it is usable by regulators and addresses cross-jurisdiction issues."],
    ["4. Validation and launch", "Review by the community; launch at a Forum moment or a relevant external event.", "Timing launch to a regulatory decision window."],
    ["5. Adoption and pilots", "Governments adopt or pilot through C4IR centres; companies make commitments.", "Capturing evidence of what regulators actually do with the output."],
    ["6. Iteration or handover", "A next edition, a new phase, or a spin-out to an independent owner (as with the Space Sustainability Rating).", "Codifying lessons into a method other teams can reuse."],
  ]}},
  { p: "**The calendar that shapes timing.** The Annual Meeting in Davos (January) is the main launch moment; the Annual Meeting of the New Champions (June, China) and the Sustainable Development Impact Meetings (September, New York, alongside the UN General Assembly) are the other recurring anchors, alongside special meetings and regional summits. Knowledge products and commitments are usually planned backwards from these dates." },
  { pageBreak: true },
);

module.exports = { blocks };
