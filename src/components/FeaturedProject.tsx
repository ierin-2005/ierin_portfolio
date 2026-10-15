import React from 'react';
import {
  Sparkles,
  Building2,
  Calendar,
  CheckCircle,
  Users,
  Github,
  Lock,
} from 'lucide-react';
import { HYDRO_GPT_DATA } from '../data/portfolioData';
import { ArchitectureFlow } from './ArchitectureFlow';

export const FeaturedProject: React.FC = () => {
  return (
    <div className="relative rounded-3xl glass-panel p-6 sm:p-8 lg:p-10 border border-cyan-500/30 shadow-2xl overflow-hidden group">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>FEATURED FLAGSHIP SYSTEM</span>
          </span>

          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs font-medium">
            <Building2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Larsen &amp; Toubro (L&amp;T)</span>
          </span>

          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-400 text-xs font-mono">
            <Calendar className="w-3 h-3" />
            <span>{HYDRO_GPT_DATA.year}</span>
          </span>
        </div>

        <div className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40 flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>RAG + Qwen2.5 / GGUF</span>
        </div>
      </div>

      {/* Main Title & Tagline */}
      <div className="relative z-10 mb-6">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {HYDRO_GPT_DATA.title}
        </h3>
        <p className="mt-3 text-base sm:text-lg text-cyan-300/90 font-medium leading-relaxed max-w-4xl">
          {HYDRO_GPT_DATA.tagline}
        </p>
      </div>

      {/* Enterprise Presentation Callout Box */}
      <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-cyan-950/40 border border-cyan-800/40 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 flex-shrink-0 mt-0.5">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Corporate Department Presentation
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
              {HYDRO_GPT_DATA.presentationContext}
            </p>
          </div>
        </div>
        <span className="text-[11px] font-mono text-cyan-400 whitespace-nowrap px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/50">
          Mumbai · Delhi · Chennai
        </span>
      </div>

      {/* Interactive System Architecture Flow */}
      <div className="relative z-10">
        <ArchitectureFlow steps={HYDRO_GPT_DATA.architectureSteps} />
      </div>

      {/* "What I Built" Section */}
      <div className="relative z-10 mt-8">
        <div className="flex items-center space-x-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-teal-400" />
          <h4 className="text-lg font-bold text-white tracking-tight">What I Built</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {HYDRO_GPT_DATA.whatIBuilt.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/90 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-colors"
            >
              <h5 className="text-sm font-bold text-cyan-300 mb-2.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{item.title}</span>
              </h5>
              <ul className="space-y-2">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="text-xs sm:text-sm text-slate-300 flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies & Deployment Info Footer */}
      <div className="relative z-10 mt-8 pt-6 border-t border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Tech tags */}
        <div className="flex flex-wrap items-center gap-2">
          {HYDRO_GPT_DATA.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/70 border border-slate-700/80 text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action & Project Status Notice */}
        <div className="flex items-center space-x-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-300 bg-slate-900/90 border border-slate-700/80">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>L&amp;T Corporate Project (Internal Architecture)</span>
          </div>

          {HYDRO_GPT_DATA.repoUrl ? (
            <a
              href={HYDRO_GPT_DATA.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Repository</span>
            </a>
          ) : (
            <span
              className="text-[11px] font-mono text-slate-400"
              title="Configurable in src/data/portfolioData.ts"
            >
              [Repo configurable]
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
