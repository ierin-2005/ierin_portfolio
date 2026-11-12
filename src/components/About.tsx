import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 lg:py-40 bg-warm-bg text-warm-dark relative overflow-hidden border-b border-warm-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3 mb-8 sm:mb-12"
        >
          <span className="w-2.5 h-0.5 bg-orange" />
          <span className="font-mono text-xs sm:text-sm tracking-widest text-orange uppercase font-bold">
            {ABOUT_DATA.sectionLabel}
          </span>
        </motion.div>

        {/* Main Editorial Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-section-heading text-warm-dark max-w-4xl tracking-tight mb-16 sm:mb-20"
        >
          Curious about intelligence.{' '}
          <span className="text-orange">Driven by creation.</span>
        </motion.h2>

        {/* Editorial Layout: Text & Facts + Framed Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial narrative & Key facts */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10 sm:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-6 text-base sm:text-xl text-warm-dark/85 leading-relaxed font-light"
            >
              <p>{ABOUT_DATA.paragraphs[0]}</p>
              <p className="text-warm-dark/70 text-sm sm:text-lg">
                {ABOUT_DATA.paragraphs[1]}
              </p>
            </motion.div>

            {/* Compact Facts Grid (Art-directed key-value table) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-8 border-t border-warm-border"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-warm-muted block mb-4">
                Core Profile &middot; Verified Academic Facts
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {ABOUT_DATA.facts.map((fact) => (
                  <div key={fact.label} className="pb-3 border-b border-warm-border/60">
                    <span className="block font-mono text-[11px] text-warm-muted uppercase tracking-wider mb-0.5">
                      {fact.label}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-warm-dark">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Image in Architectural Editorial Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Architectural Frame with orange accent edge */}
            <div className="relative border border-warm-border bg-white p-3 sm:p-4 shadow-editorial">
              {/* Corner tick marks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-orange" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-orange" />

              <div className="relative aspect-[4/5] overflow-hidden bg-warm-bg">
                <img
                  src="./ierin_portrait.jpg"
                  alt="Ierin P Menachery — AI & ML Engineer"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Photo Caption Strip */}
              <div className="mt-3 pt-2.5 border-t border-warm-border flex items-center justify-between font-mono text-[10px] text-warm-muted uppercase tracking-wider">
                <span>IERIN P MENACHERY</span>
                <span className="text-orange font-bold">CSE // AI &middot; ML</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
