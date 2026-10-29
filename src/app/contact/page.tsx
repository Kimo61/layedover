'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the data to send to Web3Forms
    const payload = {
      access_key: "06d08439-449c-4bf4-acd0-ae190e38d777",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#171527] text-white py-16 px-8 md:px-24 pt-32">
      
      {/* Back Link */}
      <div className="max-w-4xl mx-auto w-full mb-8">
        <Link href="/" className="text-gray-400 hover:text-[#10A5B5] text-sm font-bold flex items-center gap-2 transition-colors">
          <span>&larr;</span> Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto w-full bg-[#1F1D36] border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#10A5B5] font-bold uppercase tracking-widest text-xs block mb-2">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">Contact Layedover</h1>
          <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
            Have questions about a custom getaway, cabin crew layover, or B2B collaboration? Send us a message below or connect directly through our channels.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 mb-16">
            
            {/* Spam Protection Checkbox (Hidden) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#171527] border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-[#10A5B5] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-300">Email or WhatsApp</label>
                <input 
                  type="text" 
                  name="email"
                  required
                  placeholder="name@example.com / +1..."
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#171527] border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-[#10A5B5] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-300">Your Message</label>
              <textarea 
                name="message"
                rows={5}
                required
                placeholder="Tell us about your flight schedule, preferred dates, or request..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#171527] border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-[#10A5B5] transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-extrabold uppercase tracking-wider py-4 rounded-xl transition-all shadow-lg ${
                isSubmitting 
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                  : 'bg-[#10A5B5] hover:bg-[#0d8996] text-white'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        ) : (
          <div className="text-center py-12 bg-[#10A5B5]/10 rounded-2xl border border-[#10A5B5]/30 mb-16">
            <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
            <p className="text-gray-300 text-sm">Thank you {formData.name}. We have received your request and will get back to you shortly.</p>
          </div>
        )}

        {/* Direct Connect Buttons Side-by-Side */}
        <div className="border-t border-white/10 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Direct Touchpoints</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* 1. WhatsApp */}
            <a 
              href="https://wa.me/393500757397" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center p-5 bg-[#171527] hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] rounded-2xl transition-all duration-300 shadow-xl hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 group-hover:bg-white/20 flex items-center justify-center text-[#25D366] group-hover:text-white transition-colors mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <h3 className="font-bold text-base tracking-wide text-white">WhatsApp</h3>
              <p className="text-xs text-gray-400 group-hover:text-white/90 mt-1">+39 350 075 7397</p>
            </a>

            {/* 2. Instagram */}
            <a 
              href="https://instagram.com/layedoverbali" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center p-5 bg-[#171527] hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] border border-white/10 hover:border-transparent rounded-2xl transition-all duration-300 shadow-xl hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E1306C]/20 group-hover:bg-white/20 flex items-center justify-center text-[#E1306C] group-hover:text-white transition-colors mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-bold text-base tracking-wide text-white">Instagram</h3>
              <p className="text-xs text-gray-400 group-hover:text-white/90 mt-1">@layedoverbali</p>
            </a>

            {/* 3. Phone */}
            <a 
              href="tel:+393500757397" 
              className="group relative flex flex-col items-center p-5 bg-[#171527] hover:bg-[#5C8A3F] border border-white/10 hover:border-[#5C8A3F] rounded-2xl transition-all duration-300 shadow-xl hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#5C8A3F]/20 group-hover:bg-white/20 flex items-center justify-center text-[#5C8A3F] group-hover:text-white transition-colors mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-base tracking-wide text-white">Phone</h3>
              <p className="text-xs text-gray-400 group-hover:text-white/90 mt-1">+39 350 075 7397</p>
            </a>

          </div>
        </div>

      </div>
    </main>
  );
}