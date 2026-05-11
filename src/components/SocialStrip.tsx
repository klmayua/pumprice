"use client";

import { motion } from "framer-motion";

const messages = [
  "Premium nightlife experiences",
  "Fast drink deliveries",
  "Party-ready convenience",
  "Designed for modern African cities",
  "Whiskey. Champagne. Cocktails.",
  "Order by midnight, deliver by morning",
];

export default function SocialStrip() {
  const doubledMessages = [...messages, ...messages];

  return (
    <section className="relative overflow-hidden">
      <div
        className="py-4 md:py-5"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Top border glow */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(242,140,56,0.35), rgba(255,242,0,0.35), transparent)",
          }}
        />

        <div className="flex">
          <motion.div
            className="flex gap-10 md:gap-16 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {doubledMessages.map((message, index) => (
              <div key={index} className="flex items-center gap-10 md:gap-16">
                <span className="text-sm md:text-lg font-semibold text-[#8A8A8A] tracking-wide">
                  {message}
                </span>
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #FFF200, #F28C38)",
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
              "linear-gradient(90deg, transparent, rgba(242,140,56,0.35), rgba(255,242,0,0.35), transparent)",
          }}
        />
      </div>
    </section>
  );
}
