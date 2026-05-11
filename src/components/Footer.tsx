"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Top border glow */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(242,140,56,0.3), rgba(255,242,0,0.3), transparent)",
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28C38] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F28C38]" />
            </span>
            <span className="text-sm text-[#8A8A8A] tracking-wide">
              Platform redevelopment in progress
            </span>
          </motion.div>

          {/* Email */}
          <motion.a
            href="mailto:info@pumprice.com.ng"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-2 text-[#C7C7C7] hover:text-[#F28C38] transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">info@pumprice.com.ng</span>
          </motion.a>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-[#8A8A8A]"
          >
            © 2026 PUMPRICE
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
