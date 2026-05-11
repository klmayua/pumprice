"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  // Target: 30 days from now
  const difference =
    new Date("2026-06-15T00:00:00").getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimerCard({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) {
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setPrevValue(value);
        setIsFlipping(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  const displayValue = value.toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative group"
    >
      <div
        className="glass-card rounded-[28px] p-6 md:p-8 flex flex-col items-center min-w-[100px] md:min-w-[160px] transition-all duration-500"
        style={{
          boxShadow: "0 0 40px rgba(242,140,56,0.15)",
        }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at center, rgba(242,140,56,0.15) 0%, transparent 70%)",
          }}
        />

        <motion.div
          animate={isFlipping ? { rotateX: [0, -90, 0] } : {}}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <span
            className="text-[clamp(2.5rem,5vw,5rem)] font-extrabold gradient-text leading-none"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {displayValue}
          </span>
        </motion.div>

        <span className="relative z-10 text-[0.9rem] font-medium text-[#8A8A8A] mt-3 uppercase tracking-widest">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Launching Soon
          </h2>
          <p className="text-[#8A8A8A] text-base md:text-lg">
            The new PUMPRICE experience arrives in
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <TimerCard value={timeLeft.days} label="Days" delay={0} />
          <TimerCard value={timeLeft.hours} label="Hours" delay={0.1} />
          <TimerCard value={timeLeft.minutes} label="Minutes" delay={0.2} />
          <TimerCard value={timeLeft.seconds} label="Seconds" delay={0.3} />
        </div>
      </div>
    </section>
  );
}
