import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
  Workflow,
  Target,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projet non trouvé | Moussa Diakité",
    };
  }

  return {
    title: `${project.title} — ${project.category} | Moussa Diakité`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Moussa Diakité AI Portfolio`,
      description: project.shortDescription,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const badgeVariant =
    project.statusColor === "blue"
      ? "cyan"
      : project.statusColor === "purple"
      ? "purple"
      : project.statusColor === "emerald"
      ? "emerald"
      : "amber";

  return (
    <div className="relative min-h-screen flex flex-col bg-[#050814] text-slate-100">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/#projets"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-400 hover:text-cyan-400 transition-colors py-1.5 px-3 rounded-lg bg-slate-900/60 border border-slate-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l&apos;ensemble des projets</span>
            </Link>
          </div>

          {/* Header Title Block */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                {project.category}
              </span>
              <Badge variant={badgeVariant} size="md">
                {project.status}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-medium">
              {project.tagline}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  external
                  variant="secondary"
                  size="md"
                  icon={<GithubIcon className="w-4 h-4" />}
                >
                  Consulter le dépôt GitHub
                </Button>
              )}
              {project.demoUrl && (
                <Button
                  href={project.demoUrl}
                  external
                  variant="primary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Voir la plateforme en direct
                </Button>
              )}
              <Button
                href={profile.whatsappUrl}
                external
                variant="whatsapp"
                size="md"
              >
                Discuter de ce projet sur WhatsApp
              </Button>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden glass-panel border-cyan-500/20 mb-12 shadow-2xl">
            <Image
              src={project.image}
              alt={`Aperçu complet du projet ${project.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Two-Column Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-10">
              {/* Contexte & Problématique */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5 font-mono">
                  <Target className="w-5 h-5 text-cyan-400" />
                  Contexte & Problématique
                </h2>
                <div className="glass-panel p-6 rounded-2xl border-slate-800 text-slate-300 leading-relaxed text-sm sm:text-base space-y-3">
                  <p>{project.context}</p>
                </div>
              </section>

              {/* Objectifs clés */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5 font-mono">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Objectifs du Projet
                </h2>
                <div className="glass-panel p-6 rounded-2xl border-slate-800 space-y-2.5">
                  {project.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Architecture Technique */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5 font-mono">
                  <Workflow className="w-5 h-5 text-cyan-400" />
                  Architecture Technique
                </h2>
                <div className="glass-panel p-6 rounded-2xl border-slate-800 text-slate-300 leading-relaxed text-sm sm:text-base">
                  <p>{project.architecture}</p>
                </div>
              </section>

              {/* Fonctionnalités : Implémentées vs Envisagées */}
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5 font-mono">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  Fonctionnalités & Statut de Réalisation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Implemented */}
                  <div className="glass-panel p-5 rounded-2xl border-emerald-500/20 bg-emerald-950/10 space-y-3">
                    <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Fonctionnalités Implémentées
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {project.implementedFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Planned / Roadmap */}
                  {project.plannedFeatures && project.plannedFeatures.length > 0 && (
                    <div className="glass-panel p-5 rounded-2xl border-slate-800 space-y-3">
                      <h3 className="text-sm font-bold text-purple-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        Perspectives & Évolutions Cibles
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-400">
                        {project.plannedFeatures.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-purple-400 font-mono">›</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>

              {/* Difficultés & Défis Techniques */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5 font-mono">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  Défis Techniques & Apprentissages
                </h2>
                <div className="glass-panel p-6 rounded-2xl border-amber-500/20 bg-amber-950/10 space-y-2.5">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Tech Stack Spec Card */}
              <div className="glass-panel p-6 rounded-2xl border-slate-800 space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Technologies du Projet
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Highlights Card */}
              {project.metrics && (
                <div className="glass-panel p-6 rounded-2xl border-slate-800 space-y-4">
                  <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider text-xs">
                    Indicateurs & Spécifications
                  </h3>
                  <div className="space-y-3">
                    {project.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80"
                      >
                        <span className="text-xs text-slate-400">{m.label}</span>
                        <span className="text-xs font-bold font-mono text-cyan-300">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact PFE Card */}
              <div className="glass-panel p-6 rounded-2xl border-cyan-500/30 bg-cyan-950/20 space-y-3">
                <h4 className="text-sm font-bold text-white">
                  Intéressé par cette réalisation ?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Je suis disponible pour échanger sur la conception technique et étudier une opportunité de stage PFE ou de projet IA.
                </p>
                <Button
                  href={profile.whatsappUrl}
                  external
                  variant="whatsapp"
                  size="md"
                  className="w-full justify-center text-xs"
                >
                  Échanger sur WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
