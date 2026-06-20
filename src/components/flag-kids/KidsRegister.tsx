"use client";

import { motion } from "framer-motion";

export default function KidsRegister() {
  return (
    <section className="w-full bg-background text-foreground py-24 md:py-32 font-sans border-t border-foreground/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Info & Contact */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-5/12 flex flex-col justify-center"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/60 mb-4 block">
            Join the Family
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-season-mix tracking-tight mb-8">
            Register Your Child
          </h2>
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-10">
            First time bringing your child? Pre-register online for a smooth and quick check-in on Sunday morning. Drop-off points are clearly marked in the foyer.
          </p>

          <div className="p-8 border border-foreground/10 bg-foreground/5 mb-8">
            <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-foreground mb-4">Have Questions?</h4>
            <div className="text-sm text-foreground/70 space-y-2">
              <p><strong>Flag Kids Pastor:</strong> [Firstname Lastname]</p>
              <p><strong>Email:</strong> kids@flagembassy.com</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Registration Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-7/12"
        >
          <form className="bg-foreground text-background p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Parent/Guardian Name</label>
                <input type="text" className="w-full bg-transparent border-b border-background/30 pb-2 text-background focus:outline-none focus:border-background transition-colors" placeholder="Full Name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Child's Name</label>
                <input type="text" className="w-full bg-transparent border-b border-background/30 pb-2 text-background focus:outline-none focus:border-background transition-colors" placeholder="Full Name" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Date of Birth</label>
                <input type="date" className="w-full bg-transparent border-b border-background/30 pb-2 text-background focus:outline-none focus:border-background transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Contact Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-background/30 pb-2 text-background focus:outline-none focus:border-background transition-colors" placeholder="Phone Number" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-background/30 pb-2 text-background focus:outline-none focus:border-background transition-colors" placeholder="Email" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Allergies or Medical Notes</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-background/30 pb-2 text-background focus:outline-none focus:border-background transition-colors resize-none" placeholder="Any specific needs we should be aware of..."></textarea>
            </div>

            <div className="pt-6">
              <button type="button" className="inline-flex h-14 items-center justify-center bg-[#f0c265] text-black px-10 text-sm uppercase tracking-widest font-bold transition-all hover:bg-white w-full md:w-auto">
                Register Now
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
