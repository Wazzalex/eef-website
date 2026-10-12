/**
 * ============================================================
 *  CONTENU DU SITE — c'est ici que tout se modifie.
 * ============================================================
 *
 *  Chiffres-clés, bilan de l'an dernier, projets financés, calendrier
 *  de l'année, contact… Tout le texte affiché sur le site vient de ce
 *  fichier. Les composants (dans src/components) ne font que l'afficher.
 *
 *  Règles simples :
 *   - les montants sont en euros, sans espace ni symbole (ex : 1387)
 *   - une ligne qui commence par // est un commentaire, ignoré par le site
 *   - respecter les guillemets et les virgules
 */

/** Adresse e-mail de l'association : destinataire du formulaire de contact. */
export const CONTACT_EMAIL = "ecolenfete@gmail.com";

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
 *  Ce que l'association a concrètement apporté aux enfants.
 * ------------------------------------------------------------ */
export const lastYear = {
  label: "2025-2026",
  /** Bénéfices de tous les événements organisés par les parents. */
  eventsProfit: 8575,
  /** Détail de ce qui a été consacré aux enfants (le total est calculé automatiquement). */
  contributions: [
    { label: "Projets des classes (don à l'école)", amount: 8500 },
    { label: "Concert des enfants à Festirock", amount: 1534 },
    { label: "Spectacle de Noël", amount: 230 },
    { label: "Cadeaux des CM2", amount: 158 },
  ],
};

/* ------------------------------------------------------------
 *  PROJETS PÉDAGOGIQUES FINANCÉS CETTE ANNÉE
 *  (source : « Projets pédagogiques classes avec budget EEF »)
 *
 *  amount      : ce que l'EEF finance, en euros
 *  totalBudget : budget total du projet, si l'EEF n'est pas le seul
 *                financeur (sinon, laisser vide = financé à 100 %)
 *  coFunding   : qui complète le financement (affiché sous la jauge)
 * ------------------------------------------------------------ */
export type ProjectIcon =
  | "cirque"
  | "livre"
  | "lecture"
  | "elevage"
  | "classe"
  | "numerique"
  | "roller";

export interface Project {
  /** Identifiant technique (sans accent ni espace). */
  id: string;
  title: string;
  description: string;
  icon: ProjectIcon;
  /** Classes concernées. */
  classes: string[];
  /** Montant financé par l'EEF, en euros. */
  amount: number;
  /** Budget total du projet (si différent du montant EEF). */
  totalBudget?: number;
  /** Autre financeur, s'il y en a un. */
  coFunding?: string;
  /** Précision affichée en petit (facultatif). */
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
    totalBudget: 2800,
    coFunding: "la coopérative de la classe de GS-CP",
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
    classes: ["PS-MS", "GS-CP", "CP-CE1-CE2", "CE2-CM1", "CM1-CM2"],
    amount: 280,
    note: "La sélection de la GS-CP a été financée dès 2026.",
  },
  {
    id: "elevage",
    title: "Un élevage en classe",
    description:
      "Observer, nourrir, prendre soin : un petit élevage vivant dans la classe pour apprendre les sciences en vrai.",
    icon: "elevage",
    classes: ["PS-MS", "GS-CP", "CP-CE1-CE2", "CE2-CM1", "CM1-CM2"],
    amount: 280,
    totalBudget: 350,
    coFunding: "la coopérative de la classe de GS-CP",
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
 *  L'ANNÉE EN ÉVÉNEMENTS
 *
 *  kind :
 *   - "event"  : événement organisé par les parents (bouton « Je veux aider »)
 *   - "meeting": réunion (AG)
 *   - "gift"   : moment offert aux enfants grâce aux bénéfices
 *
 *  date          : date affichée (ex : "Dimanche 8 novembre 2026")
 *  dateConfirmed : false = date provisoire, le site affiche « à confirmer »
 *  leads         : prénoms des responsables de l'événement
 *  leadWanted    : true = on cherche un·e responsable (affiché sur la carte)
 *  raised        : bénéfice de l'événement l'an dernier, en euros
 * ------------------------------------------------------------ */
export type EventKind = "event" | "meeting" | "gift";

export interface SeasonEvent {
  id: string;
  month: string;
  date?: string;
  dateConfirmed?: boolean;
  title: string;
  description: string;
  kind: EventKind;
  /** Ce que font concrètement les bénévoles. */
  help?: string;
  leads?: string[];
  leadWanted?: boolean;
  /** Bénéfice de l'événement l'an dernier, en euros. */
  raised?: number | null;
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
        date: "Dimanche 8 novembre 2026",
        dateConfirmed: true,
        title: "La Potée",
        description:
          "Le grand repas convivial du village, préparé et servi par les parents. Le rendez-vous le plus chaleureux de l'année.",
        kind: "event",
        help: "cuisine, service, installation et rangement de la salle",
        leads: ["Alexandre T."],
        raised: 1387,
      },
    ],
  },
  {
    name: "Hiver",
    events: [
      {
        id: "marche-noel",
        month: "Décembre",
        date: "Samedi 12 décembre 2026",
        dateConfirmed: true,
        title: "Marché de Noël",
        description:
          "Stands, sapins, barbe à papa et pop-corn pour lancer les fêtes tous ensemble.",
        kind: "event",
        help: "tenir un stand, préparer les gourmandises",
        leads: ["Élodie", "Chloé", "Stéphane"],
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
        date: "Dimanche 14 février 2027",
        dateConfirmed: true,
        title: "Saint-Valentin",
        description: "Roses ou bugnes selon les années : une petite vente qui fait plaisir à tout le village.",
        kind: "event",
        help: "préparer et distribuer les commandes",
        leadWanted: true,
        raised: null,
      },
      {
        id: "soiree-festive",
        month: "Mars",
        date: "Mars 2027",
        dateConfirmed: false,
        title: "Soirée festive",
        description: "Une soirée pour les familles : repas, musique et bonne humeur.",
        kind: "event",
        help: "bar, repas, décoration, musique",
        leads: ["Nadia", "Yamuna"],
        raised: 384,
      },
      {
        id: "carnaval",
        month: "Mars",
        date: "Mars 2027",
        dateConfirmed: false,
        title: "Carnaval",
        description: "Défilé déguisé dans les rues du village, puis goûter pour tout le monde.",
        kind: "event",
        help: "encadrer le défilé, préparer le goûter",
        leads: ["Jérôme", "Laurent"],
        raised: null,
      },
    ],
  },
  {
    name: "Printemps",
    events: [
      {
        id: "tombola",
        month: "Avril – Mai",
        date: "Avril – mai 2027",
        dateConfirmed: false,
        title: "Tombola",
        description:
          "Vente de tickets pendant les vacances de printemps, tirage au sort à la fin du mois de mai.",
        kind: "event",
        help: "vendre des tickets, trouver des lots chez les commerçants",
        leads: ["Chloé", "Gisèle"],
        raised: 1299,
      },
      {
        id: "fleurs",
        month: "Mai",
        date: "Mai 2027",
        dateConfirmed: false,
        title: "Opération fleurs",
        description:
          "Commande groupée de plants et de fleurs pour les jardins : une partie du prix revient à l'école.",
        kind: "event",
        help: "diffuser le catalogue, organiser la distribution",
        leads: ["Maëlle"],
        raised: 450,
      },
      {
        id: "vide-greniers",
        month: "Printemps",
        date: "Printemps 2027",
        dateConfirmed: false,
        title: "Vide-greniers",
        description:
          "Stands, bonnes affaires et buvette dans la cour de l'école. Chaque emplacement loué finance les projets des enfants.",
        kind: "event",
        help: "accueillir les exposants, tenir la buvette",
        leads: ["Charlotte", "Mélanie"],
        raised: null,
      },
      {
        id: "festirock",
        month: "Juin",
        date: "Vendredi 11 et samedi 12 juin 2027",
        dateConfirmed: true,
        title: "Festirock",
        description:
          "LE festival du village : concerts, buvette, restauration… et un concert pour les enfants, offert par l'EEF.",
        kind: "event",
        help: "montage, bar, restauration, accueil, démontage — il faut du monde !",
        leads: ["Alexandre T.", "Stéphane"],
        raised: 4172,
      },
      {
        id: "chorale",
        month: "Juin",
        date: "Juin 2027",
        dateConfirmed: false,
        title: "Chorale de fin d'année",
        description:
          "Les enfants chantent, les parents trinquent : le pot de fin d'année est offert par l'EEF, et c'est là que les CM2 reçoivent leur cadeau de départ au collège.",
        kind: "event",
        help: "préparer et servir le pot, installer la cour",
        leads: ["Alexandre V."],
        raised: null,
      },
    ],
  },
];

/* ------------------------------------------------------------
 *  TEXTES DES SECTIONS
 * ------------------------------------------------------------ */
export const hero = {
  kicker: "Association de parents d'élèves · Les Adrets-en-Belledonne",
  title: "Aux Adrets, ce sont les parents qui font grandir l'école.",
  text: "Depuis 25 ans, École en Fête organise les rendez-vous du village pour financer les projets des enfants : cirque, livres, sorties, ski, spectacles… Vous êtes parent d'un élève ? Vous en faites déjà partie.",
  /** Passage du texte ci-dessus à surligner (doit être recopié à l'identique). */
  highlight: "Vous en faites déjà partie.",
  primaryCta: "Je veux aider",
  secondaryCta: "Voir les projets financés",
};

export const about = {
  kicker: "L'association",
  title: "Une association de parents, pour les enfants de l'école",
  intro:
    "Pas besoin d'être spécialiste ni d'avoir du temps toutes les semaines : l'EEF, c'est des parents qui donnent un coup de main quand ils le peuvent. Une heure sur un stand, un gâteau, une idée… tout compte.",
  cards: [
    {
      title: "Vous êtes déjà membre",
      text: "Chaque parent d'élève de l'école des Adrets est automatiquement membre de l'association. Vous pouvez donner votre avis, voter à l'assemblée générale et porter un projet.",
    },
    {
      title: "Comment ça marche",
      text: "Les parents organisent les événements du village. Les bénéfices sont reversés à l'école et financent les projets choisis avec les enseignants, classe par classe.",
    },
    {
      title: "Une force rare pour un village",
      text: "Entre 8 000 et 10 000 € reversés chaque année aux enfants de l'école : peu de villages peuvent compter sur une dynamique pareille. Elle ne tient qu'à nous, les parents.",
    },
  ],
};

export const projectsSection = {
  kicker: "Ce que l'EEF finance",
  title: "Des événements du village aux projets des enfants",
  intro:
    "Chaque euro récolté pendant les événements revient aux enfants. Voici ce que l'association leur a apporté l'an dernier, et les projets de classe qu'elle finance cette année.",
  impactTitle: "pour les enfants de l'école",
  impactText:
    "récoltés par les parents lors des rendez-vous de l'année, complétés par les réserves de l'association : tout est allé aux enfants.",
  projectsTitle: "Les projets des classes cette année",
  projectsText:
    "Pour chaque projet, la jauge montre la part du budget financée par l'EEF.",
};

export const timelineSection = {
  kicker: "L'année en événements",
  title: "Où et quand donner un coup de main",
  intro:
    "Une dizaine de rendez-vous par an, portés par les parents. Chacun finance une partie des projets des enfants : choisissez celui qui vous plaît et dites-le-nous.",
  cta: "Je veux aider",
  raisedLabel: "L'an dernier",
  helpLabel: "On a besoin de vous pour",
  leadsLabel: "Organisé par",
  leadWanted: "On cherche un·e responsable !",
  toConfirm: "date à confirmer",
};

export const contactSection = {
  kicker: "Contact",
  title: "Une question, une idée, un peu de temps ?",
  text: "Dites-nous simplement ce que vous aimeriez faire : tenir un stand, cuisiner, prêter du matériel, rejoindre le bureau… On vous recontacte vite.",
  cta: "Envoyer le message",
  hint: "Le bouton ouvre votre application e-mail avec le message prérempli : il ne reste qu'à l'envoyer.",
  eventLabel: "Événement qui vous intéresse",
  eventAny: "Peu importe, là où il y a besoin",
};
