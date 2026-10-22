"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, Sparkles, MessageSquare } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "Accueil", href: "/#hero" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Compétences", href: "/#competences" },
  { label: "Projets", href: "/#projets" },
  { label: "Parcours", href: "/#parcours" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Retour à l'accueil"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-purple-400 text-base">
                  MD
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm sm:text-base tracking-tight flex items-center gap-1.5 group-hover:text-cyan-300 transition-colors">
                Moussa Diakité
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-80" />
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider">
                AI ENGINEER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={profile.cvUrl}
              external
              variant="secondary"
              size="sm"
              icon={<Download className="w-3.5 h-3.5 text-cyan-400" />}
              aria-label="Télécharger mon CV"
            >
              Mon CV
            </Button>
            <Button
              href={profile.whatsappUrl}
              external
              variant="whatsapp"
              size="sm"
              icon={<MessageSquare className="w-3.5 h-3.5" />}
              aria-label="Discuter sur WhatsApp"
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              href={profile.cvUrl}
              external
              variant="secondary"
              size="sm"
              icon={<Download className="w-3.5 h-3.5 text-cyan-400" />}
              className="py-1 px-2.5 text-xs"
            >
              CV
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800 focus:outline-none"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-cyan-500/20 backdrop-blur-2xl px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <Button
                href={profile.cvUrl}
                external
                variant="secondary"
                size="md"
                icon={<Download className="w-4 h-4 text-cyan-400" />}
                className="w-full justify-center"
              >
                Télécharger mon CV (PDF)
              </Button>
              <Button
                href={profile.whatsappUrl}
                external
                variant="whatsapp"
                size="md"
                icon={<MessageSquare className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Contacter sur WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
