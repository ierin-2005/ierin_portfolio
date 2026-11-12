import React from 'react';
import { motion } from 'framer-motion';
import { TOOLKIT_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 lg:py-40 bg-warm-bg text-warm-dark relative overflow-hidden border-b border-warm-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="w-2.5 h-0.5 bg-orange" />
            <span className="font-mono text-xs sm:text-sm tracking-widest text-orange uppercase font-bold">
              04 / TOOLKIT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-section-heading text-warm-dark tracking-tight"
          >
            My tools <span className="text-orange">of the trade.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-warm-dark/70 max-w-2xl font-light"
          >
            Focused technologies, frameworks, and engineering tools applied across machine learning, systems programming, and application development.
          </motion.p>
        </div>

        {/* 4 Clean Editorial Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {TOOLKIT_CATEGORIES.map((category, idx) => {
            const indexNumber = `0${idx + 1}`;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-warm-border p-6 sm:p-8 flex flex-col justify-between shadow-editorial hover:border-orange/60 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-baseline justify-between pb-4 mb-4 border-b border-warm-border">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-warm-dark">
                      {category.title}
                    </h3>
                    <span className="font-mono text-xs text-orange font-bold">
                      {indexNumber}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-warm-muted mb-6">
                    {category.description}
                  </p>

                  {/* Compact Tags Array */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-3 py-1.5 bg-warm-bg text-warm-dark border border-warm-border hover:border-orange transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-warm-border/60 flex items-center justify-between text-[11px] font-mono text-warm-muted">
                  <span>{category.skills.length} core proficiencies</span>
                  <span className="text-orange font-semibold">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
