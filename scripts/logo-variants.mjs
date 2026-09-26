// Génère les déclinaisons du logo (blanc, bleu) à partir de public/logo.svg.
// Lancé automatiquement avant chaque build (voir "prebuild" dans package.json),
// pour ne versionner qu'un seul fichier SVG maître.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const master = readFileSync(join(root, "public", "logo.svg"), "utf8");
const ENCRE = 'fill="#1B2733"';

if (!master.includes(ENCRE)) {
  throw new Error("public/logo.svg : couleur de base introuvable (fill=\"#1B2733\")");
}

const variants = {
  "logo-blanc.svg": 'fill="#FFFFFF"',
  "logo-bleu.svg": 'fill="#2A6496"',
};

for (const [file, fill] of Object.entries(variants)) {
  writeFileSync(join(root, "public", file), master.replace(ENCRE, fill));
  console.log(`✓ public/${file}`);
}
