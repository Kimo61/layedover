import Link from 'next/link';
import Image from 'next/image';

export default function Getaways() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <nav className="w-full bg-white shadow-sm px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/">
          <Image src="/logo.png" alt="Layedover" width={140} height={48} priority />
        </Link>
        <Link href="/#special-occasions" className="text-sm font-bold text-[#171527] hover:text-[#10A5B5] transition-colors">
          &larr; Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-24 px-8 md:px-24 bg-[#171527] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center leading-none mb-6">
            <span className="font-extrabold tracking-tight text-xl mb-2">
              <span className="text-white">Layed</span><span className="text-[#10A5B5]">over</span>
            </span>
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-[0.3em]">Selection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Curated Getaways
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Time to slow down, reconnect, and choose each other again. We handle every detail of your special occasion so you can simply arrive and celebrate.
          </p>
        </div>
      </section>

      {/* The 4 Getaway Examples */}
      <section className="max-w-7xl mx-auto px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Example 1: Babymoon */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400 text-xs border-b border-gray-100">
              [ BABYMOON / RELAXATION IMAGE ]
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-3">Couples Retreat</span>
              <h3 className="text-2xl font-bold text-[#171527] mb-3">The Babymoon Reset</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                A little reward for everything you've poured into becoming parents. Enjoy slow mornings, specialized prenatal massages, and a completely stress-free environment tailored for ultimate comfort.
              </p>
              <div className="mt-auto bg-gray-50 p-5 rounded-xl border border-gray-100">
                <span className="text-[#171527] font-bold text-sm block mb-1">Includes Finir in grace:</span>
                <span className="text-gray-500 text-xs">Nusa Dua relax, final massage, and a lovely final dinner.</span>
              </div>
            </div>
          </div>

          {/* Example 2: Jungle Honeymoon */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400 text-xs border-b border-gray-100">
              [ GLASS VILLA / JUNGLE IMAGE ]
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-3">Honeymoon</span>
              <h3 className="text-2xl font-bold text-[#171527] mb-3">The Jungle Romance</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Start your marriage surrounded by untouched nature. Stay in iconic glass-front villas, enjoy private waterfall dips, and experience romantic dinners suspended over the Ubud rice terraces.
              </p>
              <ul className="mt-auto space-y-2 text-sm text-gray-600 font-medium">
                <li className="flex items-center gap-2"><span className="text-[#5C8A3F]">✓</span> Glass-front A-frame villa stays</li>
                <li className="flex items-center gap-2"><span className="text-[#5C8A3F]">✓</span> Private lazy river & waterfall access</li>
                <li className="flex items-center gap-2"><span className="text-[#5C8A3F]">✓</span> Intimate jungle dining experiences</li>
              </ul>
            </div>
          </div>

          {/* Example 3: Milestone Anniversary */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400 text-xs border-b border-gray-100">
              [ CLIFFSIDE / OCEAN IMAGE ]
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-3">Milestone Celebration</span>
              <h3 className="text-2xl font-bold text-[#171527] mb-3">The Cliffside Anniversary</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Celebrate your years together with sweeping ocean views. This premium package focuses on the dramatic southern coastline, featuring luxury beachfront resorts and private sunset charters.
              </p>
              <ul className="mt-auto space-y-2 text-sm text-gray-600 font-medium">
                <li className="flex items-center gap-2"><span className="text-[#5C8A3F]">✓</span> Premium Uluwatu cliffside accommodation</li>
                <li className="flex items-center gap-2"><span className="text-[#5C8A3F]">✓</span> Private Jukung boat sunset tour</li>
                <li className="flex items-center gap-2"><span className="text-[#5C8A3F]">✓</span> VIP Kecak dance & cliffside dinner</li>
              </ul>
            </div>
          </div>

          {/* Example 4: Executive Retreat */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400 text-xs border-b border-gray-100">
              [ LUXURY GROUP VILLA IMAGE ]
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-3">Corporate & Group</span>
              <h3 className="text-2xl font-bold text-[#171527] mb-3">The Executive Reset</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                A seamless, high-end itinerary designed for teams or large groups. We balance focused masterminds with authentic local adventures like ATV jungle trails and exclusive beach club access.
              </p>
              <ul className="mt-auto space-y-2 text-sm text-gray-600 font-medium">
                <li className="flex items-center gap-2"><span className="text-[#5C8A3F]">✓</span> Sprawling multi-room private estates</li>
                <li className="flex items-center gap-2"><span className="text-[#5C8A3F]">✓</span> Fully managed on-ground logistics</li>
                <li className="flex items-center gap-2"><span className="text-[#5C8A3F]">✓</span> Balanced itinerary of work and adventure</li>
              </ul>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-[#171527] rounded-3xl p-12">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Ready to start planning?</h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us directly to begin tailoring one of these exclusive Layedover Selection experiences for your upcoming celebration.
          </p>
          <button className="bg-[#D4AF37] hover:bg-[#b5952f] text-[#171527] font-bold px-10 py-4 rounded-xl transition-colors shadow-lg">
            Inquire About a Getaway
          </button>
        </div>
      </section>
    </main>
  );
}