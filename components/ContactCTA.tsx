import { Mail, MapPin, Phone, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactCTA = () => {
  return (
    <>
      {/* 1. CTA SECTION: Dark & Urgent */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-bold uppercase tracking-wide mb-6">
            <Clock size={14} />
            <span>Fast Turnaround Time</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Broken device? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Let's get it fixed today.
            </span>
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't let technical issues disrupt your workflow. Our team in Nyarugenge is ready to provide immediate support.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link 
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-600/25"
            >
              Book a Repair
              <ArrowRight size={20} />
            </Link>
            
            <a 
              href="tel:+250783432438"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Phone size={20} className="text-cyan-400" />
              <span>+250 783 432 438</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO SECTION: Clean Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Card 1: Phone */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Call Support</h3>
              <div className="space-y-2">
                <a href="tel:+250783432438" className="block text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  +250 783 432 438
                </a>
                <a href="tel:+250725900732" className="block text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  +250 725 900 732
                </a>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Email Us</h3>
              <p className="text-slate-500 text-sm mb-4">Send us a photo of your issue for a quick quote.</p>
              <a href="mailto:augstinech2015@gmail.com" className="text-slate-900 font-bold hover:text-orange-600 break-all transition-colors">
                augstinech2015@gmail.com
              </a>
            </div>

            {/* Card 3: Location */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Visit Workshop</h3>
              <p className="text-slate-600 font-medium mb-1">
                Kigali – Nyarugenge
              </p>
              <p className="text-slate-500 text-sm">
                Norvege (Karama Kigali)
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCTA;