'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LAYOVER_ACTIVITIES = [
  'Jungle Views & Rice Terraces',
  'Quick Waterfall Dip (Tibumana / Kanto Lampo)',
  'Iconic Bali Swing',
  'Express Spa & Massage',
  'Southern Coastline & Cliff Views',
  'Beachside Break & Sunset',
  'Authentic Local Lunch / Dinner',
  'Souvenir & Market Stop',
];

export default function PersonalizeLayover() {
  const [selected, setSelected] = useState<string[]>([]);
  const [duration, setDuration] = useState('6-8 Hours');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <nav className="w-full bg-white shadow-sm px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/">
          <Image src="/logo.png" alt="Layedover" width={140} height={48} priority />
        </Link>
        <Link href="/#cabin-crew" className="text-sm font-bold text-[#171527] hover:text-[#10A5B5] transition-colors">
          &larr; Back to Crew Specials
        </Link>
      </nav>

      <div className="flex-grow flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-xl max-w-4xl w-full">
          <div className="text-center mb-10">
            <span className="text-[#10A5B5] font-bold uppercase text-xs tracking-widest">
              By Cabin Crew. For Cabin Crew.
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#171527] mt-2 mb-4">
              Personalize Your Layover
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              Select your available time and the experiences you crave most. We will design a perfectly timed, stress-free itinerary that gets you back to your hotel or the airport refreshed and on time.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
              
              {/* Duration Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-[#171527]">
                  1. Layover Window
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['4-6 Hours', '6-8 Hours', '8-10+ Hours'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDuration(opt)}
                      className={`p-3 rounded-xl border text-sm font-bold transition-all ${
                        duration === opt
                          ? 'bg-[#171527] border-[#171527] text-white'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-[#10A5B5]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Activity Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-[#171527]">
                  2. Choose Your Priorities
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {LAYOVER_ACTIVITIES.map((act) => {
                    const isChecked = selected.includes(act);
                    return (
                      <button
                        key={act}
                        type="button"
                        onClick={() => toggle(act)}
                        className={`p-4 rounded-xl border text-left font-medium text-sm transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#10A5B5]/10 border-[#10A5B5] text-[#171527] font-bold shadow-sm'
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <span>{act}</span>
                        <div className={`w-5 h-5 rounded flex items-center justify-center border ${isChecked ? 'bg-[#10A5B5] border-[#10A5B5] text-white' : 'border-gray-300'}`}>
                          {isChecked && <span className="text-xs">✓</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Details */}
              <div className="border-t border-gray-100 pt-8">
                <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-[#171527]">
                  3. Your Details
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name / Crew ID"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-4 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:border-[#10A5B5]"
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp Number or Email"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="p-4 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:border-[#10A5B5]"
                  />
                </div>
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                className="w-full bg-[#5C8A3F] hover:bg-[#4a7032] text-white font-bold py-4 rounded-xl transition-colors shadow-lg text-base"
              >
                Request Layover Itinerary ({selected.length} Activities)
              </button>
            </form>
          ) : (
            <div className="text-center py-12 bg-[#5C8A3F]/10 rounded-2xl border border-[#5C8A3F]/30">
              <h4 className="text-2xl font-bold mb-2 text-[#171527]">Request Received!</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                Thank you, {name}. We are building a perfectly timed {duration} layover featuring your {selected.length} selected priorities. We will reach out to you at <strong>{contact}</strong> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-[#10A5B5] uppercase tracking-widest hover:underline"
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