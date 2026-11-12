import React from 'react';
import { Shield, AlertTriangle, Smartphone, Database, Hash, Activity } from 'lucide-react';

export const BlockchainVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-[#141414] border border-[#2A2A2A] p-4 sm:p-5 flex flex-col justify-between overflow-hidden group-hover:border-orange/60 transition-colors">
      <div className="flex items-center justify-between text-xs border-b border-[#2A2A2A] pb-2.5">
        <span className="font-mono text-orange text-[11px] flex items-center space-x-1.5 uppercase font-bold">
          <Hash className="w-3.5 h-3.5 text-orange flex-shrink-0" />
          <span>SHA-256 Chain of Custody</span>
        </span>
        <span className="text-[10px] font-mono text-white/90 bg-white/10 px-2 py-0.5 border border-white/20">
          LEDGER VALID
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto py-2">
        <div className="p-2 bg-[#1C1C1C] border border-[#2E2E2E] text-center">
          <span className="block text-[9px] font-mono text-white/40 uppercase">Block #01</span>
          <span className="text-[10px] font-mono text-white/90 truncate block mt-0.5">8f2c...4a91</span>
          <span className="text-[9px] text-white/50 font-mono mt-1 block">GENESIS</span>
        </div>
        <div className="p-2 bg-[#222222] border border-orange/40 text-center shadow-[0_0_15px_rgba(241,90,41,0.15)]">
          <span className="block text-[9px] font-mono text-orange uppercase font-bold">Block #02</span>
          <span className="text-[10px] font-mono text-white truncate block mt-0.5">e3b1...7f04</span>
          <span className="text-[9px] text-orange font-mono mt-1 block font-bold">VERIFIED</span>
        </div>
        <div className="p-2 bg-[#1C1C1C] border border-[#2E2E2E] text-center">
          <span className="block text-[9px] font-mono text-white/40 uppercase">Block #03</span>
          <span className="text-[10px] font-mono text-white/90 truncate block mt-0.5">99c4...2d18</span>
          <span className="text-[9px] text-white/50 font-mono mt-1 block">IMMUTABLE</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-2.5 border-t border-[#2A2A2A]">
        <span>Tamper-evident logs</span>
        <span className="text-orange font-semibold">Continuous Audit</span>
      </div>
    </div>
  );
};

export const FraudDetectionVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-[#141414] border border-[#2A2A2A] p-4 sm:p-5 flex flex-col justify-between overflow-hidden group-hover:border-orange/60 transition-colors">
      <div className="flex items-center justify-between text-xs border-b border-[#2A2A2A] pb-2.5">
        <span className="font-mono text-orange text-[11px] flex items-center space-x-1.5 uppercase font-bold">
          <Shield className="w-3.5 h-3.5 text-orange flex-shrink-0" />
          <span>Heuristic URL Scanner</span>
        </span>
        <span className="text-[10px] font-mono text-white/90 bg-white/10 px-2 py-0.5 border border-white/20">
          HEURISTICS
        </span>
      </div>

      <div className="my-auto space-y-2 py-1">
        <div className="p-2 sm:p-2.5 bg-[#1C1C1C] border border-rose-900/50 flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2 min-w-0">
            <AlertTriangle className="w-4 h-4 text-rose-500 flex-shrink-0" />
            <span className="text-xs font-mono text-white/90 truncate">suspicious-banking-verify.biz</span>
          </div>
          <span className="text-[10px] font-mono uppercase bg-rose-500/20 text-rose-400 px-2 py-0.5 border border-rose-500/40 font-bold whitespace-nowrap">
            FLAGGED PHISHING
          </span>
        </div>

        <div className="p-2 sm:p-2.5 bg-[#1C1C1C] border border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2 min-w-0">
            <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
            <span className="text-xs font-mono text-white/70 truncate">official-portal.edu.in</span>
          </div>
          <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 px-2 py-0.5 border border-emerald-500/20 whitespace-nowrap">
            AUTHENTIC
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-2.5 border-t border-[#2A2A2A]">
        <span>Visual clarity alert system</span>
        <span className="text-orange">Accessibility Focused</span>
      </div>
    </div>
  );
};

export const SmartIvVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-[#141414] border border-[#2A2A2A] p-4 sm:p-5 flex flex-col justify-between overflow-hidden group-hover:border-orange/60 transition-colors">
      <div className="flex items-center justify-between text-xs border-b border-[#2A2A2A] pb-2.5">
        <span className="font-mono text-orange text-[11px] flex items-center space-x-1.5 uppercase font-bold">
          <Activity className="w-3.5 h-3.5 text-orange flex-shrink-0" />
          <span>Telemetry Fluid Sensing</span>
        </span>
        <span className="text-[10px] font-mono text-white/90 bg-white/10 px-2 py-0.5 border border-white/20">
          IIT PALAKKAD
        </span>
      </div>

      <div className="my-auto py-2 flex items-center justify-between gap-4">
        {/* Sensor gauge bar */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-white/70">Fluid Reservoir Level</span>
            <span className="text-orange font-bold">18% (DEPLETING)</span>
          </div>
          <div className="h-3 w-full bg-[#222222] border border-[#333333] overflow-hidden p-0.5">
            <div className="h-full bg-orange w-[18%] transition-all" />
          </div>
          <div className="text-[10px] font-mono text-white/40 flex justify-between">
            <span>Critical Threshold: 20%</span>
            <span className="text-rose-400 font-bold">ALARM ACTIVE</span>
          </div>
        </div>

        {/* Load cell readout */}
        <div className="p-3 bg-[#1C1C1C] border border-[#2E2E2E] text-center min-w-[90px]">
          <span className="block text-[9px] font-mono text-white/40 uppercase">Load Cell</span>
          <span className="font-mono text-base font-bold text-white block">92.4 g</span>
          <span className="text-[9px] font-mono text-orange block mt-0.5">HX711 ADC</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-2.5 border-t border-[#2A2A2A]">
        <span>KSCSTE Tech Fest Presentation</span>
        <span className="text-orange">IoT Hardware</span>
      </div>
    </div>
  );
};

export const CourseAppVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-[#141414] border border-[#2A2A2A] p-4 sm:p-5 flex flex-col justify-between overflow-hidden group-hover:border-orange/60 transition-colors">
      <div className="flex items-center justify-between text-xs border-b border-[#2A2A2A] pb-2.5">
        <span className="font-mono text-orange text-[11px] flex items-center space-x-1.5 uppercase font-bold">
          <Smartphone className="w-3.5 h-3.5 text-orange flex-shrink-0" />
          <span>Android Mobile Client</span>
        </span>
        <span className="text-[10px] font-mono text-white/90 bg-white/10 px-2 py-0.5 border border-white/20">
          OFFLINE SQLITE
        </span>
      </div>

      {/* Screen Frame Mockup */}
      <div className="my-auto py-1 max-w-[280px] mx-auto w-full border border-[#333333] bg-[#1A1A1A] p-2 space-y-1.5">
        <div className="flex items-center justify-between pb-1 border-b border-white/10 text-[9px] font-mono text-white/50">
          <span>Course Modules</span>
          <Database className="w-3 h-3 text-orange" />
        </div>
        <div className="p-1.5 bg-[#242424] border-l-2 border-orange flex items-center justify-between text-[10px]">
          <span className="font-sans font-medium text-white">CS301 &middot; Database Systems</span>
          <span className="text-[9px] font-mono text-white/40">Cached</span>
        </div>
        <div className="p-1.5 bg-[#202020] border-l-2 border-white/20 flex items-center justify-between text-[10px]">
          <span className="font-sans font-medium text-white/80">CS304 &middot; Compiler Design</span>
          <span className="text-[9px] font-mono text-white/40">Saved</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-2.5 border-t border-[#2A2A2A]">
        <span>Multi-Activity Intent Lifecycle</span>
        <span className="text-orange">Native Java</span>
      </div>
    </div>
  );
};
