import React from "react";
import { GraduationCap, Briefcase, Rocket, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { journeyItems, JourneyItem } from "@/data/journey";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function Journey() {
  const getItemIcon = (type: JourneyItem["type"]) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case "experience":
        return <Briefcase className="w-5 h-5 text-purple-400" />;
      case "project":
        return <Rocket className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="parcours" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="PARCOURS & EXPÉRIENCE"
          badgeVariant="emerald"
          title="Formation académique & Expériences concrètes"
          subtitle="Une progression continue alliant rigueur universitaire en informatique, responsabilités de lead tech et intégration d'IA en entreprise."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-500/40 via-purple-500/30 to-slate-800 pointer-events-none" />

          <div className="space-y-12">
            {journeyItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-6 sm:gap-12 pl-12 sm:pl-0`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-xl bg-slate-900 border-2 border-cyan-400/60 shadow-[0_0_15px_rgba(56,189,248,0.4)] flex items-center justify-center z-10">
                    {getItemIcon(item.type)}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? "sm:text-right" : "sm:text-left"}`}>
                    <div className="glass-panel glass-panel-hover p-6 rounded-2xl border-slate-800/80 transition-all duration-300">
                      {/* Top row */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-2 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/25">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        {item.isCurrent && (
                          <Badge variant="emerald" size="sm">
                            En cours
                          </Badge>
                        )}
                        <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {item.location}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="text-sm font-semibold text-purple-300 mb-2">
                        {item.organization} —{" "}
                        <span className="text-xs text-slate-400 font-normal">
                          {item.subtitle}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Achievements */}
                      {item.keyAchievements && (
                        <div className="space-y-1.5 mb-4 text-xs text-slate-400 text-left">
                          {item.keyAchievements.map((ach, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tags */}
                      <div
                        className={`flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
