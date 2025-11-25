"use client";

import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import HighImpactOverlap from "@/components/OverLapping";
import OverlappingContact from "@/components/OverLapping";
import ServicesSection from "@/components/SevicesSection";
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

        {/* About Section */}
        <AboutSection />

        {/* <ContactCTA/> */}
        <HighImpactOverlap/>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
