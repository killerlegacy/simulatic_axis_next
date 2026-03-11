# Simulatic Axis — Next.js Portfolio

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Option 2 — GitHub (Recommended)
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — done!

## Project Structure
```
simulatic-axis/
├── app/
│   ├── layout.tsx      # Root layout + metadata + SEO
│   ├── page.tsx        # Main page (assembles all sections)
│   └── globals.css     # All styles
├── components/
│   ├── Navbar.tsx      # Sticky nav with mobile menu
│   ├── Hero.tsx        # Animated canvas hero
│   ├── Projects.tsx    # Filterable project grid (uses next/image)
│   └── Sections.tsx    # About, Services, Tools, Process, Contact, Footer
├── lib/
│   └── data.ts         # All project & service data
├── public/
│   └── images/         # All 32 project screenshots
├── next.config.js
├── tsconfig.json
└── package.json
```

## Key Upgrades vs Plain HTML
- `next/image` — auto WebP conversion, blur placeholders, lazy loading
- TypeScript — type-safe components
- App Router — SEO metadata API built-in
- Server Components — faster initial page load
- Vercel-optimized — image CDN, edge caching out of the box
