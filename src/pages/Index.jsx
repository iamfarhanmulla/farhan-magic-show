import { useState, useCallback } from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import SplashScreen from "@/components/portfolio/SplashScreen";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`min-h-screen bg-background ${splashDone ? "" : "invisible"}`}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
