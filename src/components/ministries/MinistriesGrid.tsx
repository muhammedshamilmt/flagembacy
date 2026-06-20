"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ministries = [
  {
    title: "Flag Kids",
    desc: "Ages 0–12. A safe, creative, and Spirit-filled environment where children discover God's love and build lifelong faith.",
    linkText: "Learn More",
    href: "/ministries/flag-kids",
    emoji: "🧒"
  },
  {
    title: "Flag Youth",
    desc: "Ages 13–19. A movement for the next generation — bold in faith, relevant in culture, and rooted in purpose.",
    linkText: "Learn More",
    href: "/ministries/flag-youth",
    emoji: "🔥"
  },
  {
    title: "Flag Women",
    desc: "Empowering women to walk in identity, calling, and sisterhood through community, teaching, and encounter.",
    linkText: "Learn More",
    href: "/ministries/flag-women",
    emoji: "👑"
  },
  {
    title: "Flag Men",
    desc: "A brotherhood of men committed to integrity, fatherhood, and the courageous pursuit of God's purpose.",
    linkText: "Learn More",
    href: "#",
    emoji: "⚔️"
  },
  {
    title: "Flag Couples",
    desc: "Building strong, covenant marriages and healthy family foundations through mentorship and community.",
    linkText: "Learn More",
    href: "#",
    emoji: "💍"
  },
  {
    title: "Missions",
    desc: "From our city to the nations — we are a sending church. Join us in taking the gospel beyond our walls.",
    linkText: "Learn More",
    href: "#",
    emoji: "🌐"
  },
  {
    title: "Worship Team",
    desc: "Serving through music, arts, and creative expression. Auditions and training available for new members.",
    linkText: "Learn More",
    href: "#",
    emoji: "🎵"
  },
  {
    title: "Care & Pastoral",
    desc: "Walking with people through grief, crisis, and transition. No one walks alone in this house.",
    linkText: "Learn More",
    href: "#",
    emoji: "🤝"
  },
  {
    title: "Connect Groups",
    desc: "Small groups meeting weekly across the city for fellowship, study, and prayer.",
    linkText: "Find a Group",
    href: "/connect",
    emoji: "🏘️"
  }
];

export default function MinistriesGrid() {
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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {ministries.map((ministry, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative flex flex-col justify-between p-8 md:p-10 border border-foreground/10 bg-foreground/5 hover:bg-foreground hover:text-background transition-colors duration-500 overflow-hidden min-h-[350px]"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                {ministry.emoji}
              </div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl md:text-3xl font-season-mix font-bold tracking-tight mb-4">
                  {ministry.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed opacity-70 mb-8">
                  {ministry.desc}
                </p>
              </div>
              <div className="relative z-10 mt-auto">
                <Link
                  href={ministry.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest group-hover:text-background transition-colors"
                >
                  {ministry.linkText}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
