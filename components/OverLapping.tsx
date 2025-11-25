import { Mail, MapPin, Phone, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const CompactOverlap = () => {
  return (
    <div className="relative">
      
      {/* 1. CTA SECTION: Reduced padding */}
      <section className="relative pt-8 pb-16 lg:pt-10 lg:pb-36 rounded-2xl shadow-md shadow-slate-500 bg-slate-950 overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Broken device? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Let's get it fixed today.
            </span>
          </h2>

          <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
            Don't let technical issues disrupt your workflow. Our team in Nyarugenge is ready to provide immediate support.
          </p>

          {/* Buttons - Compact Row */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40"
            >
              <Zap size={18} fill="currentColor" />
              Book Repair
            </Link>
            
            <a 
              href="tel:+250783432438"
              className="flex items-center gap-2 bg-slate-900 text-white border border-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all"
            >
              <Phone size={18} />
              <span>+250 783 432 438</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING CARDS: Horizontal Layout */}
      <section className="bg-slate-50 pb-16">
        <div className="container mx-auto px-4 relative z-20 -mt-20">
          <div className="grid gap-4 lg:grid-cols-3">
            
            {/* Card 1: Phone */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Call Support</h3>
                <a href="tel:+250783432438" className="block font-bold text-slate-700 hover:text-blue-600">+250 783 432 438</a>
                <a href="tel:+250725900732" className="block text-sm text-slate-500 hover:text-blue-600">0725 900 732</a>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 shrink-0">
                <Mail size={24} />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                <a href="mailto:augstinech2015@gmail.com" className="block font-bold text-slate-700 hover:text-orange-600 truncate text-sm sm:text-base">
                  augstinech2015@gmail.com
                </a>
                <p className="text-xs text-slate-400 mt-1">Online Quote Available</p>
              </div>
            </div>

            {/* Card 3: Location */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                <p className="font-bold text-slate-700">Kigali – Nyarugenge</p>
                <p className="text-sm text-slate-500">Norvege (Karama Kigali)</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CompactOverlap;