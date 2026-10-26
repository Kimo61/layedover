'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CREW_PACKAGES = [
  { 
    id: 1, 
    title: 'The Ultimate Crew Leave', 
    duration: '10 Days / 9 Nights', 
    route: 'Canggu • Uluwatu • Ubud',
    image: '/therest.jpeg', 
    desc: 'No roster. No briefing. No passengers. VIP welcome, luxury beach clubs, jungle ATV, paragliding, and absolute freedom.', 
    tags: ['Exclusive', 'Freedom'],
    price: '$1,500'
  },
  { 
    id: 2, 
    title: 'Crew Days Off', 
    duration: '4 Days / 3 Nights', 
    route: 'Seminyak • Ubud • Uluwatu',
    image: '/uluwatu.jpg', 
    desc: 'The perfect short-haul escape. Welcome massages, VIP beach clubs, jungle ATV, Melasti beach, and a guaranteed luxury reset.', 
    tags: ['Short Haul', 'Reset'],
    price: '$499'
  },
  { 
    id: 3, 
    title: 'Custom Annual Leave', 
    duration: 'Flexible Duration', 
    route: 'Your Route, Your Rules',
    image: '/ubud.jpg', 
    desc: 'Your layover, your way. Tell us exactly what you want to do and our concierge will build and execute your dream itinerary seamlessly.', 
    tags: ['Bespoke', 'Flexible'],
    price: '$999'
  }
];

export default function CabinCrewPackagesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#171527] text-white pt-24 pb-48 px-8 md:px-24 relative overflow-hidden">
      
      {/* Aviation Radar / Navigation Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      {/* Subtle Glowing Radar Sweep Effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#10A5B5]/5 to-transparent blur-[100px] pointer-events-none z-0"></div>

      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto w-full mb-16 text-center relative z-10 flex flex-col items-center">
        <Link href="/draft" className="text-gray-400 hover:text-[#10A5B5] text-sm font-bold inline-flex items-center gap-2 mb-8 transition-colors self-start md:self-center absolute left-0 top-0">
          <span>&larr;</span> Back to Home
        </Link>
        
        {/* Flight Status Telemetry Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/40 border border-[#10A5B5]/30 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(16,165,181,0.15)] mt-12 md:mt-0">
           <span className="w-2.5 h-2.5 rounded-full bg-[#10A5B5] animate-pulse"></span>
           <span className="text-[#10A5B5] text-[10px] font-black uppercase tracking-widest">Status: Cleared for Layover</span>
        </div>

        <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm block mb-3">Cabin Crew Exclusives</span>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6 drop-shadow-lg">
          Crew Packages
        </h1>
        <p className="text-gray-300 text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-2">
          You spend your life taking care of passengers.
        </p>
        <p className="text-[#D4AF37] text-xl font-extrabold uppercase tracking-widest max-w-2xl mx-auto drop-shadow-md">
          This time, it’s all about you.
        </p>
      </div>

      {/* 2. Boarding Pass Style Interactive Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {CREW_PACKAGES.map((pkg) => (
          <div 
            key={pkg.id} 
            className="relative group hover:scale-[1.04] transition-transform duration-700 cursor-pointer"
          >
            {/* LED Ambient Backlight */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-[#10A5B5] opacity-25 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
            
            {/* Boarding Pass Container */}
            <div className="relative bg-[#1F1D36] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group-hover:border-[#10A5B5]/50 flex flex-col h-[580px] z-10 transition-colors duration-700">
              
              {/* Top Banner (First Class Ribbon) */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gray-900 to-black text-[#D4AF37] font-black px-5 py-2 rounded-bl-2xl text-xs z-30 shadow-[0_4px_15px_rgba(0,0,0,0.5)] uppercase tracking-widest border-b border-l border-[#D4AF37]/30 flex items-center gap-2">
                <svg className="w-3 h-3 text-[#D4AF37] transform rotate-45" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                PRIORITY
              </div>

              {/* Top Half: Image */}
              <div className="relative h-[45%] w-full overflow-hidden">
                <Image 
                  src={pkg.image} 
                  fill 
                  alt={pkg.title} 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D36] via-[#1F1D36]/40 to-transparent"></div>
                
                {/* Arrival Tag overlay */}
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-lg">
                    <span className="text-white font-black text-2xl tracking-tighter">DPS</span>
                  </div>
                  <span className="text-[#10A5B5] font-bold text-[10px] uppercase tracking-widest bg-black/40 px-2 py-1 rounded">Bali Arrival</span>
                </div>
              </div>

              {/* Perforated Boarding Pass Divider */}
              <div className="relative h-0 z-20">
                {/* Left Cutout - matches page bg color #171527 */}
                <div className="absolute -top-3 -left-4 w-6 h-6 bg-[#171527] rounded-full shadow-inner border-r border-white/5"></div>
                {/* Right Cutout */}
                <div className="absolute -top-3 -right-4 w-6 h-6 bg-[#171527] rounded-full shadow-inner border-l border-white/5"></div>
                {/* Dashed Line */}
                <div className="absolute top-0 left-4 right-4 border-t-2 border-dashed border-white/10"></div>
              </div>

              {/* Bottom Half: Details */}
              <div className="relative p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.tags.map(tag => (
                    <span key={tag} className="bg-[#10A5B5]/10 text-[#10A5B5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#10A5B5]/20 group-hover:border-[#10A5B5]/40 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mb-2">
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-wider block">{pkg.duration}</span>
                  <span className="text-[#D4AF37] text-[10px] font-extrabold uppercase tracking-widest block mt-1">{pkg.route}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{pkg.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {pkg.desc}
                </p>
              </div>

              {/* Boarding Pass Digital Barcode Footer */}
              <div className="mt-auto border-t border-white/5 p-5 bg-black/20 flex justify-between items-center relative overflow-hidden">
                {/* Fake Barcode Lines */}
                <div className="flex gap-[3px] items-center opacity-20">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`h-6 bg-white ${i%3===0 ? 'w-1.5' : i%2===0 ? 'w-0.5' : 'w-1'}`}></div>
                  ))}
                </div>
                
                <div className="text-right">
                  <span className="block text-[8px] text-gray-500 uppercase tracking-[0.2em] font-bold">Class</span>
                  <span className="block text-xs text-white uppercase tracking-widest font-black">Crew exclusive</span>
                </div>
              </div>

              {/* Hidden Action Overlay - Appears on Hover */}
              <div className="absolute bottom-0 left-0 w-full h-[60%] p-6 pt-16 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-0 group-hover:delay-[300ms] bg-gradient-to-t from-[#10A5B5] via-[#10A5B5]/95 to-transparent z-40 flex flex-col justify-end backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4 text-white px-2">
                  <span className="font-bold text-sm uppercase tracking-wider">Crew Rate</span>
                  <span className="font-black text-2xl">{pkg.price}</span>
                </div>
                <Link 
                  href="/contact" 
                  className="w-full bg-white text-[#171527] hover:bg-gray-100 text-center font-black uppercase tracking-widest py-4 rounded-xl shadow-2xl flex justify-center items-center gap-2 transition-colors transform hover:scale-[1.02]"
                >
                  Secure Leave &rarr;
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* 3. HIGH-IMPACT CYAN FLOATING PRICE BANNER */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl pointer-events-none">
        <div className="relative bg-[#171527]/90 backdrop-blur-2xl border-2 border-[#10A5B5]/80 shadow-[0_10px_50px_rgba(16,165,181,0.35)] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto hover:border-[#10A5B5] transition-all duration-300">
          
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#10A5B5]/30 via-[#10A5B5]/50 to-[#10A5B5]/30 blur-xl opacity-60 pointer-events-none -z-10"></div>

          <div className="flex items-center gap-5">
            {/* ID Badge Icon */}
            <div className="relative shrink-0 w-14 h-14 md:w-16 md:h-16 bg-[#10A5B5]/15 border border-[#10A5B5] rounded-2xl flex items-center justify-center p-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-2xl bg-[#10A5B5] opacity-25"></span>
              {/* Airline Badge SVG */}
              <svg className="w-full h-full text-[#10A5B5] relative z-10 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
            </div>

            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3 py-0.5 rounded-full mb-1">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span className="text-[#D4AF37] font-black uppercase text-[10px] tracking-widest">Valid Airline ID Required</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                Exclusive Crew Rates
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 w-full md:w-auto">
            <span className="text-gray-400 text-xs font-extrabold uppercase tracking-widest block mb-1">Starting From</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-black text-[#10A5B5] drop-shadow-[0_4px_12px_rgba(16,165,181,0.4)]">$499</span>
              <span className="text-gray-300 font-bold text-sm uppercase tracking-wider">/ crew</span>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}