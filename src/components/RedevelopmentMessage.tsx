"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Truck,
  Calendar,
  Gift,
  Smartphone,
  CreditCard,
  Eye,
  Award,
} from "lucide-react";

const features = [
  { icon: Zap, label: "Smarter Ordering System" },
  { icon: Truck, label: "Improved Delivery Engine" },
  { icon: Calendar, label: "Event & Party Ordering" },
  { icon: Gift, label: "Festive Bulk Preorders" },
  { icon: Smartphone, label: "Improved Mobile Experience" },
  { icon: CreditCard, label: "Premium Checkout Flow" },
  { icon: Eye, label: "Better Inventory Visibility" },
  { icon: Award, label: "Future Loyalty Rewards" },
];

export default function RedevelopmentMessage() {
  return (
    <section className="relative py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[900px] mx-auto text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 gradient-text">
            Why We&apos;re Rebuilding
          </h2>
          <p className="text-base md:text-lg leading-[1.7] text-[#C7C7C7]">
            We&apos;re tearing it all down and rebuilding from zero. Not because we
            have to — because{" "}
            <span className="text-white font-semibold">
              nightlife in Africa deserves better
            </span>
            . Faster orders. Smarter logistics. Bulk event planning. Scheduled
            deliveries. The whole ecosystem, reimagined for the culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
              }}
              className="group cursor-default relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 40%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"
                style={{
                  boxShadow: "inset 0 0 30px rgba(242,140,56,0.06)",
                }}
              />

              <div className="relative z-10 p-3.5 md:p-4 flex flex-col items-center text-center gap-2 md:gap-2.5">
                <div
                  className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[rgba(242,140,56,0.1)] flex items-center justify-center group-hover:bg-[rgba(242,140,56,0.2)] transition-colors duration-300"
                  style={{
                    boxShadow: "0 0 20px rgba(242,140,56,0.08)",
                  }}
                >
                  <feature.icon className="w-5 h-5 md:w-[22px] md:h-[22px] text-[#F28C38]" />
                </div>
                <span className="text-xs md:text-[13px] font-semibold text-[#C7C7C7] group-hover:text-white transition-colors duration-300 leading-tight">
                  {feature.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
