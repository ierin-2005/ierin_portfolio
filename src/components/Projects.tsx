import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { OTHER_PROJECTS } from '../data/portfolioData';
import { FeaturedProject } from './FeaturedProject';
import {
  BlockchainVisual,
  FraudDetectionVisual,
  SmartIvVisual,
  CourseAppVisual,
} from './ProjectVisuals';

export const Projects: React.FC = () => {
  const renderVisual = (id: string) => {
    switch (id) {
      case 'blockchain-chain-of-custody':
        return <BlockchainVisual />;
      case 'fraud-detection-tool':
        return <FraudDetectionVisual />;
      case 'smart-iv-monitoring':
        return <SmartIvVisual />;
      case 'course-management-app':
        return <CourseAppVisual />;
      default:
        return null;
    }
  };

  return (
    <section
      id="work"
      className="py-24 sm:py-32 lg:py-40 bg-warm-bg text-warm-dark relative overflow-hidden border-b border-warm-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="w-2.5 h-0.5 bg-orange" />
            <span className="font-mono text-xs sm:text-sm tracking-widest text-orange uppercase font-bold">
              02 / SELECTED WORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-section-heading text-warm-dark tracking-tight"
          >
            Things I've <span className="text-orange">built.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-warm-dark/70 max-w-2xl font-light"
          >
            Domain AI assistants, cryptographic record integrity, IoT medical telemetry, and native mobile software.
          </motion.p>
        </div>

        {/* 1. Flagship Marquee Project: HydroGPT */}
        <div className="mb-16 sm:mb-24">
          <FeaturedProject />
        </div>

        {/* 2. Asymmetric Showcase of Additional Projects */}
        <div className="space-y-12 sm:space-y-16">
          <div className="flex items-center justify-between pb-4 border-b border-warm-border">
            <span className="font-mono text-xs text-warm-muted uppercase tracking-wider">
              Additional Engineered Systems
            </span>
            <span className="font-mono text-xs text-orange font-bold">
              04 Verified Prototypes
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {OTHER_PROJECTS.map((project, idx) => {
              const projectNumber = `0${idx + 2}`;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group bg-white border border-warm-border p-6 sm:p-8 flex flex-col justify-between shadow-editorial hover:border-orange/60 transition-all duration-300"
                >
                  <div>
                    {/* Project Header: Large Index Number & Category */}
                    <div className="flex items-start justify-between mb-5">
                      <span className="font-display font-black text-2xl sm:text-3xl text-warm-muted/40 group-hover:text-orange transition-colors">
                        {projectNumber}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-[11px] text-warm-dark px-2.5 py-0.5 bg-warm-bg border border-warm-border uppercase font-medium">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs text-warm-muted">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="font-display font-bold text-xl sm:text-2xl text-warm-dark group-hover:text-orange transition-colors mb-3">
                      {project.title}
                    </h4>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-warm-dark/80 leading-relaxed font-light mb-6">
                      {project.contribution}
                    </p>

                    {/* Visual Custom Illustration / Architecture */}
                    <div className="mb-6">
                      {renderVisual(project.id)}
                    </div>
                  </div>

                  <div>
                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-warm-border mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2.5 py-1 bg-warm-bg text-warm-dark border border-warm-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlight Footer */}
                    <div className="flex items-center justify-between pt-2 text-xs font-mono text-warm-muted">
                      <span>{project.highlight}</span>
                      <span className="text-orange group-hover:translate-x-1 transition-transform flex items-center space-x-1 font-bold">
                        <span>VIEW SYSTEM</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
