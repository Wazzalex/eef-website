/**
 * Calculs tirés du contenu (totaux, pourcentages…).
 * Fonctions pures : les composants se contentent d'afficher leurs résultats.
 */
import type { Project, Season } from "@/content/site";

const sum = (values: number[]) => values.reduce((total, v) => total + v, 0);

/** Un projet financé sur le budget précédent n'entre pas dans le total de l'année. */
export function countsInYearBudget(project: Project): boolean {
  return project.countsInTotal !== false;
}

/** Budget des projets de l'année : total, plus gros montant, nombre de classes concernées. */
export function projectsBudget(projects: Project[]) {
  const counted = projects.filter(countsInYearBudget);
  return {
    total: sum(counted.map((p) => p.amount)),
    maxAmount: Math.max(...counted.map((p) => p.amount)),
    classesCount: new Set(counted.flatMap((p) => p.classes)).size,
  };
}

/** Collecte de l'année : montant récolté à ce jour et prochain événement à venir. */
export function fundraisingProgress(seasons: Season[]) {
  const events = seasons.flatMap((s) => s.events);
  return {
    raised: sum(events.map((e) => e.raisedThisYear ?? 0)),
    nextEvent: events.find((e) => e.kind === "event" && e.raisedThisYear == null),
  };
}

/** Part en pourcentage (0 si le total est nul). */
export function percentOf(part: number, whole: number): number {
  return whole > 0 ? (part / whole) * 100 : 0;
}

/** 10 422 → 10 400 (pour écrire « plus de 10 400 € »). */
export function floorToHundred(n: number): number {
  return Math.floor(n / 100) * 100;
}
