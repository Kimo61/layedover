import Link from 'next/link';
import Image from 'next/image';

export default function Getaways() {
  return (
    <main className="min-h-screen bg-[#171527] flex flex-col text-white selection:bg-[#10A5B5] selection:text-white">
      
      {/* Cinematic Hero Section */}
      <section className="relative w-full py-32 px-8 md:px-24 bg-[#171527] flex flex-col justify-center items-center text-center overflow-hidden min-h-[60vh]">
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-row items-center justify-center gap-4 mb-8 border border-white/10 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm shadow-xl">
            <span className="font-extrabold tracking-tight text-lg">
              <span className="text-white">Layed</span><span className="text-[#10A5B5]">over</span>
            </span>
            <div className="w-[1px] h-4 bg-white/20"></div>
            <span className="text-[#D4AF37] font-black text-xs uppercase tracking-[0.4em]">Selection</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
            Curated Getaways.
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium">
            Time to slow down, reconnect, and choose each other again. We handle every detail of your special occasion so you can simply arrive and celebrate.
          </p>
        </div>
      </section>

      {/* 1. THE RESET */}
      <section className="w-full relative border-t border-white/5">
        <div className="flex flex-col lg:flex-row w-full min-h-[80vh]">
          {/* Image Half */}
          <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto">
            <Image src="/thereset.jpeg" alt="The Reset" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#171527] hidden lg:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#171527] to-transparent lg:hidden"></div>
          </div>
          {/* Content Half */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-12 md:p-24 bg-[#171527] relative">
            <div className="max-w-xl w-full">
              <span className="text-[#10A5B5] font-black uppercase tracking-[0.3em] text-sm mb-4 block">01 / Retreat</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">The Reset</h2>
              <p className="text-xl text-gray-300 mb-10 font-medium leading-relaxed italic border-l-2 border-[#D4AF37] pl-4">
                A Bali escape to disappear, recharge and come back different.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-400 mb-12">
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Private villa</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Wellness & spa day</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Jungle or ocean experience</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Sunset ritual</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Private dinner</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Digital-detox day</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Personalised Bali experience</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Private driver</li>
              </ul>

              <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-[#171527] hover:bg-[#D4AF37] font-bold px-10 py-5 rounded-xl transition-all w-full md:w-auto uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                Inquire About The Reset &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LUNE DE MIEL (Reversed Layout) */}
      <section className="w-full relative border-t border-white/5">
        <div className="flex flex-col lg:flex-row-reverse w-full min-h-[80vh]">
          {/* Image Half */}
          <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto">
            <Image src="/lunedemiel.jpeg" alt="Lune De Miel" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1F1D36] hidden lg:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D36] to-transparent lg:hidden"></div>
          </div>
          {/* Content Half */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-12 md:p-24 bg-[#1F1D36] relative">
            <div className="max-w-xl w-full">
              <span className="text-[#10A5B5] font-black uppercase tracking-[0.3em] text-sm mb-4 block">02 / Romance</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Lune De Miel</h2>
              <p className="text-xl text-gray-300 mb-10 font-medium leading-relaxed italic border-l-2 border-[#D4AF37] pl-4">
                A romantic Bali escape designed strictly for two.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-400 mb-12">
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Private airport transfer</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Romantic villa setup</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Couple’s spa treatment</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Private sunset experience</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Candlelit dinner</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Couple photoshoot</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Private day excursion</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Surprise romantic touch</li>
              </ul>

              <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#10A5B5] text-white hover:bg-[#0d8996] font-bold px-10 py-5 rounded-xl transition-all w-full md:w-auto uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(16,165,181,0.2)]">
                Inquire About Lune De Miel &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GIRLS GONE WILD */}
      <section className="w-full relative border-t border-white/5">
        <div className="flex flex-col lg:flex-row w-full min-h-[80vh]">
          {/* Image Half */}
          <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto">
            <Image src="/girlgonewild.jpeg" alt="Girls Gone Wild" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#171527] hidden lg:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#171527] to-transparent lg:hidden"></div>
          </div>
          {/* Content Half */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-12 md:p-24 bg-[#171527] relative">
            <div className="max-w-xl w-full">
              <span className="text-[#10A5B5] font-black uppercase tracking-[0.3em] text-sm mb-4 block">03 / Celebration</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Girls Gone Wild</h2>
              <p className="text-xl text-gray-300 mb-10 font-medium leading-relaxed italic border-l-2 border-[#D4AF37] pl-4">
                A Bali getaway built around friendship, freedom and unforgettable nights.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-400 mb-12">
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Airport transfers</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Villa setup & drinks</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Beach club day</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Spa & beauty experience</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Private boat day</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Sunset cocktails</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Night out in Seminyak</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Private driver throughout</li>
              </ul>

              <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#171527] hover:bg-white font-bold px-10 py-5 rounded-xl transition-all w-full md:w-auto uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                Inquire About Girls Gone Wild &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BABYMOON (Reversed Layout) */}
      <section className="w-full relative border-t border-white/5 border-b">
        <div className="flex flex-col lg:flex-row-reverse w-full min-h-[80vh]">
          {/* Image Half */}
          <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto">
            <Image src="/babymoon.jpeg" alt="Babymoon" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1F1D36] hidden lg:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D36] to-transparent lg:hidden"></div>
          </div>
          {/* Content Half */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-12 md:p-24 bg-[#1F1D36] relative">
            <div className="max-w-xl w-full">
              <span className="text-[#10A5B5] font-black uppercase tracking-[0.3em] text-sm mb-4 block">04 / Serenity</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Babymoon</h2>
              <p className="text-xl text-gray-300 mb-10 font-medium leading-relaxed italic border-l-2 border-[#D4AF37] pl-4">
                A slow, beautiful escape before the little one arrives.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-400 mb-12">
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Private airport transfer</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Pregnancy-friendly spa</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Beautiful villa stay</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Gentle private excursion</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Romantic couple’s dinner</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Sunset experience</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Maternity photoshoot</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37] text-xl">•</span> Daily private driver</li>
              </ul>

              <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-[#1F1D36] hover:bg-[#10A5B5] hover:text-white font-bold px-10 py-5 rounded-xl transition-all w-full md:w-auto uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(16,165,181,0.2)]">
                Inquire About Babymoon &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Premium CTA Section */}
      <section className="w-full py-32 px-8 bg-[#171527] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pin.png')] bg-no-repeat bg-center opacity-[0.02] scale-150"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to start planning?</h3>
          <p className="text-gray-400 mb-12 text-lg">
            Contact our concierge team directly to begin tailoring one of these exclusive Layedover Selection experiences for your upcoming celebration.
          </p>
          <Link href="/contact" className="inline-block bg-[#D4AF37] hover:bg-white text-[#171527] font-black uppercase tracking-widest px-12 py-6 rounded-2xl transition-all shadow-[0_20px_50px_rgba(212,175,55,0.25)] hover:scale-105">
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}