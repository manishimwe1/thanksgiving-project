'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

interface NavbarProps {
  onOpenDiagnostic: () => void;
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
  

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-blue-600 text-white p-2 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                <Cpu size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                AUGU
              </span>
              <span className="text-[10px] font-medium text-blue-600 uppercase tracking-wider">
                Smart Service
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
            //   onClick={onOpenDiagnostic}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center gap-2"
            >
              <span>Get AI Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                //   onOpenDiagnostic();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg text-center font-semibold hover:bg-blue-700"
              >
                Get AI Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};