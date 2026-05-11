"use client";

import { motion } from "framer-motion";

const messages = [
  "Premium nightlife experiences",
  "Fast drink deliveries",
  "Party-ready convenience",
  "Designed for modern African cities",
];

export default function SocialStrip() {
  const doubledMessages = [...messages, ...messages];

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(242,140,56,0.4), rgba(255,242,0,0.4), transparent)",
        }}
      />

      <div className="flex">
        <motion.div
          className="flex gap-12 md:gap-20 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubledMessages.map((message, index) => (
            <div key={index} className="flex items-center gap-12 md:gap-20">
              <span className="text-lg md:text-2xl font-semibold text-[#8A8A8A] tracking-wide">
                {message}
              </span>
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #FFF200, #F28C38)",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(242,140,56,0.4), rgba(255,242,0,0.4), transparent)",
        }}
      />
    </section>
  );
}
