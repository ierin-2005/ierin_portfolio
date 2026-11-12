import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  FileDown,
  Mail,
  Linkedin,
  Github,
  MapPin,
} from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS, IS_SOCIAL_CONFIGURED } from '../data/portfolioData';
import { HeroPortrait } from './HeroPortrait';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Decorative background radial glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio, Visual Stats, Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Top Identity Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 mb-5 w-fit shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="font-semibold text-slate-900 dark:text-slate-200">{HERO_DATA.name}</span>
              <span className="text-slate-400">•</span>
              <span className="flex items-center text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                <MapPin className="w-3 h-3 mr-1 text-teal-600 dark:text-teal-400" />
                {HERO_DATA.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I'm <span className="text-gradient">{HERO_DATA.name}</span>
            </h1>

            {/* Role sub-heading */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-700 dark:text-cyan-300">
                AI &amp; Machine Learning Engineer
              </span>
              <span className="text-slate-400">/</span>
              <span className="text-xs sm:text-sm font-mono text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-200 dark:border-teal-800/50">
                L&amp;T Alum
              </span>
            </div>

            {/* Supporting Introduction */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl">
              Specializing in Generative AI, Retrieval-Augmented Generation (RAG), and production neural models. Turning machine learning research into dependable, enterprise-tested software.
            </p>

            {/* 4 Interactive Visual Stat Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
              {HERO_DATA.stats?.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-cyan-500/40 transition-colors"
                >
                  <span className="text-xl sm:text-2xl font-black text-cyan-700 dark:text-cyan-300 block font-mono">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider block mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Action 1: Explore Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Action 2: Download Resume */}
              <a
                href={`./${HERO_DATA.resumeFileName}`}
                target="_blank"
                rel="noopener noreferrer"
                download={HERO_DATA.resumeFileName}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-cyan-500/60 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Resume (PDF)</span>
              </a>

              {/* Action 3: Contact Me */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100/80 dark:bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800/40 border border-slate-200 dark:border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center space-x-2 pt-1 sm:pt-0">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all"
                  aria-label="GitHub Profile"
                  title={IS_SOCIAL_CONFIGURED.github ? 'View GitHub Profile' : 'Configurable in src/data/portfolioData.ts'}
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#0a66c2] bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all"
                  aria-label="LinkedIn Profile"
                  title={IS_SOCIAL_CONFIGURED.linkedin ? 'View LinkedIn Profile' : 'Configurable in src/data/portfolioData.ts'}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait with animated floating badges */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroPortrait />
          </div>
        </div>
      </div>
    </section>
  );
};
