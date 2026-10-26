import { notFound } from 'next/navigation';
import Image from 'next/image';
import TripBuilder from '@/components/TripBuilder';
import { regionsData } from '@/data/regionsData';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function RegionPage({ params }: PageProps) {
  const resolvedParams = await params;
  const normalizedId = resolvedParams.id.toLowerCase().replace(/[-\s]/g, '');
  const region = regionsData[normalizedId];

  if (!region) {
    notFound();
  }

  const regionActivityTitles = region.activities.map((act: any) => act.title);

  return (
    <main className="flex flex-col min-h-screen bg-[#171527] text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[70vh] flex flex-col justify-center px-8 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={region.heroImage} alt={region.title} fill unoptimized className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-20 max-w-4xl mt-12">
          <span className="text-[#10A5B5] font-semibold tracking-widest uppercase text-sm mb-3 block">
            {region.tagline}
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            {region.title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            {region.description}
          </p>
        </div>
      </section>

      {/* 2. ACTIVITIES LIST WITH PICTURES */}
      <section className="w-full py-24 px-8 md:px-24 bg-[#1F1D36]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#10A5B5] font-bold uppercase tracking-widest text-sm block mb-2">Highlights</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-white">Activities & Sights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {region.activities.map((activity: any, idx: number) => (
              <div key={idx} className="group relative h-80 rounded-3xl overflow-hidden shadow-xl border border-white/10">
                <Image src={activity.image} alt={activity.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171527] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <h3 className="text-2xl font-extrabold text-white uppercase tracking-wider drop-shadow-md">{activity.title}</h3>
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    {activity.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRIP BUILDER AT THE BOTTOM */}
      <section className="w-full py-20 px-8 md:px-24 bg-[#171527] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white mb-3">Want Something Specific?</h2>
          <p className="text-gray-400">Personalize your journey down to the exact day and preference.</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <TripBuilder regionActivities={regionActivityTitles} />
        </div>
      </section>

    </main>
  );
}