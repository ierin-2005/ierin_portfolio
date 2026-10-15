import React from 'react';
import { Shield, AlertTriangle, Wifi, Smartphone, Database, Hash } from 'lucide-react';

export const BlockchainVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl bg-[#090d19] border border-slate-800 p-4 flex flex-col justify-between overflow-hidden group-hover:border-cyan-500/40 transition-colors">
      <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
        <span className="font-mono text-cyan-400 text-[11px] flex items-center space-x-1">
          <Hash className="w-3.5 h-3.5 text-cyan-400" />
          <span>SHA-256 CHAIN OF CUSTODY</span>
        </span>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
          AUDIT VALID
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto">
        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-700/60 text-center">
          <span className="block text-[9px] font-mono text-slate-400">Block #01</span>
          <span className="text-[10px] font-mono text-slate-300 truncate block">a7f9...4b21</span>
          <span className="text-[9px] text-teal-400 font-mono mt-1 block">GENESIS</span>
        </div>
        <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-800/60 text-center">
          <span className="block text-[9px] font-mono text-cyan-400">Block #02</span>
          <span className="text-[10px] font-mono text-cyan-200 truncate block">e3c8...1d09</span>
          <span className="text-[9px] text-cyan-400 font-mono mt-1 block">VERIFIED</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-700/60 text-center">
          <span className="block text-[9px] font-mono text-slate-400">Block #03</span>
          <span className="text-[10px] font-mono text-slate-300 truncate block">99b2...f88a</span>
          <span className="text-[9px] text-teal-400 font-mono mt-1 block">LOCKED</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
        <span>Tamper Detection: Active</span>
        <span className="text-cyan-400">Audit Trail: Continuous</span>
      </div>
    </div>
  );
};

export const FraudDetectionVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl bg-[#090d19] border border-slate-800 p-4 flex flex-col justify-between overflow-hidden group-hover:border-teal-500/40 transition-colors">
      <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
        <span className="font-mono text-teal-400 text-[11px] flex items-center space-x-1">
          <Shield className="w-3.5 h-3.5 text-teal-400" />
          <span>ACCESSIBLE FRAUD SCANNER</span>
        </span>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
          HEURISTICS
        </span>
      </div>

      <div className="my-auto space-y-2">
        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-rose-900/40 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-mono text-slate-300">suspicious-bank-login.biz</span>
          </div>
          <span className="text-[10px] font-bold text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800/60">
            PHISHING FLAGGED
          </span>
        </div>

        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
          <span>Non-technical Plain Warning:</span>
          <span className="text-emerald-400 font-medium">Simplified UI Alert</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
        <span>Elderly Usability Mode</span>
        <span className="text-teal-400">Zero Technical Jargon</span>
      </div>
    </div>
  );
};

export const SmartIvVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl bg-[#090d19] border border-slate-800 p-4 flex flex-col justify-between overflow-hidden group-hover:border-indigo-500/40 transition-colors">
      <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
        <span className="font-mono text-indigo-400 text-[11px] flex items-center space-x-1">
          <Wifi className="w-3.5 h-3.5 text-indigo-400" />
          <span>IOT LOAD-CELL TELEMETRY</span>
        </span>
        <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
          PROTOTYPE CONCEPT
        </span>
      </div>

      <div className="my-auto flex items-center justify-around">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-indigo-950/80 border border-indigo-500/50 flex items-center justify-center text-indigo-300 mb-1">
            <span className="text-xs font-bold font-mono">18%</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Fluid Level</span>
        </div>

        <div className="h-0.5 w-12 bg-gradient-to-r from-indigo-500 to-amber-500" />

        <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-center">
          <span className="block text-[10px] font-mono text-amber-400 font-semibold">
            ALERT THRESHOLD
          </span>
          <span className="text-[11px] text-slate-300 mt-0.5 block">Microcontroller Signal</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
        <span>Presented: IIT Palakkad 2024</span>
        <span className="text-indigo-400">KSCSTE Tech Fest</span>
      </div>
    </div>
  );
};

export const CourseAppVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl bg-[#090d19] border border-slate-800 p-4 flex flex-col justify-between overflow-hidden group-hover:border-cyan-500/40 transition-colors">
      <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
        <span className="font-mono text-cyan-400 text-[11px] flex items-center space-x-1">
          <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
          <span>ANDROID STUDIO ARCHITECTURE</span>
        </span>
        <span className="text-[10px] font-mono text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/40">
          NATIVE JAVA
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-auto">
        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/70">
          <span className="block text-[10px] font-mono text-cyan-300 font-semibold">
            Multi-Activity Nav
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5 block">
            Intent-driven module flow &amp; views
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/70">
          <span className="block text-[10px] font-mono text-teal-300 font-semibold flex items-center space-x-1">
            <Database className="w-3 h-3 text-teal-400" />
            <span>SQLite Offline</span>
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5 block">
            Persisted favorites &amp; course cache
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
        <span>ICT Academy of Kerala</span>
        <span className="text-cyan-400">Tested APK &amp; Git</span>
      </div>
    </div>
  );
};
