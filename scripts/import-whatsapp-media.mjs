import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const sourceDir = process.argv[2] ? path.resolve(process.argv[2]) : null;

if (!sourceDir || !fs.existsSync(sourceDir)) {
  console.error("Uso: node scripts/import-whatsapp-media.mjs /caminho/para/backup-extraido");
  process.exit(1);
}

const manifestPath = path.join(projectRoot, "data", "whatsapp-media-manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const destination = path.join(projectRoot, "public", "whatsapp-media");
fs.mkdirSync(destination, { recursive: true });

function walk(dir, acc = new Map()) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (!acc.has(entry.name)) acc.set(entry.name, full);
  }
  return acc;
}

const files = walk(sourceDir);
const imported = [];
const missing = [];

for (const item of manifest.items) {
  const found = files.get(item.filename);
  if (!found) {
    missing.push(item.filename);
    continue;
  }
  const dest = path.join(destination, item.filename);
  fs.copyFileSync(found, dest);
  imported.push({
    src: `/whatsapp-media/${item.filename}`,
    filename: item.filename,
    kind: item.kind,
    date: item.date,
    author: item.author,
  });
}

const generated = `export type ImportedMedia = {\n  src: string;\n  filename: string;\n  kind: \"image\" | \"video\";\n  date: string;\n  author: string;\n};\n\nexport const importedMedia: ImportedMedia[] = ${JSON.stringify(imported, null, 2)};\n`;
fs.writeFileSync(path.join(projectRoot, "data", "imported-media.ts"), generated, "utf8");

console.log(`Importados: ${imported.length}`);
console.log(`Não encontrados: ${missing.length}`);
if (missing.length) {
  fs.writeFileSync(path.join(projectRoot, "missing-media.txt"), missing.join("\n") + "\n", "utf8");
  console.log("Lista salva em missing-media.txt");
}
