import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Code2, Database, Terminal } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const HeroPortrait: React.FC = () => {
  return (
    <div className="relative w-full max-w-md lg:max-w-none mx-auto flex flex-col items-center select-none">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/25 via-teal-500/15 to-indigo-500/20 rounded-full blur-3xl opacity-75 pointer-events-none" />

      {/* Main Portrait Frame with Framer Motion entry */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative"
      >
        {/* Modern double-ring glass border */}
        <div className="relative p-2.5 sm:p-3 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/90 dark:border-cyan-500/30 shadow-2xl hover:border-cyan-400/50 transition-colors duration-500">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] w-[280px] xs:w-[320px] sm:w-[360px] lg:w-[380px] bg-slate-900">
            {/* The User's Headshot */}
            <img
              src={`./${HERO_DATA.profileImage}`}
              alt={HERO_DATA.name}
              className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-105"
              loading="eager"
            />

            {/* Subtle bottom gradient overlay for readability */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

            {/* In-photo micro title */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/10">
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-semibold text-slate-100">AI / ML Engineer</span>
              </span>
              <span className="text-[11px] text-cyan-300">L&amp;T Alum</span>
            </div>
          </div>
        </div>

        {/* Floating Badge 1: Top-Right (L&T AI/ML Intern) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 -right-2 sm:-right-6 z-20"
        >
          <div className="px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 dark:border-cyan-500/40 shadow-xl flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                L&amp;T Intern
              </div>
              <div className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400">
                Hydrology AI / RAG
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Badge 2: Bottom-Left (HydroGPT Creator) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="absolute -bottom-4 -left-2 sm:-left-6 z-20"
        >
          <div className="px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-teal-400/40 dark:border-teal-500/40 shadow-xl flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-500/15 border border-teal-400/30 flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                HydroGPT Creator
              </div>
              <div className="text-[10px] font-mono text-teal-700 dark:text-teal-400">
                Domain LLMs &amp; FAISS
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Badge 3: Bottom-Right Status Pill (Open to Roles) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute bottom-14 -right-3 sm:-right-8 z-20 hidden xs:block"
        >
          <div className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-emerald-400/50 dark:border-emerald-500/40 shadow-lg flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
              Open to Roles
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Visual Tech Pills Strip beneath portrait */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-sm"
      >
        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
          <Terminal className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
          <span>Python</span>
        </span>
        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
          <Brain className="w-3 h-3 text-teal-600 dark:text-teal-400" />
          <span>PyTorch</span>
        </span>
        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
          <Database className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
          <span>RAG / LLMs</span>
        </span>
        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
          <Code2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
          <span>Android / Java</span>
        </span>
      </motion.div>
    </div>
  );
};
