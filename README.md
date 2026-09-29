# Interview preparation: WEF GRIP Policy Lead (Frontier Technology)

Interview preparation for the Policy Lead, Global Regulatory Innovation Platform (GRIP)
role at the World Economic Forum: a cross-cutting workstream connecting GRIP with the
Forum's frontier-technology teams, starting with quantum.

## Current deliverables

| File | What it is |
|------|------------|
| `GRIP_PartA_KnowledgeBase.docx` | Knowledge base (~52–55 pages in Word). How to use; the role correctly scoped; Part I Foundational Concepts; Part II The Ecosystem (the Forum, its frontier-technology teams and their outputs, external actors, how initiatives run); Part III Key Technologies (quantum as the flagship deep-dive, then autonomous mobility and robotics, biotechnology, space, AI as convergence); Part IV Governance Approaches; Part V Barriers, Tensions and Geopolitics; Glossary. |
| `GRIP_PartB_InterviewCasePrep.docx` | Interview preparation (~35 pages), fully scripted in the candidate’s voice: positioning, answer architecture and evidence map; HR screen for an internal candidate (10 scripts); panel (24 scripts: motivation, strategy, knowledge products, convening, technology, judgement, experience stories); four case studies, the first written as a full work product; questions to ask; final checklist. |
| `GRIP_Cheat_Sheet.docx` | Two-page revision sheet. |

Superseded versions are kept in `archive/v1/`.

## Build

```bash
npm install
node build/v2/build-partA.js     GRIP_PartA_KnowledgeBase.docx
node build/v2/build-partB.js     GRIP_PartB_InterviewCasePrep.docx
node build/v2/build-cheatsheet.js GRIP_Cheat_Sheet.docx
```

Content lives in `build/v2/pa*.js` (Part A) and `build/v2/pb*.js` (Part B) as a small
block DSL; `build/lib.js` renders it to `.docx` with docx-js. In Word, right-click the
table of contents and choose Update Field to populate page numbers.

Page counts are estimated by rendering through Chromium and calibrating against a
document whose Word page count is known; LibreOffice is unavailable in the build
environment.

## Reusable workflow (for future roles)

1. Scope with the candidate: stages, panel composition, depth priorities, format, length.
2. Read the JD line by line; list what the role is and is not; confirm scope corrections.
3. Research the hiring organisation's actual body of work in the domain, not just the domain.
4. Part A: foundational concepts, ecosystem, key technologies, approaches, barriers.
   Explain each concept once; cross-reference elsewhere.
5. Part B: map every JD line to the question it generates, by interview stage; write
   answers from the candidate's real record; write at least one case as a complete work
   product (principles, phases, dependencies, transition logic, feedback architecture).
6. Verify facts and page counts before delivery.
