"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function FlagWomenPage() {
  return (
    <main className="flex w-full flex-col items-center bg-black min-h-screen text-white font-sans overflow-hidden pt-20">
      
      {/* Background Ambience - Warm Gold Tones */}
      <div className="fixed top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-[#C9A84C]/[0.08] to-transparent pointer-events-none -z-10"></div>
      <div className="fixed top-1/4 right-0 w-1/2 h-1/2 bg-[#C9A84C]/[0.03] blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Section 01: Hero */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-8 font-semibold block">
            WOMEN'S MINISTRY
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-oswald uppercase tracking-tighter leading-[0.85] mb-8">
            SHE IS CLOTHED<br/>
            <span className="text-white/40 italic font-petit-formal-script lowercase tracking-normal text-5xl md:text-7xl lg:text-8xl relative -top-4 md:-top-8">in strength & dignity</span>
          </h1>
          <p className="text-sm md:text-base text-white/70 tracking-wide max-w-2xl mx-auto leading-relaxed">
            Flag Women is a community of women who are discovering, owning, and walking boldly in everything God has called them to be. You are not too broken, too quiet, or too much. You are exactly who God wants in this room.
          </p>
        </motion.div>
      </section>

      {/* Section 02: What We Offer */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-oswald uppercase tracking-tight">WHAT WE OFFER</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "☕", title: "Monthly Brunch", desc: "First Saturday of every month. A relaxed gathering for connection, teaching, and real conversation over food." },
            { icon: "📖", title: "Bible Study", desc: "Weekly women's Bible study — deep, practical, and life-giving. Daytime and evening options available." },
            { icon: "🌸", title: "Annual Conference", desc: "Our flagship event — a full day (or weekend) of worship, teaching, prayer, and encounter. Not to be missed." },
            { icon: "🤝", title: "Mentorship", desc: "Connecting younger women with seasoned leaders for one-on-one investment, prayer, and life guidance." },
            { icon: "💪", title: "Leadership Development", desc: "Courses and coaching for women stepping into leadership in ministry, business, or the home." },
            { icon: "❤️", title: "Support & Healing", desc: "A safe space for women walking through grief, trauma, abuse recovery, or life transitions." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 border border-white/10 bg-white/[0.02] hover:border-[#C9A84C]/50 transition-colors flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-[#C9A84C]/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-oswald uppercase tracking-wide mb-3">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 03: Get Involved */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 border border-[#C9A84C]/30 bg-gradient-to-br from-[#C9A84C]/10 to-transparent flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/20 blur-[100px] pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl font-oswald uppercase tracking-tight mb-6 text-[#C9A84C]">GET INVOLVED</h2>
          
          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-3xl mb-10">
            There is no perfect woman required here — only a willing heart. Whether you come alone, with a friend, or as part of a family, you are welcome. Come as you are. Leave as who you were always meant to be.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button className="px-8 py-4 bg-[#C9A84C] text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">
              JOIN FLAG WOMEN
            </button>
            <button className="px-8 py-4 border border-[#C9A84C] text-[#C9A84C] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#C9A84C] hover:text-black transition-colors">
              UPCOMING EVENTS
            </button>
          </div>

          <div className="pt-8 border-t border-[#C9A84C]/20 flex flex-col gap-2 w-full max-w-lg mx-auto">
            <span className="text-[10px] tracking-widest uppercase text-[#C9A84C]">CONTACT US</span>
            <p className="text-sm tracking-wide">
              Women's Leader: Sarah Jane<br/>
              <span className="text-white/60">women@flagembassy.com · +44 (0) 20 7123 4567</span>
            </p>
          </div>

        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
