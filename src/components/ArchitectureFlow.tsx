import React, { useState } from 'react';
import {
  FileText,
  Scissors,
  Network,
  Search,
  ShieldCheck,
  Bot,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';
import { ArchitectureStep } from '../types';

interface ArchitectureFlowProps {
  steps: ArchitectureStep[];
}

export const ArchitectureFlow: React.FC<ArchitectureFlowProps> = ({ steps }) => {
  const [selectedStepId, setSelectedStepId] = useState<string>(steps[0].id);

  const selectedStep = steps.find((s) => s.id === selectedStepId) || steps[0];

  const getStepIcon = (iconName: string, isSelected: boolean) => {
    const iconClass = `w-5 h-5 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`;
    switch (iconName) {
      case 'FileText':
        return <FileText className={iconClass} />;
      case 'Scissors':
        return <Scissors className={iconClass} />;
      case 'Network':
        return <Network className={iconClass} />;
      case 'Search':
        return <Search className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Bot':
        return <Bot className={iconClass} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={iconClass} />;
      default:
        return <Network className={iconClass} />;
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#090e1c] dark:bg-[#090e1c] light:bg-slate-900 border border-slate-800 p-5 sm:p-6 my-6 text-left shadow-xl">
      {/* Title & telemetry badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800/80 gap-2">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
            End-to-End System Architecture Flow
          </h4>
        </div>
        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/40 w-fit">
          Click nodes to inspect implementation details
        </span>
      </div>

      {/* Interactive Horizontal Flow Grid */}
      <div className="py-6 overflow-x-auto scrollbar-thin">
        <div className="flex items-center min-w-[760px] lg:min-w-0 justify-between space-x-2">
          {steps.map((step, idx) => {
            const isSelected = selectedStepId === step.id;
            return (
              <React.Fragment key={step.id}>
                {/* Node Box */}
                <button
                  type="button"
                  onClick={() => setSelectedStepId(step.id)}
                  className={`flex-1 flex flex-col items-center p-3 rounded-xl border text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    isSelected
                      ? 'bg-cyan-950/70 border-cyan-400 shadow-glow-cyan scale-105 z-10'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                      isSelected
                        ? 'bg-cyan-500/20 border border-cyan-400/50'
                        : 'bg-slate-800/80 border border-slate-700/60'
                    }`}
                  >
                    {getStepIcon(step.iconName, isSelected)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-xs font-semibold leading-tight line-clamp-2 ${
                      isSelected ? 'text-cyan-200' : 'text-slate-300'
                    }`}
                  >
                    {step.label}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 hidden sm:block">
                    {step.subLabel}
                  </span>
                </button>

                {/* Arrow connector between nodes */}
                {idx < steps.length - 1 && (
                  <div className="flex-shrink-0 text-slate-600 px-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Detailed Node Inspector Box */}
      <div className="mt-2 p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-cyan-900/30 flex items-start space-x-4">
        <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 flex-shrink-0 mt-0.5">
          <Info className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Active Stage Inspector
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-semibold text-white">{selectedStep.label}</span>
            <span className="text-[11px] text-teal-400 font-mono">({selectedStep.subLabel})</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {selectedStep.description}
          </p>
        </div>
      </div>
    </div>
  );
};
