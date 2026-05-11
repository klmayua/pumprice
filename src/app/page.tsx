"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import SocialStrip from "@/components/SocialStrip";
import RedevelopmentMessage from "@/components/RedevelopmentMessage";
import FeaturesGrid from "@/components/FeaturesGrid";
import WaitlistSignup from "@/components/WaitlistSignup";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <HeroSection />
        <SocialStrip />
        <RedevelopmentMessage />
        <FeaturesGrid />
        <WaitlistSignup />
        <Footer />
      </div>

      <ChatbotButton />
    </div>
  );
}
