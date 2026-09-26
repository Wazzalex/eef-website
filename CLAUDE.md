# CLAUDE.md

Instructions pour Claude Code (et pour tout contributeur) dans ce dépôt.
Présentation générale, architecture et workflow détaillé : voir [README.md](README.md).

## Le projet

Site vitrine statique de l'association de parents d'élèves **École en Fête** (Les Adrets-en-Belledonne).
Public : les parents de l'école, surtout sur **mobile**. But : donner envie d'aider aux événements.
Des parents **non développeurs** modifient `src/content/site.ts` : ce fichier doit rester simple à lire.

## Commandes

```bash
npm run dev                                   # développement, http://localhost:3000
npm run typecheck                             # à lancer après chaque modification TypeScript
npm run build                                 # export statique dans out/ — doit passer avant toute PR
NEXT_PUBLIC_BASE_PATH=/eef-website npm run build   # identique à la production GitHub Pages
```

Il n'y a pas de tests automatisés : `typecheck` + `build` + vérification visuelle (375 px et ≥ 1280 px) font office de tests.

## Architecture — règles à respecter

- **Contenu** : tout texte visible et toute donnée (montants, dates, projets…) vivent dans
  `src/content/site.ts`. Ne pas écrire de texte affiché en dur dans un composant ; ajouter une clé dans `site.ts`.
  Seules exceptions : les phrases qui encadrent des montants calculés (ex. `YearFunding`, `ProjectCard`)
  et les libellés d'accessibilité (`aria-label`, lien d'évitement).
- **Calculs** : toute dérivation des données (totaux, pourcentages, filtres) va dans `src/lib/stats.ts`,
  sous forme de fonctions pures. Les composants ne font qu'afficher.
- **Ancres** : utiliser `anchors` / `anchorHref()` de `src/lib/links.ts`, jamais `"#projets"` en dur.
- **Bouton « Je veux aider »** : toujours `<HelpLink>` ; ne jamais relire `FORM_URL` ailleurs.
- **Nouvelle section** : utiliser `<Section id={anchors.x} heading={…}>` et ajouter son ancre dans `anchors`
  (et dans `nav` de `site.ts` si elle apparaît au menu).
- **Icônes** : ajouter la forme dans `shapes` de `src/components/illustrations/Icon.tsx`, l'afficher via
  `<IconBadge>` ou `<Icon>`. Pas de SVG d'icône copié-collé dans un composant.
- **Réutiliser avant de créer** : vérifier `src/components` et `src/lib` avant d'écrire un nouveau composant
  ou une nouvelle fonction. Deux morceaux de code identiques → extraire une brique commune.
- **Un composant = une responsabilité**. Les sous-composants propres à une section restent dans le même
  fichier (ex. `ProjectCard` dans `Projects.tsx`) ; ils passent dans leur propre fichier dès qu'ils sont réutilisés.
- **Classes CSS** : assembler avec `cx()` (`src/lib/cx.ts`), pas de concaténation de chaînes.
- **Fichiers de `public/`** : toujours via `asset("/fichier")` (gère le préfixe `/eef-website`).
- **Texte libre venant de `site.ts`** : passer par `fr()` (espaces insécables) ; montants par `formatEuro()`.
- **Composants serveur par défaut** : `"use client"` uniquement si le composant a de l'état ou des effets
  (aujourd'hui : `Header`, `Gauge`).

## Styles

- Utiliser les **tokens** de `src/app/globals.css` (`var(--color-…)`, `var(--space-…)`, `var(--radius-…)`) :
  pas de nouvelle couleur ou valeur d'espacement en dur. Nouvelle couleur = nouveau token, validé avec la charte.
- Un `*.module.css` par composant. Réutiliser les utilitaires globaux : `.container`, `.section`,
  `.section-head`, `.kicker`, `.overline`, `.btn` et ses variantes, `.card`.
- Mobile d'abord : styles de base pour le téléphone, `@media (min-width: …)` pour élargir.

## Contraintes du site statique

`output: "export"` : pas de routes API, pas de middleware, pas de `cookies()`/`headers()`, pas de rendu
dynamique, pas d'optimisation `next/image`. Tout doit pouvoir être généré au moment du build.

## Accessibilité, vie privée

- Viser **WCAG 2.2 AA** : contraste ≥ 4.5:1 pour le texte, cibles tactiles ≥ 44 px, focus visible,
  `aria-*` cohérents (un `aria-controls` doit viser un `id` existant), lien d'évitement conservé.
- Respecter `prefers-reduced-motion` (déjà géré globalement).
- **Aucune photo d'enfant**, aucun nom de personne sans accord, aucun traceur ou cookie sans
  consentement RGPD. Pas d'appel à un service tiers (polices, CDN) : tout est auto-hébergé.

## Langue et conventions

- Contenu, commentaires, commits, PR et tickets : **en français**. Identifiants du code : en anglais.
- Typographie française dans les contenus (guillemets « », espaces insécables gérées par `fr()`).
- Dépendances : versions exactes (pas de `^`), n'en ajouter qu'en cas de réel besoin.
- Ne jamais modifier les fichiers générés : `out/`, `.next/`, `public/logo-blanc.svg`, `public/logo-bleu.svg`.

## Workflow Git

- **Ne jamais commiter ni pousser sur `main`** : `main` est déployé en production automatiquement.
- Créer une branche `<type>/<ticket>-<description>` (`contenu/`, `feat/`, `fix/`, `refactor/`, `docs/`, `chore/`).
- Avant d'ouvrir une PR : `npm run typecheck && npm run build`, puis vérifier l'affichage sur mobile et ordinateur.
- Une PR = un sujet. Remplir le modèle de PR, lier le ticket (`Closes #n`), joindre des captures si l'affichage change.
- Commits courts en français (`Ajout de…`, `Correction de…`). Fusion en **squash**.
- Mettre à jour `README.md` et ce fichier quand l'organisation du code ou les conventions changent.
