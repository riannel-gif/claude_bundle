const fs = require("fs");
const L = require("./lib.js");
const {
  Document, Packer, Paragraph, TextRun, TableOfContents, PageBreak,
  INK, ACCENT, MUTE, build, numberingConfig, footer, PAGE,
} = L;

const mods = [
  ...require("./b1-panel-and-frameworks.js").blocks,
  ...require("./b2-cases.js").blocks,
  ...require("./b3-qa-pei.js").blocks,
];

const tp = [];
tp.push(new Paragraph({ spacing: { before: 1200, after: 0 }, children: [
  new TextRun({ text: "INTERVIEW PREPARATION · PART B", size: 24, bold: true, color: ACCENT, font: "Calibri", characterSpacing: 50 }),
]}));
tp.push(new Paragraph({ spacing: { before: 40, after: 0 }, border: { bottom: { color: ACCENT, size: 14, style: L.docx.BorderStyle.SINGLE, space: 10 } }, children: [] }));
tp.push(new Paragraph({ spacing: { before: 300, after: 0 }, children: [
  new TextRun({ text: "Interview & Case Prep", size: 56, bold: true, color: INK, font: "Calibri" }),
]}));
tp.push(new Paragraph({ spacing: { before: 40, after: 240 }, children: [
  new TextRun({ text: "For a management-consulting partner panel", size: 30, color: ACCENT, font: "Calibri", italics: true }),
]}));
tp.push(new Paragraph({ spacing: { after: 40 }, children: [
  new TextRun({ text: "Policy Lead, Global Regulatory Innovation Platform (GRIP)", size: 26, bold: true, color: INK, font: "Calibri" }),
]}));
tp.push(new Paragraph({ spacing: { after: 480 }, children: [
  new TextRun({ text: "Centre for Frontier Technologies and Innovation · World Economic Forum · Geneva", size: 21, color: MUTE, font: "Georgia" }),
]}));
tp.push(L.callout([
  "Part B of a two-part dossier. This volume is the rehearsal layer: how an ex-consultant panel interviews and scores; a frameworks primer; ten structured problem-solving cases with issue trees and model answers; the expert Q&A bank; and the Personal Experience Interview drills built from your own background. Pair it with Part A (the Knowledge Base).",
]));
tp.push(new Paragraph({ spacing: { before: 640 }, children: [
  new TextRun({ text: "Confidential study document", size: 18, color: MUTE, font: "Calibri" }),
]}));
tp.push(new Paragraph({ children: [new PageBreak()] }));

const toc = [];
toc.push(new Paragraph({ spacing: { after: 160 }, children: [
  new TextRun({ text: "Contents", size: 34, bold: true, color: INK, font: "Calibri" }),
]}));
toc.push(new TableOfContents("Contents", { hyperlink: true, headingStyleRange: "1-2" }));
toc.push(new Paragraph({ spacing: { before: 200 }, children: [
  new TextRun({ text: "In Word, right-click the contents and choose “Update Field” to populate page numbers.", size: 16, italics: true, color: MUTE, font: "Georgia" }),
]}));
toc.push(new Paragraph({ children: [new PageBreak()] }));

const doc = new Document({
  creator: "Interview Preparation",
  title: "Frontier Technology & Regulatory Innovation — Part B: Interview & Case Prep",
  numbering: numberingConfig(),
  styles: { default: { document: { run: { font: "Georgia", size: 21, color: L.BODY } } } },
  sections: [{
    properties: { page: PAGE },
    footers: { default: footer("Frontier Tech & Regulatory Innovation — Part B: Interview & Case Prep") },
    children: [ ...tp, ...toc, ...build(mods) ],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  const out = process.argv[2] || "GRIP_Dossier_PartB_InterviewCasePrep.docx";
  fs.writeFileSync(out, buf);
  console.log("wrote", out, (buf.length / 1024).toFixed(0) + "KB");
});
