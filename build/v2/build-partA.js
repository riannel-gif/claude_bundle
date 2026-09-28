const fs = require("fs");
const path = require("path");
const L = require("../lib.js");
const { Document, Packer, Paragraph, TextRun, TableOfContents, PageBreak,
  INK, ACCENT, MUTE, build, numberingConfig, footer, PAGE } = L;

const mods = [
  "pa0-role", "pa1-foundations", "pa2-ecosystem",
  "pa3a-quantum", "pa3b-mobility", "pa3c-biotech", "pa3d-space-ai",
  "pa4-approaches", "pa5-barriers", "pa6-glossary",
].flatMap((m) => require(path.join(__dirname, m + ".js")).blocks);

const tp = [
  new Paragraph({ spacing: { before: 1200 }, children: [
    new TextRun({ text: "INTERVIEW PREPARATION · PART A", size: 24, bold: true, color: ACCENT, font: "Calibri", characterSpacing: 50 })] }),
  new Paragraph({ spacing: { before: 40 }, border: { bottom: { color: ACCENT, size: 14, style: L.docx.BorderStyle.SINGLE, space: 10 } }, children: [] }),
  new Paragraph({ spacing: { before: 300 }, children: [new TextRun({ text: "Frontier Technology Governance", size: 56, bold: true, color: INK, font: "Calibri" })] }),
  new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Knowledge Base", size: 34, italics: true, color: ACCENT, font: "Calibri" })] }),
  new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Policy Lead, Global Regulatory Innovation Platform (GRIP)", size: 26, bold: true, color: INK, font: "Calibri" })] }),
  new Paragraph({ spacing: { after: 480 }, children: [new TextRun({ text: "World Economic Forum · Geneva", size: 21, color: MUTE, font: "Georgia" })] }),
  L.callout(["Part A of two. Foundational concepts, the ecosystem, key technologies (quantum as the flagship), governance approaches, and barriers and geopolitics. Interview questions and case preparation are in Part B."]),
  new Paragraph({ children: [new PageBreak()] }),
  new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: "Contents", size: 34, bold: true, color: INK, font: "Calibri" })] }),
  new TableOfContents("Contents", { hyperlink: true, headingStyleRange: "1-2" }),
  new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "In Word, right-click the contents and choose Update Field to populate page numbers.", size: 16, italics: true, color: MUTE, font: "Georgia" })] }),
  new Paragraph({ children: [new PageBreak()] }),
];

const doc = new Document({
  creator: "Interview Preparation",
  title: "Frontier Technology Governance — Part A: Knowledge Base",
  numbering: numberingConfig(),
  styles: { default: { document: { run: { font: "Georgia", size: 21, color: L.BODY } } } },
  sections: [{ properties: { page: PAGE },
    footers: { default: footer("Frontier Technology Governance · Part A: Knowledge Base") },
    children: [...tp, ...build(mods)] }],
});

Packer.toBuffer(doc).then((buf) => {
  const out = process.argv[2] || "GRIP_PartA_KnowledgeBase.docx";
  fs.writeFileSync(out, buf);
  console.log("wrote", out, (buf.length / 1024).toFixed(0) + "KB");
});
