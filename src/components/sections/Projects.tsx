"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles, Layers } from "lucide-react";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tous les projets (5)" },
    { id: "ai", label: "Agents & LLM" },
    { id: "saas", label: "SaaS & Mobile" },
    { id: "web", label: "Web 3D & Corporate" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ai") {
      return (
        project.slug === "docuflow-ai" ||
        project.slug === "maliagent" ||
        project.slug === "suguai"
      );
    }
    if (activeFilter === "saas") {
      return project.slug === "collectpro" || project.slug === "maliagent";
    }
    if (activeFilter === "web") {
      return project.slug === "nova-group";
    }
    return true;
  });

  return (
    <section id="projets" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="RÉALISATIONS & CONCEPTS"
          badgeVariant="cyan"
          title="Projets d'ingénierie & Intelligence Artificielle"
          subtitle="Cinq projets concrets combinant agents autonomes, OCR intelligent, collecte terrain et expériences web 3D."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeFilter === cat.id
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Transparent Disclaimer Callout */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <span>
              Les statuts indiquent la réalité de chaque projet : certains sont en phase de développement ou de R&D, d&apos;autres ont été livrés en production commerciale.
            </span>
          </div>
          <a
            href="https://github.com/Diakite-Moussa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-semibold font-mono whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Voir mon GitHub</span>
            <Sparkles className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
