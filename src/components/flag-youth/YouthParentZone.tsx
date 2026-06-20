"use client";

import { motion } from "framer-motion";

export default function YouthParentZone() {
  return (
    <section className="w-full bg-[#1a1a1a] text-white py-24 md:py-32 font-sans border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black border border-white/10 p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle accent corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/20 blur-[50px] rounded-full mix-blend-screen pointer-events-none"></div>

          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#60A5FA] mb-6 block">
            Parent Zone
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald uppercase font-bold tracking-tight mb-8 text-white">
            A Note to Parents
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            We know that handing your teenager over to any programme requires trust. We take that trust seriously. All our youth leaders are DBS/background-checked, trained in safeguarding, and deeply committed to your child's wellbeing. We partner with you — not replace you — in raising your children in the faith.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12 border-y border-white/10 py-8 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-white/50 uppercase tracking-widest text-[10px] font-bold">Youth Pastor</span>
              <span className="text-white/90">[Firstname Lastname]</span>
              <span className="text-[#60A5FA]">youth@flagembassy.com</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <div className="flex flex-col gap-1">
              <span className="text-white/50 uppercase tracking-widest text-[10px] font-bold">Safeguarding Lead</span>
              <span className="text-white/90">[Firstname Lastname]</span>
              <span className="text-[#60A5FA]">safe@flagembassy.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#60A5FA] text-black font-oswald uppercase tracking-wider font-bold px-8 py-4 hover:bg-white transition-colors">
              Connect Your Teen
            </button>
            <button className="bg-transparent border border-white/20 text-white font-oswald uppercase tracking-wider font-bold px-8 py-4 hover:border-white hover:bg-white/5 transition-colors">
              Safeguarding Policy
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
