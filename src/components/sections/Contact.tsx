"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Download,
  Send,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto URI cleanly
    const subject = encodeURIComponent(
      formSubject || `Prise de contact portfolio - ${formName}`
    );
    const body = encodeURIComponent(
      `Nom: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-cyan-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badgeText="CONTACT DIRECT"
          badgeVariant="emerald"
          title="Échangeons sur votre projet ou un stage PFE"
          subtitle="Je suis joignable directement par WhatsApp, e-mail ou LinkedIn pour discuter d'opportunités de stage PFE ou de projets en IA."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct channels & WhatsApp Highlight */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="glass-panel p-6 rounded-3xl border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-green-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                    WhatsApp Direct
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-xs text-emerald-300 font-mono">
                    Réponse rapide assurée
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Cliquez pour initier une discussion avec un message prérempli au sujet d&apos;une opportunité de stage PFE ou d&apos;une collaboration en intelligence artificielle.
              </p>

              <Button
                href={profile.whatsappUrl}
                external
                variant="whatsapp"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
                className="w-full justify-center text-sm font-bold shadow-lg"
              >
                Ouvrir la conversation WhatsApp
              </Button>
            </div>

            {/* Contact Details List */}
            <div className="glass-panel p-6 rounded-3xl border-slate-800 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
                Coordonnées professionnelles
              </h4>

              <div className="flex items-center gap-3.5 text-sm text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[11px] text-slate-400">E-mail</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-mono text-xs sm:text-sm text-white hover:text-cyan-300 transition-colors truncate"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-sm text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">Téléphone</span>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="font-mono text-xs sm:text-sm text-white hover:text-cyan-300 transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-sm text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">Localisation actuelle</span>
                  <span className="text-xs sm:text-sm text-white">
                    {profile.location} ({profile.university})
                  </span>
                </div>
              </div>

              {/* Social and CV buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2.5">
                <Button
                  href={profile.github}
                  external
                  variant="secondary"
                  size="sm"
                  icon={<GithubIcon className="w-4 h-4" />}
                >
                  GitHub
                </Button>
                <Button
                  href={profile.linkedin}
                  external
                  variant="secondary"
                  size="sm"
                  icon={<LinkedinIcon className="w-4 h-4 text-cyan-400" />}
                >
                  LinkedIn
                </Button>
                <Button
                  href={profile.cvUrl}
                  external
                  variant="primary"
                  size="sm"
                  icon={<Download className="w-4 h-4" />}
                >
                  CV Complet (PDF)
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border-slate-800/90 relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Envoyer un message direct
                  </h3>
                  <p className="text-xs text-slate-400">
                    Ouvre directement votre client de messagerie préconfiguré
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-semibold text-slate-300 font-mono"
                    >
                      Votre Nom ou Entreprise *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Ex: Sophie Martin (Directrice Tech)"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-semibold text-slate-300 font-mono"
                    >
                      Votre Adresse E-mail *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="sophie@entreprise.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="form-subject"
                    className="block text-xs font-semibold text-slate-300 font-mono"
                  >
                    Objet de l&apos;échange *
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    required
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="Opportunité de stage PFE IA / Collaboration logicielle"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="form-message"
                    className="block text-xs font-semibold text-slate-300 font-mono"
                  >
                    Votre Message *
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Présentez votre entreprise, le sujet du stage ou les détails de votre besoin technique..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<Send className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  Envoyer l&apos;e-mail directement
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
