"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    title: "Events Are Live",
    subtitle: "Sign up to serve",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Youth Conference 2024",
    subtitle: "Register your youth today",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Worship Night",
    subtitle: "Join us for an evening of praise",
    image: "https://images.unsplash.com/photo-1470229722913-7c090be5c520?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Community Outreach",
    subtitle: "Impact our city",
    image: "https://images.unsplash.com/photo-1593113580332-ceb4b8893d7c?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function UpcomingEvents() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-black text-white py-24 md:py-32 border-t border-white/10 relative overflow-hidden">

      {/* Header Info */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 mb-8 relative z-10">
        <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 mb-2 font-semibold">
          MARK YOUR CALENDARS
        </p>
        <h2 className="text-4xl md:text-6xl font-oswald uppercase tracking-tighter">
          UPCOMING EVENTS
        </h2>
      </div>

      {/* Marquee Animation */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-white/10 py-4 mb-16 relative z-10 bg-white/5">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="inline-flex w-max"
        >
          <span className="text-xl md:text-2xl font-oswald tracking-widest uppercase text-white/80">
            {Array(10).fill("GET INVOLVED  /  JOIN A TEAM  /  ATTEND AN EVENT  /  ").join("")}
          </span>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full h-[50vh] md:h-[60vh] flex flex-col items-center justify-center">

        {/* Chevrons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center z-30 hover:bg-white/10 hover:scale-110 transition-all duration-300"
          aria-label="Previous event"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 18l-6-6 6-6" /></svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center z-30 hover:bg-white/10 hover:scale-110 transition-all duration-300"
          aria-label="Next event"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 18l6-6-6-6" /></svg>
        </button>

        {/* Slides */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence initial={false}>
            {events.map((event, i) => {
              const isActive = i === activeIndex;
              const distance = i - activeIndex;

              return (
                <motion.div
                  key={i}
                  className="absolute p-3 w-[95%] md:h-[70vh] h-full rounded-4xl  overflow-hidden cursor-pointer shadow-2xl"
                  animate={{
                    x: `${distance * 105}%`,
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 20 : 10
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
                  onClick={() => !isActive && setActiveIndex(i)}
                >
                  <img src={event.image} alt={event.title} className={`w-full h-full object-cover rounded-3xl transition-all duration-1000 ${isActive ? 'grayscale-0' : 'grayscale contrast-125 mix-blend-luminosity'}`} />

                  {/* Overlay */}
                  <div className="absolute inset-3 rounded-3xl bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Text Content */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                    transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
                    className="absolute bottom-6 md:bottom-12 left-6 md:left-12 pointer-events-none"
                  >
                    <h3 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold font-sans tracking-tight mb-2 md:mb-4">
                      {event.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm tracking-widest uppercase">
                      {event.subtitle}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Pagination Dots */}
      <div className="flex gap-3 justify-center mt-12 relative z-20">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ease-out ${i === activeIndex ? 'bg-[#f0c265] w-8' : 'bg-white/30 w-2 hover:bg-white/50'}`}
          />
        ))}
      </div>

    </section>
  );
}
