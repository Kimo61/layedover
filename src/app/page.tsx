"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RegionSlideshow from '@/components/RegionSlideshow';

const WEB3FORMS_KEY = "06d08439-449c-4bf4-acd0-ae190e38d777";

// --- Generic Booking Modal Component for Cabin Crew & Reality Check ---
function GenericModal({ 
  title, 
  subtitle, 
  triggerLabel, 
  triggerPrice, 
  triggerClass 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [contactInput, setContactInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Request for: ${title}`,
          email: contactInput,
          message: `User requested booking/details for: ${title} (${subtitle})`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={triggerClass}>
        <span>{triggerLabel}</span>
        {triggerPrice && (
          <span className="font-black bg-white/20 px-2.5 py-1 rounded text-sm">
            {triggerPrice}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#1F1D36] border border-[#10A5B5]/40 p-5 md:p-8 rounded-2xl md:rounded-3xl max-w-[90%] md:max-w-md w-full shadow-2xl relative text-left">
            <button 
              onClick={() => { setIsOpen(false); setIsSubmitted(false); setContactInput(''); }}
              className="absolute top-4 right-4 md:top-5 md:right-5 text-gray-400 hover:text-white text-lg md:text-xl font-bold"
            >
              &times;
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 md:mb-2">{title}</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    {subtitle}
                  </p>
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 md:mb-2">
                    Your Email or WhatsApp Number
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="name@example.com / +1..."
                    value={contactInput}
                    onChange={(e) => setContactInput(e.target.value)}
                    className="w-full bg-[#171527] border border-white/10 rounded-lg md:rounded-xl p-3 md:p-4 text-white text-xs md:text-sm focus:outline-none focus:border-[#10A5B5]"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold py-2.5 md:py-3.5 rounded-lg md:rounded-xl transition-colors shadow-md text-xs md:text-sm uppercase tracking-wider disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Request'}
                </button>
              </form>
            ) : (
              <div className="text-center py-4 md:py-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5C8A3F]/20 text-[#5C8A3F] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-5 md:mb-6">
                  Thank you! We have logged your details for {title} and will reach out shortly.
                </p>
                <button 
                  onClick={() => { setIsOpen(false); setIsSubmitted(false); setContactInput(''); }}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 md:py-3 rounded-lg md:rounded-xl transition-colors text-xs md:text-sm"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// --- Interactive Calendar Component for "Your Route, Your Rules" ---
function MultiDayPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const [contactInput, setContactInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [currentDate, setCurrentDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const toggleDate = (day) => {
    const dateStr = `${year}-${month + 1}-${day}`;
    if (selectedDates.includes(dateStr)) {
      setSelectedDates(selectedDates.filter(d => d !== dateStr));
    } else {
      setSelectedDates([...selectedDates, dateStr]);
    }
  };

  const handleNextMonth = (e) => {
    e.preventDefault();
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handlePrevMonth = (e) => {
    e.preventDefault();
    const prevMonthDate = new Date(year, month - 1, 1);
    if (prevMonthDate.getFullYear() > tomorrow.getFullYear() || 
       (prevMonthDate.getFullYear() === tomorrow.getFullYear() && prevMonthDate.getMonth() >= tomorrow.getMonth())) {
      setCurrentDate(prevMonthDate);
    }
  };

  const handleConfirm = async () => {
    if (!contactInput.trim()) return alert("Please enter your Email or WhatsApp to confirm your dates.");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Your Route Your Rules Date Reservation",
          email: contactInput,
          message: `User reserved the following custom dates: ${selectedDates.join(", ")}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting dates", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)} 
        className="bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center justify-center w-full transition-colors shadow-md"
      >
        Reserve Your Place
      </button>
    );
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#5C8A3F]/20 text-[#5C8A3F] p-5 rounded-xl border border-[#5C8A3F]/50 text-center animate-in zoom-in">
        <h3 className="font-bold mb-1 text-base text-white">Dates Reserved!</h3>
        <p className="text-xs text-gray-300 mb-3">We have received your request for ({selectedDates.length}) days and will reach out shortly.</p>
        <button 
          onClick={() => { setIsOpen(false); setIsSubmitted(false); setSelectedDates([]); setContactInput(''); }}
          className="text-xs font-bold text-white underline hover:text-[#10A5B5]"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#171527]/95 backdrop-blur-md p-5 rounded-xl shadow-2xl border border-[#10A5B5]/50 w-full animate-in fade-in zoom-in duration-200">
      
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="p-1 hover:bg-white/10 rounded-md text-gray-300 transition-colors">&larr;</button>
        <span className="font-extrabold text-white">{monthNames[month]} {year}</span>
        <button onClick={handleNextMonth} className="p-1 hover:bg-white/10 rounded-md text-gray-300 transition-colors">&rarr;</button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black uppercase tracking-wider text-[#10A5B5] mb-2">
        <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dateObj = new Date(year, month, day);
          const isPast = dateObj < tomorrow;
          const dateStr = `${year}-${month + 1}-${day}`;
          const isSelected = selectedDates.includes(dateStr);

          return (
            <button
              key={day}
              disabled={isPast}
              onClick={(e) => { e.preventDefault(); toggleDate(day); }}
              className={`p-2 rounded-lg transition-all font-bold ${
                isPast 
                  ? 'text-gray-600 opacity-50 cursor-not-allowed' 
                  : isSelected 
                    ? 'bg-[#10A5B5] text-white shadow-md scale-105' 
                    : 'hover:bg-[#10A5B5]/20 text-gray-200 hover:text-white'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {selectedDates.length > 0 && (
        <div className="mt-4">
          <input 
            type="text" 
            placeholder="Your Email or WhatsApp Number..."
            value={contactInput}
            onChange={(e) => setContactInput(e.target.value)}
            className="w-full bg-[#171527] border border-white/20 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#10A5B5]"
          />
        </div>
      )}

      <div className="mt-5 flex gap-2">
        <button 
          onClick={() => setIsOpen(false)} 
          className="flex-1 py-2 text-xs font-bold text-gray-400 hover:text-white transition-colors bg-white/5 rounded-lg"
        >
          Cancel
        </button>
        <button 
          onClick={handleConfirm}
          disabled={selectedDates.length === 0 || isSubmitting} 
          className="flex-1 py-2 text-xs font-bold bg-[#5C8A3F] text-white rounded-lg hover:bg-[#4a7032] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : `Confirm (${selectedDates.length})`}
        </button>
      </div>
    </div>
  );
}

// --- Secret List Purchase Modal Component ---
function SecretListPurchaseModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactInput, setContactInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Secret List Access Request ($19)",
          email: contactInput,
          message: "Client is requesting access to purchase the Secret List for $19.",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting secret list request", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-gradient-to-r from-[#10A5B5] to-[#0d8996] hover:from-[#0d8996] hover:to-[#0a6f7a] text-white font-extrabold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3"
      >
        <span>Contact to Purchase</span>
        <span className="bg-white/20 px-2 py-0.5 rounded text-sm">$19</span>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#1F1D36] border border-[#10A5B5]/40 p-5 md:p-8 rounded-2xl md:rounded-3xl max-w-[90%] md:max-w-md w-full shadow-2xl relative text-left">
            <button 
              onClick={() => { setIsModalOpen(false); setIsSubmitted(false); setContactInput(''); }}
              className="absolute top-4 right-4 md:top-5 md:right-5 text-gray-400 hover:text-white text-lg md:text-xl font-bold"
            >
              &times;
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 md:mb-2">Get Secret List Access</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    Enter your email or phone number. Our concierge team will reach out directly to complete your $19 purchase and send you the pins.
                  </p>
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 md:mb-2">Email or WhatsApp Number</label>
                  <input 
                    type="text" 
                    required
                    placeholder="name@example.com / +1..."
                    value={contactInput}
                    onChange={(e) => setContactInput(e.target.value)}
                    className="w-full bg-[#171527] border border-white/10 rounded-lg md:rounded-xl p-3 md:p-4 text-white text-xs md:text-sm focus:outline-none focus:border-[#10A5B5]"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold py-2.5 md:py-3.5 rounded-lg md:rounded-xl transition-colors shadow-md text-xs md:text-sm uppercase tracking-wider disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            ) : (
              <div className="text-center py-4 md:py-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5C8A3F]/20 text-[#5C8A3F] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-5 md:mb-6">
                  Thank you! We have logged your contact details and will reach out shortly to fulfill your order.
                </p>
                <button 
                  onClick={() => { setIsModalOpen(false); setIsSubmitted(false); setContactInput(''); }}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 md:py-3 rounded-lg md:rounded-xl transition-colors text-xs md:text-sm"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#171527] text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] bg-[#171527] flex flex-col justify-center px-8 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-20 w-fit mt-12 bg-black/40 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tighter">
            <span className="text-white drop-shadow-md inline-flex items-center gap-3 md:gap-5">
              The Real Bali, 
              <Image src="/pin.png" alt="Layedover Pin" width={120} height={120} className="h-[1.3em] w-auto object-contain drop-shadow-lg" />
            </span><br />
            <span className="text-[#10A5B5] drop-shadow-md">Between Flights.</span>
          </h1>
        </div>
      </section>

      {/* 2. MULTI-DAY TRIPS */}
      <section id="multi-day" className="w-full py-20 px-8 md:px-24 bg-[#1F1D36]">
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
            Design Your Journey
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            From 3-day weekend resets to 14-day full island immersions. Select a region below to explore our tailored itineraries, luxury accommodations, and hidden gems.
          </p>
        </div>

        <RegionSlideshow />

        {/* READY PACKAGES PREVIEW SECTION WITH NEON GLOW */}
        <div className="mt-24 pt-16 border-t border-white/10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm block mb-2">Curated Itineraries</span>
              <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">Ready Packages</h3>
            </div>
            <Link href="/packages" className="bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md shrink-0 hover:scale-105 duration-200">
              View All Packages &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Preview Package 1: Couples Reset */}
            <div className="relative group hover:scale-[1.04] transition-transform duration-700 cursor-pointer">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-[#10A5B5] opacity-25 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
              <div className="relative bg-[#1F1D36] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group-hover:border-[#10A5B5]/50 flex flex-col h-[540px] z-10 transition-colors duration-700">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white font-black px-5 py-2 rounded-bl-2xl text-xs z-30 shadow-[0_4px_15px_rgba(220,38,38,0.5)] uppercase tracking-widest">
                  20% OFF
                </div>
                <div className="relative h-[50%] w-full overflow-hidden">
                  <Image src="/couplereset.jpg" fill alt="Couples Reset" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D36] via-[#1F1D36]/20 to-transparent"></div>
                </div>
                
                <div className="relative p-8 flex flex-col flex-grow -mt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#10A5B5]/10 text-[#10A5B5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#10A5B5]/20 group-hover:border-[#10A5B5]/40 transition-colors">Romance</span>
                    <span className="bg-[#10A5B5]/10 text-[#10A5B5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#10A5B5]/20 group-hover:border-[#10A5B5]/40 transition-colors">Nature</span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider block">8 Days / 7 Nights</span>
                    <span className="text-[#D4AF37] text-[10px] font-extrabold uppercase tracking-widest block mt-1">Sidemen • Amed • Nusa Dua</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Couples Reset</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">A romantic escape featuring sunrise 4x4 volcano treks, hidden waterfalls, luxury spa treatments, and private ADV 160cc coastal rides.</p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 pt-16 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-0 group-hover:delay-[800ms] bg-gradient-to-t from-[#1F1D36] via-[#1F1D36] to-transparent z-20">
                  <Link href="/packages" className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white text-center font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(16,165,181,0.4)] flex items-center justify-center gap-2 transition-colors transform hover:scale-[1.02]">
                    Explore Package &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Preview Package 2: Chasing Sunsets */}
            <div className="relative group hover:scale-[1.04] transition-transform duration-700 cursor-pointer">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-[#10A5B5] opacity-25 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
              <div className="relative bg-[#1F1D36] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group-hover:border-[#10A5B5]/50 flex flex-col h-[540px] z-10 transition-colors duration-700">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white font-black px-5 py-2 rounded-bl-2xl text-xs z-30 shadow-[0_4px_15px_rgba(220,38,38,0.5)] uppercase tracking-widest">
                  20% OFF
                </div>
                <div className="relative h-[50%] w-full overflow-hidden">
                  <Image src="/chasingsunset.jpg" fill alt="Chasing Sunsets" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D36] via-[#1F1D36]/20 to-transparent"></div>
                </div>
                
                <div className="relative p-8 flex flex-col flex-grow -mt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#10A5B5]/10 text-[#10A5B5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#10A5B5]/20 group-hover:border-[#10A5B5]/40 transition-colors">Sunsets</span>
                    <span className="bg-[#10A5B5]/10 text-[#10A5B5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#10A5B5]/20 group-hover:border-[#10A5B5]/40 transition-colors">Islands</span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider block">9 Days / 8 Nights</span>
                    <span className="text-[#D4AF37] text-[10px] font-extrabold uppercase tracking-widest block mt-1">Uluwatu • Gili T</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Chasing Sunsets</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">Experience dramatic cliffside fire dances, sunset horseback riding, private Gili T snorkeling, and premium Azure Beach Club access.</p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 pt-16 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-0 group-hover:delay-[800ms] bg-gradient-to-t from-[#1F1D36] via-[#1F1D36] to-transparent z-20">
                  <Link href="/packages" className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white text-center font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(16,165,181,0.4)] flex items-center justify-center gap-2 transition-colors transform hover:scale-[1.02]">
                    Explore Package &rarr;
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* REPLACED TRIP BUILDER COMPONENT WITH DEDICATED CTA BUTTON */}
        <div className="mt-24 border-t border-white/10 pt-16">
          <div className="bg-[#171527] border border-white/10 rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#10A5B5]/10 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-75"></div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10">Build Your Custom Itinerary</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
              Want to handpick your regions, pace, and specific activities? Use our interactive Trip Builder to design your perfect layover block by block.
            </p>
            <Link href="/personalize-experience" className="inline-flex items-center justify-center gap-3 bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold px-10 py-5 rounded-xl transition-all shadow-[0_10px_30px_rgba(16,165,181,0.2)] hover:scale-105 uppercase tracking-widest text-sm relative z-10">
              Personalize your trip &rarr;
            </Link>
          </div>
        </div>

      </section>

      {/* 3. CABIN CREW */}
      <section id="cabin-crew" className="relative w-full py-24 px-8 md:px-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/cabinmain.jpeg" alt="Cabin Crew Layover in Bali" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#171527]/85 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <span className="text-[#5C8A3F] font-bold uppercase tracking-widest text-sm block mb-2 drop-shadow-md">
            By Cabin Crew. For Cabin Crew.
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-xl">
            Fly. Explore. Reset. Repeat.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl drop-shadow-md">
            Turn your layover into an unforgettable escape. Designed entirely around your flight schedule, we handle all logistics so you can step off the plane, reset, and head back refreshed.
          </p>
        </div>

        {/* MOBILE SCROLL HINT (Only visible on small screens) */}
        <div className="relative z-10 flex md:hidden items-center justify-end gap-2 mt-8 text-[#10A5B5] font-bold text-[10px] uppercase tracking-widest animate-pulse">
          <span>Swipe to explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>

        <div className="relative z-10 mt-4 md:mt-16 flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          <div className="min-w-[85vw] md:min-w-[360px] snap-center border border-white/10 rounded-2xl p-8 bg-black/40 backdrop-blur-md flex flex-col justify-between shadow-2xl hover:bg-black/60 transition-colors">
            <div>
              <span className="bg-[#10A5B5]/20 text-[#10A5B5] border border-[#10A5B5]/30 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Jungle & Action
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">Ubud Fast-Track</h3>
              <p className="text-gray-300 mb-6 text-sm">
                A high-impact adrenaline sprint into the heart of the Bali jungle.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 font-medium mb-8">
                <li className="flex items-center gap-2"><span className="text-[#10A5B5]">✓</span> Private ATV Ride</li>
                <li className="flex items-center gap-2"><span className="text-[#10A5B5]">✓</span> Iconic Bali Swing</li>
                <li className="flex items-center gap-2"><span className="text-[#10A5B5]">✓</span> Canopy Zipline</li>
              </ul>
            </div>

            <GenericModal 
              title="Ubud Fast-Track (Cabin Crew Layover)"
              subtitle="Enter your details below to request details & booking for the Ubud Fast-Track package ($55 USD)."
              triggerLabel="Book Layover"
              triggerPrice="$55 USD"
              triggerClass="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold py-3 rounded-xl transition-colors flex justify-between items-center px-5 shadow-lg"
            />
          </div>

          <div className="min-w-[85vw] md:min-w-[360px] snap-center border border-white/10 rounded-2xl p-8 bg-black/40 backdrop-blur-md flex flex-col justify-between shadow-2xl hover:bg-black/60 transition-colors">
            <div>
              <span className="bg-[#5C8A3F]/20 text-[#5C8A3F] border border-[#5C8A3F]/30 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Ocean Escapes
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">Nusa Dua Sun</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Crystal clear waters, vibrant reefs, and premium marine activities.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 font-medium mb-8">
                <li className="flex items-center gap-2"><span className="text-[#5C8A3F]">✓</span> Guided Snorkeling</li>
                <li className="flex items-center gap-2"><span className="text-[#5C8A3F]">✓</span> Premium Watersports</li>
              </ul>
            </div>

            <GenericModal 
              title="Nusa Dua Sun (Cabin Crew Layover)"
              subtitle="Enter your details below to request details & booking for the Nusa Dua Sun package ($19 USD)."
              triggerLabel="Book Layover"
              triggerPrice="$19 USD"
              triggerClass="w-full bg-[#5C8A3F] hover:bg-[#4a7032] text-white font-bold py-3 rounded-xl transition-colors flex justify-between items-center px-5 shadow-lg"
            />
          </div>

          <div className="min-w-[85vw] md:min-w-[360px] snap-center border border-white/10 rounded-2xl p-8 bg-black/40 backdrop-blur-md flex flex-col justify-between shadow-2xl hover:bg-black/60 transition-colors">
            <div>
              <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Culture & Coast
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">Uluwatu Highlights</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Dramatic cliffs, sacred temples, and hidden limestone coves.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 font-medium mb-8">
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span> <span>Bingin & Melasti Beach</span></li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span> <span>Uluwatu Temple & Pantai Cliff</span></li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span> <span>Kecak Fire Dance Show</span></li>
              </ul>
            </div>

            <GenericModal 
              title="Uluwatu Highlights (Cabin Crew Layover)"
              subtitle="Enter your details below to request details & booking for the Uluwatu Highlights package ($19 USD)."
              triggerLabel="Book Layover"
              triggerPrice="$19 USD"
              triggerClass="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-xl transition-colors flex justify-between items-center px-5 shadow-lg"
            />
          </div>

          <Link href="/cabin-crew-packages" className="min-w-[85vw] md:min-w-[360px] snap-center border-2 border-[#10A5B5] rounded-2xl p-8 bg-[#10A5B5]/10 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(16,165,181,0.2)] hover:bg-[#10A5B5]/20 hover:scale-[1.02] transition-all text-center group cursor-pointer">
            <div className="w-16 h-16 bg-[#10A5B5]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-[#10A5B5] group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight tracking-wide">
              On leave and<br/>not on layover?
            </h3>
            <p className="text-gray-300 font-medium text-sm mb-8 leading-relaxed max-w-[250px]">
              Explore our highly exclusive multi-day escapes reserved entirely for airline crew.
            </p>
            <span className="w-full bg-[#10A5B5] text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-sm flex justify-center items-center gap-2 group-hover:bg-[#0d8996] transition-colors shadow-lg">
              Explore Crew Leave &rarr;
            </span>
          </Link>

        </div>
      </section>

      {/* 4. 1-DAY EXCURSIONS */}
      <section id="excursions" className="w-full py-20 px-8 md:px-24 bg-[#1F1D36]">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
            1-Day Excursions
          </h2>
          <p className="text-gray-400 mt-2">Deep dives into Bali's hidden gems, expertly guided from sunrise to sunset.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative bg-[#171527] rounded-2xl overflow-hidden shadow-lg border border-white/10 h-[500px] cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('/ubud1.jpg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#171527] via-[#171527]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8">
              <span className="text-[#10A5B5] font-bold text-xs uppercase tracking-widest mb-1 block drop-shadow-md">Day 1</span>
              <h3 className="text-3xl font-extrabold text-white mb-2 uppercase tracking-wide drop-shadow-lg">Ubud Experience</h3>
              <p className="text-gray-300 text-sm mb-4">Elephant Sanctuary • Lazy River Tubing • Luxurious Overnight Stay</p>
              <span className="text-white font-bold text-sm flex items-center gap-2 group-hover:text-[#10A5B5] transition-colors">
                View Itinerary <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>

          <div className="group relative bg-[#171527] rounded-2xl overflow-hidden shadow-lg border border-white/10 h-[500px] cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('/uluwatu1day.jpg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#171527] via-[#171527]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8">
              <span className="text-[#10A5B5] font-bold text-xs uppercase tracking-widest mb-1 block drop-shadow-md">Day 3</span>
              <h3 className="text-3xl font-extrabold text-white mb-2 uppercase tracking-wide drop-shadow-lg">Explore Uluwatu</h3>
              <p className="text-gray-300 text-sm mb-4">Kecak Dance • Uluwatu Temple • Garuda Wisnu</p>
              <span className="text-white font-bold text-sm flex items-center gap-2 group-hover:text-[#10A5B5] transition-colors">
                View Itinerary <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>

          <div className="group relative bg-[#171527] rounded-2xl overflow-hidden shadow-lg border border-[#10A5B5]/40 h-[500px]">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 blur-[3px] opacity-60 pointer-events-none" style={{backgroundImage: "url('/sidemen.jpg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#171527] via-[#171527]/70 to-black/30 pointer-events-none"></div>
            
            <div className="absolute top-6 right-0 bg-gradient-to-r from-[#E1306C] to-[#c1265b] text-white font-black px-5 py-2 rounded-l-xl shadow-xl z-10 tracking-widest text-sm pointer-events-none">
              50% OFF DRIVER
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 z-10">
              <span className="text-[#10A5B5] font-bold text-xs uppercase tracking-widest mb-1 block drop-shadow-md">Spontaneous</span>
              <h3 className="text-3xl font-extrabold text-white mb-3 uppercase tracking-wide drop-shadow-lg leading-tight">Your Route,<br/>Your Rules</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Hop on and let our leader suggest activities on the spot based on your preferences, or dictate the exact journey yourself.
              </p>
              
              <MultiDayPicker />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/personalize-experience" className="inline-block bg-[#171527] border border-white/20 text-white hover:bg-[#10A5B5] hover:border-[#10A5B5] font-bold px-10 py-4 rounded-xl transition-colors shadow-md">
            Personalize Your Own Experience
          </Link>
        </div>
      </section>

      {/* 5. LAYEDOVER SELECTION */}
      <section id="special-occasions" className="w-full py-24 px-8 md:px-24 bg-[#171527] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
          <div className="flex flex-row items-center justify-center gap-4 md:gap-5 mb-6">
            <div className="bg-white px-4 py-2 rounded-xl shadow-lg">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-none">
                <span className="text-[#171527]">Layed</span><span className="text-[#10A5B5]">over</span>
              </h2>
            </div>
            <span className="text-[#D4AF37] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-xl md:text-3xl">
              Selection
            </span>
          </div>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Highly curated, deeply personal escapes. Explore two of our signature experiences below, or browse the full collection to plan your perfect getaway.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative h-[450px] bg-[#1F1D36] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer transform transition-transform hover:-translate-y-2 duration-500">
            <Image src="/thereset.jpeg" alt="The Reset" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-widest drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                The Reset
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-center bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
              <p className="text-[#10A5B5] font-bold text-sm md:text-base uppercase tracking-widest drop-shadow-md">
                A Bali escape to disappear, recharge and come back different.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] bg-[#1F1D36] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer transform transition-transform hover:-translate-y-2 duration-500">
            <Image src="/lunedemiel.jpeg" alt="Lune De Miel" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-widest drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] text-center leading-tight">
                Lune<br/>De Miel
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-center bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
              <p className="text-[#10A5B5] font-bold text-sm md:text-base uppercase tracking-widest drop-shadow-md">
                A romantic Bali escape designed for two.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/getaways" className="inline-flex items-center gap-3 bg-[#1F1D36] hover:bg-[#10A5B5] text-white font-extrabold px-12 py-5 rounded-2xl transition-all shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 hover:scale-105 duration-300">
            <span>Plan Your Getaway</span>
            <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* 6. REALITY CHECK / INSPECTION SERVICE */}
      <section id="reality-check" className="w-full py-32 px-8 md:px-24 bg-[#1F1D36] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center bg-[#171527] rounded-[3rem] p-10 md:p-16 shadow-2xl border border-white/10">
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="bg-white px-3 py-1 rounded-lg flex items-center justify-center">
                <span className="font-extrabold tracking-tight text-xl">
                  <span className="text-[#171527]">Layed</span><span className="text-[#10A5B5]">over</span>
                </span>
              </div>
              <span className="text-white font-bold uppercase tracking-widest text-lg md:text-xl">
                Reality Check
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Internet is Outdated.<br/>We Are On The Ground.
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Google searches and ChatGPT answers don't reflect current realities. Weather destroys roads, massive constructions pop up next to "peaceful" villas, and quality shifts overnight.
            </p>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed font-medium">
              We provide live, on-field property inspections and real-time assistance for B2B partners and private clients so you never book blindly.
            </p>

            <GenericModal 
              title="Property Reality Check Inspection"
              subtitle="Submit your email or WhatsApp number below. Our ground team will reach out to organize your live villa/property inspection in Bali."
              triggerLabel="Request an Inspection"
              triggerClass="bg-[#5C8A3F] hover:bg-[#4a7032] text-white font-bold text-lg px-10 py-5 rounded-xl transition-colors shadow-lg inline-block"
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-900 h-96 md:h-[500px] rounded-[2rem] overflow-hidden shadow-inner border border-white/10 relative">
             <Image src="/inspection.jpeg" alt="On the ground inspection" fill className="object-cover opacity-80" />
          </div>
        </div>
      </section>

      {/* 7. SECRET LIST */}
      <section id="secret-list" className="w-full bg-[#171527] py-24 px-8 relative overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto relative z-10 text-center mb-16">
          <span className="text-[#10A5B5] font-bold uppercase tracking-widest text-sm block mb-3">
            Layedover Secret List
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Places That ChatGPT Won't Tell You About.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative flex flex-col items-center">
          <div className="w-full bg-[#1F1D36] rounded-3xl p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-12 items-center shadow-2xl border border-white/10 relative z-10">
            
            <div className="w-full md:w-1/2 flex flex-col md:block md:h-[350px] relative items-center justify-center md:perspective-1000">
              
              <div className="w-full md:absolute md:w-[65%] h-[240px] md:h-[280px] mb-4 md:mb-0 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-out z-10 md:hover:z-30 md:origin-bottom-left md:-rotate-6 md:-translate-x-8 md:hover:rotate-0 md:hover:translate-x-0 md:hover:scale-110 cursor-pointer border-4 border-[#171527] relative">
                <Image src="/secret1.jpeg" alt="Secret Location 1" fill className="object-cover" />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold tracking-widest uppercase">
                  Location 01
                </div>
              </div>
              
              <div className="w-full md:absolute md:w-[65%] h-[240px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-out z-20 md:hover:z-30 md:origin-bottom-right md:rotate-6 md:translate-x-8 md:hover:rotate-0 md:hover:translate-x-0 md:hover:scale-110 cursor-pointer border-4 border-[#171527] relative">
                <Image src="/secret2.jpeg" alt="Secret Location 2" fill className="object-cover" />
                <div className="absolute bottom-4 right-4 bg-[#10A5B5]/90 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold tracking-widest uppercase">
                  Location 02
                </div>
              </div>

            </div>

            <div className="w-full md:w-1/2 text-left">
              <span className="text-xs font-bold text-[#5C8A3F] border border-[#5C8A3F]/30 uppercase tracking-widest bg-[#5C8A3F]/10 px-4 py-2 rounded-full mb-6 inline-block">Free Preview</span>
              <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">Eastern Cliff Sunrise & The Hidden Cove</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                While everyone crowds the main tourist ridges, these two unmarked locations offer untouched horizons. Inspect the raw beauty of Bali's unmapped corners. No crowds, no entrance fees, just perfect isolation.
              </p>
            </div>
          </div>

          <div className="w-full relative h-[450px] rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
            <Image src="/ubud.jpg" alt="Locked Secret Locations" fill className="object-cover blur-xl opacity-40 scale-110 transition-all duration-1000 group-hover:blur-lg group-hover:scale-100" />
            <div className="absolute inset-0 bg-[#171527]/40 z-10"></div>
            <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
              <div className="bg-[#1F1D36]/80 backdrop-blur-xl p-10 rounded-3xl text-center shadow-[0_0_60px_rgba(16,165,181,0.15)] max-w-lg border border-[#10A5B5]/30 transform transition-transform hover:-translate-y-2 duration-500">
                <div className="w-16 h-16 bg-[#10A5B5]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#10A5B5]">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8v-4zm5 9.722v2.278h-2v-2.278c-.595-.347-1-.984-1-1.722 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.405 1.375-1 1.722z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Unlock The Full Secret List</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Get instant access to our complete curated list of 15+ hidden gems, exact GPS pins, best times to visit, and off-grid cafes nearby.
                </p>
                <SecretListPurchaseModal />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}