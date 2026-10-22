import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050814",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://moussa-diakite.vercel.app"),
  title: {
    default: "Moussa Diakité — AI Engineer & AI Software Engineer | Portfolio",
    template: "%s | Moussa Diakité",
  },
  description:
    "Portfolio de Moussa Diakité, élève ingénieur en informatique spécialisé en Data Science & Intelligence Artificielle à l'Université Mundiapolis, Casablanca. À la recherche d'un stage PFE de 6 mois en IA (Fév - Juil 2027).",
  keywords: [
    "Moussa Diakité",
    "AI Engineer",
    "AI Software Engineer",
    "Data Science",
    "Intelligence Artificielle",
    "Stage PFE IA",
    "Stage PFE Maroc",
    "Casablanca",
    "Mundiapolis",
    "LLM",
    "Agents IA",
    "RAG",
    "FastAPI",
    "Python",
    "Spring Boot",
    "DocuFlow AI",
    "MaliAgent",
    "CollectPro",
  ],
  authors: [{ name: "Moussa Diakité", url: profile.github }],
  creator: "Moussa Diakité",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://moussa-diakite.vercel.app",
    title: "Moussa Diakité — AI Engineer & AI Software Engineer",
    description:
      "Étudiant ingénieur en informatique (Data Science & IA) à l'Université Mundiapolis. Découvrez mes projets en agents IA, OCR intelligent et architectures logicielles.",
    siteName: "Portfolio Moussa Diakité",
    images: [
      {
        url: "/images/profile/moussa-diakite.png",
        width: 800,
        height: 1000,
        alt: "Moussa Diakité - AI Engineer & AI Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moussa Diakité — AI Engineer & AI Software Engineer",
    description:
      "Élève ingénieur en Data Science & IA (Mundiapolis Casablanca). Recherche de stage PFE de 6 mois.",
    images: ["/images/profile/moussa-diakite.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050814] text-slate-100 overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
