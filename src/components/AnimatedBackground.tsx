"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background:
            "linear-gradient(135deg, #050505 0%, #0a0a0a 30%, #121212 60%, #1A1A1A 100%)",
        }}
      />

      {/* Animated smoke layers */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, rgba(242,140,56,0.5) 0%, transparent 60%)",
          filter: "blur(120px)",
          top: "-10%",
          left: "-15%",
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.025]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,242,0,0.4) 0%, transparent 60%)",
          filter: "blur(140px)",
          top: "30%",
          right: "-20%",
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,184,71,0.4) 0%, transparent 60%)",
          filter: "blur(100px)",
          bottom: "5%",
          left: "25%",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(242,140,56,0.35) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "10%",
          left: "10%",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-12"
        style={{
          background:
            "radial-gradient(circle, rgba(255,242,0,0.25) 0%, transparent 70%)",
          filter: "blur(90px)",
          top: "50%",
          right: "5%",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,138,42,0.3) 0%, transparent 70%)",
          filter: "blur(70px)",
          bottom: "20%",
          left: "40%",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vertical light beams */}
      <motion.div
        className="absolute w-[1px] h-[1000px] opacity-[0.06]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,242,0,0.4), rgba(242,140,56,0.3), transparent)",
          filter: "blur(1px)",
          top: "-15%",
          left: "15%",
          transform: "rotate(12deg)",
        }}
        animate={{
          opacity: [0.03, 0.08, 0.03],
          y: [0, 80, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[1px] h-[900px] opacity-[0.05]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(242,140,56,0.4), rgba(255,242,0,0.2), transparent)",
          filter: "blur(1px)",
          top: "10%",
          right: "20%",
          transform: "rotate(-8deg)",
        }}
        animate={{
          opacity: [0.02, 0.07, 0.02],
          y: [0, -60, 0],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[1px] h-[800px] opacity-[0.04]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,184,71,0.3), transparent)",
          filter: "blur(1px)",
          top: "5%",
          left: "55%",
          transform: "rotate(5deg)",
        }}
        animate={{
          opacity: [0.02, 0.06, 0.02],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glow particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            background: i % 2 === 0 ? "#FFF200" : "#F28C38",
            left: `${10 + (i * 7) % 80}%`,
            top: `${10 + (i * 11) % 80}%`,
            boxShadow: `0 0 6px ${i % 2 === 0 ? "rgba(255,242,0,0.5)" : "rgba(242,140,56,0.5)"}`,
          }}
          animate={{
            y: [0, -40 - (i % 5) * 15, 0],
            x: [0, (i % 3 - 1) * 20, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 8 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Faint gold grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,242,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,242,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
