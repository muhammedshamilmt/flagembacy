"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function GivePage() {
  const [activeTab, setActiveTab] = useState("General Fund");

  const givingFunds = [
    { title: "General Fund (Tithe)", icon: "🏛️", desc: "Supports the day-to-day operations, staff, and ministry of the church." },
    { title: "Missions Fund", icon: "🌍", desc: "Directly funds our global missionaries and outreach programmes in unreached regions." },
    { title: "Building Fund", icon: "🏗️", desc: "Contributions towards the purchase or renovation of our permanent church home." },
    { title: "Flag Kids & Youth", icon: "🧒", desc: "Equipping and expanding our children's and youth ministry with resources, events, and staffing." },
    { title: "Benevolence Fund", icon: "❤️", desc: "Supporting families in the church and community facing financial hardship or crisis." },
  ];

  return (
    <main className="flex w-full flex-col items-center bg-black min-h-screen text-white font-sans overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#C9A84C]/[0.05] to-transparent pointer-events-none -z-10"></div>
      <div className="fixed bottom-1/4 right-0 w-1/3 h-1/2 bg-[#C9A84C]/[0.03] blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Section 01: Give Hero */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-6 font-semibold">
            TITHES · OFFERINGS · MISSIONS
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-oswald uppercase tracking-tighter leading-[0.85] mb-8">
            HONOUR <span className="text-[#C9A84C] italic font-petit-formal-script lowercase tracking-normal text-5xl md:text-7xl lg:text-8xl relative -top-4 md:-top-8">God</span><br/>
            <span className="text-white/80 text-4xl md:text-6xl lg:text-7xl">WITH WHAT HE'S GIVEN YOU</span>
          </h1>
          
          <div className="w-16 h-px bg-[#C9A84C]/50 my-8"></div>
          
          <p className="text-base md:text-lg text-white/80 italic font-serif max-w-2xl leading-relaxed mb-6">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            <span className="block mt-2 text-sm text-[#C9A84C] not-italic tracking-widest uppercase">— 2 Corinthians 9:7</span>
          </p>

          <p className="text-sm md:text-base text-white/60 tracking-wide max-w-xl leading-relaxed mt-4">
            Giving at Flag Embassy is an act of worship, not obligation. When you give, you are partnering with everything God is doing through this church — in this city, across this nation, and to the ends of the earth. Thank you for your generosity.
          </p>
        </motion.div>
      </section>

      {/* Section 02: Ways to Give */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-oswald uppercase tracking-tight mb-4">WAYS TO GIVE</h2>
          <p className="text-sm text-white/50 tracking-wide">Choose the method that works best for you.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col bg-white/[0.02] border border-white/10 p-8 group hover:border-[#C9A84C]/50 transition-colors"
          >
            <div className="text-4xl mb-6">💳</div>
            <h3 className="text-xl font-oswald uppercase tracking-wide mb-4">GIVE ONLINE</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-8 flex-grow">
              Secure, one-time or recurring giving through our online portal. Debit/Credit card, bank transfer, and Apple/Google Pay accepted.
            </p>
            <button className="w-full py-4 bg-[#C9A84C] text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">
              GIVE NOW
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col bg-white/[0.02] border border-white/10 p-8 group hover:border-[#C9A84C]/50 transition-colors"
          >
            <div className="text-4xl mb-6">📱</div>
            <h3 className="text-xl font-oswald uppercase tracking-wide mb-4">GIVE BY APP</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-8 flex-grow">
              Download our church app and give in seconds from anywhere. Set up recurring tithes and track your giving history.
            </p>
            <button className="w-full py-4 border border-[#C9A84C]/50 text-[#C9A84C] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#C9A84C] hover:text-black transition-colors">
              GET THE APP
            </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col bg-white/[0.02] border border-white/10 p-8 group hover:border-[#C9A84C]/50 transition-colors"
          >
            <div className="text-4xl mb-6">🏦</div>
            <h3 className="text-xl font-oswald uppercase tracking-wide mb-4">BANK TRANSFER</h3>
            <div className="text-sm text-white/60 leading-relaxed mb-8 flex-grow font-mono">
              <p className="mb-4 font-sans">Give directly to our church bank account:</p>
              <p className="text-white/80">Name: Flag Embassy</p>
              <p className="text-white/80">Acc No: [XXXXXX]</p>
              <p className="text-white/80">Sort Code: [XX-XX-XX]</p>
              <p className="mt-4 text-[10px] tracking-widest text-[#C9A84C] uppercase font-sans">REF: Tithe/Offering/Missions</p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col bg-white/[0.02] border border-white/10 p-8 group hover:border-[#C9A84C]/50 transition-colors"
          >
            <div className="text-4xl mb-6">✉️</div>
            <h3 className="text-xl font-oswald uppercase tracking-wide mb-4">POST / IN PERSON</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-8 flex-grow">
              Cheques made payable to "Flag Embassy Church" can be posted or handed in at the church office during opening hours.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Section 03: Giving Funds / Categories */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 flex flex-col">
            <h2 className="text-3xl md:text-5xl font-oswald uppercase tracking-tight mb-4">CHOOSE WHERE YOUR GIVING GOES</h2>
            <p className="text-sm text-white/50 tracking-wide mb-8">When you give, you have the option to designate your gift to specific areas of ministry.</p>
            <div className="flex flex-col gap-2">
              {givingFunds.map((fund, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(fund.title)}
                  className={`flex items-center gap-4 p-4 border text-left transition-all ${activeTab === fund.title ? 'border-[#C9A84C] bg-[#C9A84C]/5 text-white' : 'border-white/5 bg-transparent text-white/50 hover:border-white/20 hover:text-white'}`}
                >
                  <span className="text-xl">{fund.icon}</span>
                  <span className="text-xs font-bold tracking-widest uppercase">{fund.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 flex items-center justify-center p-12 bg-white/[0.02] border border-white/5 relative overflow-hidden min-h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/5 blur-[80px] pointer-events-none"></div>
            {givingFunds.map((fund, idx) => (
              activeTab === fund.title && (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center z-10"
                >
                  <div className="w-24 h-24 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10 flex items-center justify-center text-4xl mb-8">
                    {fund.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-oswald uppercase tracking-wide text-[#C9A84C] mb-4">{fund.title}</h3>
                  <p className="text-base text-white/70 max-w-md leading-relaxed">{fund.desc}</p>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Section 04: Gift Aid (UK) & Section 05: Transparency */}
      <section className="w-full max-w-[1500px] mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Gift Aid Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 border border-[#C9A84C]/20 bg-gradient-to-br from-[#C9A84C]/10 to-transparent flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-oswald uppercase tracking-tight text-[#C9A84C] mb-4">MAXIMISE YOUR GIFT — UK DONORS</h2>
            <p className="text-sm text-white/70 leading-relaxed mb-8">
              If you are a UK taxpayer, Flag Embassy can claim an additional 25p for every £1 you give through Gift Aid — at no extra cost to you. Simply complete a Gift Aid declaration when you give online, or pick up a form at the welcome desk. Your giving stretches further when you Gift Aid.
            </p>
          </div>
          <button className="self-start py-3 px-6 border border-[#C9A84C] text-[#C9A84C] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#C9A84C] hover:text-black transition-colors">
            COMPLETE GIFT AID DECLARATION
          </button>
        </motion.div>

        {/* Transparency Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-10 border border-white/10 bg-white/[0.02] flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-oswald uppercase tracking-tight text-white mb-4">YOUR TRUST MATTERS TO US</h2>
            <p className="text-sm text-white/70 leading-relaxed mb-8">
              Flag Embassy is a registered charity [Charity No. XXXXXXX]. We are committed to financial integrity, accountability, and transparency. Our annual financial reports are available to all members on request. Every pound given is stewarded with excellence and the fear of God.
            </p>
          </div>
          <button className="self-start py-3 px-6 border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
            REQUEST ANNUAL REPORT
          </button>
        </motion.div>

      </section>

      <Footer />
    </main>
  );
}
