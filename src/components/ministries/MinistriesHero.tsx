"use client";

import { motion } from "framer-motion";

export default function MinistriesHero() {
  return (
    <section className="relative w-full bg-black text-white pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden flex flex-col items-center justify-center font-sans">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/50 mb-8 font-semibold"
        >
          Ministries Hub
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-season-mix font-bold tracking-tight leading-[1.05] mb-8"
        >
          Every Person. Every Stage.<br />
          <span className="text-white/60">Every Season.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-season-mix"
        >
          Flag Embassy is not a one-size-fits-all church. We have created intentional spaces for children, teenagers, men, women, couples, and families — because discipleship works best in community designed for you.
        </motion.p>
      </div>
    </section>
  );
}
