import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Projets d'Ingénierie & IA | Moussa Diakité",
  description:
    "Découvrez les projets en Intelligence Artificielle, Agents autonomes, OCR, SaaS et 3D Web développés par Moussa Diakité, élève ingénieur Data Science & IA.",
};

export default function ProjectsIndexPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050814] text-slate-100">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/#projets"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-400 hover:text-cyan-400 transition-colors py-1.5 px-3 rounded-lg bg-slate-900/60 border border-slate-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l&apos;accueil</span>
            </Link>
          </div>

          <SectionHeading
            badgeText="PORTFOLIO COMPLET"
            badgeVariant="cyan"
            title="Projets & Développements d'Ingénierie"
            subtitle="Explorer l'ensemble des 5 projets sélectionnés, alliant modèles d'intelligence artificielle, architectures distribuées et applications modernes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
