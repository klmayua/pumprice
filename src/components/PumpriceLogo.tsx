"use client";

import { motion } from "framer-motion";

interface PumpriceLogoProps {
  className?: string;
}

export default function PumpriceLogo({ className = "" }: PumpriceLogoProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Glow behind logo */}
      <div
        className="absolute inset-0 blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(255,242,0,0.4) 0%, transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 400 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-auto"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF200" />
            <stop offset="100%" stopColor="#F28C38" />
          </linearGradient>
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* PUMPRICE text */}
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="url(#logoGradient)"
          fontFamily="var(--font-space-grotesk), 'Space Grotesk', sans-serif"
          fontWeight="800"
          fontSize="72"
          letterSpacing="-0.04em"
          filter="url(#logoGlow)"
        >
          PUMPRICE
        </text>

        {/* Tagline */}
        <text
          x="50%"
          y="85%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#C7C7C7"
          fontFamily="var(--font-inter), 'Inter', sans-serif"
          fontWeight="500"
          fontSize="14"
          letterSpacing="0.2em"
        >
          PREMIUM ONLINE DRINKS STORE
        </text>
      </svg>
    </motion.div>
  );
}
