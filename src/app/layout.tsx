import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fredoka";
import "@fontsource/atkinson-hyperlegible/400.css";
import "@fontsource/atkinson-hyperlegible/700.css";
import "./globals.css";
import { association } from "@/content/site";

export const metadata: Metadata = {
  title: `${association.name} — ${association.tagline}`,
  description:
    "Depuis 25 ans, les parents d'élèves des Adrets-en-Belledonne organisent les événements du village pour financer les projets des enfants de l'école. Chaque parent est membre : venez donner un coup de main !",
  openGraph: {
    title: `${association.name} · ${association.village}`,
    description:
      "L'association des parents d'élèves qui finance les projets des enfants de l'école des Adrets. Vous êtes parent ? Vous en faites déjà partie.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2A6496",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
