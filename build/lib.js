// Shared docx-js builder: a tiny block DSL -> docx elements.
const docx = require("docx");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  PageBreak, Header, Footer, PageNumber, TableOfContents, LevelFormat,
  PositionalTab, PositionalTabAlignment, PositionalTabLeader
} = docx;

const INK = "1F2A44";      // deep navy for headings
const ACCENT = "2F5D8A";   // steel blue
const RULE = "C9D3E0";     // light rule
const BODY = "1A1A1A";
const MUTE = "55606E";

// ---- inline parser: **bold**, *italic*, and `code` ----
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const tok = m[0];
    if (tok.startsWith("**")) out.push(new TextRun({ text: tok.slice(2, -2), bold: true, ...base }));
    else if (tok.startsWith("`")) out.push(new TextRun({ text: tok.slice(1, -1), font: "Consolas", ...base }));
    else out.push(new TextRun({ text: tok.slice(1, -1), italics: true, ...base }));
    last = re.lastIndex;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), ...base }));
  return out;
}

const P = (text, opts = {}) => new Paragraph({
  children: runs(text, { size: 21, color: BODY, font: "Georgia" }),
  spacing: { after: 140, line: 276 },
  alignment: opts.center ? AlignmentType.CENTER : AlignmentType.JUSTIFIED,
  ...opts.pp,
});

const LEAD = (text) => new Paragraph({
  children: runs(text, { size: 22, color: MUTE, font: "Georgia", italics: true }),
  spacing: { after: 200, line: 288 },
});

function H1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 260, after: 140 },
    border: { bottom: { color: ACCENT, size: 12, style: BorderStyle.SINGLE, space: 6 } },
    children: runs(text, { size: 30, bold: true, color: INK, font: "Calibri" }),
  });
}
function H2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 220, after: 100 },
    children: runs(text, { size: 25, bold: true, color: ACCENT, font: "Calibri" }),
  });
}
function H3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 160, after: 70 },
    children: runs(text, { size: 22, bold: true, color: INK, font: "Calibri" }),
  });
}

function bullets(items, lvl = 0) {
  return items.map((t) => new Paragraph({
    children: runs(t, { size: 21, color: BODY, font: "Georgia" }),
    bullet: { level: lvl },
    spacing: { after: 70, line: 268 },
  }));
}
function numbered(items, ref = "mainNum") {
  return items.map((t) => new Paragraph({
    children: runs(t, { size: 21, color: BODY, font: "Georgia" }),
    numbering: { reference: ref, level: 0 },
    spacing: { after: 70, line: 268 },
  }));
}

function callout(lines) {
  const kids = lines.map((t, i) => new Paragraph({
    children: runs(t, { size: 20, color: INK, font: "Georgia" }),
    spacing: { after: i === lines.length - 1 ? 0 : 90, line: 264 },
  }));
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [9360],
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: ACCENT },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: ACCENT },
      left: { style: BorderStyle.SINGLE, size: 24, color: ACCENT },
      right: { style: BorderStyle.SINGLE, size: 4, color: ACCENT },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.NONE },
    },
    rows: [ new TableRow({ children: [ new TableCell({
      width: { size: 9360, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: "EEF3F9" },
      margins: { top: 120, bottom: 120, left: 200, right: 200 },
      children: kids,
    })]})],
  });
}

function table(head, rows, widths) {
  const total = widths.reduce((a, b) => a + b, 0);
  const headRow = new TableRow({
    tableHeader: true,
    children: head.map((h, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: INK },
      margins: { top: 60, bottom: 60, left: 90, right: 90 },
      children: [new Paragraph({ children: runs(h, { size: 18, bold: true, color: "FFFFFF", font: "Calibri" }) })],
    })),
  });
  const bodyRows = rows.map((r, ri) => new TableRow({
    children: r.map((c, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: ri % 2 ? "F4F7FB" : "FFFFFF" },
      margins: { top: 55, bottom: 55, left: 90, right: 90 },
      children: [new Paragraph({ spacing: { line: 250 }, children: runs(c, { size: 18, color: BODY, font: "Georgia" }) })],
    })),
  }));
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: widths,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 2, color: RULE },
      bottom: { style: BorderStyle.SINGLE, size: 2, color: RULE },
      left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: RULE },
      insideVertical: { style: BorderStyle.SINGLE, size: 2, color: RULE },
    },
    rows: [headRow, ...bodyRows],
  });
}

const spacer = (h = 60) => new Paragraph({ spacing: { after: h }, children: [] });
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });

// Q&A block: bold question, answer paragraph(s), optional "say-this" line
function qa(n, q, answerParas, sayThis) {
  const els = [];
  els.push(new Paragraph({
    spacing: { before: 150, after: 60, line: 264 },
    children: runs(`Q${n}. ${q}`, { size: 21, bold: true, color: INK, font: "Calibri" }),
  }));
  answerParas.forEach((a) => { els.push(P(a, { pp: { spacing: { after: 100, line: 272 } } })); });
  if (sayThis) els.push(new Paragraph({
    spacing: { after: 130, line: 262 },
    children: [ new TextRun({ text: "Signal phrase — ", bold: true, italics: true, size: 19, color: ACCENT, font: "Georgia" }),
      ...runs(sayThis, { size: 19, italics: true, color: MUTE, font: "Georgia" }) ],
  }));
  return els;
}

// Build a block list into elements
function build(blocks) {
  const els = [];
  for (const b of blocks) {
    if (b.h1) els.push(H1(b.h1));
    else if (b.h2) els.push(H2(b.h2));
    else if (b.h3) els.push(H3(b.h3));
    else if (b.p) els.push(P(b.p));
    else if (b.lead) els.push(LEAD(b.lead));
    else if (b.b) els.push(...bullets(b.b, b.lvl || 0));
    else if (b.n) els.push(...numbered(b.n, b.ref || "mainNum"));
    else if (b.callout) els.push(callout(b.callout), spacer(80));
    else if (b.table) els.push(table(b.table.head, b.table.rows, b.table.widths), spacer(80));
    else if (b.qa) els.push(...qa(b.qa.n, b.qa.q, b.qa.a, b.qa.say));
    else if (b.spacer) els.push(spacer(b.spacer));
    else if (b.pageBreak) els.push(pageBreak());
  }
  return els;
}

function numberingConfig() {
  return {
    config: [{
      reference: "mainNum",
      levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START,
        style: { paragraph: { indent: { left: 460, hanging: 260 } } } }],
    }],
  };
}

function footer(label) {
  return new Footer({ children: [ new Paragraph({
    tabStops: [{ type: docx.TabStopType.RIGHT, position: 9360 }],
    border: { top: { color: RULE, size: 4, style: BorderStyle.SINGLE, space: 6 } },
    children: [
      new TextRun({ text: label, size: 15, color: MUTE, font: "Calibri" }),
      new TextRun({ text: "\t", size: 15 }),
      new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 15, color: MUTE, font: "Calibri" }),
    ],
  })]});
}

const PAGE = {
  size: { width: 12240, height: 15840 },
  margin: { top: 1180, bottom: 1100, left: 1440, right: 1440 },
};

module.exports = {
  docx, Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  TableOfContents, PageBreak,
  INK, ACCENT, RULE, BODY, MUTE,
  P, LEAD, H1, H2, H3, bullets, numbered, callout, table, spacer, pageBreak, qa, build,
  numberingConfig, footer, PAGE, runs,
};
