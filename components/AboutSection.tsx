import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Wrench } from "lucide-react";
import Image from "next/image"; // Assuming Next.js, or use <img> if standard React
import Link from "next/link";
import React from "react";

const AboutMasonry = () => {
  const features = [
    { text: "Certified Technicians", icon: Wrench },
    { text: "Fast Turnaround", icon: Clock },
    { text: "Quality Guaranteed", icon: ShieldCheck },
    { text: "On-site Support", icon: CheckCircle2 },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* VISUAL SIDE: The Image Mosaic */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Tall Image (Left) */}
              <div className="relative row-span-2 h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/inshop.jpeg" // Replace with Workshop wide shot
                  alt="AUGU Workshop"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white font-medium text-sm">
                  Our Kigali Workshop
                </div>
              </div>

              {/* Top Right Image */}
              <div className="relative h-[190px] lg:h-[240px] rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/printer.jpeg" // Replace with Motherboard/Soldering shot
                  alt="Precision Repair"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="relative h-[190px] lg:h-[240px] rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/inshop.jpeg" // Replace with CCTV or Team shot
                  alt="On-site service"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Years Experience Badge */}
                <div className="absolute inset-0 bg-blue-900/80 flex flex-col items-center justify-center text-white p-4 text-center group-hover:bg-blue-800/90 transition-colors">
                  <span className="text-4xl font-bold">5+</span>
                  <span className="text-sm font-medium opacity-80">Years Serving<br/>Rwanda</span>
                </div>
              </div>
            </div>
            
            {/* Decorative blob behind */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-100/50 blur-3xl rounded-full"></div>
          </div>

          {/* TEXT SIDE */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
              About AUGU Systems
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              We bring your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Technology back to life.
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              AUGU Smart Electronic Service Ltd is Kigali's premier technology
              repair hub. We don't just fix devices; we provide peace of mind. 
              From intricate motherboard soldering to large-scale enterprise networking, 
              our team ensures your tech works as hard as you do.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <item.icon size={16} strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-xl hover:bg-slate-800 hover:shadow-lg focus:outline-none ring-offset-2 focus:ring-2 ring-slate-900">
                More About Us
              </Link>
              <Link href="/gallery" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 focus:outline-none">
                View Gallery
                <ArrowRight className="w-5 h-5 ml-2 -mr-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMasonry;