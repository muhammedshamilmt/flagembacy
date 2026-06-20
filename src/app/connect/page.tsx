"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function ConnectPage() {
  return (
    <main className="flex w-full flex-col items-center bg-black min-h-screen text-white font-sans overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-1/2 h-1/2 bg-[#A5B4FC]/[0.02] blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Section 01: Connect Hero */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tighter leading-[0.85] mb-8">
            YOU DON'T HAVE TO <br/>
            <span className="text-[#A5B4FC] italic font-petit-formal-script lowercase tracking-normal text-4xl md:text-6xl lg:text-7xl relative -top-2">figure this out alone.</span>
          </h1>
          <p className="text-sm md:text-base text-white/60 tracking-wide max-w-xl leading-relaxed">
            Whether you are brand new to church, returning after time away, or looking to go deeper in your walk — there is a place for you at Flag Embassy. Let's connect.
          </p>
        </motion.div>
      </section>

      {/* Section 02: New Here? — First Steps */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-oswald uppercase tracking-tight mb-4">NEW TO FLAG EMBASSY?</h2>
          <p className="text-sm text-white/60 max-w-2xl mx-auto">
            We know walking into a new church can feel daunting. Here is exactly what to expect and how to find your feet with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Step 1 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 border border-white/10 bg-white/[0.02]">
            <h3 className="text-xl font-oswald uppercase tracking-wide mb-4 text-[#A5B4FC]">STEP 1 — COME</h3>
            <p className="text-sm text-white/60 leading-relaxed">Come to a Sunday service. Be yourself. No dress code, no pressure, no expectations. Just come.</p>
          </motion.div>
          {/* Step 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8 border border-white/10 bg-white/[0.02]">
            <h3 className="text-xl font-oswald uppercase tracking-wide mb-4 text-[#A5B4FC]">STEP 2 — CONNECT</h3>
            <p className="text-sm text-white/60 leading-relaxed">After the service, visit our Welcome Table where our team will meet you, answer questions, and give you a gift pack.</p>
          </motion.div>
          {/* Step 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="p-8 border border-white/10 bg-white/[0.02]">
            <h3 className="text-xl font-oswald uppercase tracking-wide mb-4 text-[#A5B4FC]">STEP 3 — FOUNDATIONS</h3>
            <p className="text-sm text-white/60 leading-relaxed">Join our free Foundations Course — 4 sessions covering who we are, what we believe, and how to plug in.</p>
          </motion.div>
          {/* Step 4 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="p-8 border border-white/10 bg-white/[0.02]">
            <h3 className="text-xl font-oswald uppercase tracking-wide mb-4 text-[#A5B4FC]">STEP 4 — BELONG</h3>
            <p className="text-sm text-white/60 leading-relaxed">Join a Connect Group, a serve team, or a ministry and begin building friendships that will last a lifetime.</p>
          </motion.div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-colors">
            PLAN MY VISIT
          </button>
          <button className="px-8 py-4 border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
            REGISTER FOR FOUNDATIONS
          </button>
        </div>
      </section>

      {/* Section 03: Connect Groups */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32 p-12 md:p-20 border border-white/10 bg-white/[0.02] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#A5B4FC]/10 blur-[100px] pointer-events-none"></div>
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-oswald uppercase tracking-tight mb-4">FIND YOUR CONNECT GROUP</h2>
            <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-lg">
              Connect Groups are the heartbeat of Flag Embassy. Small groups of 8–15 people meeting weekly in homes across the city for Bible study, prayer, and real life together. There is a group near you.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Young Adults', 'Families', "Women's Group", "Men's Group", 'Seniors', 'Mixed', 'Online'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] tracking-widest uppercase text-white/70">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#A5B4FC] text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">
                BROWSE ALL GROUPS
              </button>
              <button className="px-6 py-3 border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
                START A GROUP
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full aspect-video bg-black/50 border border-white/10 flex items-center justify-center p-8">
            <div className="text-center">
               <span className="text-4xl mb-4 block">🗺️</span>
               <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">INTERACTIVE MAP COMING SOON</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Volunteer / Serve Teams */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-oswald uppercase tracking-tight mb-4">USE YOUR GIFT. SERVE THE HOUSE.</h2>
          <p className="text-sm text-white/60 max-w-3xl mx-auto leading-relaxed">
            There are no passengers at Flag Embassy. Everyone is called to serve, and there is a team that fits your gift, your schedule, and your passion. Our serving teams are families — not rosters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Serve Team Cards */}
          <div className="p-8 border border-white/10 bg-white/[0.02] flex items-start gap-6 hover:border-[#A5B4FC]/50 transition-colors">
            <div className="text-3xl">🎵</div>
            <div>
              <h3 className="text-lg font-oswald uppercase tracking-wide mb-2">Worship Team</h3>
              <p className="text-xs text-white/60">Musicians, vocalists, sound & AV techs. Audition required.</p>
            </div>
          </div>
          <div className="p-8 border border-white/10 bg-white/[0.02] flex items-start gap-6 hover:border-[#A5B4FC]/50 transition-colors">
            <div className="text-3xl">🎥</div>
            <div>
              <h3 className="text-lg font-oswald uppercase tracking-wide mb-2">Media & Tech</h3>
              <p className="text-xs text-white/60">Cameras, live stream, graphic design, social media.</p>
            </div>
          </div>
          <div className="p-8 border border-white/10 bg-white/[0.02] flex items-start gap-6 hover:border-[#A5B4FC]/50 transition-colors">
            <div className="text-3xl">🤝</div>
            <div>
              <h3 className="text-lg font-oswald uppercase tracking-wide mb-2">Hospitality</h3>
              <p className="text-xs text-white/60">Welcome team, ushers, refreshments. The first face people see.</p>
            </div>
          </div>
          <div className="p-8 border border-white/10 bg-white/[0.02] flex items-start gap-6 hover:border-[#A5B4FC]/50 transition-colors">
            <div className="text-3xl">🧒</div>
            <div>
              <h3 className="text-lg font-oswald uppercase tracking-wide mb-2">Flag Kids</h3>
              <p className="text-xs text-white/60">Teachers, helpers, and creatives serving our youngest members.</p>
            </div>
          </div>
          <div className="p-8 border border-white/10 bg-white/[0.02] flex items-start gap-6 hover:border-[#A5B4FC]/50 transition-colors">
            <div className="text-3xl">🔥</div>
            <div>
              <h3 className="text-lg font-oswald uppercase tracking-wide mb-2">Flag Youth</h3>
              <p className="text-xs text-white/60">Leaders, mentors, and assistants for the next generation.</p>
            </div>
          </div>
          <div className="p-8 border border-white/10 bg-white/[0.02] flex items-start gap-6 hover:border-[#A5B4FC]/50 transition-colors">
            <div className="text-3xl">🌍</div>
            <div>
              <h3 className="text-lg font-oswald uppercase tracking-wide mb-2">Outreach</h3>
              <p className="text-xs text-white/60">Street evangelism, community projects, and missions trips.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-4 bg-white text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-colors">
            JOIN A SERVE TEAM
          </button>
        </div>
      </section>

      {/* Section 05: Contact Form & Info */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 border-t border-white/10 pt-20">
        
        {/* Left Column: Form */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-oswald uppercase tracking-tight mb-8">GET IN TOUCH</h2>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/60">FULL NAME</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="Enter full name" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/60">EMAIL ADDRESS</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="Enter email" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/60">PHONE (OPTIONAL)</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="Enter phone number" />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-[10px] uppercase tracking-widest text-white/60 mb-2">I'M INTERESTED IN:</label>
              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#A5B4FC]" /> Visiting</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#A5B4FC]" /> Connect Group</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#A5B4FC]" /> Serving</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#A5B4FC]" /> Prayer</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#A5B4FC]" /> Other</label>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="text-[10px] uppercase tracking-widest text-white/60">HOW CAN WE HELP?</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white/40 transition-colors resize-none" placeholder="Your message..."></textarea>
            </div>

            <button type="submit" className="mt-4 px-8 py-4 bg-white text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-colors self-start">
              SEND MESSAGE
            </button>
          </form>
        </motion.div>

        {/* Right Column: Contact Details */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-10 lg:pt-20">
          
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest uppercase text-white/50 mb-2">CHURCH ADDRESS</span>
            <span className="text-lg text-white leading-relaxed">
              123 Kingdom Avenue<br />
              London, W1A 1AA
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest uppercase text-white/50 mb-2">PHONE</span>
            <span className="text-lg text-white">+44 (0) 20 7123 4567</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest uppercase text-white/50 mb-2">EMAIL</span>
            <span className="text-lg text-[#A5B4FC]">info@flagembassy.com</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest uppercase text-white/50 mb-2">OFFICE HOURS</span>
            <span className="text-base text-white/80 leading-relaxed font-mono">
              Mon–Fri: 9:00 AM – 5:00 PM<br />
              Sundays: Open from 8:00 AM
            </span>
          </div>

        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
