import type { NextConfig } from "next";

/**
 * Site statique : Next.js génère des fichiers HTML/CSS/JS dans le dossier `out/`,
 * que GitHub Pages sert tel quel.
 *
 * `NEXT_PUBLIC_BASE_PATH` vaut "/eef-website" sur GitHub Pages (le site vit à
 * https://wazzalex.github.io/eef-website/). Quand un nom de domaine sera branché,
 * il suffira de retirer cette variable dans `.github/workflows/deploy.yml`.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  // Les images du dossier public/ sont référencées via src/lib/assets.ts,
  // qui ajoute le basePath : pas besoin du composant next/image ici.
};

export default nextConfig;
