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
  const difference =
    new Date("2026-05-26T00:00:00").getTime() - new Date().getTime();

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
}: {
  value: number;
  label: string;
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
    <div className="relative group">
      <div
        className="rounded-[24px] p-4 md:p-5 flex flex-col items-center min-w-[72px] md:min-w-[100px] transition-all duration-500"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 0 40px rgba(242,140,56,0.08)",
        }}
      >
        {/* Subtle gold glow on hover */}
        <div
          className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,242,0,0.08) 0%, transparent 70%)",
          }}
        />

        <motion.div
          animate={isFlipping ? { rotateX: [0, -90, 0] } : {}}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <span
            className="text-[clamp(1.8rem,3vw,3rem)] font-extrabold gradient-text leading-none"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {displayValue}
          </span>
        </motion.div>

        <span className="relative z-10 text-[0.75rem] md:text-[0.85rem] font-medium text-[#8A8A8A] mt-2 uppercase tracking-widest">
          {label}
        </span>
      </div>
    </div>
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
    <div className="flex flex-wrap justify-start gap-3 md:gap-4 mt-6 mb-7">
      <TimerCard value={timeLeft.days} label="Days" />
      <TimerCard value={timeLeft.hours} label="Hours" />
      <TimerCard value={timeLeft.minutes} label="Minutes" />
      <TimerCard value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
