import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Binary,
  Layers,
  Database,
  Cpu,
  CheckCircle,
} from 'lucide-react';

interface FlowNode {
  step: string;
  title: string;
  sub: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FLOW_NODES: FlowNode[] = [
  {
    step: '01',
    title: 'Hydrology Documents',
    sub: 'Domain Manuals & Reports',
    desc: 'Ingests complex technical flood guidelines, catchment reports, and structural manuals.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'Document Processing',
    sub: 'Semantic Chunking',
    desc: 'Cleans and segments text while strictly preserving engineering tables and formulas.',
    icon: Layers,
  },
  {
    step: '03',
    title: 'Embeddings',
    sub: 'Dense Vector Mapping',
    desc: 'Transforms parsed segments into high-dimensional vector representations.',
    icon: Binary,
  },
  {
    step: '04',
    title: 'FAISS Retrieval',
    sub: 'Vector Search Index',
    desc: 'Performs sub-millisecond similarity queries to identify top-k relevant context chunks.',
    icon: Database,
  },
  {
    step: '05',
    title: 'LLM Reasoning',
    sub: 'Qwen2.5-3B (GGUF)',
    desc: 'Constrains language model reasoning with retrieved context for zero-cloud local execution.',
    icon: Cpu,
  },
  {
    step: '06',
    title: 'Verified Answer',
    sub: 'Grounded Output',
    desc: 'Produces factual, engineering-ready responses with exact document references.',
    icon: CheckCircle,
  },
];

export const ArchitectureFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="w-full bg-[#181818] border border-[#2A2A2A] p-6 sm:p-8 lg:p-10 select-none">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#2A2A2A] gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-orange block mb-1">
            System Architecture &middot; Data Flow
          </span>
          <h4 className="font-display font-bold text-lg sm:text-xl text-white">
            Document Ingestion to Local GGUF Inference
          </h4>
        </div>
        <div className="font-mono text-xs text-white/50 flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
          <span>Interactive System Pipeline</span>
        </div>
      </div>

      {/* Horizontal Step Pipeline (Scrollable on small screens, grid on large) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
        {FLOW_NODES.map((node, index) => {
          const Icon = node.icon;
          const isSelected = activeStep === index;

          return (
            <motion.div
              key={node.step}
              whileHover={{ y: -3 }}
              onClick={() => setActiveStep(index)}
              className={`p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#222222] border-orange shadow-[0_0_20px_rgba(241,90,41,0.2)]'
                  : 'bg-[#141414] border-[#2A2A2A] hover:border-white/30'
              }`}
            >
              <div>
                {/* Step badge & icon */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-[11px] font-bold ${
                      isSelected ? 'text-orange' : 'text-white/40'
                    }`}
                  >
                    {node.step}
                  </span>
                  <div
                    className={`p-2 rounded-none ${
                      isSelected
                        ? 'bg-orange text-white'
                        : 'bg-white/5 text-white/60'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="font-display font-bold text-xs sm:text-sm text-white mb-1 leading-snug">
                  {node.title}
                </div>
                <div className="font-mono text-[10px] text-white/50 mb-3 truncate">
                  {node.sub}
                </div>
              </div>

              {/* Indicator line */}
              <div
                className={`h-0.5 w-full mt-2 transition-colors ${
                  isSelected ? 'bg-orange' : 'bg-white/10'
                }`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Detail Inspector Card for Active Node */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-6 p-4 sm:p-5 bg-[#141414] border border-[#2A2A2A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center space-x-3.5">
          <span className="font-mono text-xs px-2.5 py-1 bg-orange/15 border border-orange/40 text-orange font-bold">
            STAGE {FLOW_NODES[activeStep].step}
          </span>
          <div>
            <span className="font-display font-bold text-sm text-white block">
              {FLOW_NODES[activeStep].title} &mdash; {FLOW_NODES[activeStep].sub}
            </span>
            <p className="text-xs sm:text-sm text-white/70 mt-0.5">
              {FLOW_NODES[activeStep].desc}
            </p>
          </div>
        </div>

        <div className="font-mono text-[11px] text-white/40 whitespace-nowrap self-end sm:self-center">
          Step {activeStep + 1} of {FLOW_NODES.length}
        </div>
      </motion.div>
    </div>
  );
};
