export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  status: "En développement" | "Prototype fonctionnel" | "Concept R&D" | "Livré en production";
  statusColor: "blue" | "purple" | "emerald" | "amber";
  shortDescription: string;
  context: string;
  objectives: string[];
  architecture: string;
  implementedFeatures: string[];
  plannedFeatures?: string[];
  technologies: string[];
  challenges: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "docuflow-ai",
    title: "DocuFlow AI",
    category: "Document Intelligence, OCR & LLM",
    tagline: "Plateforme intelligente de lecture, structuration et validation automatique de documents",
    status: "En développement",
    statusColor: "blue",
    shortDescription:
      "Solution d'automatisation documentaire exploitant l'OCR et les LLM pour transformer des factures et contrats non structurés en flux de données JSON exploitables.",
    context:
      "Le traitement manuel de documents comptables, devis et factures représente une perte de temps majeure et une source fréquente d'erreurs humaines pour les entreprises. DocuFlow AI vise à automatiser de bout en bout l'ingestion, le nettoyage optique, l'extraction sémantique et la validation.",
    objectives: [
      "Extraire avec haute fidélité le texte de documents numérisés même de qualité imparfaite",
      "Identifier et parser automatiquement les champs clés (fournisseur, montants HT/TTC, TVA, dates, lignes d'articles)",
      "Valider la cohérence arithmétique et classifier le type de document",
      "Générer des exports structurés exploitables par les ERP et systèmes comptables",
    ],
    architecture:
      "Pipeline d'ingestion modulaire : prétraitement d'images via OpenCV, extraction de texte par moteur OCR (Tesseract), parsing sémantique et normalisation JSON par LLM avec validation pydantic, persistance dans PostgreSQL et automatisation d'orchestration via n8n.",
    implementedFeatures: [
      "Pipeline de prétraitement d'image (débruitage, binarisation adaptative)",
      "Moteur d'extraction OCR de base",
      "Prompts de structuration pour extraction de factures au format JSON",
      "Modélisation de la base de données PostgreSQL pour l'historique",
    ],
    plannedFeatures: [
      "Interface web complète de prévisualisation et correction humaine (Human-in-the-loop)",
      "Workflows de synchronisation multi-ERP via n8n",
      "Modèle de classification documentaire multi-classes en temps réel",
    ],
    technologies: ["Python", "OpenCV", "Tesseract OCR", "LLM", "PostgreSQL", "n8n", "FastAPI"],
    challenges: [
      "Gestion de la variabilité extrême des formats de factures et tickets de caisse",
      "Minimisation des hallucinations sur les montants numériques critiques",
      "Optimisation du temps de traitement par document sur infrastructure contrainte",
    ],
    image: "/images/projects/docuflow.jpg",
    githubUrl: "https://github.com/Diakite-Moussa",
    metrics: [
      { label: "Domaine", value: "Doc AI" },
      { label: "Format cible", value: "JSON Strict" },
      { label: "Moteur", value: "OCR + LLM" },
    ],
  },
  {
    slug: "maliagent",
    title: "MaliAgent",
    category: "Agents IA & Commerce Conversationnel",
    tagline: "Plateforme multi-tenant où des agents IA gèrent la vente conversationnelle sur WhatsApp",
    status: "En développement",
    statusColor: "purple",
    shortDescription:
      "Assistant intelligent pour commerçants et créateurs de mode en Afrique de l'Ouest, pilotant catalogue, livraisons géolocalisées et facturation PDF par WhatsApp.",
    context:
      "Dans le commerce ouest-africain, l'immense majorité des transactions s'initie sur WhatsApp. Les commerçants passent des heures à répondre aux requêtes répétitives, calculer les frais de transport et rédiger des factures manuelles. MaliAgent transforme un canal conversationnel informel en une boutique automatisée.",
    objectives: [
      "Automatiser les interactions de vente via un agent IA doté de Tool Calling",
      "Supporter un échange naturel bilingue et contextuel (français, bambara, anglais)",
      "Gérer le panier, la géolocalisation de livraison et la création instantanée de factures PDF avec QR Code",
      "Garantir une architecture multi-tenant sécurisée pour plusieurs boutiques indépendantes",
    ],
    architecture:
      "Architecture asynchrone FastAPI couplée à PostgreSQL 16. Intégration de l'API WhatsApp Business avec gestion d'état conversationnel, orchestration d'agents avec function calling (recherche catalogue, calcul frais, génération facture), sécurisation JWT/HMAC et front-end d'administration sous Angular 21.",
    implementedFeatures: [
      "Moteur conversationnel avec sélection dynamique d'outils (Tool Calling)",
      "Gestionnaire de panier et calcul automatisé de totaux de commande",
      "Génération de factures PDF avec QR Code de paiement",
      "Isolation des données par boutique (architecture multi-tenant)",
      "Tests E2E conversationnels validant les scénarios de vente",
    ],
    plannedFeatures: [
      "Reconnaissance vocale native bambara en streaming",
      "Intégration directe des passerelles Mobile Money (Orange Money, Wave)",
      "Tableau de bord financier analytique avancé pour les artisans",
    ],
    technologies: ["FastAPI (async)", "PostgreSQL 16", "Angular 21", "Docker", "Tool Calling", "JWT / HMAC", "Groq / LLaMA 3.3"],
    challenges: [
      "Fiabilité des appels d'outils (Tool Calling) dans des échanges en langage informel",
      "Adaptation aux spécificités d'adresses non normées pour la livraison",
      "Maintien d'un temps de réponse ultra-court sur WhatsApp",
    ],
    image: "/images/projects/maliagent.jpg",
    githubUrl: "https://github.com/Diakite-Moussa/MaliAgent",
    metrics: [
      { label: "Canal", value: "WhatsApp" },
      { label: "Langues", value: "FR / Bambara" },
      { label: "Backend", value: "FastAPI Async" },
    ],
  },
  {
    slug: "collectpro",
    title: "CollectPro",
    category: "SaaS Terrain, Cartographie & Assistant Vocal",
    tagline: "Plateforme multi-organisation de collecte de données terrain hors ligne avec vocal IA",
    status: "Prototype fonctionnel",
    statusColor: "emerald",
    shortDescription:
      "Plateforme de relevés cartographiques terrain 100% opérationnelle hors ligne, avec synchronisation résiliente et assistant vocal intelligent par Function Calling.",
    context:
      "Issu des travaux menés chez THL Technologies SAS, CollectPro répond au défi des agents de terrain opérant dans des zones blanches sans connexion réseau : enquêtes, inspections d'infrastructures et relevés géographiques avec synchronisation dès le retour du réseau.",
    objectives: [
      "Permettre la saisie et l'inspection cartographique sans aucune connexion internet",
      "Assurer une synchronisation bidirectionnelle résiliente avec résolution de conflits",
      "Fournir une assistance vocale sur le terrain pour dicter des observations sans quitter des yeux la tâche",
      "Gérer des organisations distinctes avec hiérarchie de rôles et géorepérage strict",
    ],
    architecture:
      "Backend d'entreprise en Java 21 et Spring Boot (ou FastAPI selon les modules), persistance sous PostgreSQL avec extensions géospatiales. Application mobile développée en Flutter pour le fonctionnement 100% offline avec SQLite local, et dashboard web d'administration en Angular.",
    implementedFeatures: [
      "Collecte de données et formulaires dynamiques en mode déconnecté",
      "Synchronisation automatique dès détection de la connectivité réseau",
      "Relevés de coordonnées géographiques et affichage cartographique",
      "Modèle multi-tenant avec séparation par organisation",
      "Prototype de saisie vocale et mapping d'attributs par function calling",
    ],
    plannedFeatures: [
      "Cartographie vectorielle tuilée locale embarquée dans l'application mobile",
      "Export sécurisé au format GeoJSON, SHP et rapports PDF auditables",
      "Détection d'anomalies visuelles sur le terrain assistée par modèle embarqué",
    ],
    technologies: ["Java 21", "Spring Boot", "Flutter", "Angular", "PostgreSQL", "SQLite", "Docker Compose", "Function Calling"],
    challenges: [
      "Résolution robuste des conflits de synchronisation asynchrone lors du retour en ligne",
      "Optimisation de la consommation de batterie avec la géolocalisation continue",
      "Précision de l'assistant vocal dans des environnements extérieurs bruyants",
    ],
    image: "/images/projects/collectpro.jpg",
    githubUrl: "https://github.com/Diakite-Moussa/CollectPro",
    metrics: [
      { label: "Mode réseau", value: "100% Offline" },
      { label: "Mobile", value: "Flutter / SQLite" },
      { label: "Backend", value: "Java 21 / Spring" },
    ],
  },
  {
    slug: "suguai",
    title: "SUGUAI",
    category: "Concept R&D, Voice AI & Commerce Mobile",
    tagline: "« Parle, Vends, Grandis » — Le commerce vocal accessible aux commerçants et artisans",
    status: "Concept R&D",
    statusColor: "amber",
    shortDescription:
      "Vision d'une application mobile guidée par la voix en langues locales (bambara et français) pour démocratiser la gestion commerciale auprès des petits commerçants.",
    context:
      "Dans de nombreux marchés d'Afrique subsaharienne, l'alphabétisation textuelle peut constituer un frein à l'adoption des outils numériques de gestion. SUGUAI repose sur le postulat que la voix et les langues locales comme le bambara sont le vecteur d'inclusion numérique le plus puissant.",
    objectives: [
      "Éliminer la complexité des formulaires textuels au profit d'une interface vocale intuitive",
      "Permettre l'enregistrement vocal instantané des ventes, stocks et créances",
      "Supporter un dialogue interactif et rassurant : « Parle, Vends, Grandis »",
      "Offrir un design mobile fluide, épuré et compréhensible par tous les profils d'artisans",
    ],
    architecture:
      "Concept articulé autour d'une interface Flutter hautement visuelle, connectée à un pipeline vocal combinant Speech-to-Text adapté, modèle de compréhension NLU pour l'extraction d'intentions commerciales (vente, dette, inventaire), et restitution vocale (Text-to-Speech).",
    implementedFeatures: [
      "Maquettage et parcours utilisateur UX orienté vocal",
      "Spécification de l'ontologie commerciale locale (produits d'artisanat, monnaies, unités)",
      "Tests de prompts de classification vocale pour requêtes bilingues",
    ],
    plannedFeatures: [
      "Entraînement de modèles légers de reconnaissance automatique de la parole en bambara",
      "Mode synthèse vocale interactive pour confirmation audio des montants",
      "Synchronisation P2P hors réseau entre marchands d'un même marché",
    ],
    technologies: ["Flutter", "Dart", "Voice AI", "Whisper / Speech-to-Text", "LLM", "Bambara NLP", "Figma UI/UX"],
    challenges: [
      "Disponibilité limitée de corpus audio annotés en bambara pour l'entraînement",
      "Nécessité d'une interface ultra-simplifiée réduisant la charge cognitive",
      "Fiabilité absolue sur la confirmation vocale des montants financiers",
    ],
    image: "/images/projects/suguai.jpg",
    githubUrl: "https://github.com/Diakite-Moussa",
    metrics: [
      { label: "Slogan", value: "Parle, Vends, Grandis" },
      { label: "Priorité", value: "Voice-First UX" },
      { label: "Public", value: "Artisans & Marchés" },
    ],
  },
  {
    slug: "nova-group",
    title: "Nova Group",
    category: "Portail Web Corporate 3D & Digitalisation",
    tagline: "Plateforme vitrine internationale avec animations 3D interactive livrée en production",
    status: "Livré en production",
    statusColor: "emerald",
    shortDescription:
      "Site multilingue haut de gamme livré en production pour un groupe actif dans les mines, le BTP et la logistique, intégrant visualisation 3D et conversion de leads.",
    context:
      "Nova Group recherchait une vitrine digitale d'envergure internationale reflétant l'excellence opérationnelle et la modernité de ses activités industrielles, tout en générant des prises de contact qualifiées via WhatsApp et formulaires d'affaires.",
    objectives: [
      "Concevoir une identité visuelle corporate moderne, luxueuse et percutante",
      "Intégrer des animations 3D interactives fluides et optimisées pour le web",
      "Proposer une navigation multilingue accessible sur tous les supports",
      "Optimiser la conversion de prospects vers les équipes commerciales via WhatsApp",
    ],
    architecture:
      "Application React moderne développée avec TypeScript et Tailwind CSS. Intégration de Three.js pour le rendu 3D temps réel d'infrastructures et animations séquencées avec GSAP pour une expérience narrative interactive sans dégradation de la performance.",
    implementedFeatures: [
      "Modèle 3D interactif avec éclairages dynamiques et réaction au pointeur",
      "Architecture responsive complète testée sur mobile, tablette et desktop",
      "Navigation multilingue et organisation thématique par pôles d'activités",
      "Canaux d'acquisition directs avec intégration WhatsApp et formulaires dédiés",
      "Livraison et mise en production effective (novagroup-int.com)",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js", "GSAP", "Vite / Next.js"],
    challenges: [
      "Maintien de 60 FPS constants malgré le rendu 3D sur périphériques mobiles",
      "Équilibre entre design industriel immersif et clarté de l'information institutionnelle",
      "Optimisation du poids des assets et des textures 3D",
    ],
    image: "/images/projects/novagroup.jpg",
    demoUrl: "https://novagroup-int.com",
    metrics: [
      { label: "Statut", value: "En Production" },
      { label: "Moteur 3D", value: "Three.js" },
      { label: "Performances", value: "60 FPS Fluidité" },
    ],
  },
];
