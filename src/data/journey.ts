export interface JourneyItem {
  id: string;
  type: "education" | "experience" | "project";
  title: string;
  subtitle: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
  keyAchievements?: string[];
  isCurrent?: boolean;
}

export const journeyItems: JourneyItem[] = [
  {
    id: "mundiapolis",
    type: "education",
    title: "Cycle Ingénieur — Génie Informatique",
    subtitle: "Spécialisation Data Science & Intelligence Artificielle",
    organization: "Université Mundiapolis",
    location: "Casablanca, Maroc",
    period: "09/2025 — Actuel",
    description:
      "Formation d'ingénieur d'excellence axée sur la modélisation mathématique, le Machine Learning, le Deep Learning, le Cloud Computing et l'ingénierie logicielle avancée.",
    tags: ["Data Science", "Intelligence Artificielle", "Deep Learning", "Cloud", "Architecture"],
    keyAchievements: [
      "Conception de solutions d'IA appliquées et architectures logicielles distribuées",
      "Approfondissement du NLP, des modèles génératifs et du RAG",
      "Préparation active du stage PFE de 6 mois (Février à Juillet 2027)",
    ],
    isCurrent: true,
  },
  {
    id: "thl-technologies",
    type: "experience",
    title: "Développeur Full Stack & Intégration IA",
    subtitle: "Stage professionnel en ingénierie logicielle",
    organization: "THL Technologies SAS",
    location: "Bamako, Mali",
    period: "07/2026 — 09/2026",
    description:
      "Conception et développement d'une application de collecte de données terrain multi-organisation, 100% hors ligne, avec synchronisation résiliente et intégration de briques IA.",
    tags: ["Flutter", "FastAPI", "SQLite", "PostgreSQL", "LLM", "Synchronisation Offline"],
    keyAchievements: [
      "Architecture d'une solution mobile hors-ligne avec réplication automatique des données",
      "Intégration d'un assistant conversationnel et de modules d'extraction de données",
      "Élaboration des fondations techniques ayant inspiré la plateforme CollectPro",
    ],
  },
  {
    id: "fastpark",
    type: "project",
    title: "CTO & Développeur Lead — FastPark",
    subtitle: "Projet IoT & IA de gestion de stationnement universitaire",
    organization: "Projet de Groupe IoT & PWA",
    location: "Projet Universitaire",
    period: "02/2026 — 06/2026",
    description:
      "Direction technique et développement d'un écosystème IoT temps réel pour la gestion de parkings, déployé avec des capteurs Arduino MQTT, un serveur Flask sécurisé et un assistant LLaMA 3.3.",
    tags: ["IoT", "Arduino", "MQTT", "Flask", "PWA", "LLaMA 3.3 (Groq)", "Sécurité API"],
    keyAchievements: [
      "Coordination du monitoring dans 14 universités (42 places surveillées avec rafraîchissement toutes les 3s)",
      "Mise en place de mesures de sécurité strictes : bcrypt, rate limiting et politiques CORS",
      "Intégration d'un assistant IA conversationnel via Groq et d'une PWA avec QR Code de réservation",
    ],
  },
  {
    id: "licence-miage",
    type: "education",
    title: "Licence MIAGE",
    subtitle: "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
    organization: "Université Technolab",
    location: "Bamako, Mali",
    period: "10/2024 — 08/2025",
    description:
      "Approfondissement de l'ingénierie des systèmes d'information, des architectures d'applications d'entreprise, de la gouvernance de données et de la modélisation logicielle.",
    tags: ["MIAGE", "Systèmes d'Information", "Génie Logiciel", "Bases de Données"],
  },
  {
    id: "dut-gestion",
    type: "education",
    title: "DUT Informatique de Gestion",
    subtitle: "Diplôme Universitaire de Technologie",
    organization: "Université Technolab",
    location: "Bamako, Mali",
    period: "10/2022 — 07/2024",
    description:
      "Socle fondamental en algorithmique, programmation orientée objet, conception de bases de données relationnelles et administration réseaux.",
    tags: ["Algorithmique", "POO", "SQL", "Réseaux", "Développement"],
  },
];
