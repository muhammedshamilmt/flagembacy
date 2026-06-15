"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "THE WORD",
    num: "01",
    desc: "Everything we do is rooted in the truth of Scripture — relevant, alive, and transformational for today's world."
  },
  {
    title: "ENCOUNTER",
    num: "02",
    desc: "We create space for genuine, tangible encounters with the Holy Spirit — week after week, in every service."
  },
  {
    title: "COMMUNITY",
    num: "03",
    desc: "No one walks alone here. We are a family — diverse, united, and committed to one another through every season."
  }
];

export default function QuickPillars() {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32 font-sans border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 mb-4 font-semibold"
            >
              OUR FOUNDATION
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tighter leading-[0.9]"
            >
              BUILT ON THREE <br /> <span className="text-white/40">PILLARS</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm"
          >
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              These are the core convictions that drive everything we do at Flag Embassy. They are the heartbeat of our house.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="relative flex flex-col justify-between p-8 md:p-12 bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors duration-500 overflow-hidden min-h-[350px] md:min-h-[450px]"
            >
              {/* Giant Background Number */}
              <div className="absolute -top-10 -right-4 text-[200px] leading-none font-oswald font-bold text-white/5 group-hover:text-[#f0c265]/10 transition-colors duration-500 pointer-events-none select-none">
                {pillar.num}
              </div>

              <div className="relative z-10 mt-auto">
                <div className="w-12 h-px bg-[#f0c265] mb-8"></div>
                <h3 className="text-3xl md:text-4xl font-oswald uppercase tracking-tight mb-4 text-white/90">
                  {pillar.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
