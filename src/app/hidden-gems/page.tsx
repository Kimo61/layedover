import Link from 'next/link';

export default function HiddenGems() {
  return (
    <main className="flex flex-col min-h-screen bg-[#171527]">
      
      {/* Header */}
      <section className="w-full py-20 px-8 md:px-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          The LayedOver <span className="text-[#10A5B5]">Secret List</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          The spots the influencers don't know about yet. Pristine waterfalls, untouched coastlines, and authentic local warungs.
        </p>
      </section>

      {/* The List Container */}
      <section className="max-w-4xl mx-auto w-full px-8 pb-32 relative">
        
        {/* Unlocked Preview Item */}
        <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row gap-6 items-center shadow-lg">
          <div className="w-full md:w-1/3 h-40 bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-400">
            [ IMAGE PREVIEW ]
          </div>
          <div className="w-full md:w-2/3">
            <span className="text-xs font-bold text-[#5C8A3F] uppercase tracking-widest">Free Preview</span>
            <h3 className="text-2xl font-bold text-[#171527] mt-1 mb-2">Bukit Asah Sunrise Point</h3>
            <p className="text-gray-600 text-sm">
              While everyone crowds Campuhan ridge, this eastern cliff drops dramatically into the ocean. Perfect for a 6 AM untouched sunrise.
            </p>
          </div>
        </div>

        {/* Locked / Blurred Items Container */}
        <div className="relative">
          
          {/* The Paywall Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-t from-[#171527] via-[#171527]/80 to-transparent pt-32">
            <div className="bg-white p-8 rounded-2xl text-center shadow-2xl max-w-md border-t-4 border-[#10A5B5]">
              <h3 className="text-2xl font-bold text-[#171527] mb-2">Unlock The Full List</h3>
              <p className="text-gray-600 text-sm mb-6">
                Get lifetime access to our curated list of 50+ hidden gems, complete with GPS pins and best times to visit.
              </p>
              <button className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold py-4 rounded-xl transition-colors shadow-md">
                Download Premium List ($19)
              </button>
            </div>
          </div>

          {/* Blurred Fake Items */}
          <div className="space-y-8 blur-md select-none pointer-events-none opacity-60">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 h-40 bg-gray-300 rounded-xl"></div>
                <div className="w-full md:w-2/3">
                  <div className="h-4 w-24 bg-gray-300 rounded mb-4"></div>
                  <div className="h-8 w-3/4 bg-gray-300 rounded mb-4"></div>
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