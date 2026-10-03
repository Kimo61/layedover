import Link from 'next/link';

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#171527] text-white flex flex-col items-center justify-between p-6 md:p-12">
      
      {/* Top Header / Brand Logo */}
      <div className="w-full max-w-md flex flex-col items-center mt-8 mb-6 text-center">
        <span className="font-extrabold tracking-tight text-4xl mb-2">
          <span className="text-white">Layed</span><span className="text-[#10A5B5]">over</span>
        </span>
        <span className="text-gray-400 font-bold text-xs uppercase tracking-[0.25em] mb-4">
          The Real Bali, Between Flights
        </span>
        <p className="text-gray-300 text-xs max-w-xs leading-relaxed">
          Bali-focused destination management and travel concierge. Seamless journeys, excursions, and VIP access.
        </p>
      </div>

      {/* Links Container */}
      <div className="w-full max-w-md flex flex-col gap-4 mb-auto">
        
        {/* 1. Official Website */}
        <a 
          href="https://layedover.co" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 bg-[#1F1D36] hover:bg-[#10A5B5] border border-white/10 hover:border-[#10A5B5] rounded-xl transition-all duration-300 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#10A5B5]/20 group-hover:bg-white/20 flex items-center justify-center text-[#10A5B5] group-hover:text-white transition-colors">
              {/* Globe Icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-wide text-white">Official Website</h3>
              <p className="text-xs text-gray-400 group-hover:text-white/80">layedover.co</p>
            </div>
          </div>
          <span className="text-gray-500 group-hover:text-white transition-colors">&rarr;</span>
        </a>

        {/* 2. Direct WhatsApp Concierge (+62 823-1408-8019) */}
        <a 
          href="https://wa.me/6282314088019" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 bg-[#1F1D36] hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] rounded-xl transition-all duration-300 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 group-hover:bg-white/20 flex items-center justify-center text-[#25D366] group-hover:text-white transition-colors">
              {/* WhatsApp Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-wide text-white">WhatsApp Concierge</h3>
              <p className="text-xs text-gray-400 group-hover:text-white/80">+62 823-1408-8019</p>
            </div>
          </div>
          <span className="text-gray-500 group-hover:text-white transition-colors">&rarr;</span>
        </a>

        {/* 3. Instagram Channel (@layedoverbali) */}
        <a 
          href="https://instagram.com/layedoverbali" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 bg-[#1F1D36] hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] border border-white/10 hover:border-transparent rounded-xl transition-all duration-300 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#E1306C]/20 group-hover:bg-white/20 flex items-center justify-center text-[#E1306C] group-hover:text-white transition-colors">
              {/* Instagram Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-wide text-white">Instagram Channel</h3>
              <p className="text-xs text-gray-400 group-hover:text-white/80">@layedoverbali</p>
            </div>
          </div>
          <span className="text-gray-500 group-hover:text-white transition-colors">&rarr;</span>
        </a>

      </div>

      {/* Footer Branding */}
      <div className="w-full max-w-md text-center mt-8 pt-6 border-t border-white/10 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Layedover LLC. All rights reserved.</p>
        <Link href="/" className="text-[#10A5B5] hover:underline mt-1 block">
          Return to layedover.co
        </Link>
      </div>

    </main>
  );
}