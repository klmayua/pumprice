"use client";

import { motion } from "framer-motion";
import {
  PartyPopper,
  Gift,
  Rocket,
  Sparkles,
  Brain,
  Crown,
} from "lucide-react";

const items = [
  {
    title: "Party Ordering",
    description: "Plan events and schedule drinks in advance.",
    icon: PartyPopper,
  },
  {
    title: "Festive Bulk Orders",
    description: "Pre-order Christmas and celebration supplies early.",
    icon: Gift,
  },
  {
    title: "Faster Deliveries",
    description: "Optimized logistics and smarter dispatching.",
    icon: Rocket,
  },
  {
    title: "Premium Experience",
    description: "Luxury ordering experience built for nightlife culture.",
    icon: Sparkles,
  },
  {
    title: "Smart Recommendations",
    description: "Discover drinks based on mood, occasion, and taste.",
    icon: Brain,
  },
  {
    title: "VIP Experiences",
    description: "Exclusive deals, event access, and premium perks.",
    icon: Crown,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative py-20 md:py-[120px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 gradient-text">
            What&apos;s Coming
          </h2>
          <p className="text-[#8A8A8A] text-lg max-w-[600px] mx-auto">
            A glimpse into the future of premium drinks ordering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                rotate: 1,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div
                className="glass-card rounded-[28px] p-8 h-full transition-all duration-500 relative overflow-hidden"
                style={{
                  boxShadow: "0 0 30px rgba(242,140,56,0.05)",
                }}
              >
                {/* Gradient border effect on hover */}
                <div
                  className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    padding: "1px",
                    background:
                      "linear-gradient(135deg, rgba(255,242,0,0.3), rgba(242,140,56,0.3))",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(242,140,56,0.1) 0%, transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[rgba(255,242,0,0.08)] border border-[rgba(255,242,0,0.15)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-[#FFF200]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#8A8A8A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
