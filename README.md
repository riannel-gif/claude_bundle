# Conversation / Interview Prep — build + reusable workflow

This repo produces a **field-expert preparation dossier** (a Word report plus a
standalone cheat sheet) from a job description, work programme, or — as in this
run — a specific person and their published work, for an exploratory meeting.

## Deliverables (this run)

| File | What it is |
|------|------------|
| `Maria_Basso_Conversation_Brief.docx` | ~20-page brief for an exploratory conversation with **Maria Basso** (Head of AI Applications & Impact, WEF Centre for AI Excellence): who she is, the Centre, the **MINDS** programme, the **AI-First Operating System** blueprint, the AI×energy and AI×industry intersections, the enterprise-AI reality, the **questions to ask her**, your **positioning**, and a glossary/key-facts pack. |
| `Maria_Basso_Cheat_Sheet.docx` | 2-page last-minute cram sheet: your pitch, who she is, MINDS, the five building blocks, your turf, your best questions, her likely questions, power phrases, and a confidence checklist. |

Topic of this run: **Exploratory conversation with Maria Basso, World Economic
Forum — Centre for AI Excellence (MINDS programme + the AI-First Operating
System).** No job description; the goal is a role on her team, so the brief is
built to be *additive* in the room and to surface the candidate's background.

> **Personal layer:** §8 (Positioning) and a few questions in §7 contain
> `[bracketed placeholders]` for the candidate's own background. Paste a 4–6 line
> summary and rebuild to weave the specifics in.

## How to build

```bash
npm install            # installs the `docx` package
node build/build-report.js       Maria_Basso_Conversation_Brief.docx
node build/build-cheatsheet.js   Maria_Basso_Cheat_Sheet.docx
```

The content lives in `build/content-report.js` (Sections 0–6) and
`build/content-qa.js` (Sections 7–9), written in a small block DSL. `build/lib.js`
turns blocks into a styled `docx` document. Edit the content files and rebuild.

> Note: to create a PDF, open the `.docx` in Word and Save As PDF, or run
> `soffice --headless --convert-to pdf <file>.docx` where LibreOffice is
> available. In Word, right-click the Table of Contents → **Update Field** to
> populate page numbers.

## The reusable workflow (run this on any target)

This is the repeatable method behind the report — the "template" half of the ask.

1. **Scope with the person first.** Confirm: interview vs. exploratory chat;
   their goal (role / partnership / advisory / relationship); their background;
   where to weight depth; format; length; reference features. *Then get the
   actual target (JD, programme, or person + their work).*
2. **Deconstruct the target.** For a person: their role, trajectory, what they
   optimise for, their published work, and what the meeting is really testing.
   For a JD: core domains, competencies, the panel, each seat's test.
3. **Research thoroughly.** Full literature scan (not just top hits): the
   person's own writing, the initiatives, the primary reports, the live debate.
   Prefer primary/authoritative sources; verify current specifics and dates.
4. **Derive the question set.** For an exploratory chat, the questions *you ask*
   — each engineered to be substantive *and* to reveal the candidate. For an
   interview, the questions a panel would ask, with model answers.
5. **Build the positioning layer** — the candidate's narrative, background→need
   map, and answers to the questions they'll be asked.
6. **Assemble** into a structured document: how-to → who/what you're meeting →
   the institution → their initiatives → your home-turf intersections → the
   live landscape → questions → positioning → glossary, plus a cheat sheet.
7. **Deliver as `.docx`** and iterate on feedback.

### Report skeleton (this run)

- **§0** How to use + the conversation in 60 seconds
- **§1** The person, decoded (trajectory, what they optimise for, what the chat tests)
- **§2** The institution / operating context
- **§3** Flagship initiative A (MINDS)
- **§4** Flagship initiative B (AI-First Operating System)
- **§5** The candidate's home-turf intersections (AI×energy, AI×industry)
- **§6** The wider live landscape (enterprise-AI reality)
- **§7** The questions to ask (intent + what each signals + follow-up)
- **§8** Positioning the candidate (narrative, background→need, her questions, the close)
- **§9** Glossary + key facts
- **Cheat sheet** (separate file)
