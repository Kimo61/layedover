import Link from 'next/link';

export default function ComingSoon() {
  return (
    <main className="flex flex-col flex-grow bg-[#171527] min-h-[80vh]">
      {/* Cinematic Hero Section */}
      <section className="relative w-full flex-grow flex flex-col items-center justify-center px-8 md:px-24 overflow-hidden py-24">
        
        {/* Background Video with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#171527]/80 via-[#171527]/50 to-[#171527]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl text-center flex flex-col items-center mt-12">
          <span className="text-[#10A5B5] font-bold uppercase tracking-widest text-xs md:text-sm mb-6 block border border-[#10A5B5]/50 bg-[#10A5B5]/10 px-5 py-2 rounded-full backdrop-blur-sm">
            Layedover LLC • Bali Operations
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Something extraordinary is <br />
            <span className="text-[#10A5B5]">landing soon.</span>
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            We are currently perfecting our digital platform. While our website is under construction, our ground operations in Bali are fully active. We are actively establishing white-label B2B partnerships and accepting direct VIP bookings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a 
              href="mailto:contact@layedover.co" 
              className="bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Email for B2B Inquiries
            </a>
            <a 
              href="https://wa.me/393500757397" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#5C8A3F] hover:bg-[#4a7032] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              WhatsApp Commercial Director
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}