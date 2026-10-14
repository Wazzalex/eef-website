/**
 * Préfixe un chemin de fichier du dossier `public/` avec le basePath du site
 * (vide avec le nom de domaine ; « /eef-website » si le site était servi dans un sous-dossier).
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
