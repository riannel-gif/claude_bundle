const fs = require("fs");
const L = require("./lib.js");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, TableOfContents, PageBreak,
  INK, ACCENT, MUTE, build, numberingConfig, footer, PAGE,
} = L;

const report = require("./content-report.js").blocks;
const qa = require("./content-qa.js").blocks;

// ---------- Title page ----------
const tp = [];
tp.push(new Paragraph({ spacing: { before: 1400, after: 0 }, children: [
  new TextRun({ text: "INTERVIEW PREPARATION DOSSIER", size: 24, bold: true, color: ACCENT, font: "Calibri", characterSpacing: 60 }),
]}));
tp.push(new Paragraph({ spacing: { before: 40, after: 0 }, border: { bottom: { color: ACCENT, size: 14, style: L.docx.BorderStyle.SINGLE, space: 10 } }, children: [] }));
tp.push(new Paragraph({ spacing: { before: 300, after: 0 }, children: [
  new TextRun({ text: "Frontier Technology &", size: 60, bold: true, color: INK, font: "Calibri" }),
]}));
tp.push(new Paragraph({ spacing: { before: 0, after: 240 }, children: [
  new TextRun({ text: "Regulatory Innovation", size: 60, bold: true, color: INK, font: "Calibri" }),
]}));
tp.push(new Paragraph({ spacing: { after: 120 }, children: [
  new TextRun({ text: "A field-expert briefing for the role of", size: 24, color: MUTE, font: "Georgia", italics: true }),
]}));
tp.push(new Paragraph({ spacing: { after: 40 }, children: [
  new TextRun({ text: "Policy Lead, Global Regulatory Innovation Platform (GRIP)", size: 26, bold: true, color: INK, font: "Calibri" }),
]}));
tp.push(new Paragraph({ spacing: { after: 500 }, children: [
  new TextRun({ text: "Centre for Frontier Technologies and Innovation · World Economic Forum · Geneva", size: 21, color: MUTE, font: "Georgia" }),
]}));
tp.push(L.callout([
  "Purpose: to equip an adjacent-but-fast-learning candidate to hold a substantive conversation with a senior expert panel — including management-consulting-style case questions — across the regulatory-innovation craft, five frontier-technology domains, the Forum’s operating model, and the global governance landscape.",
]));
tp.push(new Paragraph({ spacing: { before: 700 }, children: [
  new TextRun({ text: "Prepared September 2026 · Confidential study document", size: 18, color: MUTE, font: "Calibri" }),
]}));
tp.push(new Paragraph({ children: [new PageBreak()] }));

// ---------- Contents ----------
const toc = [];
toc.push(new Paragraph({ spacing: { after: 160 }, children: [
  new TextRun({ text: "Contents", size: 34, bold: true, color: INK, font: "Calibri" }),
]}));
toc.push(new TableOfContents("Contents", {
  hyperlink: true,
  headingStyleRange: "1-2",
  stylesWithLevels: [],
}));
toc.push(new Paragraph({ spacing: { before: 200 }, children: [
  new TextRun({ text: "Note: in Word, right-click the contents and choose “Update Field” to populate page numbers.", size: 16, italics: true, color: MUTE, font: "Georgia" }),
]}));
toc.push(new Paragraph({ children: [new PageBreak()] }));

const doc = new Document({
  creator: "Interview Preparation",
  title: "Frontier Technology & Regulatory Innovation — Interview Dossier",
  description: "Interview preparation dossier for Policy Lead, GRIP, World Economic Forum.",
  numbering: numberingConfig(),
  styles: {
    default: { document: { run: { font: "Georgia", size: 21, color: L.BODY } } },
  },
  sections: [{
    properties: { page: PAGE },
    footers: { default: footer("Frontier Technology & Regulatory Innovation — Interview Dossier") },
    children: [ ...tp, ...toc, ...build(report), ...build(qa) ],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  const out = process.argv[2] || "GRIP_Interview_Dossier.docx";
  fs.writeFileSync(out, buf);
  console.log("wrote", out, (buf.length / 1024).toFixed(0) + "KB");
});
