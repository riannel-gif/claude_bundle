// Part B, section 3: Cases 2-4 (structured answers).
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  /* Case 2 */
  { h2: "Case 2 · Extending the Model Across All Frontier-Technology Teams" },
  { p: "**Prompt:** “The role is meant to work across all the frontier-technology teams. How would you organise that, as one person, by May 2027?”" },
  { h3: "Answer first" },
  { p: "Work in depth with one team at a time, starting with quantum, while giving every other team a light version of the method at the point where it matters most (programme scoping). Sequence the teams by explicit criteria, and treat the documented method, not the number of teams touched, as the real deliverable." },
  { h3: "1. Three possible operating models" },
  { table: { head: ["Model", "How it works", "Strength", "Weakness"], widths: [1900, 3000, 2230, 2230], rows: [
    ["Embedded partnership", "The Lead works inside one team’s programme for a period, co-owning a piece of work.", "Deep value; real trust; produces evidence the model works.", "Covers one team at a time."],
    ["Central service", "Teams request governance input as needed (reviews, introductions to regulators).", "Broad coverage; low cost per team.", "Shallow; governance stays an afterthought."],
    ["Community of practice", "A cross-team network sharing governance approaches and regulator contacts.", "Sustainable; builds internal capability.", "Slow to show impact; needs an anchor."],
  ]}},
  { p: "**Recommendation:** a hybrid. Embedded partnership with one team at a time (quantum first); a light ‘scoping check’ offered to every team (the six governance questions from Part A, Part I §6.2, applied when a programme is designed); and a community of practice started in the final phase, so the approach survives the contract." },
  { h3: "2. Sequencing the teams" },
  { table: { head: ["Criterion", "Quantum", "Autonomous mobility and robotics", "Biotechnology", "Planetary systems"], widths: [2100, 1810, 1810, 1820, 1820], rows: [
    ["Live decision window", "High: migration deadlines to 2035.", "High: UK, US, China and UNECE rules moving now.", "Medium-high: EU Biotech Act, NGT rules, US security measures.", "Medium: debris guidance; less defined."],
    ["Existing regulatory-facing work", "High: FCA collaboration (2024).", "High: 2026 paper on regulatory diversity.", "Medium: Policy Maturity Index.", "Medium: Space Sustainability Rating precedent."],
    ["Partner readiness", "Expected to be high (confirmed first collaboration).", "To confirm.", "To confirm; AI-bio needs the Centre for AI Excellence.", "Scope to confirm."],
    ["Replicability of lessons", "High: clean regulatory-coherence problem.", "High: shared-learning model transfers.", "Medium: more sensitive domain.", "Medium."],
  ]}},
  { p: "**Sequence:** quantum, then autonomous mobility and robotics, then biotechnology (with the AI Centre on the AI-bio convergence), with planetary systems kept light until its scope and decision windows are clearer. Realistically, by May 2027 this means one collaboration completed and a second well under way; claiming more would not be credible." },
  { h3: "3. The reusable method (what gets documented)" },
  { n: [
    "**Scoping questions:** the six questions for integrating governance into programme design.",
    "**Governance issue map:** a standard template (issue, stakes, active actors, gap), as used for quantum in Part A.",
    "**Stakeholder sequencing:** anchor regulator first, then industry (technical plus legal and compliance), then standards bodies, then civil society and under-represented jurisdictions.",
    "**Output selection:** matching the product type to the situation (principles, readiness toolkit, regulator-facing paper, cross-jurisdiction synthesis, pilot), as in Part A, Part IV §4 and §6.",
    "**After-action review:** conditions, sequencing, failures, replication brief.",
  ]},
  { h3: "4. Making one person go further" },
  { p: "Use the leverage the Forum already has: the teams’ own communities, knowledge partners on specific outputs, C4IR centres for pilots, the GRIP team’s government relationships, and the Centres for AI Excellence and Cybersecurity for convergence and security questions. Say no to things outside scope: writing regulation, running parallel communities, or starting collaborations that cannot be finished." },

  /* Case 3 */
  { h2: "Case 3 · Humanoid Robots Before the Rules" },
  { p: "**Prompt:** “General-purpose and humanoid robots are moving into warehouses, shops and eventually homes faster than any governance framework. What should the Forum do, and how would you work with the robotics team?”" },
  { h3: "Answer first" },
  { p: "This is the textbook case for integrating governance early. The technology is at pilot stage, the market is scaling fast (especially in China), and existing safety rules were written for fenced industrial robots. The Forum’s best contribution is a shared, evidence-based view of what responsible deployment in shared spaces requires, built with the people who will deploy, regulate and work alongside these machines, before incidents and divergent national rules set the terms." },
  { h3: "1. Diagnosis: what governance questions arise, and when" },
  { table: { head: ["Stage", "Setting", "Governance questions"], widths: [1700, 2400, 5260], rows: [
    ["Now: pilots", "Warehouses and factories.", "Worker safety alongside mobile, dynamically balancing robots; incident reporting; data from cameras and sensors in workplaces."],
    ["Next: early commercial", "Retail, hospitality, healthcare support.", "Interaction with the public; liability; cybersecurity (a hacked robot is a physical risk); accessibility."],
    ["Later: scale", "Homes and care.", "Privacy inside homes; safety with children and vulnerable people; consumer protection; labour-market impacts."],
  ]}},
  { h3: "2. Landscape" },
  { p: "Standards exist for industrial robots (ISO 10218, revised 2025) and collaborative robots (ISO/TS 15066), and work on dynamically stable mobile robots is emerging. China published a national standard system for humanoid robots and embodied intelligence in February 2026. The EU’s Machinery Regulation (applying from January 2027) and AI Act will cover many AI-enabled robots, and product liability now extends to software. No jurisdiction has a dedicated framework for general-purpose robots in public or domestic spaces." },
  { h3: "3. Proposed approach" },
  { n: [
    "**Evidence first.** Gather deployment evidence from companies already piloting humanoids, drawing on the Forum’s industrial-operations communities (including the Global Lighthouse Network of advanced manufacturing sites), so the work is grounded in what actually happens on the floor.",
    "**Cross-jurisdiction synthesis.** Compare emerging approaches (China’s standard system, EU machinery and AI rules, ISO work, US occupational-safety practice) to show regulators where they converge and diverge.",
    "**Co-developed deployment principles.** With operators, manufacturers, standards bodies, occupational-safety and product-safety regulators, insurers and worker representatives: what responsible deployment in shared spaces requires at each stage.",
    "**Pilot and learn.** Test the principles with one or two operators and a C4IR centre (Abu Dhabi lists robotics as a focus area).",
  ]},
  { h3: "4. Key dependencies and risks" },
  { p: "Worker representatives must be involved from the start: principles designed without them will lack legitimacy where adoption matters most. Regulators need to be present before principles are drafted, or they will treat the output as industry self-regulation. Risks: hype cycles (humanoid timelines are contested), US-China divergence in standards, and the perception of the Forum as a promotional platform for robot makers." },

  /* Case 4 */
  { h2: "Case 4 · AI-Designed Biology Between Two Teams" },
  { p: "**Prompt:** “AI models can now design proteins and genetic sequences. The issue sits between the Centre for AI Excellence and the biotechnology team. What would you propose?”" },
  { h3: "Answer first" },
  { p: "Treat it as a chain that needs to be governed as a whole: safeguards in AI models, screening by DNA-synthesis providers, and verification of customers, across countries. Each link is currently governed separately, by different actors, with different standards. The Forum’s contribution is to convene the three links, with security agencies, and help build interoperable expectations; the cross-cutting workstream is the natural home precisely because neither team owns it alone." },
  { h3: "1. The governance chain" },
  { table: { head: ["Link", "Current state", "Gap"], widths: [2200, 3700, 3460], rows: [
    ["AI model safeguards", "Frontier AI developers run biosecurity evaluations; practices vary; open-weight biological models raise specific questions.", "Shared expectations for evaluation and access controls on biological design tools."],
    ["DNA-synthesis screening", "Industry screening (International Gene Synthesis Consortium), IBBIS, US and UK guidance; screening largely compares orders to known threats.", "Function-based screening that can catch novel AI-designed sequences; coverage of benchtop synthesisers."],
    ["Customer verification", "Varies by provider and country.", "Common know-your-customer standards across jurisdictions."],
    ["International layer", "Biological Weapons Convention without verification.", "Practical cooperation among national biosecurity authorities."],
  ]}},
  { h3: "2. Proposed approach and sequencing" },
  { n: [
    "**Agree ownership internally first:** a joint approach with the Centre for AI Excellence and the biotechnology team, so the Forum speaks with one voice.",
    "**Start closed-door:** an off-the-record dialogue with national biosecurity authorities and leading AI developers and synthesis providers, because the topic involves information hazards and security sensitivities.",
    "**Build on existing actors rather than duplicate them:** connect with IBBIS, industry screening consortia and biosecurity NGOs; the Forum adds reach across AI companies, governments and industry.",
    "**Aim for interoperable principles** linking the three links, and a handover to an institutional owner (for example a standards process or an existing biosecurity initiative).",
  ]},
  { h3: "3. The judgement to show" },
  { p: "This is a domain where soft law has limits: the downside is catastrophic and actors can defect. The honest position is that voluntary principles are a starting point to build consensus and evidence, while some elements (such as screening requirements) will likely need to become binding through governments. Knowing when a convening approach is sufficient, and when it is only the first step, is part of the job." },
  { pageBreak: true },
);

module.exports = { blocks };
