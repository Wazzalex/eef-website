/** 1387 → « 1 387 € » (espace insécable fine, comme en typographie française). */
export function formatEuro(amount: number): string {
  return `${formatNumber(amount)} €`;
}

/** 150000 → « 150 000 » */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n).replace(/ /g, " ");
}

/**
 * Typographie française : espace insécable avant ? ! : ; et à l'intérieur des « ».
 * Permet d'écrire le contenu naturellement dans site.ts sans caractères invisibles.
 */
export function fr(text: string): string {
  return text
    .replace(/ ([?!:;])/g, " $1")
    .replace(/« /g, "« ")
    .replace(/ »/g, " »");
}
