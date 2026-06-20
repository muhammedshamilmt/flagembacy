"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function VisionPage() {
  return (
    <main className="flex w-full flex-col items-center bg-black min-h-screen text-white font-sans overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-1/3 h-1/2 bg-[#A5B4FC]/[0.02] blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Section 01: Vision Statement Hero */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-oswald uppercase tracking-tighter leading-[1.1] mb-10 text-white/90">
            "TO RAISE UP KINGDOM AMBASSADORS WHO CARRY THE CULTURE OF HEAVEN INTO EVERY SPHERE OF SOCIETY."
          </h1>
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#A5B4FC] font-semibold">
            — FLAG EMBASSY CHURCH
          </p>
        </motion.div>
      </section>

      {/* Section 02: Mission Statement */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <span className="text-[10px] tracking-widest uppercase text-white/50 mb-4 block">PURPOSE & CALLING</span>
          <h2 className="text-4xl md:text-6xl font-oswald uppercase tracking-tight text-white mb-6">OUR MISSION</h2>
          <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-white/80">
            "To love God, build community, and change the world — one life, one family, and one city at a time — through the power of the gospel of Jesus Christ."
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <p className="text-base text-white/60 leading-relaxed">
            Everything we do at Flag Embassy is filtered through this mission. Whether it's a Sunday service, a youth gathering, a midweek Bible study, or a community outreach, we ask: does this help us love God more deeply, build one another up more effectively, and impact our city and world more significantly?
          </p>
        </motion.div>
      </section>

      {/* Section 03: Core Values */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/[0.01] blur-[120px] pointer-events-none -z-10 rounded-full"></div>
        
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-widest uppercase text-[#A5B4FC] mb-4 block">CORE VALUES</span>
          <h2 className="text-3xl md:text-5xl font-oswald uppercase tracking-tight">WHAT DRIVES EVERYTHING WE DO</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "👑", title: "01 — Kingdom First", desc: "We exist for God's purposes, not our own. Every decision is made with the kingdom of God as the ultimate frame of reference." },
            { icon: "📖", title: "02 — Word-Centred", desc: "We are a people of the Book. The Scriptures shape our theology, our culture, and our daily lives without compromise." },
            { icon: "🕊️", title: "03 — Spirit-Led", desc: "We depend on the Holy Spirit for everything. We make room for His movement in every gathering and every endeavour." },
            { icon: "❤️", title: "04 — Love Without Borders", desc: "We are called to love as Christ loved — unconditionally, sacrificially, and without preference of person." },
            { icon: "🛡️", title: "05 — Integrity", desc: "We commit to doing what is right in private before we proclaim anything in public. Character is our foundation." },
            { icon: "🚀", title: "06 — Excellence", desc: "We serve the King of kings — therefore we bring our very best to everything we do. Good enough is never enough for God." }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-10 border border-white/10 bg-white/[0.02] hover:border-white/30 transition-colors flex flex-col items-start"
            >
              <div className="text-3xl mb-6">{val.icon}</div>
              <h3 className="text-xl font-oswald uppercase tracking-wide mb-4">{val.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 04: Our Reach & Strategy */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32 pb-20 border-b border-white/10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-oswald uppercase tracking-tight mb-6">LOCAL. NATIONAL. GLOBAL.</h2>
          <p className="text-base text-white/60 leading-relaxed max-w-3xl">
            Our vision operates at three levels simultaneously. We will never neglect the local in the pursuit of the global — but we will never be satisfied with the local alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "🏙️", title: "LOCAL", desc: "Serve our immediate community with tangible acts of compassion, discipleship programmes, and community development." },
            { icon: "🗺️", title: "NATIONAL", desc: "Plant daughter churches, raise up network leaders, and be a resource hub for the body of Christ across the nation." },
            { icon: "🌍", title: "GLOBAL", desc: "Support and send missionaries, fund gospel work in unreached regions, and partner with global kingdom movements." }
          ].map((strat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="p-8 border-l-2 border-[#A5B4FC]/30 pl-8 relative"
            >
              <div className="absolute top-8 -left-[9px] w-4 h-4 bg-black border-2 border-[#A5B4FC] rounded-full"></div>
              <div className="text-2xl mb-4">{strat.icon}</div>
              <h3 className="text-2xl font-oswald uppercase tracking-wide mb-3 text-[#A5B4FC]">{strat.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{strat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
