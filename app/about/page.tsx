import { Footer } from "@/components/footer"; // Assuming you have this
import { WhatsAppFloat } from "@/components/whatsapp-float"; // Assuming you have this
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  Users, 
  Clock, 
  ShieldCheck, 
  ThumbsUp, 
  ArrowRight, 
  Award 
} from "lucide-react";
import React from "react";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "We don't cut corners. We use genuine parts and follow manufacturer protocols to ensure your device lasts.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "We know downtime hurts. Our workflow is optimized to get your devices back to you as quickly as possible.",
    },
    {
      icon: ThumbsUp,
      title: "Customer First",
      description: "We explain technical issues in plain English and provide transparent pricing before we start any work.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our technicians are certified and continuously trained on the latest hardware and software developments.",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "1k+", label: "Repairs Done" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <>
      <main className=" bg-slate-50">
        
        {/* 1. HERO SECTION: Dark & High Tech */}
        <section className="relative bg-slate-50 py-24 md:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] opacity-30 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-bold mb-8 shadow-lg shadow-cyan-900/20">
              <Award size={16} />
              <span>Kigali's #1 Tech Repair Specialists</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">AUGU</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We are more than just a repair shop. We are your dedicated partners in keeping your digital life running smoothly.
            </p>
          </div>
        </section>

        {/* 2. COMPANY STORY: Split Layout */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Image Side with Decor */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-blue-600/10 z-10 hover:bg-transparent transition-colors"></div>
                  <img 
                    src="/professional-technology-repair-team-working-in-mod.jpg" 
                    alt="AUGU Team working" 
                    className="object-cover w-full h-[500px]" 
                  />
                </div>
                {/* Decorative Pattern */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10"></div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Driving Technology <br />
                  <span className="text-blue-600">Forward in Rwanda</span>
                </h2>
                
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                  <p>
                    <strong className="text-slate-900">AUGU Smart Electronic Service Ltd</strong> was established with a clear vision: to bring professional-grade IT support to everyone, from individuals with a broken laptop to businesses needing complex networking.
                  </p>
                  <p>
                    In an era where technology is essential, downtime is not an option. That's why we've built a team of certified technicians who excel in computer repair, CCTV security systems, and enterprise IT solutions.
                  </p>
                  <p>
                    We pride ourselves on transparency. No hidden fees, no fake parts, just honest work that gets you back online faster.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 flex gap-8">
                  <div>
                    <h4 className="text-3xl font-bold text-slate-900">100%</h4>
                    <p className="text-sm text-slate-500">Satisfaction</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-slate-900">12mo</h4>
                    <p className="text-sm text-slate-500">Warranty</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. MISSION & VISION: Modern Cards */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Mission Card */}
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target size={120} className="text-blue-600" />
                </div>
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <Target size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To provide reliable, fast, and professional technology solutions that empower individuals and businesses to leverage the full potential of their electronic devices and IT infrastructure.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-10 rounded-3xl shadow-xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Eye size={120} className="text-white" />
                </div>
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                  <Eye size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-blue-100 leading-relaxed">
                  To be Rwanda's most trusted and innovative technology service provider, known for excellence, integrity, and commitment to customer success in every service we deliver.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. VALUES: Clean Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
              <p className="text-slate-500 text-lg">
                The principles that guide every repair, installation, and interaction.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 hover:border-blue-100">
                  <div className="flex justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <value.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 text-center mb-3">{value.title}</h3>
                  <p className="text-sm text-slate-500 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. STATS STRIP: Dark Contrast */}
        <section className="py-16 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-500/30">
              {stats.map((stat, index) => (
                <div key={index} className="p-2">
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">{stat.number}</div>
                  <div className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE US: Checklist Grid */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose AUGU?</h2>
                <p className="text-slate-500">We set the standard for electronic services in Kigali.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
                {[
                  "Certified & Experienced Technicians",
                  "Genuine Parts & Quality Materials",
                  "Transparent & Competitive Pricing",
                  "Fast Turnaround Time",
                  "90-Day Warranty on Repairs",
                  "On-site & Remote Support",
                  "24/7 Emergency Services",
                  "Professional Training Programs",
                  "Data Privacy Guaranteed",
                  "Trusted by Local Businesses",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA SECTION: Overlapping Style */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
             <div className="bg-slate-900 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to experience the difference?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Whether it's a cracked screen or a server crash, our team is standing by to help you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50">
                            Get in Touch <ArrowRight size={20} />
                        </Link>
                        <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                            View All Services
                        </Link>
                    </div>
                </div>
             </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}