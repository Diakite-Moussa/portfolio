import React from "react";
import Image from "next/image";
import {
  Brain,
  Cpu,
  Database,
  Sparkles,
  Bot,
  Layers,
  FileCode2,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const focusAreas = [
    {
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      title: "Intelligence Artificielle Appliquée",
      desc: "Conception de modèles d'apprentissage et intégration dans des architectures logicielles réelles.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      title: "LLM & IA Générative",
      desc: "Exploitation de modèles de fondation (LLaMA 3.3, OpenAI API) avec prompt engineering avancé.",
    },
    {
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      title: "RAG & Recherche Sémantique",
      desc: "Indexation vectorielle et pipelines documentaires augmentés par la recherche contextuelle.",
    },
    {
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      title: "Agents IA & Function Calling",
      desc: "Systèmes autonomes multi-outils (Tool Calling, MCP) connectant le raisonnement IA aux APIs.",
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "NLP & OCR Documentaire",
      desc: "Extraction optique structurée de documents non standardisés (Tesseract, OpenCV, validation JSON).",
    },
    {
      icon: <FileCode2 className="w-5 h-5 text-purple-400" />,
      title: "Développement d'APIs & Systèmes",
      desc: "Microservices asynchrones avec FastAPI et architectures d'entreprise sous Spring Boot.",
    },
    {
      icon: <Workflow className="w-5 h-5 text-cyan-400" />,
      title: "Architecture & Automatisation",
      desc: "Orchestration de flux automatisés (n8n), conteneurisation Docker et déploiements isolés.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "Ingénierie Logicielle & IoT",
      desc: "Systèmes embarqués connectés (MQTT, Arduino) et applications mobiles résilientes hors-ligne.",
    },
  ];

  return (
    <section id="a-propos" className="py-24 relative bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="À PROPOS DE MOI"
          badgeVariant="cyan"
          title="Passionné par les systèmes IA réellement utilisables"
          subtitle="Allier rigueur mathématique, architectures logicielles modernes et impact concret sur le terrain."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Real Portrait Card with Glassmorphism */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden glass-panel border-cyan-500/30 p-2 shadow-2xl">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src={profile.avatarUrl}
                    alt="Moussa Diakité - AI Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top filter grayscale-[10%] contrast-[1.05] group-hover:scale-102 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Bottom overlay in image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-lg">{profile.name}</p>
                    <p className="text-cyan-400 font-mono text-xs">Élève Ingénieur Data Science & IA</p>
                    <p className="text-slate-400 text-xs">Université Mundiapolis, Casablanca</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative presentation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                Actuellement en cycle d&apos;ingénieur en informatique à l&apos;
                <strong className="text-white font-semibold">Université Mundiapolis de Casablanca</strong>,
                je me spécialise dans la convergence entre la <strong className="text-cyan-300">Data Science</strong>, 
                l&apos;<strong className="text-cyan-300">Intelligence Artificielle</strong> et le génie logiciel moderne.
              </p>
              <p>
                Ma vision de l&apos;IA dépasse les simples expérimentations de laboratoire : ce qui me passionne, 
                c&apos;est de concevoir des systèmes intelligents, robustes et sécurisés, capables de résoudre 
                des problématiques opérationnelles concrètes. Qu&apos;il s&apos;agisse d&apos;automatiser la lecture de factures 
                par OCR et LLM (<span className="text-white font-mono text-sm">DocuFlow AI</span>), d&apos;orchestrer des agents 
                conversationnels pour le commerce sur WhatsApp (<span className="text-white font-mono text-sm">MaliAgent</span>) 
                ou de synchroniser des données terrain en milieu hors-ligne (<span className="text-white font-mono text-sm">CollectPro</span>).
              </p>
              <p>
                Fort d&apos;un parcours initial en <strong className="text-purple-300">DUT et Licence MIAGE</strong> à l&apos;Université Technolab de Bamako,
                j&apos;associe une compréhension rigoureuse des processus d&apos;entreprise à la maîtrise technique des architectures 
                asynchrones (<span className="text-slate-200 font-mono text-xs">FastAPI, Spring Boot, PostgreSQL</span>) et des interfaces modernes.
              </p>
            </div>

            {/* Stage PFE Goal Callout */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 backdrop-blur-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-semibold text-sm">
                  Objectif de Stage PFE (6 mois — Février à Juillet 2027)
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Disponible pour intégrer une équipe d&apos;ingénierie au Maroc ou à l&apos;international sur des sujets 
                  de pointe : agents IA autonomes, NLP, modèles multimodaux, RAG ou applications logicielles pilotées par l&apos;IA.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Areas Grid */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-white mb-6 text-center font-mono flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            DOMAINES D&apos;INTÉRÊT & PRATIQUE TECHNIQUE
            <span className="w-2 h-2 rounded-full bg-purple-400" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col space-y-2.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {area.icon}
                </div>
                <h4 className="text-sm font-bold text-white">
                  {area.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
