/**
 * ============================================================
 *  CONTENU DU SITE — c'est ici que tout se modifie.
 * ============================================================
 *
 *  Chiffres-clés, projets financés, calendrier de l'année,
 *  liens… Tout le texte affiché sur le site vient de ce fichier.
 *  Les composants (dans src/components) ne font que l'afficher.
 *
 *  Règles simples :
 *   - les montants sont en euros, sans espace ni symbole (ex : 1387)
 *   - une ligne qui commence par // est un commentaire, ignoré par le site
 *   - respecter les guillemets et les virgules
 */
import type { IconName } from "@/components/illustrations/Icon";

/** Lien vers le formulaire (Google Form) « Je veux aider ». */
export const FORM_URL = "https://forms.gle/A-REMPLACER";

/** Texte des boutons « Je veux aider » (en-tête, accueil, calendrier). */
export const HELP_CTA = "Je veux aider";

/** Adresse e-mail de contact de l'association (laisser vide pour ne rien afficher). */
export const CONTACT_EMAIL = "";

/** Année scolaire affichée sur le site. */
export const SCHOOL_YEAR = "2026-2027";

export const association = {
  name: "École en Fête",
  shortName: "EEF",
  village: "Les Adrets-en-Belledonne",
  school: "école des Adrets",
  tagline: "L'association des parents d'élèves de l'école des Adrets-en-Belledonne",
  /** Année de création (l'association fête ses 25 ans en 2026). */
  foundedYear: 2001,
};

/** Titre et description affichés par Google et dans les aperçus de lien (WhatsApp, Facebook…). */
export const seo = {
  title: `${association.name} — ${association.tagline}`,
  description:
    "Depuis 25 ans, les parents d'élèves des Adrets-en-Belledonne organisent les événements du village pour financer les projets des enfants de l'école. Chaque parent est membre : venez donner un coup de main !",
  shareTitle: `${association.name} · ${association.village}`,
  shareDescription:
    "L'association des parents d'élèves qui finance les projets des enfants de l'école des Adrets. Vous êtes parent ? Vous en faites déjà partie.",
};

/** Libellés du menu principal (dans l'ordre d'affichage). */
export const nav = {
  about: "L'association",
  projects: "Les projets",
  agenda: "L'année",
  contact: "Contact",
};

/* ------------------------------------------------------------
 *  CHIFFRES-CLÉS (bandeau sous le hero)
 * ------------------------------------------------------------ */
export const keyFigures = [
  { value: "25", unit: "ans", label: "au service des enfants de l'école" },
  { value: "600", prefix: "≈", unit: "enfants", label: "accompagnés depuis la création" },
  { value: "150 000", unit: "€", prefix: "≈", label: "reversés à l'école en 25 ans" },
  { value: "10", unit: "rendez-vous", label: "organisés chaque année par les parents" },
];

/* ------------------------------------------------------------
 *  BILAN DE L'ANNÉE PASSÉE (source : bilan financier)
 * ------------------------------------------------------------ */
export const lastYear = {
  label: "2025-2026",
  /** Bénéfices de tous les événements organisés. */
  eventsProfit: 8575,
  /** Don versé à l'école pour les projets des classes. */
  donation: 8500,
  /** Ce que l'EEF a offert en plus : spectacles, cadeaux… */
  extras: 1922,
};

/* ------------------------------------------------------------
 *  PROJETS PÉDAGOGIQUES FINANCÉS CETTE ANNÉE
 *  (source : « Projets pédagogiques classes avec budget EEF »)
 * ------------------------------------------------------------ */
export interface Project {
  /** Identifiant technique (sans accent ni espace). */
  id: string;
  title: string;
  description: string;
  /** Icônes disponibles : voir src/components/illustrations/Icon.tsx. */
  icon: IconName;
  /** Classes concernées. */
  classes: string[];
  /** Montant financé par l'EEF, en euros. */
  amount: number;
  /** Précision affichée en petit sous le montant (facultatif). */
  note?: string;
  /** false = financé sur le budget précédent, non compté dans le total de l'année. */
  countsInTotal?: boolean;
}

export const projects: Project[] = [
  {
    id: "livre",
    title: "Un livre créé avec Anne Peyremorte",
    description:
      "Un projet d'écriture et de création mené sur toute l'année avec une intervenante : les enfants imaginent, écrivent et fabriquent leur propre livre.",
    icon: "livre",
    classes: ["GS-CP", "CP-CE1-CE2", "CE2-CM1", "CM1-CM2"],
    amount: 2700,
    note: "Complément apporté par la coopérative de classe pour la GS-CP.",
  },
  {
    id: "cirque",
    title: "Ateliers cirque",
    description:
      "Équilibre, jonglage, acrobaties : un cycle d'ateliers avec des intervenants professionnels pour les plus petits.",
    icon: "cirque",
    classes: ["PS-MS", "GS-CP"],
    amount: 1000,
  },
  {
    id: "budget-classe",
    title: "Budget de classe & complément ski",
    description:
      "Une enveloppe libre pour chaque classe : sorties, matériel, ou complément des séances de ski de l'hiver.",
    icon: "classe",
    classes: ["PS-MS", "CP-CE1-CE2", "CE2-CM1", "CM1-CM2"],
    amount: 630,
  },
  {
    id: "incorruptibles",
    title: "Prix des Incorruptibles",
    description:
      "Le grand prix littéraire des jeunes lecteurs : chaque classe lit une sélection de livres et vote pour son préféré.",
    icon: "lecture",
    classes: ["PS-MS", "CP-CE1-CE2", "CE2-CM1", "CM1-CM2"],
    amount: 280,
    note: "La GS-CP a reçu sa sélection dès 2026.",
  },
  {
    id: "elevage",
    title: "Un élevage en classe",
    description:
      "Observer, nourrir, prendre soin : un petit élevage vivant dans la classe pour apprendre les sciences en vrai.",
    icon: "elevage",
    classes: ["PS-MS", "CP-CE1-CE2", "CE2-CM1", "CM1-CM2"],
    amount: 280,
    note: "Avec la coopérative de classe pour la GS-CP.",
  },
  {
    id: "numerique",
    title: "Abonnements numériques",
    description:
      "Des ressources pédagogiques en ligne pour travailler autrement en classe.",
    icon: "numerique",
    classes: ["CP-CE1-CE2", "CE2-CM1", "CM1-CM2"],
    amount: 150,
  },
  {
    id: "roller",
    title: "Cycle roller",
    description: "Un cycle d'initiation au roller pour les CE1-CE2.",
    icon: "roller",
    classes: ["CE1-CE2"],
    amount: 300,
    note: "Financé sur le budget 2025-2026.",
    countsInTotal: false,
  },
];

/** Projets menés gratuitement par des partenaires (affichés en note). */
export const partnerProjects =
  "D'autres projets sont portés gratuitement par la communauté de communes, la mairie et la coopérative scolaire : agriculture, défi énergie, concours PLUME « les petits Molières », vélo, natation et spectacles à l'Espace Aragon.";

/* ------------------------------------------------------------
 *  L'ANNÉE EN ÉVÉNEMENTS (source : bilan financier)
 *
 *  kind :
 *   - "event"  : événement organisé par les parents (bouton « Je veux aider »)
 *   - "meeting": réunion (AG)
 *   - "gift"   : moment offert aux enfants grâce aux bénéfices
 *
 *  raised : bénéfice de l'événement l'an dernier (laisser null si non pertinent)
 *  raisedThisYear : à remplir au fil de l'année, une fois l'événement passé
 * ------------------------------------------------------------ */
export type EventKind = "event" | "meeting" | "gift";

export interface SeasonEvent {
  id: string;
  month: string;
  /** Date précise, si connue (ex : "samedi 14 novembre"). */
  date?: string;
  title: string;
  description: string;
  kind: EventKind;
  /** Ce que font concrètement les bénévoles. */
  help?: string;
  /** Bénéfice de l'événement l'an dernier, en euros. */
  raised?: number | null;
  /** Bénéfice de cette année, une fois l'événement passé. */
  raisedThisYear?: number | null;
}

export interface Season {
  name: string;
  events: SeasonEvent[];
}

export const seasons: Season[] = [
  {
    name: "Rentrée",
    events: [
      {
        id: "ag",
        month: "Septembre",
        title: "Assemblée générale",
        description:
          "Le rendez-vous de rentrée : bilan de l'année, vote des projets à financer, élection du bureau. Chaque parent est membre et a voix au chapitre.",
        kind: "meeting",
        help: "venir, donner son avis, proposer une idée",
      },
    ],
  },
  {
    name: "Automne",
    events: [
      {
        id: "potee",
        month: "Novembre",
        title: "La Potée",
        description:
          "Le grand repas convivial du village, préparé et servi par les parents. Le rendez-vous le plus chaleureux de l'année.",
        kind: "event",
        help: "cuisine, service, installation et rangement de la salle",
        raised: 1387,
      },
      {
        id: "bourse-skis",
        month: "Novembre",
        title: "Bourse aux skis, fartage & vide-greniers",
        description:
          "Matériel de ski d'occasion, atelier fartage et buvette dans la cour de l'école, juste avant la saison.",
        kind: "event",
        help: "tenir un stand, la buvette ou l'atelier fartage",
        raised: 280,
      },
    ],
  },
  {
    name: "Hiver",
    events: [
      {
        id: "marche-noel",
        month: "Décembre",
        title: "Marché de Noël",
        description:
          "Stands, sapins, barbe à papa et pop-corn pour lancer les fêtes tous ensemble.",
        kind: "event",
        help: "tenir un stand, préparer les gourmandises",
        raised: 587,
      },
      {
        id: "spectacle-noel",
        month: "Décembre",
        title: "Spectacle de Noël",
        description: "Un spectacle offert à tous les enfants de l'école, financé par les événements de l'automne.",
        kind: "gift",
      },
      {
        id: "saint-valentin",
        month: "Février",
        title: "Saint-Valentin",
        description: "Roses ou bugnes selon les années : une petite vente qui fait plaisir à tout le village.",
        kind: "event",
        help: "préparer et distribuer les commandes",
        raised: null,
      },
      {
        id: "carnaval",
        month: "Mars",
        title: "Carnaval",
        description: "Défilé déguisé dans les rues du village, puis goûter pour tout le monde.",
        kind: "event",
        help: "encadrer le défilé, préparer le goûter",
        raised: null,
      },
      {
        id: "soiree-festive",
        month: "Mars",
        title: "Soirée festive",
        description: "Une soirée pour les familles : repas, musique et bonne humeur.",
        kind: "event",
        help: "bar, repas, décoration, musique",
        raised: 384,
      },
    ],
  },
  {
    name: "Printemps",
    events: [
      {
        id: "tombola",
        month: "Avril – Mai",
        title: "Tombola",
        description:
          "Vente de tickets pendant les vacances de printemps, tirage au sort à la fin du mois de mai.",
        kind: "event",
        help: "vendre des tickets, trouver des lots chez les commerçants",
        raised: 1299,
      },
      {
        id: "fleurs",
        month: "Mai",
        title: "Opération fleurs",
        description:
          "Commande groupée de plants et de fleurs pour les jardins : une partie du prix revient à l'école.",
        kind: "event",
        help: "diffuser le catalogue, organiser la distribution",
        raised: 450,
      },
      {
        id: "festirock",
        month: "Juin",
        title: "Festirock",
        description:
          "LE festival du village : concerts, buvette, restauration… et un concert pour les enfants, offert par l'EEF.",
        kind: "event",
        help: "montage, bar, restauration, accueil, démontage — il faut du monde !",
        raised: 4172,
      },
      {
        id: "cadeau-cm2",
        month: "Juin",
        title: "Cadeau des CM2",
        description: "Un cadeau offert à chaque élève de CM2 pour son départ au collège.",
        kind: "gift",
      },
    ],
  },
];

/* ------------------------------------------------------------
 *  TEXTES DES SECTIONS
 * ------------------------------------------------------------ */

/** En-tête commun des sections : sur-titre, titre, introduction. */
export interface SectionHeading {
  kicker: string;
  title: string;
  intro: string;
}

export const hero = {
  kicker: "Association de parents d'élèves · Les Adrets-en-Belledonne",
  title: "Aux Adrets, ce sont les parents qui font grandir l'école.",
  text: "Depuis 25 ans, École en Fête organise les rendez-vous du village pour financer les projets des enfants : cirque, livres, sorties, ski, spectacles… Vous êtes parent d'un élève ? Vous en faites déjà partie.",
  secondaryCta: "Voir les projets financés",
};

export interface InfoCard {
  /** Icônes disponibles : voir src/components/illustrations/Icon.tsx. */
  icon: IconName;
  title: string;
  text: string;
}

export const about: SectionHeading & { cards: InfoCard[] } = {
  kicker: "L'association",
  title: "Une association de parents, pour les enfants de l'école",
  intro:
    "Pas besoin d'être spécialiste ni d'avoir du temps toutes les semaines : l'EEF, c'est des parents qui donnent un coup de main quand ils le peuvent. Une heure sur un stand, un gâteau, une idée… tout compte.",
  cards: [
    {
      icon: "membre",
      title: "Vous êtes déjà membre",
      text: "Chaque parent d'élève de l'école des Adrets est automatiquement membre de l'association. Vous pouvez donner votre avis, voter à l'assemblée générale et porter un projet.",
    },
    {
      icon: "cycle",
      title: "Comment ça marche",
      text: "Les parents organisent les événements du village. Les bénéfices sont reversés à l'école et financent les projets choisis avec les enseignants, classe par classe.",
    },
    {
      icon: "montagne",
      title: "Une force rare pour un village",
      text: "Entre 8 000 et 10 000 € reversés chaque année aux enfants de l'école : peu de villages peuvent compter sur une dynamique pareille. Elle ne tient qu'à nous, les parents.",
    },
  ],
};

export const projectsSection = {
  kicker: "Ce que l'EEF finance",
  title: "Les projets des classes cette année",
  intro:
    "Chaque euro récolté pendant les événements revient aux enfants. Voici les projets pédagogiques financés par l'association pour l'année scolaire en cours.",
  gaugeTitle: "Financement de l'année",
  gaugeText:
    "La jauge se remplit au fil des événements. Plus nous sommes nombreux à donner un coup de main, plus vite elle se remplit.",
};

export const timelineSection = {
  kicker: "L'année en événements",
  title: "Où et quand donner un coup de main",
  intro:
    "Une dizaine de rendez-vous par an, portés par les parents. Chacun finance une partie des projets des enfants : choisissez celui qui vous plaît.",
  raisedLabel: "L'an dernier",
  helpLabel: "On a besoin de vous pour",
  /** Étiquette affichée sur chaque carte, selon le type de rendez-vous. */
  kindLabels: {
    event: "Événement",
    meeting: "Réunion",
    gift: "Offert aux enfants",
  } satisfies Record<EventKind, string>,
};

export const contactSection = {
  kicker: "Contact",
  title: "Une question, une idée, un peu de temps ?",
  text: "Dites-nous simplement ce que vous aimeriez faire : tenir un stand, cuisiner, prêter du matériel, rejoindre le bureau… On vous recontacte vite.",
  cta: "Remplir le formulaire",
  fallback: "Le formulaire arrive très bientôt. En attendant, venez nous voir à la sortie de l'école ou lors de l'assemblée générale de rentrée.",
  emailLabel: "Par e-mail :",
};

export const footer = {
  member: "Chaque parent d'élève est automatiquement membre de l'association.",
  credits: "Site réalisé par des parents bénévoles.",
};
