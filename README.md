# Premium Architect Portfolio Website

A modern, minimalist portfolio website for an architect in India, blending contemporary design with subtle traditional Indian aesthetics.

## Features

- **Portfolio Showcase**: Beautiful project galleries with filtering
- **Service Booking**: Contact forms and consultation booking
- **Responsive Design**: Mobile-first, works on all devices
- **Smooth Animations**: Subtle, professional animations using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML
- **WhatsApp Integration**: Floating WhatsApp button for quick contact

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── projects/
│       └── [slug]/
│           └── page.tsx     # Dynamic project detail pages
├── components/
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Footer.tsx           # Footer component
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── FeaturedProjects.tsx
│       ├── Testimonials.tsx
│       ├── Pricing.tsx
│       └── Contact.tsx
└── data/
    └── projects.ts          # Project data
```

## Customization

- Update contact information in `components/Footer.tsx` and `components/sections/Contact.tsx`
- Update WhatsApp number in `components/WhatsAppButton.tsx`
- Add/modify projects in `data/projects.ts`
- Customize colors in `tailwind.config.ts`

## Build for Production

```bash
npm run build
npm start
```

## License

Private project - All rights reserved
