import type { ReactNode } from "react";

/**
 * Petites icônes en trait (24 × 24), dessinées dans la couleur du texte (currentColor).
 * Pour ajouter une icône : ajouter une entrée ci-dessous ; son nom devient
 * utilisable dans src/content/site.ts (champ `icon`).
 */
const shapes = {
  /* --- association --- */
  membre: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
      <path d="M17.5 3.5 19 5l3-3" />
    </>
  ),
  cycle: (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.7" />
      <path d="M20 4v5h-5" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  montagne: (
    <>
      <path d="M3 20 10 8l4 6 2-3 5 9Z" />
      <circle cx="18" cy="6" r="2" />
    </>
  ),

  /* --- projets --- */
  cirque: (
    <>
      <path d="M3 10c3-3 15-3 18 0" />
      <path d="M4 10 3 20h18l-1-10" />
      <path d="M8 10l1 10M16 10l-1 10M12 10v10" />
      <path d="M12 3v3M9 6l3-3 3 3" />
    </>
  ),
  livre: (
    <>
      <path d="M4 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4Z" />
      <path d="M20 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7Z" />
      <path d="M7 9h3M7 12h3" />
    </>
  ),
  lecture: (
    <>
      <path d="M5 4h14v16H5Z" />
      <path d="M9 4v16" />
      <path d="M14 9l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4Z" />
    </>
  ),
  elevage: (
    <>
      <path d="M12 21c4 0 7-3.2 7-7.5C19 8.5 15.5 3 12 3S5 8.5 5 13.5C5 17.8 8 21 12 21Z" />
      <path d="M9 14c1 1 5 1 6 0" />
      <path d="M10 10h.01M14 10h.01" />
    </>
  ),
  classe: (
    <>
      <path d="M3 19 9 8l3 5 2-3 7 9Z" />
      <path d="M4 5l4 1M20 5l-4 1" />
      <path d="M6 5V3M18 5V3" />
    </>
  ),
  numerique: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </>
  ),
  roller: (
    <>
      <path d="M4 14V6a2 2 0 0 1 2-2h4l3 6h5a3 3 0 0 1 3 3v1H4Z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="13" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof shapes;

export default function Icon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shapes[name]}
    </svg>
  );
}
