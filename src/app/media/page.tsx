"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const seriesData = [
  {
    title: "VISION 2024",
    date: "JANUARY 2024",
    speaker: "PASTOR FIRSTNAME",
    episodes: 4,
    desc: "A prophetic look at where God is taking our church this year.",
  },
  {
    title: "THE CALLING & THE COST",
    date: "NOVEMBER 2023",
    speaker: "PASTOR FIRSTNAME",
    episodes: 6,
    desc: "Understanding what it truly means to pick up your cross.",
  },
  {
    title: "KINGDOM DYNAMICS",
    date: "SEPTEMBER 2023",
    speaker: "PASTOR FIRSTNAME",
    episodes: 8,
    desc: "Principles for living an empowered life in the Holy Spirit.",
  },
  {
    title: "FAITH UNFILTERED",
    date: "JULY 2023",
    speaker: "GUEST SPEAKER",
    episodes: 5,
    desc: "Real questions, real answers, and a raw look at scripture.",
  },
];

export default function MediaPage() {
  return (
    <main className="flex w-full flex-col items-center bg-black min-h-screen text-white font-sans overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none -z-10"></div>
      <div className="fixed top-1/4 right-0 w-1/3 h-1/2 bg-[#A5B4FC]/[0.03] blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Section 01: Media Hero + Featured Sermon */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-16"
        >
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 mb-6 font-semibold block">
            WATCH · LISTEN · DOWNLOAD
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tighter leading-[0.85] mb-6">
            THE WORD, <span className="text-[#A5B4FC] italic font-petit-formal-script lowercase tracking-normal text-4xl md:text-6xl lg:text-7xl relative -top-2">wherever you are</span>
          </h1>
          <p className="text-sm md:text-base text-white/60 tracking-wide max-w-xl mx-auto leading-relaxed">
            Miss a Sunday? Want to go deeper? Our library of sermons, series, and teachings is available free — anytime, anywhere.
          </p>
        </motion.div>

        {/* Featured Video (Large format above fold) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video bg-white/5 relative group cursor-pointer border border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/assets/herocard.png')] bg-cover bg-center contrast-125 opacity-70 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:border-white transition-all duration-500 bg-black/20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-2 group-hover:fill-white transition-colors">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 p-8 z-10 text-left">
             <span className="text-[10px] tracking-widest uppercase text-white/50 mb-2 block">LATEST MESSAGE</span>
             <h2 className="text-3xl md:text-4xl font-oswald uppercase tracking-tight">THE SOUND OF AWAKENING</h2>
          </div>
        </motion.div>
      </section>

      {/* Section 02: Sermon Series Grid */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32">
        <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-8">
          <h3 className="text-3xl md:text-4xl font-oswald uppercase tracking-tight">SERIES ARCHIVE</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seriesData.map((series, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col bg-white/[0.02] border border-white/10 p-6 hover:border-white/30 transition-colors cursor-pointer"
            >
              <div className="aspect-video w-full bg-white/10 mb-6 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('/assets/herocard.png')] bg-cover bg-center contrast-125 opacity-50 mix-blend-luminosity group-hover:scale-110 transition-transform duration-700"></div>
                 <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md px-2 py-1 text-[9px] tracking-widest uppercase border border-white/10">
                   {series.episodes} MSGS
                 </div>
              </div>
              <h4 className="text-xl font-oswald uppercase tracking-tight mb-2 group-hover:text-[#A5B4FC] transition-colors">{series.title}</h4>
              <p className="text-[10px] tracking-widest text-white/50 uppercase mb-4">
                {series.speaker} · {series.date}
              </p>
              <p className="text-sm text-white/70 leading-relaxed flex-grow">
                {series.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 03 & 04: Podcast & Live Stream */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Section 03: Podcast / Audio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 border border-white/10 bg-white/[0.02] flex flex-col"
        >
          <div className="text-4xl mb-6">🎧</div>
          <h3 className="text-3xl font-oswald uppercase tracking-tight mb-4">LISTEN ON THE GO</h3>
          <p className="text-sm text-white/70 leading-relaxed mb-8 max-w-md">
            The Flag Embassy Podcast brings the teaching ministry of our church straight to your commute, gym, or kitchen. Subscribe and never miss a message.
          </p>
          <div className="flex flex-wrap gap-4 mt-auto">
            <span className="px-4 py-2 border border-white/20 text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">Spotify</span>
            <span className="px-4 py-2 border border-white/20 text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">Apple Podcasts</span>
            <span className="px-4 py-2 border border-white/20 text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">Google Podcasts</span>
            <span className="px-4 py-2 border border-white/20 text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">RSS Feed</span>
          </div>
        </motion.div>

        {/* Section 04: Live Stream Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-10 border border-white/10 bg-white/[0.02] flex flex-col relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-600/10 blur-[80px] pointer-events-none"></div>
          <div className="text-4xl mb-6">🔴</div>
          <h3 className="text-3xl font-oswald uppercase tracking-tight mb-4">WATCH LIVE EVERY SUNDAY</h3>
          <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-md">
            Can't make it in person? Join us online. We stream our Sunday services live on YouTube and Facebook. Services begin at 9:00 AM and 11:30 AM.
          </p>
          <div className="flex gap-4 mb-8">
            <span className="text-[10px] tracking-widest uppercase text-white/50">YouTube Live</span>
            <span className="text-[10px] tracking-widest uppercase text-white/50">Facebook Live</span>
          </div>
          <div className="flex flex-wrap gap-4 mt-auto">
            <button className="px-6 py-3 bg-red-600 text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-red-700 transition-colors">
              WATCH LIVE
            </button>
            <button className="px-6 py-3 border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
              SUBSCRIBE ON YOUTUBE
            </button>
          </div>
        </motion.div>

      </section>

      <Footer />
    </main>
  );
}
