# Site web de l'association École en Fête (EEF)

Site vitrine de l'association des parents d'élèves de l'école des Adrets-en-Belledonne.
Son objectif : montrer aux parents l'impact de l'association sur les enfants et leur donner
envie de donner un coup de main sur les événements.

- **Adresse** : https://wazzalex.github.io/eef-website/ (migration vers Firebase Hosting en cours, voir [#1](https://github.com/Wazzalex/eef-website/issues/1))
- **Charte graphique** : version « Ciel de Belledonne » du fichier Figma *Charte-EEF*
- **Stack** : Next.js 16 · React 19 · TypeScript · CSS modules — export statique (aucun serveur)

## Sommaire

1. [Modifier le contenu](#modifier-le-contenu) — pour tous les parents
2. [Architecture du site](#architecture-du-site)
3. [Travailler en local](#travailler-en-local)
4. [Branches et pull requests](#branches-et-pull-requests)
5. [Mise en ligne](#mise-en-ligne)
6. [Travailler avec Claude Code](#travailler-avec-claude-code)

---

## Modifier le contenu

Tout le texte du site (chiffres-clés, projets financés, calendrier, lien du formulaire…)
est dans **un seul fichier** : [`src/content/site.ts`](src/content/site.ts).
Il est commenté en français ; les composants ne font qu'afficher ce qu'il contient.

Les modifications les plus courantes :

| Je veux…                                         | Où ?                                              |
| ------------------------------------------------ | ------------------------------------------------- |
| Brancher le Google Form « Je veux aider »        | `FORM_URL` en haut du fichier                     |
| Changer le texte des boutons « Je veux aider »   | `HELP_CTA`                                        |
| Mettre à jour la jauge après un événement        | `raisedThisYear` de l'événement dans `seasons`    |
| Ajouter la date précise d'un événement           | `date: "samedi 14 novembre"` dans l'événement     |
| Changer les projets financés                     | le tableau `projects`                             |
| Changer les chiffres-clés                        | le tableau `keyFigures`                           |
| Afficher une adresse e-mail dans le pied de page | `CONTACT_EMAIL`                                   |
| Changer le titre ou la description vus par Google | l'objet `seo`                                    |

**Sans installer quoi que ce soit** : ouvrez `src/content/site.ts` sur GitHub, cliquez sur le crayon ✏️,
faites la modification, puis choisissez **« Create a new branch for this commit and start a pull request »**.
Un autre parent relit, fusionne, et le site est à jour quelques minutes plus tard.

---

## Architecture du site

### Principes

- **Site 100 % statique** : `next build` génère des fichiers HTML/CSS/JS dans `out/`, servis tels quels
  par l'hébergeur. Pas de serveur, pas de base de données, pas de cookies, pas de traceurs.
- **Le contenu est séparé de l'affichage** : `src/content/site.ts` contient les données et les textes,
  les composants les affichent, les calculs (totaux, pourcentages) sont dans `src/lib/stats.ts`.
- **Une seule page**, découpée en sections ; le menu pointe vers des ancres (`#projets`, `#agenda`…).
- **Pas de photos d'enfants** : illustrations dessinées en SVG avec les couleurs de la charte.

### Circulation des données

```
src/content/site.ts ─────► src/components/*  ─────► next build ─────► out/ ─────► hébergement
  (textes, chiffres)         (affichage)           (export statique)   (HTML/CSS/JS)
          │                        ▲
          └─► src/lib/stats.ts ────┘  calculs : budget de l'année, jauge, prochain événement
```

### Composition de la page

```
app/page.tsx
├── Header ········· logo, menu (mobile : burger), HelpLink
├── <main>
│   ├── Hero ······· titre, HelpLink, illustration Panorama
│   ├── KeyFigures · bandeau des chiffres-clés
│   ├── About ······ Section + cartes avec IconBadge
│   ├── Projects ··· Section + YearFunding (jauge de l'année) + ProjectCard × n
│   └── Timeline ··· Section + saisons + EventCard × n (HelpLink sur chaque événement)
└── Footer ········· contact, HelpLink ou message d'attente, mentions
```

### Briques réutilisables

| Brique                            | Rôle                                                                                   |
| --------------------------------- | -------------------------------------------------------------------------------------- |
| `components/Section`              | section standard : marges, conteneur, en-tête (sur-titre, titre, intro)                |
| `components/HelpLink`             | bouton « Je veux aider » : ouvre le Google Form, ou renvoie vers le contact s'il manque |
| `components/IconBadge`            | pastille contenant une icône (cartes association et projets)                           |
| `components/illustrations/Icon`   | catalogue des icônes en trait ; le nom d'une icône est utilisable dans `site.ts`       |
| `components/Gauge`                | barre de progression animée à l'apparition                                             |
| `lib/links.ts`                    | ancres des sections (`anchors`) et état du formulaire (`isHelpFormReady`)              |
| `lib/stats.ts`                    | calculs purs tirés du contenu                                                          |
| `lib/format.ts`                   | montants en euros, typographie française (`fr()`)                                      |
| `lib/assets.ts`                   | chemin d'un fichier de `public/` (ajoute le préfixe d'URL si besoin)                  |
| `lib/cx.ts`                       | assemblage de classes CSS                                                              |

### Styles

- `src/app/globals.css` : **tokens de la charte** (couleurs, typographies, espacements, rayons)
  et utilitaires partagés : `.container`, `.section`, `.section-head`, `.kicker`, `.overline`,
  `.btn` (+ `--primary`, `--sun`, `--ghost`, `--small`), `.card`, `.skip-link`.
- Un fichier `*.module.css` par composant, qui n'utilise que les tokens (`var(--…)`).
- Polices auto-hébergées via `@fontsource` (aucun appel à Google Fonts).

### Arborescence

```
src/
  app/            layout (balises <head>), page d'accueil, styles globaux, favicon
  components/     un composant par section + briques réutilisables (Section, HelpLink, IconBadge, Gauge)
  components/illustrations/  panorama de Belledonne et catalogue d'icônes (SVG)
  content/site.ts TOUT LE CONTENU ÉDITABLE
  lib/            fonctions utilitaires (calculs, liens, format, chemins)
public/           logo maître et fichiers statiques
scripts/          génération des déclinaisons du logo
.github/          déploiement automatique, modèle de pull request
```

Le logo maître est dans `public/logo.svg` (exporté depuis le fichier Figma) ; ses déclinaisons
blanche et bleue sont générées automatiquement avant chaque build (`scripts/logo-variants.mjs`)
et ne sont pas versionnées.

---

## Travailler en local

Prérequis : Node.js 20 ou plus récent.

```bash
npm install        # installe les dépendances
npm run dev        # site de développement sur http://localhost:3000
npm run typecheck  # vérifie les types
npm run build      # génère le site statique dans out/
```

Pour reproduire exactement la version GitHub Pages (servie sous `/eef-website/`) :
`NEXT_PUBLIC_BASE_PATH=/eef-website npm run build`.

---

## Branches et pull requests

### Règle d'or : `main` = le site en ligne

Tout ce qui arrive sur `main` est publié automatiquement. On ne pousse donc **jamais directement sur `main`** :
chaque modification passe par une branche et une pull request (PR) relue par une autre personne.

### Nommer sa branche

`<type>/<numéro-du-ticket>-<description-courte>`, en minuscules et avec des tirets :

| Type        | Pour…                                            | Exemple                            |
| ----------- | ------------------------------------------------ | ---------------------------------- |
| `contenu/`  | textes, chiffres, dates, projets                 | `contenu/date-potee-2026`          |
| `feat/`     | nouvelle fonctionnalité ou section               | `feat/1-hebergement-firebase`      |
| `fix/`      | correction d'un bug                              | `fix/menu-mobile-echap`            |
| `refactor/` | réorganisation du code sans changement visible   | `refactor/composants`              |
| `docs/`     | documentation                                    | `docs/readme`                      |
| `chore/`    | outillage, dépendances, déploiement              | `chore/lockfile-npm-ci`            |

### Le cycle d'une modification

```bash
git switch main && git pull              # 1. partir de main à jour
git switch -c fix/menu-mobile-echap      # 2. créer sa branche
# … modifications …
npm run typecheck && npm run build       # 3. vérifier que tout compile
git add -A && git commit                 # 4. commiter (message en français)
git push -u origin fix/menu-mobile-echap # 5. pousser
gh pr create                             # 6. ouvrir la PR (ou via github.com)
```

Ensuite : une autre personne relit et approuve → **« Squash and merge »** → la branche est supprimée.
Le site est en ligne 2 à 3 minutes plus tard.

### Une bonne pull request

- **Un seul sujet** par PR (plus facile à relire, à annuler si besoin).
- Un titre clair en français (il devient le message du commit après le squash).
- La description remplit le modèle : quoi, pourquoi, comment vérifier ; `Closes #n` pour fermer le ticket.
- **Captures d'écran mobile et ordinateur** dès que l'affichage change.
- `npm run typecheck` et `npm run build` passent.

### Messages de commit

Courts, en français, décrivant le changement : `Ajout de la date de la Potée`,
`Correction du menu mobile qui ne se ferme pas`. Référencer le ticket si besoin (`#12`).

---

## Mise en ligne

Chaque fusion sur `main` déclenche la construction du site et sa publication
(voir [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
L'avancement est visible dans l'onglet **Actions** du dépôt.

Aujourd'hui le site est hébergé sur **GitHub Pages**, sous `/eef-website/` : ce préfixe est passé par la
variable `NEXT_PUBLIC_BASE_PATH` dans le workflow. La migration vers **Firebase Hosting** (compte LaGuild),
avec nom de domaine, prévisualisation de chaque PR et en-têtes de sécurité, est suivie dans
[#1](https://github.com/Wazzalex/eef-website/issues/1).

---

## Travailler avec Claude Code

Les règles que Claude Code applique dans ce dépôt (architecture, conventions, workflow Git)
sont dans [`CLAUDE.md`](CLAUDE.md). Elles valent aussi pour les humains : à lire avant une première contribution.
