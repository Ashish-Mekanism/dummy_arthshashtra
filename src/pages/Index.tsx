import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-arthashastra-navy flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesHero />
        <ServicesList />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
