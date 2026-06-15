"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-24 md:pt-32 pb-8 border-t border-white/20 font-sans relative overflow-hidden">
      
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Section: Newsletter & Intro */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 border-b border-white/10 pb-20">
          
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-8 max-w-xl">
            <div>
              <h2 className="text-3xl md:text-5xl font-oswald uppercase tracking-tighter mb-4">
                STAY CONNECTED
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                Sign up for our newsletter to receive weekly updates, devotional resources, and latest news from Flag Embassy.
              </p>
            </div>
            
            <form className="flex border-b border-white/30 pb-2 focus-within:border-[#f0c265] transition-colors group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none text-xs md:text-sm tracking-widest uppercase w-full text-white placeholder-white/30 focus:ring-0"
                required
              />
              <button type="submit" className="text-white/50 group-focus-within:text-[#f0c265] hover:text-[#f0c265] transition-colors px-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </form>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">EXPLORE</span>
              <Link href="#" className="text-xs tracking-widest uppercase hover:text-[#f0c265] transition-colors">HOME</Link>
              <Link href="#" className="text-xs tracking-widest uppercase hover:text-[#f0c265] transition-colors">ABOUT US</Link>
              <Link href="#" className="text-xs tracking-widest uppercase hover:text-[#f0c265] transition-colors">MINISTRIES</Link>
              <Link href="#" className="text-xs tracking-widest uppercase hover:text-[#f0c265] transition-colors">GIVING</Link>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">MEDIA</span>
              <Link href="#" className="text-xs tracking-widest uppercase hover:text-[#f0c265] transition-colors">SERMONS</Link>
              <Link href="#" className="text-xs tracking-widest uppercase hover:text-[#f0c265] transition-colors">PODCAST</Link>
              <Link href="#" className="text-xs tracking-widest uppercase hover:text-[#f0c265] transition-colors">WORSHIP</Link>
              <Link href="#" className="text-xs tracking-widest uppercase hover:text-[#f0c265] transition-colors">EVENTS</Link>
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">VISIT US</span>
              <p className="text-xs tracking-widest uppercase leading-loose text-white/80">
                123 HEAVEN'S WAY<br />
                CITY, ST 12345<br />
                SUNDAYS @ 9AM & 11AM
              </p>
            </div>
          </div>
        </div>

        {/* Big Logo Text */}
        <div className="py-12 md:py-24 flex justify-center items-center overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[12vw] leading-none font-oswald font-bold tracking-tighter text-white uppercase text-center w-full"
          >
            FLAG EMBASSY
          </motion.h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-[10px] tracking-widest uppercase text-white/40 text-center md:text-left">
            &copy; {new Date().getFullYear()} FLAG EMBASSY CHURCH. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">INSTAGRAM</Link>
            <Link href="#" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">YOUTUBE</Link>
            <Link href="#" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">FACEBOOK</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
