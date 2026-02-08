# Hollywood Nail Spa - Customization Checklist

## Branch Created
✅ Branch: `hollywood-nail-spa`
✅ Config customized with nail spa services
✅ Demo switcher hidden (production-ready)

## Information to Update

### ⚠️ REQUIRED UPDATES (Update these in `lib/siteConfig.ts`)

1. **Address** (Line ~520)
   - Street address: Currently "123 Main Street" - UPDATE
   - Zip code: Currently "20878" - VERIFY/UPDATE

2. **Contact Information** (Line ~525)
   - Phone: Currently "+1-301-XXX-XXXX" - UPDATE
   - Email: Currently "info@hollywoodnailspa.com" - UPDATE

3. **Social Media Links** (Line ~650)
   - Instagram: Update with actual Instagram handle/URL
   - Facebook: Update with actual Facebook page URL
   - Yelp: Update with actual Yelp business page URL

4. **Business Hours** (Line ~530)
   - Verify all hours are correct for the business
   - Update if different from current schedule

### 📋 OPTIONAL UPDATES (Enhance if needed)

1. **Services & Pricing** (Line ~540)
   - Review all service prices
   - Add/remove services as needed
   - Update add-ons and pricing

2. **Reviews** (Line ~600)
   - Replace with actual customer reviews
   - Update names and ratings
   - Add more reviews if available

3. **Gallery Images** (Line ~590)
   - Replace placeholder images in `/public/images/`
   - Use actual photos of:
     - Nail art work
     - Salon interior
     - Before/after photos
     - Happy customers

4. **FAQ** (Line ~620)
   - Review questions and answers
   - Add business-specific FAQs
   - Update answers to match actual policies

5. **Promotion** (Line ~610)
   - Update promotion text if needed
   - Set `active: false` to hide if no current promotion

6. **SEO Keywords** (Line ~660)
   - Add location-specific keywords
   - Include neighborhood names if applicable
   - Add any specialty services

## Current Configuration

- **Business Name**: Hollywood Nail Spa ✅
- **Location**: Gaithersburg, MD ✅
- **Theme**: Rose/Pink (nail salon appropriate) ✅
- **Services**: 8 services configured ✅
- **Reviews**: 3 placeholder reviews (needs real reviews)
- **FAQ**: 6 common questions ✅

## Next Steps

1. Get actual business information from client:
   - Full address
   - Phone number
   - Email address
   - Social media links
   - Actual business hours

2. Collect assets:
   - High-quality photos of salon/work
   - Customer testimonials/reviews
   - Logo (if available)

3. Update `lib/siteConfig.ts` with real information

4. Replace gallery images in `/public/images/`

5. Test the website locally

6. Deploy to production

## Files Modified

- `lib/siteConfig.ts` - Added `hollywoodNailSpaConfig` and set as active
- `app/page.tsx` - Commented out DemoSwitcher for production

## Branch Status

✅ Ready for customization
✅ All placeholder content in place
⚠️ Needs real business information
⚠️ Needs real photos

