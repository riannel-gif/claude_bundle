const fs = require("fs");
const path = require("path");
const L = require("../lib.js");
const { Document, Packer, Paragraph, TextRun, TableOfContents, PageBreak,
  INK, ACCENT, MUTE, build, numberingConfig, footer, PAGE } = L;

const mods = [
  "pb0-overview", "pb1-hr", "pb2-panel",
  "pb3-case1", "pb3-cases", "pb4-close",
  
].flatMap((m) => require(path.join(__dirname, m + ".js")).blocks);

const tp = [
  new Paragraph({ spacing: { before: 1200 }, children: [
    new TextRun({ text: "INTERVIEW PREPARATION · PART B", size: 24, bold: true, color: ACCENT, font: "Calibri", characterSpacing: 50 })] }),
  new Paragraph({ spacing: { before: 40 }, border: { bottom: { color: ACCENT, size: 14, style: L.docx.BorderStyle.SINGLE, space: 10 } }, children: [] }),
  new Paragraph({ spacing: { before: 300 }, children: [new TextRun({ text: "Interview and Case Preparation", size: 54, bold: true, color: INK, font: "Calibri" })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "HR screen and panel", size: 34, italics: true, color: ACCENT, font: "Calibri" })] }),
  new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Policy Lead, Global Regulatory Innovation Platform (GRIP)", size: 26, bold: true, color: INK, font: "Calibri" })] }),
  new Paragraph({ spacing: { after: 480 }, children: [new TextRun({ text: "World Economic Forum · Geneva", size: 21, color: MUTE, font: "Georgia" })] }),
  L.callout(["Part B of two. Fully scripted answers in your voice: positioning and answer architecture; the HR screen; the panel (motivation, strategy, knowledge products, convening, technology, judgement, experience stories); four case studies, the first written as a full work product; questions to ask. The knowledge base is Part A."]),
  new Paragraph({ children: [new PageBreak()] }),
  new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: "Contents", size: 34, bold: true, color: INK, font: "Calibri" })] }),
  new TableOfContents("Contents", { hyperlink: true, headingStyleRange: "1-2" }),
  new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "In Word, right-click the contents and choose Update Field to populate page numbers.", size: 16, italics: true, color: MUTE, font: "Georgia" })] }),
  new Paragraph({ children: [new PageBreak()] }),
];

const doc = new Document({
  creator: "Interview Preparation",
  title: "Frontier Technology Governance — Part B: Interview and Case Preparation",
  numbering: numberingConfig(),
  styles: { default: { document: { run: { font: "Georgia", size: 21, color: L.BODY } } } },
  sections: [{ properties: { page: PAGE },
    footers: { default: footer("Frontier Technology Governance · Part B: Interview and Case Preparation") },
    children: [...tp, ...build(mods)] }],
});

Packer.toBuffer(doc).then((buf) => {
  const out = process.argv[2] || "GRIP_PartB_InterviewCasePrep.docx";
  fs.writeFileSync(out, buf);
  console.log("wrote", out, (buf.length / 1024).toFixed(0) + "KB");
});
