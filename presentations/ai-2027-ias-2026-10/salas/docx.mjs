import {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  Footer,
  Header,
  HeightRule,
  ImageRun,
  LevelFormat,
  Packer,
  PageNumber,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  UnderlineType,
  VerticalAlign,
  WidthType,
} from 'docx';
import { marked } from 'marked';
// Genera sala.docx y respuestas.docx a partir de los .md de esta carpeta, con un
// diseño propio (cabecera azul marino con logos, títulos en naranja, tablas con
// cabecera oscura y filas alternas, citas en recuadro). Todo el formato va
// aplicado directamente a cada elemento, porque Google Docs respeta mejor eso que
// los estilos de una plantilla al convertir. Uso: pnpm sala
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = dirname(fileURLToPath(import.meta.url));

const C = {
  navy: '0F172A',
  text: '1E293B',
  muted: '64748B',
  orange: 'FF6600',
  orangeLogo: 'FF9416',
  orangeSoft: 'FFF4EA',
  zebra: 'F8FAFC',
  line: 'CBD5E1',
  white: 'FFFFFF',
};
const F = { body: 'Montserrat', title: 'Saira Condensed', quote: 'Roboto Slab', mono: 'Fira Code' };

// A4 con márgenes de 2 cm: ancho útil en twips.
const PAGE = { width: 11906, height: 16838, margin: 1134 };
const CONTENT = PAGE.width - 2 * PAGE.margin;

const NONE = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const NO_BORDERS = { top: NONE, bottom: NONE, left: NONE, right: NONE };
const THIN = { style: BorderStyle.SINGLE, size: 4, color: C.line };
const GRID = { top: THIN, bottom: THIN, left: THIN, right: THIN };
const TABLE_NONE = { ...NO_BORDERS, insideHorizontal: NONE, insideVertical: NONE };
const TABLE_GRID = { ...GRID, insideHorizontal: THIN, insideVertical: THIN };

// Ancho de las columnas (en %) según la cabecera de cada tabla.
const WIDTHS = [
  [
    ['Nº', 'AI 2027 predijo', 'Cuándo', 'Sala 1'],
    [5, 43, 16, 12, 12, 12],
  ],
  [
    ['Sala', 'Lo que más se ha adelantado'],
    [10, 45, 45],
  ],
  [
    ['Sala', 'Bando'],
    [10, 22, 68],
  ],
  [
    ['Nº', 'AI 2027 predijo', 'Cuándo', 'Lo que ha pasado'],
    [5, 30, 13, 32, 20],
  ],
];

function widthsFor(headers) {
  for (const [keys, w] of WIDTHS) {
    if (keys.every((k, i) => (headers[i] ?? '').startsWith(k)) && w.length === headers.length) {
      return w;
    }
  }
  return headers.map(() => 100 / headers.length);
}

// ---------- Texto en línea ----------

function runs(tokens, base = {}) {
  const out = [];
  for (const t of tokens ?? []) {
    switch (t.type) {
      case 'strong':
        out.push(...runs(t.tokens, { ...base, bold: true }));
        break;
      case 'em':
        out.push(...runs(t.tokens, { ...base, italics: true }));
        break;
      case 'codespan':
        out.push(new TextRun({ ...base, text: decode(t.text), font: F.mono }));
        break;
      case 'link':
        out.push(
          new ExternalHyperlink({
            link: t.href,
            children: runs(t.tokens, {
              ...base,
              color: base.color ?? C.navy,
              underline: { type: UnderlineType.SINGLE, color: C.orange },
            }),
          }),
        );
        break;
      case 'br':
        out.push(new TextRun({ ...base, break: 1 }));
        break;
      case 'text':
        if (t.tokens) out.push(...runs(t.tokens, base));
        else out.push(new TextRun({ ...base, text: decode(t.text) }));
        break;
      default:
        out.push(new TextRun({ ...base, text: decode(t.raw ?? t.text ?? '') }));
    }
  }
  return out;
}

function decode(s) {
  return String(s)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

const body = { font: F.body, size: 20, color: C.text };

function para(tokens, opts = {}, base = body) {
  return new Paragraph({
    spacing: { after: 120, line: 290 },
    ...opts,
    children: runs(tokens, base),
  });
}

// ---------- Bloques ----------

function heading2(text) {
  return new Paragraph({
    spacing: { before: 360, after: 140 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.line, space: 4 } },
    keepNext: true,
    children: [
      new TextRun({ text, font: F.title, bold: true, size: 30, color: C.orange, allCaps: true }),
    ],
  });
}

function heading3(tokens) {
  return new Paragraph({
    spacing: { before: 240, after: 80 },
    keepNext: true,
    children: runs(tokens, { font: F.body, bold: true, size: 22, color: C.navy }),
  });
}

function quoteBox(paragraphs) {
  return new Table({
    borders: TABLE_NONE,
    width: { size: CONTENT, type: WidthType.DXA },
    columnWidths: [CONTENT],
    layout: TableLayoutType.FIXED,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: CONTENT, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.orangeSoft },
            borders: {
              ...NO_BORDERS,
              left: { style: BorderStyle.SINGLE, size: 24, color: C.orange },
            },
            margins: { top: 120, bottom: 120, left: 200, right: 200 },
            children: paragraphs.map((tokens, i) =>
              para(
                tokens,
                { spacing: { after: i < paragraphs.length - 1 ? 100 : 0, line: 290 } },
                { font: F.quote, size: 20, color: C.navy },
              ),
            ),
          }),
        ],
      }),
    ],
  });
}

function table(tok) {
  const headers = tok.header.map((h) => decode(h.text));
  const pct = widthsFor(headers);
  const widths = pct.map((p) => Math.round((p / 100) * CONTENT));
  const fillIn = tok.rows.some((r) => r.some((c) => !c.text.trim()));
  // Las filas donde se escribe una frase o un argumento son más altas.
  const tallRows = fillIn && (headers.includes('Bando') || headers[1]?.startsWith('Lo que más'));
  const cell = (content, i, opts) =>
    new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      borders: GRID,
      verticalAlign: VerticalAlign.CENTER,
      margins: { top: 70, bottom: 70, left: 100, right: 100 },
      ...opts,
      children: [new Paragraph({ spacing: { after: 0, line: 260 }, children: content })],
    });
  const head = new TableRow({
    tableHeader: true,
    children: tok.header.map((h, i) =>
      cell(runs(h.tokens, { font: F.body, size: 18, bold: true, color: C.white }), i, {
        shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.navy },
      }),
    ),
  });
  const rows = tok.rows.map(
    (r, ri) =>
      new TableRow({
        height: { value: tallRows ? 900 : fillIn ? 420 : 0, rule: HeightRule.ATLEAST },
        cantSplit: true,
        children: r.map((c, i) =>
          cell(runs(c.tokens, { font: F.body, size: 18, color: C.text }), i, {
            shading: ri % 2 ? { type: ShadingType.CLEAR, color: 'auto', fill: C.zebra } : undefined,
          }),
        ),
      }),
  );
  return [
    new Table({
      borders: TABLE_GRID,
      width: { size: CONTENT, type: WidthType.DXA },
      columnWidths: widths,
      layout: TableLayoutType.FIXED,
      rows: [head, ...rows],
    }),
    new Paragraph({ spacing: { after: 120 }, children: [] }),
  ];
}

let listInstance = 0;

function list(tok, level = 0) {
  const instance = ++listInstance;
  const out = [];
  for (const item of tok.items) {
    const inline = [];
    const nested = [];
    for (const t of item.tokens) {
      if (t.type === 'list') nested.push(t);
      else if (t.type === 'text' || t.type === 'paragraph') inline.push(...(t.tokens ?? [t]));
    }
    out.push(
      new Paragraph({
        numbering: { reference: tok.ordered ? 'ordered' : 'bullets', level, instance },
        spacing: { after: 80, line: 290 },
        children: runs(inline, body),
      }),
    );
    for (const n of nested) out.push(...list(n, level + 1));
  }
  return out;
}

// Un párrafo que empieza en negrita y es corto («**Qué ha pasado**») va como etiqueta.
function isLabel(tok) {
  return tok.tokens?.[0]?.type === 'strong' && tok.text.length < 60 && !tok.text.includes(':');
}

function banner(title, subtitle, kicker, logos) {
  const half = Math.round(CONTENT / 2);
  const fill = { type: ShadingType.CLEAR, color: 'auto', fill: C.navy };
  const pad = { left: 300, right: 300 };
  return new Table({
    borders: TABLE_NONE,
    width: { size: CONTENT, type: WidthType.DXA },
    columnWidths: [half, CONTENT - half],
    layout: TableLayoutType.FIXED,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: half, type: WidthType.DXA },
            shading: fill,
            borders: NO_BORDERS,
            margins: { ...pad, top: 260, bottom: 60 },
            children: [new Paragraph({ children: [logos.ias] })],
          }),
          new TableCell({
            width: { size: CONTENT - half, type: WidthType.DXA },
            shading: fill,
            borders: NO_BORDERS,
            margins: { ...pad, top: 260, bottom: 60 },
            children: [
              new Paragraph({ alignment: AlignmentType.RIGHT, children: [logos.pauseai] }),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 2,
            width: { size: CONTENT, type: WidthType.DXA },
            shading: fill,
            borders: NO_BORDERS,
            margins: { ...pad, top: 160, bottom: 280 },
            children: [
              new Paragraph({
                spacing: { after: 60 },
                children: [
                  new TextRun({
                    text: kicker,
                    font: F.title,
                    bold: true,
                    size: 20,
                    color: C.orangeLogo,
                    allCaps: true,
                  }),
                ],
              }),
              new Paragraph({
                spacing: { after: 60 },
                children: [
                  new TextRun({
                    text: title,
                    font: F.title,
                    bold: true,
                    size: 48,
                    color: C.white,
                    allCaps: true,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({ text: subtitle, font: F.body, size: 20, color: 'CBD5E1' }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function build(mdFile, outFile, logos) {
  const tokens = marked.lexer(readFileSync(join(DIR, mdFile), 'utf8'));
  const children = [];
  let headerText = '';
  let i = 0;

  // El título (# ...) y la línea siguiente van en la cabecera azul.
  const h1 = tokens.findIndex((t) => t.type === 'heading' && t.depth === 1);
  if (h1 >= 0) {
    const [title, doc = ''] = decode(tokens[h1].text).split(' · ');
    const next = tokens.slice(h1 + 1).find((t) => t.type === 'paragraph');
    const kicker = next ? decode(next.text) : '';
    children.push(
      banner(title, doc, kicker, logos),
      new Paragraph({ spacing: { after: 200 }, children: [] }),
    );
    headerText = `${title} · ${doc}`;
    i = tokens.indexOf(next) + 1;
  }

  for (; i < tokens.length; i++) {
    const t = tokens[i];
    switch (t.type) {
      case 'heading':
        if (t.depth <= 2) children.push(heading2(decode(t.text)));
        else children.push(heading3(t.tokens));
        break;
      case 'paragraph':
        if (t.text.startsWith('Fuentes:')) {
          children.push(
            para(
              t.tokens,
              { spacing: { after: 160, line: 260 } },
              { font: F.body, size: 16, color: C.muted },
            ),
          );
        } else if (isLabel(t)) {
          children.push(
            new Paragraph({
              spacing: { before: 120, after: 60 },
              keepNext: true,
              children: runs(t.tokens, { font: F.body, size: 18, bold: true, color: C.orange }),
            }),
          );
        } else {
          children.push(para(t.tokens));
        }
        break;
      case 'list':
        children.push(...list(t));
        break;
      case 'blockquote':
        children.push(
          quoteBox(t.tokens.filter((b) => b.type === 'paragraph').map((b) => b.tokens)),
          new Paragraph({ spacing: { after: 100 }, children: [] }),
        );
        break;
      case 'table':
        children.push(...table(t));
        break;
      default:
        break;
    }
  }

  const doc = new Document({
    creator: 'PauseAI España',
    title: headerText,
    styles: { default: { document: { run: { font: F.body, size: 20, color: C.text } } } },
    numbering: {
      config: [
        {
          reference: 'bullets',
          levels: [0, 1].map((level) => ({
            level,
            format: LevelFormat.BULLET,
            text: level ? '◦' : '•',
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: { indent: { left: 360 * (level + 1), hanging: 260 } },
              run: { color: C.orange },
            },
          })),
        },
        {
          reference: 'ordered',
          levels: [0, 1].map((level) => ({
            level,
            format: level ? LevelFormat.LOWER_LETTER : LevelFormat.DECIMAL,
            text: `%${level + 1}.`,
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: { indent: { left: 360 * (level + 1), hanging: 300 } },
              run: { color: C.orange, bold: true },
            },
          })),
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: PAGE.width, height: PAGE.height },
            margin: {
              top: PAGE.margin,
              bottom: PAGE.margin,
              left: PAGE.margin,
              right: PAGE.margin,
            },
          },
          titlePage: true,
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({ text: headerText, font: F.body, size: 16, color: C.muted }),
                ],
              }),
            ],
          }),
          first: new Header({ children: [new Paragraph({ children: [] })] }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: 'Grupo de lectura iaS × PauseAI España · ',
                    font: F.body,
                    size: 16,
                    color: C.muted,
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    font: F.body,
                    size: 16,
                    color: C.muted,
                  }),
                ],
              }),
            ],
          }),
        },
        children,
      },
    ],
  });

  return Packer.toBuffer(doc).then((buf) => {
    writeFileSync(join(DIR, outFile), buf);
    console.log(`${outFile}: listo`);
  });
}

const logo = (file, w, h) =>
  new ImageRun({
    type: 'png',
    data: readFileSync(join(DIR, file)),
    transformation: { width: w, height: h },
  });

const logos = () => ({
  ias: logo('logo-ias.png', 41, 30),
  pauseai: logo('logo-pauseai.png', 103, 28),
});

await build('sala.md', 'sala.docx', logos());
await build('respuestas.md', 'respuestas.docx', logos());
