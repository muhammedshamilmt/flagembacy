"use client";

import { motion } from "framer-motion";

const activities = [
  {
    icon: "🎨",
    title: "Creative Worship",
    desc: "Age-appropriate praise and worship that gets children excited about singing to God and expressing their love creatively."
  },
  {
    icon: "📖",
    title: "Bible Stories",
    desc: "Engaging, interactive teaching from God's Word using drama, visuals, and storytelling that sticks."
  },
  {
    icon: "🎮",
    title: "Games & Activities",
    desc: "Supervised games and group activities that build friendship, confidence, and kingdom character values."
  },
  {
    icon: "🛡️",
    title: "Safe Environment",
    desc: "All Flag Kids leaders are background-checked and trained. Your child's safety is our non-negotiable priority."
  }
];

export default function KidsActivities() {
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
    <section className="w-full bg-background text-foreground py-24 md:py-32 font-sans border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/60 mb-4 block">
              The Experience
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-season-mix tracking-tight">
              What Happens in Flag Kids
            </h2>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              variants={item}
              className="p-8 md:p-10 border border-foreground/10 bg-foreground/5 hover:bg-foreground hover:text-background transition-colors duration-500 group flex flex-col relative overflow-hidden min-h-[280px]"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                {activity.icon}
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-oswald uppercase tracking-wide mb-4 font-semibold">
                  {activity.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-90">
                  {activity.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
