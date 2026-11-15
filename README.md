# V-TAG Public Website

A responsive Next.js marketing website prototype, separate from the consumer app and backend.

## Run locally

Install Node.js 20.9+ (22 LTS recommended), then:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Included
- Responsive cinematic homepage
- Desktop/mobile navigation with top-right pill login
- Product image showcase
- Articles index and three sample editorial articles
- How it works, device, business, about, help, contact, legal placeholder pages
- Reduced-motion support and basic SEO metadata

## Before public launch
1. Replace sample editorial copy and placeholder legal pages with approved content.
2. Set `NEXT_PUBLIC_LOGIN_URL` in `.env.local` to your working app sign-in route. Until then, `/login` is an informational placeholder, not authentication.
3. Replace placeholder visual effects and product photograph with licensed brand media.
4. Add approved company contact details and support channels.
5. Review accessibility, security, privacy, cookies and SEO; run production build.
6. Connect a CMS for articles (currently local TypeScript content in `lib/content.ts`).
7. Confirm any product features and verification claims before publishing.

## Key files
- `app/page.tsx`: homepage
- `app/globals.css`: styling and responsive rules
- `components/Header.tsx`: navigation and login
- `lib/content.ts`: articles and informational page copy
- `public/images/vtag-product.png`: temporary product image from supplied reference

No backend integration or real login is included yet.
