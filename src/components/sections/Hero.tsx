"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Download, MessageSquare, Sparkles, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import HeroScene from "@/components/three/HeroScene";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-cyber-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal info & Hook */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Status Pill: PFE Search */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-cyan-500/25 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.15)] animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>RECHERCHE STAGE PFE 6 MOIS | FÉV - JUIL 2027</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Bonjour, je suis <br />
                <span className="text-gradient font-black">
                  {profile.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-cyan-300/90 font-mono flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-400 inline" />
                {profile.title}
              </p>
            </div>

            {/* Catchphrase & Bio */}
            <div className="space-y-3 max-w-xl">
              <p className="text-lg text-slate-200 font-medium leading-relaxed italic border-l-2 border-cyan-400 pl-4 py-0.5">
                « {profile.tagline} »
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {profile.shortBio}
              </p>
            </div>

            {/* Key context bullets */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-mono py-1">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                📍 {profile.location}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                🎓 {profile.university}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Button
                href="#projets"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-4 h-4 text-cyan-200" />}
              >
                Découvrir mes projets
              </Button>
              <Button
                href={profile.cvUrl}
                external
                variant="secondary"
                size="lg"
                icon={<Download className="w-4 h-4 text-cyan-400" />}
              >
                Télécharger mon CV
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="lg"
              >
                Me contacter
              </Button>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs text-slate-400 font-mono">Retrouvez-moi :</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all hover:scale-105"
                  aria-label="GitHub de Moussa Diakité"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all hover:scale-105"
                  aria-label="LinkedIn de Moussa Diakité"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 hover:border-emerald-500 text-emerald-400 hover:text-emerald-300 transition-all hover:scale-105 flex items-center gap-1.5 text-xs font-semibold"
                  aria-label="WhatsApp direct"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Scene + Real Profile Portrait Overlay */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* 3D WebGL Neural Scene */}
            <div className="w-full aspect-square max-w-[480px] relative">
              <HeroScene />

              {/* Floating Real Portrait Badge Card */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-2 sm:left-0 z-20 glass-panel p-3.5 rounded-2xl flex items-center gap-3.5 border-cyan-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-fade-in hover:border-cyan-400/60 transition-all">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border border-cyan-400/50 flex-shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                  <Image
                    src={profile.avatarUrl}
                    alt="Portrait professionnel de Moussa Diakité"
                    fill
                    sizes="(max-width: 640px) 64px, 72px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-sm">
                      {profile.name}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" title="Disponible pour stage PFE" />
                  </div>
                  <span className="text-xs text-cyan-300 font-mono">
                    AI Software Engineer
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5">
                    Mundiapolis • Casablanca
                  </span>
                </div>
              </div>

              {/* Floating Tag Top Right */}
              <div className="absolute top-4 right-0 z-20 glass-panel px-3.5 py-1.5 rounded-full flex items-center gap-2 border-purple-500/30 shadow-[0_4px_20px_rgba(139,92,246,0.25)] text-xs text-purple-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span>RAG • Agents • LLM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#a-propos"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group"
            aria-label="Faire défiler vers la section À propos"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Découvrir le profil</span>
            <div className="w-6 h-10 rounded-full border border-slate-700 group-hover:border-cyan-400 flex items-start justify-center p-1.5 transition-colors">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
