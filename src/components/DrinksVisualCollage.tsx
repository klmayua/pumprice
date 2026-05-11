"use client";

import { motion } from "framer-motion";

export default function DrinksVisualCollage() {
  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      {/* Ambient glow behind everything */}
      <div
        className="absolute inset-0 blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(242,140,56,0.25) 0%, rgba(255,242,0,0.1) 30%, transparent 70%)",
        }}
      />

      {/* Whiskey Bottle - back left, slightly tilted */}
      <motion.div
        className="absolute"
        style={{ left: "5%", top: "15%", zIndex: 1 }}
        animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <div
            className="absolute inset-0 blur-2xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(255,242,0,0.3) 0%, transparent 70%)",
              transform: "scale(1.5)",
            }}
          />
          <svg width="140" height="280" viewBox="0 0 140 280" className="drop-shadow-2xl">
            <defs>
              <linearGradient id="whiskeyBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a0f00" />
                <stop offset="30%" stopColor="#3d1f00" />
                <stop offset="50%" stopColor="#6b3a00" />
                <stop offset="70%" stopColor="#3d1f00" />
                <stop offset="100%" stopColor="#1a0f00" />
              </linearGradient>
              <linearGradient id="whiskeyLabel" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a0a0a" />
                <stop offset="50%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF200" />
                <stop offset="100%" stopColor="#F28C38" />
              </linearGradient>
            </defs>
            {/* Bottle body */}
            <path
              d="M50 80 L50 40 Q50 20 70 20 Q90 20 90 40 L90 80 Q110 90 110 120 L110 240 Q110 265 70 265 Q30 265 30 240 L30 120 Q30 90 50 80Z"
              fill="url(#whiskeyBody)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            {/* Label */}
            <rect x="38" y="140" width="64" height="70" rx="3" fill="url(#whiskeyLabel)" stroke="rgba(255,242,0,0.15)" strokeWidth="0.5" />
            {/* Label text lines */}
            <rect x="48" y="158" width="44" height="3" rx="1.5" fill="url(#goldAccent)" opacity="0.7" />
            <rect x="52" y="168" width="36" height="2" rx="1" fill="#8A8A8A" opacity="0.5" />
            <rect x="56" y="176" width="28" height="2" rx="1" fill="#8A8A8A" opacity="0.4" />
            {/* Cap */}
            <rect x="52" y="12" width="36" height="18" rx="2" fill="#1a1a1a" stroke="rgba(255,242,0,0.2)" strokeWidth="0.5" />
            {/* Reflection */}
            <path
              d="M45 90 Q42 120 42 180 Q42 220 45 250"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </motion.div>

      {/* Champagne Bottle - back right */}
      <motion.div
        className="absolute"
        style={{ right: "8%", top: "20%", zIndex: 1 }}
        animate={{ y: [0, -6, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="relative">
          <div
            className="absolute inset-0 blur-2xl opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(242,140,56,0.3) 0%, transparent 70%)",
              transform: "scale(1.5)",
            }}
          />
          <svg width="120" height="300" viewBox="0 0 120 300" className="drop-shadow-2xl">
            <defs>
              <linearGradient id="champagneBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f1a00" />
                <stop offset="30%" stopColor="#1f3d00" />
                <stop offset="50%" stopColor="#356b00" />
                <stop offset="70%" stopColor="#1f3d00" />
                <stop offset="100%" stopColor="#0f1a00" />
              </linearGradient>
              <linearGradient id="goldFoil" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8860b" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#b8860b" />
              </linearGradient>
            </defs>
            {/* Bottle body */}
            <path
              d="M48 100 L48 50 Q48 30 60 30 Q72 30 72 50 L72 100 Q90 110 90 140 L90 260 Q90 285 60 285 Q30 285 30 260 L30 140 Q30 110 48 100Z"
              fill="url(#champagneBody)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            {/* Gold foil */}
            <rect x="44" y="20" width="32" height="50" rx="3" fill="url(#goldFoil)" opacity="0.8" />
            {/* Label */}
            <rect x="36" y="150" width="48" height="60" rx="3" fill="#0a0a0a" stroke="rgba(255,215,0,0.2)" strokeWidth="0.5" />
            <rect x="44" y="165" width="32" height="2" rx="1" fill="#ffd700" opacity="0.5" />
            <rect x="48" y="172" width="24" height="1.5" rx="0.75" fill="#8A8A8A" opacity="0.4" />
            {/* Reflection */}
            <path
              d="M42 110 Q39 140 39 200 Q39 240 42 270"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </motion.div>

      {/* Cocktail Glass - center front */}
      <motion.div
        className="absolute"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 3 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="relative">
          <div
            className="absolute inset-0 blur-2xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(255,138,42,0.35) 0%, transparent 60%)",
              transform: "scale(1.8)",
            }}
          />
          <svg width="160" height="220" viewBox="0 0 160 220" className="drop-shadow-2xl">
            <defs>
              <linearGradient id="cocktailLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF8A2A" />
                <stop offset="50%" stopColor="#F28C38" />
                <stop offset="100%" stopColor="#FFF200" />
              </linearGradient>
              <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.02)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
              </linearGradient>
            </defs>
            {/* Glass bowl */}
            <path
              d="M40 20 L120 20 L90 100 Q80 115 80 130 L80 170 L60 170 L60 130 Q60 115 50 100Z"
              fill="url(#glassReflect)"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            {/* Liquid */}
            <path
              d="M48 55 L112 55 L100 85 Q85 100 80 110 Q70 100 60 85Z"
              fill="url(#cocktailLiquid)"
              opacity="0.75"
            />
            {/* Ice cube */}
            <rect x="65" y="65" width="18" height="18" rx="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" transform="rotate(15 74 74)" />
            {/* Stem */}
            <rect x="76" y="130" width="8" height="45" rx="2" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            {/* Base */}
            <ellipse cx="80" cy="185" rx="30" ry="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            {/* Garnish / straw */}
            <line x1="95" y1="20" x2="115" y2="-10" stroke="#FF8A2A" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
            {/* Bubbles */}
            <circle cx="72" cy="90" r="2" fill="rgba(255,255,255,0.3)" />
            <circle cx="88" cy="80" r="1.5" fill="rgba(255,255,255,0.25)" />
            <circle cx="78" cy="72" r="1" fill="rgba(255,255,255,0.2)" />
          </svg>
        </div>
      </motion.div>

      {/* Ice Cubes - scattered */}
      <motion.div
        className="absolute"
        style={{ right: "15%", bottom: "20%", zIndex: 2 }}
        animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60">
          <rect x="10" y="15" width="35" height="35" rx="6" fill="rgba(200,230,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" transform="rotate(-12 27 32)" />
          <rect x="18" y="8" width="28" height="28" rx="5" fill="rgba(200,230,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.6" transform="rotate(8 32 22)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ left: "20%", bottom: "15%", zIndex: 2 }}
        animate={{ y: [0, -4, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50">
          <rect x="8" y="10" width="30" height="30" rx="5" fill="rgba(200,230,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" transform="rotate(20 23 25)" />
        </svg>
      </motion.div>

      {/* Floating particles / sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? "#FFF200" : "#F28C38",
            left: `${20 + i * 12}%`,
            top: `${15 + (i % 3) * 20}%`,
            zIndex: 4,
          }}
          animate={{
            y: [0, -30 - i * 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
}
