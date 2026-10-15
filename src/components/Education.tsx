import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>05 / ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Academic <span className="text-gradient">Education</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Undergraduate Computer Science curriculum combined with strong foundational mathematics and computing credentials.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl glass-panel border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                idx === 0
                  ? 'border-cyan-500/40 shadow-glow-cyan/50 bg-gradient-to-b from-slate-900/90 to-cyan-950/20'
                  : 'border-slate-800/90 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Degree / Program Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                    {item.score}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {item.degree}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-teal-300 mb-2">
                  {item.institution}
                </p>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-4 font-mono">
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                    {item.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1 text-slate-400" />
                    {item.period}
                  </span>
                </div>
              </div>

              {item.details && (
                <div className="pt-4 border-t border-slate-800/80">
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
