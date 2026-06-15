"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
  </svg>
);

const TvIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
    <rect width="20" height="15" x="2" y="4" rx="2" ry="2" />
    <polyline points="10 9 15 11.5 10 14 10 9" />
    <path d="M8 21h8" /><path d="M12 19v2" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
  </svg>
);

const pillars = [
  {
    icon: <BuildingIcon />,
    title: "Physical Campus",
    desc: "Worship with us in person at one of our physical campuses.",
    linkText: "Find a location",
    href: "#",
  },
  {
    icon: <TvIcon />,
    title: "Live Streams",
    desc: "eFam is our online community who stream church from wherever they are.",
    linkText: "Find a time",
    href: "#",
  },
  {
    icon: <UsersIcon />,
    title: "Watch Party",
    desc: "Watch Parties are groups of eFam that stream the worship experience together.",
    linkText: "Find a watch party",
    href: "#",
  },
  {
    icon: <GlobeIcon />,
    title: "Pop-Up",
    desc: "A Pop-Up is where we bring church to different cities across the nation.",
    linkText: "Find a pop-up",
    href: "#",
  }
];

export default function ServiceTimes() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="w-full bg-black text-white py-24 md:py-32 border-t border-white/10 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-season-mix">
            Find the right experience for you.
          </h2>
          <p className="text-lg md:text-xl text-white/70 tracking-wide font-season-mix">
            No matter where you are, online or in person, become a part of all God is doing.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={itemVariant}
              className={`p-8 md:p-10 flex flex-col items-start border-b border-white/10 sm:border-b-0 
                ${idx !== pillars.length - 1 ? 'lg:border-r lg:border-white/10' : ''} 
                ${idx % 2 === 0 ? 'sm:border-r sm:border-white/10' : ''}
              `}
            >
              <div className="mb-6 bg-white/5 p-3 rounded-md border border-white/10">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-10 flex-grow">
                {pillar.desc}
              </p>

              <Link
                href={pillar.href}
                className="text-sm font-semibold tracking-wide flex items-center gap-2 hover:text-white/70 transition-colors group mt-auto"
              >
                {pillar.linkText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-semibold transition-colors"
          >
            View locations
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
