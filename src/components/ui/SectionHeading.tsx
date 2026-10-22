import React from "react";

interface SectionHeadingProps {
  badgeText: string;
  badgeVariant?: "cyan" | "purple" | "emerald";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badgeText,
  badgeVariant = "cyan",
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  const badgeColorMap = {
    cyan: "text-cyan-400 bg-cyan-950/40 border-cyan-500/30",
    purple: "text-purple-400 bg-purple-950/40 border-purple-500/30",
    emerald: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30",
  };

  return (
    <div className={`flex flex-col mb-12 lg:mb-16 ${alignClass}`}>
      <span
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border mb-4 backdrop-blur-md ${badgeColorMap[badgeVariant]}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
        {badgeText}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
