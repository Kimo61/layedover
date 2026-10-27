'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar when scrolling down past 50px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`w-full min-w-[1200px] bg-white shadow-sm px-8 py-4 flex justify-between items-center fixed top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo Section */}
      <Link href="/">
        <Image 
          src="/logo.png" 
          alt="Layedover - The Real Bali, Between Flights" 
          width={190} 
          height={64} 
          priority
        />
      </Link>

      {/* Navigation Links - Now locked to display desktop layout always */}
      <div className="flex gap-6 text-[#171527] font-semibold tracking-wide text-sm items-center">
        
        {/* Multi-Days Trip */}
        <Link href="/#multi-day" className="group flex flex-col items-center justify-center hover:text-[#10A5B5] transition-colors">
          <div className="relative w-full flex items-center justify-center h-4 mb-1">
            <div className="absolute w-full h-[2px] bg-[#10A5B5] group-hover:scale-x-110 transition-transform duration-300"></div>
            <div className="bg-white px-2 z-10 group-hover:-translate-y-1 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] text-[#171527] group-hover:text-[#10A5B5] transition-colors">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <path d="M9 16l2 2 4-4"></path>
              </svg>
            </div>
          </div>
          <span className="text-sm font-semibold">Multi-Days Trip</span>
        </Link>
        
        {/* Cabin Crew Special */}
        <Link href="/#cabin-crew" className="group flex flex-col items-center justify-center hover:text-[#10A5B5] transition-colors">
          <div className="relative w-full flex items-center justify-center h-4 mb-1">
            <div className="absolute w-full h-[2px] bg-[#10A5B5] group-hover:scale-x-110 transition-transform duration-300"></div>
            <div className="bg-white px-2 z-10 group-hover:translate-x-3 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] text-[#171527] group-hover:text-[#10A5B5] transition-colors rotate-90">
                <path d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z" />
              </svg>
            </div>
          </div>
          <span className="text-sm font-semibold">Cabin Crew Special</span>
        </Link>
        
        {/* 1-Day Excursions */}
        <Link href="/#excursions" className="group flex flex-col items-center justify-center hover:text-[#10A5B5] transition-colors">
          <div className="relative w-full flex items-center justify-center h-4 mb-1">
            <div className="absolute w-full h-[2px] bg-[#10A5B5] group-hover:scale-x-110 transition-transform duration-300"></div>
            <div className="bg-white px-2 z-10 group-hover:-translate-y-1 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] text-[#171527] group-hover:text-[#10A5B5] transition-colors">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <path d="M10.5 15l2-1.5v5"></path>
              </svg>
            </div>
          </div>
          <span className="text-sm font-semibold">1-Day Excursions</span>
        </Link>
        
        {/* Stacked Layedover Reality Check */}
        <Link href="/#reality-check" className="group flex flex-col items-center justify-center leading-none text-center">
          <span className="font-extrabold tracking-tight text-[11px] mb-1">
            <span className="text-[#171527]">Layed</span><span className="text-[#10A5B5]">over</span>
          </span>
          <span className="text-[#171527] group-hover:text-[#10A5B5] transition-colors font-semibold text-xs">Reality Check</span>
        </Link>

        {/* Stacked Layedover Selection */}
        <Link href="/#special-occasions" className="group flex flex-col items-center justify-center leading-none text-center hover:opacity-80 transition-opacity">
          <span className="font-extrabold tracking-tight text-[13px] mb-1">
            <span className="text-[#171527]">Layed</span><span className="text-[#10A5B5]">over</span>
          </span>
          <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest group-hover:text-[#10A5B5] transition-colors">Selection</span>
        </Link>
        
        {/* Secret List Call-to-Action */}
        <Link 
          href="/#secret-list" 
          className="bg-[#171527] text-white px-4 py-2 rounded-lg hover:bg-[#10A5B5] transition-colors font-bold flex items-center gap-2 ml-2 shadow-sm"
        >
          <span>Secret List</span>
          <span className="text-[#5C8A3F] text-lg leading-none">🔓</span>
        </Link>

        {/* Contact Us Distinct Button */}
        <Link 
          href="/contact" 
          className="bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-md ml-2 hover:scale-105 duration-200"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}