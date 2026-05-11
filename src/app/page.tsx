"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import RedevelopmentMessage from "@/components/RedevelopmentMessage";
import FeaturesGrid from "@/components/FeaturesGrid";
import WaitlistSignup from "@/components/WaitlistSignup";
import SocialStrip from "@/components/SocialStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <HeroSection />
        <CountdownTimer />
        <RedevelopmentMessage />
        <FeaturesGrid />
        <WaitlistSignup />
        <SocialStrip />
        <Footer />
      </div>
    </div>
  );
}
