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
  new TextRun({ text: "CONVERSATION BRIEF", size: 24, bold: true, color: ACCENT, font: "Calibri", characterSpacing: 60 }),
]}));
tp.push(new Paragraph({ spacing: { before: 40, after: 0 }, border: { bottom: { color: ACCENT, size: 14, style: L.docx.BorderStyle.SINGLE, space: 10 } }, children: [] }));
tp.push(new Paragraph({ spacing: { before: 300, after: 0 }, children: [
  new TextRun({ text: "Applied AI, Impact &", size: 58, bold: true, color: INK, font: "Calibri" }),
]}));
tp.push(new Paragraph({ spacing: { before: 0, after: 240 }, children: [
  new TextRun({ text: "the AI-First Enterprise", size: 58, bold: true, color: INK, font: "Calibri" }),
]}));
tp.push(new Paragraph({ spacing: { after: 120 }, children: [
  new TextRun({ text: "An exploratory-conversation brief for a meeting with", size: 24, color: MUTE, font: "Georgia", italics: true }),
]}));
tp.push(new Paragraph({ spacing: { after: 40 }, children: [
  new TextRun({ text: "Maria Basso — Head of AI Applications & Impact", size: 26, bold: true, color: INK, font: "Calibri" }),
]}));
tp.push(new Paragraph({ spacing: { after: 500 }, children: [
  new TextRun({ text: "Centre for AI Excellence · World Economic Forum", size: 21, color: MUTE, font: "Georgia" }),
]}));
tp.push(L.callout([
  "Purpose: to prepare you to hold a sharp, additive conversation with Maria Basso about her work on the MINDS programme and the AI-First Operating System — and, with no job description in play, to arm you with the specific questions and positioning that surface your background and suitability for a role on her team.",
]));
tp.push(new Paragraph({ spacing: { before: 700 }, children: [
  new TextRun({ text: "Prepared September 2026 · Confidential preparation document", size: 18, color: MUTE, font: "Calibri" }),
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
  creator: "Conversation Preparation",
  title: "Applied AI & the AI-First Enterprise — Conversation Brief (Maria Basso, WEF)",
  description: "Exploratory-conversation brief for a meeting with Maria Basso, Centre for AI Excellence, World Economic Forum.",
  numbering: numberingConfig(),
  styles: {
    default: { document: { run: { font: "Georgia", size: 21, color: L.BODY } } },
  },
  sections: [{
    properties: { page: PAGE },
    footers: { default: footer("Conversation Brief — Maria Basso, WEF Centre for AI Excellence") },
    children: [ ...tp, ...toc, ...build(report), ...build(qa) ],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  const out = process.argv[2] || "Maria_Basso_Conversation_Brief.docx";
  fs.writeFileSync(out, buf);
  console.log("wrote", out, (buf.length / 1024).toFixed(0) + "KB");
});
