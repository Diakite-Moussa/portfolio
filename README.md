# Portfolio Premium d'AI Engineer — Moussa Diakité

Ce dépôt contient le code source complet du portfolio professionnel de **Moussa Diakité**, étudiant ingénieur en informatique spécialisé en **Data Science et Intelligence Artificielle** à l'**Université Mundiapolis de Casablanca**, actuellement en recherche active d'un **stage PFE de 6 mois au Maroc (Février — Juillet 2027)**.

Le projet est conçu selon une direction artistique **Dark AI Premium**, intégrant une scène 3D interactive WebGL temps réel, des animations subtiles, un responsive design irréprochable et un référencement SEO optimisé.

---

## 🎯 Points Clés du Portfolio

- **Direction Artistique Dark AI Premium** : Palette bleu nuit profond (`#050814`), lueurs diffuses, glassmorphism, typographie moderne et contrastes soignés.
- **Scène 3D Interactive WebGL** : Noyau neuronal 3D rotatif réactif aux mouvements de la souris développé avec **Three.js**, avec mécanisme de repli (fallback) élégant pour les appareils peu puissants ou les utilisateurs ayant activé la réduction des animations (`prefers-reduced-motion`).
- **Portrait & CV Réels Intégrés** :
  - Vrai portrait professionnel de Moussa Diakité intégré avec optimisation `next/image`.
  - Vrai CV PDF téléchargeable d'un clic (`public/documents/cv-moussa-diakite.pdf`).
- **Contact Direct WhatsApp & Mailto** :
  - Bouton vert WhatsApp officiel avec message prérempli encodé (`wa.me/212669135847?text=...`).
  - Coordonnées réelles vérifiées (+212 669 135 847, `moussa.diakite.ing@gmail.com`).
  - Formulaire de prise de contact sans simulation fantôme, ouvrant directement le client e-mail.
- **5 Projets Clés Rigoureusement Documentés (SupportFlow AI formellement exclu)** :
  1. **DocuFlow AI** (Document Intelligence, OCR, Tesseract, OpenCV, LLM & n8n)
  2. **MaliAgent** (Agents IA & SaaS de commerce conversationnel sur WhatsApp, FastAPI, Tool Calling)
  3. **CollectPro** (Plateforme de collecte de données terrain hors-ligne, Java 21, Spring Boot, Flutter, assistant vocal)
  4. **SUGUAI** (Concept d'application commerciale vocale bilingue bambara/français, « Parle, Vends, Grandis »)
  5. **Nova Group Guinée** (Plateforme corporate vitrine digitale 3D livrée en production)
- **Pages de Détail Dédiées pour Chaque Projet** (`/projets/[slug]`) avec contexte, objectifs, architecture technique, fonctionnalités réelles vs perspectives et défis techniques.
- **Parcours Académique et Expériences Authentiques** issus du CV (Université Mundiapolis, THL Technologies SAS, projet IoT FastPark, Licence MIAGE et DUT).

---

## 🛠️ Stack Technique

- **Framework** : [Next.js](https://nextjs.org/) (App Router, Turbopack, Cache Components)
- **Langage** : [TypeScript](https://www.typescriptlang.org/) en mode strict
- **Bibliothèque UI** : [React](https://react.dev/)
- **Styles & Design System** : [Tailwind CSS](https://tailwindcss.com/)
- **Moteur 3D WebGL** : [Three.js](https://threejs.org/) (rendu temps réel à 60 FPS sans dépendance lourde)
- **Icônes** : [Lucide React](https://lucide.dev/) & composants vectoriels SVG personnalisés
- **SEO & Performances** : Génération statique (`generateStaticParams`), métadonnées OpenGraph, Twitter Cards, `sitemap.xml` et `robots.txt` automatiques.

---

## 📁 Structure du Projet

```text
├── public/
│   ├── documents/
│   │   └── cv-moussa-diakite.pdf       # Vrai CV PDF téléchargeable
│   └── images/
│       ├── profile/
│       │   └── moussa-diakite.png       # Portrait professionnel authentique
│       └── projects/
│           ├── docuflow.jpg             # Visuel haute fidélité DocuFlow AI
│           ├── maliagent.jpg            # Visuel haute fidélité MaliAgent
│           ├── collectpro.jpg           # Visuel haute fidélité CollectPro
│           ├── suguai.jpg               # Visuel haute fidélité SUGUAI
│           └── novagroup.jpg            # Visuel haute fidélité Nova Group
├── src/
│   ├── app/
│   │   ├── globals.css                  # Design system, tokens et utilitaires Dark AI
│   │   ├── layout.tsx                   # Layout global avec métadonnées SEO et OpenGraph
│   │   ├── page.tsx                     # Page d'accueil principale assemblant les sections
│   │   ├── robots.ts                    # Générateur robots.txt
│   │   ├── sitemap.ts                   # Générateur sitemap.xml
│   │   └── projets/
│   │       ├── page.tsx                 # Galerie complète des 5 projets
│   │       └── [slug]/
│   │           └── page.tsx             # Page de détail technique approfondie par projet
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               # Barre de navigation responsive avec menu mobile
│   │   │   └── Footer.tsx               # Pied de page avec réseaux et mentions
│   │   ├── projects/
│   │   │   └── ProjectCard.tsx          # Carte de présentation de projet avec badges
│   │   ├── sections/
│   │   │   ├── Hero.tsx                 # Section Hero avec 3D, accroche et CTAs
│   │   │   ├── About.tsx                # Présentation du profil et des axes d'intérêt
│   │   │   ├── Skills.tsx               # Compétences classées par domaine sans pourcentages arbitraires
│   │   │   ├── Projects.tsx             # Section projets avec filtres interactifs
│   │   │   ├── Journey.tsx              # Chronologie académique et professionnelle authentique
│   │   │   └── Contact.tsx              # Carte WhatsApp direct + Formulaire mailto
│   │   ├── three/
│   │   │   └── HeroScene.tsx            # Scène WebGL 3D Three.js réactive au pointeur
│   │   └── ui/
│   │       ├── Badge.tsx                # Composant Badge de statuts et catégories
│   │       ├── Button.tsx               # Bouton réutilisable (primaire, WhatsApp, secondaire)
│   │       ├── Icons.tsx                # Icônes SVG optimisées (GitHub, LinkedIn)
│   │       └── SectionHeading.tsx       # En-tête de section stylisé
│   └── data/
│       ├── profile.ts                   # Données personnelles, réseaux et contact centralisés
│       ├── projects.ts                  # Définition des 5 projets et spécifications
│       ├── skills.ts                    # Catégories de compétences et technologies
│       └── journey.ts                   # Étapes du parcours académique et professionnel
├── next.config.ts                       # Configuration Next.js Turbopack
├── package.json                         # Dépendances et scripts
└── tsconfig.json                        # Configuration TypeScript strict
```

---

## 🚀 Installation et Lancement Local

### 1. Prérequis
- [Node.js](https://nodejs.org/) version 18.18+ (recommandé : Node 20 ou 22)
- npm version 9+ ou pnpm / yarn

### 2. Cloner le dépôt et installer les dépendances
```bash
git clone https://github.com/Diakite-Moussa/portfolio.git
cd portfolio
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur pour visualiser le site.

### 4. Vérifier la compilation de production
```bash
npm run build
```
Cette commande valide les types TypeScript et pré-rend toutes les pages statiquement.

---

## ⚙️ Personnalisation Simple et Centralisée

Toutes les informations modifiables sont regroupées dans le répertoire `src/data/` :

### 1. Modifier les coordonnées et réseaux sociaux
Ouvrez `src/data/profile.ts` :
- `phone` : Numéro affiché.
- `whatsappNumber` : Numéro au format international sans espace (ex : `212669135847`).
- `email` : Adresse e-mail de contact.
- `github` : URL de votre profil GitHub.
- `linkedin` : URL de votre profil LinkedIn.
- `searchObjective` : Formulation de votre recherche de stage.

### 2. Mettre à jour le CV téléchargeable
Déposez simplement votre nouveau fichier PDF sous le nom :
`public/documents/cv-moussa-diakite.pdf`

### 3. Remplacer la photo de profil
Déposez votre photo au format PNG ou JPG sous :
`public/images/profile/moussa-diakite.png`
*(ou mettez à jour la propriété `avatarUrl` dans `src/data/profile.ts`)*.

### 4. Mettre à jour les projets
Ouvrez `src/data/projects.ts` pour :
- Ajouter des liens GitHub réels (`githubUrl`) ou des liens de démonstration (`demoUrl`).
- Mettre à jour le statut (`"En développement"`, `"Prototype fonctionnel"`, `"Livré en production"`).
- Ajuster les fonctionnalités implémentées ou prévues.

---

## 🌐 Déploiement sur Vercel

Le projet est 100% optimisé pour un déploiement instantané sur **Vercel** :

1. Publiez votre code sur GitHub :
   ```bash
   git add .
   git commit -m "Initialisation portfolio Moussa Diakité"
   git push origin main
   ```
2. Rendez-vous sur [Vercel](https://vercel.com/) et connectez votre compte GitHub.
3. Importez le dépôt du portfolio.
4. Vercel détecte automatiquement le projet Next.js. Cliquez sur **Deploy**.
5. Votre portfolio est en ligne avec HTTPS, CDN mondial et performances maximales !

---

## 📄 Licence

Projet personnel développé pour Moussa Diakité — Tous droits réservés.
