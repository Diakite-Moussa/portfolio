import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "purple" | "emerald" | "amber" | "neutral";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "cyan",
  size = "sm",
  className = "",
  icon,
}: BadgeProps) {
  const variantStyles = {
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25 shadow-[0_0_15px_rgba(56,189,248,0.15)]",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/25 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25 shadow-[0_0_15px_rgba(52,211,153,0.15)]",
    amber: "bg-amber-500/10 text-amber-300 border-amber-500/25 shadow-[0_0_15px_rgba(251,191,36,0.15)]",
    neutral: "bg-slate-800/60 text-slate-300 border-slate-700/50",
  };

  const sizeStyles = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3.5 py-1.5 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium border backdrop-blur-md transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
