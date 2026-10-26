import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#171527] text-white pt-16 pb-8 px-8 md:px-24 border-t-4 border-[#10A5B5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Description & Secure Payments */}
        <div className="md:col-span-2">
          <div className="flex flex-col items-start justify-start leading-none mb-4">
            <span className="font-extrabold tracking-tight text-3xl mb-1">
              <span className="text-white">Layed</span><span className="text-[#10A5B5]">over</span>
            </span>
            <span className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">The Real Bali, Between Flights</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-lg">
            Bali-focused destination management and travel concierge company. We bring together bespoke journey planning, one-day excursions, special events, cabin crew exclusives, travel concierge and on-ground expertise to create considered, seamless experiences across Bali.
          </p>
          
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#10A5B5] mb-3 block">Secured Payments</span>
            <div className="flex items-center">
              {/* Clean Stripe Badge */}
              <div className="bg-white text-[#635BFF] font-black text-sm px-3 py-1 rounded shadow-sm tracking-tighter">
                <span>stripe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#10A5B5] font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
          <ul className="space-y-3 text-sm text-gray-300 font-medium">
            <li><Link href="/#multi-day" className="hover:text-white transition-colors">Multi-Days Trip</Link></li>
            <li><Link href="/#cabin-crew" className="hover:text-white transition-colors">Cabin Crew Special</Link></li>
            <li><Link href="/#excursions" className="hover:text-white transition-colors">1-Day Excursions</Link></li>
            <li><Link href="/getaways" className="hover:text-[#D4AF37] transition-colors">Layedover Selection</Link></li>
            <li><Link href="/#reality-check" className="hover:text-white transition-colors">Reality Check</Link></li>
          </ul>
        </div>

        {/* Corporate Details & Interactive Touchpoints */}
        <div>
          <h4 className="text-[#10A5B5] font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="font-bold text-white mb-1">Layedover LLC</li>
            <li className="leading-relaxed">
              30 N Gould St Ste R<br />
              Sheridan, WY 82801
            </li>
            <li className="text-xs text-gray-500 -mt-1">
              Wyoming SOS ID: 2026-002092117
            </li>
          </ul>

          {/* Distanced Contact Buttons Section */}
          <div className="mt-10 flex flex-col gap-4">
            <Link 
              href="/contact" 
              className="bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold px-6 py-3 rounded-lg transition-all shadow-md text-center text-sm inline-block"
            >
              Contact Us
            </Link>
            
            <div className="flex gap-3 flex-wrap">
              {/* Website */}
              <a 
                href="https://layedover.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1F1D36] border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#10A5B5] hover:border-[#10A5B5] transition-all"
                aria-label="Website"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:contact@layedover.co" 
                className="w-10 h-10 bg-[#1F1D36] border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#10A5B5] hover:border-[#10A5B5] transition-all"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>

              {/* Phone */}
              <a 
                href="tel:+393500757397" 
                className="w-10 h-10 bg-[#1F1D36] border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#5C8A3F] hover:border-[#5C8A3F] transition-all"
                aria-label="Phone"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/393500757397" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1F1D36] border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com/layedoverbali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1F1D36] border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:border-[#E1306C] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
        <p>&copy; {new Date().getFullYear()} layedover.co (Layedover LLC). All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}