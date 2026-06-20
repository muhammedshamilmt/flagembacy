"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    title: "The Bible",
    desc: "We believe the Holy Bible is the inspired, infallible Word of God and the supreme authority for all of life and godliness."
  },
  {
    title: "The Trinity",
    desc: "We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit — co-equal and co-eternal."
  },
  {
    title: "Salvation",
    desc: "We believe salvation is by grace alone, through faith alone, in Christ alone — available to every person who calls on His name."
  },
  {
    title: "The Holy Spirit",
    desc: "We believe in the present-day ministry of the Holy Spirit including the gifts of the Spirit available to every believer."
  },
  {
    title: "The Church",
    desc: "We believe the local church is God's primary vehicle for discipleship, community, and the advancement of His kingdom on earth."
  },
  {
    title: "Return of Christ",
    desc: "We believe in the literal, bodily return of Jesus Christ and live in expectation of that day, working until He comes."
  }
];

export default function CoreBeliefs() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="w-full bg-black text-white py-24 md:py-32 font-sans border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-white/50 mb-4"
          >
            What We Believe
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-season-mix tracking-tight"
          >
            Our Core Beliefs
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {beliefs.map((belief, i) => (
            <motion.div
              key={i}
              variants={item}
              className="p-8 md:p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 flex flex-col group relative overflow-hidden"
            >
              {/* Number decoration */}
              <div className="absolute -top-4 -right-2 text-[100px] font-bold font-oswald text-white/5 group-hover:text-white/10 transition-colors select-none pointer-events-none">
                0{i + 1}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-oswald uppercase tracking-wide mb-4 text-white/90">
                  {belief.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {belief.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
