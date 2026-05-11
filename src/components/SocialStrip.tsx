"use client";

import { motion } from "framer-motion";

const messages = [
  "Premium drinks experiences",
  "Smarter ordering for modern Africa",
  "Event-ready convenience",
  "Bulk celebration planning",
  "Faster premium deliveries",
  "Drinks culture, elevated",
  "Designed for how Africa celebrates",
  "Seamless hosting experiences",
];

const colors = ["#FFF200", "#F28C38", "#FFD86B", "#FFFFFF"];

export default function SocialStrip() {
  const doubledMessages = [...messages, ...messages];

  return (
    <div
      className="absolute top-0 left-0 right-0 z-40 overflow-hidden"
      style={{
        height: "44px",
        background: "rgba(10,10,10,0.55)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-center h-full">
        <motion.div
          className="flex items-center gap-8 md:gap-10 whitespace-nowrap pl-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubledMessages.map((message, index) => (
            <div key={index} className="flex items-center gap-8 md:gap-10">
              <span
                className="text-[14px] font-medium tracking-[0.01em]"
                style={{ color: colors[index % colors.length] }}
              >
                {message}
              </span>
              <span
                className="w-[4px] h-[4px] rounded-full flex-shrink-0"
                style={{
                  background: "#F28C38",
                  boxShadow: "0 0 6px rgba(242,140,56,0.5)",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
