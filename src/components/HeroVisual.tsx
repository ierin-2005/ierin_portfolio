import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[500px] flex items-center justify-center select-none pointer-events-none overflow-hidden">
      {/* Deep ambient atmospheric orange glow */}
      <div className="absolute w-[280px] sm:w-[420px] lg:w-[500px] h-[280px] sm:h-[420px] lg:h-[500px] rounded-full bg-orange opacity-25 blur-[90px] sm:blur-[120px] transform-gpu pointer-events-none" />

      {/* Subtle secondary warm glow core */}
      <div className="absolute w-36 sm:w-56 h-36 sm:h-56 rounded-full bg-[#FF7A45] opacity-40 blur-[50px] animate-pulse-slow pointer-events-none" />

      {/* Orbital SVG Composition with 3D feel */}
      <div className="relative w-full max-w-[480px] h-[480px] flex items-center justify-center">
        {/* Outer Ring 1: Slow continuous rotation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-4 sm:inset-6 rounded-full border border-orange/20 border-dashed"
        >
          {/* Orbital satellite node 1 */}
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-orange shadow-[0_0_12px_#F15A29]" />
          <span className="absolute -bottom-1 left-1/3 w-2 h-2 rounded-full bg-white/40" />
        </motion.div>

        {/* Middle Ring 2: Counter rotation with tick marks */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-14 sm:inset-16 rounded-full border border-white/10"
        >
          <span className="absolute top-1/4 -right-1 w-2.5 h-2.5 rounded-full bg-orange/80 shadow-[0_0_10px_#F15A29]" />
          <span className="absolute bottom-1/4 -left-1 w-2 h-2 rounded-full bg-white/60" />
          
          {/* Subtle crosshair marks */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-3 bg-orange/60" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-3 bg-orange/60" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-px bg-orange/60" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-px bg-orange/60" />
        </motion.div>

        {/* Elliptical Tilted Orbit 3 (Simulates 3D planetary / AI intelligence ring) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[320px] sm:w-[400px] h-[140px] sm:h-[180px] rounded-[100%] border border-orange/40 [transform:rotate(-25deg)] shadow-[0_0_30px_rgba(241,90,41,0.2)]"
        >
          <span className="absolute top-2 right-12 w-3 h-3 rounded-full bg-[#FFA07A] shadow-[0_0_15px_#F15A29]" />
        </motion.div>

        {/* Counter Elliptical Orbit 4 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[260px] sm:w-[320px] h-[100px] sm:h-[130px] rounded-[100%] border border-white/15 [transform:rotate(35deg)]"
        >
          <span className="absolute bottom-1 left-16 w-2 h-2 rounded-full bg-orange shadow-[0_0_10px_#F15A29]" />
        </motion.div>

        {/* Inner Core: Radiant Luminous Orb with geometric rings */}
        <div className="relative w-28 sm:w-36 h-28 sm:h-36 rounded-full bg-gradient-to-br from-[#FF7A45] via-[#F15A29] to-[#9E2A00] p-[2px] shadow-[0_0_60px_rgba(241,90,41,0.6)] flex items-center justify-center">
          {/* Inner dark center with high-tech monogram / pulse */}
          <div className="w-full h-full rounded-full bg-[#111111] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#F15A29_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-10 sm:w-14 h-10 sm:h-14 rounded-full bg-gradient-to-tr from-orange to-[#FFA07A] shadow-[0_0_25px_#F15A29]"
            />
          </div>
        </div>

        {/* Subtle coordinate data ring */}
        <div className="absolute bottom-6 font-mono text-[9px] sm:text-[10px] text-white/30 tracking-[0.25em] uppercase">
          CORE // 10.8505° N, 76.2711° E
        </div>
      </div>
    </div>
  );
};
