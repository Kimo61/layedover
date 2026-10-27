'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar when scrolling down past 50px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu if open while scrolling
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
      className={`w-full bg-white shadow-sm px-4 md:px-8 py-4 flex justify-between items-center fixed top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo Section */}
      <Link href="/" className="z-50">
        <Image 
          src="/logo.png" 
          alt="Layedover - The Real Bali, Between Flights" 
          width={170} 
          height={56} 
          priority
          className="w-[140px] md:w-[170px] h-auto"
        />
      </Link>

      {/* Desktop Navigation Links (Hidden on Mobile) */}
      <div className="hidden xl:flex gap-6 text-[#171527] font-semibold tracking-wide text-sm items-center">
        
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
        
        <Link href="/#reality-check" className="group flex flex-col items-center justify-center leading-none text-center">
          <span className="font-extrabold tracking-tight text-[11px] mb-1">
            <span className="text-[#171527]">Layed</span><span className="text-[#10A5B5]">over</span>
          </span>
          <span className="text-[#171527] group-hover:text-[#10A5B5] transition-colors font-semibold text-xs">Reality Check</span>
        </Link>

        <Link href="/#special-occasions" className="group flex flex-col items-center justify-center leading-none text-center hover:opacity-80 transition-opacity">
          <span className="font-extrabold tracking-tight text-[13px] mb-1">
            <span className="text-[#171527]">Layed</span><span className="text-[#10A5B5]">over</span>
          </span>
          <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest group-hover:text-[#10A5B5] transition-colors">Selection</span>
        </Link>
        
        <Link 
          href="/#secret-list" 
          className="bg-[#171527] text-white px-4 py-2 rounded-lg hover:bg-[#10A5B5] transition-colors font-bold flex items-center gap-2 ml-2 shadow-sm"
        >
          <span>Secret List</span>
          <span className="text-[#5C8A3F] text-lg leading-none">🔓</span>
        </Link>

        <Link 
          href="/contact" 
          className="bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-md ml-2 hover:scale-105 duration-200"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="xl:hidden text-[#171527] p-2 focus:outline-none z-50"
        aria-label="Toggle Menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl py-6 px-8 flex flex-col gap-5 xl:hidden animate-in slide-in-from-top-2 duration-200">
          <Link href="/#multi-day" onClick={() => setIsMobileMenuOpen(false)} className="text-[#171527] font-bold text-lg hover:text-[#10A5B5] transition-colors border-b border-gray-50 pb-4">
            Multi-Days Trip
          </Link>
          <Link href="/#cabin-crew" onClick={() => setIsMobileMenuOpen(false)} className="text-[#171527] font-bold text-lg hover:text-[#10A5B5] transition-colors border-b border-gray-50 pb-4">
            Cabin Crew Special
          </Link>
          <Link href="/#excursions" onClick={() => setIsMobileMenuOpen(false)} className="text-[#171527] font-bold text-lg hover:text-[#10A5B5] transition-colors border-b border-gray-50 pb-4">
            1-Day Excursions
          </Link>
          <Link href="/#reality-check" onClick={() => setIsMobileMenuOpen(false)} className="text-[#171527] font-bold text-lg hover:text-[#10A5B5] transition-colors border-b border-gray-50 pb-4 flex items-center justify-between">
            <span>Reality Check</span>
            <span className="text-xs text-[#10A5B5] font-extrabold uppercase">Layedover</span>
          </Link>
          <Link href="/#special-occasions" onClick={() => setIsMobileMenuOpen(false)} className="text-[#171527] font-bold text-lg hover:text-[#D4AF37] transition-colors border-b border-gray-50 pb-4 flex items-center justify-between">
            <span>Selection Getaways</span>
            <span className="text-xs text-[#D4AF37] font-extrabold uppercase">Layedover</span>
          </Link>
          <Link href="/#secret-list" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#171527] text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm text-center">
            <span>Secret List</span>
            <span>🔓</span>
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#10A5B5] text-white py-3.5 px-4 rounded-xl font-bold text-center shadow-md uppercase tracking-wider">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}