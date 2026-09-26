import { FORM_URL } from "@/content/site";

/**
 * Ancres des sections de la page d'accueil.
 * Utilisées à la fois par les sections (attribut id) et par les liens qui y mènent
 * (menu, boutons) : un seul endroit à modifier pour renommer une ancre.
 */
export const anchors = {
  top: "top",
  content: "contenu",
  about: "association",
  projects: "projets",
  agenda: "agenda",
  contact: "contact",
} as const;

export type AnchorKey = keyof typeof anchors;

/** "projects" → "#projets" */
export function anchorHref(key: AnchorKey): string {
  return `#${anchors[key]}`;
}

/** Le Google Form « Je veux aider » est-il branché ? (voir FORM_URL dans site.ts) */
export const isHelpFormReady = FORM_URL.startsWith("http") && !FORM_URL.includes("A-REMPLACER");
