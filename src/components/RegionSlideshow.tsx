"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Regions explicitly ordered per your request. Sanur added.
const regions = [
  { name: "Ubud", file: "/ubud.jpg", link: "/regions/ubud" },
  { name: "Uluwatu", file: "/uluwatu.jpg", link: "/regions/uluwatu" },
  { name: "Sidemen", file: "/sidemen.jpg", link: "/regions/sidemen" },
  { name: "Canggu", file: "/canggu.jpg", link: "/regions/canggu" },
  { name: "Amed", file: "/amed1.jpg", link: "/regions/amed" },
  { name: "Sanur", file: "/sanur.jpg", link: "/regions/sanur" },
  { name: "Seminyak", file: "/seminyak.jpg", link: "/regions/seminyak" },
  { name: "Nusa Penida", file: "/nusapenida.jpg", link: "/regions/nusapenida" },
  { name: "Nusa Dua", file: "/nusadua.jpg", link: "/regions/nusadua" },
  { name: "Lovina", file: "/lovina.jpg", link: "/regions/lovina" }
];

export default function RegionSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  // 3-Second Auto-Play Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % regions.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]); // Added dependency to reset timer on manual click

  const currentRegion = regions[currentIndex];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents clicking the slide link
    setCurrentIndex((prevIndex) => (prevIndex + 1) % regions.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents clicking the slide link
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? regions.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[500px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl bg-[#171527] group cursor-pointer"
         onClick={() => router.push(currentRegion.link)}>
      
      {/* Background Images */}
      {regions.map((region, index) => (
        <div
          key={region.name}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={region.file}
            alt={`Explore ${region.name}`}
            fill
            priority={index === 0}
            className="object-cover object-center transition-transform duration-[4000ms] ease-linear scale-100 group-hover:scale-105"
          />
        </div>
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#171527]/90 via-[#171527]/30 to-transparent pointer-events-none z-20" />

      {/* Region Typography */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col md:flex-row items-end justify-between pointer-events-none z-30">
        <div>
          <span className="block text-[#10A5B5] font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-2 drop-shadow-md">
            Destination
          </span>
          <h2 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-xl tracking-tight">
            {currentRegion.name}
          </h2>
        </div>
        
        <div className="hidden md:flex items-center gap-4 text-white group-hover:text-[#10A5B5] transition-colors mt-6">
          <span className="font-bold tracking-widest uppercase text-sm">Explore Region</span>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
      </div>

      {/* Navigation Arrows (Hover visible) */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/20 hover:bg-[#10A5B5] text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all shadow-lg border border-white/10 opacity-0 group-hover:opacity-100"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/20 hover:bg-[#10A5B5] text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all shadow-lg border border-white/10 opacity-0 group-hover:opacity-100"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress Indicators */}
      <div className="absolute top-6 right-6 flex gap-2 z-30">
        {regions.map((_, index) => (
          <div 
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-8 bg-[#10A5B5]" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}