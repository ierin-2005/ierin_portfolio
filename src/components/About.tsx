import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Layers, ShieldCheck, CheckCircle2, Award, Building2, GraduationCap, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const capabilities = [
    {
      title: 'AI & Machine Learning',
      sub: 'Predictive & Neural Models',
      icon: BrainCircuit,
      color: 'cyan',
      bullets: [
        'Predictive regression, neural networks (ANN), and feature engineering with Scikit-learn & PyTorch.',
        'Model evaluation pipelines validated against real domain data and verified end users.',
      ],
    },
    {
      title: 'Generative AI & LLMs',
      sub: 'RAG Architecture & Embeddings',
      icon: Cpu,
      color: 'teal',
      bullets: [
        'Built HydroGPT with dense FAISS vector indexing, prompt engineering & local CPU quantized inference.',
        'Presented grounded RAG QA pipeline to L&T Hydrology & Structural engineering departments.',
      ],
    },
    {
      title: 'Software & Mobile Development',
      sub: 'Android, Java & SQLite',
      icon: Layers,
      color: 'indigo',
      bullets: [
        'Engineered native Android applications with Java, multi-Activity navigation, and SQLite offline persistence.',
        'Hands-on experience in APK debugging, responsive UI layouts, and Git version control.',
      ],
    },
    {
      title: 'IoT & Cryptographic Integrity',
      sub: 'Sensors & SHA-256 Verification',
      icon: ShieldCheck,
      color: 'emerald',
      bullets: [
        'Single-board computing & load-cell telemetry presented at IIT Palakkad (KSCSTE Tech Fest).',
        'Cryptographic audit hashing with SHA-256 to ensure data immutability and tamper detection.',
      ],
    },
  ];

  const highlights = [
    {
      icon: Building2,
      label: 'Corporate ML Delivery',
      value: 'Larsen & Toubro',
      desc: 'AI/ML Intern & HydroGPT Creator',
    },
    {
      icon: GraduationCap,
      label: 'Academic Foundation',
      value: 'B.Tech CS (3rd Year)',
      desc: 'CGPA 7.97 / 10 · Jyothi Engg',
    },
    {
      icon: Award,
      label: 'State Recognition',
      value: 'State A Grade',
      desc: 'IT Presentation Mela (Kerala)',
    },
    {
      icon: Sparkles,
      label: 'Distinguished Honor',
      value: 'Rajya Puraskar',
      desc: 'Bharat Scouts & Guides Awardee',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800/50 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bridging Theory with <span className="text-gradient">Practical Engineering</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Passionate Computer Science undergraduate focused on building dependable, high-performance software powered by machine learning, generative AI, and verified architectures.
          </p>
        </motion.div>

        {/* 4 Visual Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-sm hover:shadow-glow-cyan group"
              >
                <div className="flex items-center space-x-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {cap.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400">
                      {cap.sub}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {cap.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Visual Milestone / Highlight Tiles */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start space-x-3 shadow-sm hover:border-cyan-500/40 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white block mt-0.5">
                    {item.value}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-tight">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
