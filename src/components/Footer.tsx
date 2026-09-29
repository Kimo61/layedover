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

        {/* Corporate Details */}
        <div>
          <h4 className="text-[#10A5B5] font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="font-bold text-white mb-1">Layedover LLC</li>
            <li className="leading-relaxed">
              30 N Gould St Ste R<br />
              Sheridan, WY 82801
            </li>
            <li className="pt-3">
              <a href="mailto:contact@layedover.co" className="hover:text-[#10A5B5] transition-colors">
                contact@layedover.co
              </a>
            </li>
            <li>
              <a href="https://layedover.co" target="_blank" rel="noopener noreferrer" className="hover:text-[#10A5B5] transition-colors">
                layedover.co
              </a>
            </li>
            <li>
              <a href="tel:+393500757397" className="hover:text-[#10A5B5] transition-colors">
                +39 350 075 7397
              </a>
            </li>
          </ul>
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