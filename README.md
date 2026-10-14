# Site web de l'association École en Fête (EEF)

Site vitrine de l'association des parents d'élèves de l'école des Adrets-en-Belledonne.
Son objectif : montrer aux parents l'impact de l'association sur les enfants et leur donner
envie de donner un coup de main sur les événements.

- **Adresse** : https://ecoleenfete-lesadrets.fr (https://eef-lesadrets.fr y redirige)
- **Charte graphique** : version « Ciel de Belledonne » du fichier Figma *Charte-EEF*
- **Stack** : Next.js 16 · TypeScript · CSS modules — export statique, hébergé sur GitHub Pages

## Modifier le contenu

Tout le texte du site (chiffres-clés, bilan de l'an dernier, calendrier, bureau, contact…)
est dans **un seul fichier** : [`src/content/site.ts`](src/content/site.ts).
Il est commenté en français ; les composants ne font qu'afficher ce qu'il contient.

Les modifications les plus courantes :

| Je veux…                                          | Où ?                                                       |
| ------------------------------------------------- | ---------------------------------------------------------- |
| Changer l'adresse e-mail qui reçoit les messages  | `CONTACT_EMAIL` en haut du fichier                         |
| Ajouter ou confirmer la date d'un événement       | `date` et `dateConfirmed` de l'événement dans `seasons`    |
| Indiquer qui organise un événement                | `leads` (prénoms) ou `leadWanted: true` si on cherche      |
| Mettre à jour le bilan de l'an dernier (chaque été) | `lastYear` : `label`, `eventsProfit` et la liste `fundings` (un bloc par poste financé) |
| Changer les chiffres-clés                         | le tableau `keyFigures`                                    |
| Changer la phrase surlignée du hero               | `hero.highlight`                                           |
| Mettre à jour les membres du bureau               | le tableau `bureau` (photos dans `public/bureau/`, miniatures carrées) |
| Afficher ou masquer le bandeau d'annonce en haut   | `announcement` (`enabled: true` / `false`, texte, bouton, lien)  |
| Mettre un événement en avant avec une inscription | `featured: true` et `signupUrl` sur l'événement dans `seasons`     |

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

## Nom de domaine

Le site est servi à la racine de **ecoleenfete-lesadrets.fr** (domaines achetés chez OVH) :

- **GitHub** : Settings → Pages → *Custom domain* = `ecoleenfete-lesadrets.fr`, *Enforce HTTPS* coché
  (le certificat HTTPS est fourni gratuitement par GitHub). Avec une publication par GitHub Actions,
  aucun fichier `CNAME` n'est nécessaire.
- **OVH** (zone DNS de `ecoleenfete-lesadrets.fr`) : 4 enregistrements `A` vers 185.199.108.153,
  185.199.109.153, 185.199.110.153, 185.199.111.153 ; 4 enregistrements `AAAA` vers
  2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 ;
  un `CNAME` `www` vers `wazzalex.github.io.` (www redirige automatiquement vers l'adresse sans www).
  Les enregistrements `MX` et `TXT spf` d'OVH (e-mails) ne sont pas touchés.
- L'adresse de base du site (balises de partage, `robots.txt`, `sitemap.xml`) est `SITE_URL`
  dans `src/content/site.ts`.

## Structure

```
src/
  app/            layout, page d'accueil, styles globaux (tokens de la charte), favicon
  components/     un composant par section : Header, Hero, KeyFigures, About, Projects (+ StackedBar, Gauge), Timeline, Bureau, Footer (+ ContactForm)
  components/illustrations/  panorama de Belledonne et icônes des projets (SVG)
  content/site.ts TOUT LE CONTENU ÉDITABLE
  lib/            petites fonctions utilitaires (format des montants, typographie, chemins des fichiers)
public/           logo, photos du bureau (public/bureau/) et fichiers statiques
scripts/          génération des déclinaisons du logo
```
