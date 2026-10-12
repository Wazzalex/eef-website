import type { FundingIcon as IconName } from "@/content/site";

/** Petites icônes en trait, une par type de poste financé. */
export default function ProjectIcon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "classe":
      // tableau d'école sur pieds
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="1.5" />
          <path d="M7 8h7M7 11h10" />
          <path d="M8 20l4-4 4 4" />
        </svg>
      );
    case "nature":
      // sapin devant une montagne
      return (
        <svg {...common}>
          <path d="M2 20l6-10 3.5 5.5" />
          <path d="M9 20l4.5-8L22 20Z" />
          <path d="M8 20v-2M15 20v-1.5" />
          <path d="M8 10l-2-3h4Z" />
        </svg>
      );
    case "concert":
      // note de musique
      return (
        <svg {...common}>
          <path d="M9 18V6l10-2v12" />
          <circle cx="6.5" cy="18" r="2.5" />
          <circle cx="16.5" cy="16" r="2.5" />
        </svg>
      );
    case "spectacle":
      // rideau de scène
      return (
        <svg {...common}>
          <path d="M3 4h18" />
          <path d="M5 4v16M19 4v16" />
          <path d="M5 4c3 3 3 8 1 11M19 4c-3 3-3 8-1 11" />
          <path d="M12 10l1 2.2 2.4.3-1.7 1.7.4 2.4-2.1-1.1-2.1 1.1.4-2.4-1.7-1.7 2.4-.3Z" />
        </svg>
      );
    case "cadeau":
      // paquet cadeau
      return (
        <svg {...common}>
          <rect x="3" y="9" width="18" height="12" rx="1.5" />
          <path d="M3 13h18M12 9v12" />
          <path d="M12 9c-1.5-4-6-4-5-1.5S12 9 12 9Zm0 0c1.5-4 6-4 5-1.5S12 9 12 9Z" />
        </svg>
      );
    case "cirque":
      return (
        <svg {...common}>
          <path d="M3 10c3-3 15-3 18 0" />
          <path d="M4 10 3 20h18l-1-10" />
          <path d="M8 10l1 10M16 10l-1 10M12 10v10" />
          <path d="M12 3v3M9 6l3-3 3 3" />
        </svg>
      );
    case "livre":
      return (
        <svg {...common}>
          <path d="M4 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4Z" />
          <path d="M20 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7Z" />
          <path d="M7 9h3M7 12h3" />
        </svg>
      );
    case "lecture":
      return (
        <svg {...common}>
          <path d="M5 4h14v16H5Z" />
          <path d="M9 4v16" />
          <path d="M14 9l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4Z" />
        </svg>
      );
    case "elevage":
      return (
        <svg {...common}>
          <path d="M12 21c4 0 7-3.2 7-7.5C19 8.5 15.5 3 12 3S5 8.5 5 13.5C5 17.8 8 21 12 21Z" />
          <path d="M9 14c1 1 5 1 6 0" />
          <path d="M10 10h.01M14 10h.01" />
        </svg>
      );
    case "numerique":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 7h8M8 11h8M8 15h5" />
        </svg>
      );
    case "roller":
      return (
        <svg {...common}>
          <path d="M4 14V6a2 2 0 0 1 2-2h4l3 6h5a3 3 0 0 1 3 3v1H4Z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="13" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
        </svg>
      );
  }
}
