"use client";

import { Mail, MapPin, Menu, Phone, X, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  onOpenDiagnostic?: () => void;
}

export const Navbar = ({ onOpenDiagnostic }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* 1. TOP BAR (Contact Info) - Disappears on scroll for cleaner look */}
      <div
        className={`bg-slate-900 text-slate-300 text-xs w-full py-3 transition-all duration-300 hidden md:block ${
          isScrolled ? "-mt-10" : "mt-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="mailto:augstintech2015@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={14} className="text-blue-500" />
              <span>augstintech2015@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-blue-500" />
              <span>Kigali, Rwanda</span>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <span className="opacity-60">Need urgent repairs?</span>
            <a
              href="tel:+250788434238"
              className="flex items-center gap-2 font-bold text-white hover:text-blue-400 transition-colors"
            >
              <Phone size={14} />
              <span>0788 434 238</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white backdrop-blur-xl border-white/20 py-2 shadow-lg"
            : "bg-white backdrop-blur-lg border-white/10 py-4 shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* LOGO SECTION */}
            <Link href="/" className="relative flex items-center gap-2 group">
              {/* 
                  Using a fixed height container for the logo ensures 
                  it doesn't break the layout, while 'object-contain' 
                  keeps the logo aspect ratio correct.
               */}
              <div className="relative h-12 w-48 md:h-14 md:w-[250px] transition-all duration-300 rounded-2xl overflow-hidden">
                <Image
                  src="/logo3.png" // Ensure this matches your file name exactly
                  alt="AUGU Smart Electronic Service"
                  fill
                  className="object-contain object-left"
                  priority
                  
                />
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-all"
                >
                  {link.name}
                </Link>
              ))}

              <div className="ml-4 pl-4 border-l border-slate-200">
                <button
                  //   onClick={onOpenDiagnostic}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.02] transition-all"
                >
                  <Zap size={16} fill="currentColor" />
                  <span>Get Quote</span>
                </button>
              </div>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div
          className={`md:hidden absolute w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
            isMobileMenuOpen
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 h-0"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-slate-100">
              <div className="flex flex-col gap-3">
                <button
                  // onClick={onOpenDiagnostic}
                  className="w-full bg-blue-600 text-white px-5 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <Zap size={18} /> Get AI Quote
                </button>

                {/* Mobile Contact Quick Links */}
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <a
                    href="tel:+250788434238"
                    className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-slate-700 font-semibold text-sm"
                  >
                    <Phone size={16} /> Call Us
                  </a>
                  <a
                    href="https://wa.me/250788434238"
                    className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-slate-700 font-semibold text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
