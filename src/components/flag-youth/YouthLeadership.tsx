"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "Step 1",
    title: "Connect",
    desc: "Join a gathering, meet the team, find your friend group."
  },
  {
    step: "Step 2",
    title: "Grow",
    desc: "Join a discipleship cell. Go deeper in the Word and in relationship."
  },
  {
    step: "Step 3",
    title: "Serve",
    desc: "Join a serve team. Worship, media, hospitality, or outreach."
  },
  {
    step: "Step 4",
    title: "Lead",
    desc: "Become a cell leader or intern. Mentor others as you were mentored."
  }
];

export default function YouthLeadership() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="w-full bg-black text-white py-24 md:py-32 font-sans border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left Side: Context */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/3 flex flex-col"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#60A5FA] mb-4">
            Leadership Track
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold uppercase tracking-tight leading-[1.05] mb-8">
            We Raise Leaders,<br />
            <span className="text-white/40">Not Just Attendees</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Every young person in Flag Youth has the opportunity to grow from newcomer to serving leader through our structured development track. We believe the youth are not just the church of tomorrow — they are the church of today.
          </p>
        </motion.div>

        {/* Right Side: Timeline Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-[#111] border border-white/10 p-8 flex flex-col justify-between"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-[#60A5FA] mb-6">
                {step.step}
              </div>
              <h3 className="text-3xl font-oswald uppercase tracking-wide font-semibold mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
