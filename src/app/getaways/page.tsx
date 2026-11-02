import Link from 'next/link';
import Image from 'next/image';

export default function Getaways() {
  return (
    <main className="min-h-screen bg-[#0E0D1B] flex flex-col text-white selection:bg-[#D4AF37] selection:text-[#0E0D1B]">
      
      {/* Cinematic Hero Section */}
      <section className="relative w-full py-32 px-8 md:px-24 flex flex-col justify-center items-center text-center overflow-hidden min-h-[70vh] border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[#10A5B5]/10 to-transparent blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-gradient-to-t from-[#D4AF37]/5 to-transparent blur-[100px] pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center mt-12">
          <div className="inline-flex items-center gap-4 mb-10 px-2">
            <span className="w-12 h-[1px] bg-white/30"></span>
            <span className="text-[#D4AF37] font-bold text-xs md:text-sm uppercase tracking-[0.5em]">
              The Layedover Selection
            </span>
            <span className="w-12 h-[1px] bg-white/30"></span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white mb-8 tracking-tighter drop-shadow-2xl leading-[1.1]">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Getaways.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Time to slow down, reconnect, and choose each other again. We handcraft the unseen details of your special occasion so you can simply arrive and celebrate.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 py-24 space-y-32 md:space-y-48">

        {/* 1. THE RESET */}
        <section className="relative group w-full flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="w-full lg:w-[60%] h-[500px] lg:h-[750px] relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-0">
            <Image src="/thereset.jpeg" alt="The Reset" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
          </div>
          
          {/* Content Overlap */}
          <div className="w-full lg:w-[45%] lg:-ml-[10%] mt-[-80px] lg:mt-0 relative z-10">
            <div className="bg-[#171527]/80 backdrop-blur-2xl p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#10A5B5]/40">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[#10A5B5] font-black uppercase tracking-[0.3em] text-xs"> Retreat</span>
                <span className="w-12 h-[1px] bg-white/20"></span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">The Reset</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 font-medium leading-relaxed">
                A Bali escape to disappear, recharge, and come back completely different.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mb-12 border-t border-white/10 pt-8">
                {['Private villa', 'Wellness & spa day', 'Jungle or ocean experience', 'Sunset ritual', 'Private dinner', 'Digital-detox day', 'Personalised Bali experience', 'Private driver'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#D4AF37] text-sm mt-1">✦</span>
                    <span className="text-gray-400 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="group/btn flex items-center justify-between bg-[#10A5B5] text-white font-bold px-8 py-5 rounded-2xl transition-all hover:bg-[#D4AF37] uppercase tracking-widest text-xs w-full">
                <span>Inquire About The Reset</span>
                <span className="group-hover/btn:translate-x-2 transition-transform duration-300">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. LUNE DE MIEL (Reversed) */}
        <section className="relative group w-full flex flex-col lg:flex-row-reverse items-center">
          {/* Image */}
          <div className="w-full lg:w-[60%] h-[500px] lg:h-[750px] relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-0">
            <Image src="/lunedemiel.jpeg" alt="Lune De Miel" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
          </div>
          
          {/* Content Overlap */}
          <div className="w-full lg:w-[45%] lg:-mr-[10%] mt-[-80px] lg:mt-0 relative z-10">
            <div className="bg-[#171527]/80 backdrop-blur-2xl p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#D4AF37]/40">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-xs"> Romance</span>
                <span className="w-12 h-[1px] bg-white/20"></span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">Lune De Miel</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 font-medium leading-relaxed">
                A romantic Bali escape strictly crafted for two. Intimate, breathless, and unforgettable.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mb-12 border-t border-white/10 pt-8">
                {['Private airport transfer', 'Romantic villa setup', 'Couple’s spa treatment', 'Private sunset experience', 'Candlelit dinner', 'Couple photoshoot', 'Private day excursion', 'Surprise romantic touch'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#10A5B5] text-sm mt-1">✦</span>
                    <span className="text-gray-400 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="group/btn flex items-center justify-between bg-[#10A5B5] text-white font-bold px-8 py-5 rounded-2xl transition-all hover:bg-[#0d8996] uppercase tracking-widest text-xs w-full shadow-[0_10px_30px_rgba(16,165,181,0.2)]">
                <span>Inquire About Lune De Miel</span>
                <span className="group-hover/btn:translate-x-2 transition-transform duration-300">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. GIRLS GONE WILD */}
        <section className="relative group w-full flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="w-full lg:w-[60%] h-[500px] lg:h-[750px] relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-0">
            <Image src="/girlgonewild.jpeg" alt="Girls Gone Wild" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
          </div>
          
          {/* Content Overlap */}
          <div className="w-full lg:w-[45%] lg:-ml-[10%] mt-[-80px] lg:mt-0 relative z-10">
            <div className="bg-[#171527]/80 backdrop-blur-2xl p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl transition-all duration-500 hover:border-pink-500/40">
              <div className="flex items-center justify-between mb-8">
                <span className="text-pink-400 font-black uppercase tracking-[0.3em] text-xs"> Celebration</span>
                <span className="w-12 h-[1px] bg-white/20"></span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">Girls Gone Wild</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 font-medium leading-relaxed">
                A Bali getaway built around friendship, absolute freedom, and unforgettable nights.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mb-12 border-t border-white/10 pt-8">
                {['Airport transfers', 'Villa setup & drinks', 'Beach club day', 'Spa & beauty experience', 'Private boat day', 'Sunset cocktails', 'Night out in Seminyak', 'Private driver throughout'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#D4AF37] text-sm mt-1">✦</span>
                    <span className="text-gray-400 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="group/btn flex items-center justify-between bg-[#10A5B5] text-white font-bold px-8 py-5 rounded-2xl transition-all hover:bg-white uppercase tracking-widest text-xs w-full shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                <span>Inquire About Girls Gone Wild</span>
                <span className="group-hover/btn:translate-x-2 transition-transform duration-300">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. AMALUNA SPECIAL (Reversed) */}
        <section className="relative group w-full flex flex-col lg:flex-row-reverse items-center">
          {/* Image */}
          <div className="w-full lg:w-[60%] h-[500px] lg:h-[750px] relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-0">
            <Image src="/amalunapack.jpeg" alt="AmaLuna Special" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
          </div>
          
          {/* Content Overlap */}
          <div className="w-full lg:w-[45%] lg:-mr-[10%] mt-[-80px] lg:mt-0 relative z-10">
            <div className="bg-[#171527]/80 backdrop-blur-2xl p-10 md:p-16 rounded-3xl border border-[#A28BC4]/30 shadow-[0_20px_50px_rgba(162,139,196,0.05)] transition-all duration-500 hover:border-[#A28BC4]/60">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[#A28BC4] font-black uppercase tracking-[0.3em] text-xs"> Collab</span>
                <span className="w-12 h-[1px] bg-white/20"></span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 tracking-tight">AmaLuna Special</h2>
             

              <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium leading-relaxed">
                An exclusive collaboration for the woman behind the mother. Reconnect and recover with ultimate family serenity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mb-12 border-t border-white/10 pt-8">
                {['4 Nights Sanur & 4 Nights Ubud', 'Postpartum Wellness & Massages', 'Parent & Baby Bonding', 'Private Beach Photoshoot', 'Professional Nanny Sessions', 'Full Baby Essentials Included', 'Private Transfers & Car Seat', 'Curated Romantic Dinner'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#A28BC4] text-sm mt-1">✦</span>
                    <span className="text-gray-400 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="group/btn flex items-center justify-between bg-[#A28BC4] text-white font-bold px-8 py-5 rounded-2xl transition-all hover:bg-[#8b72af] uppercase tracking-widest text-xs w-full shadow-[0_10px_30px_rgba(162,139,196,0.2)]">
                <span>Inquire About AmaLuna</span>
                <span className="group-hover/btn:translate-x-2 transition-transform duration-300">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Final Premium CTA Section */}
      <section className="w-full py-32 md:py-48 px-8 bg-[#0E0D1B] text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full"></div>
           <div className="absolute inset-0 bg-[url('/pin.png')] bg-no-repeat bg-center opacity-[0.015] scale-[2] md:scale-150 pointer-events-none"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-xs mb-6">Your Invitation</span>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter">Ready to escape?</h3>
          <p className="text-gray-400 mb-14 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Contact our concierge team directly to begin tailoring one of these exclusive Layedover Selection experiences for your upcoming celebration.
          </p>
          <Link href="/contact" className="group relative inline-flex items-center justify-center bg-white text-[#0E0D1B] font-black uppercase tracking-widest px-14 py-6 rounded-2xl transition-all hover:scale-105 overflow-hidden">
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
          </Link>
        </div>
      </section>

    </main>
  );
}