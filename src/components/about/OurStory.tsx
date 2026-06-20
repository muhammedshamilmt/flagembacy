"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="w-full bg-background text-foreground py-24 md:py-32 overflow-hidden border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Left: Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <motion.div variants={item} className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-foreground/30"></div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/60">Our Story</span>
          </motion.div>

          <motion.h2 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold font-season-mix tracking-tight mb-10 leading-[1.1]">
            How Flag Embassy Began
          </motion.h2>

          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed font-sans">
            <motion.p variants={item}>
              Flag Embassy was founded with a simple but profound conviction: that God was raising up a people who would represent His kingdom with boldness, love, and authority. What started as a small gathering has grown into a thriving community that spans generations and backgrounds.
            </motion.p>

            <motion.p variants={item}>
              Our name says it all. Just as an embassy is a piece of one nation's territory planted in another country, Flag Embassy is a piece of heaven's territory planted in the earth. We don't just attend — we represent. We carry the King's colours wherever we go: in our workplaces, our homes, and our communities.
            </motion.p>

            <motion.p variants={item}>
              Today we are a multi-generational, multi-cultural family committed to the local church, global missions, and the discipleship of every man, woman, and child in our care.
            </motion.p>
          </div>
        </motion.div>

        {/* Right: Image Collage/Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative flex justify-center items-center"
        >
          {/* Main historic photo placeholder */}
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden bg-foreground/5 p-4 border border-foreground/10">
            <img
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1200&auto=format&fit=crop"
              alt="Historical Church Gathering"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-foreground/30"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-foreground/30"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-foreground/30"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-foreground/30"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
