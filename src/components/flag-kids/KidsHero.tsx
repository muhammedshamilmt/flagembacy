"use client";

import { motion } from "framer-motion";

export default function KidsHero() {
  return (
    <section className="relative w-full bg-black text-white pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden flex flex-col items-center justify-center font-sans min-h-[60vh]">
      {/* Dynamic background element - Warm Yellow/Coral glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f0c265]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ff7b54]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#f0c265] mb-8 font-semibold"
        >
          Flag Kids
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-season-mix font-bold tracking-tight leading-[1.05] mb-8"
        >
          Big Faith Starts<br />
          <span className="text-white/60">in Small Hearts</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-season-mix"
        >
          Flag Kids is a place where children from 0 to 12 years old encounter the living God in a safe, age-appropriate, and truly exciting environment. Every Sunday, we make faith an adventure.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#f0c265]/60">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 w-full h-1/2 bg-[#f0c265]"
          />
        </div>
      </motion.div>
    </section>
  );
}
