// Part B, section 2: the panel interview, JD-driven question bank.
const blocks = [];
const push = (...b) => blocks.push(...b);

const Q = (id, q, testing, ans, avoid) => {
  push({ h3: `${id}. ${q}` });
  push({ p: `**What they are testing:** ${testing}` });
  ans.forEach((a, i) => push({ p: i === 0 ? `**Model answer:** ${a}` : a }));
  if (avoid) push({ p: `**Avoid:** ${avoid}` });
};

push(
  { h1: "B2 · The Panel Interview" },
  { lead: "The panel will be run by people trained to probe structure and substance. Expect questions grouped around the JD’s three responsibility areas, technical probes on quantum and the other domains, evidence from your past, and one or two judgement curveballs." },
  { h2: "How to answer a consultant panel" },
  { b: [
    "**Lead with the answer,** then give two or three supporting points, then the detail if asked.",
    "**Be specific to the Forum:** name the team, the existing output, the regulator, the deadline. Specificity is the clearest signal that you have done the work.",
    "**Name the trade-off** you are making, and why.",
    "**End with the next step:** what you would actually do first.",
    "**Respect the timeline:** the contract runs to May 2027, which means a tenure of perhaps six to eight months. Plans that fit that window will read as realistic; plans that need three years will not.",
  ]},

  { h2: "A. Strategy and collaboration" },
);

Q("A1", "How would you set up this workstream in your first 100 days?",
  "Structure, realism, and whether you would start with the teams rather than around them.",
  ["I would start with one collaboration done properly rather than four done thinly, and that should be quantum. In the first month I would listen and map: meet the quantum, autonomous mobility and robotics, biotechnology and planetary-systems teams, the Centres for AI Excellence and Cybersecurity, and the GRIP team; inventory what each has already produced; and map the regulators and decision windows around each technology.",
   "In the second month I would agree a short collaboration charter with the quantum team (scope, who leads what, decision rights and credit), choose one priority governance question with them, and secure an anchor regulator. My hypothesis is that the question is coherence of the quantum-safe transition beyond finance and across jurisdictions, building on the team’s 2024 work with the UK FCA, but the team owns its agenda, so I would test that.",
   "In the third month I would run the first working session and start the knowledge product, while documenting the method as I go, so the second team collaboration starts from a template rather than a blank page. Case 1 sets this out in full."],
  "A plan that starts with external events before the internal partnership is agreed.");

Q("A2", "What is your vision for this workstream, and what does success look like by May 2027?",
  "Whether you can think beyond activities to a durable change.",
  ["The vision is that governance becomes part of how the Forum’s frontier-technology programmes are designed, rather than an afterthought, and that the Forum becomes the place where jurisdictions compare notes on governing frontier technologies. By May 2027, success would be concrete: a collaboration with the quantum team that has produced a regulator-facing output with a named regulator community behind it; a second collaboration under way, most likely with autonomous mobility and robotics given the team’s 2026 work on regulatory diversity; and a documented method the Forum can keep using after my contract ends. I would measure adoption and outcomes, for instance regulators or companies using the output, rather than the number of meetings held."],
  null);

Q("A3", "How would you work with the quantum team without becoming an extra layer?",
  "Matrix instinct and humility towards technical teams.",
  ["By making their work more useful rather than adding process. The quantum team owns the technology agenda and its community; I would bring three things it does not have in-house: a regulator network through GRIP, a cross-jurisdiction view of how rules are diverging, and the craft of turning technical findings into something a supervisor can act on. Practically, that means co-owning a defined piece of work, crediting the team in everything external, joining their existing community rather than creating a parallel one, and agreeing at the start how decisions are made. If I cannot show value in their terms within a few months, I would be the extra layer, and I should be told so."],
  "Positioning yourself as the team’s governance supervisor.");

Q("A4", "The JD talks about integrating regulatory thinking early in technology development and programme design. What does that mean in practice?",
  "Whether you can turn a phrase into a method.",
  ["It does not mean regulating early; it means asking the governance questions while choices are still open. Concretely, when a Forum technology programme is being scoped I would want six questions answered: which regulators have or will claim jurisdiction; which governance questions are live now and which will be in three to five years; where jurisdictions are already diverging; what evidence regulators would need to act well, and whether the programme could generate it; who is missing from the community (regulators, legal and compliance leaders, civil society, the Global South); and what a practical output for regulators would look like and how it would reach them. For quantum today, the live question is the security transition; quantum sensing is the next one and has almost no governance framework, which is exactly where early integration pays off."],
  null);

Q("A5", "There are four technology teams and one of you. How do you prioritise?",
  "Prioritisation with explicit criteria, which consultants value highly.",
  ["I would use four criteria: a live decision window, when regulators are actually deciding something; existing regulatory-facing work to build on; a willing team and at least one regulator ready to engage; and replicability, meaning the lessons transfer to the next team. On those criteria quantum comes first: hard deadlines to 2035 and a precedent with the FCA. Autonomous mobility and robotics comes second: the team’s 2026 paper already frames regulatory diversity as the problem, national rules are moving fast, and humanoid robots are arriving before any framework. Biotechnology is third, where the AI-bio convergence would also involve the Centre for AI Excellence. For planetary systems I would stay light-touch until its scope and decision windows are clearer. The trade-off is depth over breadth, which I think is right for a build phase."],
  null);

push({ h2: "B. Thought leadership and content" });

Q("B1", "What would be the first knowledge product you would develop with the quantum team, and why?",
  "Judgement about what the Forum should publish and why it would matter.",
  ["My hypothesis would be a regulator-facing output on coherence in the quantum-safe transition across jurisdictions and critical sectors. The reasoning: the direction is agreed (start now, finish by 2035), but dates, algorithm choices, hybrid requirements and supervisory expectations differ between the US, EU, UK and others, and the Forum’s existing regulator-facing work covers only finance with one regulator. The output could combine a crosswalk of national requirements, a small set of shared principles for supervisors in telecommunications, energy, health and government services, and practical guidance on the hard cases such as long-lived devices. It should be co-developed with a working group of cybersecurity agencies, sector regulators and legal and compliance leaders, and timed to the decision windows: EU member states starting by end-2026, UK discovery by 2028. I would test all of this with the quantum team first; they may see a sharper gap."],
  "Proposing a generic ‘state of quantum’ report the Forum already has variants of.");

Q("B2", "How do you make a knowledge product action-oriented rather than something that sits on a shelf?",
  "Understanding of adoption, not just authorship.",
  ["Five conditions. Co-design with the people who will use it, including regulators, from the start rather than at launch. Timing to a real decision, such as a strategy being drafted or a deadline approaching. Specificity: checklists, model approaches, worked cases, rather than analysis alone. A route to adoption: a government counterpart, a C4IR pilot or a community that will carry it. And a handover plan so it has an owner after launch. The Space Sustainability Rating is a good precedent: incubated by the Forum and now run independently by EPFL."],
  null);

Q("B3", "How would you keep track of global regulatory and technology developments across four domains?",
  "Whether you have a system.",
  ["A light but disciplined system with three layers. Structured sources: regulator and standards-body outputs (NIST, ENISA, national cybersecurity agencies, UNECE, the EU and national legislatures), specialist trackers, and the teams’ own communities. People: a small network of regulators and practitioners per domain who will tell me what is coming before it is published, which is where the Forum’s communities are an advantage. And a cadence: a short monthly horizon note per domain for the teams, flagging decisions coming up in the next six to twelve months, because the aim is to catch decision windows, not to summarise news."],
  null);

Q("B4", "In 2025 a Google researcher estimated RSA-2048 could be broken with under a million qubits. What does that mean for a government?",
  "Translating a technical development into governance insight.",
  ["Three things. First, the resource estimate has fallen twentyfold in six years (from about 20 million qubits in 2019), so the planning assumption should be that the threshold keeps falling; no such machine exists today, but the trend matters more than the current state. Second, it does not change what governments must do, it changes the urgency: by Mosca’s theorem, if data must stay secret for twenty years and migration takes ten, you are already late, and harvest-now-decrypt-later means data taken today is at risk. Third, the practical response is to fund and enforce the migration they have already announced: cryptographic inventories now, priority systems by around 2030, and attention to long-lived infrastructure and to sectors with weak capacity. The governance lesson is to plan to deadlines, not to predictions of Q-Day."],
  null);

push({ h2: "C. Partnerships and stakeholder engagement" });

Q("C1", "How would you build the multistakeholder community for this work? Who comes first?",
  "Whether you understand sequencing of commitments.",
  ["I would sequence it rather than invite everyone at once. First, one or two anchor regulators willing to co-lead, because companies engage seriously when regulators are in the room. Second, companies that bear the cost of fragmentation, represented by both technical leaders and their chief legal and compliance officers. Third, the technical community and standards bodies, so the work stays grounded. Fourth, civil society and under-represented jurisdictions, including from the Global South, early enough to shape the work, not just review it. Where possible I would build on the quantum team’s existing network rather than create a parallel one. This is the same logic I used when advising on the sequencing of new platforms in the Gulf: identify the first commitments that make the others follow."],
  null);

Q("C2", "What do Chief Legal Officers and Chief Compliance Officers want from work like this, and how would you engage them?",
  "Understanding of the JD’s named communities.",
  ["They want predictability and early warning: what regulators will expect, by when, and how requirements differ across the markets they operate in. They also want a credible channel to explain implementation realities to regulators. So the offer to them is a seat in shaping regulator-facing outputs, early sight of emerging expectations, and peer exchange with counterparts facing the same problem. I would engage them through the Forum’s existing CLO and CCO communities, with a focused ask tied to a live issue, such as how to evidence post-quantum readiness to supervisors, rather than a general invitation."],
  null);

Q("C3", "How would you design a high-level dialogue that produces an outcome rather than a conversation?",
  "Convening craft.",
  ["Design backwards from the decision. Before the session, agree the specific outcome wanted and who can commit to it; circulate a short draft (principles, options or a proposal) so the discussion reacts to something concrete; and make sure the people in the room can actually decide or commit. In the session, spend most of the time on the one or two contested points, not on presentations. Afterwards, send a written summary of what was agreed within days, with owners and a follow-up date. A dialogue without a draft on the table and a follow-up mechanism is a conversation."],
  null);

Q("C4", "How would you work with the C4IR network, for example the new Abu Dhabi Centre for Frontier Technologies?",
  "Understanding of how the Forum pilots with governments.",
  ["The centres are where frameworks meet a real government. For quantum, the Abu Dhabi centre is a natural partner, since quantum is one of its focus areas, and the Saudi centre has already piloted the Quantum Economy Blueprint. I would involve them early, ask what their government counterparts are actually trying to decide, and aim for one pilot where a government applies the output in practice, for instance a national readiness assessment for the quantum-safe transition. Their experience then feeds back into the global work, which is how the model becomes replicable."],
  null);

push({ h2: "D. Frontier-technology knowledge" });

Q("D1", "Explain the quantum threat to a General Counsel in two minutes.",
  "Clarity and accuracy for a non-technical senior audience.",
  ["Almost all digital trust today, from secure websites and payments to digital signatures on contracts and software, relies on a type of encryption that a large enough quantum computer could break. That machine does not exist yet, and expert estimates of when it might range from roughly the early 2030s to much later. But there are two reasons to act now. First, data stolen today can be decrypted later, so anything that must stay confidential for years is already exposed. Second, replacing encryption across an organisation and its suppliers takes many years. Governments have set deadlines: the US, EU and UK expect high-risk systems migrated around 2030 and everything by 2035, and regulators will expect firms to show progress. For a General Counsel the practical questions are: do we know where we use this cryptography, have we asked our suppliers about their plans, and who owns this risk at board level?"],
  "Explaining qubits; the General Counsel needs exposure, timeline and actions.");

Q("D2", "Quantum key distribution or post-quantum cryptography: what should governments back?",
  "Whether you know a real expert debate.",
  ["For most purposes, post-quantum cryptography. It runs on existing hardware and networks, is standardised (NIST’s 2024 standards), and can be deployed at scale through software and firmware updates. QKD offers security grounded in physics but needs dedicated hardware, is limited in distance without trusted relay nodes, and still depends on classical methods for authentication, which is why the US NSA, the UK NCSC and France’s ANSSI treat it as a niche complement. China and parts of the EU are investing heavily in QKD infrastructure, so the honest answer is PQC as the backbone and QKD for specific high-value links, with the choice itself becoming a point of international divergence."],
  null);

Q("D3", "Where is quantum computing really, and when will it matter commercially?",
  "Calibrated judgement rather than hype or dismissal.",
  ["We are at the point where error correction has been shown to work. Google demonstrated in late 2024 that errors fall as the error-correcting code grows, and Quantinuum ran 48 error-corrected logical qubits in 2025. Published roadmaps target early fault-tolerant machines around 2029 to 2033, IBM’s being 200 logical qubits by 2029. Commercial value will come first in simulating chemistry and materials; optimisation claims should be treated cautiously. Investment reached about $12.6 billion in 2025 and quantum computing revenues passed $1 billion. So: real, accelerating, but most transformative applications are late-decade at the earliest, and security is the near-term governance issue."],
  null);

Q("D4", "What is the most important governance issue in autonomous mobility and robotics right now?",
  "Whether your knowledge extends beyond quantum.",
  ["Two, at different stages. For autonomous vehicles, it is shared safety learning across jurisdictions. Robotaxis now operate at real scale (Waymo around half a million paid rides a week in the US, Baidu hundreds of thousands in China), but each country is building its own approval, liability and data-reporting regime; the team’s 2026 paper frames exactly this move from regulatory diversity to shared learning, and aviation shows how powerful cross-border incident learning can be. For robotics, it is humanoid and general-purpose robots entering workplaces and homes before any framework exists; existing safety standards were written for fenced industrial robots. That is a textbook case for integrating governance early."],
  null);

Q("D5", "What governance issue in biotechnology concerns you most?",
  "Judgement on a sensitive domain.",
  ["The convergence of AI and biology. AI models can now design proteins and propose novel genetic sequences, which accelerates medicine and biomanufacturing but also lowers barriers to misuse, and DNA-synthesis screening was designed to catch known threats, not novel designs. The governance response has to connect three layers that are currently governed separately: safeguards in AI models, screening by synthesis providers, and verification of customers, across countries. It sits between the Forum’s biotechnology work and the Centre for AI Excellence, which is precisely the kind of convergence a cross-cutting workstream exists to handle."],
  null);

Q("D6", "If you could only work on one technology convergence, which would it be?",
  "Strategic judgement and understanding of convergence.",
  ["AI and biology, because the potential harm is severe, the capability is diffusing fast, and no single regulator or Forum team owns it. A close second is physical AI, the combination of AI and robotics, because deployment is accelerating and existing product-safety and liability regimes were not designed for machines that learn. I would sequence convergence work after the first single-technology collaboration is established, so it builds on relationships rather than starting from scratch."],
  null);

push({ h2: "E. Fit and experience" });

Q("E1", "You don’t have a technical background in quantum or biotechnology. Why should we hire you?",
  "Self-awareness and a convincing case.",
  ["Because the role does not need another technical specialist; the Forum’s technology teams already have that expertise. It needs someone who understands the technologies well enough to see the governance questions, and who can connect those teams to regulators, companies and governments and turn the result into something used. That is what I have done: comparative regulatory analysis across jurisdictions as a lawyer, implementation guidance for governments at the UN, positioning frontier biotechnology within NEOM’s regulatory regime, and designing multistakeholder platforms with senior government leaders. And I have made a point of learning the technical substance properly. I can explain why error correction matters, or why AI-designed proteins strain synthesis screening, which is what earns a technical team’s trust."],
  null);

Q("E2", "Tell us about something you built from concept to implementation.",
  "Entrepreneurial track record (a JD requirement). Consultants will probe the detail.",
  ["Use your strongest real example: advising on the design and sequencing of one flagship platform at FGS, or building your current workstream and community. Structure it as: the starting point and why nothing existed; the design choices you made (who to involve first, what to sequence, what to leave out); the obstacles and how you handled them; the result, with evidence; and what you would do differently. Speak in the first person and be ready for ten follow-up questions on specifics: what exactly you proposed, who resisted, how you decided."],
  "Describing the organisation’s achievement rather than your own contribution.");

Q("E3", "Tell us about a multistakeholder project that didn’t go to plan.",
  "Honesty, learning, resilience.",
  ["Choose a genuine example where something stalled, a partner withdrew, or a convening failed to produce the outcome intended. Own your part of it clearly, explain what you learned, and show the specific thing you now do differently (for example, securing an anchor commitment before convening, or putting a written draft on the table). Panels trust candidates who can describe failure precisely."],
  null);

Q("E4", "Can an organisation that doesn’t regulate, like the Forum, really shape regulation?",
  "Understanding of the Forum’s theory of change and its critics.",
  ["Yes, but indirectly and only under conditions. The Forum shapes regulation by creating shared understanding before positions harden, by co-developing frameworks with regulators (the quantum security work with the FCA is an example), by showing regulators what other jurisdictions are doing, and by piloting approaches with governments through the C4IR network, as Rwanda did with performance-based drone rules. The critique is that multistakeholder processes can over-weight corporate voices; the answer is transparency, genuine inclusion of civil society and the Global South, and outputs that governments adopt through their own accountable processes. The Forum complements regulators; it does not substitute for them."],
  null);

push({ h2: "F. Judgement curveballs" });

Q("F1", "The quantum team tells you they don’t need a regulatory person. What do you do?",
  "Resilience and matrix skill.",
  ["I would take it seriously rather than argue. First, understand why: perhaps they feel they already cover regulators, or they have had a poor experience of ‘help’ that added work. Then offer something small and concrete that is clearly useful to them, for example a map of how post-quantum requirements differ across jurisdictions, or an introduction to regulators they have not reached. If that proves valuable, the collaboration follows; if it does not, I have learned where the real need is. I would also make sure the Head of Digital Inclusion and the team’s leadership agree on the purpose of the collaboration, so it is not left to persuasion alone."],
  null);

Q("F2", "A partner company wants to use a Forum dialogue to argue against a proposed regulation. How do you handle it?",
  "Integrity and neutrality.",
  ["The dialogue is a space for evidence and exchange, not advocacy for one member. I would welcome the company’s evidence on implementation costs or unintended effects, because regulators need that, but make sure it is heard alongside other perspectives and that no output presents one company’s position as the community’s view. If the aim is purely lobbying, I would say clearly that the Forum is not the right channel. The Forum’s value to regulators depends on being trusted as neutral."],
  null);

Q("F3", "A government asks the Forum to endorse its national quantum regulation. What do you advise?",
  "Understanding of the Forum’s role and limits, including sensitivity to partners.",
  ["The Forum does not endorse national regulation; doing so would compromise its neutrality with other governments. But there are valuable things it can do: help the government benchmark its approach against other jurisdictions, bring its regulators into the community so its experience informs others, and, if appropriate, support a pilot through a C4IR centre. I would propose that, and make sure the answer is given carefully and early, particularly with a close partner."],
  null);

Q("F4", "What would you not do in this role?",
  "Focus and a clear view of scope.",
  ["I would not write regulation or design regulatory instruments for governments; that is their role. I would not build GRIP’s index or flagship paper, which sit with the core team. I would not try to be the technical expert in each domain. And I would not start four collaborations at once. Saying no to those is what makes it possible to do the job well in a limited time."],
  null);

push({ pageBreak: true });

module.exports = { blocks };
