'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WEB3FORMS_KEY = "06d08439-449c-4bf4-acd0-ae190e38d777";

const READY_PACKAGES = [
  { 
    id: 1, 
    title: 'Couples Reset', 
    duration: '8 Days / 7 Nights', 
    route: 'Sidemen • Amed • Nusa Dua',
    image: '/couplereset.jpg', 
    desc: 'A romantic escape featuring sunrise 4x4 volcano treks, hidden waterfalls, luxury spa treatments, and private ADV 160cc coastal rides.', 
    tags: ['Romance', 'Nature'],
    details: ['Half-day Jungle dirt Bike', 'Volcano 4X4 sunrise excursion', 'Hidden Waterfall escape', 'Water palace & garden visit', 'Panoramic viewpoint hike', '2 Luxury spa treatments', 'ADV 160cc for 8 days']
  },
  { 
    id: 2, 
    title: 'Chasing Sunsets', 
    duration: '9 Days / 8 Nights', 
    route: 'Uluwatu • Gili T',
    image: '/chasingsunset.jpg', 
    desc: 'Experience dramatic cliffside fire dances, sunset horseback riding, private Gili T snorkeling, and premium Azure Beach Club access.', 
    tags: ['Sunsets', 'Islands'],
    details: ['Uluwatu Temple & Kecak fire dance', 'Couples’ surf lesson', 'Private snorkelling trip in Gili T', 'White water rafting', 'Sunset Horseback Riding', 'Azure Beach Club', 'D’Tukad River Club']
  },
  { 
    id: 3, 
    title: 'Move Your Body, Heal Your Body', 
    duration: '9 Days / 8 Nights', 
    route: 'Seminyak • Ubud',
    image: '/agung1.jpg', 
    desc: 'Balance vibrant beach clubs with deep jungle wellness. Features Melukat water healing, Tanah Lot sunsets, and lush rice terrace treks.', 
    tags: ['Wellness', 'Active'],
    details: ['Beach club day in Seminyak', 'Tanah Lot sunset visit', 'Melukat water healing', 'ATV kebur & Aloha swing', 'Tegalalang rice terraces', 'Sacred Monkey Forest', '2 Luxury spa treatments']
  },
  { 
    id: 4, 
    title: 'Body and Soul', 
    duration: '9 Days / 8 Nights', 
    route: 'Canggu • Ubud',
    image: '/bodysoul.jpg', 
    desc: 'Combine coastal energy with Ubud\'s spiritual core. Enjoy ATV jungle adrenaline, immersive sound healing, and Mount Batur at dawn.', 
    tags: ['Balance', 'Culture'],
    details: ['ATV jungle adventure or dirt bike', 'Mount Batur sunrise jeep excursion', 'Sound healing or yoga session', 'Tukad Cepung waterfall', 'Coffee plantation tasting', 'Rafting or tubing', '2 Luxury spa treatments']
  },
  { 
    id: 5, 
    title: 'The Famous Island Life', 
    duration: '15 Days / 14 Nights', 
    route: 'Canggu • Uluwatu • Seminyak',
    image: '/islandlife.jpg', 
    desc: 'The ultimate southern traverse. Features cliffside paragliding, iconic beach clubs, purification ceremonies, and Jimbaran seafood sunsets.', 
    tags: ['Epic', 'Lifestyle'],
    details: ['VIP beach club experience at FINNS', 'Paragliding experience over Uluwatu cliffs', 'Uluwatu Temple and Kecak fire dance', 'Traditional Balinese purification ceremony', 'Sunset seafood dinner in Jimbaran', 'Sunset experience at La Brisa', '3 Luxury spa treatments']
  },
  { 
    id: 6, 
    title: 'Bali Coastal Discovery', 
    duration: '15 Days / 14 Nights', 
    route: 'Seminyak • Amed • Lovina',
    image: '/coastal.jpg', 
    desc: 'Journey to the serene north and east. Discover black sand coastlines, sunrise dolphin watching, and Japanese shipwreck snorkeling.', 
    tags: ['Coastal', 'Exploration'],
    details: ['Snorkeling at Japanese Shipwreck', 'Sunrise dolphin-watching excursion in Lovina', 'Traditional jukung sunset sailing', 'Aling-Aling waterfalls and natural slides', 'Snorkeling at Menjangan Island', 'Banjar Hot Springs', '3 Luxury spa treatments']
  },
  { 
    id: 7, 
    title: 'Bali Hidden Paradise', 
    duration: '15 Days / 14 Nights', 
    route: 'Ubud • Sidemen • Nusa Lembongan',
    image: '/paradise.jpg', 
    desc: 'Venture completely off grid. Manta ray snorkeling, mangrove kayaking, Sidemen valley treks, and untouched eastern cliff viewpoints.', 
    tags: ['Hidden Gems', 'Nature'],
    details: ['Snorkeling with manta rays at Nusa Penida', 'Mangrove forest kayaking in Lembongan', 'Sidemen rice terraces countryside walk', 'Gembleng waterfall natural infinity pools', 'Ayung River rafting adventure', 'Blue Lagoon cliff viewpoint', '3 Luxury spa treatments']
  },
  { 
    id: 8, 
    title: 'Bali Family Escape', 
    duration: '8 Days / 7 Nights', 
    route: 'Sanur • Nusa Dua',
    image: '/family1.jpg', 
    desc: 'Tailored entirely around family pacing. Features Bali Safari Marine Park, Devdan cultural shows, beachfront cycling, and glass-bottom boats.', 
    tags: ['Family', 'Relaxation'],
    details: ['Bali Safari & Marine Park adventure', 'Glass-bottom boat experience in Nusa Dua', 'Beachfront cycling along Sanur promenade', 'Devdan cultural show at Nusa Dua Theatre', 'Turtle Conservation and Education Center', '2 Luxury spa treatments for parents', 'Children friendly beach club experience']
  },
  { 
    id: 9, 
    title: 'The Family Island Adventure', 
    duration: '15 Days / 14 Nights', 
    route: 'Sanur • Ubud • Lombok • Jimbaran',
    image: '/family2.jpg', 
    desc: 'A comprehensive multi-island family journey. Domestic flights to Lombok, chocolate making, gentle rice field walks, and traditional Sasak villages.', 
    tags: ['Family', 'Adventure'],
    details: ['Domestic flight to Lombok included', 'Balinese chocolate-making workshop', 'Traditional Sasak village experience', 'Tegalalang rice terraces & gentle walks', 'Jimbaran sunset seafood dinner', '3 Luxury spa treatments for parents', 'Family-friendly pottery workshop']
  }
];

// --- Clickable 3D Flip Package Card Component ---
function FlipPackageCard({ pkg }: { pkg: any }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactInput, setContactInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCardClick = () => {
    if (!isModalOpen) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Package Inquiry: ${pkg.title}`,
          email: contactInput,
          message: `Client requested details/pricing for: ${pkg.title} (${pkg.duration})`,
        }),
      });
      if (res.ok) setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full h-[540px] z-10 hover:z-40 transition-transform duration-500 hover:scale-[1.02]" style={{ perspective: '1000px' }}>
      {/* Ambient Glow */}
      <div className={`absolute -inset-1 rounded-[2.5rem] bg-[#10A5B5] opacity-25 blur-2xl transition-all duration-700 pointer-events-none ${isFlipped ? 'opacity-60 blur-3xl' : ''}`}></div>
      
      {/* 3D Rotating Wrapper - Uses Inline Styles for bulletproof rendering */}
      <div 
        onClick={handleCardClick}
        className="relative w-full h-full transition-transform duration-700 cursor-pointer"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
        }}
      >
        
        {/* === FRONT OF CARD === */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#1F1D36] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 flex flex-col"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white font-black px-5 py-2 rounded-bl-2xl text-xs z-30 shadow-lg uppercase tracking-widest">
            20% OFF
          </div>
          <div className="relative h-[50%] w-full overflow-hidden">
            <Image src={pkg.image} fill alt={pkg.title} className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D36] via-[#1F1D36]/20 to-transparent"></div>
          </div>
          <div className="relative p-8 flex flex-col flex-grow -mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {pkg.tags.map((tag: string) => (
                <span key={tag} className="bg-[#10A5B5]/10 text-[#10A5B5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#10A5B5]/20">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-wider block">{pkg.duration}</span>
              <span className="text-[#D4AF37] text-[10px] font-extrabold uppercase tracking-widest block mt-1">{pkg.route}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{pkg.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{pkg.desc}</p>
            
            {/* Flip Indicator */}
            <div className="mt-auto pt-4 flex items-center justify-between text-[#10A5B5] text-xs font-bold uppercase tracking-widest border-t border-white/5">
              Click to view itinerary
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </div>
          </div>
        </div>

        {/* === BACK OF CARD === */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#171527] rounded-[2rem] overflow-hidden shadow-2xl border border-[#10A5B5]/50 flex flex-col p-8"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-black text-white mb-1 leading-tight">{pkg.title}</h3>
              <span className="text-[#10A5B5] text-[10px] font-extrabold uppercase tracking-widest block">{pkg.duration}</span>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
              className="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-1.5 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto pr-3 space-y-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#10A5B5]/30 [&::-webkit-scrollbar-thumb]:rounded-full mb-4">
            <p className="text-gray-300 text-sm leading-relaxed pb-3 border-b border-white/10">{pkg.desc}</p>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Package Highlights</h4>
              <ul className="space-y-2">
                {pkg.details.map((detail: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400 font-medium">
                    <span className="text-[#D4AF37] shrink-0 mt-0.5">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
            className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white text-center font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(16,165,181,0.4)] flex items-center justify-center gap-2 transition-colors shrink-0 uppercase tracking-widest text-sm"
          >
            Contact For Pricing &rarr;
          </button>
        </div>

      </div>

      {/* === POP-UP MODAL === */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#1F1D36] border border-[#10A5B5]/40 p-5 md:p-8 rounded-2xl md:rounded-3xl max-w-[90%] md:max-w-md w-full shadow-2xl relative text-left cursor-default">
            <button 
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); setIsSubmitted(false); setContactInput(''); }}
              className="absolute top-4 right-4 md:top-5 md:right-5 text-gray-400 hover:text-white text-lg md:text-xl font-bold"
            >
              &times;
            </button>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 md:mb-2">{pkg.title}</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">Request pricing and full itinerary details.</p>
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 md:mb-2">Your Email or WhatsApp</label>
                  <input 
                    type="text" required placeholder="name@example.com / +1..." value={contactInput} onChange={(e) => setContactInput(e.target.value)}
                    className="w-full bg-[#171527] border border-white/10 rounded-lg md:rounded-xl p-3 md:p-4 text-white text-xs md:text-sm focus:outline-none focus:border-[#10A5B5]"
                  />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold py-2.5 md:py-3.5 rounded-lg md:rounded-xl transition-colors shadow-md text-xs md:text-sm uppercase tracking-wider disabled:opacity-50 mt-2">
                  {isSubmitting ? 'Sending Request...' : 'Get Pricing & Details'}
                </button>
              </form>
            ) : (
              <div className="text-center py-4 md:py-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5C8A3F]/20 text-[#5C8A3F] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold">✓</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-5 md:mb-6">Thank you! We have logged your details and will reach out shortly.</p>
                <button onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); setIsSubmitted(false); setContactInput(''); }} className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 md:py-3 rounded-lg md:rounded-xl transition-colors text-xs md:text-sm">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PackagesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#171527] text-white pt-24 pb-48 px-8 md:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full mb-12 text-center relative z-10">
        <Link href="/" className="text-gray-400 hover:text-[#10A5B5] text-sm font-bold inline-flex items-center gap-2 mb-8 transition-colors">
          <span>&larr;</span> Back to Home
        </Link>
        <span className="text-[#10A5B5] font-bold uppercase tracking-widest text-sm block mb-3">Curated Multi-Day Trips</span>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">Layedover Packages</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Select from our pre-built, road-tested itineraries. <strong>Tap or click on any experience</strong> to flip the card and reveal full details.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {READY_PACKAGES.map((pkg) => (
          <FlipPackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl pointer-events-none">
        <div className="relative bg-[#171527]/90 backdrop-blur-2xl border-2 border-[#10A5B5]/80 shadow-[0_10px_50px_rgba(16,165,181,0.35)] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto hover:border-[#10A5B5] transition-all duration-300">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#10A5B5]/30 via-[#10A5B5]/50 to-[#10A5B5]/30 blur-xl opacity-60 pointer-events-none -z-10"></div>
          <div className="flex items-center gap-5">
            <div className="relative shrink-0 w-14 h-14 md:w-16 md:h-16 bg-[#10A5B5]/15 border border-[#10A5B5] rounded-2xl flex items-center justify-center p-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-2xl bg-[#10A5B5] opacity-25"></span>
              <Image src="/pin.png" alt="Layedover Pin" width={40} height={40} className="w-full h-full object-contain relative z-10 drop-shadow-md" />
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#10A5B5]/20 border border-[#10A5B5]/40 px-3 py-0.5 rounded-full mb-1">
                <span className="w-2 h-2 rounded-full bg-[#10A5B5] animate-pulse"></span>
                <span className="text-[#10A5B5] font-black uppercase text-[10px] tracking-widest">Guaranteed Best Rates</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">All-Inclusive Escapes</h2>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 w-full md:w-auto">
            <span className="text-gray-400 text-xs font-extrabold uppercase tracking-widest block mb-1">Starting From</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-black text-[#10A5B5] drop-shadow-[0_4px_12px_rgba(16,165,181,0.4)]">$1,499</span>
              <span className="text-gray-300 font-bold text-sm uppercase tracking-wider">/ package</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}