"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center glass-premium animate-chatbot-pulse cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.4), 0 0 30px rgba(242,140,56,0.2)",
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 text-[#F28C38]" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5 text-[#F28C38]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Expanded chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[300px] glass-panel rounded-[24px] p-5"
            style={{
              boxShadow:
                "0 16px 64px rgba(0,0,0,0.5), 0 0 40px rgba(242,140,56,0.1)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[rgba(242,140,56,0.15)] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#F28C38]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">PUMPRICE Support</p>
                <p className="text-xs text-[#8A8A8A]">We&apos;ll reply shortly</p>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-4 mb-3">
              <p className="text-sm text-[#C7C7C7]">
                Hi there! The new PUMPRICE platform is launching soon. How can we help you today?
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 h-10 rounded-xl px-3 text-sm text-white placeholder-[#8A8A8A] outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                readOnly
              />
              <button
                className="h-10 px-4 rounded-xl font-semibold text-xs text-[#050505]"
                style={{
                  background: "linear-gradient(135deg, #FFF200, #F28C38)",
                }}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
