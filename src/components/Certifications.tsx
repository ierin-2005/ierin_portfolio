import React, { useState } from 'react';
import { CheckCircle2, Search, ExternalLink, Filter } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

type FilterCategory = 'All' | 'AI & Machine Learning' | 'Embedded & Hardware' | 'Development & Cyber';

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: FilterCategory[] = [
    'All',
    'AI & Machine Learning',
    'Embedded & Hardware',
    'Development & Cyber',
  ];

  const filteredCertifications = CERTIFICATIONS_DATA.filter((cert) => {
    const matchesCategory =
      selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesQuery =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="certifications" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>07 / PROFESSIONAL CREDENTIALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Verified <span className="text-gradient">Certifications</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Specialized technical certifications issued by premier engineering institutes (IISc Bangalore, IIT Kharagpur, Google, Infosys, Cisco).
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certification or issuer..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCertifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-glow-cyan"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                    {cert.category}
                  </span>
                  {cert.year && (
                    <span className="text-xs font-mono text-slate-400">{cert.year}</span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-teal-300 font-medium mb-3">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                {cert.score ? (
                  <span className="text-cyan-300 font-semibold bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                    {cert.score}
                  </span>
                ) : (
                  <span className="text-slate-400 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Completed</span>
                  </span>
                )}

                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[10px] text-slate-400 font-mono">Verified Credential</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No certifications match the selected filter.
          </div>
        )}
      </div>
    </section>
  );
};
