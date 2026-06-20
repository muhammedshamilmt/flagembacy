"use client";

import { motion } from "framer-motion";

const schedule = [
  {
    title: "Sunday Service",
    desc: "Youth sit with their families for the main service and are welcomed and celebrated as full members of the church."
  },
  {
    title: "Wednesday Night Live",
    desc: "Every Wednesday 7:00 PM — the main Flag Youth gathering. Worship, Word, and community. The place to be."
  },
  {
    title: "Discipleship Cells",
    desc: "Small groups of 4–8 teens meeting weekly for deeper Bible study, accountability, and life conversations."
  },
  {
    title: "Events & Retreats",
    desc: "Annual camp, monthly outings, and seasonal missions trips that build faith and forges lifelong friendships."
  }
];

export default function YouthSchedule() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 md:py-32 font-sans border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-tight"
          >
            Weekly Schedule
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {schedule.map((event, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-black border border-white/10 p-8 hover:bg-white/5 transition-colors duration-300 group"
            >
              <div className="w-10 h-1 bg-[#3B82F6] mb-6 group-hover:w-20 transition-all duration-500"></div>
              <h3 className="text-2xl font-oswald uppercase tracking-wide mb-4 font-semibold text-white/90">
                {event.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {event.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
