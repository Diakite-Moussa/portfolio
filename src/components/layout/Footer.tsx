"use client";

import React from "react";
import Link from "next/link";
import { Mail, MessageSquare, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 relative overflow-hidden py-14">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gradient-to-t from-cyan-900/15 via-purple-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-purple-400 text-base">
                    MD
                  </span>
                </div>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Moussa Diakité
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Étudiant ingénieur en informatique (Data Science & IA) à l&apos;Université Mundiapolis, Casablanca.
              Conception d&apos;architectures intelligentes alliant LLM, agents autonomes et développement logiciel de production.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Recherche Stage PFE 6 mois (Fév - Juil 2027) | Casablanca, Maroc
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/#hero" className="hover:text-cyan-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#a-propos" className="hover:text-cyan-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#competences" className="hover:text-cyan-400 transition-colors">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="/#projets" className="hover:text-cyan-400 transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/#parcours" className="hover:text-cyan-400 transition-colors">
                  Parcours académique & pro
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-cyan-400 transition-colors">
                  Contact direct
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Réseaux & Contact
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact WhatsApp"
                className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-800/60 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-500 transition-all hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Envoyer un e-mail"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              {profile.email}
              <br />
              {profile.phone}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5">
            © 2027 Moussa Diakité. Tous droits réservés.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
