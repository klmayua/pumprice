"use client";

import { motion } from "framer-motion";
import PumpriceLogo from "./PumpriceLogo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <PumpriceLogo className="w-[220px] md:w-[320px]" />
        </motion.div>

        {/* Callout Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <div className="glass-card rounded-full px-6 py-3 animate-pulse-glow">
            <span className="text-sm md:text-base font-semibold tracking-wide gradient-text">
              Platform Redevelopment In Progress
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="text-[clamp(2.2rem,10vw,3.5rem)] md:text-[clamp(3.5rem,7vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.04em] mb-8 text-glow"
        >
          <span className="gradient-text">
            We&apos;re Rebuilding the Future of Drinks Ordering
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="text-[1.15rem] leading-[1.8] text-[#C7C7C7] max-w-[720px] whitespace-pre-line"
        >
          {`Bigger infrastructure.
Faster delivery flows.
Better nightlife experiences.
Smarter ordering.
PUMPRICE is evolving.`}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-[rgba(255,255,255,0.2)] flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#F28C38]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
