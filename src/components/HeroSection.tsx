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
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden pt-[72px] md:pt-[72px] pb-8 md:pb-10">
      <div className="relative z-10 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* LEFT COLUMN - 52% */}
          <div className="w-full lg:w-[52%] flex flex-col items-start text-left">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-3 md:mb-4"
            >
              <PumpriceLogo className="w-[160px] md:w-[220px]" />
            </motion.div>

            {/* Callout Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-3 md:mb-4"
            >
              <div
                className="rounded-full px-4 py-2 animate-pulse-glow"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 0 24px rgba(242,140,56,0.1)",
                }}
              >
                <span className="text-xs md:text-sm font-semibold tracking-wide gradient-text">
                  Platform Redevelopment In Progress
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[clamp(1.9rem,5vw,3.2rem)] md:text-[clamp(2.4rem,3.8vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.04em] mb-3 md:mb-4 text-glow"
            >
              <span className="gradient-text">
                We&apos;re Rebuilding the Future of Drinks Ordering
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-[0.95rem] md:text-[1.05rem] leading-[1.65] text-[#C7C7C7] max-w-[500px] mb-1"
            >
              Bigger infrastructure. Faster delivery flows. Better nightlife
              experiences. Smarter ordering.{" "}
              <span className="text-white font-semibold">PUMPRICE is evolving.</span>
            </motion.p>

            {/* Countdown - INSIDE HERO */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <CountdownTimer />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                onClick={scrollToWaitlist}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="h-[48px] md:h-[56px] px-6 md:px-8 rounded-[16px] font-bold text-[#050505] text-sm md:text-base relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(242,140,56,0.35)]"
                style={{
                  background: "linear-gradient(135deg, #FFF200, #F28C38)",
                }}
              >
                Join The Relaunch Waitlist
              </motion.button>

              <motion.button
                onClick={scrollToFeatures}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="h-[48px] md:h-[56px] px-6 md:px-8 rounded-[16px] font-bold text-white text-sm md:text-base transition-all duration-300"
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
            className="w-full lg:w-[48%] relative mt-4 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <DrinksVisualCollage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
