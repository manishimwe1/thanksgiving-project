"use client";

import React, { useState } from "react";
import { X, ZoomIn, Filter, Layers, ArrowRight, Camera } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";

// 1. SAMPLE DATA
// "bentoClass" defines the size of the image in the 'All' view
const galleryItems = [
  { 
    id: 1, 
    src: "/inshop.jpeg", 
    category: "Workshop", 
    title: "The HQ Command Center", 
    bentoClass: "md:col-span-2 md:row-span-2" // Big Feature Item
  },
  { 
    id: 2, 
    src: "/printer.jpeg", 
    category: "Repairs", 
    title: "Precision Micro-soldering", 
    bentoClass: "md:col-span-1 md:row-span-1" // Standard
  },
  { 
    id: 3, 
    src: "/printer.jpeg", 
    category: "Networking", 
    title: "Server Rack Management", 
    bentoClass: "md:col-span-1 md:row-span-2" // Tall Item
  },
  { 
    id: 4, 
    src: "/install.jpeg", 
    category: "CCTV", 
    title: "Security System Setup", 
    bentoClass: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 5, 
    src: "/network.jpeg", 
    category: "Repairs", 
    title: "Screen Replacement", 
    bentoClass: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 6, 
    src: "/sitting.jpeg", 
    category: "Workshop", 
    title: "Team Collaboration", 
    bentoClass: "md:col-span-2 md:row-span-1" // Wide Item
  },
  { 
    id: 7, 
    src: "/maintance.jpeg", 
    category: "CCTV", 
    title: "Outdoor Surveillance", 
    bentoClass: "md:col-span-1 md:row-span-1" 
  },
];

const categories = ["All", "Repairs", "Networking", "CCTV", "Workshop"];

export default function GalleryBentoPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryItems[0]>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <main className="bg-slate-50 min-h-screen ">
        
        {/* 1. HEADER: Dark & Modern */}
        <section className="relative py-10 lg:py-16 overflow-hidden">
          {/* Abstract Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wide mb-6 shadow-xl">
               <Camera size={14} />
               <span>Visual Proof of Quality</span>
             </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Showcase</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of complex repairs, enterprise installations, and daily operations at AUGU Smart Electronic Service.
            </p>
          </div>
        </section>

        {/* 2. GALLERY SECTION */}
        <section className="py-8 md:py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-blue-900/10 scale-105"
                      : "bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
                  }`}
                >
                  {cat === "All" ? <Layers size={14} /> : <Filter size={14} />}
                  {cat}
                </button>
              ))}
            </div>

            {/* THE BENTO GRID */}
            {/* 
               - If 'All', use 'auto-rows' and custom spans.
               - If Filtered, use uniform grid to prevent holes.
            */}
            <div className={`grid gap-4 ${
                activeCategory === "All" 
                ? "grid-cols-1 md:grid-cols-3 auto-rows-[280px]" 
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px]"
            }`}>
              
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`
                    group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-200
                    ${activeCategory === "All" ? item.bentoClass : ""}
                    hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-1
                  `}
                  onClick={() => setSelectedImage(item)}
                >
                  {/* Image */}
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Content (Bottom Left) */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded-lg text-white text-[10px] font-bold uppercase tracking-wider mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                         <span>View Project</span>
                         <ZoomIn size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <Camera size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No images found</h3>
                <p className="text-slate-500">We haven't uploaded images for this category yet.</p>
              </div>
            )}

          </div>
        </section>

        {/* CTA STRIP */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Inspired by our work?</h2>
             <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:scale-105 transition-all shadow-xl shadow-blue-600/20">
                Request a Service <ArrowRight size={20} />
             </Link>
          </div>
        </section>

      </main>

      {/* LIGHTBOX OVERLAY */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-50">
            <X size={24} />
          </button>
          
          <div 
            className="max-w-6xl w-full max-h-[90vh] relative flex flex-col items-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[80vh] object-contain bg-black" 
                />
            </div>
            
            <div className="mt-6 text-center">
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-2 block">
                  {selectedImage.category}
              </span>
              <h3 className="text-white text-2xl md:text-3xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}