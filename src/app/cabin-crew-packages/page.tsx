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
  /** Optional line under the place name */
  note?: string;
}

interface ActivityGroup {
  /** e.g. "Canggu – Off Duty, Finally" or "Day 1 – Seminyak & Canggu" */
  title: string;
  items: string[];
}

interface CrewPackage {
  id: number;
  title: string;
  duration: string;
  route: string;
  image: string;
  desc: string;
  tags: string[];
  /** Everything below is optional: sections only show up if you fill them in */
  rating?: string;
  stays?: Stay[];
  activityGroups?: ActivityGroup[];
  privileges?: string[];
  transport?: string[];
  catering?: string[];
  tagline?: string;
  pricing: {
    headline: string; // e.g. "From $1,499 USD"
    sub?: string; // e.g. "per person"
    note?: string; // fine print shown at the bottom of the details
  };
}

/** Full breakdown of the Annual Leave package.
 *  Shared by "The Ultimate Crew Leave" and "Jet lag", so edit it once here. */
const ANNUAL_LEAVE_DETAILS: Pick<
  CrewPackage,
  'rating' | 'stays' | 'activityGroups' | 'privileges' | 'transport' | 'catering' | 'tagline'
> = {
  rating: '4.8',
  stays: [
    { nights: 3, place: 'Canggu', note: 'Stylish tropical villa with private pool' },
    { nights: 3, place: 'Uluwatu', note: 'Luxury ocean-view resort' },
    { nights: 3, place: 'Ubud', note: 'Private jungle villa with infinity pool' },
  ],
  activityGroups: [
    {
      title: 'Canggu – Off Duty, Finally',
      items: [
        'VIP welcome with personalized crew gifts',
        'Traditional Balinese welcome massage',
        'Sunset experience at a beach club',
        'Surf lesson at Batu Bolong Beach',
        'Pool party at a famous beach club',
        'Canggu boutique shopping and café hopping',
        'Sunset horseback riding along the beach',
        'Bali wild night out',
        'Free morning for sleeping in and relaxation',
        "Explore Bali's famous coffee shops and hidden gems",
        'Tanah Lot Temple',
        'Dirt bike',
      ],
    },
    {
      title: 'Uluwatu – Sun, Sea & Freedom',
      items: [
        'Luxury beach club experience at Savaya',
        'Melasti Beach and turquoise water relaxation',
        "Paragliding over Uluwatu's coastline",
        'Private sunset cruise along the southern cliffs',
        'Uluwatu Temple and Kecak fire dance',
        'Sunset seafood dinner in Jimbaran',
        'Luxury ocean-view spa treatment',
        'Free day for beach relaxation and personal exploration',
        'Surfing class',
        'Pantai limestone cliff',
      ],
    },
    {
      title: 'Ubud – Recharge & Reconnect',
      items: [
        'Tegalalang rice terraces and jungle swing',
        'ATV jungle adventure',
        'Tubing on the Ayung River',
        'Tibumana waterfall escape',
        'Traditional Balinese purification ceremony',
        'Private sound healing experience',
        'Sunrise yoga and guided meditation',
        'Balinese cooking class',
        'Luxury flower bath overlooking the jungle',
        'Deep tissue massage and reflexology',
        'Private jungle-view floating breakfast',
        'Free afternoon for relaxation and recovery',
      ],
    },
  ],
  privileges: [
    'Personalized crew welcome amenities',
    'Priority late check-out requests, subject to availability',
    'Flexible daily scheduling and late morning starts',
    'Dedicated Layedover travel concierge',
    'Exclusive crew discounts on optional experiences',
    'Restaurant and nightlife reservation assistance',
    '3 luxury spa treatments',
  ],
  transport: [
    'Private airport pick-up',
    'Private transfer from Canggu to Uluwatu',
    'Private transfer from Uluwatu to Ubud',
    'Private airport drop-off',
    'Private air-conditioned transportation for scheduled excursions',
    'Private evening transfers for selected nightlife experiences',
  ],
  catering: [
    '9 hotel and villa breakfasts',
    '1 luxury beachfront brunch',
    '1 lunch during the Ubud adventure',
    '1 sunset seafood dinner in Jimbaran',
    '1 private Balinese dining experience',
    'Welcome refreshments',
  ],
  tagline: 'No roster. No briefing. No passengers. Just Bali.',
};

const CREW_PACKAGES: CrewPackage[] = [
  {
    id: 1,
    title: 'The Ultimate Crew Leave',
    duration: '10 Days / 9 Nights',
    route: 'Canggu • Uluwatu • Ubud',
    image: '/ultimatecrew.jpeg',
    desc: 'No roster. No briefing. No passengers. VIP welcome, luxury beach clubs, jungle ATV, paragliding, and absolute freedom.',
    tags: ['Exclusive', 'Freedom'],
    ...ANNUAL_LEAVE_DETAILS,
    pricing: {
      headline: 'From $1,500 USD',
      sub: 'per person',
      note: 'Available for solo crew, couples and crew friends.',
    },
  },
  {
    id: 2,
    title: 'Crew Days Off',
    duration: '4 Days / 3 Nights',
    route: 'Seminyak • Ubud • Uluwatu',
    image: '/favella.jpg',
    desc: 'The perfect short-haul escape. Welcome massages, VIP beach clubs, jungle ATV, Melasti beach, and a guaranteed luxury reset.',
    tags: ['Short Haul', 'Reset'],
    rating: '4.8',
    stays: [
      {
        nights: 3,
        place: 'Seminyak',
        note: 'Stylish hotel near beach clubs, restaurants and nightlife',
      },
    ],
    activityGroups: [
      {
        title: 'Day 1 – Seminyak & Canggu',
        items: [
          'Welcome Balinese massage',
          'Seminyak beach exploration',
          'Full-day experience at a beach club',
          'Dinner and nightlife in Canggu',
        ],
      },
      {
        title: 'Day 2 – Ubud Adventure',
        items: [
          'ATV jungle adventure',
          'Rafting or tubing on the Ayung River',
          'Tegalalang rice terraces',
          'Bali jungle swing experience',
          'Tegenungan waterfall',
          'Traditional Balinese coffee tasting',
          'Evening return to Seminyak',
        ],
      },
      {
        title: 'Day 3 – Uluwatu Escape',
        items: [
          'Melasti Beach relaxation',
          'Water sports or paragliding adventure',
          'Uluwatu Temple and Kecak fire dance',
          'Sunset dinner in Jimbaran',
          'Return to Seminyak for nightlife',
        ],
      },
      {
        title: 'Day 4 – Seminyak Chill',
        items: [
          'Late breakfast and pool relaxation',
          'Seminyak shopping and cafés',
          'Beachfront lunch',
          'Optional luxury spa treatment',
          'Airport departure',
        ],
      },
    ],
    transport: [
      'Private airport pick-up',
      'Private driver for Ubud excursion',
      'Private driver for Uluwatu excursion',
      'Private transfer to Canggu and return',
      'Private airport drop-off',
    ],
    catering: [
      '3 hotel breakfasts',
      '1 lunch during the Ubud adventure',
      '1 sunset dinner in Jimbaran',
    ],
    pricing: {
      headline: 'From $499',
      note: 'Special rates for airline crew and groups.',
    },
  },
  {
    id: 3,
    title: 'Jet lag',
    duration: 'Flexible Duration',
    route: 'Your Route, Your Rules',
    image: '/agung1.jpg',
    desc: 'Your layover, your way. Tell us exactly what you want to do and our concierge will build and execute your dream itinerary seamlessly.',
    tags: ['Bespoke', 'Flexible'],
    ...ANNUAL_LEAVE_DETAILS,
    pricing: {
      headline: 'From $999',
      note: 'Available for solo crew, couples and crew friends.',
    },
  },
];

/** True if a package has any detail sections beyond the intro text */
function hasDetails(pkg: CrewPackage) {
  return Boolean(
    pkg.stays?.length ||
      pkg.activityGroups?.length ||
      pkg.privileges?.length ||
      pkg.transport?.length ||
      pkg.catering?.length
  );
}

// ---------------------------------------------------------------------------
// Front face (boarding pass) — used in the grid AND as the starting face of the flip
// ---------------------------------------------------------------------------
function CardFront({ pkg, flying = false }: { pkg: CrewPackage; flying?: boolean }) {
  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border bg-[#1F1D36] shadow-2xl transition-colors duration-700 ${
        flying
          ? 'border-[#10A5B5]/60 shadow-[0_0_50px_rgba(16,165,181,0.35)]'
          : 'border-white/5 md:group-hover:border-[#10A5B5]/50'
      }`}
    >
      {/* Top Banner (First Class Ribbon) */}
      <div className="absolute top-0 right-0 bg-gradient-to-r from-gray-900 to-black text-[#D4AF37] font-black px-5 py-2 rounded-bl-2xl text-xs z-30 shadow-[0_4px_15px_rgba(0,0,0,0.5)] uppercase tracking-widest border-b border-l border-[#D4AF37]/30 flex items-center gap-2">
        <svg className="w-3 h-3 text-[#D4AF37] transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
        </svg>
        PRIORITY
      </div>

      {/* Top Half: Image */}
      <div className="relative h-[45%] w-full overflow-hidden">
        <Image
          src={pkg.image}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={pkg.title}
          className="object-cover transition-transform duration-1000 md:group-hover:scale-110 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D36] via-[#1F1D36]/40 to-transparent"></div>

        {/* Tap / click hint */}
        <span className="absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
          <span className="md:hidden">Tap</span>
          <span className="hidden md:inline">Click</span> for details
        </span>

        {/* Arrival Tag overlay */}
        <div className="absolute bottom-4 left-6 flex items-center gap-3">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-lg">
            <span className="text-white font-black text-2xl tracking-tighter">DPS</span>
          </div>
          <span className="text-[#10A5B5] font-bold text-[10px] uppercase tracking-widest bg-black/40 px-2 py-1 rounded">
            Bali Arrival
          </span>
        </div>
      </div>

      {/* Perforated Boarding Pass Divider */}
      <div className="relative h-0 z-20">
        <div className="absolute -top-3 -left-4 w-6 h-6 bg-[#171527] rounded-full shadow-inner border-r border-white/5"></div>
        <div className="absolute -top-3 -right-4 w-6 h-6 bg-[#171527] rounded-full shadow-inner border-l border-white/5"></div>
        <div className="absolute top-0 left-4 right-4 border-t-2 border-dashed border-white/10"></div>
      </div>

      {/* Bottom Half: Details */}
      <div className="relative p-8 flex flex-col flex-grow">
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

      {/* Boarding Pass Digital Barcode Footer */}
      <div className="mt-auto border-t border-white/5 p-5 bg-black/20 flex justify-between items-center relative overflow-hidden">
        <div className="flex gap-[3px] items-center opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`h-6 bg-white ${i % 3 === 0 ? 'w-1.5' : i % 2 === 0 ? 'w-0.5' : 'w-1'}`}></div>
          ))}
        </div>

        <div className="text-right">
          <span className="block text-[8px] text-gray-500 uppercase tracking-[0.2em] font-bold">Class</span>
          <span className="block text-xs text-white uppercase tracking-widest font-black">Crew exclusive</span>
        </div>
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

function CheckList({
  items,
  twoColumns = false,
  accent = 'cyan',
}: {
  items: string[];
  twoColumns?: boolean;
  accent?: 'cyan' | 'gold';
}) {
  const badge =
    accent === 'gold' ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#10A5B5]/20 text-[#10A5B5]';
  return (
    <ul className={`grid gap-x-6 gap-y-2.5 ${twoColumns ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-start gap-3 text-sm leading-snug text-gray-200">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${badge}`}
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------------------
// Back face (full details + Secure Leave button)
// ---------------------------------------------------------------------------
function CardBack({
  pkg,
  compact,
  onClose,
  onInquire,
  closeRef,
}: {
  pkg: CrewPackage;
  compact: boolean;
  onClose: () => void;
  onInquire: () => void;
  closeRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const totalActivities =
    pkg.activityGroups?.reduce((sum, group) => sum + group.items.length, 0) ?? 0;
  const hasTransport = Boolean(pkg.transport?.length);
  const hasCatering = Boolean(pkg.catering?.length);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-[#10A5B5]/60 bg-[#1F1D36] shadow-[0_0_60px_rgba(16,165,181,0.35)]">
      {/* Banner */}
      <div className="relative h-36 shrink-0 md:h-52">
        <Image
          src={pkg.image}
          fill
          sizes="(max-width: 1024px) 100vw, 980px"
          alt={pkg.title}
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D36] via-[#1F1D36]/40 to-black/10"></div>

        <span className="absolute left-4 top-4 z-20 rounded-full border border-[#D4AF37]/40 bg-black/60 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#D4AF37] backdrop-blur-md md:left-8 md:top-5">
          Cabin Crew Exclusive
        </span>

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
            {pkg.duration} · {pkg.route}
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
          <p
            className={`leading-relaxed text-gray-300 ${
              compact ? 'text-base md:text-lg' : 'text-sm md:text-base'
            }`}
          >
            {pkg.desc}
          </p>
        </div>

        {/* Accommodation */}
        {pkg.stays && pkg.stays.length > 0 && (
          <Section
            title="Where You'll Stay"
            aside={
              pkg.rating ? (
                <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-[#D4AF37]">
                  ★ {pkg.rating}
                </span>
              ) : undefined
            }
          >
            <div
              className={`grid grid-cols-2 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] ${
                pkg.stays.length === 1 ? 'sm:max-w-sm' : ''
              }`}
            >
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
        )}

        {/* Activities, grouped by location or day */}
        {pkg.activityGroups && pkg.activityGroups.length > 0 && (
          <Section title="Activities & Experiences" count={totalActivities}>
            <div className="space-y-6">
              {pkg.activityGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="mb-2.5 text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">
                    {group.title}
                  </h4>
                  <CheckList items={group.items} twoColumns />
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Crew privileges */}
        {pkg.privileges && pkg.privileges.length > 0 && (
          <Section title="Exclusive Cabin Crew Privileges">
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-4 md:p-5">
              <CheckList items={pkg.privileges} twoColumns accent="gold" />
            </div>
          </Section>
        )}

        {/* Transport + catering side by side on larger screens */}
        {(hasTransport || hasCatering) && (
          <div className="grid gap-7 md:grid-cols-2 md:gap-8">
            {hasTransport && (
              <Section title="Transportation">
                <CheckList items={pkg.transport!} />
              </Section>
            )}
            {hasCatering && (
              <Section title="Catering">
                <CheckList items={pkg.catering!} />
              </Section>
            )}
          </div>
        )}

        {/* Rate fine print */}
        <p className="rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-4 text-xs leading-relaxed text-gray-300">
          <span className="font-bold uppercase tracking-widest text-[#D4AF37]">Crew rates · </span>
          {pkg.pricing.note ? `${pkg.pricing.note} ` : ''}
          Valid airline ID required.
        </p>

        {pkg.tagline && (
          <p className="pt-1 text-center text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37] md:text-sm">
            {pkg.tagline}
          </p>
        )}
      </div>

      {/* Sticky footer: crew rate + CTA */}
      <div className="shrink-0 border-t border-white/10 bg-[#1F1D36] p-4 md:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex flex-wrap items-baseline justify-center gap-x-2 md:flex-col md:items-start md:gap-0.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Crew Rate</span>
            <span className="text-xl font-black leading-tight text-[#10A5B5] md:text-2xl">
              {pkg.pricing.headline}
            </span>
            {pkg.pricing.sub && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {pkg.pricing.sub}
              </span>
            )}
          </div>
          <button
            onClick={onInquire}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#10A5B5] py-3.5 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(16,165,181,0.4)] transition-colors hover:bg-[#0d8996] md:w-auto md:min-w-[320px] md:px-10 md:py-4"
          >
            Secure Leave <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Secure Leave form (rendered in a portal so it sits above the flipped card)
// ---------------------------------------------------------------------------
function InquiryModal({ pkg, onClose }: { pkg: CrewPackage; onClose: () => void }) {
  const [contactInput, setContactInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const subtitle = `Requesting crew dates and confirmation for: ${pkg.route} (${pkg.pricing.headline}${
    pkg.pricing.sub ? ` ${pkg.pricing.sub}` : ''
  }).`;

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
          subject: `Crew Layover Request: ${pkg.title}`,
          // Only send as "email" if it looks like one, so WhatsApp numbers don't get rejected
          ...(contact.includes('@') ? { email: contact } : {}),
          contact,
          message: `Crew member requested booking details for: ${pkg.title} (${subtitle}) Contact: ${contact}`,
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
      aria-label={`Secure leave: ${pkg.title}`}
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
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{subtitle}</p>
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
              {isSubmitting ? 'Sending Request...' : 'Secure Leave'}
            </button>
          </form>
        ) : (
          <div className="text-center py-4 md:py-6">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5C8A3F]/20 text-[#5C8A3F] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Request Received!</h3>
            <p className="text-gray-300 text-xs md:text-sm mb-5 md:mb-6">
              Thank you! We have logged your details for {pkg.title} and will reach out shortly to finalize.
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

export default function CabinCrewPackagesPage() {
  // The card that is currently "flown out" of the grid, plus where it started
  const [active, setActive] = useState<{ pkg: CrewPackage; rect: Box } | null>(null);
  const [open, setOpen] = useState(false); // false = at grid position, true = flipped + enlarged
  const [vp, setVp] = useState({ w: 0, h: 0 });
  const [inquiryPkg, setInquiryPkg] = useState<CrewPackage | null>(null);

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openCard = (pkg: CrewPackage, el: HTMLElement) => {
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

  // Escape closes the form first, then the card
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

  // Packages with no detail sections get a smaller panel instead of a mostly empty one
  const compact = active ? !hasDetails(active.pkg) : false;

  // Size/position of the enlarged card (almost full screen on phones, big centered panel on desktop)
  const margin = vp.w < 768 ? 12 : 24;
  const targetW = Math.min(compact ? 720 : 980, vp.w - margin * 2);
  const targetH = Math.min(compact ? 540 : 860, vp.h - margin * 2);
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

      {/* Aviation Radar / Navigation Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      ></div>

      {/* Subtle Glowing Radar Sweep Effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#10A5B5]/5 to-transparent blur-[100px] pointer-events-none z-0"></div>

      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto w-full mb-16 text-center relative z-10 flex flex-col items-center">
        <Link
          href="/"
          className="text-gray-400 hover:text-[#10A5B5] text-sm font-bold inline-flex items-center gap-2 mb-8 transition-colors self-start md:self-center absolute left-0 top-0"
        >
          <span>&larr;</span> Back to Home
        </Link>

        {/* Flight Status Telemetry Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/40 border border-[#10A5B5]/30 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(16,165,181,0.15)] mt-12 md:mt-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10A5B5] animate-pulse"></span>
          <span className="text-[#10A5B5] text-[10px] font-black uppercase tracking-widest">Status: Cleared for Layover</span>
        </div>

        <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm block mb-3">Cabin Crew Exclusives</span>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6 drop-shadow-lg">
          Crew Packages
        </h1>
        <p className="text-gray-300 text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-2">
          You spend your life taking care of passengers.
        </p>
        <p className="text-[#D4AF37] text-xl font-extrabold uppercase tracking-widest max-w-2xl mx-auto drop-shadow-md">
          This time, it’s all about you.
        </p>
      </div>

      {/* 2. Boarding Pass Grid — cards never change size or position inside the grid, so the layout can't break */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {CREW_PACKAGES.map((pkg) => {
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

              <div className="relative h-[580px] z-10">
                <CardFront pkg={pkg} />
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. HIGH-IMPACT CYAN FLOATING PRICE BANNER */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg pointer-events-none">
        <div className="relative bg-[#171527]/90 backdrop-blur-2xl border-2 border-[#10A5B5]/80 shadow-[0_10px_50px_rgba(16,165,181,0.35)] rounded-2xl p-4 md:p-5 flex items-center justify-between gap-4 pointer-events-auto hover:border-[#10A5B5] transition-all duration-300">

          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#10A5B5]/30 via-[#10A5B5]/50 to-[#10A5B5]/30 blur-lg opacity-60 pointer-events-none -z-10"></div>

          <div className="flex items-center gap-3">
            {/* Custom Pin Icon */}
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
              <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span className="text-[#D4AF37] font-black uppercase text-[8px] md:text-[9px] tracking-widest">Valid Airline ID Required</span>
              </div>
              <h2 className="text-sm md:text-base font-black text-white uppercase tracking-tight">
                Exclusive Crew Rates
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-end text-right border-l border-white/10 pl-4">
            <span className="text-gray-400 text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest block mb-0.5">Starting From</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-black text-[#10A5B5] drop-shadow-[0_4px_12px_rgba(16,165,181,0.4)]">$499</span>
              <span className="text-gray-300 font-bold text-[10px] md:text-xs uppercase tracking-wider">/ crew</span>
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
                  compact={compact}
                  onClose={closeCard}
                  onInquire={() => setInquiryPkg(active.pkg)}
                  closeRef={closeBtnRef}
                />
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* 5. Secure Leave form (above the flipped card) */}
      {inquiryPkg && <InquiryModal pkg={inquiryPkg} onClose={() => setInquiryPkg(null)} />}
    </main>
  );
}
