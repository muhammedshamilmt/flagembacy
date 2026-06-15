"use client";

import Link from 'next/link';
import { motion } from "framer-motion";

export default function GiveBanner() {
  return (
    <section className="w-full bg-black py-32 md:py-40 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none grayscale"></div>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Huge Text */}
        <div className="w-full lg:w-[55%]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-[80px] font-oswald text-white leading-[0.95] tracking-tighter uppercase"
          >
            READY TO GROW IN <br />
            <span className="text-white/40">FAITH</span> & MAKE A <br /> DIFFERENCE TODAY?
          </motion.h2>
        </div>

        {/* Right Side: Text & Button */}
        <div className="w-full lg:w-[45%] flex flex-col items-start lg:items-end text-left lg:text-right">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 lg:ml-auto max-w-md font-medium"
          >
            Join FLAG Embassy today and become part of a loving community. Discover your purpose, serve others, and walk together in faith.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-4 bg-[#f0c265] text-black pl-8 pr-2.5 py-2.5 rounded-full font-sans tracking-widest uppercase font-bold text-xs hover:bg-white transition-all shadow-[0_8px_20px_rgba(240,194,101,0.2)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.3)]"
            >
              GET STARTED
              <div className="w-11 h-11 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </Link>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
