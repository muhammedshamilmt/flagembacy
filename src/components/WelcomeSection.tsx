"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WelcomeSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section className="w-full py-12 md:py-20 bg-background overflow-hidden relative border-t border-foreground/10">
      {/* Subtle glow behind the section */}
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-foreground/5 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none"></div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col items-center text-center relative z-10">

        {/* Content Layout */}
        <div className="w-full mt-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Text Side */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col justify-center text-left py-4 md:py-12"
          >
            <motion.h2 variants={item} className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-season-mix leading-[1.05]">
              You Were Born for<br />More Than You Know
            </motion.h2>

            <motion.p variants={item} className="text-xl md:text-[26px] leading-[1.5] text-foreground/70 font-season-mix mb-10 max-w-2xl">
              "At Flag Embassy, we believe every person carries a divine assignment. This is more than a church — it is an embassy of God's kingdom on earth."
            </motion.p>

            <motion.div variants={item} className="mb-10">
              <h4 className="text-3xl font-petit text-foreground/90 mb-2">— Pastor Firstname Lastname</h4>
              <p className="text-foreground/50 text-xs uppercase tracking-widest font-season-sans">Lead Pastor</p>
            </motion.div>

            <motion.div variants={item}>
              <Link href="/about" className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-foreground/20 bg-transparent px-8 text-sm uppercase tracking-widest text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background font-season-mix">
                Meet Our Leaders
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            {/* Background decorative letter */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden text-foreground">
              <span className="text-[300px] md:text-[500px] font-bold leading-none -mt-20 tracking-tighter font-oswald">P</span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[420px] aspect-square rounded-3xl md:rounded-none md:aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-foreground/10 bg-foreground/5"
            >
              <img
                src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=800&auto=format&fit=crop"
                alt="Pastor"
                className="w-full h-full object-cover object-top mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                style={{
                  maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)"
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
