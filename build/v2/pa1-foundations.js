// Part I: Foundational Concepts.
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "Part I · Foundational Concepts" },
  { lead: "The base layer. These are the concepts every later part builds on: what a frontier technology is, how technologies mature, what governance and regulation actually mean, why frontier technologies strain them, what ‘regulatory innovation’ covers, and what it means to integrate regulatory thinking early." },

  /* 1 */
  { h2: "1. The vocabulary of frontier technology" },
  { p: "These terms are often used interchangeably. Using them precisely is one of the fastest ways to sound like an insider." },
  { table: { head: ["Term", "Definition", "Example", "Why it matters for governance"], widths: [1700, 3100, 2000, 2560], rows: [
    ["Emerging technology", "A technology still developing, not yet widely adopted, with uncertain eventual impact.", "Most of the list below.", "Broad umbrella; says nothing about risk or scale."],
    ["Frontier technology", "The leading edge of emerging technology: the most advanced, highest-potential, highest-uncertainty fields. Used by UNCTAD and WIPO, and by the Forum.", "Quantum, advanced AI, synthetic biology, humanoid robotics.", "Where rules are thinnest and where the Forum’s frontier-technology teams work."],
    ["General-purpose technology (GPT)", "A technology that spreads across the whole economy, keeps improving, and spawns complementary innovations.", "Electricity, computing, AI.", "Horizontal technologies resist sector-by-sector rules."],
    ["Deep tech", "Technology rooted in a scientific or engineering breakthrough rather than a business-model innovation. Long timelines, high capital, high technical risk.", "Quantum hardware, fusion, gene editing.", "Governance questions arrive years before products do."],
    ["Dual-use technology", "A technology with both beneficial civilian and harmful (often military or weapons) applications.", "Quantum computing (cryptanalysis), synthetic biology, drones.", "Brings in export controls and security agencies alongside civilian regulators."],
    ["Exponential technology", "One whose performance or cost improves at a compounding rate.", "Genome sequencing costs; AI compute.", "The source of the ‘pacing problem’ (§4)."],
    ["Convergence", "The combination of two or more frontier technologies into new capabilities.", "AI-designed proteins; AI-controlled robots (‘physical AI’).", "Falls between regulators and between Forum teams; a core reason for a cross-cutting workstream."],
    ["Fourth Industrial Revolution (4IR)", "The Forum’s term (Klaus Schwab, 2016) for the fusion of physical, digital and biological technologies.", "Origin of the C4IR network’s name.", "Useful to recognise; the Forum now more often speaks of the ‘Intelligent Age’."],
  ]}},

  /* 2 */
  { h2: "2. How technologies mature and diffuse" },
  { p: "Governance has to meet a technology at the right point in its life. Five models give you the language to say where a technology is and what that implies." },
  { h3: "2.1 Technology Readiness Levels (TRL 1–9)" },
  { p: "Originally developed by NASA and now standard in R&D funding and procurement, TRLs score maturity from basic principles to proven operation." },
  { table: { head: ["Band", "Levels", "What it means"], widths: [2200, 1400, 5760], rows: [
    ["Research", "TRL 1–3", "Basic principles observed; concept formulated; experimental proof of concept."],
    ["Development", "TRL 4–6", "Validated in the lab, then in a relevant environment; prototype demonstrated."],
    ["Deployment", "TRL 7–9", "Prototype in operational environment; system complete and qualified; proven in operation."],
  ]}},
  { h3: "2.2 The adoption S-curve" },
  { p: "Adoption is slow at first, accelerates through a steep growth phase, then plateaus. The instrument should follow the curve: foresight and dialogue early, standards and clear rules as adoption steepens, and review and adjustment at maturity." },
  { h3: "2.3 The hype cycle" },
  { p: "Gartner’s model: a trigger, a peak of inflated expectations, a trough of disillusionment, a slope of enlightenment, and a plateau of productivity. Its governance lesson is to avoid both over-regulating at the peak and neglecting a technology in the trough, when it is often maturing quietly." },
  { h3: "2.4 Diffusion of innovations" },
  { p: "Everett Rogers: adoption spreads from innovators to early adopters, early majority, late majority and laggards. The gap between enthusiasts and the mainstream (Geoffrey Moore’s ‘chasm’) is often bridged by trust, standards and clear rules, which is why good governance can accelerate adoption rather than slow it." },
  { h3: "2.5 The productivity J-curve" },
  { p: "General-purpose technologies often depress measured productivity for years while organisations re-tool around them, before gains appear. This is why their long-run impact, and the case for governing them well early, is chronically underestimated." },
  { h3: "2.6 Where the Forum’s frontier domains sit today" },
  { p: "Approximate positions as of 2026, to be used directionally:" },
  { table: { head: ["Domain", "Most mature application", "Least mature application"], widths: [2300, 3530, 3530], rows: [
    ["Quantum", "Post-quantum cryptography: standardised and being deployed. Some quantum sensing is commercial.", "Fault-tolerant quantum computing: prototypes of error-corrected logical qubits; useful scale targeted for roughly 2029–2033."],
    ["Autonomous mobility and robotics", "Robotaxis in defined areas (hundreds of thousands of paid rides a week in the US and China); industrial robots and cobots.", "Personal driverless cars; general-purpose humanoid robots (pilot stage)."],
    ["Biotechnology", "Approved gene therapies; mRNA vaccines; established biomanufacturing.", "AI-designed biology at scale; widespread engineered organisms in the environment."],
    ["Space", "Satellite communications, navigation and Earth observation.", "In-space manufacturing and resource extraction."],
  ]}},

  /* 3 */
  { h2: "3. The governance vocabulary" },
  { p: "Muddling these terms is a tell. The hierarchy, from narrowest to broadest:" },
  { b: [
    "**Policy:** a government’s stated objectives and intended course of action.",
    "**Law (legislation):** binding rules enacted by a legislature.",
    "**Regulation:** detailed, often technical rules made by agencies under powers delegated by law, together with their enforcement.",
    "**Standards:** technical specifications, usually voluntary, developed by bodies such as ISO, IEC, IEEE or CEN-CENELEC. They gain legal force when a law references them.",
    "**Norms:** shared expectations of appropriate behaviour, enforced by reputation rather than sanction.",
    "**Governance:** the broadest term. The whole system of rules, norms, institutions, standards and processes, public and private, through which behaviour is steered. Frontier-technology governance deliberately includes far more than law, which is why an organisation without regulatory power, such as the Forum, can play a central role in it.",
  ]},
  { h3: "3.1 Hard law and soft law" },
  { p: "Hard law is binding and enforceable. Soft law covers non-binding instruments that still shape behaviour: principles, codes of conduct, guidelines, frameworks and voluntary standards. For fast-moving technologies, soft law often comes first and hardens later: the OECD AI Principles (2019) informed binding national and EU rules; voluntary codes of practice are used to operationalise the EU AI Act. Most of what the Forum produces is soft law in this sense." },
  { h3: "3.2 Ex ante and ex post" },
  { p: "Ex ante governance acts before deployment (licensing, certification, conformity assessment, bans). Ex post governance acts after harm (liability, enforcement, redress). Frontier technologies push towards ex ante measures where harm could be irreversible, and towards ex post where evidence of harm is needed before rules can be well designed." },
  { h3: "3.3 Families of regulatory approach" },
  { table: { head: ["Approach", "What it does", "Strength", "Weakness"], widths: [2100, 3000, 2130, 2130], rows: [
    ["Prescriptive (command-and-control)", "Specifies exactly what is required or forbidden.", "Clear, enforceable.", "Rigid; dates quickly."],
    ["Principles-based", "Sets high-level principles that firms must meet.", "Flexible, durable.", "Less predictable; needs capable regulators."],
    ["Outcome- or performance-based", "Specifies the result, not the method.", "Leaves room to innovate.", "Outcomes must be measurable."],
    ["Risk-based", "Scales obligations to the level of risk.", "Focuses scarce effort.", "Depends on good risk classification."],
    ["Management-based", "Requires internal processes (risk management, audits).", "Scales oversight.", "Can become box-ticking."],
    ["Self- and co-regulation", "Industry sets or enforces rules, alone or with the state.", "Fast, expert.", "Risk of capture; weak sanctions."],
  ]}},
  { h3: "3.4 The regulatory lifecycle" },
  { p: "Any rule moves through the same stages: agenda-setting; design and appraisal (options analysed through a Regulatory Impact Assessment of costs, benefits and alternatives); adoption; implementation and enforcement; and monitoring and ex post review. Much of ‘regulatory innovation’ is about making this cycle faster, more evidence-based and genuinely iterative." },

  /* 4 */
  { h2: "4. Why frontier technologies strain governance" },
  { p: "Six structural features make frontier technologies hard to govern. Together they form a reliable opening structure for almost any governance question." },
  { table: { head: ["Feature", "What happens"], widths: [2300, 7060], rows: [
    ["Pace", "The technology changes faster than legislative and regulatory cycles. Gary Marchant named this the ‘pacing problem’."],
    ["Uncertainty", "Impacts are hard to foresee while a technology is still easy to shape, and hard to change once they are clear. David Collingridge (1980) called this the dilemma of control, now known as the Collingridge dilemma."],
    ["Information asymmetry", "Developers understand the technology far better than regulators, who often lack in-house technical capacity."],
    ["Dual-use and general-purpose character", "The same capability can serve benefit and harm, and spreads across sectors, defeating narrow sectoral rules."],
    ["Borderlessness", "The technology crosses jurisdictions; regulators do not. The result is fragmentation, duplication and forum-shopping."],
    ["Concentration", "Capability, data, compute and capital concentrate in a few firms and states, raising questions of accountability, access and power."],
  ]}},
  { h3: "4.1 Three clocks: technology, regulation and society" },
  { p: "A useful way to express the problem is that three clocks run at different speeds. The technology clock (how fast capability matures), the regulatory clock (how fast institutions can understand, decide and adapt), and the societal clock (how fast public trust, skills and institutions adjust). Governance fails when the clocks drift too far apart: rules arrive too late, or too early and wrongly calibrated, or adoption outruns public acceptance and triggers backlash. Integrating regulatory thinking early (§6) is an attempt to keep the clocks closer together." },

  /* 5 */
  { h2: "5. Regulatory innovation: what it means and who does what" },
  { p: "Regulatory innovation means changing *how* rules are made and applied so that they keep pace with technology while still protecting people. It is practised by governments and regulators. Organisations like the Forum contribute by convening, synthesising evidence across jurisdictions and co-designing frameworks, not by regulating." },
  { h3: "5.1 The five principles of agile regulation" },
  { p: "The most widely used framing comes from Deloitte’s The Future of Regulation (Eggers, Turley and Kishnani, 2018), later echoed in the Forum’s Agile Regulation for the Fourth Industrial Revolution: A Toolkit for Regulators (2020):" },
  { table: { head: ["Principle", "Meaning"], widths: [2600, 6760], rows: [
    ["Adaptive regulation", "Rules designed to be revisited as evidence accumulates: regulate, monitor, iterate."],
    ["Regulatory sandboxes", "Time-limited, supervised testing of innovations with real users under adjusted rules (see §5.2)."],
    ["Outcome-based regulation", "Specify the result required, not the method."],
    ["Risk-weighted regulation", "Concentrate effort where potential harm is greatest."],
    ["Collaborative regulation", "Align rules across regulators and borders, and involve industry and other stakeholders in their design."],
  ]}},
  { h3: "5.2 Regulatory sandboxes (a government instrument)" },
  { p: "A sandbox lets a regulator allow firms to test a product with real customers under supervision, with some rules adjusted and safeguards in place. The UK Financial Conduct Authority launched the first in 2016; by 2025 there were over 60 technology-related sandboxes worldwide, around 31 of them national AI sandboxes (Datasphere Initiative). The EU AI Act requires each member state to have at least one AI sandbox operational by August 2026. Evidence is positive but narrow: firms in the UK sandbox raised about 15% more capital and were about 50% more likely to raise capital, but there is little evidence that sandboxes improve regulation more broadly, and critics point to unequal treatment between participants and non-participants. You need to understand sandboxes because regulators in your community will use them; designing them is not the Forum’s role." },
  { h3: "5.3 Anticipatory governance" },
  { p: "The mindset behind regulatory innovation: act while a technology is still shapeable, using three capabilities. Foresight (horizon scanning and scenarios to see what is coming); experimentation (pilots, testbeds and sandboxes that generate evidence before rules are fixed); and learning (feedback loops, sunset clauses and mandatory reviews that turn evidence into revised rules). The OECD is the reference institution for this work." },
  { h3: "5.4 Who does what" },
  { table: { head: ["Actor", "Role in regulatory innovation"], widths: [2700, 6660], rows: [
    ["Legislatures and governments", "Set mandates and objectives; adopt law and strategy."],
    ["Regulators", "Make and enforce detailed rules; run sandboxes and pilots; issue guidance."],
    ["Standards bodies", "Specify the technical detail that rules reference."],
    ["Industry", "Comply, self-regulate, provide technical expertise, and bear most of the cost of fragmentation."],
    ["Academia and civil society", "Provide evidence, independent scrutiny and legitimacy."],
    ["International organisations (OECD, UN bodies, G7/G20)", "Develop shared principles and support cross-border alignment."],
    ["The World Economic Forum", "Convenes public and private actors; co-designs principles, frameworks, toolkits and blueprints; synthesises evidence across jurisdictions; pilots frameworks with governments through the C4IR network; sustains communities of practice."],
  ]}},

  /* 6 */
  { h2: "6. Integrating regulatory thinking early" },
  { p: "This phrase in the JD is the conceptual core of the role. It rests on three established ideas." },
  { b: [
    "**Responsible Research and Innovation (RRI).** A framework from the science-policy literature (Stilgoe, Owen and Macnaghten, 2013) built on four dimensions: anticipation (what could this lead to?), inclusion (who should have a say?), reflexivity (what assumptions are we making?) and responsiveness (can we change course?).",
    "**Governance by design.** Considering safety, security, ethics and compliance requirements at the design stage of a technology or programme, rather than retrofitting them. Security-by-design and privacy-by-design are familiar examples.",
    "**Regulatory foresight.** Anticipating which regulatory questions a technology will raise, and when, so that the evidence and relationships needed to answer them are in place before the questions become urgent.",
  ]},
  { h3: "6.1 Governance questions change with maturity" },
  { p: "The most practical way to apply the idea is to recognise that each stage of maturity raises different governance questions. Addressing them in advance is what ‘early’ means." },
  { table: { head: ["Stage", "Typical governance questions"], widths: [2400, 6960], rows: [
    ["Research (TRL 1–3)", "Research security and dual-use; export controls on know-how; ethics of experimentation; openness versus protection of research."],
    ["Development and pilots (TRL 4–6)", "Permission to test in the real world; safety evidence regulators will need; data access; who is liable during trials."],
    ["Early commercial deployment (TRL 7–9)", "Standards and certification; consumer protection; liability; sector-specific rules; public trust."],
    ["Scale", "Market structure and competition; interoperability across jurisdictions; workforce impacts; equitable access; environmental footprint."],
  ]}},
  { h3: "6.2 What it looks like inside a Forum programme" },
  { p: "In practice, integrating regulatory thinking early into a Forum technology programme means asking a short set of questions when the programme is being designed, not when its report is being written:" },
  { n: [
    "Which regulators and ministries have, or will claim, jurisdiction over this technology?",
    "Which governance questions are live now, and which will become live in the next three to five years?",
    "Where are jurisdictions already diverging, and what would that divergence cost?",
    "What evidence would regulators need to act well, and can this programme generate it?",
    "Which stakeholders are missing from the programme’s community, particularly regulators, legal and compliance leaders, civil society and the Global South?",
    "What would a practical output for regulators look like, and how would it reach them?",
  ]},
  { callout: [
    "**The distinction to hold:** integrating regulatory thinking early does not mean regulating early. It means making sure the governance questions, the evidence and the right people are in the room while choices are still open.",
  ]},
  { pageBreak: true },
);

module.exports = { blocks };
