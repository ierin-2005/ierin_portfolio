import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Brain,
  Code2,
  Library,
  Smartphone,
  Terminal,
  BookOpen,
  Users,
  Search,
  Database,
  Cpu,
  GitBranch,
  Flame,
  Binary,
  Radio,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// DeveloperFolio-inspired Core Technology Showcase with custom brand-colored visual badges
const CORE_TECH_STACK = [
  { name: 'Python', role: 'Primary Language', icon: Code2, color: 'text-amber-500 dark:text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
  { name: 'PyTorch', role: 'Deep Learning', icon: Flame, color: 'text-rose-500 dark:text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' },
  { name: 'Scikit-Learn', role: 'Machine Learning', icon: Brain, color: 'text-cyan-500 dark:text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/30' },
  { name: 'RAG & FAISS', role: 'Vector Search', icon: Database, color: 'text-teal-500 dark:text-teal-400', bg: 'bg-teal-500/10 border-teal-500/30' },
  { name: 'LLMs & GGUF', role: 'Offline GenAI', icon: Cpu, color: 'text-violet-500 dark:text-violet-400', bg: 'bg-violet-500/10 border-violet-500/30' },
  { name: 'Java', role: 'Enterprise & Android', icon: Binary, color: 'text-orange-500 dark:text-orange-400', bg: 'bg-orange-500/10 border-orange-500/30' },
  { name: 'C / C++', role: 'Systems & Algorithms', icon: Terminal, color: 'text-blue-500 dark:text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
  { name: 'Android Studio', role: 'Mobile Engineering', icon: Smartphone, color: 'text-emerald-500 dark:text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
  { name: 'MySQL & SQLite', role: 'Relational DBs', icon: Database, color: 'text-sky-500 dark:text-sky-400', bg: 'bg-sky-500/10 border-sky-500/30' },
  { name: 'Git & GitHub', role: 'Version Control', icon: GitBranch, color: 'text-purple-500 dark:text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
  { name: 'Linux / Bash', role: 'OS & Scripting', icon: Terminal, color: 'text-slate-600 dark:text-slate-300', bg: 'bg-slate-500/10 border-slate-500/30' },
  { name: 'IoT & Arduino', role: 'Embedded Systems', icon: Radio, color: 'text-indigo-500 dark:text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/30' },
];

export const Skills: React.FC = () => {
  const [filterText, setFilterText] = useState('');

  const getCategoryIcon = (iconName: string) => {
    const iconClass = 'w-5 h-5 text-cyan-600 dark:text-cyan-400';
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Brain':
        return <Brain className={iconClass} />;
      case 'Code2':
        return <Code2 className={iconClass} />;
      case 'Library':
        return <Library className={iconClass} />;
      case 'Smartphone':
        return <Smartphone className={iconClass} />;
      case 'Terminal':
        return <Terminal className={iconClass} />;
      case 'BookOpen':
        return <BookOpen className={iconClass} />;
      case 'Users':
        return <Users className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800/50 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
              <span>04 / TECHNICAL EXPERTISE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Verified Technical <span className="text-gradient">Competencies</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Software engineering, machine learning architectures, and system proficiencies verified through coursework and enterprise project deliveries.
            </p>
          </div>

          {/* Quick Skill Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Search skill (e.g. RAG, Python)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            {filterText && (
              <button
                onClick={() => setFilterText('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg bg-slate-100 dark:bg-slate-800/80"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* DeveloperFolio Visual Tech Stack Cloud / Showcase */}
        {!filterText && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800/90 shadow-lg relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-200 dark:border-slate-800/80 gap-3">
              <div>
                <span className="text-xs font-mono text-cyan-800 dark:text-cyan-400 uppercase tracking-wider block">
                  Core Technologies &amp; Tools
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Primary Tooling &amp; Production Frameworks
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 self-start sm:self-center">
                12 Production Tools
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {CORE_TECH_STACK.map((tech, idx) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                    className="group p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm hover:shadow-glow-cyan transition-all flex flex-col items-center text-center cursor-default"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 border transition-transform group-hover:scale-110 ${tech.bg}`}>
                      <IconComponent className={`w-5 h-5 ${tech.color}`} />
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5 truncate w-full">
                      {tech.role}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const matchedSkills = filterText
              ? category.skills.filter((skill) =>
                  skill.toLowerCase().includes(filterText.toLowerCase())
                )
              : category.skills;

            if (filterText && matchedSkills.length === 0) {
              return null;
            }

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                className="p-5 sm:p-6 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-glow-cyan"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/50 flex items-center justify-center flex-shrink-0 text-cyan-600 dark:text-cyan-400">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {matchedSkills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                          filterText && skill.toLowerCase().includes(filterText.toLowerCase())
                            ? 'bg-cyan-100 text-cyan-900 dark:bg-cyan-500/20 dark:text-cyan-200 border border-cyan-400 font-semibold'
                            : 'bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
                  <span>{matchedSkills.length} competencies</span>
                  <span className="text-cyan-700 dark:text-cyan-400/80">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Website Stack Technical Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-2"
        >
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
            <span>
              <strong>Note on Portfolio Implementation:</strong> Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">Source verified via CV</span>
        </motion.div>
      </div>
    </section>
  );
};
