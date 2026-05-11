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
    <section className="relative py-20 md:py-[120px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[900px] mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 gradient-text">
            Why We&apos;re Rebuilding
          </h2>
          <p className="text-lg md:text-xl leading-[1.8] text-[#C7C7C7] whitespace-pre-line">
            {`We are redesigning the entire PUMPRICE ecosystem from the ground up.

From lightning-fast ordering to smarter event planning,
scheduled deliveries,
festive bulk ordering,
nightlife experiences,
and premium convenience.`}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="glass-card rounded-[20px] p-5 md:p-6 flex flex-col items-center text-center gap-3 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(242,140,56,0.1)] flex items-center justify-center group-hover:bg-[rgba(242,140,56,0.2)] transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-[#F28C38]" />
              </div>
              <span className="text-sm md:text-base font-semibold text-[#C7C7C7] group-hover:text-white transition-colors duration-300">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
