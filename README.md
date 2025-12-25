# SubsKing - Premium Subscription Store

A modern, lightning-fast e-commerce landing page for selling digital subscriptions (Netflix, ChatGPT Plus, Prime Video, etc.) built with Next.js. Optimized for mobile with smooth animations and premium UX.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **🎠 Hero Carousel** - Auto-rotating product showcase with smooth transitions
- **📱 Product Cards** - Netflix-style horizontal scroll carousel
- **⚡ Quick Buy Modal** - Select tier + instant WhatsApp checkout
- **🛒 Shopping Cart** - Add multiple items, order via WhatsApp
- **💳 Bkash Payment** - Display payment number with one-click copy
- **📱 Fully Responsive** - Optimized for all devices (mobile-first)
- **⚙️ Easy Configuration** - Single config file + Vercel env vars
- **🎨 Premium Dark Theme** - Modern UI with subtle animations
- **🚀 Fast Loading** - Optimized performance and smooth scrolling

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **CSS Modules** - Scoped styling
- **Lucide React** - Beautiful SVG icons
- **Vercel** - Deployment ready

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/subscription-store.git
cd subscription-store

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## ⚙️ Configuration

### Option 1: Edit `data/config.js` (Quick Setup)

All settings are in `data/config.js`:

```javascript
export const config = {
  siteName: 'SubsKing',
  tagline: 'Premium Subscriptions at Best Prices',
  whatsappNumber: '8801XXXXXXXXX',
  bkashNumber: '01XXXXXXXXX',
  // ... more settings
};
```

### Option 2: Vercel Environment Variables (Recommended)

Configure everything from Vercel dashboard without touching code!

**Contact Info:**
| Variable | Example | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_WHATSAPP` | `8801712345678` | WhatsApp number with country code |
| `NEXT_PUBLIC_BKASH` | `01712345678` | Bkash payment number |
| `NEXT_PUBLIC_EMAIL` | `support@example.com` | Contact email |
| `NEXT_PUBLIC_LOCATION` | `Dhaka, Bangladesh` | Business location |

**Site Info:**
| Variable | Example |
|----------|---------|
| `NEXT_PUBLIC_SITE_NAME` | `SubsKing` |
| `NEXT_PUBLIC_TAGLINE` | `Premium Subscriptions` |
| `NEXT_PUBLIC_DESCRIPTION` | `Get subscriptions at best prices` |

**Social Links:**
| Variable | Example |
|----------|---------|
| `NEXT_PUBLIC_FACEBOOK` | `https://facebook.com/page` |
| `NEXT_PUBLIC_INSTAGRAM` | `https://instagram.com/page` |
| `NEXT_PUBLIC_TELEGRAM` | `https://t.me/channel` |

**Product Prices (BDT):**
| Variable | Example | Product |
|----------|---------|---------|
| `NEXT_PUBLIC_PRICE_NETFLIX_1M` | `250` | Netflix 1 month |
| `NEXT_PUBLIC_PRICE_CHATGPT_1M` | `2500` | ChatGPT Plus 1 month |
| `NEXT_PUBLIC_PRICE_GEMINI_1M` | `2200` | Gemini Advanced 1 month |

See `env.example.txt` for the complete list of all environment variables.

## 📁 Project Structure

```
subscription-store/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Home page component
├── components/
│   ├── Hero.jsx             # Hero carousel with auto-rotate
│   ├── ProductCard.jsx     # Individual product card
│   ├── ProductCarousel.jsx # Horizontal scrolling carousel
│   ├── QuickBuyModal.jsx   # Product selection modal
│   ├── Cart.jsx            # Shopping cart sidebar
│   ├── Header.jsx          # Navigation header
│   ├── Footer.jsx          # Footer with links & socials
│   ├── AboutSection.jsx    # About us section
│   ├── FAQSection.jsx      # FAQ accordion
│   ├── ContactSection.jsx  # Contact information
│   ├── StatsSection.jsx    # Statistics display
│   └── TestimonialsSection.jsx
├── data/
│   └── config.js           # Central configuration file
├── public/
│   └── icons/              # Product SVG icons
├── .gitignore
├── next.config.mjs
├── package.json
└── README.md
```

## 🎨 Customization

### Adding New Products

1. Add SVG icon to `public/icons/` (e.g., `spotify.svg`)
2. Add product to `products` array in `data/config.js`:

```javascript
{
  id: 'spotify',
  name: 'Spotify Premium',
  description: 'Ad-free music streaming',
  icon: '/icons/spotify.svg',
  color: '#1DB954',
  category: 'streaming',
  featured: true,
  badge: 'New',
  tiers: [
    { duration: '1 Month', price: 150, originalPrice: 200 },
    { duration: '3 Months', price: 400, originalPrice: 600 },
  ]
}
```

### Changing Theme Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #0d0d0d;
  --accent-primary: #e2136e;
  --accent-secondary: #10a37f;
  /* ... */
}
```

### Modifying Hero Carousel Speed

In `data/config.js`:

```javascript
hero: {
  badge: 'Most Trusted in BD',
  rotateSpeed: 5000, // milliseconds (5 seconds)
}
```

Or via env var: `NEXT_PUBLIC_HERO_SPEED=5000`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/subscription-store.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables (optional)
   - Click "Deploy"

3. **Or use Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

### Other Platforms

Works on any platform that supports Next.js:
- **Netlify** - Import from GitHub
- **Railway** - Connect GitHub repo
- **AWS Amplify** - Connect repository

## 📱 Mobile Optimization

- ✅ Touch-friendly buttons (48px+ tap targets)
- ✅ Smooth scroll animations
- ✅ Safe area support (notched phones)
- ✅ Dynamic viewport height (100dvh)
- ✅ Optimized carousel scrolling
- ✅ Bottom sheet modals on mobile
- ✅ No 300ms tap delay

## 🔧 Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 License

MIT License - feel free to use for personal or commercial projects.

## 🤝 Contributing

Contributions welcome! Feel free to open issues or submit pull requests.

## 📧 Support

For support, email support@subsking.com or open an issue on GitHub.

---

**Built with ❤️ using Next.js**

Deploy instantly on [Vercel](https://vercel.com) 🚀
