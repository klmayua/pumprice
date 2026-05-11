"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export default function WaitlistSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="relative py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(242,140,56,0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
            top: "20%",
            left: "10%",
          }}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,242,0,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
            bottom: "10%",
            right: "15%",
          }}
          animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[640px] mx-auto"
        >
          <div
            className="rounded-[28px] p-6 md:p-8 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 16px 64px rgba(0,0,0,0.4), 0 0 60px rgba(242,140,56,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,242,0,0.3), rgba(242,140,56,0.3), transparent)",
              }}
            />

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 30%)",
              }}
            />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="text-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-11 h-11 rounded-xl bg-[rgba(255,242,0,0.08)] border border-[rgba(255,242,0,0.15)] flex items-center justify-center mx-auto mb-3"
                      style={{
                        boxShadow: "0 0 24px rgba(255,242,0,0.08)",
                      }}
                    >
                      <Sparkles className="w-5 h-5 text-[#FFF200]" />
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-2 gradient-text">
                      Be First Inside The New PUMPRICE
                    </h2>
                    <p className="text-[#8A8A8A] text-sm md:text-base leading-relaxed">
                      We&apos;re rebuilding the entire experience for people who care
                      about better ordering, smoother hosting, smarter
                      deliveries, and premium drinks culture.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full h-[52px] md:h-[56px] rounded-2xl px-5 text-white placeholder-[#8A8A8A] outline-none transition-all duration-300 text-sm md:text-base"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border:
                            focusedField === "name"
                              ? "1px solid rgba(255,242,0,0.4)"
                              : "1px solid rgba(255,255,255,0.08)",
                          boxShadow:
                            focusedField === "name"
                              ? "0 0 24px rgba(255,242,0,0.1)"
                              : "none",
                        }}
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full h-[52px] md:h-[56px] rounded-2xl px-5 text-white placeholder-[#8A8A8A] outline-none transition-all duration-300 text-sm md:text-base"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border:
                            focusedField === "email"
                              ? "1px solid rgba(255,242,0,0.4)"
                              : "1px solid rgba(255,255,255,0.08)",
                          boxShadow:
                            focusedField === "email"
                              ? "0 0 24px rgba(255,242,0,0.1)"
                              : "none",
                        }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-[52px] md:h-[56px] rounded-[18px] font-bold text-[#050505] text-base md:text-lg relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(242,140,56,0.35)]"
                      style={{
                        background: "linear-gradient(135deg, #FFF200, #F28C38)",
                      }}
                    >
                      Get Early Access
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8 relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-[72px] h-[72px] rounded-full bg-[rgba(255,242,0,0.1)] border border-[rgba(255,242,0,0.2)] flex items-center justify-center mx-auto mb-5"
                    style={{
                      boxShadow: "0 0 40px rgba(255,242,0,0.15)",
                    }}
                  >
                    <Check className="w-9 h-9 text-[#FFF200]" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    You&apos;re officially on the list.
                  </h3>
                  <p className="text-[#8A8A8A]">
                    We&apos;ll notify you the moment we go live.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
