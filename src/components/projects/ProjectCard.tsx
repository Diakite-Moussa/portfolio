import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const badgeVariant =
    project.statusColor === "blue"
      ? "cyan"
      : project.statusColor === "purple"
      ? "purple"
      : project.statusColor === "emerald"
      ? "emerald"
      : "amber";

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 border-slate-800/80 hover:border-cyan-500/40">
      <div>
        {/* Project Thumbnail Image with Next/Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <Image
            src={project.image}
            alt={`Aperçu de ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          {/* Top category & Status Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono font-medium text-slate-300 border border-slate-800">
              {project.category}
            </span>
            <Badge variant={badgeVariant} size="sm">
              {project.status}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <Sparkles className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>

          <p className="text-xs font-mono text-purple-300 mb-3">
            {project.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Key Metrics / Highlights */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-2 py-3 mb-4 rounded-xl bg-slate-900/60 border border-slate-800/70 text-center">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="px-2">
                  <div className="text-[10px] uppercase font-mono text-slate-400">
                    {m.label}
                  </div>
                  <div className="text-xs font-bold text-cyan-300 truncate">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-slate-900/50 text-slate-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between gap-3">
        <Link
          href={`/projets/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
        >
          <span>Découvrir le projet</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source GitHub de ${project.title}`}
              title={`Voir le code source de ${project.title} sur GitHub`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Démonstration en ligne de ${project.title}`}
              className="p-2 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-300 hover:text-cyan-200 border border-cyan-800/50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
