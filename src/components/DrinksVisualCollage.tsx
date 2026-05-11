"use client";

import { motion } from "framer-motion";

export default function DrinksVisualCollage() {
  return (
    <div className="relative w-full h-full min-h-[360px] md:min-h-[460px] flex items-center justify-center">
      {/* Ambient warm glow behind everything */}
      <div
        className="absolute inset-0 blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 45% 55%, rgba(242,140,56,0.35) 0%, rgba(255,242,0,0.15) 25%, transparent 65%)",
        }}
      />

      {/* Secondary warm glow */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(255,184,71,0.5) 0%, transparent 70%)",
          top: "10%",
          right: "5%",
        }}
      />

      {/* Cinematic vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(5,5,5,0.4) 100%)",
        }}
      />

      {/* Soft gradient fade to background */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.2) 0%, transparent 30%, transparent 70%, rgba(5,5,5,0.25) 100%)",
        }}
      />

      {/* Whiskey - back left, slightly tilted */}
      <motion.div
        className="absolute"
        style={{ left: "0%", top: "12%", zIndex: 1 }}
        animate={{ y: [0, -6, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          {/* Glow behind */}
          <div
            className="absolute -inset-6 blur-2xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(255,242,0,0.25) 0%, transparent 70%)",
            }}
          />
          <div className="relative w-[120px] md:w-[150px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=400&q=80"
              alt="Premium whiskey"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            {/* Dark gradient overlay for blending */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(5,5,5,0.3) 0%, transparent 50%, rgba(5,5,5,0.2) 100%)",
              }}
            />
            {/* Warm edge glow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: "inset 0 0 30px rgba(242,140,56,0.15)",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Champagne / Wine - back right */}
      <motion.div
        className="absolute"
        style={{ right: "2%", top: "18%", zIndex: 1 }}
        animate={{ y: [0, -5, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="relative">
          <div
            className="absolute -inset-6 blur-2xl opacity-35"
            style={{
              background:
                "radial-gradient(circle, rgba(242,140,56,0.2) 0%, transparent 70%)",
            }}
          />
          <div className="relative w-[110px] md:w-[140px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1598306442928-4d90f32c6866?auto=format&fit=crop&w=400&q=80"
              alt="Premium champagne"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(225deg, rgba(5,5,5,0.3) 0%, transparent 50%, rgba(5,5,5,0.2) 100%)",
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: "inset 0 0 30px rgba(242,140,56,0.12)",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Premium Cocktail - center front, most prominent */}
      <motion.div
        className="absolute"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 3 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="relative">
          <div
            className="absolute -inset-10 blur-3xl opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(255,138,42,0.4) 0%, rgba(242,140,56,0.15) 40%, transparent 65%)",
            }}
          />
          <div className="relative w-[160px] md:w-[200px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1536935338788-843bb6814d30?auto=format&fit=crop&w=600&q=80"
              alt="Premium cocktail"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            {/* Top highlight for glass shine */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 40%, transparent 60%, rgba(5,5,5,0.15) 100%)",
              }}
            />
            {/* Warm edge glow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: "inset 0 0 40px rgba(242,140,56,0.18)",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Ice detail - bottom right */}
      <motion.div
        className="absolute"
        style={{ right: "10%", bottom: "15%", zIndex: 2 }}
        animate={{ y: [0, -4, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      >
        <div className="relative w-[70px] md:w-[90px] rounded-xl overflow-hidden shadow-xl opacity-80">
          <img
            src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=200&q=80"
            alt="Ice cubes"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(5,5,5,0.4) 0%, transparent 60%)",
            }}
          />
        </div>
      </motion.div>

      {/* Ice detail - bottom left */}
      <motion.div
        className="absolute"
        style={{ left: "15%", bottom: "12%", zIndex: 2 }}
        animate={{ y: [0, -3, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
      >
        <div className="relative w-[55px] md:w-[70px] rounded-xl overflow-hidden shadow-xl opacity-70">
          <img
            src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=200&q=80"
            alt="Ice detail"
            className="w-full h-auto object-cover"
            loading="lazy"
            style={{ transform: "scaleX(-1)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(225deg, rgba(5,5,5,0.4) 0%, transparent 60%)",
            }}
          />
        </div>
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
