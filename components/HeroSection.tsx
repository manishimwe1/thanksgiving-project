import { ArrowRight, Check, Phone, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroClean = () => {
  return (
    <section className="relative bg-white pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content - Spans 7 cols */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="flex items-center gap-2 mb-6 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                <div className="flex -space-x-2">
                   {/* Placeholder avatars - replace with real images if available */}
                   <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
                   <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white"></div>
                   <div className="w-6 h-6 rounded-full bg-slate-500 border-2 border-white"></div>
                </div>
                <span className="text-xs font-bold text-orange-700">Trusted by 500+ locals in Kigali</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Expert Repairs for <br />
              <span className="relative whitespace-nowrap text-blue-600">
                <span className="relative">Modern Devices</span>
                {/* Underline svg decoration */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Don't let broken tech slow you down. We provide professional diagnostics and repair for laptops, smartphones, CCTV systems, and networking gear.
            </p>

            <div className="w-full flex flex-col sm:flex-row gap-4 mb-10">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
                Get a Free Quote
                <ArrowRight size={18} />
              </button>
              <a href="tel:+250000000" className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-white text-slate-700 border-2 border-slate-100 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all group">
                <Phone size={18} className="text-slate-400 group-hover:text-blue-600" />
                Call Technician
              </a>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-500">
                {['No Fix, No Fee', '90-Day Warranty', 'Original Parts'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <Check size={12} strokeWidth={4} />
                        </div>
                        {item}
                    </div>
                ))}
            </div>
          </div>

          {/* Image Content - Spans 5 cols */}
          <div className="lg:col-span-5 mt-12 lg:mt-0 relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ease-out border-4 border-white">
                <Image
                    src="/printer.jpeg"
                    alt="Technician working"
                    width={600}
                    height={700}
                    className="w-full h-full object-cover"
                />
                {/* Floating Rating Card */}
                <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg flex flex-col items-center border border-slate-100">
                    <div className="flex text-yellow-400 mb-1">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">Top Rated Service</span>
                </div>
             </div>
             
             {/* Background Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroClean;