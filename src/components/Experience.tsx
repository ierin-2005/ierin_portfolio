import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
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
              03 / EXPERIENCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-section-heading text-warm-dark tracking-tight"
          >
            Where I've learned <span className="text-orange">by building.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-warm-dark/70 max-w-2xl font-light"
          >
            Engineering internships spanning enterprise AI/ML architectures, embedded hardware prototyping, and mobile applications.
          </motion.p>
        </div>

        {/* Clean Editorial Timeline */}
        <div className="space-y-8 sm:space-y-12 max-w-5xl">
          {EXPERIENCES.map((exp, idx) => {
            const isFeatured = idx === 0; // L&T is highlighted prominently

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 lg:p-10 border transition-all ${
                  isFeatured
                    ? 'bg-white border-orange shadow-editorial ring-1 ring-orange/30'
                    : 'bg-white/80 border-warm-border hover:border-warm-muted'
                }`}
              >
                {/* Header: Role, Tag, Organization, Duration */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-warm-border gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-warm-dark">
                        {exp.role}
                      </h3>
                      {exp.featuredTag && (
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-orange text-white">
                          {exp.featuredTag}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-warm-muted">
                      <span className="flex items-center text-warm-dark font-semibold">
                        <Building2 className="w-3.5 h-3.5 mr-1.5 text-orange" />
                        {exp.organization}
                      </span>
                      <span>&middot;</span>
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="font-mono text-xs sm:text-sm px-3.5 py-1.5 bg-warm-bg border border-warm-border text-warm-dark self-start lg:self-center flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets Grounded in Prompt */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-sm sm:text-base text-warm-dark/85 flex items-start space-x-2.5 leading-relaxed font-light"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-warm-border">
                  <span className="font-mono text-xs text-warm-muted mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-0.5 bg-warm-bg border border-warm-border text-warm-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
