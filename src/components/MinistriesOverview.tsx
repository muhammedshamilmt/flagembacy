"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ministries = [
  {
    title: "Youth Ministry",
    category: "YOUTH & YOUNG ADULTS",
    year: "2024",
    desc: "A vibrant community dedicated to empowering the next generation. We focus on authentic relationships, deep spiritual growth, and preparing young people to lead with purpose.",
    image: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=1887&auto=format&fit=crop"
  },
  {
    title: "Worship & Arts",
    category: "CREATIVE & WORSHIP",
    year: "2024",
    desc: "Cultivating an atmosphere of heavenly worship through music, visual arts, and production. We believe true worship breaks chains and changes atmospheres.",
    image: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=1965&auto=format&fit=crop"
  },
  {
    title: "Kids Church",
    category: "CHILDREN'S MINISTRY",
    year: "2024",
    desc: "Building a strong spiritual foundation for our children in a fun, safe, and engaging environment where they learn about God's love and their unique identity.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop"
  },
  {
    title: "Community Groups",
    category: "FELLOWSHIP & DISCIPLESHIP",
    year: "2024",
    desc: "Small groups meeting across the city to share life, study the Word, and support one another. This is where the church becomes family.",
    image: "https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Outreach & Missions",
    category: "LOCAL & GLOBAL OUTREACH",
    year: "2024",
    desc: "Taking the love of Jesus beyond the four walls of the church. We partner with local charities and global missions to make a tangible difference in the world.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function MinistriesOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Using any to easily store element refs without strict HTMLDivElement typing issues in strict mode
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        // Triggers only when the element is crossing the vertical middle of the screen
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const activeMin = ministries[activeIndex];

  return (
    <section className="w-full bg-black text-white relative flex flex-col md:flex-row font-sans border-t border-white/10">
      
      {/* Left Panel - Sticky */}
      <div className="w-full md:w-[55%] lg:w-[60%] md:sticky md:top-0 h-screen p-8 md:p-12 lg:p-16 border-r border-white/10 flex flex-col justify-between">
        
        {/* Top Section */}
        <div>
          <p className="text-[10px] md:text-xs tracking-[0.2em] mb-4 text-white/50 uppercase font-semibold">NO.</p>
          <div className="overflow-hidden h-[120px] md:h-[200px] lg:h-[240px]">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={activeIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="text-[140px] md:text-[220px] lg:text-[280px] leading-none font-oswald font-medium tracking-tighter"
              >
                0{activeIndex + 1}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>

        {/* Middle Details Section */}
        <div className="flex flex-col gap-6 mt-12 md:mt-0">
          <div className="w-full h-px bg-white/10"></div>
          
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="flex gap-4 md:gap-8"
              >
                <div className="w-24 md:w-32 flex-shrink-0 text-[10px] md:text-xs tracking-widest text-white/50">{activeMin.year}</div>
                <div className="flex-1 text-[10px] md:text-xs tracking-[0.15em] uppercase leading-loose text-white/80">
                  {activeMin.category}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full h-px bg-white/10"></div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ y: "50%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-50%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="flex gap-4 md:gap-8"
              >
                <div className="w-24 md:w-32 flex-shrink-0 text-[10px] md:text-xs tracking-widest text-white/50 uppercase">MINISTRY</div>
                <div className="flex-1 text-[10px] md:text-xs uppercase leading-relaxed text-white/70 max-w-sm">
                  {activeMin.desc}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-end justify-between mt-12 md:mt-0">
          <div className="flex items-end gap-6 md:gap-12">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="w-24 h-24 md:w-32 md:h-32 bg-white/5 overflow-hidden relative"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale contrast-125 mix-blend-luminosity"
                  style={{ backgroundImage: `url('${activeMin.image}')` }}
                ></div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex flex-col gap-4 pb-1">
              <button className="px-4 py-2 border border-[#f0c265] text-[#f0c265] text-[10px] font-semibold tracking-widest rounded-full uppercase hover:bg-[#f0c265] hover:text-black transition-colors w-fit">
                VIEW DETAILS
              </button>
              <p className="text-[9px] tracking-widest text-white/30 uppercase mt-2 hidden md:block">SCROLL OR DRAG</p>
            </div>
          </div>
        </div>

      </div>

      {/* Right Panel - Scrollable List */}
      <div className="w-full md:w-[45%] lg:w-[40%] relative">
        
        {/* Crosshair fixed in the middle of the screen */}
        <div className="hidden md:flex sticky top-[50vh] w-full justify-end pr-8 lg:pr-16 z-0 pointer-events-none h-0 items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f0c265" strokeWidth="1" className="translate-y-[-50%] opacity-50">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          </svg>
        </div>

        {/* The List */}
        <div className="flex flex-col w-full pt-[10vh] md:pt-[45vh] pb-[10vh] md:pb-[45vh] pl-8 md:pl-12 lg:pl-20">
          {ministries.map((ministry, i) => (
            <div 
              key={i} 
              ref={(el) => { itemRefs.current[i] = el; }}
              data-index={i}
              className="h-[30vh] md:h-[40vh] flex items-center w-full"
            >
              <div 
                className="flex items-center gap-6 md:gap-10 w-full cursor-pointer"
                onClick={() => {
                  itemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <span className={`text-[9px] md:text-[10px] tracking-widest transition-opacity duration-500 uppercase ${activeIndex === i ? 'text-white/50' : 'text-white/10 hidden md:inline-block'}`}>
                  NO — 0{i + 1}
                </span>
                <h2 
                  className={`text-4xl md:text-5xl lg:text-7xl font-sans tracking-tight transition-all duration-500 leading-tight
                    ${activeIndex === i 
                      ? 'text-white scale-[1.02] opacity-100 font-medium' 
                      : 'text-white/20 scale-100 opacity-50 font-normal hover:text-white/40'
                    }`}
                >
                  {ministry.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
