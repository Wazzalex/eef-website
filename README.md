# Site web de l'association École en Fête (EEF)

Site vitrine de l'association des parents d'élèves de l'école des Adrets-en-Belledonne.
Son objectif : montrer aux parents l'impact de l'association sur les enfants et leur donner
envie de donner un coup de main sur les événements.

- **Adresse** : https://wazzalex.github.io/eef-website/
- **Charte graphique** : version « Ciel de Belledonne » du fichier Figma *Charte-EEF*
- **Stack** : Next.js 16 · TypeScript · CSS modules — export statique, hébergé sur GitHub Pages

## Modifier le contenu

Tout le texte du site (chiffres-clés, bilan, projets financés, calendrier, contact…)
est dans **un seul fichier** : [`src/content/site.ts`](src/content/site.ts).
Il est commenté en français ; les composants ne font qu'afficher ce qu'il contient.

Les modifications les plus courantes :

| Je veux…                                          | Où ?                                                       |
| ------------------------------------------------- | ---------------------------------------------------------- |
| Changer l'adresse e-mail qui reçoit les messages  | `CONTACT_EMAIL` en haut du fichier                         |
| Ajouter ou confirmer la date d'un événement       | `date` et `dateConfirmed` de l'événement dans `seasons`    |
| Indiquer qui organise un événement                | `leads` (prénoms) ou `leadWanted: true` si on cherche      |
| Mettre à jour le bilan de l'an dernier            | `lastYear` (bénéfices et répartition de ce qui a été versé) |
| Changer les projets financés et la part de l'EEF  | le tableau `projects` (`amount`, `totalBudget`, `coFunding`) |
| Changer les chiffres-clés                         | le tableau `keyFigures`                                    |
| Changer la phrase surlignée du hero               | `hero.highlight`                                           |

Le logo maître est dans `public/logo.svg` (exporté depuis le fichier Figma) ; ses déclinaisons
blanche et bleue sont générées automatiquement avant chaque build (`scripts/logo-variants.mjs`).

## Formulaire de contact

Le site est statique (pas de serveur) : le formulaire du pied de page compose un e-mail
prérempli (destinataire `CONTACT_EMAIL`, événement choisi, message) et l'ouvre dans
l'application e-mail du visiteur, qui n'a plus qu'à cliquer sur « Envoyer ». Les boutons
« Je veux aider » de la timeline présélectionnent l'événement concerné.

## Mise en ligne

Chaque modification poussée sur la branche `main` déclenche automatiquement la construction
du site et sa publication sur GitHub Pages (voir `.github/workflows/deploy.yml`).
Comptez 2 à 3 minutes ; l'avancement est visible dans l'onglet **Actions** du dépôt.

Première activation (à faire une seule fois) : **Settings → Pages → Build and deployment →
Source : GitHub Actions**.

## Travailler en local (pour les développeurs)

```bash
npm install        # installe les dépendances
npm run dev        # site de développement sur http://localhost:3000
npm run build      # génère le site statique dans out/
npm run typecheck  # vérifie les types
```

Le site est servi sous `/eef-website/` sur GitHub Pages : cette valeur est passée par la
variable `NEXT_PUBLIC_BASE_PATH` dans le workflow. Le jour où un nom de domaine est branché,
il suffit de retirer cette variable du workflow et d'ajouter un fichier `public/CNAME`.

## Structure

```
src/
  app/            layout, page d'accueil, styles globaux (tokens de la charte), favicon
  components/     un composant par section : Header, Hero, KeyFigures, About, Projects (+ StackedBar, Gauge), Timeline, Footer (+ ContactForm)
  components/illustrations/  panorama de Belledonne et icônes des projets (SVG)
  content/site.ts TOUT LE CONTENU ÉDITABLE
  lib/            petites fonctions utilitaires (format des montants, typographie, chemins des fichiers)
public/           logo et fichiers statiques
scripts/          génération des déclinaisons du logo
```
