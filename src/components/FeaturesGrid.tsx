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
    description:
      "Plan your entire event from one dashboard. Schedule deliveries, pick curated bundles, and never run dry again.",
    icon: PartyPopper,
    visual: "party",
  },
  {
    title: "Festive Bulk Orders",
    description:
      "Christmas, Detty December, corporate events — lock in your stock early and skip the last-minute rush.",
    icon: Gift,
    visual: "festive",
  },
  {
    title: "Faster Deliveries",
    description:
      "Smarter dispatch routes. Real-time tracking. Cold-chain handling. Your drinks arrive exactly how they left.",
    icon: Rocket,
    visual: "delivery",
  },
  {
    title: "Premium Experience",
    description:
      "A checkout flow that feels like a velvet rope. Dark mode, golden accents, and zero friction from cart to door.",
    icon: Sparkles,
    visual: "premium",
  },
  {
    title: "Smart Recommendations",
    description:
      "Mood-based discovery. Occasion-based curation. Taste-profile matching. Let the algorithm find your next favorite bottle.",
    icon: Brain,
    visual: "smart",
  },
  {
    title: "VIP Experiences",
    description:
      "Exclusive early access, private event invites, priority delivery windows, and members-only pricing.",
    icon: Crown,
    visual: "vip",
  },
];

function VisualAccent({ type }: { type: string }) {
  const colors: Record<string, string> = {
    party: "from-[#FF8A2A]/10 to-transparent",
    festive: "from-[#F28C38]/10 to-transparent",
    delivery: "from-[#FFF200]/8 to-transparent",
    premium: "from-[#FFB347]/10 to-transparent",
    smart: "from-[#FFE600]/8 to-transparent",
    vip: "from-[#FFD86B]/10 to-transparent",
  };

  return (
    <div
      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${colors[type] || "from-[#F28C38]/10 to-transparent"} rounded-full blur-2xl pointer-events-none`}
    />
  );
}

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 gradient-text">
            What&apos;s Coming
          </h2>
          <p className="text-[#8A8A8A] text-base md:text-lg max-w-[600px] mx-auto">
            The next era of premium drinks ordering. Built for nightlife.
            Built for Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.25 },
              }}
              className="group relative"
            >
              <div
                className="rounded-[24px] p-5 md:p-6 h-full transition-all duration-500 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                }}
              >
                <VisualAccent type={item.visual} />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 40%)",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    padding: "1px",
                    background:
                      "linear-gradient(135deg, rgba(255,242,0,0.25), rgba(242,140,56,0.25))",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 40px rgba(242,140,56,0.04)",
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-11 h-11 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: "rgba(255,242,0,0.08)",
                      border: "1px solid rgba(255,242,0,0.12)",
                      boxShadow: "0 0 24px rgba(255,242,0,0.06)",
                    }}
                  >
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#FFF200]" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-[#8A8A8A] leading-relaxed group-hover:text-[#C7C7C7] transition-colors duration-300">
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
