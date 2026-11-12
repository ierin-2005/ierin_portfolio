import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Lock, CheckCircle2 } from 'lucide-react';
import { HYDRO_GPT_DATA } from '../data/portfolioData';
import { ArchitectureFlow } from './ArchitectureFlow';

export const FeaturedProject: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-white border border-warm-border p-6 sm:p-10 lg:p-12 shadow-editorial overflow-hidden group"
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-warm-border">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold text-orange px-3 py-1 bg-orange/10 border border-orange/20 uppercase tracking-wider">
            FEATURED FLAGSHIP PROJECT
          </span>
          <span className="font-mono text-xs text-warm-dark font-medium flex items-center space-x-1.5">
            <Building2 className="w-3.5 h-3.5 text-orange" />
            <span>{HYDRO_GPT_DATA.organization}</span>
          </span>
          <span className="font-mono text-xs text-warm-muted flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{HYDRO_GPT_DATA.year}</span>
          </span>
        </div>

        <div className="font-mono text-xs text-warm-muted uppercase tracking-wider">
          {HYDRO_GPT_DATA.label}
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="mb-8">
        <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-warm-dark tracking-tight">
          {HYDRO_GPT_DATA.title}
        </h3>
        <p className="mt-3 text-lg sm:text-xl font-medium text-orange max-w-4xl">
          {HYDRO_GPT_DATA.subtitle}
        </p>
        <p className="mt-4 text-base sm:text-lg text-warm-dark/80 max-w-3xl leading-relaxed font-light">
          {HYDRO_GPT_DATA.tagline}
        </p>
      </div>

      {/* Corporate Presentation Highlight Strip */}
      <div className="p-4 sm:p-5 bg-warm-bg border-l-4 border-orange mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-warm-muted block mb-0.5">
            Engineering Presentation &middot; Corporate Internship
          </span>
          <p className="text-xs sm:text-sm font-medium text-warm-dark">
            {HYDRO_GPT_DATA.presentationContext}
          </p>
        </div>
        <span className="font-mono text-[11px] text-orange uppercase font-bold whitespace-nowrap">
          Mumbai &middot; Delhi &middot; Chennai
        </span>
      </div>

      {/* Custom Horizontal System Architecture Visual */}
      <div className="mb-10">
        <ArchitectureFlow />
      </div>

      {/* What I Built Deliverables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-warm-border">
        {HYDRO_GPT_DATA.whatIBuilt.map((block, idx) => (
          <div key={idx} className="p-5 bg-warm-bg border border-warm-border">
            <h5 className="font-display font-bold text-sm sm:text-base text-warm-dark mb-3 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              <span>{block.title}</span>
            </h5>
            <ul className="space-y-2">
              {block.points.map((pt, pIdx) => (
                <li
                  key={pIdx}
                  className="text-xs sm:text-sm text-warm-dark/80 flex items-start space-x-2 leading-relaxed"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Technologies & Status Footer */}
      <div className="mt-8 pt-6 border-t border-warm-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Technologies tags */}
        <div className="flex flex-wrap gap-2">
          {HYDRO_GPT_DATA.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 bg-warm-bg border border-warm-border text-warm-dark"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Internal Project Status */}
        <div className="flex items-center space-x-2 text-xs font-mono text-warm-muted">
          <Lock className="w-3.5 h-3.5 text-orange" />
          <span>Internal L&amp;T Architecture (Zero Cloud Exfiltration)</span>
        </div>
      </div>
    </motion.div>
  );
};
