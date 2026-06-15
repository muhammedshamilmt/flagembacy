"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Arrow = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="square"
    className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 text-white/80"
  >
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

export default function OurServices() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="w-full bg-black text-white py-24 font-sans border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16 md:mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12"
        >
          <div className="flex-1">
            <motion.p variants={item} className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/50 mb-6 font-semibold">
              ABOUT US
            </motion.p>
            <motion.h2 variants={item} className="text-6xl md:text-8xl lg:text-9xl font-oswald leading-[0.9] tracking-tight uppercase">
              OUR<br />
              <span className="font-bold">SERVICES</span>
            </motion.h2>
          </div>

          <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-16 text-xs md:text-sm text-white/70 tracking-wider leading-relaxed uppercase pb-2">
            <motion.p variants={item} className="flex-1">
              FLAG EMBASSY IS A SPIRIT-FILLED CHURCH,<br className="hidden md:block" />
              EXEMPLIFIED BY THE QUALITY OF ITS<br className="hidden md:block" />
              WORSHIP AND SENSITIVITY OF ITS<br className="hidden md:block" />
              TEACHING.
            </motion.p>
            <motion.p variants={item} className="flex-1">
              WE SPECIALISE IN INNOVATIVE KINGDOM WORK<br className="hidden md:block" />
              AND COMMUNITY, DISTINGUISHED BY A HIGH DEGREE OF<br className="hidden md:block" />
              AUTHENTICITY AND A HIGH-PERFORMANCE,<br className="hidden md:block" />
              RECOGNISABLE SPIRIT — THE ULTIMATE EXPRESSION<br className="hidden md:block" />
              OF HEAVEN ON EARTH.
            </motion.p>
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-t border-b border-white/20">

          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 flex flex-col border-b lg:border-b-0 lg:border-r border-white/20">

            {/* Left Top Block */}
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="p-6 md:p-10 lg:p-12 border-b border-white/20 flex flex-col justify-between group min-h-[500px]"
            >
              <div className="flex justify-between items-start mb-16">
                <h3 className="text-sm tracking-[0.15em] text-white/50 uppercase font-medium">SUNDAY SERVICE</h3>
                <Arrow />
              </div>

              <div className="w-full max-w-sm mb-12">
                <p className="text-xs text-white/70 leading-[1.8] tracking-widest uppercase">
                  ALL OUR GATHERINGS ARE THE<br />
                  RESULT OF CAREFUL PRAYER. THE<br />
                  CHURCH HAS VARIOUS MINISTRIES IN<br />
                  RECOGNITION OF THE NUMEROUS<br />
                  SPIRITUAL AND PRACTICAL<br />
                  NEEDS MET.
                </p>
              </div>

              <div className="w-full h-64 md:h-80 bg-white/5 rounded-sm overflow-hidden relative border border-white/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 opacity-70 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"></div>
              </div>
            </motion.div>

            {/* Left Bottom Block */}
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col md:flex-row gap-8 lg:gap-12 justify-between group"
            >
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-sm tracking-[0.15em] text-white/50 uppercase mb-16 md:mb-32 font-medium">YOUTH / WORSHIP<br />/ MINISTRY</h3>

                <div>
                  <p className="text-xs text-white/70 leading-[1.8] tracking-widest uppercase mb-6 max-w-[250px]">
                    A SORT OF SPIRITUAL AWAKENING THAT<br />
                    WE DEVELOPED YEARS AGO<br />
                    AFTER EXPLORING THE MODERN NEED<br />
                    FOR AUTHENTICITY.
                  </p>
                  <Arrow />
                </div>
              </div>

              <div className="w-full md:w-1/2 min-h-[250px] bg-white/5 rounded-sm overflow-hidden relative border border-white/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=1887&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 opacity-70 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"></div>
              </div>
            </motion.div>

          </div>

          {/* Right Column (Span 5) */}
          <div className="lg:col-span-5 flex flex-col">

            {/* Right Top Block */}
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              className="p-6 md:p-10 lg:p-12 border-b border-white/20 flex justify-between items-start group relative min-h-[380px]"
            >
              <div className="flex flex-col h-full justify-between z-10 w-full">
                <h3 className="text-sm tracking-[0.15em] text-white/50 uppercase mb-24 font-medium">LEAD PASTOR / VISIONARY</h3>

                <div className="flex justify-between items-end w-full">
                  <p className="text-sm uppercase tracking-widest font-semibold">FIRSTNAME PALMIERI</p>
                  <Arrow />
                </div>
              </div>

              {/* Portrait Image absolute positioned in the middle-right */}
              <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 w-48 lg:w-56 h-64 lg:h-72 bg-white/5 rounded-sm overflow-hidden z-0 border border-white/10 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop')] bg-cover bg-top grayscale contrast-150 opacity-80 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"></div>
              </div>
            </motion.div>

            {/* Right Middle Block */}
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 md:p-10 lg:p-12 border-b border-white/20 flex flex-col justify-between group min-h-[280px]"
            >
              <div className="flex justify-between items-start mb-16">
                <h3 className="text-sm tracking-[0.15em] text-white/50 uppercase font-medium">COMMUNITY</h3>
                <Arrow />
              </div>

              <div className="w-full max-w-sm ml-auto">
                <p className="text-xs text-white/70 leading-[1.8] tracking-widest uppercase">
                  THE CHURCH SUBJECTS ITS MINISTRIES<br />
                  TO RIGOROUS PRAYER IN ORDER<br />
                  TO GUARANTEE EXCELLENT GROWTH<br />
                  AND AVOID COMPROMISE DUE TO THE<br />
                  USE OF IMPROPER FOUNDATIONS.
                </p>
              </div>
            </motion.div>

            {/* Right Bottom Blocks (Split) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 flex-1">

              {/* Bottom Left Small Block */}
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
                className="p-6 md:p-10 border-b sm:border-b-0 border-r-0 sm:border-r border-white/20 flex flex-col group min-h-[280px]"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs tracking-widest text-white/50">01</span>
                  <span className="text-xs tracking-widest text-white/50 uppercase">/ PRAYER</span>
                </div>
                <div className="flex-1 w-full rounded-sm overflow-hidden relative border border-white/10">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605655513233-a1df1641029c?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-150 opacity-70 mix-blend-luminosity group-hover:scale-110 transition-transform duration-1000"></div>
                </div>
              </motion.div>

              {/* Bottom Right Small Block */}
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
                className="p-6 md:p-10 flex flex-col group min-h-[280px]"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs tracking-widest text-white/50">02</span>
                  <span className="text-xs tracking-widest text-white/50 uppercase">/ FELLOWSHIP</span>
                </div>
                <div className="flex-1 w-full rounded-sm overflow-hidden relative border border-white/10">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543884764-a034948aee7a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-150 opacity-70 mix-blend-luminosity group-hover:scale-110 transition-transform duration-1000"></div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
