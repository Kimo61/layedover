'use client';

import React, { useState } from 'react';

const ACTIVITIES = [
  'ATV Jungle Trails',
  'Lazy River Tubing & Rafting',
  'Elephant Sanctuary',
  'Hidden Waterfalls (Tibumana / Gembleng)',
  'Holy Water Temples',
  'Iconic Bali Swing & Cretya Jungle Pool',
  'Jukung Boat Snorkeling Tour',
  'Uluwatu Sunset & Kecak Dance',
];

export default function TripBuilder() {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#10A5B5] p-8 md:p-12 shadow-2xl max-w-4xl mx-auto my-16 text-[#171527]">
      <div className="text-center mb-8">
        <span className="text-[#10A5B5] font-bold uppercase text-xs tracking-widest">
          Interactive Itinerary Builder
        </span>
        <h3 className="text-3xl font-extrabold mt-1">Personalize Your Package</h3>
        <p className="text-gray-500 text-sm mt-2">
          Select the experiences you want. We will tailor a package from our offerings and contact you with a custom plan.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-gray-500">
              Select Desired Experiences:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ACTIVITIES.map((act) => {
                const isChecked = selected.includes(act);
                return (
                  <button
                    key={act}
                    type="button"
                    onClick={() => toggle(act)}
                    className={`p-4 rounded-xl border text-left font-medium text-sm transition-all flex items-center justify-between ${
                      isChecked
                        ? 'bg-[#10A5B5]/10 border-[#10A5B5] text-[#171527] font-bold'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span>{act}</span>
                    <span className="text-lg">{isChecked ? '✓' : '+'}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <input
              type="text"
              placeholder="Your Name"
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

          <button
            type="submit"
            className="w-full bg-[#5C8A3F] hover:bg-[#4a7032] text-white font-bold py-4 rounded-xl transition-colors shadow-lg text-base"
          >
            Send My Custom Choices ({selected.length} Selected)
          </button>
        </form>
      ) : (
        <div className="text-center py-8 bg-[#5C8A3F]/10 rounded-xl border border-[#5C8A3F]/30">
          <h4 className="text-2xl font-bold mb-2 text-[#171527]">Proposal Request Sent!</h4>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Thanks {name}! We received your request with {selected.length} selected experiences. We will contact you at <strong>{contact}</strong> shortly with your personalized itinerary!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-xs font-bold text-[#10A5B5] underline"
          >
            Edit Choices
          </button>
        </div>
      )}
    </div>
  );
}