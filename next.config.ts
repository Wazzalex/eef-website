import type { NextConfig } from "next";

/**
 * Site statique : Next.js génère des fichiers HTML/CSS/JS dans le dossier `out/`,
 * que GitHub Pages sert tel quel.
 *
 * Le site est servi à la racine de son nom de domaine (https://ecoleenfete-lesadrets.fr) :
 * pas de basePath. `NEXT_PUBLIC_BASE_PATH` ne sert que si le site devait un jour être
 * publié dans un sous-dossier (ex. "/eef-website" sur https://wazzalex.github.io/eef-website/).
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
