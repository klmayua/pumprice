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
            "linear-gradient(135deg, #050505 0%, #121212 50%, #1A1A1A 100%)",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(242,140,56,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(255,242,0,0.3) 0%, transparent 70%)",
          filter: "blur(100px)",
          top: "40%",
          right: "-5%",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,184,71,0.35) 0%, transparent 70%)",
          filter: "blur(90px)",
          bottom: "10%",
          left: "30%",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light beams */}
      <motion.div
        className="absolute w-[2px] h-[800px] opacity-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,242,0,0.3), transparent)",
          filter: "blur(2px)",
          top: "-10%",
          left: "20%",
          transform: "rotate(15deg)",
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[2px] h-[600px] opacity-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(242,140,56,0.3), transparent)",
          filter: "blur(2px)",
          top: "20%",
          right: "25%",
          transform: "rotate(-10deg)",
        }}
        animate={{
          opacity: [0.05, 0.12, 0.05],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Faint gold grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,242,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,242,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
