"use client";

import { motion } from "framer-motion";

const content = [
  "What", "does", "it", "look", "like", "to",
  { type: "image" },
  "catch", "a", "glimpse", "of", "Heaven", "on", "Earth?",
  "How", "will", "you", "respond", "when", "God", "reveals", "His",
  { type: "special", text: "VISION" },
  "We", "gather", "with", "a", "singular", "focus:",
  { type: "image" },
  "to", "fix", "our", "eyes", "on", "Jesus", "Christ.",
  "Together", "we", "will", "catch", "sight", "of", "what", "is",
  { type: "special", text: "COMING" }
];

export default function VisionStatement() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="w-full py-32 md:py-48 px-6 bg-background flex justify-center overflow-hidden">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-3 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-season-mix leading-none"
        >
          {content.map((item, index) => {
            if (typeof item === "string") {
              return (
                <motion.span key={index} variants={itemVariants} className="inline-block">
                  {item}
                </motion.span>
              );
            }

            if (item.type === "image") {
              return (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  style={{ backgroundImage: "url('/assets/herocard.png')" }}
                  className="inline-block w-20 h-10 md:w-28 md:h-12 lg:w-36 lg:h-16 mx-1 md:mx-2 rounded-lg bg-cover bg-center bg-no-repeat border border-foreground/20 overflow-hidden relative shadow-inner align-middle -translate-y-1 md:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-foreground/10 mix-blend-overlay"></div>
                </motion.span>
              );
            }

            if (item.type === "special") {
              return (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="inline-block font-oswald text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight uppercase px-1 -translate-y-0.5 md:-translate-y-1"
                >
                  {item.text}
                </motion.span>
              );
            }

            if (item.type === "italic") {
              return (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="inline-block font-petit italic text-2xl md:text-4xl lg:text-5xl text-accent px-1"
                >
                  {item.text}
                </motion.span>
              );
            }

            return null;
          })}
        </motion.div>
      </div>
    </section>
  );
}
