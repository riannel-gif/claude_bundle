# Interview Prep Dossier — build + reusable workflow

This repo produces a **field-expert interview preparation dossier** (a ~35-page Word
report plus a standalone cheat sheet) from a job description or work program.

## Deliverables (this run)

| File | What it is |
|------|------------|
| `GRIP_Interview_Dossier.docx` | ~35-page report: role decode, regulatory-innovation craft, five frontier-tech domains, WEF operating model, global landscape, ~25 expert Q&A with model answers, 5 worked consulting-style cases, glossary. |
| `GRIP_Cheat_Sheet.docx` | 2–3 page last-minute cram sheet: thesis, must-knows, domain dilemmas, case frameworks, power phrases, and a confidence checklist. |

Topic of this run: **Policy Lead, Global Regulatory Innovation Platform (GRIP),
World Economic Forum — Centre for Frontier Technologies and Innovation.**

## How to build

```bash
npm install            # installs the `docx` package
node build/build-report.js       GRIP_Interview_Dossier.docx
node build/build-cheatsheet.js   GRIP_Cheat_Sheet.docx
```

The content lives in `build/content-report.js` (Sections 0–5) and
`build/content-qa.js` (Sections 6–8), written in a small block DSL. `build/lib.js`
turns blocks into a styled `docx` document. Edit the content files and rebuild.

> Note: LibreOffice-based PDF rendering was unavailable in the build sandbox, so a
> visual PDF preview wasn't generated. The `.docx` files are valid and open in Word,
> Google Docs, or Pages. To create a PDF: open in Word and Save As PDF, or run
> `soffice --headless --convert-to pdf <file>.docx` where LibreOffice is available.
> In Word, right-click the Table of Contents → **Update Field** to populate page numbers.

## The reusable workflow (run this on any JD)

This is the repeatable method behind the report — the "template" half of the ask.

1. **Scope with the person first.** Confirm: now vs. template; their baseline and the
   panel; where to weight depth (technical / landscape / cases / terminology); format;
   timeline; length; reference features (TOC, glossary, cheat sheet); domain depth;
   framework-vs-specifics balance. *Then get the actual JD.*
2. **Deconstruct the JD.** Extract core domains, required competencies, tools/methods,
   the implicit seniority bar, the likely panel, and each panelist's test.
3. **Research thoroughly.** Full literature scan per domain (not just top hits):
   technical foundations, state of the art, key debates, landscape/players, timeline.
   Prefer primary/authoritative sources; verify current specifics and dates.
4. **Derive the expert's question set.** The questions a senior panel would actually
   ask, mapped to the JD, each with a model answer and a "signal phrase."
5. **Build the case layer** on top of the question set — worked, framework-driven.
6. **Assemble** into a structured document: how-to → role decode → core craft →
   domains → operating model → landscape → Q&A → cases → glossary, plus a cheat sheet.
7. **Deliver as `.docx`** and iterate on feedback.

### Report skeleton (reused across topics)

- **§0** How to use + role in 60 seconds
- **§1** The role & panel, decoded
- **§2** The core craft / discipline of the field
- **§3** The domains (common lens: state of play → core dilemma → landscape → open
  questions → so-what)
- **§4** The hiring organization's operating model
- **§5** The wider landscape & geopolitics
- **§6** The expert's question set (grouped, model answers, signal phrases)
- **§7** Consulting-style case studies (structure-first, reusable frameworks)
- **§8** Glossary
- **Cheat sheet** (separate file)
