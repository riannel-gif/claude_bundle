// Part B, section 1: the HR screening interview.
const blocks = [];
const push = (...b) => blocks.push(...b);

// Q(id, question, testing, answer paragraphs[], avoid)
const Q = (id, q, testing, ans, avoid) => {
  push({ h3: `HR ${id}. ${q}` });
  push({ p: `**What they are checking:** ${testing}` });
  ans.forEach((a, i) => push({ p: i === 0 ? `**Model answer:** ${a}` : a }));
  if (avoid) push({ p: `**Avoid:** ${avoid}` });
};

push(
  { h1: "B1 · The HR Screening Interview" },
  { lead: "The HR screen is short and decisive. It checks motivation, fit and credibility, the competencies the Forum screens for (collaboration, working style, ethics, impact), and practical conditions. Answers should be 60 to 90 seconds, specific, and anchored in the three messages (B0, §2)." },
  { p: "Placeholders in square brackets mark facts only you can supply. Where your situation would change an answer (for example, if you are applying from inside the Forum), adjust accordingly." },
);

Q(1, "Walk me through your background.",
  "A clear narrative that explains why this role is a logical next step, in about two minutes.",
  ["I’ve spent my career where technology, policy and law meet. I trained as a lawyer and started in Brussels, researching how China had sequenced its renewable-energy transformation and building a framework other countries could replicate. At Herbert Smith Freehills I did comparative analysis of energy and renewables regulation across jurisdictions, mostly at EU level, and at the UN in Geneva I developed implementation guidance and training for governments on international agreements.",
   "I then moved to the Gulf with FGS Global, where I advised senior government leaders on the design and sequencing of flagship multistakeholder platforms, including the Global Cybersecurity Forum, the Saudi Green Initiative and the Future Investment Initiative, and worked on NEOM’s food and biotechnology programme within its bespoke regulatory environment. After a period advising climate and circular-economy ventures on market entry, I now lead a climate and healthcare-continuity workstream and help build a cross-sector community of business leaders on workforce heat resilience.",
   "The thread is translating complex technical and regulatory questions into platforms and products that decision-makers act on. This role brings those strands together: frontier technology, regulatory innovation and multistakeholder convening."],
  "A chronological list of jobs without the thread; spending more than a sentence on any single role.");

Q(2, "Why the World Economic Forum?",
  "Genuine understanding of what the Forum is and does, beyond the brand.",
  ["Because the Forum can do something no government or company can do alone: bring regulators, companies, researchers and civil society into the same conversation before positions harden, and turn that into frameworks people actually adopt. On frontier technologies that is exactly what is missing. The quantum team’s 2024 work with the UK Financial Conduct Authority on quantum security for finance is a good example: a regulator and industry co-developing principles and a roadmap, before the deadlines bite. I want to work where that kind of convening happens.",
   "If you are applying from inside the Forum: frame it as having seen the model work from the inside, and wanting to apply it to the technologies where it is most needed."],
  "Talking about Davos, prestige or ‘global impact’ in general terms.");

Q(3, "Why this role?",
  "That you understand what the role actually is, and that it fits your strengths.",
  ["Three reasons. First, the role sits exactly at my intersection: technology, regulation and convening. Second, it is a build role: a new, cross-cutting workstream, which suits me, because I have repeatedly helped design platforms from concept. Third, the problem matters: the gap between how fast frontier technologies are moving and how prepared governments are is widening, and quantum makes it concrete, with post-quantum migration deadlines already set for 2030 and 2035."],
  "Describing the role as ‘developing regulation’ or ‘running sandboxes’; the Forum does neither.");

Q(4, "What do you understand the role to be?",
  "Accuracy. HR will listen for whether you have misread the job.",
  ["I see it as building a bridge between GRIP and the Forum’s frontier-technology teams: quantum, autonomous mobility and robotics, biotechnology and planetary systems. In practice that means connecting the two; integrating regulatory and governance questions into the teams’ programmes early; convening regulators, companies (including legal and compliance leaders), academia and civil society; translating technical developments into practical governance insight through knowledge products; and codifying what works so it can be reused across teams and jurisdictions. My understanding is that the first collaboration is likely to be with the quantum team."],
  "Claiming ownership of GRIP’s index or flagship paper, which sit with the core team.");

Q(5, "This is a temporary role to May 2027. How do you feel about that?",
  "Commitment for the full period, and realism.",
  ["It suits the mandate. A build role with a fixed horizon focuses the work: the job is to design a collaboration model, prove it with quantum, extend it to another team, and document it so it outlasts the contract. I would plan the work backwards from May 2027 with that handover in mind. Beyond that, I am interested in continuing in this field, and I would hope the results speak for themselves."],
  "Signalling that you see it only as a stepping stone.");

Q(6, "Why are you looking to move now?",
  "A positive reason to move towards this role, not away from the current one.",
  ["My current work has given me hands-on experience of leading a workstream end to end and building a community of senior business leaders. The natural next step is to apply those skills to the questions I have been closest to throughout my career: how regulation and governance keep pace with technology. This role is a rare fit for that, and the timing is right because the quantum governance agenda is moving now. [Adjust if there is a contract end date or internal context.]"],
  "Any criticism of your current employer.");

Q(7, "Tell me about a time you achieved something across teams where you had no formal authority.",
  "Collaboration in a matrix: the defining condition of this role.",
  ["Use a real example from FGS or your current role. Structure: the objective; the teams or organisations involved and why they did not naturally align; what you did to create shared ownership (for example, framing the objective in each team’s terms, giving credit, agreeing decision rights early); the result. Close with the lesson: in a matrix you earn influence by making the other teams’ work more useful to them, not by owning territory."],
  "Saying ‘we’ throughout; the interviewer needs to hear what you did.");

Q(8, "Tell me about a disagreement with a stakeholder and how you handled it.",
  "Maturity, listening, and ability to keep relationships intact.",
  ["Choose a disagreement over substance with a senior counterpart (for example, on how to position or sequence an initiative). Show that you first understood their underlying concern, reframed around a shared objective, proposed an option that met both needs, and maintained the relationship afterwards. Be specific about what you said."],
  "A story where the other person was simply wrong and you won.");

Q(9, "How do you work with very senior leaders: ministers, CEOs, heads of agencies?",
  "Credibility and judgement with senior public and private leaders.",
  ["At FGS I advised senior government leaders directly, and in my current role I prepare briefings and positioning for senior engagement at high-level convenings. Three principles guide me: respect their time by leading with the decision or the ask; bring something they cannot get elsewhere, such as a view across jurisdictions or sectors; and be precise about what I know and do not know. With senior leaders, credibility is built by being useful and accurate, not by volume."],
  null);

Q(10, "Tell me about working across cultures.",
  "Evidence of international range and sensitivity.",
  ["My career has spanned Brussels, Geneva and the Gulf, with counterparts across Europe, the Middle East and Asia. In the Gulf in particular I learned how much relationships, hierarchy and timing shape decisions, and that the same proposal lands very differently depending on who is in the room and how it is sequenced. [Add languages and one concrete example.]"],
  null);

Q(11, "How do you manage several complex projects at once, and make sure the detail is right?",
  "The JD explicitly asks for project management and attention to detail.",
  ["Describe your actual system: a clear plan with milestones worked back from external deadlines (for example, a launch moment); a weekly review of risks and dependencies; explicit owners for every action; and a final quality check on anything external, especially facts, figures and names. Give one example where catching a detail mattered."],
  "Claiming you simply work harder; they want a method.");

Q(12, "Tell me about a time your integrity was tested, or you were asked to do something you were uncomfortable with.",
  "Ethics: the Forum works with powerful partners and must protect its neutrality.",
  ["Choose a real situation, for example pressure to overstate a result or to shape content in a partner’s favour. Show how you raised it, the alternative you proposed, and the outcome. Link it to the Forum: its value depends on being a trusted, neutral platform, so content cannot become advocacy for any one member."],
  null);

Q(13, "How do you know whether your work has had impact?",
  "Impact orientation beyond activity metrics.",
  ["I distinguish three levels. Adoption: did the people it was meant for take it up? Outcome: did it change a decision, a policy, an investment or a practice? System: did it shift how the field works? For a knowledge product, downloads and events are activity; a regulator citing it in guidance, or a company changing its roadmap because of it, is impact. I define those measures when a project is designed, not afterwards."],
  null);

Q(14, "I see a gap between mid-2018 and late 2019. Can you tell me about it?",
  "Only whether there is a straightforward explanation.",
  ["Prepare a truthful, one or two sentence explanation, stated calmly, followed by what you took from it and how it led to the next role. [To be completed by you.]"],
  "Over-explaining or sounding defensive.");

Q(15, "Practical questions: location, permit, availability, salary expectations.",
  "That there are no blockers.",
  ["**Location:** confirm you can be based in Geneva from [date]. **Permit:** state your status clearly [e.g. EU/EFTA citizenship or current Swiss permit]. **Availability:** your notice period [x weeks]. **Salary:** if asked, give a researched range for a Geneva-based policy lead role, rather than a single figure, and say you are open to discussing the full package. Do not anchor low because the role is temporary; the scope is senior."],
  null);

Q(16, "What questions do you have for me?",
  "Curiosity and preparation. Ask about process and context, not substance better suited to the panel.",
  ["Good questions for HR: What does the panel process look like, and who is on it? How does the Forum typically support people in temporary roles to continue their work beyond the contract? How is this role expected to work day to day with the Centre for Frontier Technologies and Innovation? What are the next steps and timeline?"],
  null);

push({ pageBreak: true });

module.exports = { blocks };
