import React from 'react';
import { Github, FolderGit2, AlertCircle } from 'lucide-react';
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
    <section id="projects" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>02 / FEATURED WORK &amp; PROJECTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Engineered Systems &amp; <span className="text-gradient">Real Implementations</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Selected projects demonstrating domain-specific AI, cryptographic data integrity, IoT prototyping, and mobile software engineering.
          </p>
        </div>

        {/* 1. Flagship Marquee Card: HydroGPT */}
        <div className="mb-14">
          <FeaturedProject />
        </div>

        {/* 2. Grid of Other Projects */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800/80">
            <div className="flex items-center space-x-2">
              <FolderGit2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Additional Technical Projects
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">4 Verified Deliveries</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OTHER_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl glass-panel p-6 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{project.year}</span>
                  </div>

                  {/* Project Title */}
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-4">
                    {project.title}
                  </h4>

                  {/* Project Custom Technical Visual */}
                  <div className="mb-5">{renderVisual(project.id)}</div>

                  {/* Problem Statement */}
                  <div className="mb-3.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Problem Context
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Actual Contribution */}
                  <div className="mb-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400 block mb-1">
                      My Contribution
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {project.contribution}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action / Source Link */}
                  <div className="flex items-center justify-between pt-1">
                    {project.isConceptOrPrototype ? (
                      <span className="text-[11px] font-mono text-amber-400/90 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Engineered Prototype / Research Concept</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400">
                        {project.highlight}
                      </span>
                    )}

                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    ) : (
                      <span
                        className="text-[10px] font-mono text-slate-400"
                        title="Repository link configurable in src/data/portfolioData.ts"
                      >
                        [Repo configurable]
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
