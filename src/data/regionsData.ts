export const regionsData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  packages: { name: string; duration: string; price: string; description: string }[];
  activities: { title: string; image: string; category: string }[];
}> = {
  seminyak: {
    title: "Explore Seminyak",
    tagline: "The Real Bali, Between Flights",
    description: "Indulge in upscale dining, designer boutiques, and world-class sunset beach clubs.",
    heroImage: "/seminyak.jpg",
    packages: [
      { name: "Seminyak Package 1", duration: "3 Days / 2 Nights", price: "TBD", description: "Package details coming soon." }
    ],
    activities: [
      { title: "Surfing Lessons", image: "/surf.jpg", category: "Surf" },
      { title: "Horse Riding", image: "/horseriding.jpg", category: "Leisure" },
      { title: "Wellness and Healing", image: "/therapy.jpg", category: "Wellness" },
      { title: "Nightclub Hopping", image: "/favella.jpg", category: "Nightlife" },
      { title: "Kuta Local Shops", image: "/kutashop.jpg", category: "Culture" },
      { title: "Fine Dining", image: "/dining.jpg", category: "Lifestyle" },
      { title: "Breathwork Workshop", image: "/soundhealing.jpg", category: "Wellness" },
      { title: "Sunset Picnic on the Beach", image: "/picnic.jpg", category: "Relaxation" }
    ]
  },
  canggu: {
    title: "Explore Canggu",
    tagline: "The Real Bali, Between Flights",
    description: "Catch waves, explore vibrant cafe culture, and experience Bali's trendiest coastal hub.",
    heroImage: "/canggu.jpg",
    packages: [
      { name: "Canggu Package 1", duration: "3 Days / 2 Nights", price: "TBD", description: "Package details coming soon." }
    ],
    activities: [
      { title: "Tanah Lot Temple", image: "/tanahlot.jpg", category: "Culture" },
      { title: "Surf Lessons", image: "/surf1.jpg", category: "Surf" },
      { title: "Love Anchor Market", image: "/loveanchor.jpg", category: "Shopping" },
      { title: "Dramatic Sunsets", image: "/clif.jpg", category: "Views" },
      { title: "Sensual Beach Clubs", image: "/finns.jpg", category: "Nightlife" },
      { title: "Recovery Wellness", image: "/healing.jpg", category: "Wellness" },
      { title: "Local Designers Boutiques", image: "/shopping.jpg", category: "Shopping" },
      { title: "Iconic Gyms", image: "/gym.jpg", category: "Fitness" },
      { title: "Beauty Salons", image: "/saloon.jpg", category: "Leisure" },
      { title: "Rice Fields Escapes", image: "/canggurice.jpg", category: "Nature" },
      { title: "Late Night Spots", image: "/party.jpg", category: "Nightlife" },
      { title: "Dirt Bike Adrenaline", image: "/dirtbikebeach.jpg", category: "Adventure" }
    ]
  },
  uluwatu: {
    title: "Explore Uluwatu",
    tagline: "The Real Bali, Between Flights",
    description: "Experience dramatic limestone cliffs, world-class surf breaks, and unforgettable temple sunsets.",
    heroImage: "/uluwatu.jpg",
    packages: [
      { name: "Uluwatu Package 1", duration: "3 Days / 2 Nights", price: "TBD", description: "Package details coming soon." }
    ],
    activities: [
      { title: "Professional Surfing", image: "/surfuluwatu.jpg", category: "Surf" },
      { title: "Chasing Sunsets", image: "/sunset.jpg", category: "Views" },
      { title: "Sunrise Cliff Side Yoga", image: "/yogauluwatu.jpg", category: "Wellness" },
      { title: "Horse Back Riding", image: "/horseriding.jpg", category: "Leisure" },
      { title: "Surfing Lesson", image: "/surflesson.jpg", category: "Surf" },
      { title: "Balinese Massage", image: "/spa.jpg", category: "Wellness" },
      { title: "Paragliding", image: "/paragliding.jpg", category: "Adventure" },
      { title: "Eat Local", image: "/eat-local.jpg", category: "Culture" },
      { title: "Hidden Beaches", image: "/hiddenbeach.jpg", category: "Nature" },
      { title: "Sea Food Feast", image: "/seafood.jpg", category: "Dining" },
      { title: "Kecak Fire Dance", image: "/kecakdance.jpg", category: "Culture" },
      { title: "Coastal Clubbing", image: "/savaya.jpg", category: "Nightlife" }
    ]
  },
  ubud: {
    title: "Explore Ubud",
    tagline: "The Real Bali, Between Flights",
    description: "Immerse yourself in Bali's cultural and jungle heart with our curated multi-day journeys.",
    heroImage: "/ubud.jpg",
    packages: [
      { name: "Ubud Package 1", duration: "3 Days / 2 Nights", price: "TBD", description: "Package details coming soon." }
    ],
    activities: [
      { title: "Waterfall Hunt", image: "/waterfall.jpg", category: "Nature" },
      { title: "White Water Rafting", image: "/rafting.jpg", category: "Adventure" },
      { title: "ATV Jungle Adventure", image: "/atvagung.jpg", category: "Adventure" },
      { title: "UTV Adrenaline", image: "/utv.jpg", category: "Adventure" },
      { title: "Jungle Swing Experience", image: "/swing.jpg", category: "Experience" },
      { title: "Zipline Adventure", image: "/zipline.jpg", category: "Adventure" },
      { title: "Classic Car Tour", image: "/scooter.jpg", category: "Leisure" },
      { title: "Mount Batur Sunrise", image: "/agung3.jpeg", category: "Adventure" },
      { title: "Ubud Wellness", image: "/therapy.jpg", category: "Wellness" },
      { title: "Yoga", image: "/yoga.jpg", category: "Wellness" },
      { title: "Sound Healing", image: "/soundhealing.jpg", category: "Wellness" },
      { title: "Balinese Purification Ritual", image: "/cleansing.jpg", category: "Culture" },
      { title: "Traditional Balinese Massage", image: "/spa.jpg", category: "Wellness" },
      { title: "Herbal Healing Experience", image: "/healing.jpg", category: "Wellness" },
      { title: "Coffee/Tea/Cacao Tasting", image: "/cofeeubud.jpg", category: "Culture" },
      { title: "Silver Jewelry-Making", image: "/silver.jpg", category: "Culture" },
      { title: "Wood Carving / Pottery", image: "/silver2.jpg", category: "Culture" },
      { title: "Canang Sari Making", image: "/cenai.jpg", category: "Culture" },
      { title: "Go-Karting", image: "/gokart.jpg", category: "Adventure" },
      { title: "Jungle Wellness Resort Pass", image: "/cretya-ubud.jpeg", category: "Leisure" }
    ]
  },
  sidemen: {
    title: "Explore Sidemen",
    tagline: "The Real Bali, Between Flights",
    description: "Escape to untouched valleys, traditional weaving villages, and panoramic views of Mount Agung.",
    heroImage: "/sidemen.jpg",
    packages: [
      { name: "Sidemen Package 1", duration: "3 Days / 2 Nights", price: "TBD", description: "Package details coming soon." }
    ],
    activities: [
      { title: "Rice Field Trek", image: "/ricefieldtrek.jpg", category: "Nature" },
      { title: "Mediation Session", image: "/mediation-session.jpg", category: "Wellness" },
      { title: "River Tubing", image: "/river-tubing.jpg", category: "Adventure" },
      { title: "Bicycle Loop Track", image: "/bicyclesidemen.jpg", category: "Leisure" },
      { title: "Agung Sunrise Views", image: "/agungsunrise.jpg", category: "Views" },
      { title: "Natural Waterfall Jacuzzi", image: "/naturalpool.jpg", category: "Nature" },
      { title: "Royal Water Palace", image: "/watertemple.jpg", category: "Culture" },
      { title: "Epic Volcano Viewpoint", image: "/lahangan.jpg", category: "Views" },
      { title: "The Hanging Café", image: "/hanging.jpg", category: "Dining" },
      { title: "Traditional Cooking Class", image: "/cooking2.jpg", category: "Culture" }
    ]
  },
  amed: {
    title: "Explore Amed",
    tagline: "The Real Bali, Between Flights",
    description: "Discover rugged volcanic coastlines, black sand beaches, and crystal-clear eastern waters.",
    heroImage: "/amed.jpg",
    packages: [
      { name: "Amed Package 1", duration: "3 Days / 2 Nights", price: "TBD", description: "Package details coming soon." }
    ],
    activities: [
      { title: "Shipwreck Snorkeling", image: "/shipwreak.jpg", category: "Marine" },
      { title: "Free Diving Lessons", image: "/free-diving.jpg", category: "Marine" },
      { title: "Sunset Jukung Boat Trip", image: "/sunsetboat.jpg", category: "Leisure" },
      { title: "Mount Agung Hike", image: "/agungtrek.jpg", category: "Adventure" },
      { title: "Dirt Bike Adventure", image: "/dirtbike.jpg", category: "Adventure" },
      { title: "Volcano View Points", image: "/lahangan.jpg", category: "Views" },
      { title: "Balinese Food", image: "/balifood.jpg", category: "Dining" },
      { title: "Cooking Class", image: "/cooking.jpg", category: "Culture" },
      { title: "Black Sand Beach", image: "/agung.jpg", category: "Nature" },
      { title: "Traditional Sea Salt Factory", image: "/seasalt.jpg", category: "Culture" },
      { title: "Scenic Costal Ride", image: "/coastal-ride.jpg", category: "Views" },
      { title: "Tirta Ganga", image: "/waterpalace.jpg", category: "Culture" }
    ]
  },
  sanur: {
    title: "Explore Sanur",
    tagline: "The Real Bali, Between Flights",
    description: "Enjoy peaceful sunrise strolls, calm lagoon waters, and a relaxed coastal village atmosphere.",
    heroImage: "/sanur.jpg",
    packages: [
      { name: "Sanur Package 1", duration: "3 Days / 2 Nights", price: "TBD", description: "Package details coming soon." }
    ],
    activities: [
      { title: "Beach Front Cycling", image: "/sanur-beach.jpg", category: "Leisure" },
      { title: "Water Sports", image: "/watersport.jpg", category: "Marine" },
      { title: "Snorkeling Trip", image: "/snorkeling.jpg", category: "Marine" },
      { title: "Traditional Fishing Trip", image: "/fishing.jpg", category: "Experience" },
      { title: "Street Food Market", image: "/seafoodsanur.jpg", category: "Culture" },
      { title: "Wellness Treatments", image: "/spa.jpg", category: "Wellness" },
      { title: "Scenic Walks and Sunrises", image: "/sanurwalk.jpg", category: "Leisure" }
    ]
  },
  nusadua: {
    title: "Explore Nusa Dua",
    tagline: "The Real Bali, Between Flights",
    description: "Relax in five-star luxury resorts, immaculate white sand beaches, and pristine coastal pathways.",
    heroImage: "/nusadua.jpg",
    packages: [
      { name: "Nusa Dua Package 1", duration: "3 Days / 2 Nights", price: "TBD", description: "Package details coming soon." }
    ],
    activities: [
      { title: "Diverse Water Sports", image: "/jetski.jpg", category: "Marine" },
      { title: "Scenic Cycling", image: "/cycling.jpg", category: "Leisure" },
      { title: "Golf", image: "/golf.jpg", category: "Leisure" },
      { title: "Luxury Resorts Experience", image: "/pool1.jpg", category: "Relaxation" },
      { title: "Glass Bottom Boat", image: "/glassboat.jpg", category: "Marine" },
      { title: "Snorkeling", image: "/snorkeling-nusadua.jpg", category: "Marine" },
      { title: "Puja Mandala", image: "/puja.jpg", category: "Culture" },
      { title: "Beach Front Treatment", image: "/beachfront.jpg", category: "Wellness" },
      { title: "Bali Collection", image: "/shopping.jpg", category: "Shopping" },
      { title: "Devdan Show", image: "/devdan.jpg", category: "Culture" }
    ]
  },
  nusapenida: {
    title: "Explore Nusa Penida",
    tagline: "The Real Bali, Between Flights",
    description: "Venture across dramatic cliff formations, turquoise bays, and untouched island hideaways.",
    heroImage: "/nusapenida.jpg",
    packages: [
      { name: "Nusa Penida Package 1", duration: "3 Days / 2 Nights", price: "TBD", description: "Package details coming soon." }
    ],
    activities: [
      { title: "Snorkeling with Manta Rays", image: "/manta.jpg", category: "Marine" },
      { title: "West Cost View Points", image: "/clif.jpg", category: "Views" },
      { title: "Kelingking Hike", image: "/kilinging.jpg", category: "Adventure" },
      { title: "Eastern Gems Visit", image: "/gems.jpg", category: "Explore" },
      { title: "Cave Temple", image: "/cave.jpg", category: "Culture" },
      { title: "Scuba Diving", image: "/diving.jpg", category: "Marine" },
      { title: "Rumah Pohon Tree House", image: "/rumahpohon.jpg", category: "Views" },
      { title: "Thousand Islands Viewpoint", image: "/islands.jpg", category: "Views" }
    ]
  },
  lovina: {
    title: "Explore Lovina",
    tagline: "The Real Bali, Between Flights",
    description: "Head north to experience calm black-sand shores, dolphin watching, and volcanic hot springs.",
    heroImage: "/lovina.jpg",
    packages: [
      { name: "Lovina Package 1", duration: "3 Days / 2 Nights", price: "TBD", description: "Package details coming soon." }
    ],
    activities: []
  }
};