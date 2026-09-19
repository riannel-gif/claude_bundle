const fs = require("fs");
const L = require("./lib.js");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, TableOfContents, PageBreak,
  INK, ACCENT, MUTE, build, numberingConfig, footer, PAGE,
} = L;

const mods = [
  ...require("./a1-role-and-craft.js").blocks,
  ...require("./a2-domains.js").blocks,
  ...require("./a3-wef-landscape-transformation.js").blocks,
  ...require("./a5-appendices.js").blocks,
  ...require("./a4-glossary.js").blocks,
];

// ---------- Title page ----------
const tp = [];
tp.push(new Paragraph({ spacing: { before: 1200, after: 0 }, children: [
  new TextRun({ text: "INTERVIEW PREPARATION · PART A", size: 24, bold: true, color: ACCENT, font: "Calibri", characterSpacing: 50 }),
]}));
tp.push(new Paragraph({ spacing: { before: 40, after: 0 }, border: { bottom: { color: ACCENT, size: 14, style: L.docx.BorderStyle.SINGLE, space: 10 } }, children: [] }));
tp.push(new Paragraph({ spacing: { before: 300, after: 0 }, children: [
  new TextRun({ text: "Frontier Technology &", size: 58, bold: true, color: INK, font: "Calibri" }),
]}));
tp.push(new Paragraph({ spacing: { before: 0, after: 40 }, children: [
  new TextRun({ text: "Regulatory Innovation", size: 58, bold: true, color: INK, font: "Calibri" }),
]}));
tp.push(new Paragraph({ spacing: { before: 0, after: 240 }, children: [
  new TextRun({ text: "The Knowledge Base", size: 34, color: ACCENT, font: "Calibri", italics: true }),
]}));
tp.push(new Paragraph({ spacing: { after: 40 }, children: [
  new TextRun({ text: "Policy Lead, Global Regulatory Innovation Platform (GRIP)", size: 26, bold: true, color: INK, font: "Calibri" }),
]}));
tp.push(new Paragraph({ spacing: { after: 480 }, children: [
  new TextRun({ text: "Centre for Frontier Technologies and Innovation · World Economic Forum · Geneva", size: 21, color: MUTE, font: "Georgia" }),
]}));
tp.push(L.callout([
  "Part A of a two-part dossier. This volume is the subject-matter depth: the regulatory-innovation discipline, the five frontier-technology domains at technical and governance depth, the WEF operating model, the global landscape, and a regulatory-transformation chapter written in the language a management-consulting panel reasons with. Part B (companion) covers the case-interview, frameworks and behavioural preparation.",
]));
tp.push(new Paragraph({ spacing: { before: 640 }, children: [
  new TextRun({ text: "Confidential study document", size: 18, color: MUTE, font: "Calibri" }),
]}));
tp.push(new Paragraph({ children: [new PageBreak()] }));

// ---------- Contents ----------
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
  title: "Frontier Technology & Regulatory Innovation — Part A: Knowledge Base",
  numbering: numberingConfig(),
  styles: { default: { document: { run: { font: "Georgia", size: 21, color: L.BODY } } } },
  sections: [{
    properties: { page: PAGE },
    footers: { default: footer("Frontier Tech & Regulatory Innovation — Part A: Knowledge Base") },
    children: [ ...tp, ...toc, ...build(mods) ],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  const out = process.argv[2] || "GRIP_Dossier_PartA_KnowledgeBase.docx";
  fs.writeFileSync(out, buf);
  console.log("wrote", out, (buf.length / 1024).toFixed(0) + "KB");
});
