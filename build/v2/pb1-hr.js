// Part B, section 1: HR screen, fully scripted (internal candidate).
const blocks = [];
const push = (...b) => blocks.push(...b);

// S(id, question, testing, headline, paragraphs[], evidence)
const S = (id, q, testing, headline, paras, evidence) => {
  push({ h3: `${id}. ${q}` });
  push({ p: `**What they are listening for:** ${testing}` });
  push({ p: `**Headline (20 seconds):** ${headline}` });
  paras.forEach((t, i) => push({ p: i === 0 ? `**Full answer:** ${t}` : t }));
  if (evidence) push({ p: `**Evidence used:** ${evidence}` });
};

push(
  { h1: "B1 · The HR Screen" },
  { lead: "As an internal candidate, the HR screen will test three things: that you are moving towards this role rather than away from your current one, that you understand its scope precisely, and that you show the Forum’s core competencies (collaboration, integrity, impact). Scripts are sized for 60 to 120 seconds." },
);

S("HR1", "Walk me through your background.",
  "A narrative with a thread, ending naturally at this role.",
  "My career has been about one question from different angles: how you design the conditions for a new industry or technology to scale, and what role regulation plays in that. I have looked at it as a researcher, a lawyer, an adviser to governments, and now inside the Forum.",
  ["My career has been about one question, approached from different angles: how you design the conditions for a new industry or technology to scale, and what role regulation plays in that.",
   "I started in Brussels at IEEP, working on how China had sequenced its national renewable-energy transformation, with the aim of building a replication logic other countries could use. That gave me the analytical frame I still use. I then practised as a lawyer: at Herbert Smith Freehills on comparative energy and renewables regulation across jurisdictions, at the UN in Geneva on implementing international agreements, and at Fortior on market access for energy, technology and blockchain clients, at the moment when regulators were first working out what to do with crypto-assets.",
   "In the Gulf, at FGS Global, I moved from analysing regimes to helping build them: advising senior government leaders on the design and sequencing of flagship platforms such as the Global Cybersecurity Forum, the Saudi Green Initiative and the Future Investment Initiative, and assessing what would make NEOM credible to foreign investors and companies. After a period advising climate and digital-asset ventures on market entry, including a carbon-credit digital asset across the Swiss and Danish markets, I joined the Forum, where I lead a climate and healthcare-continuity workstream and help build a community of business leaders on workforce heat resilience.",
   "So this role brings the strands together: frontier technology, regulatory design, and the Forum’s convening model."],
  "The full career arc, compressed; each role reduced to what it contributes to the thread.");

S("HR2", "Why do you want this role?",
  "Genuine motivation and a clear link to your background. (This is the short form; the full version is Panel P1.)",
  "Because it sits exactly where I have been working: how technology transformations are designed, and how regulation can enable them rather than trail them. And because the Forum is at the point where that question needs to move from ideas into its frontier-technology programmes, starting with quantum.",
  ["Three reasons.",
   "The first is the intersection. My work has been about how transformations are designed: early on, how China sequenced its renewable-energy build-out, with the state de-risking first and then engineering its own step-back; later, how regulators improvised with crypto, and what made a greenfield regime like NEOM credible to investors. The pattern is consistent: governance works when it is designed into a transformation, and fails when it arrives afterwards.",
   "The second is timing. GRIP has built a strong thesis, regulation as strategic infrastructure, around AI, health and finance. The next step is to make that concrete inside the Forum’s frontier-technology programmes, and quantum is the natural first test because its security transition already has deadlines.",
   "The third is what I would learn: genuine depth in the technologies themselves, by working inside the teams that lead the Forum’s work on them, and the experience of building a global regulator community rather than working in one market.",
   "So it is the right problem, at the right moment, in a place where I already know how to get things done."],
  "Thesis A; crypto and NEOM in one sentence each; the Forum’s next problem; growth.");

S("HR3", "Why move now, from your current team?",
  "That you are moving towards something, and that you will leave well.",
  "Because this role is the most direct application of what I have been building towards, and the quantum collaboration is starting now. My current work has given me exactly the experience it needs: leading a workstream end to end and building a senior community.",
  ["Because this role is the most direct application of what I have been building towards, and the timing matters: the frontier-technology workstream is being created now, and the quantum collaboration is about to start. Joining at the design stage is where I can add most.",
   "My current role has been the right preparation. Leading the climate and healthcare-continuity workstream has taught me how to set a research agenda, run a programme end to end inside the Forum, and produce knowledge products for senior audiences; building the heat-resilience community has taught me what it takes to keep senior business leaders engaged. Those are precisely the muscles this role uses.",
   "I would make sure the transition is clean: [a clear handover of the workstream and the community to (name/role), timed with the team’s calendar]. Moving within the Forum should strengthen both teams, not leave a gap."],
  "Current Forum role; handover plan (to complete).");

S("HR4", "What would you bring from your current role at the Forum?",
  "Institutional knowledge as an asset, without over-claiming.",
  "Three things a new hire would take months to learn: how initiatives actually move from scoping to adoption here, how to work across centres, and how to build products and convenings that senior leaders use.",
  ["Three things a new hire would take months to learn.",
   "First, how initiatives actually move here: from scoping with members and constituents, through co-design with a community, to a launch moment and then adoption. That matters because the role’s central idea, integrating regulatory thinking early, only works if you intervene at scoping, and I know where scoping happens.",
   "Second, how to work across centres. My current work already depends on collaborating beyond my own team, and I understand how credit, decision rights and calendars shape what is possible in a matrix.",
   "Third, how to produce for senior audiences: briefings, positioning and thought leadership for high-level convenings, where the test is whether a leader can use it in the room.",
   "What I would not claim is technical depth in quantum or robotics; that sits with those teams. My value is connecting their depth to regulators, companies and governments."],
  "Current Forum role; initiative lifecycle (Part A, Part II §5).");

S("HR5", "What do you understand the role to be?",
  "Precise scope. The most common error would be describing it as writing regulation.",
  "A bridge between GRIP and the Forum’s frontier-technology teams: integrating governance questions into their programmes early, convening regulators and industry around each technology, translating developments into practical insight, and turning what works into a method the Forum can reuse. Starting with quantum.",
  ["I see it as building a bridge between GRIP and the Forum’s frontier-technology teams: quantum, autonomous mobility and robotics, biotechnology and planetary systems. In practice that means five things: connecting governance expertise with technology expertise inside the same programmes; integrating regulatory questions at the design stage of those programmes; convening regulators, companies (including legal and compliance leaders), academia and civil society around each technology; translating technical developments into practical governance insight through knowledge products; and codifying what works so it can be reused across teams and jurisdictions.",
   "Equally important is what it is not. The Forum does not write regulation or run sandboxes; governments do. GRIP’s index and paper sit with the core team. The role is about the Forum’s convening and co-design model applied to frontier technology, and my understanding is that it starts with quantum."],
  "Part A, The Role, Correctly Scoped.");

S("HR6", "How do you work with very senior leaders?",
  "Credibility with ministers, CEOs and heads of agency.",
  "By being useful and precise: leading with the decision or the ask, bringing a perspective they cannot get from their own organisation, and being clear about what I know and what I do not.",
  ["At FGS I advised senior government leaders directly on the design of flagship platforms, and in my current role I prepare briefings and positioning for senior engagement at high-level convenings. Three principles guide me.",
   "Lead with the decision or the ask: senior people give you two minutes, so the first sentence has to carry the point.",
   "Bring something they cannot get from inside their own organisation: usually a comparison across jurisdictions or sectors, or an honest read of how others will receive their proposal.",
   "Be precise about the limits of what you know. With senior leaders, credibility is built by accuracy and usefulness, not by volume. [Optional: one concrete example of a briefing or piece of advice that changed a senior decision.]"],
  "FGS; current senior briefings.");

S("HR7", "Tell me about a disagreement with a stakeholder and how you handled it.",
  "Maturity, listening, and keeping relationships intact.",
  "[One-sentence summary: who, what the disagreement was about, and how it was resolved.]",
  ["[Suggested source: at FGS, a disagreement with a senior counterpart on how to position or sequence a platform; or in your current role, a partner who wanted a different emphasis in a knowledge product.]",
   "Script structure to complete: “The situation was [context]. [Stakeholder] wanted [their position], because [their underlying concern]. I thought [your position], because [reason]. Rather than argue the position, I [what you did to understand their concern, e.g. a one-to-one conversation]. That showed me that what they needed was [underlying need]. So I proposed [option that met both needs]. The result was [outcome], and the relationship [how it continued]. What I took from it is that most disagreements on substance are disagreements about risk, and you resolve them by addressing the risk, not the position.”"],
  "To complete; pick a story not used in P21–P24.");

S("HR8", "The Forum works with powerful partners. How do you protect its neutrality?",
  "Integrity, a core Forum competency, and especially relevant for regulatory work.",
  "By remembering that the Forum’s value to regulators depends entirely on being trusted as neutral. Partners’ evidence is welcome; partners’ advocacy is not the Forum’s voice.",
  ["The Forum’s value to regulators depends on being trusted as a neutral space. So I draw a clear line: companies’ evidence is welcome and necessary (regulators need to know what implementation actually costs), but no output should present one member’s position as the community’s view.",
   "In practice that means transparency about who is in the room, a balance of perspectives including civil society, and drafting discipline so conclusions follow evidence. And if a partner’s aim is simply to lobby against a rule, I would say directly that the Forum is not the right channel, early and privately, before it becomes a problem in the room."],
  "Part A, Part II §4 (legitimacy).");

S("HR9", "How do you know whether your work has had impact?",
  "Impact orientation beyond activity.",
  "I measure at three levels, defined at the start: adoption, outcome and system change. Events and downloads are activity; a regulator using a framework in its guidance is impact.",
  ["I distinguish three levels and define them when the work is designed, not afterwards. Adoption: did the people it was built for take it up? Outcome: did it change a decision, a policy, an investment or a practice? System: did it change how the field works, for example by making regulators in different countries align?",
   "For a Forum knowledge product, downloads and sessions are activity. A supervisor citing it, a company changing its migration plan because of it, or a government using it in a strategy is impact. [Optional: one example from your current workstream of where you saw real uptake.]"],
  "Current role (optional example).");

S("HR10", "What questions do you have for me?",
  "Preparation; save substance for the panel.",
  "Keep this to process and context.",
  ["What will the panel format be, and who will be on it?",
   "What is the timeline to a decision, and how would the transition from my current team typically be handled?",
   "How is this role expected to work day to day with the Centre for Frontier Technologies and Innovation?"],
  null);

push({ pageBreak: true });

module.exports = { blocks };
