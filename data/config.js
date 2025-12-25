// ============================================
// SITE CONFIGURATION
// Change via Vercel Environment Variables or edit defaults below
// ============================================

export const config = {
  // ─────────────────────────────────────────
  // SITE INFO (Vercel: NEXT_PUBLIC_SITE_NAME, NEXT_PUBLIC_TAGLINE)
  // ─────────────────────────────────────────
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'SubsKing',
  tagline: process.env.NEXT_PUBLIC_TAGLINE || 'Premium Subscriptions at Best Prices',
  description: process.env.NEXT_PUBLIC_DESCRIPTION || 'Get Netflix, Prime Video, ChatGPT Plus, Gemini Pro and more at the best prices in Bangladesh.',
  
  // ─────────────────────────────────────────
  // CONTACT INFO (Vercel: NEXT_PUBLIC_WHATSAPP, NEXT_PUBLIC_BKASH, etc.)
  // ─────────────────────────────────────────
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP || '8801XXXXXXXXX',
  bkashNumber: process.env.NEXT_PUBLIC_BKASH || '01XXXXXXXXX',
  nagadNumber: process.env.NEXT_PUBLIC_NAGAD || '01XXXXXXXXX',
  email: process.env.NEXT_PUBLIC_EMAIL || 'support@subsking.com',
  location: process.env.NEXT_PUBLIC_LOCATION || 'Dhaka, Bangladesh',
  businessHours: process.env.NEXT_PUBLIC_HOURS || '10 AM - 10 PM',
  
  // ─────────────────────────────────────────
  // CURRENCY
  // ─────────────────────────────────────────
  currency: process.env.NEXT_PUBLIC_CURRENCY || '৳',
  currencyCode: process.env.NEXT_PUBLIC_CURRENCY_CODE || 'BDT',
  
  // ─────────────────────────────────────────
  // NAVIGATION
  // ─────────────────────────────────────────
  navLinks: [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  
  // ─────────────────────────────────────────
  // FOOTER LINKS
  // ─────────────────────────────────────────
  footerLinks: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
  
  // ─────────────────────────────────────────
  // HERO SECTION
  // ─────────────────────────────────────────
  hero: {
    badge: process.env.NEXT_PUBLIC_HERO_BADGE || 'Most Trusted in BD',
    rotateSpeed: parseInt(process.env.NEXT_PUBLIC_HERO_SPEED || '5000'),
  },
  
  // ─────────────────────────────────────────
  // TESTIMONIALS
  // ─────────────────────────────────────────
  testimonials: [
    {
      name: 'Rafiq Ahmed',
      location: 'Dhaka',
      text: 'Got my Netflix account within 5 minutes! Super fast delivery and genuine account.',
      rating: 5,
    },
    {
      name: 'Sabrina Khan',
      location: 'Chittagong',
      text: 'Been using their ChatGPT Plus for 3 months now. Works perfectly!',
      rating: 5,
    },
    {
      name: 'Tanvir Islam',
      location: 'Sylhet',
      text: 'Best prices in Bangladesh. Already ordered Prime Video and Hoichoi.',
      rating: 5,
    },
    {
      name: 'Nusrat Jahan',
      location: 'Rajshahi',
      text: 'Customer service is excellent. They helped me instantly on WhatsApp.',
      rating: 5,
    },
  ],
  
  // ─────────────────────────────────────────
  // STATS (shown on homepage)
  // ─────────────────────────────────────────
  stats: [
    { value: process.env.NEXT_PUBLIC_STAT_CUSTOMERS || '5000+', label: 'Happy Customers' },
    { value: process.env.NEXT_PUBLIC_STAT_SERVICES || '10+', label: 'Premium Services' },
    { value: process.env.NEXT_PUBLIC_STAT_SUPPORT || '24/7', label: 'Support Available' },
    { value: process.env.NEXT_PUBLIC_STAT_DELIVERY || '5 Min', label: 'Avg. Delivery' },
  ],
  
  // ─────────────────────────────────────────
  // SOCIAL LINKS (Vercel: NEXT_PUBLIC_FACEBOOK, etc.)
  // ─────────────────────────────────────────
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK || '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || '',
    telegram: process.env.NEXT_PUBLIC_TELEGRAM || '',
  },
};

// ============================================
// PRODUCTS & PRICING
// For prices, use Vercel env vars: NEXT_PUBLIC_PRICE_CHATGPT_1M, etc.
// ============================================

export const products = [
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus',
    description: 'AI assistant with GPT-4, image generation, code interpreter & more',
    icon: '/icons/chatgpt.svg',
    color: '#10A37F',
    category: 'ai',
    featured: true,
    badge: 'Most Popular',
    tiers: [
      { duration: '1 Month', price: parseInt(process.env.NEXT_PUBLIC_PRICE_CHATGPT_1M || '2500'), originalPrice: 3000 },
      { duration: '3 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_CHATGPT_3M || '7000'), originalPrice: 9000 },
      { duration: '6 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_CHATGPT_6M || '13000'), originalPrice: 18000 },
      { duration: '1 Year', price: parseInt(process.env.NEXT_PUBLIC_PRICE_CHATGPT_1Y || '24000'), originalPrice: 36000 },
    ]
  },
  {
    id: 'gemini',
    name: 'Gemini Advanced',
    description: 'Google AI with advanced reasoning, coding & 1M context window',
    icon: '/icons/gemini.svg',
    color: '#4285F4',
    category: 'ai',
    featured: true,
    badge: 'New',
    tiers: [
      { duration: '1 Month', price: parseInt(process.env.NEXT_PUBLIC_PRICE_GEMINI_1M || '2200'), originalPrice: 2800 },
      { duration: '3 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_GEMINI_3M || '6000'), originalPrice: 8400 },
      { duration: '6 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_GEMINI_6M || '11000'), originalPrice: 16800 },
      { duration: '1 Year', price: parseInt(process.env.NEXT_PUBLIC_PRICE_GEMINI_1Y || '20000'), originalPrice: 33600 },
    ]
  },
  {
    id: 'netflix',
    name: 'Netflix Premium',
    description: 'Unlimited movies, TV shows & originals in 4K Ultra HD',
    icon: '/icons/netflix.svg',
    color: '#E50914',
    category: 'streaming',
    featured: true,
    badge: 'Best Seller',
    tiers: [
      { duration: '1 Month', price: parseInt(process.env.NEXT_PUBLIC_PRICE_NETFLIX_1M || '250'), originalPrice: 350 },
      { duration: '3 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_NETFLIX_3M || '700'), originalPrice: 1050 },
      { duration: '6 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_NETFLIX_6M || '1300'), originalPrice: 2100 },
      { duration: '1 Year', price: parseInt(process.env.NEXT_PUBLIC_PRICE_NETFLIX_1Y || '2400'), originalPrice: 4200 },
    ]
  },
  {
    id: 'prime',
    name: 'Prime Video',
    description: 'Stream Hollywood hits, Amazon originals & exclusive series',
    icon: '/icons/prime.svg',
    color: '#00A8E1',
    category: 'streaming',
    featured: false,
    badge: null,
    tiers: [
      { duration: '1 Month', price: parseInt(process.env.NEXT_PUBLIC_PRICE_PRIME_1M || '200'), originalPrice: 300 },
      { duration: '3 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_PRIME_3M || '550'), originalPrice: 900 },
      { duration: '6 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_PRIME_6M || '1000'), originalPrice: 1800 },
      { duration: '1 Year', price: parseInt(process.env.NEXT_PUBLIC_PRICE_PRIME_1Y || '1800'), originalPrice: 3600 },
    ]
  },
  {
    id: 'hoichoi',
    name: 'Hoichoi',
    description: 'Best Bengali movies, web series & originals',
    icon: '/icons/hoichoi.svg',
    color: '#FFD700',
    category: 'streaming',
    featured: false,
    badge: 'Bengali',
    tiers: [
      { duration: '1 Month', price: parseInt(process.env.NEXT_PUBLIC_PRICE_HOICHOI_1M || '150'), originalPrice: 200 },
      { duration: '3 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_HOICHOI_3M || '400'), originalPrice: 600 },
      { duration: '6 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_HOICHOI_6M || '750'), originalPrice: 1200 },
      { duration: '1 Year', price: parseInt(process.env.NEXT_PUBLIC_PRICE_HOICHOI_1Y || '1400'), originalPrice: 2400 },
    ]
  },
  {
    id: 'chorki',
    name: 'Chorki',
    description: 'Premium Bangladeshi entertainment & exclusive content',
    icon: '/icons/chorki.svg',
    color: '#FF6B35',
    category: 'streaming',
    featured: false,
    badge: 'Deshi',
    tiers: [
      { duration: '1 Month', price: parseInt(process.env.NEXT_PUBLIC_PRICE_CHORKI_1M || '120'), originalPrice: 180 },
      { duration: '3 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_CHORKI_3M || '320'), originalPrice: 540 },
      { duration: '6 Months', price: parseInt(process.env.NEXT_PUBLIC_PRICE_CHORKI_6M || '600'), originalPrice: 1080 },
      { duration: '1 Year', price: parseInt(process.env.NEXT_PUBLIC_PRICE_CHORKI_1Y || '1100'), originalPrice: 2160 },
    ]
  },
];

// Helper to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

// Helper to get featured products
export const getFeaturedProducts = () => {
  return products.filter(p => p.featured);
};
