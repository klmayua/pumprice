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
    <section className="relative py-20 md:py-[120px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[640px] mx-auto"
        >
          <div className="glass-card rounded-[28px] p-8 md:p-12">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 gradient-text">
                      Be First To Know
                    </h2>
                    <p className="text-[#8A8A8A] leading-relaxed whitespace-pre-line">
                      {`Join the relaunch waitlist
and get notified the moment
the new PUMPRICE experience goes live.`}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full h-16 rounded-2xl px-5 text-white placeholder-[#8A8A8A] outline-none transition-all duration-300"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border:
                            focusedField === "name"
                              ? "1px solid rgba(255,242,0,0.4)"
                              : "1px solid rgba(255,255,255,0.08)",
                          boxShadow:
                            focusedField === "name"
                              ? "0 0 20px rgba(255,242,0,0.1)"
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
                        className="w-full h-16 rounded-2xl px-5 text-white placeholder-[#8A8A8A] outline-none transition-all duration-300"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border:
                            focusedField === "email"
                              ? "1px solid rgba(255,242,0,0.4)"
                              : "1px solid rgba(255,255,255,0.08)",
                          boxShadow:
                            focusedField === "email"
                              ? "0 0 20px rgba(255,242,0,0.1)"
                              : "none",
                        }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-16 rounded-[18px] font-bold text-[#050505] text-lg relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(242,140,56,0.3)]"
                      style={{
                        background:
                          "linear-gradient(135deg, #FFF200, #F28C38)",
                      }}
                    >
                      Notify Me
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-[rgba(255,242,0,0.1)] border border-[rgba(255,242,0,0.2)] flex items-center justify-center mx-auto mb-6"
                    style={{
                      boxShadow: "0 0 40px rgba(255,242,0,0.2)",
                    }}
                  >
                    <Check className="w-10 h-10 text-[#FFF200]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">
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
