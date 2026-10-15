import React, { useState } from 'react';
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
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filterText, setFilterText] = useState('');

  const getCategoryIcon = (iconName: string) => {
    const iconClass = 'w-5 h-5 text-cyan-400';
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
    <section id="skills" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>04 / TECHNICAL EXPERTISE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Verified Technical <span className="text-gradient">Competencies</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Categorized proficiencies verified through coursework, project deliveries, and professional internships.
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
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
            {filterText && (
              <button
                onClick={() => setFilterText('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const matchedSkills = filterText
              ? category.skills.filter((skill) =>
                  skill.toLowerCase().includes(filterText.toLowerCase())
                )
              : category.skills;

            if (filterText && matchedSkills.length === 0) {
              return null;
            }

            return (
              <div
                key={category.title}
                className="p-5 sm:p-6 rounded-2xl glass-panel border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-glow-cyan"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center flex-shrink-0">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {matchedSkills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                          filterText && skill.toLowerCase().includes(filterText.toLowerCase())
                            ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400'
                            : 'bg-slate-900/90 border border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>{matchedSkills.length} competencies</span>
                  <span className="text-cyan-400/80">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Website Stack Technical Footnote */}
        <div className="mt-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>
              <strong>Note on Portfolio Implementation:</strong> This website was authored with
              React, TypeScript, Vite, Tailwind CSS, and Framer Motion.
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">Source verified via CV</span>
        </div>
      </div>
    </section>
  );
};
