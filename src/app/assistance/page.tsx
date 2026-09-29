import Link from 'next/link';

export default function Assistance() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Header */}
      <section className="w-full py-20 px-8 md:px-24 bg-[#171527] text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Layedover <span className="text-[#10A5B5]">Assistance</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          On-the-ground realities and exclusive access.
        </p>
      </section>

      {/* SECTION 1: Layedover Inspection (B2B & Client) */}
      <section className="max-w-5xl mx-auto w-full px-8 py-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 flex flex-col md:flex-row gap-12 items-center">
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

      {/* SECTION 2: Layedover Secret List */}
      <section className="w-full bg-[#171527] py-24 px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center mb-16">
          <span className="text-[#10A5B5] font-bold uppercase tracking-widest text-sm block mb-3">
            Layedover Secret List
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Places Influencers Haven't Ruined Yet.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Unlocked Teaser Item */}
          <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row gap-6 items-center shadow-lg relative z-10">
            <div className="w-full md:w-1/3 h-48 bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-500">
              [ EYE-CATCHING HIDDEN GEM IMAGE ]
            </div>
            <div className="w-full md:w-2/3 text-left">
              <span className="text-xs font-bold text-[#5C8A3F] uppercase tracking-widest bg-[#5C8A3F]/10 px-3 py-1 rounded-full mb-3 inline-block">Free Preview</span>
              <h3 className="text-2xl font-bold text-[#171527] mb-2">Eastern Cliff Sunrise Point</h3>
              <p className="text-gray-600 text-sm">
                While everyone crowds the main tourist ridges, this unmarked eastern cliff drops dramatically into the ocean. No crowds, untouched horizons.
              </p>
            </div>
          </div>

          {/* Paywall Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[500px] z-20 flex flex-col items-center justify-end bg-gradient-to-t from-[#171527] via-[#171527]/90 to-transparent pb-12">
            <div className="bg-white p-8 rounded-2xl text-center shadow-2xl max-w-md border-t-4 border-[#10A5B5] mt-auto">
              <h3 className="text-2xl font-bold text-[#171527] mb-2">Unlock The Full List</h3>
              <p className="text-gray-600 text-sm mb-6">
                Get access to our curated list of hidden gems, complete with exact GPS pins and the best times to visit.
              </p>
              <button className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold py-4 rounded-xl transition-colors shadow-md mb-3">
                Pay to Download ($19)
              </button>
              <button className="text-xs font-bold text-gray-400 hover:text-[#171527] underline">
                Or Contact Us for Access
              </button>
            </div>
          </div>

          {/* Blurred Locked Items */}
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