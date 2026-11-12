import React from 'react';
import { motion } from 'framer-motion';
import { Award, Mountain, Shield, Drama, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 text-cyan-600 dark:text-cyan-400';
    switch (iconName) {
      case 'Award':
        return <Award className={iconClass} />;
      case 'Mountain':
        return <Mountain className={iconClass} />;
      case 'Shield':
        return <Shield className={iconClass} />;
      case 'Drama':
        return <Drama className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 relative border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800/50 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
            <span>06 / HONORS &amp; RECOGNITIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Achievements &amp; <span className="text-gradient">Co-Curricular</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            State and district level recognitions spanning technical presentation, athletics, leadership, and public performance.
          </p>
        </motion.div>

        {/* 4 Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-5 sm:p-6 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-glow-cyan group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/60 flex items-center justify-center group-hover:scale-105 transition-transform text-cyan-600 dark:text-cyan-400">
                    {getAchievementIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-800 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800/40">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-teal-700 dark:text-teal-400 mb-3">
                  {item.organizer}
                </p>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span>Verified Award</span>
                <span className="text-cyan-700 dark:text-cyan-400">Official Honor</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
