import Link from 'next/link';

export default function CabinCrewPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Header */}
      <section className="w-full py-24 px-8 md:px-24 bg-[#171527] text-white">
        <div className="max-w-4xl">
          <Link href="/" className="text-[#10A5B5] hover:text-white font-bold text-sm mb-6 inline-block transition-colors">
            &larr; Back to Home
          </Link>
          <span className="text-[#5C8A3F] font-bold uppercase tracking-widest text-sm block mb-2">
            By Cabin Crew. For Cabin Crew.
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Maximized Layovers (4–10 Hours)
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Turn your layover into an unforgettable escape. Designed entirely around your flight schedule, we handle all logistics so you can step off the plane, reset, and head back refreshed.
          </p>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="max-w-6xl mx-auto px-8 py-20 w-full">
        <h2 className="text-3xl font-bold text-[#171527] mb-12 uppercase tracking-wide">
          Crew-Exclusive Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Package 1 */}
          <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 flex flex-col justify-between">
            <div>
              <span className="bg-[#10A5B5]/10 text-[#10A5B5] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold text-[#171527] mt-4 mb-2">The Ubud Fast-Track Layover</h3>
              <p className="text-gray-600 mb-6 text-sm">
                A high-impact 8-hour sprint featuring jungle views, waterfall stops, and a relaxed lunch setting.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium mb-6">
                <li>✓ Direct hotel or airport pick-up & drop-off</li>
                <li>✓ All entrance fees included</li>
                <li>✓ Free high-speed onboard WiFi</li>
                <li>✓ Complimentary cold Bintang beers</li>
              </ul>
            </div>
            <button className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold py-3 rounded-xl transition-colors">
              Book Crew Layover
            </button>
          </div>

          {/* Package 2 */}
          <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 flex flex-col justify-between">
            <div>
              <span className="bg-[#5C8A3F]/10 text-[#5C8A3F] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Quick Reset
              </span>
              <h3 className="text-2xl font-bold text-[#171527] mt-4 mb-2">Southern Coastline Quick Escape</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Short on time? Catch the ocean breeze, dramatic cliff views, and a quick beachside break near the airport zone.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium mb-6">
                <li>✓ Optimized for 4-6 hour windows</li>
                <li>✓ Cliffside views & ocean air</li>
                <li>✓ Onboard refreshments</li>
                <li>✓ Guaranteed on-time airport return</li>
              </ul>
            </div>
            <button className="w-full bg-[#5C8A3F] hover:bg-[#4a7032] text-white font-bold py-3 rounded-xl transition-colors">
              Book Coastline Escape
            </button>
          </div>
        </div>
      </section>

      {/* Special Occasions (Newly Added) */}
      <section id="special-occasions" className="w-full py-24 px-8 md:px-24 bg-white border-t border-gray-100">
        <div className="flex flex-col md:flex-row gap-16 items-center max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <span className="text-[#10A5B5] font-bold uppercase tracking-widest text-sm block mb-4">
              Babymoons & Couples Retreats
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#171527] mb-6 leading-tight">
              A little reward for everything you've poured into becoming parents...[cite: 8]
            </h2>
            <p className="text-gray-600 text-lg mb-8 font-medium italic border-l-4 border-[#5C8A3F] pl-4">
              "...time to slow down, reconnect, and choose each other again."[cite: 8]
            </p>
            
            {/* Finir in Grace Highlight */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
              <h4 className="font-bold text-[#171527] text-lg mb-1 uppercase tracking-wide">Finir in grace[cite: 8]</h4>
              <p className="text-[#10A5B5] font-bold text-sm mb-3 uppercase tracking-widest">
                Nusa Dua Relax • Massage • Final Dinner[cite: 8]
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your final day in Bali is intentionally kept flexible[cite: 8]. Start the morning slowly, enjoy breakfast[cite: 8]. The day is simply about relaxing, enjoying the accomodation, unwinding with a massage, and ending the trip with a lovely final dinner[cite: 8].
              </p>
            </div>

            <button className="bg-[#171527] hover:bg-[#10A5B5] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-md">
              Plan Your Getaway
            </button>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-xs text-gray-500 border border-dashed border-gray-400">
                [ COUPLES MASSAGE IMAGE ]
              </div>
              <div className="h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-xs text-gray-500 border border-dashed border-gray-400 mt-12">
                [ FINAL DINNER IMAGE ]
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}