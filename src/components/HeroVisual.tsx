import React, { useState } from 'react';
import { Database, Cpu, Network, Sparkles, CheckCircle2 } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      {/* Decorative ambient backdrop glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

      {/* Main Glassmorphic Terminal Card */}
      <div className="relative rounded-2xl glass-panel p-5 sm:p-7 shadow-2xl border border-slate-700/60 overflow-hidden">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-slate-400">rag_inference_pipeline.v2</span>
          </div>
          <div className="flex items-center space-x-2 font-mono text-[11px] text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>ONLINE · L&amp;T HYDRO</span>
          </div>
        </div>

        {/* Technical Architecture Canvas */}
        <div className="relative aspect-[4/3] w-full rounded-xl bg-[#080d19] dark:bg-[#080d19] light:bg-slate-900 border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* SVG Animated Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.8" />
                <stop offset="100%" stop-color="#14b8a6" stop-opacity="0.4" />
              </linearGradient>
              <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#14b8a6" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#6366f1" stop-opacity="0.7" />
              </linearGradient>
            </defs>

            {/* Connecting paths */}
            <path
              d="M 60 70 Q 150 40 220 100 T 360 80"
              fill="none"
              stroke="url(#lineGrad1)"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            <path
              d="M 80 180 C 160 140, 200 180, 260 150 S 370 190, 420 170"
              fill="none"
              stroke="url(#lineGrad2)"
              strokeWidth="1.5"
            />
            <path
              d="M 120 190 Q 220 220 330 170"
              fill="none"
              stroke="#06b6d4"
              strokeOpacity="0.3"
              strokeWidth="1.5"
            />
          </svg>

          {/* Top Layer: Query & Embedding Ingestion */}
          <div className="relative z-10 flex items-center justify-between">
            {/* Node 1: Ingestion */}
            <div
              onMouseEnter={() => setActiveNode('ingest')}
              onMouseLeave={() => setActiveNode(null)}
              className={`flex items-center space-x-2.5 p-2 sm:p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeNode === 'ingest'
                  ? 'bg-cyan-950/80 border-cyan-400 shadow-glow-cyan scale-105'
                  : 'bg-slate-900/90 border-slate-700/80 hover:border-cyan-500/50'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Source Docs</div>
                <div className="text-xs font-semibold text-slate-200">Hydrology DB</div>
              </div>
            </div>

            {/* In-between status indicator */}
            <div className="hidden sm:flex flex-col items-center">
              <span className="text-[10px] font-mono text-cyan-400/80">Vectorize</span>
              <span className="text-[9px] text-slate-400">Dim: 1536</span>
            </div>

            {/* Node 2: Embeddings / Vector space */}
            <div
              onMouseEnter={() => setActiveNode('embed')}
              onMouseLeave={() => setActiveNode(null)}
              className={`flex items-center space-x-2.5 p-2 sm:p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeNode === 'embed'
                  ? 'bg-teal-950/80 border-teal-400 shadow-glow-teal scale-105'
                  : 'bg-slate-900/90 border-slate-700/80 hover:border-teal-500/50'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Index</div>
                <div className="text-xs font-semibold text-slate-200">FAISS Search</div>
              </div>
            </div>
          </div>

          {/* Central Interactive Pipeline Graphic */}
          <div className="relative z-10 my-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-400 font-mono text-[11px] flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Context Grounding Vector Map</span>
              </span>
              <span className="text-cyan-400 font-mono text-[11px]">Top-K: 4 chunks</span>
            </div>

            {/* Simulated Vector Graph representation */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40">
                <span className="block text-[9px] font-mono text-slate-400">Flood Hist.</span>
                <span className="text-xs font-mono font-semibold text-cyan-300">0.941</span>
              </div>
              <div className="p-1.5 rounded-lg bg-teal-950/40 border border-teal-800/40">
                <span className="block text-[9px] font-mono text-slate-400">Catchment</span>
                <span className="text-xs font-mono font-semibold text-teal-300">0.897</span>
              </div>
              <div className="p-1.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40">
                <span className="block text-[9px] font-mono text-slate-400">Structural</span>
                <span className="text-xs font-mono font-semibold text-indigo-300">0.884</span>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-800/40 border border-slate-700/40">
                <span className="block text-[9px] font-mono text-slate-400">Discharge</span>
                <span className="text-xs font-mono font-semibold text-slate-300">0.862</span>
              </div>
            </div>
          </div>

          {/* Bottom Layer: LLM Model & Verified Output */}
          <div className="relative z-10 flex items-center justify-between">
            {/* Node 3: LLM Inference */}
            <div
              onMouseEnter={() => setActiveNode('llm')}
              onMouseLeave={() => setActiveNode(null)}
              className={`flex items-center space-x-2.5 p-2 sm:p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeNode === 'llm'
                  ? 'bg-indigo-950/80 border-indigo-400 shadow-glow-indigo scale-105'
                  : 'bg-slate-900/90 border-slate-700/80 hover:border-indigo-500/50'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Inference</div>
                <div className="text-xs font-semibold text-slate-200">Qwen2.5 / GGUF</div>
              </div>
            </div>

            {/* Inference arrow */}
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-teal-400" />
            </div>

            {/* Node 4: Answer */}
            <div
              onMouseEnter={() => setActiveNode('output')}
              onMouseLeave={() => setActiveNode(null)}
              className={`flex items-center space-x-2.5 p-2 sm:p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeNode === 'output'
                  ? 'bg-emerald-950/80 border-emerald-400 scale-105'
                  : 'bg-slate-900/90 border-slate-700/80 hover:border-emerald-500/50'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Verified</div>
                <div className="text-xs font-semibold text-slate-200">Grounded Output</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live contextual status footer */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-mono">
              {activeNode === 'ingest' && 'Ingesting environmental domain manuals & flood logs'}
              {activeNode === 'embed' && 'FAISS vector space similarity scoring'}
              {activeNode === 'llm' && 'Qwen2.5-3B local CPU inference'}
              {activeNode === 'output' && 'Grounded context-aware response for engineering review'}
              {!activeNode && 'Hover components to inspect real-time architecture states'}
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">CPU Local Ready</span>
        </div>
      </div>
    </div>
  );
};
