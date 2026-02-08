# Hollywood Nail Spa - Adding Reviews and Images

## How to Add Reviews and Images

### Option 1: Provide the Information
Please provide:
1. **Reviews** - Customer names, ratings (1-5), and review text
2. **Images** - Either:
   - Image files (I'll add them to the project)
   - Image URLs (I'll download and add them)
   - Or tell me where to find them (Google, Yelp, Instagram, etc.)

### Option 2: I Can Help You Find Them
If you can provide:
- Their Yelp page URL
- Their Google Business page URL
- Their Instagram handle
- Any other review platform they use

I can help extract reviews and images from those sources.

## Current Placeholder Content

### Reviews (in `lib/siteConfig.ts` around line 627)
Currently has 3 placeholder reviews that need to be replaced.

### Images (in `lib/siteConfig.ts` around line 619)
Currently points to:
- `/images/nail-1.jpg` through `/images/nail-6.jpg`

These are placeholder images that need to be replaced with actual salon photos.

## Image Requirements

**Recommended:**
- Format: JPG or WebP
- Size: 1200x1200px or larger (square works best for gallery)
- File size: Under 500KB per image for fast loading
- Content: Nail art, salon interior, happy customers, before/after

**Where to place images:**
- Add images to: `public/images/hollywood-nail-spa/`
- Name them: `hollywood-1.jpg`, `hollywood-2.jpg`, etc.
- Then update the paths in the config file

## Quick Start

**To add reviews:**
1. Open `lib/siteConfig.ts`
2. Find the `reviews` array in `hollywoodNailSpaConfig` (around line 627)
3. Replace the placeholder reviews with real ones

**To add images:**
1. Place image files in `public/images/hollywood-nail-spa/`
2. Update `galleryImages` array in `lib/siteConfig.ts` (around line 619)
3. Change paths from `/images/nail-X.jpg` to `/images/hollywood-nail-spa/hollywood-X.jpg`

## Example Review Format

```typescript
{
  name: "Customer Name",
  rating: 5, // 1-5 stars
  text: "Review text here...",
}
```

## Example Image Path

```typescript
galleryImages: [
  "/images/hollywood-nail-spa/hollywood-1.jpg",
  "/images/hollywood-nail-spa/hollywood-2.jpg",
  // ... etc
]
```

---

**Please provide the reviews and images, and I'll update the config file for you!**

