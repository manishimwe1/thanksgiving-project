import { Mail, MapPin, Phone, ArrowRight, Clock, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const HighImpactOverlap = () => {
  return (
    <div className="relative font-sans">
      
      {/* 1. CTA SECTION: Dark, High-Impact, Taller for overlap */}
      <section className="relative pt-20 pb-48 lg:pt-28 lg:pb-64 bg-slate-950 overflow-hidden">
        
        {/* Abstract Background Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] opacity-30 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wide mb-8 shadow-lg backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Fast Turnaround Time</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Broken device? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Let's get it fixed today.
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't let technical issues disrupt your workflow. Our team in Nyarugenge is ready to provide immediate, professional support for all your devices.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link 
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:scale-[1.02] transition-all shadow-xl shadow-blue-900/40"
            >
              <Zap size={20} fill="currentColor" />
              Book a Repair Now
            </Link>
            
            <a 
              href="tel:+250783432438"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white border border-slate-800 px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all group"
            >
              <Phone size={20} className="text-slate-400 group-hover:text-white transition-colors" />
              <span>+250 783 432 438</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING CARDS SECTION */}
      <section className="bg-slate-50 pb-24">
        <div className="container mx-auto px-4 relative z-20 -mt-32 lg:-mt-40">
          <div className="grid gap-6 md:grid-cols-3">
            
            {/* Card 1: Phone */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Call Support</h3>
              <p className="text-slate-500 text-sm mb-4">Available Mon-Sat for urgent inquiries.</p>
              <div className="space-y-1">
                <a href="tel:+250783432438" className="block text-lg font-bold text-slate-700 hover:text-blue-600 transition-colors">
                  +250 783 432 438
                </a>
                <a href="tel:+250725900732" className="block text-lg font-bold text-slate-700 hover:text-blue-600 transition-colors">
                  0725 900 732
                </a>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-500 text-sm mb-4">Send us a photo of the issue for a quote.</p>
              <a href="mailto:augstinech2015@gmail.com" className="block text-lg font-bold text-slate-700 hover:text-orange-600 break-all transition-colors">
                augstinech2015@gmail.com
              </a>
            </div>

            {/* Card 3: Location */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Workshop</h3>
              <p className="text-slate-500 text-sm mb-4">Walk-ins are always welcome.</p>
              <div className="text-slate-700 font-bold text-lg">
                <p>Kigali – Nyarugenge</p>
                <p className="text-base font-medium text-slate-500 mt-1">Norvege (Karama Kigali)</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HighImpactOverlap;