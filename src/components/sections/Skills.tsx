"use client";

import React, { useState } from "react";
import {
  BrainCircuit,
  Server,
  Layout,
  Database,
  Cpu,
  CheckCircle,
  Filter,
} from "lucide-react";
import { skillCategories, SkillCategory } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "ai":
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case "backend":
        return <Server className="w-5 h-5 text-purple-400" />;
      case "frontend":
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case "data":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "devops":
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories: SkillCategory[] =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="competences" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="STACK & EXPERTISE"
          badgeVariant="purple"
          title="Compétences structurées par domaine"
          subtitle="Une maîtrise concrète articulée autour de l'intelligence artificielle, des systèmes backend et des interfaces réactives."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border flex items-center gap-2 ${
              activeCategory === "all"
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            Toutes les compétences
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skills tags list */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-between gap-3 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        {skill.context && (
                          <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">
                            {skill.context}
                          </span>
                        )}
                        {skill.levelBadge && (
                          <Badge
                            variant={
                              skill.levelBadge === "Avancé"
                                ? "cyan"
                                : skill.levelBadge === "Intermédiaire"
                                ? "purple"
                                : "emerald"
                            }
                            size="sm"
                          >
                            {skill.levelBadge}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag line */}
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Total : {category.skills.length} technologies</span>
                <span className="text-cyan-400/80">Projets vérifiés</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
