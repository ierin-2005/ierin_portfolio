import React from 'react';
import { Building2, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>03 / INTERNSHIP EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Industry &amp; Research <span className="text-gradient">Internships</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Hands-on technical contributions across enterprise AI/ML engineering, embedded hardware systems, and mobile software development.
          </p>
        </div>

        {/* Polished Editorial Timeline (Newest First) */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800/90 space-y-12 max-w-4xl">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Indicator */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  idx === 0
                    ? 'bg-cyan-500 border-slate-900 shadow-glow-cyan ring-4 ring-cyan-500/20'
                    : 'bg-slate-800 border-slate-700 ring-2 ring-slate-800'
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-glow-cyan">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-800/80 gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.featuredTag && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider font-mono uppercase bg-cyan-950 text-cyan-300 border border-cyan-800/60 flex items-center space-x-1">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span>{exp.featuredTag}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="flex items-center text-teal-300 font-semibold">
                        <Building2 className="w-3.5 h-3.5 mr-1" />
                        {exp.organization}
                      </span>
                      <span>•</span>
                      <span className="flex items-center text-slate-400">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-mono text-cyan-400 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets Grounded in CV */}
                <ul className="space-y-3 mb-5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300 font-normal">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Tags */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400 mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
