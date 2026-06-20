"use client";

import { motion } from "framer-motion";

const networks = [
  "ARC Network",
  "Hillsong Family",
  "Global Kingdom Partners",
  "City Reach",
  "Local Churches Together"
];

export default function Affiliations() {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32 border-t border-white/10 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] font-semibold text-white/50 mb-4"
        >
          Affiliations
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold font-season-mix tracking-tight mb-8"
        >
          Our Wider Family
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-16 text-sm md:text-base"
        >
          Flag Embassy is proudly affiliated with global kingdom networks. We are also in relationship with the following churches and movements who share our vision for kingdom expansion.
        </motion.p>

        {/* Text placeholders since we don't have logos yet */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60"
        >
          {networks.map((network, idx) => (
            <div key={idx} className="text-xl md:text-2xl font-oswald font-bold tracking-widest uppercase hover:text-white transition-colors cursor-default">
              {network}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
