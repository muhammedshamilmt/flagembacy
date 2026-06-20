"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "[Full Name]",
    title: "Senior Pastor",
    bio: "Visionary leader and Bible teacher. Founded Flag Embassy with a passion for kingdom culture and discipleship.",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "[Full Name]",
    title: "Associate Pastor",
    bio: "Dedicated to pastoral care and walking with the community through every season of life.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "[Full Name]",
    title: "Worship Leader",
    bio: "Passionate about leading people into God's presence through authentic, Spirit-led worship.",
    image: "https://images.unsplash.com/photo-1516195633401-460d3d5f3089?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "[Full Name]",
    title: "Kids Pastor",
    bio: "Dedicated to raising the next generation in the love, joy, and knowledge of Christ.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "[Full Name]",
    title: "Youth Pastor",
    bio: "Called to walk with teenagers and equip them to carry the kingdom into their schools.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "[Full Name]",
    title: "Admin & Operations",
    bio: "Keeps the church running with excellence and a servant heart behind the scenes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  }
];

export default function LeadershipTeam() {
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
    <section className="w-full bg-background text-foreground py-24 md:py-32 border-t border-foreground/10 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/60 mb-4 block">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-season-mix tracking-tight">
              Meet the Team
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
              Our leaders are servants first — committed to your growth, your family, and the mission of God in this city and beyond.
            </p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {team.map((person, i) => (
            <motion.div key={i} variants={item} className="group cursor-pointer">
              <div className="w-full aspect-[4/5] overflow-hidden bg-foreground/5 mb-6 relative">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-season-mix mb-1 group-hover:text-foreground/80 transition-colors">
                  {person.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.15em] font-semibold text-foreground/50 mb-4">
                  {person.title}
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
