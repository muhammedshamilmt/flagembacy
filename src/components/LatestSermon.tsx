"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LatestSermon() {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32 font-sans border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">

        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 border-b border-white/20 pb-8 gap-8"
        >
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 mb-4 font-semibold">
              LATEST MESSAGE
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tighter leading-[0.9]">
              THE SOUND OF <br />
              <span className="text-white/40">AWAKENING</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end text-left md:text-right">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-2">SPEAKER</p>
            <p className="text-xs md:text-sm tracking-widest uppercase font-medium">PASTOR FIRSTNAME LASTNAME</p>
            <p className="text-[10px] tracking-widest uppercase text-white/30 mt-4 md:mt-6">OCTOBER 15, 2024</p>
          </div>
        </motion.div>

        {/* Video Player Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[21/9] bg-white/5 relative group cursor-pointer border border-white/10 overflow-hidden"
        >
          {/* Thumbnail */}
          <div className="absolute inset-0 bg-[url('/assets/herocard.png')] bg-cover bg-center contrast-125 opacity-70 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"></div>

          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:border-[#f0c265] transition-all duration-500 bg-black/20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-2 group-hover:fill-[#f0c265] transition-colors">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>

          {/* Bottom Video Info */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 z-10">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-2">CURRENT SERIES</p>
              <p className="text-sm md:text-lg tracking-widest uppercase font-medium">VISION 2024</p>
            </div>
            <div className="flex gap-6 items-center">
              <button className="text-[10px] uppercase tracking-widest text-white/70 hover:text-[#f0c265] transition-colors flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" />
                </svg>
                APPLE PODCASTS
              </button>
              <button className="text-[10px] uppercase tracking-widest text-white/70 hover:text-[#f0c265] transition-colors flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
                </svg>
                SPOTIFY
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer / Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-white/10 pt-12"
        >
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-widest text-white/50 uppercase">PREVIOUS MESSAGE</span>
              <Link href="#" className="text-xs tracking-widest uppercase hover:text-[#f0c265] transition-colors text-white/80">
                THE CALLING & THE COST
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-widest text-white/50 uppercase">UPCOMING SERIES</span>
              <span className="text-xs tracking-widest uppercase text-white/30">
                PRAYER & FASTING WEEK
              </span>
            </div>
          </div>

          <Link
            href="#"
            className="px-8 py-4 border border-white/20 text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors rounded-sm w-full md:w-auto text-center font-semibold"
          >
            VIEW ALL MESSAGES
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
