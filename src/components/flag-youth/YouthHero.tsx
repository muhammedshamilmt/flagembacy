"use client";

import { motion } from "framer-motion";

export default function YouthHero() {
  return (
    <section className="relative w-full bg-black text-white pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden flex flex-col items-center justify-center font-sans min-h-[60vh]">
      {/* Electric / Raw background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#3B82F6]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#60A5FA] mb-8 font-bold"
        >
          Flag Youth
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-oswald uppercase font-black tracking-tighter leading-[0.95] mb-8"
        >
          This Generation<br />
          <span className="text-white/40">Will Not Be Silent.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Flag Youth is where teenagers discover their identity in Christ, build genuine friendships, and step into their God-given calling. No compromise. No pretence. Just real faith for real life.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-[#60A5FA]"
          />
        </div>
      </motion.div>
    </section>
  );
}
