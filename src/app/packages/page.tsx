'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';

const WEB3FORMS_KEY = "06d08439-449c-4bf4-acd0-ae190e38d777";

// Flip / grow animation settings
const FLIP_MS = 700;
const EASE = 'cubic-bezier(0.4, 0.1, 0.2, 1)';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
interface Stay {
  nights: number;
  place: string;
  /** Optional line under the place name, e.g. "Private family villa" */
  note?: string;
}

interface PackageItem {
  id: number;
  title: string;
  duration: string;
  route: string;
  image: string;
  desc: string;
  tags: string[];
  /** Accommodation rating shown next to "Where You'll Stay" */
  rating: string;
  stays: Stay[];
  activities: string[];
  /** Family packages only */
  comfort?: string[];
  transport: string[];
  catering: string[];
  /** Leave out to show no price (the button still says "Inquire") */
  pricing?: {
    headline: string; // e.g.  "Price on request"
    sub?: string; // e.g. "per couple"
    note?: string; // fine print shown at the bottom of the details
  };
}

const READY_PACKAGES: PackageItem[] = [
  {
    id: 1,
    title: 'Couples Reset',
    duration: '8 Days / 7 Nights',
    route: 'Sidemen • Amed • Nusa Dua',
    image: '/couplereset.jpg',
    desc: 'A romantic escape featuring sunrise 4x4 volcano treks, hidden waterfalls, luxury spa treatments, and private ADV 160cc coastal rides.',
    tags: ['Romance', 'Nature'],
    rating: '4.9',
    stays: [
      { nights: 2, place: 'Sidemen' },
      { nights: 4, place: 'Amed' },
      { nights: 1, place: 'Nusa Dua' },
    ],
    activities: [
      'Half-day jungle dirt bike',
      'Volcano 4x4 sunrise excursion',
      'Hidden waterfall escape',
      'Water palace & garden visit',
      'Panoramic viewpoint hike',
      '2 luxury spa treatments',
    ],
    transport: [
      'Private airport pick-up',
      'Bags transfer from Sidemen to Amed',
      'Transfer from Amed to Nusa Dua',
      'Private airport drop-off',
      'ADV 160cc for 8 days',
    ],
    catering: [
      '8 hotel breakfasts',
      'Lunch during the dirt bike experience',
    ],
  },
  {
    id: 2,
    title: 'Chasing Sunsets',
    duration: '9 Days / 8 Nights',
    route: 'Uluwatu • Gili T',
    image: '/chasingsunset.jpg',
    desc: 'Experience dramatic cliffside fire dances, sunset horseback riding, private Gili T snorkeling, and premium Azure Beach Club access.',
    tags: ['Sunsets', 'Islands'],
    rating: '4.9',
    stays: [
      { nights: 4, place: 'Uluwatu' },
      { nights: 4, place: 'Gili T' },
    ],
    activities: [
      'Traditional Balinese massage',
      'Uluwatu Temple and Kecak fire dance',
      'Garuda Wisnu Kencana',
      "Couples' surf lesson",
      'Nusa Penida escape',
      "D'Tukad River Club",
      'Hidden waterfall',
      'White water rafting',
      'Volcano 4x4 sunrise excursion',
      'Water palace & garden visit',
      'Panoramic viewpoint hike',
      'Snorkeling in Amed',
      'Private snorkeling trip in Gili T',
      'Penglipuran Village',
      'Sunset horseback riding',
      'Azure Beach Club',
    ],
    transport: [
      'Private airport pick-up',
      'Private airport drop-off',
      'Boat transfer to and from Gili T',
    ],
    catering: [
      '8 hotel breakfasts',
      'Lunch in Nusa Penida',
      "Lunch at D'Tukad River Club",
    ],
  },
  {
    id: 3,
    title: 'Move Your Body, Heal Your Soul',
    duration: '9 Days / 8 Nights',
    route: 'Seminyak • Ubud',
    image: '/agung1.jpg',
    desc: 'Balance vibrant beach clubs with deep jungle wellness. Features Melukat water healing, Tanah Lot sunsets, and lush rice terrace treks.',
    tags: ['Wellness', 'Active'],
    rating: '4.8',
    stays: [
      { nights: 4, place: 'Seminyak' },
      { nights: 4, place: 'Ubud' },
    ],
    activities: [
      'Traditional Balinese massage',
      'Beach club day in Seminyak',
      'Private day trip to Uluwatu and back to Seminyak',
      'Tanah Lot sunset visit',
      'Surfing class or horse riding',
      'Balinese cooking class or sound healing',
      'ATV Kebur',
      'Aloha swing',
      'Tegalalang rice terraces',
      'Sacred Monkey Forest',
      'Tirta Empul water temple',
      'Melukat water healing',
      'Campuhan Ridge Walk',
      'Hidden waterfall escape',
      '2 luxury spa treatments',
    ],
    transport: [
      'Private airport pick-up',
      'Transfer from Seminyak to Ubud',
      'Private airport drop-off',
      'Private driver for the Uluwatu day trip',
    ],
    catering: [
      '8 hotel breakfasts',
      'Lunch during the Uluwatu day trip',
      'Lunch during the Ubud day trip',
    ],
  },
  {
    id: 4,
    title: 'Body and Soul',
    duration: '9 Days / 8 Nights',
    route: 'Canggu • Ubud',
    image: '/bodysoul.jpg',
    desc: "Combine coastal energy with Ubud's spiritual core. Enjoy ATV jungle adrenaline, immersive sound healing, and Mount Batur at dawn.",
    tags: ['Balance', 'Culture'],
    rating: '4.8',
    stays: [
      { nights: 4, place: 'Canggu' },
      { nights: 4, place: 'Ubud' },
    ],
    activities: [
      'Traditional Balinese massage',
      'Surf lesson',
      'Canggu beach sunset evening',
      'ATV jungle adventure or dirt bike adrenaline',
      'Beach club experience',
      'Mount Batur sunrise jeep excursion',
      'Tukad Cepung waterfall',
      'Coffee plantation tasting',
      'Tegalalang rice terraces',
      'Rafting or tubing',
      'Sound healing or yoga session',
      '2 luxury spa treatments',
    ],
    transport: [
      'Private airport pick-up',
      'Transfer from Canggu to Ubud',
      'Private airport drop-off',
      'Private driver for the Batur excursion',
    ],
    catering: [
      '8 hotel breakfasts',
      'Lunch during the ATV experience',
      'Lunch during the Batur day trip',
    ],
  },
  {
    id: 5,
    title: 'The Famous Island Life',
    duration: '15 Days / 14 Nights',
    route: 'Canggu • Uluwatu • Seminyak',
    image: '/islandlife.jpg',
    desc: 'The ultimate southern traverse. Features cliffside paragliding, iconic beach clubs, purification ceremonies, and Jimbaran seafood sunsets.',
    tags: ['Epic', 'Lifestyle'],
    rating: '4.8',
    stays: [
      { nights: 5, place: 'Canggu' },
      { nights: 5, place: 'Uluwatu' },
      { nights: 4, place: 'Seminyak' },
    ],
    activities: [
      'Traditional Balinese massage',
      'Surf lesson at Batu Bolong Beach',
      'Sunset horseback riding along the beach',
      'Tanah Lot Temple sunset visit',
      'Beach club experience at FINNS',
      'ATV jungle adventure',
      'Balinese cooking class',
      'Garuda Wisnu Kencana Cultural Park',
      'Melasti Beach and beach club experience',
      'Uluwatu Temple and Kecak fire dance',
      'Padang Padang Beach',
      'Paragliding experience over Uluwatu cliffs',
      'Sunset at Karang Boma Cliff',
      'Traditional Balinese purification ceremony',
      'Private snorkeling excursion in Nusa Dua',
      'Sunset seafood dinner in Jimbaran',
      'Seminyak shopping and boutique exploration',
      'Pottery or silver jewelry workshop',
      'Sunset experience at La Brisa',
      'Seminyak nightlife experience',
      '3 luxury spa treatments',
      'Free days for personal exploration and relaxation',
    ],
    transport: [
      'Private airport pick-up',
      'Transfer from Canggu to Uluwatu',
      'Transfer from Uluwatu to Seminyak',
      'Private airport drop-off',
      'Private transportation for scheduled excursions',
    ],
    catering: [
      '14 hotel breakfasts',
      '1 lunch during the ATV experience',
      '1 lunch during the Nusa Dua excursion',
      '1 romantic seafood dinner in Jimbaran',
    ],
    pricing: {
      headline: 'Price on request ',
      sub: 'per couple',
      note: 'Based on double occupancy.',
    },
  },
  {
    id: 6,
    title: 'Bali Coastal Discovery',
    duration: '15 Days / 14 Nights',
    route: 'Seminyak • Amed • Lovina',
    image: '/coastal.jpg',
    desc: 'Journey to the serene north and east. Discover black sand coastlines, sunrise dolphin watching, and Japanese shipwreck snorkeling.',
    tags: ['Coastal', 'Exploration'],
    rating: '4.8',
    stays: [
      { nights: 4, place: 'Seminyak' },
      { nights: 5, place: 'Amed' },
      { nights: 5, place: 'Lovina' },
    ],
    activities: [
      'Traditional Balinese massage',
      'Seminyak beach club experience',
      'Sunset at Tanah Lot Temple',
      'Seminyak shopping and nightlife',
      'Balinese cooking class',
      'Tirta Gangga Water Palace',
      'Lahangan Sweet panoramic viewpoint',
      'Lempuyang Temple',
      'Snorkeling at Japanese Shipwreck',
      'Coral reef snorkeling in Jemeluk Bay',
      'Traditional jukung sunset sailing experience',
      'Scenic coastal motorcycle ride in Amed',
      'Mount Agung viewpoint',
      'Sunrise dolphin-watching excursion in Lovina',
      'Snorkeling at Menjangan Island',
      'Banjar Hot Springs',
      'Brahmavihara-Arama Buddhist Monastery',
      'Aling-Aling waterfalls and natural water slides',
      'Sekumpul waterfall excursion',
      'Pulaki Temple visit',
      'Traditional Balinese healing massage',
      '3 luxury spa treatments',
      'Free days for beach relaxation and exploration',
    ],
    transport: [
      'Private airport pick-up',
      'Private transfer from Seminyak to Amed',
      'Private transfer from Amed to Lovina',
      'Private airport drop-off',
      'Private transportation for scheduled excursions',
    ],
    catering: [
      '14 hotel breakfasts',
      '1 lunch during the East Bali excursion',
      '1 lunch during the Menjangan snorkeling excursion',
      '1 lunch during the North Bali waterfall excursion',
      '1 romantic beachfront dinner',
    ],
    pricing: {
      headline: 'Price on request',
      sub: 'per couple',
      note: 'Based on double occupancy.',
    },
  },
  {
    id: 7,
    title: 'Bali Hidden Paradise',
    duration: '15 Days / 14 Nights',
    route: 'Ubud • Sidemen • Nusa Lembongan',
    image: '/paradise.jpg',
    desc: 'Venture completely off grid. Manta ray snorkeling, mangrove kayaking, Sidemen valley treks, and untouched eastern cliff viewpoints.',
    tags: ['Hidden Gems', 'Nature'],
    rating: '4.8',
    stays: [
      { nights: 5, place: 'Ubud' },
      { nights: 4, place: 'Sidemen' },
      { nights: 5, place: 'Nusa Lembongan' },
    ],
    activities: [
      'Traditional Balinese massage',
      'Sacred Monkey Forest visit',
      'Tegalalang rice terraces and jungle swing',
      'Tirta Empul water purification ceremony',
      'Mount Batur sunrise jeep adventure',
      'Tibumana waterfall',
      'Balinese silver jewelry workshop',
      'Ayung River rafting adventure',
      'Traditional Balinese cooking class',
      'Sidemen rice terraces and countryside walk',
      'Gembleng waterfall and natural infinity pools',
      'Traditional Balinese village experience',
      'Telaga Waja River rafting adventure',
      'Bukit Cinta panoramic Mount Agung viewpoint',
      'Traditional Balinese healing session',
      'Snorkeling with manta rays at Nusa Penida',
      'Mangrove forest kayaking in Nusa Lembongan',
      'Karangasem village',
      "Devil's Tear coastal viewpoint",
      'Dream Beach relaxation',
      'Yellow Bridge and Nusa Ceningan exploration',
      'Blue Lagoon cliff viewpoint',
      'Sunset at Mahana Point',
      'Private island snorkeling excursion',
      'Traditional Balinese boat experience',
      '3 luxury spa treatments',
      'Free days for relaxation and island exploration',
    ],
    transport: [
      'Private airport pick-up',
      'Private transfer from Ubud to Sidemen',
      'Private transfer from Sidemen to Sanur Harbour',
      'Fast boat transfer to Nusa Lembongan',
      'Return fast boat to Sanur',
      'Private airport drop-off',
      'Private transportation for scheduled excursions',
    ],
    catering: [
      '14 hotel breakfasts',
      '1 lunch during the Mount Batur excursion',
      '1 lunch during the Sidemen countryside excursion',
      '1 lunch during the snorkeling excursion',
      '1 romantic beachfront dinner',
    ],
    pricing: {
      headline: 'Price on request',
      sub: 'per couple',
      note: 'Based on double occupancy.',
    },
  },
  {
    id: 8,
    title: 'Bali Family Escape',
    duration: '8 Days / 7 Nights',
    route: 'Sanur • Nusa Dua',
    image: '/family1.jpg',
    desc: 'Tailored entirely around family pacing. Features Bali Safari Marine Park, Devdan cultural shows, beachfront cycling, and glass-bottom boats.',
    tags: ['Family', 'Relaxation'],
    rating: '4.8',
    stays: [
      { nights: 4, place: 'Sanur', note: 'Family-friendly beachfront resort' },
      { nights: 3, place: 'Nusa Dua', note: 'Family-friendly luxury resort' },
    ],
    activities: [
      'Traditional Balinese welcome massage for parents',
      'Sunrise family stroll along Sanur Beach',
      'Traditional jukung boat experience',
      'Bali Bird Park interactive experience',
      'Bali Safari & Marine Park family adventure',
      'Family-friendly Balinese cooking class',
      'Turtle Conservation and Education Center visit',
      'Beachfront cycling along Sanur promenade',
      'Glass-bottom boat experience in Nusa Dua',
      'Tanjung Benoa water sports for older children',
      'Geger Beach family relaxation',
      'Family-friendly cultural visit to GWK Park',
      'Devdan cultural show at Nusa Dua Theatre',
      'Beach picnic and sandcastle activities',
      'Family photoshoot by the beach',
      '2 luxury spa treatments for parents',
      'Free time for swimming, play and family relaxation',
      'Children-friendly beach club experience',
      'Monkey Forest in Ubud',
    ],
    comfort: [
      'Baby cot or extra bed upon request',
      'Age-appropriate child car seats',
      'Stroller-friendly excursions where available',
      "Flexible daily schedule around children's routines",
      'Optional professional babysitting services',
      'Family-friendly restaurants and dining arrangements',
    ],
    transport: [
      'Private airport pick-up',
      'Private transfer from Sanur to Nusa Dua',
      'Private airport drop-off',
      'Private air-conditioned family vehicle for scheduled excursions',
    ],
    catering: [
      '7 hotel breakfasts',
      '1 family lunch during the Bali Safari excursion',
      '1 family lunch during the Nusa Dua excursion',
      '1 family beachfront dinner',
    ],
    pricing: {
      headline: 'Price on request',
      sub: 'per family',
      note: "Final price based on number of adults, children's ages and accommodation requirements.",
    },
  },
  {
    id: 9,
    title: 'The Family Island Adventure',
    duration: '15 Days / 14 Nights',
    route: 'Sanur • Ubud • Lombok • Jimbaran',
    image: '/family2.jpg',
    desc: 'A comprehensive multi-island family journey. Domestic flights to Lombok, chocolate making, gentle rice field walks, and traditional Sasak villages.',
    tags: ['Family', 'Adventure'],
    rating: '4.8',
    stays: [
      { nights: 4, place: 'Sanur', note: 'Family-friendly beachfront resort' },
      { nights: 4, place: 'Ubud', note: 'Private family villa' },
      { nights: 4, place: 'Lombok', note: 'Family-friendly beach resort' },
      { nights: 2, place: 'Jimbaran', note: 'Luxury beachfront resort' },
    ],
    activities: [
      'Traditional Balinese welcome massage for parents',
      'Sunrise family stroll along Sanur Beach',
      'Bali Bird Park interactive experience',
      'Bali Safari & Marine Park adventure',
      'Beachfront cycling along Sanur promenade',
      'Sacred Monkey Forest visit',
      'Tegalalang rice terraces',
      'Family-friendly jungle swing for eligible ages',
      'Balinese chocolate-making workshop',
      'Traditional Balinese cooking class for families',
      'Tegenungan waterfall visit',
      'Penglipuran traditional village experience',
      'Gentle rice field walk in Ubud',
      'Family-friendly pottery workshop',
      'Senggigi Beach relaxation in Lombok',
      'Traditional Sasak village experience',
      'Lombok pottery-making workshop',
      'Selong Belanak Beach family day',
      'Traditional weaving workshop in Sukarara Village',
      'Tanjung Aan Beach excursion',
      'Gentle snorkeling excursion for eligible ages',
      'Jimbaran sunset seafood dinner',
      'Garuda Wisnu Kencana Cultural Park visit',
      '3 luxury spa treatments for parents',
      'Free days for swimming, play and family relaxation',
    ],
    comfort: [
      'Family-friendly accommodation',
      'Baby cot or extra bed upon request',
      'Age-appropriate child car seats',
      'Private air-conditioned family transportation',
      "Flexible daily schedule around children's routines",
      'Optional professional babysitting services',
      'Child-friendly dining arrangements',
      "Assistance with baby and children's essentials",
    ],
    transport: [
      'Private airport pick-up',
      'Private transfer from Sanur to Ubud',
      'Private transfer from Ubud to Bali airport',
      'Domestic flight from Bali to Lombok',
      'Private airport transfer in Lombok',
      'Return domestic flight from Lombok to Bali',
      'Private transfer to Jimbaran resort',
      'Private airport drop-off',
      'Private transportation for scheduled excursions',
    ],
    catering: [
      '14 hotel breakfasts',
      '1 family lunch during the Bali Safari excursion',
      '1 lunch during the Ubud countryside excursion',
      '1 traditional Lombok family lunch',
      '1 beachfront family lunch in Lombok',
      '1 sunset seafood dinner in Jimbaran',
    ],
    pricing: {
      headline: 'Price on request',
      note: "Final price based on family size, children's ages and accommodation preferences.",
    },
  },
];

// ---------------------------------------------------------------------------
// Front face (used in the grid AND as the starting face of the flip)
// ---------------------------------------------------------------------------
function CardFront({ pkg, flying = false }: { pkg: PackageItem; flying?: boolean }) {
  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border bg-[#1F1D36] shadow-2xl transition-colors duration-700 ${
        flying
          ? 'border-[#10A5B5]/60 shadow-[0_0_50px_rgba(16,165,181,0.35)]'
          : 'border-white/5 md:group-hover:border-[#10A5B5]/50'
      }`}
    >
      {/* 20% OFF RED BANNER */}
      <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white font-black px-5 py-2 rounded-bl-2xl text-xs z-30 shadow-[0_4px_15px_rgba(220,38,38,0.5)] uppercase tracking-widest">
        20% OFF
      </div>

      {/* Top Half: Image */}
      <div className="relative h-[50%] w-full overflow-hidden">
        <Image
          src={pkg.image}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={pkg.title}
          className="object-cover transition-transform duration-1000 md:group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D36] via-[#1F1D36]/20 to-transparent"></div>

        {/* Tap / click hint */}
        <span className="absolute bottom-6 right-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
          <span className="md:hidden">Tap</span>
          <span className="hidden md:inline">Click</span> for details
        </span>
      </div>

      {/* Bottom Half: Highlights */}
      <div className="relative -mt-4 flex flex-grow flex-col p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#10A5B5]/10 text-[#10A5B5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#10A5B5]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-2">
          <span className="text-gray-400 text-xs font-bold uppercase tracking-wider block">{pkg.duration}</span>
          <span className="text-[#D4AF37] text-[10px] font-extrabold uppercase tracking-widest block mt-1">{pkg.route}</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{pkg.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{pkg.desc}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Small building blocks for the back face
// ---------------------------------------------------------------------------
function Section({
  title,
  count,
  aside,
  children,
}: {
  title: string;
  count?: number;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        <span className="h-3 w-1 rounded-full bg-[#10A5B5]" />
        {title}
        {count !== undefined && (
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-gray-300">{count}</span>
        )}
        {aside && <span className="ml-auto">{aside}</span>}
      </h3>
      {children}
    </section>
  );
}

function CheckList({ items, twoColumns = false }: { items: string[]; twoColumns?: boolean }) {
  return (
    <ul className={`grid gap-x-6 gap-y-2.5 ${twoColumns ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-start gap-3 text-sm leading-snug text-gray-200">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10A5B5]/20 text-[11px] font-bold text-[#10A5B5]">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------------------
// Back face (full details + inquire button)
// ---------------------------------------------------------------------------
function CardBack({
  pkg,
  onClose,
  onInquire,
  closeRef,
}: {
  pkg: PackageItem;
  onClose: () => void;
  onInquire: () => void;
  closeRef: React.RefObject<HTMLButtonElement | null>;
}) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-[#10A5B5]/60 bg-[#1F1D36] shadow-[0_0_60px_rgba(16,165,181,0.35)]">
      {/* Banner */}
      <div className="relative h-36 shrink-0 md:h-52">
        <Image
          src={pkg.image}
          fill
          sizes="(max-width: 1024px) 100vw, 980px"
          alt={pkg.title}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D36] via-[#1F1D36]/40 to-black/10"></div>

        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl leading-none text-white backdrop-blur-md transition-colors hover:bg-black/70 md:right-5 md:top-5"
        >
          &times;
        </button>

        <div className="absolute inset-x-5 bottom-3 md:inset-x-8 md:bottom-4">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-300 md:text-xs">
            {pkg.duration}
          </span>
          <h2 className="text-2xl font-black leading-tight text-white md:text-4xl">{pkg.title}</h2>
        </div>
      </div>

      {/* Scrollable details */}
      <div className="flex-1 space-y-7 overflow-y-auto overscroll-contain px-5 py-5 [-webkit-overflow-scrolling:touch] md:px-8 md:py-6">
        {/* Tags + description */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {pkg.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#10A5B5]/10 text-[#10A5B5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#10A5B5]/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-gray-300 md:text-base">{pkg.desc}</p>
        </div>

        {/* Accommodation */}
        <Section
          title="Where You'll Stay"
          aside={
            <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-[#D4AF37]">
              ★ {pkg.rating}
            </span>
          }
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
            {pkg.stays.map((stay) => (
              <div
                key={stay.place}
                className="rounded-xl border border-[#10A5B5]/25 bg-[#10A5B5]/5 p-3.5"
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black leading-none text-[#10A5B5]">{stay.nights}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {stay.nights === 1 ? 'night' : 'nights'}
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-bold text-white">{stay.place}</p>
                {stay.note && <p className="mt-0.5 text-xs leading-snug text-gray-400">{stay.note}</p>}
              </div>
            ))}
          </div>
        </Section>

        {/* Activities */}
        <Section title="Activities & Experiences" count={pkg.activities.length}>
          <CheckList items={pkg.activities} twoColumns />
        </Section>

        {/* Family-only block */}
        {pkg.comfort && pkg.comfort.length > 0 && (
          <Section title="Family Comfort & Services">
            <CheckList items={pkg.comfort} twoColumns />
          </Section>
        )}

        {/* Transport + catering side by side on larger screens */}
        <div className="grid gap-7 md:grid-cols-2 md:gap-8">
          <Section title="Transportation">
            <CheckList items={pkg.transport} />
          </Section>
          <Section title="Catering">
            <CheckList items={pkg.catering} />
          </Section>
        </div>

        {/* Pricing fine print */}
        {pkg.pricing?.note && (
          <p className="rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-4 text-xs leading-relaxed text-gray-300">
            <span className="font-bold uppercase tracking-widest text-[#D4AF37]">Pricing · </span>
            {pkg.pricing.note}
          </p>
        )}
      </div>

      {/* Sticky footer: price + CTA */}
      <div className="shrink-0 border-t border-white/10 bg-[#1F1D36] p-4 md:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
          {pkg.pricing && (
            <div className="flex items-baseline justify-center gap-2 md:flex-col md:items-start md:gap-0.5">
              <span className="text-xl font-black leading-tight text-[#10A5B5] md:text-2xl">
                {pkg.pricing.headline}
              </span>
              {pkg.pricing.sub && (
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {pkg.pricing.sub}
                </span>
              )}
            </div>
          )}
          <button
            onClick={onInquire}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#10A5B5] py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(16,165,181,0.4)] transition-colors hover:bg-[#0d8996] md:w-auto md:min-w-[320px] md:px-10 md:py-4"
          >
            Inquire About This Package <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Inquiry modal (rendered in a portal so it sits above the flipped card)
// ---------------------------------------------------------------------------
function InquiryModal({ pkg, onClose }: { pkg: PackageItem; onClose: () => void }) {
  const [contactInput, setContactInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contact = contactInput.trim();
    if (!contact) return;
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Package Inquiry: ${pkg.title}`,
          // Only send as "email" if it looks like one, so WhatsApp numbers don't get rejected
          ...(contact.includes('@') ? { email: contact } : {}),
          contact,
          message: `Client requested details/pricing for: ${pkg.title} (${pkg.duration}, ${pkg.route}). Contact: ${contact}`,
        }),
      });

      if (response.ok) setIsSubmitted(true);
      else setError('Something went wrong. Please try again.');
    } catch (err) {
      console.error(err);
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Inquire about ${pkg.title}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#1F1D36] border border-[#10A5B5]/40 p-5 md:p-8 rounded-2xl md:rounded-3xl max-w-[90%] md:max-w-md w-full shadow-2xl relative text-left cursor-default"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 md:top-5 md:right-5 text-gray-400 hover:text-white text-lg md:text-xl font-bold"
        >
          &times;
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 md:mb-2">{pkg.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Request pricing and detailed itinerary for the {pkg.duration} package.
              </p>
            </div>
            <div>
              <label className="block text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 md:mb-2">
                Your Email or WhatsApp
              </label>
              <input
                type="text"
                required
                placeholder="name@example.com / +1..."
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                className="w-full bg-[#171527] border border-white/10 rounded-lg md:rounded-xl p-3 md:p-4 text-white text-base md:text-sm focus:outline-none focus:border-[#10A5B5]"
              />
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#10A5B5] hover:bg-[#0d8996] text-white font-bold py-2.5 md:py-3.5 rounded-lg md:rounded-xl transition-colors shadow-md text-xs md:text-sm uppercase tracking-wider disabled:opacity-50 mt-2"
            >
              {isSubmitting ? 'Sending Request...' : 'Get Pricing & Details'}
            </button>
          </form>
        ) : (
          <div className="text-center py-4 md:py-6">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5C8A3F]/20 text-[#5C8A3F] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Request Received!</h3>
            <p className="text-gray-300 text-xs md:text-sm mb-5 md:mb-6">
              Thank you! We have logged your details for {pkg.title} and will reach out shortly.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 md:py-3 rounded-lg md:rounded-xl transition-colors text-xs md:text-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
type Box = { top: number; left: number; width: number; height: number };

export default function PackagesPage() {
  // The card that is currently "flown out" of the grid, plus where it started
  const [active, setActive] = useState<{ pkg: PackageItem; rect: Box } | null>(null);
  const [open, setOpen] = useState(false); // false = at grid position, true = flipped + enlarged
  const [vp, setVp] = useState({ w: 0, h: 0 });
  const [inquiryPkg, setInquiryPkg] = useState<PackageItem | null>(null);

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openCard = (pkg: PackageItem, el: HTMLElement) => {
    if (active) return;
    const r = el.getBoundingClientRect();
    setVp({ w: window.innerWidth, h: window.innerHeight });
    setActive({ pkg, rect: { top: r.top, left: r.left, width: r.width, height: r.height } });
    setOpen(false);
  };

  const closeCard = useCallback(() => {
    setOpen(false);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), FLIP_MS);
  }, []);

  // Start the flip one paint after the overlay mounts (so the CSS transition actually runs)
  useEffect(() => {
    if (!active) return;
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setOpen(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [active]);

  // Move focus to the close button once the flip has finished
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => closeBtnRef.current?.focus({ preventScroll: true }), FLIP_MS);
    return () => clearTimeout(t);
  }, [open]);

  // Lock page scroll while a card is open
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  // Escape closes inquiry first, then the card
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (inquiryPkg) setInquiryPkg(null);
      else closeCard();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, inquiryPkg, closeCard]);

  // Keep the enlarged size correct on rotate / resize
  useEffect(() => {
    if (!active) return;
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Size/position of the enlarged card (almost full screen on phones, big centered panel on desktop)
  const margin = vp.w < 768 ? 12 : 24;
  const targetW = Math.min(980, vp.w - margin * 2);
  const targetH = Math.min(vp.h - margin * 2, 860);
  const target: Box = {
    top: (vp.h - targetH) / 2,
    left: (vp.w - targetW) / 2,
    width: targetW,
    height: targetH,
  };

  const flipTransition = ['top', 'left', 'width', 'height', 'transform']
    .map((p) => `${p} ${FLIP_MS}ms ${EASE}`)
    .join(', ');

  const faceBase: React.CSSProperties = {
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#171527] text-white pt-24 pb-48 px-8 md:px-24 relative overflow-hidden">

      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto w-full mb-12 text-center relative z-10">
        <Link href="/" className="text-gray-400 hover:text-[#10A5B5] text-sm font-bold inline-flex items-center gap-2 mb-8 transition-colors">
          <span>&larr;</span> Back to Home
        </Link>
        <span className="text-[#10A5B5] font-bold uppercase tracking-widest text-sm block mb-3">Curated Multi-Day Trips</span>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">Layedover Packages</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Select from our pre-built, road-tested itineraries. Tap any package to flip the card and see the full details.
        </p>
      </div>

      {/* 2. Grid — cards never change size or position inside the grid, so the layout can't break */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {READY_PACKAGES.map((pkg) => {
          const isActive = active?.pkg.id === pkg.id;
          return (
            <div
              key={pkg.id}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${pkg.title}`}
              onClick={(e) => openCard(pkg, e.currentTarget)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openCard(pkg, e.currentTarget);
                }
              }}
              className={`relative group md:hover:scale-[1.04] transition-transform duration-700 cursor-pointer rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-[#10A5B5] [-webkit-tap-highlight-color:transparent] ${
                isActive ? 'opacity-0 pointer-events-none' : ''
              }`}
            >
              {/* LED Ambient Backlight */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-[#10A5B5] opacity-25 md:group-hover:opacity-100 blur-2xl transition-all duration-700"></div>

              <div className="relative h-[540px] z-10">
                <CardFront pkg={pkg} />
              </div>
            </div>
          );
        })}
      </div>

           {/* 3. HIGH-IMPACT CYAN FLOATING PRICE BANNER WITH LAYEDOVER PIN */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg pointer-events-none">
        <div className="relative bg-[#171527]/90 backdrop-blur-2xl border-2 border-[#10A5B5]/80 shadow-[0_10px_50px_rgba(16,165,181,0.35)] rounded-2xl p-4 md:p-5 flex items-center justify-between gap-4 pointer-events-auto hover:border-[#10A5B5] transition-all duration-300">

          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#10A5B5]/30 via-[#10A5B5]/50 to-[#10A5B5]/30 blur-lg opacity-60 pointer-events-none -z-10"></div>

          <div className="flex items-center gap-3">
            {/* Pin Badge */}
            <div className="relative shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#10A5B5]/15 border border-[#10A5B5] rounded-xl flex items-center justify-center p-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-[#10A5B5] opacity-25"></span>
              <Image
                src="/pin.png"
                alt="Layedover Pin"
                width={24}
                height={24}
                className="relative z-10 drop-shadow-md object-contain"
              />
            </div>

            <div className="text-left">
              <div className="inline-flex items-center gap-1.5 bg-[#10A5B5]/20 border border-[#10A5B5]/40 px-2.5 py-0.5 rounded-full mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10A5B5] animate-pulse"></span>
                <span className="text-[#10A5B5] font-black uppercase text-[8px] md:text-[9px] tracking-widest">Guaranteed Best Rates</span>
              </div>
              <h2 className="text-sm md:text-base font-black text-white uppercase tracking-tight">
                All-Inclusive Escapes
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-end text-right border-l border-white/10 pl-4">
            <span className="text-gray-400 text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest block mb-0.5">Starting From</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-black text-[#10A5B5] drop-shadow-[0_4px_12px_rgba(16,165,181,0.4)]">$749</span>
              <span className="text-gray-300 font-bold text-[10px] md:text-xs uppercase tracking-wider">/ person</span>
            </div>
          </div>

        </div>
      </div>

      {/* 4. FLIP OVERLAY — lives in a portal on <body>, completely outside the grid */}
      {active &&
        createPortal(
          <div
            className="fixed inset-0 z-[100]"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.pkg.title} details`}
          >
            {/* Dim backdrop (tap to close) */}
            <div
              onClick={closeCard}
              className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-500 ${
                open ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* The flipping card: starts exactly on top of the grid card, then rotates + grows */}
            <div
              style={{
                position: 'fixed',
                top: (open ? target : active.rect).top,
                left: (open ? target : active.rect).left,
                width: (open ? target : active.rect).width,
                height: (open ? target : active.rect).height,
                transform: `perspective(2000px) rotateY(${open ? 180 : 0}deg)`,
                transformStyle: 'preserve-3d',
                transition: flipTransition,
                willChange: 'transform, top, left, width, height',
              }}
            >
              {/* Front */}
              <div
                className={`absolute inset-0 ${open ? 'pointer-events-none' : ''}`}
                style={faceBase}
              >
                <CardFront pkg={active.pkg} flying />
              </div>

              {/* Back (pre-rotated 180° so it reads correctly once flipped) */}
              <div
                className={`absolute inset-0 ${open ? '' : 'pointer-events-none'}`}
                style={{ ...faceBase, transform: 'rotateY(180deg)' }}
              >
                <CardBack
                  pkg={active.pkg}
                  onClose={closeCard}
                  onInquire={() => setInquiryPkg(active.pkg)}
                  closeRef={closeBtnRef}
                />
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* 5. Inquiry form (above the flipped card) */}
      {inquiryPkg && <InquiryModal pkg={inquiryPkg} onClose={() => setInquiryPkg(null)} />}
    </main>
  );
}
