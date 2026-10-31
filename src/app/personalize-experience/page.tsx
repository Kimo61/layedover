'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const REGIONS = [
  'Ubud (Jungle & Culture)',
  'Uluwatu (Cliffs & Beaches)',
  'Canggu (Vibe & Beach Clubs)',
  'Sidemen (Authentic & Slow)',
  'Nusa Islands (Ocean Adventure)',
  'Amed / North Bali (Diving & Nature)',
];

const DURATIONS = ['1-3 Days', '4-7 Days', '8+ Days'];
const PACES = ['Relaxed', 'Balanced', 'Action-Packed'];

export default function PersonalizeExperience() {
  const [regions, setRegions] = useState<string[]>([]);
  const [duration, setDuration] = useState('4-7 Days');
  const [pace, setPace] = useState('Balanced');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleRegion = (item: string) => {
    setRegions((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <main className="min-h-screen bg-[#171527] relative flex flex-col text-white selection:bg-[#10A5B5] selection:text-white">
      
      {/* Background Collage Overlay - FIX: Explicit viewport dimensions and reduced blur */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#171527]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vh] grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 opacity-40 -rotate-2 scale-105">
          <div className="relative w-full h-full"><Image src="/ubud1.jpg" fill className="object-cover" alt="Ubud" priority/></div>
          <div className="relative w-full h-full"><Image src="/uluwatu1day.jpg" fill className="object-cover" alt="Uluwatu" priority/></div>
          <div className="relative w-full h-full"><Image src="/sidemen.jpg" fill className="object-cover" alt="Sidemen" priority/></div>
          <div className="relative w-full h-full"><Image src="/chasingsunset.jpg" fill className="object-cover" alt="Sunset" /></div>
          <div className="relative w-full h-full"><Image src="/couplereset.jpg" fill className="object-cover" alt="Couples" /></div>
          <div className="relative w-full h-full"><Image src="/thereset.jpeg" fill className="object-cover" alt="Reset" /></div>
          <div className="relative w-full h-full"><Image src="/lunedemiel.jpeg" fill className="object-cover" alt="Romance" /></div>
          <div className="relative w-full h-full"><Image src="/girlgonewild.jpeg" fill className="object-cover" alt="Girls Trip" /></div>
        </div>
        
        {/* Darkening & Blur Gradient - Reduced blur from 8px to 3px so images remain visible */}
        <div className="absolute inset-0 bg-[#171527]/70 backdrop-blur-[3px]"></div>
      </div>

      <div className="relative z-10 w-full flex-grow flex flex-col items-center pt-16 pb-32 px-4 md:px-8">
        
        {/* Simple Return Link */}
        <div className="w-full max-w-4xl mb-8 flex justify-start">
          <Link href="/#multi-day" className="flex items-center gap-2 text-gray-400 hover:text-[#10A5B5] transition-colors font-bold text-sm tracking-widest uppercase">
            &larr; Back to Packages
          </Link>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-4xl bg-[#171527]/70 border border-white/10 rounded-3xl p-6 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          <div className="text-center mb-10">
            <span className="text-[#10A5B5] font-bold uppercase text-xs tracking-widest block mb-2">
              Tailor-Made Escapes
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
              Personalize Your Journey
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Design your perfect getaway. Select your ideal duration, pace, and the regions you wish to explore, and our concierge team will stitch them together into a seamless itinerary.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Trip Duration Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">
                    1. Trip Duration
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {DURATIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setDuration(opt)}
                        className={`p-4 rounded-xl border text-sm font-bold transition-all ${
                          duration === opt
                            ? 'bg-[#10A5B5] border-[#10A5B5] text-white shadow-lg'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/10'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trip Pace Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">
                    2. Preferred Pace
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {PACES.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setPace(opt)}
                        className={`p-4 rounded-xl border text-sm font-bold transition-all ${
                          pace === opt
                            ? 'bg-[#10A5B5] border-[#10A5B5] text-white shadow-lg'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/10'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Region Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">
                  3. Regions to Explore
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {REGIONS.map((act) => {
                    const isChecked = regions.includes(act);
                    return (
                      <button
                        key={act}
                        type="button"
                        onClick={() => toggleRegion(act)}
                        className={`p-4 rounded-xl border text-left font-medium text-sm transition-all flex items-center justify-between group ${
                          isChecked
                            ? 'bg-[#10A5B5]/20 border-[#10A5B5] text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:border-[#10A5B5]/50 hover:bg-white/10'
                        }`}
                      >
                        <span>{act}</span>
                        <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${isChecked ? 'bg-[#10A5B5] border-[#10A5B5] text-white' : 'border-gray-500 group-hover:border-[#10A5B5]'}`}>
                          {isChecked && <span className="text-xs font-black">✓</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Details */}
              <div className="border-t border-white/10 pt-10">
                <label className="block text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">
                  4. Your Details
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-4 rounded-xl border border-white/10 text-sm bg-black/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#10A5B5] transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp Number or Email"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="p-4 rounded-xl border border-white/10 text-sm bg-black/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#10A5B5] transition-colors"
                  />
                </div>
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white font-extrabold py-5 rounded-xl transition-all shadow-[0_10px_30px_rgba(16,165,181,0.2)] text-sm uppercase tracking-widest mt-4 hover:scale-[1.02]"
              >
                Request Custom Itinerary
              </button>
            </form>
          ) : (
            <div className="text-center py-16 bg-[#5C8A3F]/10 rounded-2xl border border-[#5C8A3F]/30 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-[#5C8A3F]/20 text-[#5C8A3F] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                ✓
              </div>
              <h4 className="text-3xl font-extrabold mb-4 text-white">Request Received!</h4>
              <p className="text-base text-gray-300 max-w-md mx-auto mb-8 leading-relaxed">
                Thank you, <span className="text-white font-bold">{name}</span>. We are plotting a <strong className="text-white">{duration}</strong> itinerary at a <strong className="text-white">{pace.toLowerCase()}</strong> pace across your selected regions. We will reach out to you at <strong className="text-white">{contact}</strong> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-[#10A5B5] uppercase tracking-widest hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-lg border border-white/10 hover:border-[#10A5B5]"
              >
                &larr; Edit Choices
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}