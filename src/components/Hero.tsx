import React from 'react';
import {
  ArrowDown,
  FileDown,
  Mail,
  Linkedin,
  Github,
  Award,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS, IS_SOCIAL_CONFIGURED } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';

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
          {/* Left Column: Headline, Bio, Highlights, Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top Identity Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 mb-6 w-fit shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="font-semibold text-slate-900 dark:text-slate-200">{HERO_DATA.name}</span>
              <span className="text-slate-400">•</span>
              <span className="flex items-center text-slate-600 dark:text-slate-400">
                <MapPin className="w-3 h-3 mr-1 text-teal-600 dark:text-teal-400" />
                {HERO_DATA.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
              Building Intelligent Solutions for{' '}
              <span className="text-gradient">Real-World Problems.</span>
            </h1>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              {HERO_DATA.subHeadline}
            </p>

            {/* Three Professional Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 mb-1">
                  <Award className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-semibold tracking-wide uppercase text-cyan-700 dark:text-cyan-300">
                    Industry Experience
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                  AI/ML Intern at Larsen &amp; Toubro (L&amp;T)
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-teal-500/40 transition-colors">
                <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 mb-1">
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-semibold tracking-wide uppercase text-teal-700 dark:text-teal-300">
                    Flagship System
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                  Creator of HydroGPT (Hydrology RAG QA System)
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 mb-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                  <span className="text-xs font-semibold tracking-wide uppercase text-indigo-700 dark:text-indigo-300">
                    Full Spectrum
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                  Hands-on across AI/ML, LLMs &amp; Android Apps
                </p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Action 1: Explore Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Action 2: Download Resume */}
              <a
                href={`./${HERO_DATA.resumeFileName}`}
                target="_blank"
                rel="noopener noreferrer"
                download={HERO_DATA.resumeFileName}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 hover:border-cyan-500/60 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* Action 3: Contact Me */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100/80 dark:bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800/40 border border-slate-200 dark:border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
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
          </div>

          {/* Right Column: Hero Visual (Technical AI/RAG illustration) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
