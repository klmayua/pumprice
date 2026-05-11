"use client";

import { motion } from "framer-motion";

export default function DrinksVisualCollage() {
  return (
    <div className="relative w-full h-full min-h-[360px] md:min-h-[460px] flex items-center justify-center">
      {/* Ambient glow behind everything */}
      <div
        className="absolute inset-0 blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 45% 55%, rgba(242,140,56,0.3) 0%, rgba(255,242,0,0.12) 25%, transparent 65%)",
        }}
      />

      {/* Secondary warm glow */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255,184,71,0.5) 0%, transparent 70%)",
          top: "10%",
          right: "5%",
        }}
      />

      {/* Whiskey Bottle - back left */}
      <motion.div
        className="absolute"
        style={{ left: "2%", top: "10%", zIndex: 1 }}
        animate={{ y: [0, -6, 0], rotate: [0, 0.8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <div
            className="absolute -inset-8 blur-2xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(255,242,0,0.25) 0%, transparent 70%)",
            }}
          />
          <svg width="130" height="280" viewBox="0 0 130 280" className="drop-shadow-2xl">
            <defs>
              <linearGradient id="wBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0d0500" />
                <stop offset="15%" stopColor="#2a1400" />
                <stop offset="35%" stopColor="#5c2e00" />
                <stop offset="50%" stopColor="#8a4a08" />
                <stop offset="65%" stopColor="#5c2e00" />
                <stop offset="85%" stopColor="#2a1400" />
                <stop offset="100%" stopColor="#0d0500" />
              </linearGradient>
              <linearGradient id="wCap" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a1200" />
                <stop offset="30%" stopColor="#4a3808" />
                <stop offset="50%" stopColor="#6b5210" />
                <stop offset="70%" stopColor="#4a3808" />
                <stop offset="100%" stopColor="#1a1200" />
              </linearGradient>
              <linearGradient id="wLabel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0a0a0a" />
                <stop offset="50%" stopColor="#141414" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <linearGradient id="wGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8860b" />
                <stop offset="40%" stopColor="#ffd700" />
                <stop offset="60%" stopColor="#fff8dc" />
                <stop offset="80%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#b8860b" />
              </linearGradient>
              <radialGradient id="wLiquidShine" cx="50%" cy="60%" r="50%">
                <stop offset="0%" stopColor="rgba(255,180,80,0.3)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <filter id="wGlow">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Bottle silhouette with rich body gradient */}
            <path
              d="M42 85 L42 42 Q42 22 65 22 Q88 22 88 42 L88 85 Q108 95 108 125 L108 248 Q108 273 65 273 Q22 273 22 248 L22 125 Q22 95 42 85Z"
              fill="url(#wBody)"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.8"
            />

            {/* Liquid inner glow for depth */}
            <ellipse cx="65" cy="180" rx="38" ry="70" fill="url(#wLiquidShine)" />

            {/* Main label */}
            <rect x="32" y="140" width="66" height="75" rx="2" fill="url(#wLabel)" stroke="url(#wGold)" strokeWidth="0.6" />
            {/* Label top band */}
            <rect x="32" y="140" width="66" height="14" rx="2" fill="url(#wGold)" opacity="0.7" />
            <rect x="32" y="140" width="66" height="14" rx="2" fill="none" stroke="url(#wGold)" strokeWidth="0.5" />
            {/* Label text lines */}
            <rect x="44" y="162" width="42" height="2.5" rx="1.25" fill="url(#wGold)" opacity="0.6" />
            <rect x="48" y="170" width="34" height="1.8" rx="0.9" fill="#8A8A8A" opacity="0.4" />
            <rect x="52" y="178" width="26" height="1.5" rx="0.75" fill="#8A8A8A" opacity="0.3" />
            {/* Label bottom seal */}
            <circle cx="65" cy="200" r="8" fill="none" stroke="url(#wGold)" strokeWidth="0.8" opacity="0.5" />

            {/* Neck label */}
            <rect x="50" y="55" width="30" height="22" rx="1" fill="url(#wLabel)" stroke="url(#wGold)" strokeWidth="0.4" opacity="0.8" />
            <rect x="53" y="60" width="24" height="2" rx="1" fill="url(#wGold)" opacity="0.4" />

            {/* Cap */}
            <rect x="46" y="14" width="38" height="18" rx="2" fill="url(#wCap)" stroke="rgba(255,215,0,0.25)" strokeWidth="0.6" />
            <rect x="46" y="18" width="38" height="2" fill="rgba(255,215,0,0.15)" />
            <rect x="46" y="24" width="38" height="1" fill="rgba(255,215,0,0.1)" />

            {/* Strong left reflection */}
            <path
              d="M35 100 Q32 140 32 190 Q32 230 35 260"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M38 110 Q36 150 36 200"
              stroke="rgba(255,215,0,0.06)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Right edge highlight */}
            <path
              d="M95 110 Q98 150 98 200 Q98 240 95 255"
              stroke="rgba(255,180,80,0.05)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Bottom glow reflection */}
            <ellipse cx="65" cy="275" rx="35" ry="4" fill="rgba(242,140,56,0.08)" filter="url(#wGlow)" />
          </svg>
        </div>
      </motion.div>

      {/* Champagne Bottle - back right */}
      <motion.div
        className="absolute"
        style={{ right: "3%", top: "15%", zIndex: 1 }}
        animate={{ y: [0, -5, 0], rotate: [0, -0.6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="relative">
          <div
            className="absolute -inset-8 blur-2xl opacity-35"
            style={{
              background:
                "radial-gradient(circle, rgba(242,140,56,0.2) 0%, transparent 70%)",
            }}
          />
          <svg width="120" height="300" viewBox="0 0 120 300" className="drop-shadow-2xl">
            <defs>
              <linearGradient id="cBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a1405" />
                <stop offset="15%" stopColor="#1a2e0a" />
                <stop offset="35%" stopColor="#2d4a12" />
                <stop offset="50%" stopColor="#3d5e18" />
                <stop offset="65%" stopColor="#2d4a12" />
                <stop offset="85%" stopColor="#1a2e0a" />
                <stop offset="100%" stopColor="#0a1405" />
              </linearGradient>
              <linearGradient id="cFoil" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b6914" />
                <stop offset="25%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="75%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#8b6914" />
              </linearGradient>
              <linearGradient id="cLabel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0a0a0a" />
                <stop offset="50%" stopColor="#111111" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <filter id="cGlow">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Bottle body */}
            <path
              d="M38 105 L38 52 Q38 32 60 32 Q82 32 82 52 L82 105 Q100 115 100 145 L100 268 Q100 293 60 293 Q20 293 20 268 L20 145 Q20 115 38 105Z"
              fill="url(#cBody)"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.8"
            />

            {/* Liquid depth glow */}
            <ellipse cx="60" cy="200" rx="34" ry="65" fill="rgba(100,180,40,0.06)" />

            {/* Gold foil */}
            <rect x="40" y="8" width="40" height="55" rx="3" fill="url(#cFoil)" opacity="0.9" />
            <rect x="40" y="20" width="40" height="2" fill="rgba(255,255,255,0.15)" />
            <rect x="40" y="35" width="40" height="1.5" fill="rgba(255,255,255,0.1)" />
            <rect x="40" y="50" width="40" height="1" fill="rgba(255,255,255,0.08)" />

            {/* Main label */}
            <rect x="30" y="155" width="60" height="65" rx="3" fill="url(#cLabel)" stroke="rgba(212,175,55,0.3)" strokeWidth="0.5" />
            <rect x="30" y="155" width="60" height="12" rx="3" fill="url(#cFoil)" opacity="0.6" />
            <rect x="40" y="176" width="40" height="2" rx="1" fill="#d4af37" opacity="0.5" />
            <rect x="44" y="184" width="32" height="1.5" rx="0.75" fill="#8A8A8A" opacity="0.35" />
            <rect x="48" y="192" width="24" height="1.2" rx="0.6" fill="#8A8A8A" opacity="0.25" />

            {/* Left reflection */}
            <path
              d="M32 120 Q29 160 29 210 Q29 250 32 280"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M35 130 Q33 170 33 220"
              stroke="rgba(212,175,55,0.05)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Bottom glow */}
            <ellipse cx="60" cy="295" rx="32" ry="3.5" fill="rgba(212,175,55,0.06)" filter="url(#cGlow)" />
          </svg>
        </div>
      </motion.div>

      {/* Cocktail Glass - center front, most prominent */}
      <motion.div
        className="absolute"
        style={{ left: "50%", top: "52%", transform: "translate(-50%, -50%)", zIndex: 3 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="relative">
          <div
            className="absolute -inset-12 blur-3xl opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(255,138,42,0.35) 0%, rgba(242,140,56,0.15) 40%, transparent 65%)",
            }}
          />
          <svg width="180" height="260" viewBox="0 0 180 260" className="drop-shadow-2xl">
            <defs>
              <linearGradient id="cocktailLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF7A1A" />
                <stop offset="30%" stopColor="#F28C38" />
                <stop offset="60%" stopColor="#FFB347" />
                <stop offset="100%" stopColor="#FFF200" />
              </linearGradient>
              <linearGradient id="glassBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                <stop offset="30%" stopColor="rgba(255,255,255,0.02)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.01)" />
                <stop offset="70%" stopColor="rgba(255,255,255,0.02)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.07)" />
              </linearGradient>
              <linearGradient id="liquidSurface" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,180,80,0.4)" />
                <stop offset="50%" stopColor="rgba(255,220,120,0.6)" />
                <stop offset="100%" stopColor="rgba(255,180,80,0.4)" />
              </linearGradient>
              <filter id="cocktailGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Glass bowl outer */}
            <path
              d="M35 15 L145 15 L112 105 Q95 125 95 145 L95 195 L85 195 L85 145 Q85 125 68 105Z"
              fill="url(#glassBody)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />

            {/* Liquid with surface shine */}
            <path
              d="M48 52 L132 52 L118 82 Q100 98 90 108 Q78 98 62 82Z"
              fill="url(#cocktailLiquid)"
              opacity="0.8"
            />
            {/* Liquid surface highlight */}
            <ellipse cx="90" cy="52" rx="38" ry="3" fill="url(#liquidSurface)" opacity="0.7" />

            {/* Ice cube 1 */}
            <rect x="62" y="62" width="20" height="20" rx="4" fill="rgba(220,240,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" transform="rotate(12 72 72)" />
            <rect x="65" y="65" width="6" height="6" rx="1" fill="rgba(255,255,255,0.15)" transform="rotate(12 68 68)" />
            {/* Ice cube 2 */}
            <rect x="88" y="68" width="16" height="16" rx="3" fill="rgba(220,240,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" transform="rotate(-8 96 76)" />

            {/* Bubbles */}
            <circle cx="75" cy="88" r="2.2" fill="rgba(255,220,150,0.35)" />
            <circle cx="95" cy="82" r="1.6" fill="rgba(255,220,150,0.28)" />
            <circle cx="82" cy="75" r="1.2" fill="rgba(255,220,150,0.2)" />
            <circle cx="68" cy="78" r="1" fill="rgba(255,220,150,0.18)" />

            {/* Glass left highlight */}
            <path
              d="M42 25 Q40 55 45 85 Q50 105 55 115"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M46 30 Q44 55 48 80"
              stroke="rgba(255,200,100,0.08)"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Glass right edge glow */}
            <path
              d="M138 25 Q135 55 128 85 Q120 105 115 115"
              stroke="rgba(255,180,80,0.06)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Stem */}
            <rect x="86" y="145" width="8" height="50" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            <rect x="87" y="150" width="2" height="40" rx="1" fill="rgba(255,255,255,0.06)" />

            {/* Base */}
            <ellipse cx="90" cy="205" rx="34" ry="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
            <ellipse cx="90" cy="203" rx="28" ry="4" fill="rgba(255,255,255,0.02)" />

            {/* Base glow */}
            <ellipse cx="90" cy="210" rx="40" ry="6" fill="rgba(242,140,56,0.08)" filter="url(#cocktailGlow)" />

            {/* Garnish straw */}
            <line x1="110" y1="15" x2="135" y2="-15" stroke="url(#cocktailLiquid)" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
            <line x1="112" y1="15" x2="133" y2="-10" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

            {/* Orange slice garnish */}
            <circle cx="125" cy="12" r="14" fill="rgba(255,140,40,0.25)" stroke="rgba(255,180,80,0.3)" strokeWidth="1" />
            <circle cx="125" cy="12" r="10" fill="rgba(255,200,100,0.15)" />
            <line x1="125" y1="2" x2="125" y2="22" stroke="rgba(255,180,80,0.2)" strokeWidth="0.5" />
            <line x1="115" y1="12" x2="135" y2="12" stroke="rgba(255,180,80,0.2)" strokeWidth="0.5" />
          </svg>
        </div>
      </motion.div>

      {/* Ice Cubes - scattered with depth */}
      <motion.div
        className="absolute"
        style={{ right: "12%", bottom: "18%", zIndex: 2 }}
        animate={{ y: [0, -4, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      >
        <svg width="55" height="55" viewBox="0 0 55 55">
          <defs>
            <linearGradient id="ice1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(220,240,255,0.12)" />
              <stop offset="50%" stopColor="rgba(200,230,255,0.06)" />
              <stop offset="100%" stopColor="rgba(180,220,255,0.1)" />
            </linearGradient>
          </defs>
          <rect x="8" y="12" width="32" height="32" rx="6" fill="url(#ice1)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" transform="rotate(-12 24 28)" />
          <rect x="12" y="16" width="8" height="8" rx="2" fill="rgba(255,255,255,0.12)" transform="rotate(-12 16 20)" />
          <rect x="18" y="5" width="26" height="26" rx="5" fill="url(#ice1)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.6" transform="rotate(8 31 18)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ left: "18%", bottom: "14%", zIndex: 2 }}
        animate={{ y: [0, -3, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
      >
        <svg width="45" height="45" viewBox="0 0 45 45">
          <rect x="7" y="9" width="28" height="28" rx="5" fill="rgba(220,240,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" transform="rotate(18 21 23)" />
          <rect x="11" y="13" width="6" height="6" rx="1.5" fill="rgba(255,255,255,0.1)" transform="rotate(18 14 16)" />
        </svg>
      </motion.div>

      {/* Floating sparkles / light particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 3 === 0 ? "3px" : "2px",
            height: i % 3 === 0 ? "3px" : "2px",
            background: i % 2 === 0 ? "#FFF200" : "#F28C38",
            left: `${18 + i * 10}%`,
            top: `${12 + (i % 4) * 18}%`,
            zIndex: 4,
            boxShadow: `0 0 ${4 + i}px ${i % 2 === 0 ? "rgba(255,242,0,0.4)" : "rgba(242,140,56,0.4)"}`,
          }}
          animate={{
            y: [0, -25 - i * 8, 0],
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5 + i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        />
      ))}
    </div>
  );
}
