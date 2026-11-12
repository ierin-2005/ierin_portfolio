import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Github, Linkedin, MapPin } from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-dark-bg text-white flex flex-col justify-between pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-dark-border"
    >
      {/* Background visual element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:right-6 w-full lg:w-1/2 max-w-2xl opacity-90 pointer-events-none z-0">
        <HeroVisual />
      </div>

      {/* Top Meta Bar */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 sm:pt-6 border-b border-white/10 pb-4 max-w-7xl mx-auto w-full"
      >
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
          <span className="font-mono text-xs sm:text-sm tracking-widest text-white/70 uppercase">
            {HERO_DATA.name}
          </span>
        </div>

        <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-white/60">
          <MapPin className="w-3.5 h-3.5 text-orange" />
          <span>{HERO_DATA.location}</span>
        </div>
      </motion.div>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-12 sm:py-16 lg:py-20 flex flex-col justify-center">
        {/* Specialty line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-block font-mono text-xs sm:text-sm tracking-[0.2em] text-orange uppercase font-semibold">
            {HERO_DATA.subHeadline}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-black text-hero-title tracking-tighter text-white max-w-5xl uppercase"
        >
          I build <br className="hidden sm:inline" />
          <span className="text-white hover:text-orange transition-colors duration-300">
            intelligent
          </span>{' '}
          things.
        </motion.h1>

        {/* Short description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl font-light leading-relaxed"
        >
          {HERO_DATA.description}
        </motion.p>

        {/* Actions & Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          {/* Explore My Work CTA */}
          <a
            href="#work"
            className="group inline-flex items-center space-x-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-none bg-orange hover:bg-orange-hover text-white font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Download Resume CTA */}
          <a
            href={`./${HERO_DATA.resumeFileName}`}
            download={HERO_DATA.resumeFileName}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 hover:border-white text-white font-mono text-xs sm:text-sm tracking-wider uppercase transition-colors duration-200"
          >
            <FileDown className="w-4 h-4 text-orange" />
            <span>DOWNLOAD RESUME</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center space-x-4 pl-0 sm:pl-4 pt-2 sm:pt-0">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-white/60 hover:text-orange transition-colors p-2"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-white/60 hover:text-orange transition-colors p-2"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator & Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 flex items-center justify-between pt-6 border-t border-white/10 max-w-7xl mx-auto w-full"
      >
        <a
          href="#about"
          className="group inline-flex items-center space-x-2 font-mono text-xs text-white/50 hover:text-white transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange" />
          <span className="uppercase tracking-widest">SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-orange" />
        </a>

        <div className="font-mono text-[11px] text-white/40 tracking-wider hidden sm:block uppercase">
          AI &middot; ML &middot; SOFTWARE &middot; 2026
        </div>
      </motion.div>
    </section>
  );
};
