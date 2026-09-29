// Part B, section 2: panel interview, fully scripted.
const blocks = [];
const push = (...b) => blocks.push(...b);

const S = (id, q, testing, headline, paras, evidence) => {
  push({ h3: `${id}. ${q}` });
  push({ p: `**What they are testing:** ${testing}` });
  push({ p: `**Headline (20 seconds):** ${headline}` });
  paras.forEach((t, i) => push({ p: i === 0 ? `**Full answer:** ${t}` : t }));
  if (evidence) push({ p: `**Evidence used:** ${evidence}` });
};

push(
  { h1: "B2 · The Panel" },
  { lead: "A panel of former senior consultants will look for a point of view, a diagnosis of what the role must solve, realism about a short mandate, fluency on quantum, and evidence that you have built things. Every answer below leads with its headline. If interrupted, you should always have delivered the point already." },
  { h2: "Motivation and fit" },
);

S("P1", "Why this role, and why you?",
  "The flagship question. They want a point of view, a diagnosis of the Forum’s next problem, and a convincing match to your record.",
  "Because this role asks the question I have spent my career on (how you design the governance of a transformation rather than let it trail behind) at the moment the Forum needs to apply it to frontier technology. I have seen how transformations are sequenced, how regulators innovate under pressure, and what makes a regime credible enough for others to buy into. This role is where those three meet.",
  ["The first part is the intersection. The role sits where technology development, regulatory design and multistakeholder convening meet, and that is where I have worked from the start.",
   "My original area is how countries architect industry transformations. At IEEP in Brussels I worked on the ecosystem conditions and sequencing behind China’s renewable-energy build-out, to build a replication logic other countries could use. It taught me two things. First, what it takes: a transformation is an ecosystem problem (policy, capital, technology providers, skills), not a technology problem. Second, how to design it from the start: the state is decisive early, providing incentives and absorbing risk, but the design has to engineer the state’s own step-back, so the industry climbs the learning curve and becomes self-sufficient rather than dependent. Governance, in other words, is a design variable, not a constraint added afterwards.",
   "I then saw the opposite pattern with crypto. At Fortior in 2018 I advised clients while regulators were improvising: Switzerland’s FINMA published its token taxonomy that year, Abu Dhabi built one of the first crypto frameworks, and the FCA’s sandbox was admitting blockchain firms. Later, on a carbon-credit digital asset, I worked across the gap between Swiss and EU rules before MiCA existed. Crypto was the first frontier technology that forced regulators to innovate at speed, and it shows both outcomes. Jurisdictions that designed early and credibly, such as Switzerland and the UAE, attracted the industry; where rules were absent or divergent, arbitrage filled the space, with failures like FTX. The EU’s comprehensive regime applied only at the end of 2024, fifteen years after Bitcoin.",
   "At NEOM I worked on the other side of that equation: assessing what would make a greenfield project, including its regulatory environment, credible enough for foreign investors and companies to commit. That is where I understood that regulatory design has become a competitive asset. Capital goes where rules are predictable, interoperable with what investors already know, and backed by institutions that will still be there in ten years.",
   "How this relates to the role: GRIP has built the thesis that regulation is strategic infrastructure, and its core work on AI, health and finance is maturing. The next challenge is the harder one: making that thesis technology-specific, and embedding it in how the Forum’s frontier programmes are designed, without the Forum becoming a regulator. That is a sequencing and ecosystem problem, which is the problem I know.",
   "The added layer that makes it compelling is quantum as the starting point. It is one of the few technologies where governance can be ahead of the risk: the security transition has deadlines, 2030 and 2035, before a machine able to break today’s encryption exists, and the quantum team has already worked with a regulator, the FCA. The ingredients are there: convening power, a body of work, the C4IR network, the UAE partnership. The constraint is equally clear: the Forum has no authority, the teams own their agendas, and the mandate is short. You have to earn the right to integrate, which is the kind of problem I do my best work on.",
   "Why it matters: frontier technologies are where the largest gains and the largest risks now concentrate. Quantum simulation could change how we design medicines, batteries, fertiliser catalysts and materials for carbon capture. Whether those gains arrive early, safely and broadly depends less on the physics than on whether governance is designed in, or arrives late and fragmented, as it did with crypto.",
   "Lastly, what I would get from it: genuine technical depth, by working inside the teams that lead the Forum’s frontier work, and the experience of building a regulator community at global scale rather than in one market.",
   "So: I learned how transformations are sequenced through the China work, how regulators innovate under pressure through crypto, and what makes a regime credible at NEOM and inside the Forum. This role is where those three meet, starting with quantum."],
  "IEEP (thesis A); Fortior and Toco (crypto); NEOM (thesis C); the Forum’s next problem; quantum stakes; growth. About three and a half minutes in full: drop the NEOM or crypto paragraph if the panel is short of time, and keep the other for P13 or P22.");

S("P2", "What do you see as the hardest problem this role has to solve?",
  "Whether you can diagnose the Forum’s situation, as a consultant would diagnose a client’s.",
  "Earning the right to integrate. The Forum has the thesis and the teams have the technology agendas. The hard part is embedding governance in programmes owned by others, with no authority and a short mandate, in a way that outlasts the role.",
  ["Earning the right to integrate, and there are three layers to it.",
   "The first is value in the teams’ own terms. A technical team will only bring governance into its programme if it makes its own work more useful: more uptake by regulators, access to decision-makers it cannot reach, earlier sight of rules that will affect its community. If governance arrives as review or process, it will be politely ignored.",
   "The second is using the Forum’s comparative advantage precisely. The Forum does not write rules or set technical standards. Its edge is neutral convening across jurisdictions and early dialogue between regulators and industry. So the work has to target problems only a neutral convener can help with, such as regulatory divergence in the post-quantum transition, rather than problems a national regulator or a standards body will solve anyway.",
   "The third is replicability. A first collaboration that works but is bespoke would be a failure against the JD, which asks for a scalable model. So the method has to be documented as the work happens.",
   "The mechanism I would use is the one I know from industry transformation: GRIP’s role is intensive at the start and deliberately steps back, with explicit triggers, as the teams take ownership. If, by May 2027, the quantum team is running the governance work without me and a second team is starting from the method, the problem has been solved."],
  "Thesis A mechanism (state step-back); Forum comparative advantage (Part A, Part V §3.5).");

S("P3", "You don’t have a technical background in quantum or robotics. Why should we hire you?",
  "Self-awareness, and a convincing account of what the role really needs.",
  "Because the role needs a translator and an architect, not another technical specialist: the Forum’s teams already have that depth. What I bring is the pattern: how regulators handle a technology they do not yet understand, which I have seen first-hand with crypto, and how to build the structures that connect them to the people building it.",
  ["The Forum’s frontier-technology teams already have deep technical expertise and communities. What the role adds is the connection to regulators, companies and governments, and a method for doing that repeatedly. That is architecture and translation, and it is what my record shows.",
   "I have done comparative regulatory analysis across jurisdictions as a lawyer. I have watched regulators confront a technology they did not understand, with crypto, and seen what worked (early, credible design) and what did not (fragmentation and arbitrage). I have assessed what makes a greenfield regime credible to foreign investors, at NEOM. And I have designed multistakeholder platforms with senior government leaders.",
   "I have also done the work to be credible with technical teams. I can explain why Google’s 2024 result mattered (it showed error correction improving as systems scale), or why a 2025 estimate that cut the qubits needed to break RSA twentyfold changes the urgency of the post-quantum transition but not its direction.",
   "Where I do not know something, I will say so and bring in the people who do. With technical teams, that honesty is what earns trust; bluffing depth is what loses it."],
  "Crypto; NEOM; FGS; quantum fluency (Part A, Part III §1).");

push({ h2: "Strategy and collaboration" });

S("P4", "Walk us through your first 100 days.",
  "Structure, realism, and whether you would start inside the Forum before going outside.",
  "One collaboration done properly rather than four done thinly. Days one to thirty: diagnose. Thirty to sixty: agree the partnership and choose the question. Sixty to a hundred: prove value and start writing the method. By day 100 I would have a signed charter with the quantum team, a priority question with an anchor regulator, a first working session done, and a view on the sequence for the other teams.",
  ["My hypothesis is that the first 100 days should produce one collaboration done properly, not four done thinly, and I would structure them in three phases.",
   "Days one to thirty: diagnose. As an internal candidate I can skip most of the orientation, so this is focused. I would meet the leads of the quantum, autonomous mobility and robotics, biotechnology and planetary-systems teams, and the Centres for AI Excellence and Cybersecurity. I would inventory what each team has produced and which regulators it already works with. And I would map the decision windows for each technology: when regulators are actually deciding something.",
   "Days thirty to sixty: agree and choose. I would agree a short collaboration charter with the quantum team, covering scope, who leads what, decision rights and credit, and have it endorsed by the Head of Digital Inclusion. Nothing external happens before that, because convening without agreed roles would look like GRIP building a parallel track. With the team, I would choose one priority question against explicit criteria, and secure one or two regulators willing to co-lead, because industry commits when regulators are in the room.",
   "Days sixty to a hundred: prove and codify. I would run the first working session around a concrete draft, and start a method note recording every design choice, so the second collaboration starts from a template.",
   "What I would not do in the first 100 days: launch anything publicly, start a second collaboration, or create a new community parallel to the quantum team’s own network."],
  "Case 1 in summary.");

S("P5", "Four technology teams, and one of you. How do you prioritise?",
  "Prioritisation on explicit criteria: a core consulting habit.",
  "On four criteria: a live decision window, existing regulator-facing work to build on, partner readiness, and replicability. That gives quantum first, autonomous mobility and robotics second, biotechnology third with the AI Centre, and planetary systems light-touch until its scope is clearer. Depth over breadth.",
  ["I would make it explicit, on four criteria. First, a live decision window: are regulators deciding something in the next twelve to twenty-four months? Second, existing regulator-facing work to build on, so we extend rather than start from zero. Third, readiness: a willing team and at least one regulator ready to engage. Fourth, replicability: will the lessons transfer?",
   "On those criteria, quantum comes first: hard migration deadlines to 2035 and a precedent with the FCA. Autonomous mobility and robotics comes second: the team’s 2026 paper already frames regulatory diversity as the problem, national rules are moving fast in the UK, US and China, and humanoid robots are arriving before any framework. Biotechnology comes third, where the most important issue, AI-designed biology, would need the Centre for AI Excellence as a partner. Planetary systems I would keep light-touch until its scope and decision windows are clearer.",
   "The trade-off is depth over breadth. With a short mandate, the most valuable outcome is one collaboration completed, a second well under way, and a documented method; touching all four would produce activity without a model."],
  "Case 2.");

S("P6", "How would you work with the quantum team without becoming an extra layer?",
  "Matrix instinct and humility towards technical teams.",
  "By making their work more useful rather than adding process: bringing three things they do not have in-house (regulator relationships, a cross-jurisdiction view, and the craft of writing for supervisors), co-owning a defined piece of work, and giving them the credit.",
  ["The quantum team owns the technology agenda and its community, and that should not change. My job is to make their work more useful to them. I would bring three things they do not have in-house: GRIP’s relationships with regulators and governments; a cross-jurisdiction view of where rules are diverging; and the craft of turning technical findings into something a supervisor or a general counsel can act on.",
   "Practically: co-own a clearly defined piece of work rather than advise on everything; join their existing network rather than create a parallel one; credit the team in everything external; and agree at the start how decisions are made.",
   "And I would set myself a test: if within three months the team does not see concrete value in its own terms, I am the extra layer, and we should change the approach."],
  null);

S("P7", "What does ‘integrating regulatory thinking early’ mean in practice?",
  "Whether you can turn a phrase from the JD into a method.",
  "It does not mean regulating early. It means asking the governance questions while choices are still open, at the scoping stage of a Forum programme, using a short set of questions, and recognising that each stage of a technology’s maturity raises different governance questions.",
  ["It does not mean regulating early; it means asking the governance questions while choices are still open. Crypto is the counter-example: the governance questions were asked after the boom, and the result was years of improvised, divergent rules.",
   "At the Forum, the practical intervention point is programme scoping. I would want six questions answered when a frontier-technology programme is designed: which regulators have, or will claim, jurisdiction; which governance questions are live now and which in three to five years; where jurisdictions are already diverging; what evidence regulators will need, and whether the programme can generate it; who is missing from the community; and what a practical output for regulators would look like and how it would reach them.",
   "The second part is recognising that governance questions change with maturity. For quantum today, the live question is the security transition. The next one is quantum sensing, which is close to market, has obvious defence and privacy implications, and has almost no civilian governance framework. That is exactly where early integration pays off: you shape the question before the market does."],
  "Crypto (counter-example); Part A, Part I §6.");

push({ h2: "Knowledge products" });

S("P8", "What would be the first knowledge product with the quantum team, and why?",
  "Judgement about what the Forum should produce, and why it would matter.",
  "My hypothesis: a regulator-facing output on coherence in the quantum-safe transition, beyond finance and across jurisdictions. The direction is agreed, the detail diverges, and the Forum’s existing regulator work covers one sector with one regulator. I would test that with the team before committing.",
  ["My hypothesis is a regulator-facing output on coherence in the quantum-safe transition. The reasoning has three parts.",
   "The gap: the broad direction is agreed (start now, prioritise high-risk systems, finish by 2035), but the detail diverges between the US, EU, UK and others: dates, algorithm choices, whether hybrid schemes are required, and supervisory expectations. Multinationals and global supply chains have to satisfy all of them. The Forum’s 2024 work with the FCA covered finance, with one regulator. Telecommunications, energy, health and government services have very little equivalent guidance.",
   "The window: EU member states are expected to begin their transitions by the end of 2026, the UK expects discovery completed by 2028, and NIST plans to deprecate vulnerable algorithms after 2030. An output that arrives in 2027 lands as regulators are writing their expectations.",
   "The format: a crosswalk of national requirements, a small set of shared principles for sector supervisors, and practical guidance on the hardest cases, such as long-lived devices and firms with little cryptographic capacity. It would be co-developed with a working group of cybersecurity agencies, sector regulators and legal and compliance leaders.",
   "But I would test it. The team may see a sharper gap, for example quantum sensing, and they own the agenda."],
  "Part A, Part III §1.7 and §1.10.");

S("P9", "How do you make a knowledge product that actually gets used?",
  "Understanding of adoption, not authorship.",
  "Influence is designed in at scoping, not added at launch. Five conditions: co-design with the users, timing to a live decision, specificity, a route to adoption, and a handover plan.",
  ["Influence is designed in at scoping. Five conditions matter most.",
   "Co-design with the people who will use it, including regulators, from the outline rather than at review. Timing to a real decision window, such as a deadline or a strategy under development. Specificity: checklists, model approaches and worked cases, rather than analysis alone. A route to adoption: a government counterpart, a C4IR pilot, or a community that will carry it. And a handover plan, so the output has an owner after launch.",
   "The Forum has good precedents: the quantum team co-authored with a regulator, which gave its 2024 work a direct route into supervision; and the Space Sustainability Rating was incubated at the Forum and handed to EPFL to run. From my own work, [one lesson from your current workstream about what made a product land with senior audiences]."],
  "Forum precedents; current role (to complete).");

S("P10", "In 2025 a Google researcher estimated RSA-2048 could be broken with under a million qubits. What does that mean for a government?",
  "Translating a technical development into governance insight.",
  "It changes the urgency, not the direction. The estimate fell twentyfold in six years, so governments should assume it keeps falling, plan to their migration deadlines rather than to predictions of Q-Day, and focus on the systems that are slowest to change.",
  ["Three things.",
   "First, the trend matters more than the number. In 2019 the estimate was about 20 million noisy qubits; in 2025 it fell below one million, running for under a week. No such machine exists today, but the planning assumption should be that the threshold keeps falling as algorithms and error correction improve.",
   "Second, it changes urgency, not direction. By Mosca’s theorem, if data must stay confidential for twenty years and migration takes ten, you are already late. And harvest-now-decrypt-later means data stolen today is already exposed.",
   "Third, the practical response is to fund and enforce the migration governments have already announced: cryptographic inventories now, priority systems by around 2030, and particular attention to long-lived infrastructure and to sectors and countries with little capacity. The governance lesson is to plan to deadlines, not to predictions of Q-Day."],
  "Part A, Part III §1.6.");

push({ h2: "Stakeholders and convening" });

S("P11", "How would you build the multistakeholder community? Who comes first?",
  "Whether you understand how commitments are sequenced.",
  "Sequentially, not all at once: anchor regulators first, because companies commit when regulators are in the room; then companies, through both technical and legal and compliance leaders; then standards bodies; then civil society and under-represented jurisdictions, early enough to shape the work.",
  ["I would sequence it, because the order of commitments changes everyone else’s calculation.",
   "First, one or two anchor regulators willing to co-lead. Companies, and especially their general counsels, commit time when regulators are in the room; without an anchor, a working group becomes an industry forum. Second, the companies that bear the cost of divergence, represented by both technical and legal and compliance leaders, because they see different parts of the problem. Third, standards bodies and the technical community, to keep the work grounded. Fourth, civil society and jurisdictions beyond the US and Europe, including through the C4IR network, early enough to shape the work rather than review it.",
   "It is the same logic I saw in the design of Gulf platforms and in China’s renewables build-out: identify the minimum set of first-mover commitments that make everyone else’s decision easier. And I would build on the quantum team’s existing network rather than start a parallel one."],
  "FGS and IEEP (sequencing), in one sentence each.");

S("P12", "What do Chief Legal and Chief Compliance Officers need from this work, and how would you run a dialogue that produces an outcome?",
  "Understanding of the JD’s named communities, and convening craft.",
  "They need predictability and early warning: what regulators will expect, by when, and where markets differ. A dialogue produces an outcome when it is designed backwards from a decision, with a draft on the table and a follow-up mechanism.",
  ["Legal and compliance leaders need predictability: what regulators will expect, by when, and how requirements differ across their markets. They also want a credible channel to explain implementation realities to regulators before rules are fixed. So the offer is a seat in shaping regulator-facing work, early sight of emerging expectations, and peer exchange with counterparts facing the same problem. I would engage them through the Forum’s existing CLO and CCO communities with a focused ask tied to a live issue, such as how firms will evidence post-quantum readiness to supervisors.",
   "On dialogues: design backwards from the decision. Before the session, agree what outcome is wanted and who can commit to it, and circulate a short draft so people react to something concrete. In the session, spend the time on the one or two contested points, not on presentations. Afterwards, send a written summary within days, with owners and a date. Without a draft on the table and a follow-up mechanism, a high-level dialogue is a conversation."],
  null);

push({ h2: "Technology" });

S("P13", "What did crypto teach regulators that applies to frontier technology?",
  "Your distinctive angle: a frontier technology you have seen regulated from the inside.",
  "Four lessons. Sandboxes and taxonomies were the first tools but not enough; jurisdictions that designed early and credibly attracted the industry; divergence invited arbitrage; and international standards eventually set a floor. For quantum, the lesson is to design early, aim for coherence across jurisdictions, and build the standards floor before a crisis.",
  ["Crypto was the first frontier technology that forced regulators to innovate at speed, and I saw it from the inside, advising blockchain clients at Fortior in 2018 and later working on a carbon-credit digital asset across Swiss and EU rules. Four lessons stand out.",
   "One: the first tools were sandboxes and taxonomies. The FCA admitted blockchain firms to its sandbox, and FINMA’s 2018 guidance classified tokens as payment, utility or asset tokens. They helped regulators learn, but they did not add up to a regime.",
   "Two: early, credible design attracted the industry. Switzerland (and later its DLT Act) and the UAE, with Abu Dhabi’s 2018 framework and Dubai’s dedicated regulator, became hubs because firms could see the rules. That is regulatory design as a competitive asset.",
   "Three: divergence invited arbitrage. Activity migrated to wherever rules were weakest, and the costs surfaced in failures like FTX. The EU’s comprehensive regime, MiCA, applied only at the end of 2024.",
   "Four: international standards eventually set a floor: the FATF’s 2019 standard on virtual assets, and the Basel Committee’s 2022 prudential standard for banks’ crypto exposures.",
   "For quantum the implication is direct: design governance early, while the transition is still ahead; aim for coherence across jurisdictions before divergence hardens; and build the standards floor before a crisis rather than after one."],
  "Fortior and Toco (primary use).");

S("P14", "Why does quantum matter beyond cryptography?",
  "Whether you see the technology’s upside, not only its risk.",
  "Because quantum simulation could transform how we design molecules and materials, with direct consequences for medicine and climate: new drugs, better batteries, more efficient fertiliser and carbon capture. Getting the security transition right is what keeps the path to those benefits open, with trust intact.",
  ["Because its upside is among the largest of any technology, and it is concentrated in problems classical computers cannot solve well: simulating how molecules and materials behave.",
   "In medicine, that means modelling how drug candidates bind to their targets and how enzymes work, which could shorten discovery for diseases where classical methods struggle. In climate, it means designing better battery materials, catalysts for fertiliser production (a process that consumes a notable share of the world’s energy today), and materials for carbon capture. Quantum sensing adds earlier medical diagnostics and navigation that does not depend on satellites.",
   "Two cautions keep this credible. Most of these applications need fault-tolerant machines, which roadmaps place around the end of the decade; and optimisation claims are much less proven than simulation. So the honest framing is: transformative, but later than the hype suggests.",
   "The governance point is that the benefits will only be broad if access is broad, which is why the Forum’s work on the quantum divide matters, and why getting the security transition right now keeps the path to those benefits open with public trust intact."],
  "Part A, Part III §1.2 and §1.8.");

S("P15", "Explain the quantum threat to a General Counsel in two minutes.",
  "Clarity and accuracy for a non-technical senior audience.",
  "Almost all digital trust today relies on encryption a future quantum computer could break. The machine does not exist yet, but data stolen today can be decrypted later, and replacing encryption takes years. Governments have set deadlines around 2030 and 2035, and regulators will expect progress.",
  ["Almost all digital trust today, secure websites, payments, digital signatures on contracts and software, relies on a type of encryption that a large enough quantum computer could break. That machine does not exist yet, and credible estimates of when it might range from the early 2030s to much later.",
   "There are two reasons to act now anyway. Data stolen today can be decrypted later, so anything that must stay confidential for years is already exposed. And replacing encryption across an organisation and its suppliers takes many years.",
   "Governments have set timelines: the US, EU and UK expect high-risk systems migrated around 2030 and everything by 2035, and supervisors will increasingly ask firms to show progress.",
   "So the three questions for a General Counsel are: do we know where we use this cryptography, including in our suppliers’ products; which of our data must stay confidential longest; and who owns this risk at board level?"],
  null);

S("P16", "Beyond quantum, where is governance furthest behind?",
  "Breadth across the frontier-technology portfolio.",
  "In two places: humanoid and general-purpose robots, which are entering workplaces and will enter homes before any framework exists; and AI-designed biology, which sits between regulators and between the Forum’s own teams. For autonomous vehicles the problem is different: rules exist, but each country is learning alone.",
  ["I would distinguish three situations.",
   "Autonomous vehicles: rules now exist and deployment is real (Waymo at around half a million paid rides a week in the US, Baidu at hundreds of thousands in China), but each country is building its own approval, liability and incident-reporting regime. The problem is shared learning, which the team’s 2026 paper frames well, and aviation shows how powerful cross-border incident learning can be.",
   "Humanoid and general-purpose robots: governance is furthest behind. They are moving into warehouses and shops, and eventually homes, while safety standards were written for fenced industrial robots. China published a standards system for humanoids in 2026; almost no one else has a framework. This is the clearest case for integrating governance early.",
   "AI-designed biology: the most serious, because the downside is catastrophic. AI can now design proteins and sequences that DNA-synthesis screening was not built to catch, and the governance chain (model safeguards, screening, customer verification) is split across actors and countries, and between the biotechnology team and the Centre for AI Excellence.",
   "If I had to choose, humanoids would be the next integration case and AI-bio the most important convergence case."],
  "Cases 3 and 4.");

push({ h2: "Judgement" });

S("P17", "Can an organisation that doesn’t regulate really shape regulation?",
  "Understanding of the Forum’s theory of change, and of its critics.",
  "Yes, indirectly and under conditions: by building shared understanding before positions harden, co-developing frameworks with regulators, showing them what other jurisdictions do, and piloting with governments. Its legitimacy depends on inclusion and transparency; it complements regulators, it does not substitute for them.",
  ["Yes, but indirectly, and only under conditions.",
   "The mechanisms are well evidenced. Shared understanding before positions harden: the quantum governance principles in 2022. Co-development with a regulator: the 2024 quantum security work with the FCA. Comparison across jurisdictions: the 2026 autonomous-vehicle paper. Piloting with governments through the C4IR network: Rwanda’s performance-based drone rules, co-designed with the Forum and adopted by the government. And incubating instruments others run: the Space Sustainability Rating.",
   "The critique is that multistakeholder processes can over-weight corporate voices. The answer is not to deny it but to design against it: regulators as co-leads, genuine inclusion of civil society and the Global South, transparency about who is in the room, and outputs that governments adopt through their own accountable processes. The Forum complements regulators; it does not substitute for them."],
  "Part A, Part II §4 and Part IV §4.");

S("P18", "A government partner asks the Forum to endorse its national quantum rules, and a member company wants to use a dialogue to argue against a regulation. How do you handle both?",
  "Integrity and neutrality with powerful partners.",
  "The same principle applies to both: the Forum’s value is its neutrality. It does not endorse national rules and it does not carry advocacy; but it can benchmark the government’s approach and bring the company’s evidence into a balanced discussion.",
  ["The same principle governs both: the Forum’s value to everyone depends on being trusted as neutral.",
   "For the government, endorsement would compromise that with every other jurisdiction. But there is real value we can offer instead: benchmarking its approach against other jurisdictions, bringing its regulators into the community so its experience informs others, and, if appropriate, a pilot through a C4IR centre. With a close partner, I would make sure that answer is given early and carefully, with the Head of Digital Inclusion aligned.",
   "For the company, its evidence on implementation costs is valuable, and regulators need it. But it must sit alongside other perspectives, and no output can present one member’s position as the community’s view. If the aim is simply to lobby, I would say, early and privately, that the Forum is not the right channel."],
  null);

S("P19", "The quantum team tells you they don’t need a regulatory person. What do you do?",
  "Resilience and matrix skill.",
  "Take it seriously, find out why, and offer one small, concrete thing that is clearly useful to them. Earn the collaboration rather than argue for it.",
  ["I would take it seriously rather than argue. First I would find out why: perhaps they feel they already cover regulators through the FCA work, or they have experienced ‘help’ that added work.",
   "Then I would offer one small, concrete thing that is clearly useful in their terms: for example, a map of how post-quantum requirements differ across jurisdictions, or introductions to sector regulators they have not reached. If that proves valuable, the collaboration follows; if it does not, I have learned where the real need is.",
   "In parallel, I would make sure the Head of Digital Inclusion and the team’s leadership agree on the purpose of the collaboration, so it does not rest on persuasion alone."],
  null);

S("P20", "What would you not do in this role?",
  "Focus and a clear view of scope.",
  "I would not write regulation, design regulatory instruments for governments, produce GRIP’s index or paper, try to be the technical expert, or start four collaborations at once.",
  ["I would not write regulation or design regulatory instruments for governments; that is their role. I would not work on GRIP’s index or flagship paper, which sit with the core team. I would not try to be the technical expert in each domain. And I would not start four collaborations at once.",
   "Saying no to those is what makes it possible to do the job well in a limited time: one collaboration completed, a second under way, and a method the Forum keeps using."],
  null);

push({ h2: "Experience stories" },
  { p: "Former consultants probe one story in depth, often with ten or more follow-ups (‘What exactly did you say?’ ‘Who disagreed?’ ‘What would you do differently?’). These scripts give the structure and suggested content; replace every bracket with specifics you can defend, and keep ‘I’ rather than ‘we’." },
);

S("P21", "Tell us about something you built from concept to delivery.",
  "Entrepreneurial track record, a JD requirement.",
  "[At FGS, I advised senior government leaders on the design and sequencing of (platform). The core problem was (e.g. credibility with international participants). My contribution was (e.g. the sequence of first commitments). The result was (outcome).]",
  ["[Choose the platform you know most deeply: the Global Cybersecurity Forum, the Saudi Green Initiative or the Future Investment Initiative.]",
   "Suggested script: “At FGS I advised [client] on the design and sequencing of [platform]. The challenge was not the idea, which was clear, but [the core design problem, e.g. making it credible to international participants who had no reason to commit to a new platform]. My contribution was [what you specifically designed or recommended, e.g. the order in which to secure anchor participants, so that early commitments would change the calculation for everyone else]. The hardest moment was [a specific obstacle, e.g. a principal who wanted visibility before substance], and I handled it by [what you did and said]. The result was [concrete outcome]. What I took from it is that platforms succeed or fail on the sequencing of first commitments, which is exactly how I would approach building a regulator community around quantum.”"],
  "FGS (primary use).");

S("P22", "Tell us about your work on NEOM.",
  "Direct evidence for thesis C, and for working with frontier technology inside a bespoke regulatory environment.",
  "I worked on assessing what would make NEOM’s food and biotechnology programme credible to foreign investors and companies. It showed me that regulatory design is a competitive asset: capital commits where rules are predictable, interoperable with what investors know, and backed by institutions that will last.",
  ["Suggested script: “At FGS I worked on NEOM’s food and biotechnology programme, which covered frontier areas such as DNA-personalised nutrition and drought-resilient crops, within NEOM’s own regulatory environment. My work was to assess what would make it credible to foreign investors and companies, so that they would commit rather than watch.",
   "The assessment came down to [confirm which applied in your work]: predictability, meaning rules that would not change with leadership; interoperability, meaning rules investors could map onto regimes they already knew, and recognition of international standards; institutional capacity, meaning a regulator able to make decisions quickly and consistently; and credible first movers, because nothing persuades an investor like seeing a peer commit.",
   "[What you recommended, and what happened.]",
   "What it taught me is that for frontier industries, the regulatory environment is part of the product. It is also why I find GRIP’s thesis, regulation as strategic infrastructure, and its partnership with the UAE so compelling: it is the same insight, applied at global scale.”"],
  "NEOM (primary use). Confirm each element against your actual assessment; the panel may probe it.");

S("P23", "Tell us about a time you achieved something through influence rather than authority.",
  "Matrix skill: the defining condition of this role.",
  "[One sentence: what you achieved, with whom, and without which authority.]",
  ["[Suggested source: in your current Forum role, bringing business leaders into the workforce heat-resilience community, or aligning another centre or team behind your workstream.]",
   "Suggested script: “In my current role I needed [outcome, e.g. commitment from (group) to (action)], but I had no authority over them. What worked was [mechanism, e.g. framing the objective in their terms, showing them what they would gain, giving them visible ownership]. The key moment was [specific conversation or decision, and what you said]. The result was [outcome, with a number if possible]. The lesson I would apply to this role is that in a matrix you earn influence by making other people’s work more useful, which is how I would approach the quantum team.”"],
  "Current Forum role (primary use).");

S("P24", "Tell us about a setback.",
  "Honesty, ownership and learning.",
  "[One sentence: what did not work, your part in it, and what you now do differently.]",
  ["[Suggested sources: a convening that did not produce the outcome intended; a knowledge product whose uptake was lower than hoped; advice at FGS that was not taken up. Choose one where your own contribution to the problem is clear.]",
   "Suggested script: “[Situation.] It did not work because [honest cause], and my part in that was [what you would do differently, e.g. convening before securing an anchor commitment, or writing for the wrong audience]. I recognised it when [moment]. What I changed was [specific practice you now follow, e.g. never convening without a draft on the table and a named decision-maker]. I have applied it since in [example]. It is also why the plan I would follow here starts with an agreed charter and an anchor regulator before any convening.”"],
  "To complete.");

push({ pageBreak: true });

module.exports = { blocks };
