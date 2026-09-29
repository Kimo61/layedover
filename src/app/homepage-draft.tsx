import Link from 'next/link';
import TripBuilder from '@/components/TripBuilder';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      
     {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] bg-[#171527] flex flex-col justify-center px-8 md:px-24 overflow-hidden">
        
        {/* Full HD Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to ensure text pops */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-20 max-w-3xl bg-black/40 p-8 rounded-2xl backdrop-blur-sm border border-white/10 mt-12">
          <span className="text-[#10A5B5] font-semibold tracking-widest uppercase text-sm mb-2 block">
            The Real Bali, Between Flights
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Personalize your <br />
            <span className="text-[#10A5B5]">Bali trip.</span>
          </h1>
        </div>
      </section>

      {/* 2. MULTI-DAY TRIPS & TRIP BUILDER */}
      <section id="multi-day" className="w-full py-20 px-8 md:px-24 bg-white">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171527] uppercase tracking-wide">
            Multi-Day Journeys
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl">From 3-day weekend resets to 14-day full island immersions. Generalized packages tailored entirely to your pace.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="h-72 bg-gray-100 rounded-2xl flex flex-col justify-end p-8 border border-dashed border-gray-300">
             <h3 className="text-2xl font-bold text-[#171527]">The Ubud Immersion</h3>
             <p className="text-gray-600 text-sm mt-2">Elephant sanctuaries, jungle swings, and glass-front villas.</p>
          </div>
          <div className="h-72 bg-gray-100 rounded-2xl flex flex-col justify-end p-8 border border-dashed border-gray-300">
             <h3 className="text-2xl font-bold text-[#171527]">Sidemen & Amed Loop</h3>
             <p className="text-gray-600 text-sm mt-2">Rice terraces, black sand coastlines, and pristine snorkeling.</p>
          </div>
        </div>
        <TripBuilder />
      </section>

      {/* 3. CABIN CREW */}
      <section id="cabin-crew" className="w-full py-24 px-8 md:px-24 bg-[#171527] text-white">
        <div className="max-w-4xl">
          <span className="text-[#5C8A3F] font-bold uppercase tracking-widest text-sm block mb-2">
            By Cabin Crew. For Cabin Crew.
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Fly. Explore. Reset. Repeat.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Turn your layover into an unforgettable escape. Designed entirely around your flight schedule, we handle all logistics so you can step off the plane, reset, and head back refreshed.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border border-white/10 rounded-2xl p-8 bg-white/5 flex flex-col justify-between">
            <div>
              <span className="bg-[#10A5B5]/20 text-[#10A5B5] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">The Ubud Fast-Track Layover</h3>
              <p className="text-gray-300 mb-6 text-sm">
                A high-impact 8-hour sprint featuring jungle views, waterfall stops, and a relaxed lunch setting.
              </p>
              <ul className="space-y-2 text-sm text-gray-300 font-medium mb-6">
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

          <div className="border border-white/10 rounded-2xl p-8 bg-white/5 flex flex-col justify-between">
            <div>
              <span className="bg-[#5C8A3F]/20 text-[#5C8A3F] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Quick Reset
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">Southern Coastline Quick Escape</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Short on time? Catch the ocean breeze, dramatic cliff views, and a quick beachside break near the airport zone.
              </p>
              <ul className="space-y-2 text-sm text-gray-300 font-medium mb-6">
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

        {/* New Personalize Layover Button */}
        <div className="mt-16 text-center">
          <Link href="/personalize-layover" className="inline-block bg-white text-[#171527] hover:bg-gray-200 font-bold px-10 py-4 rounded-xl transition-colors shadow-lg">
            Personalize Your Own Layover
          </Link>
        </div>
      </section>

      {/* 4. 1-DAY EXCURSIONS */}
      <section id="excursions" className="w-full py-20 px-8 md:px-24 bg-gray-50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171527] uppercase tracking-wide">
            1-Day Excursions
          </h2>
          <p className="text-gray-500 mt-2">Deep dives into Bali's hidden gems, expertly guided from sunrise to sunset.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#171527] mb-4 uppercase">Ubud Experience</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Elephant Sanctuary</li>
              <li>• Lazy River Tubing</li>
              <li>• Luxurious Overnight Stay</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#171527] mb-4 uppercase">Explore Sidemen</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Tirta Gangga</li>
              <li>• Lahangan Sweet</li>
              <li>• Gembleng Waterfall</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#171527] mb-4 uppercase">Explore Uluwatu</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Kecak Dance</li>
              <li>• Uluwatu Temple & Cliff</li>
              <li>• Garuda Wisnu</li>
            </ul>
          </div>
        </div>

        {/* New Personalize Experience Button */}
        <div className="mt-12 text-center">
          <Link href="/personalize-experience" className="inline-block bg-[#171527] text-white hover:bg-[#10A5B5] font-bold px-10 py-4 rounded-xl transition-colors shadow-md">
            Personalize Your Own Experience
          </Link>
        </div>
      </section>

      {/* 5. SPECIAL OCCASIONS */}
      <section id="special-occasions" className="w-full py-24 px-8 md:px-24 bg-white border-t border-gray-100">
        <div className="flex flex-col md:flex-row gap-16 items-center max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <span className="text-[#10A5B5] font-bold uppercase tracking-widest text-sm block mb-4">
              Babymoons & Couples Retreats
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#171527] mb-6 leading-tight">
              A little reward for everything you've poured into becoming parents...
            </h2>
            <p className="text-gray-600 text-lg mb-8 font-medium italic border-l-4 border-[#5C8A3F] pl-4">
              "...time to slow down, reconnect, and choose each other again."
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
              <h4 className="font-bold text-[#171527] text-lg mb-1 uppercase tracking-wide">Finir in grace</h4>
              <p className="text-[#10A5B5] font-bold text-sm mb-3 uppercase tracking-widest">
                Nusa Dua Relax • Massage • Final Dinner
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your final day in Bali is intentionally kept flexible. Start the morning slowly, enjoy breakfast. The day is simply about relaxing, enjoying the accomodation, unwinding with a massage, and ending the trip with a lovely final dinner.
              </p>
            </div>

            {/* Updated Getaway Link */}
            <Link href="/getaways" className="inline-block bg-[#171527] hover:bg-[#10A5B5] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-md">
              Plan Your Getaway
            </Link>
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

      {/* 6. REALITY CHECK / INSPECTION SERVICE */}
      <section id="reality-check" className="w-full py-24 px-8 md:px-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="w-full md:w-1/2">
            <span className="text-[#10A5B5] font-bold uppercase tracking-widest text-sm block mb-3">
              Layedover Inspection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171527] mb-6">
              The Internet is Outdated.<br/>We Are On The Ground.
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Google searches and ChatGPT answers don't reflect current realities. Weather destroys roads, massive constructions pop up next to "peaceful" villas, and quality shifts overnight.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed font-medium">
              We provide live, on-field property inspections and real-time assistance for B2B partners and private clients so you never book blindly.
            </p>
            <button className="bg-[#5C8A3F] hover:bg-[#4a7032] text-white font-bold px-8 py-4 rounded-xl transition-colors">
              Request an Inspection
            </button>
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 h-80 rounded-2xl flex items-center justify-center border border-dashed border-gray-300 text-gray-500">
            [ MEDIA: LIVE VILLA / ROAD INSPECTION ]
          </div>
        </div>
      </section>

      {/* 7. SECRET LIST */}
      <section id="secret-list" className="w-full bg-[#171527] py-24 px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center mb-16">
          <span className="text-[#10A5B5] font-bold uppercase tracking-widest text-sm block mb-3">
            Layedover Secret List
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Places Influencers Haven't Ruined Yet.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row gap-6 items-center shadow-lg relative z-10">
            <div className="w-full md:w-1/3 h-48 bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-500">
              [ HIDDEN GEM IMAGE ]
            </div>
            <div className="w-full md:w-2/3 text-left">
              <span className="text-xs font-bold text-[#5C8A3F] uppercase tracking-widest bg-[#5C8A3F]/10 px-3 py-1 rounded-full mb-3 inline-block">Free Preview</span>
              <h3 className="text-2xl font-bold text-[#171527] mb-2">Eastern Cliff Sunrise Point</h3>
              <p className="text-gray-600 text-sm">
                While everyone crowds the main tourist ridges, this unmarked eastern cliff drops dramatically into the ocean. No crowds, untouched horizons.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[400px] z-20 flex flex-col items-center justify-end bg-gradient-to-t from-[#171527] via-[#171527]/90 to-transparent pb-12">
            <div className="bg-white p-8 rounded-2xl text-center shadow-2xl max-w-md border-t-4 border-[#10A5B5] mt-auto">
              <h3 className="text-2xl font-bold text-[#171527] mb-2">Unlock The Full List</h3>
              <p className="text-gray-600 text-sm mb-6">
                Get access to our curated list of hidden gems, complete with exact GPS pins and the best times to visit.
              </p>
              <button className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold py-4 rounded-xl transition-colors shadow-md mb-3">
                Pay to Download ($19)
              </button>
            </div>
          </div>

          <div className="space-y-6 blur-md select-none pointer-events-none opacity-40">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 h-48 bg-gray-300 rounded-xl"></div>
                <div className="w-full md:w-2/3">
                  <div className="h-6 w-3/4 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}