"use client";

import { motion } from "framer-motion";
import PumpriceLogo from "./PumpriceLogo";
import CountdownTimer from "./CountdownTimer";
import DrinksVisualCollage from "./DrinksVisualCollage";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden pt-16 md:pt-20 pb-12 md:pb-16">
      <div className="relative z-10 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* LEFT COLUMN - 52% */}
          <div className="w-full lg:w-[52%] flex flex-col items-start text-left">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4 md:mb-5"
            >
              <PumpriceLogo className="w-[180px] md:w-[240px]" />
            </motion.div>

            {/* Callout Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-5 md:mb-6"
            >
              <div
                className="rounded-full px-5 py-2.5 animate-pulse-glow"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 0 30px rgba(242,140,56,0.1)",
                }}
              >
                <span className="text-xs md:text-sm font-semibold tracking-wide gradient-text">
                  Platform Redevelopment In Progress
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[clamp(2rem,5vw,3.5rem)] md:text-[clamp(2.8rem,4vw,4.2rem)] font-extrabold leading-[0.98] tracking-[-0.04em] mb-5 text-glow"
            >
              <span className="gradient-text">
                We&apos;re Rebuilding the Future of Drinks Ordering
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[1rem] md:text-[1.1rem] leading-[1.7] text-[#C7C7C7] max-w-[520px] mb-2"
            >
              Bigger infrastructure. Faster delivery flows. Better nightlife
              experiences. Smarter ordering.{" "}
              <span className="text-white font-semibold">PUMPRICE is evolving.</span>
            </motion.p>

            {/* Countdown - INSIDE HERO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CountdownTimer />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              {/* Primary CTA */}
              <motion.button
                onClick={scrollToWaitlist}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="h-[52px] md:h-[64px] px-7 md:px-9 rounded-[18px] font-bold text-[#050505] text-sm md:text-base relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(242,140,56,0.35)]"
                style={{
                  background: "linear-gradient(135deg, #FFF200, #F28C38)",
                }}
              >
                Join The Relaunch Waitlist
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                onClick={scrollToFeatures}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="h-[52px] md:h-[64px] px-7 md:px-9 rounded-[18px] font-bold text-white text-sm md:text-base transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                }}
              >
                Explore What&apos;s Coming
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - 48% */}
          <motion.div
            className="w-full lg:w-[48%] relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <DrinksVisualCollage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
