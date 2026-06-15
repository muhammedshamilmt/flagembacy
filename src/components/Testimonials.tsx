"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Finding this community has been the most transformative experience of my life. I walked in broken and found a family that loved me back to life.",
    name: "SARAH JENKINS",
    role: "MEMBER SINCE 2021",
    colSpan: "md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[600px]",
    textSize: "text-2xl md:text-5xl",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    quote: "The worship here doesn't just sound good, it shifts atmospheres.",
    name: "MARCUS CHEN",
    role: "WORSHIP TEAM",
    colSpan: "md:col-span-1 md:row-span-1 min-h-[300px]",
    textSize: "text-xl md:text-2xl",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    quote: "A true embassy of heaven. The teaching is uncompromising.",
    name: "DAVID MILLER",
    role: "ELDER",
    colSpan: "md:col-span-1 md:row-span-1 min-h-[300px]",
    textSize: "text-xl md:text-2xl",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32 font-sans border-t border-white/10 relative overflow-hidden">

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03] select-none">
        <span className="text-[400px] leading-none font-serif">&rdquo;</span>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 mb-4 font-semibold">
              REAL STORIES
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tighter leading-[0.9]">
              STORIES OF <br />
              <span className="text-white/40">TRANSFORMATION</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Don't just take our word for it. Hear from the people whose lives have been forever changed by the presence of God in this house.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[1fr] gap-4 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative overflow-hidden group flex flex-col justify-between gap-12 ${testimonial.colSpan}`}
            >
              {/* Persona Background Image */}
              <div
                className="absolute inset-0 bg-cover object-top bg-center grayscale contrast-125 mix-blend-luminosity group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
                style={{ backgroundImage: `url('${testimonial.image}')` }}
              ></div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 pointer-events-none"></div>

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12">
                <div className="absolute top-8 left-8 text-white/20 font-serif text-6xl leading-none group-hover:text-[#f0c265]/40 transition-colors duration-500">
                  &ldquo;
                </div>

                <h3 className={`${testimonial.textSize} font-oswald tracking-tight uppercase leading-[1.2] mt-12 text-white/90`}>
                  "{testimonial.quote}"
                </h3>

                <div className="flex flex-col gap-1 mt-8 pt-6 border-t border-white/20">
                  <span className="text-sm tracking-widest uppercase font-medium text-white">{testimonial.name}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#f0c265]">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
