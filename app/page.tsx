"use client";

import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";
import FAQSection from "@/components/FAQSection";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/HowItWork";
import HighImpactOverlap from "@/components/OverLapping";
import CompactOverlap from "@/components/OverLapping";
import OverlappingContact from "@/components/OverLapping";
import ServicesSection from "@/components/SevicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        <ProcessSection/>

        {/* About Section */}
        <AboutSection />

        <TestimonialsSection/>

        <FAQSection/>

        {/* <ContactCTA/> */}
        <CompactOverlap/>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
