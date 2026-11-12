import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import {
  EDUCATION_DATA,
  ACHIEVEMENTS_DATA,
  CERTIFICATIONS_DATA,
} from '../data/portfolioData';

export const Education: React.FC = () => {
  const primaryEdu = EDUCATION_DATA[0];

  return (
    <section
      id="background"
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
              05 / BACKGROUND
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-section-heading text-warm-dark tracking-tight"
          >
            Education &amp; <span className="text-orange">Honors.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-warm-dark/70 max-w-2xl font-light"
          >
            Undergraduate Computer Science foundation, state-level recognitions, and verified credentials from premier institutes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Left Column: Education Card (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white border border-warm-border p-6 sm:p-8 flex flex-col justify-between shadow-editorial"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-warm-border">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-orange" />
                  <span className="font-mono text-xs uppercase tracking-wider text-warm-muted">
                    Academic Degree
                  </span>
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 bg-orange text-white font-bold">
                  {primaryEdu.score}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-warm-dark mb-2">
                {primaryEdu.degree}
              </h3>
              <p className="font-medium text-sm sm:text-base text-orange mb-1">
                {primaryEdu.institution}
              </p>
              <div className="font-mono text-xs text-warm-muted mb-6">
                <span>{primaryEdu.location}</span> &middot; <span>{primaryEdu.period}</span>
              </div>

              <p className="text-xs sm:text-sm text-warm-dark/80 leading-relaxed font-light">
                {primaryEdu.details}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-warm-border font-mono text-[11px] text-warm-muted flex justify-between">
              <span>Status: Enrolled (Third Year)</span>
              <span className="text-orange font-semibold">Affiliated to APJ KTU</span>
            </div>
          </motion.div>

          {/* Right Column: Honors Strip & Selected Credentials (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Honors Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-warm-border p-6 sm:p-8 shadow-editorial"
            >
              <div className="flex items-center space-x-2 pb-4 mb-4 border-b border-warm-border">
                <Award className="w-4 h-4 text-orange" />
                <h4 className="font-display font-bold text-base text-warm-dark uppercase tracking-wider">
                  Verified Honors &amp; Recognitions
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ACHIEVEMENTS_DATA.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-warm-bg border border-warm-border">
                    <span className="font-mono text-[10px] text-orange uppercase font-bold block mb-1">
                      {item.category}
                    </span>
                    <div className="font-display font-bold text-xs sm:text-sm text-warm-dark leading-snug mb-1">
                      {item.title}
                    </div>
                    <div className="font-mono text-[10px] text-warm-muted">
                      {item.organizer}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. Selected Credentials (Clean, compact list) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-warm-border p-6 sm:p-8 shadow-editorial"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-warm-border">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-orange" />
                  <h4 className="font-display font-bold text-base text-warm-dark uppercase tracking-wider">
                    Selected Institutional Credentials
                  </h4>
                </div>
                <span className="font-mono text-[11px] text-warm-muted">
                  5 Verified Certifications
                </span>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS_DATA.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-warm-bg border border-warm-border hover:border-orange transition-colors gap-2"
                  >
                    <div>
                      <span className="font-display font-bold text-xs sm:text-sm text-warm-dark block">
                        {cert.title}
                      </span>
                      <span className="font-mono text-[11px] text-warm-muted">
                        {cert.issuer}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 self-start sm:self-center">
                      {cert.score ? (
                        <span className="font-mono text-[11px] px-2 py-0.5 bg-orange/10 border border-orange/30 text-orange font-bold">
                          {cert.score}
                        </span>
                      ) : (
                        <span className="font-mono text-[11px] text-warm-muted flex items-center space-x-1">
                          <CheckCircle2 className="w-3 h-3 text-orange" />
                          <span>Completed</span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
