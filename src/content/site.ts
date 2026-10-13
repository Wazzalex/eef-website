/**
 * ============================================================
 *  CONTENU DU SITE — c'est ici que tout se modifie.
 * ============================================================
 *
 *  Chiffres-clés, ce que l'EEF a financé l'an dernier, calendrier
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
  /** Moyenne des trois dernières années du bilan (8 122 €, 6 483 € et 10 422 €). */
  { value: "8 300", unit: "€", prefix: "≈", label: "offerts aux enfants chaque année" },
  { value: "10", unit: "rendez-vous", label: "organisés chaque année par les parents" },
];

/* ------------------------------------------------------------
 *  CE QUE L'EEF A FINANCÉ L'AN DERNIER (source : bilan financier)
 *
 *  Le bloc « Ce que l'EEF finance » ne parle que de l'année passée :
 *  il montre concrètement ce que les événements ont permis d'offrir
 *  aux enfants. Le total (somme des montants) est calculé automatiquement
 *  et chaque poste est illustré par une jauge = sa part dans ce total.
 *
 *  Chaque été, après le bilan, il suffit de :
 *   1. changer `label` et `eventsProfit`
 *   2. mettre à jour la liste `fundings` (un bloc par poste)
 *
 *  icon : "classe" | "nature" | "concert" | "spectacle" | "cadeau"
 *         | "cirque" | "livre" | "lecture" | "elevage" | "numerique" | "roller"
 *  who  : pour qui (facultatif, affiché en pastille)
 *  note : précision affichée en petit (facultatif)
 * ------------------------------------------------------------ */
export type FundingIcon =
  | "classe"
  | "nature"
  | "concert"
  | "spectacle"
  | "cadeau"
  | "cirque"
  | "livre"
  | "lecture"
  | "elevage"
  | "numerique"
  | "roller";

export interface Funding {
  /** Identifiant technique (sans accent ni espace). */
  id: string;
  title: string;
  description: string;
  icon: FundingIcon;
  /** Montant versé par l'EEF, en euros. */
  amount: number;
  /** Pour qui (ex : "Toute l'école", "Les CM2"). */
  who?: string;
  /** Précision affichée en petit (facultatif). */
  note?: string;
}

export const lastYear: { label: string; eventsProfit: number; fundings: Funding[] } = {
  label: "2025-2026",
  /** Bénéfices de tous les événements organisés par les parents cette année-là. */
  eventsProfit: 8575,
  /** Ce qui a été consacré aux enfants, poste par poste (du plus gros au plus petit). */
  fundings: [
    {
      id: "classes",
      title: "Budget des 5 classes",
      description:
        "1 000 € versés à chaque classe, que les enseignants utilisent librement pour leurs projets : sorties, matériel, complément des séances de ski, cycle roller des CE1-CE2…",
      icon: "classe",
      amount: 5000,
      who: "Les 5 classes",
    },
    {
      id: "classe-verte",
      title: "Classe verte",
      description:
        "Le plus gros coup de pouce de l'année : une participation au séjour en classe nature, pour que son coût ne soit pas un frein pour les familles.",
      icon: "nature",
      amount: 3500,
    },
    {
      id: "festirock",
      title: "Concert des enfants à Festirock",
      description:
        "Le groupe qui joue pour les enfants pendant le festival du village est entièrement payé par l'EEF : un vrai concert, rien que pour eux.",
      icon: "concert",
      amount: 1534,
      who: "Toute l'école",
    },
    {
      id: "spectacle-noel",
      title: "Spectacle de Noël",
      description:
        "Un spectacle offert à tous les enfants de l'école juste avant les vacances, financé à trois : l'EEF, l'association de la cantine et la mairie.",
      icon: "spectacle",
      amount: 230,
      who: "Toute l'école",
      note: "Part de l'EEF ; la cantine et la mairie complètent.",
    },
    {
      id: "cadeaux-cm2",
      title: "Cadeaux des CM2",
      description: "Un souvenir de l'école offert à chaque élève qui part au collège.",
      icon: "cadeau",
      amount: 158,
      who: "Les CM2",
    },
  ],
};

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
        description:
          "Un spectacle offert à tous les enfants de l'école par l'EEF, l'association de la cantine et la mairie, grâce aux événements de l'automne.",
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
 *  LE BUREAU (élu à l'assemblée générale de rentrée)
 *
 *  photo : fichier JPEG dans public/bureau/ (miniature carrée, ≈ 160 px,
 *          à déposer sur GitHub via « Add file → Upload files » ; Claude
 *          peut préparer le recadrage). L'ordre ci-dessous = ordre d'affichage.
 * ------------------------------------------------------------ */
export interface BoardMember {
  firstName: string;
  lastName: string;
  role: string;
  photo: string;
}

export const bureau: BoardMember[] = [
  { firstName: "Alexandre", lastName: "Vernhet", role: "Président", photo: "/bureau/alexandre-vernhet.jpg" },
  { firstName: "Alexandre", lastName: "Tilleman", role: "Vice-président", photo: "/bureau/alexandre-tilleman.jpg" },
  { firstName: "Chloé", lastName: "Gorria", role: "Trésorière", photo: "/bureau/chloe-gorria.jpg" },
  { firstName: "Mailin", lastName: "Pohlmann", role: "Vice-trésorière", photo: "/bureau/mailin-pohlmann.jpg" },
  { firstName: "Maëlle", lastName: "Sivy Sicard", role: "Secrétaire", photo: "/bureau/maelle-sivy-sicard.jpg" },
  { firstName: "Élodie", lastName: "Marconnier", role: "Vice-secrétaire", photo: "/bureau/elodie-marconnier.jpg" },
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
    "Chaque euro récolté pendant les rendez-vous de l'année revient aux enfants. Voici, poste par poste, ce que l'association leur a apporté l'an dernier.",
  /** Affiché après le montant total (ex : « 10 422 € pour les enfants de l'école »). */
  impactTitle: "pour les enfants de l'école",
  /** Affiché après le bénéfice des événements. */
  impactText:
    "récoltés par les parents lors des rendez-vous de l'année, complétés par les réserves de l'association : tout est allé aux enfants.",
  detailTitle: "Où est allé cet argent",
  /** Le texte est suivi de l'année (ex : « … versé par l'EEF en 2025-2026. »). */
  detailText: "Pour chaque poste, la jauge montre sa part dans le total versé par l'EEF en",
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

export const bureauSection = {
  kicker: "Le bureau",
  title: "Les parents qui font tourner l'association",
  intro:
    "Élus chaque année à l'assemblée générale de rentrée, ils coordonnent les événements et tiennent les comptes. Vous les croisez à la sortie de l'école : n'hésitez pas à les aborder !",
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
