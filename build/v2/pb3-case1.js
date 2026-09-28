// Part B, section 3: Case 1, the GRIP x Quantum collaboration (full work product).
const blocks = [];
const push = (...b) => blocks.push(...b);

push(
  { h1: "B3 · Case Studies" },
  { lead: "The panel is likely to pose at least one ‘how would you approach…’ case, and may ask for a written or presented exercise. Case 1 is written as a complete work product, at the standard you would submit. Cases 2 to 4 are shorter, structured answers to the other most likely prompts." },

  { h2: "Case 1 · Designing the First GRIP × Quantum Collaboration" },
  { p: "**Prompt:** “Your first collaboration will be with the quantum team. How would you design it?”" },
  { h3: "Purpose of this document" },
  { p: "This document sets out the architecture of the first collaboration between GRIP’s frontier-technology workstream and the Forum’s quantum technologies team. It provides: (1) the governing principles for the collaboration; (2) a phased framework fitted to the contract period to May 2027; (3) a map of the dependencies that determine sequencing; (4) the transition logic specifying when GRIP’s role steps back and who owns each element afterwards; and (5) the feedback architecture that turns this collaboration into the template for the other frontier-technology teams. It is not a work plan for the quantum team; the team owns its agenda and its community. It is the design that makes the collaboration add value rather than a parallel activity." },

  { h3: "1. Governing principles" },
  { p: "**First: build on what exists, and fill the gap it leaves.** The quantum team has a coherent body of work: principles (2022), an organisational readiness toolkit (2023), regulator-facing work with the UK Financial Conduct Authority on the financial sector (2024), a national strategy blueprint piloted in Saudi Arabia (2024), and industrial use cases (2025). The collaboration should extend that work where it stops, not restart it. The clearest gap is regulatory coherence beyond one sector and one jurisdiction: the quantum-safe transition now has published deadlines in the US, EU and UK, but diverging requirements, and critical sectors other than finance have little regulator-facing guidance." },
  { p: "**Second: anchor every output to a decision window.** Governance outputs are used when they arrive as regulators are deciding. The windows are known: EU member states are expected to begin their transition by the end of 2026; the UK expects discovery and planning complete by 2028; NIST plans to deprecate quantum-vulnerable algorithms after 2030. The collaboration’s timing, content and audience follow these windows, not the Forum’s publication calendar alone." },
  { p: "**Third: design for replication from the first day.** This collaboration is the prototype for how GRIP works with every frontier-technology team. Each step (how the issue was chosen, how regulators were brought in, how the output was designed) must be documented as it happens, so that the second collaboration starts from a method rather than a blank page. A successful quantum output without a documented method would be a one-off; the method is the scalable model the JD asks for." },

  { h3: "2. What the Lead produces, and what the Lead does not" },
  { table: { head: ["The Lead produces", "Owned by others"], widths: [4680, 4680], rows: [
    ["A collaboration charter with the quantum team: scope, roles, decision rights, credit, and how the work enters the team’s programme.", "The technology agenda, technical content and the Quantum Economy Network: the quantum team."],
    ["A governance issue map for quantum and a reasoned choice of the first priority question.", "Regulation and supervisory expectations: governments and regulators."],
    ["A stakeholder map with a sequence for bringing regulators, industry, legal and compliance leaders and under-represented jurisdictions into the work.", "GRIP’s Regulatory Future Readiness Index and flagship paper: the core GRIP team."],
    ["The co-designed knowledge product, jointly with the quantum team.", "Cybersecurity expertise on cryptographic migration: shared with the Centre for Cybersecurity."],
    ["A method note: the reusable approach for integrating regulatory thinking into a frontier-technology programme.", "In-country pilots: C4IR centres and their government counterparts."],
  ]}},

  { h3: "3. Three-phase framework" },
  { p: "The phases reflect the logic of moving from an agreed partnership, to evidence that the collaboration adds value, to a model that outlasts the contract. Timing assumes a start in late 2026; the phases, not the months, are the design." },
  { h3: "Phase 1 · Foundations (months 1–2)" },
  { p: "The foundations phase creates the conditions everything else depends on. Nothing external happens until the partnership with the quantum team is explicit, because an external convening launched without agreed roles and credit damages the relationship the whole model relies on. The Lead and the quantum team run a joint diagnostic: an inventory of existing outputs and relationships, the governance issue map (Part A, Part III §1.10), the decision windows by jurisdiction, and the regulators relevant to each issue. The collaboration charter is agreed with the team lead and endorsed by the Head of Digital Inclusion. The priority question is chosen against four criteria: a live decision window, a gap in existing work, willing regulators, and replicability. The working hypothesis is coherence of the quantum-safe transition across jurisdictions and critical sectors beyond finance, but the diagnostic may point elsewhere (for instance to quantum sensing, which has almost no governance framework). The phase ends with one or two anchor regulators agreeing to co-lead, because industry participation depends on it." },
  { h3: "Phase 2 · Proof of value (months 3–5)" },
  { p: "The proof-of-value phase produces evidence that the collaboration makes the quantum team’s work more useful to regulators and industry. A working group is convened around the priority question, built on the team’s existing network: anchor regulators and national cybersecurity agencies; sector supervisors (telecommunications, energy, health, government services); companies represented by both technical and legal and compliance leaders; standards bodies; and participants from jurisdictions beyond the US and Europe, including through the C4IR network. The working group reacts to a concrete draft rather than an open agenda: for example, a crosswalk of national requirements and a small set of shared principles for supervisors. The Annual Meeting in January is used as a convening moment (a closed-door roundtable of regulators and chief legal officers), not as a launch, because the output will not yet be mature. One C4IR centre, most naturally Abu Dhabi or Saudi Arabia, is engaged to test the output with a government counterpart." },
  { h3: "Phase 3 · Institutionalisation and replication (months 6–7)" },
  { p: "The final phase makes the collaboration self-sustaining without the Lead. The output is finalised and published with the quantum team and its regulator co-leads, with an owner for its next iteration. The regulator community is given a chair and a cadence inside the quantum team’s network. The scoping questions for integrating regulatory thinking are built into the quantum team’s programme-design template. The method note is completed and used to start the second collaboration, most likely with autonomous mobility and robotics (Case 2). By May 2027, the test of success is that the quantum work continues without GRIP’s day-to-day involvement and the second team is working from the method." },

  { h3: "4. Initiative design across six dimensions" },
  { table: { head: ["Dimension", "Phase 1 · Foundations", "Phase 2 · Proof of value", "Phase 3 · Institutionalisation"], widths: [1700, 2560, 2550, 2550], rows: [
    ["Agenda and evidence", "Joint diagnostic; issue map; decision windows by jurisdiction; priority question chosen on explicit criteria.", "Evidence base built: crosswalk of national requirements; sector readiness evidence from working-group members.", "Evidence handed to the quantum team for maintenance; next priority question identified (e.g. quantum sensing)."],
    ["Internal integration", "Collaboration charter agreed and endorsed; Centre for Cybersecurity engaged on scope.", "Joint working rhythm with the quantum team; governance questions inform the team’s programme.", "Scoping questions embedded in the team’s programme-design template."],
    ["Regulators and governments", "Regulator map; anchor regulator(s) secured as co-leads.", "Cybersecurity agencies and sector supervisors in the working group; C4IR centre engaged.", "Regulator community chaired and on a cadence; C4IR pilot under way with a government counterpart."],
    ["Industry and community", "Existing Quantum Economy Network mapped; CLO and CCO communities briefed.", "Companies (technical, legal and compliance) contribute implementation evidence; Global South participants included.", "Community continues within the quantum network."],
    ["Knowledge product", "Output concept and audience defined; draft outline tested with anchor regulators.", "Draft co-designed through working group; January roundtable used to test contested points.", "Output finalised and published jointly; owner for next edition named."],
    ["Codification and replication", "Method note opened; every design choice logged.", "After-action review at each milestone.", "Method note completed; second collaboration started from it."],
  ]}},

  { h3: "5. Dependency map" },
  { p: "Treating these dimensions as parallel workstreams would produce activity without a coherent collaboration. The dependencies below govern sequencing." },
  { table: { head: ["Enabling step", "Dependent step", "Why the dependency is binding"], widths: [2600, 2600, 4160], rows: [
    ["Collaboration charter (Phase 1)", "Any external convening", "Convening before roles and credit are agreed signals that GRIP is building a parallel track, and undermines the partnership the model depends on."],
    ["Priority question (Phase 1)", "Regulator mapping and invitations", "Which regulators matter depends on the question: cybersecurity agencies for migration coherence, defence and privacy bodies for sensing."],
    ["Anchor regulator commitment (Phase 1)", "Industry participation", "Companies, and especially legal and compliance leaders, commit time when regulators are at the table; without an anchor, the working group becomes an industry forum."],
    ["Evidence base (crosswalk) (Phase 2)", "Draft principles for supervisors", "Principles written before the divergence is mapped would be generic; the crosswalk shows where alignment is actually needed."],
    ["Working-group draft (Phase 2)", "January roundtable", "A senior roundtable produces decisions only if it reacts to a concrete draft; without one it becomes a general discussion."],
    ["C4IR government counterpart (Phase 2)", "In-country pilot", "A pilot needs a government that is actively deciding something; the centre identifies whether one exists."],
    ["Method note (continuous)", "Second collaboration", "Without documentation, the second team starts from scratch and the ‘scalable model’ does not exist."],
  ]}},

  { h3: "6. Transition logic: when GRIP steps back" },
  { p: "The collaboration must be designed so that GRIP’s intensive role is temporary. Each GRIP-led mechanism has a trigger for handover and a steady-state owner." },
  { table: { head: ["GRIP-led mechanism", "Transition trigger", "Steady-state owner"], widths: [3000, 3300, 3060], rows: [
    ["Setting the governance agenda with the quantum team", "Scoping questions embedded in the team’s programme template and used once without GRIP support.", "Quantum team, with GRIP available on request."],
    ["Convening the regulator community", "The community has a chair (ideally a regulator) and a regular cadence.", "Regulator community within the Quantum Economy Network."],
    ["Co-authoring the knowledge product", "Published, and an owner named for updates as deadlines approach.", "Quantum team and regulator co-leads."],
    ["Brokering the C4IR pilot", "Government counterpart and centre own the workplan.", "C4IR centre and its government counterpart."],
    ["Codifying the method", "Method used to start a second collaboration.", "GRIP (as the Forum’s reusable approach for frontier-technology governance)."],
  ]}},

  { h3: "7. How success is measured" },
  { table: { head: ["Level", "Indicator", "Early warning signal"], widths: [1500, 4600, 3260], rows: [
    ["Adoption", "Regulators and companies in the working group use the output (cited in guidance, used in supervisory dialogue or migration plans).", "Working-group attendance drops, or regulators send observers rather than decision-makers."],
    ["Outcome", "At least one concrete change: a regulator aligns a requirement, a sector body adopts the principles, a government uses the output in its plan.", "Feedback limited to ‘interesting’; no requests to use or adapt the output."],
    ["System", "The quantum team continues the governance work without GRIP; a second team starts from the method.", "The quantum team treats governance as GRIP’s task rather than part of its programme."],
  ]}},

  { h3: "8. Risks and mitigations" },
  { table: { head: ["Risk", "Mitigation"], widths: [3500, 5860], rows: [
    ["The quantum team sees GRIP as an extra layer.", "Start with something concretely useful to them; co-own and credit; agree decision rights in the charter."],
    ["Regulators engage at too junior a level.", "Secure anchor co-leads before convening; offer them something of value (peer comparison, early industry evidence)."],
    ["Industry voices dominate.", "Regulator co-leads; civil society and Global South participation from the start; transparent membership."],
    ["Geopolitical sensitivity (export controls, divergent national standards).", "Keep the focus on transition coherence and shared principles; hold sensitive discussions under Chatham House rule; involve the Centre for Cybersecurity."],
    ["The contract ends before the work is embedded.", "Design handover from Phase 1; prioritise the transition logic over additional outputs."],
  ]}},

  { h3: "9. Feedback architecture: from one collaboration to a model" },
  { p: "Codifying what works is a primary responsibility, not an afterthought. At each milestone, a short after-action review produces four outputs. A **conditions note**: what was true at the start (the team’s existing work, regulator appetite, decision windows) that made the chosen approach possible. A **sequencing note**: why each step came when it did, and what would have happened otherwise. A **failure log**: what did not work before the right approach was found. A **replication brief**: what another frontier-technology team would need in place to apply the same approach, and how it would need to adapt to a different technology, regulator landscape or maturity stage." },
  { p: "These reviews feed the method note that the second collaboration uses. The distinction matters: a quantum collaboration that produces a good output without this documentation is a success story; the same collaboration with it is the first instance of a replicable model for integrating governance into every frontier-technology programme at the Forum. That difference is the Lead’s responsibility." },
  { pageBreak: true },
);

module.exports = { blocks };
