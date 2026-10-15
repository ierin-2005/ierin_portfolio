import React from 'react';
import { BrainCircuit, Cpu, Layers } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Bridging Theory with <span className="text-gradient">Practical Engineering</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Passionate about turning machine learning concepts into reliable software, tested with real domain data and verified end users.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative grounded in CV */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-normal">
              {ABOUT_DATA.summaryParagraphs.map((para, idx) => (
                <p key={idx} className="p-4 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50/80 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                  {para}
                </p>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {ABOUT_DATA.quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-base font-bold text-white dark:text-white light:text-slate-900 mt-1">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                    {stat.subtext}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Three Focused Highlight Pillars */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
              <span>Core Engineering Pillars</span>
            </h3>

            {/* Pillar 1 */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 dark:from-slate-900/90 dark:to-slate-950/90 light:from-white light:to-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/50 transition-all duration-300 group shadow-sm hover:shadow-glow-cyan">
              <div className="flex items-center space-x-3 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                    AI &amp; Machine Learning
                  </h4>
                  <span className="text-xs text-cyan-400/90 font-mono">Predictive &amp; Neural Models</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                Experienced in predictive modeling, regression, artificial neural networks (ANN), feature engineering, data preprocessing, and model evaluation using Python, Scikit-learn, and PyTorch.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 dark:from-slate-900/90 dark:to-slate-950/90 light:from-white light:to-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-teal-500/50 transition-all duration-300 group shadow-sm hover:shadow-glow-teal">
              <div className="flex items-center space-x-3 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                    Generative AI &amp; LLMs
                  </h4>
                  <span className="text-xs text-teal-400/90 font-mono">RAG &amp; Vector Embeddings</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                Developing grounded question-answering systems using Retrieval-Augmented Generation (RAG), FAISS dense vector retrieval, domain embeddings, prompt engineering, and compact quantized inference.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 dark:from-slate-900/90 dark:to-slate-950/90 light:from-white light:to-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-indigo-500/50 transition-all duration-300 group shadow-sm hover:shadow-glow-indigo">
              <div className="flex items-center space-x-3 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                    Software &amp; App Development
                  </h4>
                  <span className="text-xs text-indigo-400/90 font-mono">Android, IoT &amp; Cryptography</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                Hands-on engineering across Android Studio (Java, XML, SQLite), single-board computing hardware-software integration, and cryptographic audit hashing (SHA-256).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
