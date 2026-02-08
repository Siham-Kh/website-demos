# Local Business Demo Website Template

A premium, config-driven Next.js 14 template for local businesses. Perfect for nail salons, hair salons, restaurants, and other small businesses.

## Features

- ✨ **Premium Design** - Apple-like clean, "quiet luxury" style
- 🚀 **Fast & Mobile-First** - Optimized for performance and mobile devices
- 📱 **Conversion-Focused** - Clear CTAs (Call, Text, Book, Get Directions)
- ⚙️ **Single-File Customization** - Edit one config file to customize everything
- 🎨 **Theme Support** - Light and dark themes
- 🔄 **Demo Switcher** - Switch between industry presets (Nail Salon, Hair Salon, Restaurant)
- 📸 **Image Gallery** - Responsive grid with lightbox modal
- 🗺️ **Google Maps Integration** - Embedded map and directions
- ♿ **Accessible** - Semantic HTML, proper contrast, keyboard navigation
- 🔍 **SEO Optimized** - Metadata, OpenGraph, JSON-LD schema, sitemap, robots.txt

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## How to Customize in 60 Seconds

### Step 1: Open the Config File

Edit `lib/siteConfig.ts` - this is the **ONLY file** you need to modify.

### Step 2: Update Your Business Information

Find the `siteConfig` object at the bottom of the file and update:

```typescript
export const siteConfig: SiteConfig = {
  businessName: "Your Business Name",
  tagline: "Your tagline here",
  address: {
    street: "123 Main St",
    city: "Your City",
    state: "ST",
    zip: "12345",
  },
  phone: "+1-555-0123",
  email: "hello@yourbusiness.com",
  // ... update hours, services, etc.
};
```

### Step 3: Add Your Services

Update the `services` array with your offerings:

```typescript
services: [
  {
    name: "Service Name",
    description: "Service description",
    priceRange: "$50 - $80",
    category: "Category Name",
    addOns: [
      { name: "Add-on 1", price: "+$10" },
    ],
  },
],
```

### Step 4: Add Your Images

1. Replace images in `public/images/` with your own photos
2. Update image paths in the `galleryImages` array in `siteConfig.ts`

### Step 5: Update Reviews

Add your customer reviews to the `reviews` array:

```typescript
reviews: [
  {
    name: "Customer Name",
    rating: 5,
    text: "Review text here",
  },
],
```

### Step 6: Deploy

Deploy to Vercel, Netlify, or any hosting platform that supports Next.js.

## Customization Checklist

- [ ] Update `businessName` and `tagline`
- [ ] Update `address` (street, city, state, zip)
- [ ] Update `phone` and `email`
- [ ] Update `hours` for each day of the week
- [ ] Update `services` array with your offerings
- [ ] Replace gallery images in `public/images/`
- [ ] Update `galleryImages` paths in config
- [ ] Add your `reviews` and set `overallRating`
- [ ] Update `promotion` (or set `active: false` to hide)
- [ ] Update `faq` with your questions/answers
- [ ] Add your `social` media links
- [ ] Update `seo` metadata (title, description, keywords)
- [ ] Update `badges` shown in hero section
- [ ] Set `NEXT_PUBLIC_BASE_URL` environment variable for production

## Project Structure

```
website-demos/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx             # Main page
│   ├── sitemap.ts           # SEO sitemap
│   ├── robots.ts            # SEO robots.txt
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── nav.tsx              # Navigation
│   ├── hero.tsx             # Hero section
│   ├── services.tsx         # Services & pricing
│   ├── gallery.tsx          # Image gallery
│   ├── reviews.tsx          # Reviews section
│   ├── promotions.tsx       # Promotional banner
│   ├── location.tsx         # Location & map
│   ├── faq.tsx              # FAQ accordion
│   ├── footer.tsx           # Footer
│   ├── demo-switcher.tsx    # Industry preset switcher
│   ├── floating-cta.tsx     # Mobile CTA buttons
│   └── theme-toggle.tsx     # Theme switcher
├── lib/
│   ├── siteConfig.ts        # ⭐ EDIT THIS FILE ONLY
│   ├── config-context.tsx   # Config context provider
│   └── utils.ts             # Utility functions
└── public/
    └── images/              # Gallery images
```

## Demo Switcher

The demo switcher allows you to switch between three industry presets:
- Nail Salon
- Hair Salon
- Restaurant

It's only visible in development mode or when `?demo=true` is in the URL. The selection persists in localStorage.

## Theme Customization

The template supports light and dark themes. Users can toggle between them using the theme toggle button in the navigation.

## SEO Setup

1. Update `NEXT_PUBLIC_BASE_URL` in your environment variables
2. The sitemap and robots.txt are automatically generated
3. JSON-LD schema is included for LocalBusiness
4. OpenGraph and Twitter cards are configured

## Image Requirements

- **Format**: JPG or WebP
- **Size**: 1200x1200px or larger (square works best)
- **File Size**: Keep under 500KB per image
- **Location**: Place images in `public/images/`

## Contact Forms

The contact form uses `mailto:` links to open the user's email client. The "Text to Book" button uses `sms:` links to open the messaging app.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Set `NEXT_PUBLIC_BASE_URL` environment variable
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import project in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Set `NEXT_PUBLIC_BASE_URL` environment variable
6. Deploy!

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **next-themes** - Theme management

## License

This template is free to use for commercial and personal projects.

## Support

For issues or questions, please check the code comments in `lib/siteConfig.ts` - everything is documented there!

---

**Made with ❤️ for local businesses**
