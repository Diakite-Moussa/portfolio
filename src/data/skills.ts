export interface SkillItem {
  name: string;
  levelBadge?: "Avancé" | "Intermédiaire" | "En pratique";
  context?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    title: "Intelligence Artificielle & Data",
    description:
      "Modèles de langage, architectures d'agents autonomes, RAG et vision par ordinateur.",
    iconName: "BrainCircuit",
    skills: [
      { name: "Python", levelBadge: "Avancé", context: "Langage cœur IA & API" },
      { name: "Machine Learning & Deep Learning", context: "PyTorch, Scikit-Learn" },
      { name: "LLM & IA Générative", levelBadge: "Avancé", context: "LLaMA 3.3, OpenAI API, Groq" },
      { name: "RAG & Embeddings", context: "Vector stores, recherche sémantique" },
      { name: "Agents IA & Tool Calling", levelBadge: "Avancé", context: "Function calling, MCP" },
      { name: "NLP & OCR", context: "Tesseract, OpenCV, structuration" },
    ],
  },
  {
    id: "backend",
    title: "Développement Backend & Systèmes",
    description:
      "APIs asynchrones haute performance, architectures microservices et sécurité robuste.",
    iconName: "Server",
    skills: [
      { name: "FastAPI (async)", levelBadge: "Avancé", context: "Microservices & agents IA" },
      { name: "Java 21 & Spring Boot", context: "Architectures d'entreprise" },
      { name: "Django & Flask", context: "Projets IoT & prototypes" },
      { name: "APIs RESTful", context: "Conception OpenAPI, modularité" },
      { name: "Sécurité & Auth", context: "JWT, HMAC, bcrypt, rate limiting, CORS" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Moderne & Mobile",
    description:
      "Interfaces futuristes réactives, expériences 3D immersives et applications mobiles multiplateformes.",
    iconName: "Layout",
    skills: [
      { name: "TypeScript & JavaScript", levelBadge: "Avancé", context: "Typage strict" },
      { name: "React & Next.js", levelBadge: "Avancé", context: "App Router, SSR, Turbopack" },
      { name: "Angular 21", context: "Applications SaaS d'entreprise" },
      { name: "Flutter & Dart", context: "Applications mobiles cross-platform" },
      { name: "Tailwind CSS", context: "Design systems ultra-modernes" },
      { name: "Three.js & GSAP", context: "Rendu 3D temps réel & micro-interactions" },
    ],
  },
  {
    id: "data",
    title: "Bases de Données & Données",
    description:
      "Stockage relationnel, NoSQL et pipelines de données pour applications d'IA.",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL 16", levelBadge: "Avancé", context: "Données transactionnelles" },
      { name: "MySQL & MongoDB", context: "Bases relationnelles & documents" },
      { name: "SQLite", context: "Stockage embarqué & hors-ligne" },
      { name: "Recherche Sémantique", context: "Indexation vectorielle" },
    ],
  },
  {
    id: "devops",
    title: "DevOps, Outils & IoT",
    description:
      "Conteneurisation, automatisation de workflows et intégration matérielle.",
    iconName: "Cpu",
    skills: [
      { name: "Git & GitHub", levelBadge: "Avancé", context: "CI/CD & collaboration" },
      { name: "Docker & Docker Compose", levelBadge: "Avancé", context: "Déploiements isolés" },
      { name: "n8n & Ollama", context: "Pipelines IA & modèles locaux" },
      { name: "Linux", context: "Administration serveurs" },
      { name: "Notions Cloud AWS", context: "EC2, S3, IAM, Lambda" },
      { name: "Arduino & MQTT", context: "Capteurs IoT temps réel" },
    ],
  },
];
