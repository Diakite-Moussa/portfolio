export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  status: string;
  searchObjective: string;
  university: string;
  location: string;
  phone: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  github: string;
  linkedin: string;
  avatarUrl: string;
  cvUrl: string;
  interests: string[];
}

const WHATSAPP_RAW_NUMBER = "212669135847";
const WHATSAPP_DEFAULT_MESSAGE =
  "Bonjour Moussa, j'ai découvert votre portfolio et je souhaite échanger avec vous au sujet de votre parcours et de vos projets en intelligence artificielle. Seriez-vous disponible pour discuter d'une opportunité de stage PFE ou d'une collaboration ?";

export const profile: ProfileInfo = {
  name: "Moussa Diakité",
  title: "AI Engineer & AI Software Engineer",
  tagline: "Je transforme les idées en applications intelligentes.",
  shortBio:
    "Étudiant ingénieur en informatique spécialisé en Data Science et Intelligence Artificielle, je conçois des solutions combinant LLM, agents IA, automatisation et développement logiciel robuste.",
  status:
    "Étudiant ingénieur en informatique, spécialisé en Data Science et Intelligence Artificielle",
  searchObjective:
    "À la recherche d'un stage PFE de 6 mois au Maroc (Février - Juillet 2027) en IA appliquée, NLP, LLM, Agents IA ou développement logiciel intelligent.",
  university: "Université Mundiapolis, Casablanca",
  location: "Casablanca, Maroc",
  phone: "+212 669 135 847",
  whatsappNumber: WHATSAPP_RAW_NUMBER,
  whatsappUrl: `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_DEFAULT_MESSAGE
  )}`,
  email: "moussa.diakite.ing@gmail.com",
  github: "https://github.com/Diakite-Moussa",
  linkedin: "https://linkedin.com/in/moussa-diakite-0451653a0",
  avatarUrl: "/images/profile/moussa-diakite.png",
  cvUrl: "/documents/cv-moussa-diakite.pdf",
  interests: [
    "Intelligence artificielle appliquée & Deep Learning",
    "LLM, RAG & Recherche sémantique",
    "Agents IA & Tool / Function Calling",
    "NLP & Traitement intelligent de documents (OCR)",
    "Architectures logicielles distribuées & API robustes",
    "Automatisation de flux & Déploiement moderne",
  ],
};
