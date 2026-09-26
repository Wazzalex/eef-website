/**
 * Préfixe un chemin de fichier du dossier `public/` avec le basePath du site
 * (« /eef-website » sur GitHub Pages, rien avec un nom de domaine).
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
