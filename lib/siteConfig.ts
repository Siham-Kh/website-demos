// ============================================================================
// EDIT THIS FILE TO CUSTOMIZE YOUR WEBSITE
// ============================================================================
// This is the ONLY file you need to edit to customize your business website.
// Change the values below to match your business information.

export type BusinessHours = {
  [key: string]: string; // e.g., "Monday": "9:00 AM - 6:00 PM"
};

export type Service = {
  name: string;
  description: string;
  priceRange: string; // e.g., "$50 - $80"
  category: string;
  addOns?: {
    name: string;
    price: string;
  }[];
};

export type Review = {
  name: string;
  rating: number; // 1-5
  text: string;
  avatar?: string; // Optional avatar image path
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SiteConfig = {
  // Business Information
  businessName: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  hours: BusinessHours;
  
  // Services
  services: Service[];
  
  // Gallery
  galleryImages: string[]; // Paths to images in /public/images/
  
  // Reviews
  reviews: Review[];
  overallRating: number; // 1-5
  
  // Promotions
  promotion: {
    active: boolean;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
  
  // FAQ
  faq: FAQItem[];
  
  // Social Media
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    yelp?: string;
    tiktok?: string;
  };
  
  // Theme Colors
  theme: {
    primary: string; // Tailwind color class
    accent: string;
  };
  
  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  
  // Badges (shown in hero)
  badges: string[];
};

// ============================================================================
// PRESET CONFIGS (for demo switcher)
// ============================================================================

export const nailSalonConfig: SiteConfig = {
  businessName: "Luxe Nail Studio",
  tagline: "Premium nail care in the heart of the city",
  address: {
    street: "123 Main Street",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
  },
  phone: "+1-555-0123",
  email: "hello@luxenails.com",
  hours: {
    Monday: "9:00 AM - 7:00 PM",
    Tuesday: "9:00 AM - 7:00 PM",
    Wednesday: "9:00 AM - 7:00 PM",
    Thursday: "9:00 AM - 8:00 PM",
    Friday: "9:00 AM - 8:00 PM",
    Saturday: "10:00 AM - 6:00 PM",
    Sunday: "11:00 AM - 5:00 PM",
  },
  services: [
    {
      name: "Classic Manicure",
      description: "Traditional nail shaping, cuticle care, and polish application",
      priceRange: "$35 - $45",
      category: "Manicures",
      addOns: [
        { name: "Gel Polish", price: "+$15" },
        { name: "Nail Art", price: "+$10" },
      ],
    },
    {
      name: "Gel Manicure",
      description: "Long-lasting gel polish with UV curing",
      priceRange: "$50 - $65",
      category: "Manicures",
      addOns: [
        { name: "Nail Art", price: "+$15" },
        { name: "French Tips", price: "+$10" },
      ],
    },
    {
      name: "Classic Pedicure",
      description: "Relaxing foot soak, exfoliation, and polish",
      priceRange: "$45 - $55",
      category: "Pedicures",
      addOns: [
        { name: "Gel Polish", price: "+$15" },
        { name: "Paraffin Treatment", price: "+$20" },
      ],
    },
    {
      name: "Spa Pedicure",
      description: "Luxurious pedicure with hot stone massage and mask",
      priceRange: "$65 - $80",
      category: "Pedicures",
    },
    {
      name: "Acrylic Full Set",
      description: "Full set of acrylic nails with your choice of length and shape",
      priceRange: "$60 - $85",
      category: "Extensions",
      addOns: [
        { name: "Gel Polish", price: "+$15" },
        { name: "Nail Art", price: "+$20" },
      ],
    },
  ],
  galleryImages: [
    "/images/nail-1.jpg",
    "/images/nail-2.jpg",
    "/images/nail-3.jpg",
    "/images/nail-4.jpg",
    "/images/nail-5.jpg",
    "/images/nail-6.jpg",
  ],
  reviews: [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Best nail salon in the city! The staff is so professional and my nails always look perfect. Highly recommend!",
    },
    {
      name: "Jessica L.",
      rating: 5,
      text: "I've been coming here for months and I'm always impressed. The gel manicures last forever and the designs are beautiful.",
    },
    {
      name: "Amanda K.",
      rating: 5,
      text: "Clean, modern space with amazing service. The pedicure was so relaxing and my feet look amazing!",
    },
  ],
  overallRating: 4.9,
  promotion: {
    active: true,
    title: "New Client Special",
    description: "Get 20% off your first visit! Book now and experience luxury nail care.",
    ctaText: "Book Now",
    ctaLink: "#contact",
  },
  faq: [
    {
      question: "We have Instagram, do we really need a website?",
      answer: "While Instagram is great for showcasing work, a website gives you credibility, helps customers find you on Google, and provides a professional booking experience. It's your digital storefront that's always open.",
    },
    {
      question: "How fast can I get my website?",
      answer: "With this template, you can have a professional website live in under an hour. Just customize the config file with your business details and deploy!",
    },
    {
      question: "What's included in the website?",
      answer: "Your website includes a beautiful homepage with services, gallery, reviews, location map, contact information, and full mobile responsiveness. Everything you need to attract and convert customers.",
    },
    {
      question: "Do I need technical skills to customize it?",
      answer: "No! Just edit the siteConfig.ts file with your business information. It's designed to be simple - just fill in your name, address, services, and prices. No coding required.",
    },
  ],
  social: {
    instagram: "https://instagram.com/luxenails",
    facebook: "https://facebook.com/luxenails",
    yelp: "https://yelp.com/biz/luxenails",
  },
  theme: {
    primary: "rose",
    accent: "pink",
  },
  seo: {
    title: "Luxe Nail Studio | Premium Nail Care in San Francisco",
    description: "Experience luxury nail care at Luxe Nail Studio. Professional manicures, pedicures, and nail art in the heart of San Francisco. Book your appointment today!",
    keywords: ["nail salon", "manicure", "pedicure", "nail art", "San Francisco", "gel nails"],
  },
  badges: ["New Client Special", "Walk-ins Welcome", "Premium Quality"],
};

export const hairSalonConfig: SiteConfig = {
  businessName: "Elite Hair Studio",
  tagline: "Where style meets sophistication",
  address: {
    street: "456 Fashion Avenue",
    city: "Los Angeles",
    state: "CA",
    zip: "90028",
  },
  phone: "+1-555-0456",
  email: "info@elitehair.com",
  hours: {
    Monday: "9:00 AM - 7:00 PM",
    Tuesday: "9:00 AM - 7:00 PM",
    Wednesday: "9:00 AM - 7:00 PM",
    Thursday: "9:00 AM - 8:00 PM",
    Friday: "9:00 AM - 8:00 PM",
    Saturday: "8:00 AM - 6:00 PM",
    Sunday: "10:00 AM - 5:00 PM",
  },
  services: [
    {
      name: "Women's Haircut",
      description: "Professional cut and style consultation",
      priceRange: "$75 - $120",
      category: "Haircuts",
      addOns: [
        { name: "Blow Dry", price: "+$25" },
        { name: "Deep Conditioning", price: "+$30" },
      ],
    },
    {
      name: "Men's Haircut",
      description: "Classic or modern cut with styling",
      priceRange: "$45 - $65",
      category: "Haircuts",
      addOns: [
        { name: "Beard Trim", price: "+$20" },
        { name: "Hot Towel", price: "+$15" },
      ],
    },
    {
      name: "Color & Highlights",
      description: "Full color service with highlights and toning",
      priceRange: "$150 - $250",
      category: "Color Services",
      addOns: [
        { name: "Root Touch-up", price: "+$80" },
        { name: "Gloss Treatment", price: "+$40" },
      ],
    },
    {
      name: "Balayage",
      description: "Hand-painted highlights for natural-looking dimension",
      priceRange: "$180 - $280",
      category: "Color Services",
    },
    {
      name: "Keratin Treatment",
      description: "Smoothing treatment for frizz-free, silky hair",
      priceRange: "$250 - $350",
      category: "Treatments",
    },
  ],
  galleryImages: [
    "/images/hair-1.jpg",
    "/images/hair-2.jpg",
    "/images/hair-3.jpg",
    "/images/hair-4.jpg",
    "/images/hair-5.jpg",
    "/images/hair-6.jpg",
  ],
  reviews: [
    {
      name: "Michelle R.",
      rating: 5,
      text: "Absolutely love my new color! The stylists here are true artists. Best salon experience I've ever had.",
    },
    {
      name: "David T.",
      rating: 5,
      text: "Great cut and excellent service. The barbers really know their craft. I'll definitely be back!",
    },
    {
      name: "Emma S.",
      rating: 5,
      text: "The balayage turned out perfect! The salon is beautiful and the staff made me feel so comfortable.",
    },
  ],
  overallRating: 4.8,
  promotion: {
    active: true,
    title: "First Visit Discount",
    description: "15% off your first service! Experience the difference at Elite Hair Studio.",
    ctaText: "Book Appointment",
    ctaLink: "#contact",
  },
  faq: [
    {
      question: "We have Instagram, do we really need a website?",
      answer: "A website gives you 24/7 visibility on Google, builds trust with potential clients, and provides a professional booking experience. It's your digital business card that works even when you're closed.",
    },
    {
      question: "How fast can I get my website?",
      answer: "This template can be customized and live in under an hour. Just update your business details in the config file and you're ready to go!",
    },
    {
      question: "What's included in the website?",
      answer: "Your website includes services, pricing, photo gallery, customer reviews, location with map, hours, contact info, and full mobile optimization. Everything to attract new clients.",
    },
    {
      question: "Do I need technical skills to customize it?",
      answer: "Not at all! Simply edit the siteConfig.ts file with your business information - name, address, services, prices. It's designed to be user-friendly for non-technical users.",
    },
  ],
  social: {
    instagram: "https://instagram.com/elitehair",
    facebook: "https://facebook.com/elitehair",
    yelp: "https://yelp.com/biz/elitehair",
  },
  theme: {
    primary: "violet",
    accent: "purple",
  },
  seo: {
    title: "Elite Hair Studio | Premium Hair Salon in Los Angeles",
    description: "Professional hair salon offering cuts, color, highlights, and treatments in Los Angeles. Book your appointment with our expert stylists today!",
    keywords: ["hair salon", "haircut", "hair color", "highlights", "Los Angeles", "balayage"],
  },
  badges: ["Expert Stylists", "Premium Products", "Book Online"],
};

export const restaurantConfig: SiteConfig = {
  businessName: "Bella Vista Restaurant",
  tagline: "Authentic Italian cuisine in a warm, welcoming atmosphere",
  address: {
    street: "789 Culinary Boulevard",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  phone: "+1-555-0789",
  email: "reservations@bellavista.com",
  hours: {
    Monday: "11:00 AM - 10:00 PM",
    Tuesday: "11:00 AM - 10:00 PM",
    Wednesday: "11:00 AM - 10:00 PM",
    Thursday: "11:00 AM - 11:00 PM",
    Friday: "11:00 AM - 11:00 PM",
    Saturday: "10:00 AM - 11:00 PM",
    Sunday: "10:00 AM - 9:00 PM",
  },
  services: [
    {
      name: "Appetizers",
      description: "Start your meal with our selection of Italian classics",
      priceRange: "$12 - $18",
      category: "Menu",
      addOns: [
        { name: "Bruschetta Trio", price: "$14" },
        { name: "Antipasto Platter", price: "$18" },
        { name: "Calamari Fritti", price: "$16" },
      ],
    },
    {
      name: "Pasta",
      description: "Handmade pasta with authentic Italian sauces",
      priceRange: "$18 - $28",
      category: "Menu",
      addOns: [
        { name: "Spaghetti Carbonara", price: "$22" },
        { name: "Fettuccine Alfredo", price: "$20" },
        { name: "Linguine alle Vongole", price: "$26" },
      ],
    },
    {
      name: "Pizza",
      description: "Wood-fired pizzas with fresh ingredients",
      priceRange: "$16 - $24",
      category: "Menu",
      addOns: [
        { name: "Margherita", price: "$16" },
        { name: "Quattro Stagioni", price: "$22" },
        { name: "Prosciutto e Rucola", price: "$24" },
      ],
    },
    {
      name: "Main Courses",
      description: "Traditional Italian entrees",
      priceRange: "$24 - $38",
      category: "Menu",
      addOns: [
        { name: "Osso Buco", price: "$32" },
        { name: "Branzino al Forno", price: "$28" },
        { name: "Bistecca alla Fiorentina", price: "$38" },
      ],
    },
    {
      name: "Desserts",
      description: "Homemade Italian desserts",
      priceRange: "$10 - $14",
      category: "Menu",
      addOns: [
        { name: "Tiramisu", price: "$12" },
        { name: "Cannoli", price: "$10" },
        { name: "Gelato", price: "$8" },
      ],
    },
  ],
  galleryImages: [
    "/images/restaurant-1.jpg",
    "/images/restaurant-2.jpg",
    "/images/restaurant-3.jpg",
    "/images/restaurant-4.jpg",
    "/images/restaurant-5.jpg",
    "/images/restaurant-6.jpg",
  ],
  reviews: [
    {
      name: "Robert C.",
      rating: 5,
      text: "Best Italian food in the city! The pasta is incredible and the atmosphere is perfect for a date night. Highly recommend!",
    },
    {
      name: "Lisa P.",
      rating: 5,
      text: "Authentic flavors and generous portions. The service was excellent and the wine selection is impressive. We'll be back!",
    },
    {
      name: "Michael D.",
      rating: 5,
      text: "Outstanding food and warm hospitality. The wood-fired pizza is a must-try. This is our new favorite restaurant!",
    },
  ],
  overallRating: 4.7,
  promotion: {
    active: true,
    title: "Weekend Special",
    description: "Enjoy 20% off your entire bill on Sundays! Perfect for family dinners.",
    ctaText: "Make Reservation",
    ctaLink: "#contact",
  },
  faq: [
    {
      question: "We have Instagram, do we really need a website?",
      answer: "A website helps customers find you on Google, view your full menu, make reservations, and see your hours. It's essential for local SEO and building trust with diners.",
    },
    {
      question: "How fast can I get my website?",
      answer: "This template can be customized and live in under an hour. Just add your menu, photos, and business details to the config file.",
    },
    {
      question: "What's included in the website?",
      answer: "Your website includes menu sections, photo gallery, customer reviews, location with map, hours, contact info, reservation links, and full mobile optimization.",
    },
    {
      question: "Do I need technical skills to customize it?",
      answer: "No technical skills needed! Just edit the siteConfig.ts file with your restaurant information - menu items, prices, address, hours. It's designed to be simple.",
    },
  ],
  social: {
    instagram: "https://instagram.com/bellavista",
    facebook: "https://facebook.com/bellavista",
    yelp: "https://yelp.com/biz/bellavista",
  },
  theme: {
    primary: "amber",
    accent: "orange",
  },
  seo: {
    title: "Bella Vista Restaurant | Authentic Italian Cuisine in New York",
    description: "Experience authentic Italian cuisine at Bella Vista Restaurant. Wood-fired pizzas, handmade pasta, and traditional dishes in the heart of New York. Make a reservation today!",
    keywords: ["Italian restaurant", "pizza", "pasta", "New York", "dining", "restaurant"],
  },
  badges: ["Reservations Available", "Family Friendly", "Authentic Recipes"],
};

// ============================================================================
// HOLLYWOOD NAIL SPA - GAITHERSBURG, MD
// ============================================================================

export const hollywoodNailSpaConfig: SiteConfig = {
  businessName: "Hollywood Nail Spa",
  tagline: "Nail salon offering manicures and pedicures, including massages",
  address: {
    street: "654 Quince Orchard Rd",
    city: "Gaithersburg",
    state: "MD",
    zip: "20878",
  },
  phone: "(240) 813-4477",
  email: "info@hollywoodnailspa.com",
  hours: {
    Sunday: "10:00 AM - 5:00 PM",
    Monday: "10:00 AM - 7:30 PM",
    Tuesday: "10:00 AM - 7:30 PM",
    Wednesday: "10:00 AM - 7:30 PM",
    Thursday: "10:00 AM - 7:30 PM",
    Friday: "10:00 AM - 7:30 PM",
    Saturday: "9:00 AM - 7:00 PM",
  },
  services: [
    {
      name: "Classic Manicure",
      description: "Traditional nail shaping, cuticle care, and polish application",
      priceRange: "$25 - $35",
      category: "Manicures",
      addOns: [
        { name: "Gel Polish", price: "+$10" },
        { name: "Nail Art", price: "+$5" },
        { name: "French Tips", price: "+$8" },
      ],
    },
    {
      name: "Gel Manicure",
      description: "Long-lasting gel polish with UV curing for up to 3 weeks",
      priceRange: "$40 - $50",
      category: "Manicures",
      addOns: [
        { name: "Nail Art", price: "+$10" },
        { name: "French Tips", price: "+$8" },
        { name: "Ombre Design", price: "+$15" },
      ],
    },
    {
      name: "Classic Pedicure",
      description: "Relaxing foot soak, exfoliation, nail shaping, and polish",
      priceRange: "$35 - $45",
      category: "Pedicures",
      addOns: [
        { name: "Gel Polish", price: "+$10" },
        { name: "Paraffin Treatment", price: "+$15" },
        { name: "Callus Removal", price: "+$10" },
      ],
    },
    {
      name: "Spa Pedicure",
      description: "Luxurious pedicure with hot stone massage, mask, and paraffin treatment",
      priceRange: "$55 - $70",
      category: "Pedicures",
      addOns: [
        { name: "Gel Polish", price: "+$10" },
        { name: "Nail Art", price: "+$10" },
      ],
    },
    {
      name: "Acrylic Full Set",
      description: "Full set of acrylic nails with your choice of length and shape",
      priceRange: "$50 - $70",
      category: "Extensions",
      addOns: [
        { name: "Gel Polish", price: "+$10" },
        { name: "Nail Art", price: "+$15" },
        { name: "French Tips", price: "+$10" },
      ],
    },
    {
      name: "Acrylic Fill",
      description: "Maintenance fill for existing acrylic nails",
      priceRange: "$35 - $45",
      category: "Extensions",
      addOns: [
        { name: "Gel Polish", price: "+$10" },
        { name: "Nail Art", price: "+$15" },
      ],
    },
    {
      name: "Dip Powder Manicure",
      description: "Durable powder dip system for long-lasting color",
      priceRange: "$45 - $55",
      category: "Specialty Services",
      addOns: [
        { name: "French Tips", price: "+$8" },
        { name: "Nail Art", price: "+$10" },
      ],
    },
    {
      name: "Nail Repair",
      description: "Fix broken or damaged nails",
      priceRange: "$10 - $20",
      category: "Specialty Services",
    },
  ],
  galleryImages: [
    "/images/hollywood-nail-spa/hollywood-1.jpg",
    "/images/hollywood-nail-spa/hollywood-2.jpg",
    "/images/hollywood-nail-spa/hollywood-3.jpg",
    "/images/hollywood-nail-spa/hollywood-4.jpg",
    "/images/hollywood-nail-spa/hollywood-5.jpg",
    "/images/hollywood-nail-spa/hollywood-6.jpg",
    "/images/hollywood-nail-spa/hollywood-7.jpg",
    "/images/hollywood-nail-spa/hollywood-8.jpg",
    "/images/hollywood-nail-spa/hollywood-9.jpg",
    "/images/hollywood-nail-spa/hollywood-10.jpg",
    "/images/hollywood-nail-spa/hollywood-11.jpg",
  ],
  reviews: [
    {
      name: "Jessica T.",
      rating: 5,
      text: "Absolutely love Hollywood Nail Spa! The technicians are so skilled and my gel manicure looks perfect every time. The salon is always clean and the staff is friendly. Best nail salon in Gaithersburg!",
    },
    {
      name: "Amanda R.",
      rating: 5,
      text: "I've been a regular customer for over a year now. The spa pedicure is incredibly relaxing and my nails always look amazing. The attention to detail is outstanding. Highly recommend!",
    },
    {
      name: "Michelle S.",
      rating: 5,
      text: "Fantastic experience! The nail art work is beautiful and the staff takes their time to make sure everything is perfect. The prices are reasonable and the quality is top-notch. Will definitely be back!",
    },
    {
      name: "Sarah K.",
      rating: 5,
      text: "Best nail salon I've been to! The acrylic work is flawless and lasts forever. The salon has a great atmosphere and the staff is professional and welcoming. Can't say enough good things!",
    },
    {
      name: "Lisa M.",
      rating: 5,
      text: "Outstanding service! My dip powder manicure looks incredible and has lasted over 3 weeks without chipping. The technicians are experienced and really know what they're doing. Love this place!",
    },
    {
      name: "Emily D.",
      rating: 5,
      text: "Perfect place for nail care! The French manicure I got looks absolutely stunning. The staff is patient and really listens to what you want. The salon is spotless and well-maintained. Highly recommend!",
    },
    {
      name: "Rachel B.",
      rating: 5,
      text: "Amazing service and beautiful results! I got a full set of acrylics with nail art and they look incredible. The technicians are true artists. The prices are fair and the quality is exceptional. Will be back soon!",
    },
    {
      name: "Nicole H.",
      rating: 5,
      text: "Love this salon! The spa pedicure with paraffin treatment was so relaxing. My feet feel amazing and my nails look perfect. The staff is professional and the atmosphere is calming. Best pedicure I've ever had!",
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Excellent nail salon! The gel polish application is flawless and my manicure has lasted over 3 weeks. The staff is friendly and the salon is always clean. Great value for the quality of service. Highly recommend!",
    },
    {
      name: "Melissa C.",
      rating: 5,
      text: "Outstanding experience! The nail technicians are incredibly talented and pay attention to every detail. My ombre design turned out better than I imagined. The salon has a great vibe and the service is top-notch. Can't wait to come back!",
    },
    {
      name: "Ashley P.",
      rating: 5,
      text: "Incredible nail salon! I got a full set with gel polish and the results are stunning. The technicians are professional, the salon is beautiful, and the service is exceptional. My nails look perfect and the quality is outstanding. Highly recommend to everyone!",
    },
    {
      name: "Stephanie W.",
      rating: 5,
      text: "Best nail experience ever! The staff is so friendly and welcoming. I got a spa pedicure and gel manicure combo, and both turned out amazing. The attention to detail is impressive and the salon atmosphere is relaxing. Will definitely be a regular customer!",
    },
  ],
  overallRating: 5.0,
  promotion: {
    active: true,
    title: "New Client Special",
    description: "Get 20% off your first visit! Experience luxury nail care at Hollywood Nail Spa.",
    ctaText: "Book Now",
    ctaLink: "#location",
  },
  faq: [
    {
      question: "Do you accept walk-ins?",
      answer: "Yes! We welcome walk-ins, though we recommend making an appointment to ensure availability, especially on weekends.",
    },
    {
      question: "How long does a gel manicure last?",
      answer: "Our gel manicures typically last 2-3 weeks with proper care. We use high-quality products to ensure long-lasting results.",
    },
    {
      question: "What's the difference between a classic and spa pedicure?",
      answer: "A classic pedicure includes basic nail care and polish. Our spa pedicure adds hot stone massage, paraffin treatment, and a hydrating mask for a more luxurious experience.",
    },
    {
      question: "Do you offer gift certificates?",
      answer: "Yes! Gift certificates are available for any service or dollar amount. Perfect for birthdays, holidays, or just because!",
    },
    {
      question: "What safety measures do you have in place?",
      answer: "We maintain the highest standards of cleanliness and sanitation. All tools are sterilized, and we use fresh liners for each pedicure.",
    },
    {
      question: "Can I bring my own polish?",
      answer: "Absolutely! You're welcome to bring your own polish if you have a specific color in mind.",
    },
  ],
  social: {
    instagram: "https://www.instagram.com/hollywoodgaithersburg/",
    facebook: "https://www.facebook.com/hollywoodQO/",
    yelp: "https://yelp.com/biz/hollywood-nail-spa-gaithersburg",
  },
  theme: {
    primary: "rose",
    accent: "pink",
  },
  seo: {
    title: "Hollywood Nail Spa | Premium Nail Care in Gaithersburg, MD",
    description: "Experience luxury nail care at Hollywood Nail Spa in Gaithersburg, MD. Professional manicures, pedicures, gel nails, and nail art. Book your appointment today!",
    keywords: ["nail salon", "manicure", "pedicure", "nail art", "Gaithersburg", "Maryland", "gel nails", "acrylic nails", "nail spa", "Quince Orchard Plaza"],
  },
  badges: ["Walk-ins Welcome", "Accepts Credit Cards", "Premium Quality"],
};

// ============================================================================
// ACTIVE CONFIG (change this to switch presets or use your own)
// ============================================================================

// EDIT THIS: Change to nailSalonConfig, hairSalonConfig, restaurantConfig, hollywoodNailSpaConfig, or create your own
export const siteConfig: SiteConfig = hollywoodNailSpaConfig;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getFullAddress(config: SiteConfig): string {
  return `${config.address.street}, ${config.address.city}, ${config.address.state} ${config.address.zip}`;
}

export function getGoogleMapsUrl(config: SiteConfig): string {
  const address = encodeURIComponent(getFullAddress(config));
  return `https://www.google.com/maps/search/?api=1&query=${address}`;
}

export function getGoogleMapsEmbedUrl(config: SiteConfig): string {
  const address = encodeURIComponent(getFullAddress(config));
  // Using Google Maps Embed API - for production, get your API key from:
  // https://console.cloud.google.com/google/maps-apis/credentials
  // Then replace the key below or use an environment variable
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  if (apiKey) {
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${address}`;
  }
  // Fallback: Use iframe src with search query (works without API key but less customizable)
  return `https://www.google.com/maps?q=${address}&output=embed`;
}

