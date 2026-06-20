"use client";

import { motion } from "framer-motion";

const ageGroups = [
  {
    icon: "🍼",
    title: "Nursery",
    age: "Ages 0–2",
    desc: "Loving, calm care for babies and toddlers while parents enjoy the service. Fully staffed and warm."
  },
  {
    icon: "🌱",
    title: "Seedlings",
    age: "Ages 3–5",
    desc: "Pre-school level teaching with songs, crafts, and simple Bible lessons about God's love."
  },
  {
    icon: "🌟",
    title: "Champions",
    age: "Ages 6–12",
    desc: "Dynamic and energetic sessions building a solid biblical foundation and raising up young leaders."
  }
];

export default function KidsAgeGroups() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="w-full bg-black text-white py-24 md:py-32 font-sans border-t border-white/10 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f0c265]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f0c265] mb-4"
          >
            Age Groups
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-season-mix tracking-tight"
          >
            A Place for Every Child
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {ageGroups.map((group, i) => (
            <motion.div
              key={i}
              variants={item}
              className="p-8 md:p-12 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 flex flex-col group relative overflow-hidden"
            >
              <div className="text-5xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-500 origin-left transform group-hover:scale-110">
                {group.icon}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-3xl font-oswald uppercase tracking-wide text-white/90">
                    {group.title}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.1em] font-semibold text-[#f0c265] border border-[#f0c265]/30 px-2 py-1 rounded-sm">
                    {group.age}
                  </span>
                </div>
                <div className="w-12 h-px bg-white/20 mb-6 group-hover:w-24 group-hover:bg-[#f0c265] transition-all duration-500"></div>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {group.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
