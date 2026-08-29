# Jiora Tech — Company Website

Modern, dark, animated marketing site for **Jiora Tech Private Limited** — an India-based technology
company building software, AI systems, SaaS products, automations, cloud infrastructure, and security solutions.

Built with **Next.js (App Router)**, **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**.

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS v4 (CSS-first theme)
- **Language:** TypeScript
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Typography:** Space Grotesk (display) + Inter (body)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. On [vercel.com](https://vercel.com), click **New Project** and import the repo.
3. Vercel auto-detects Next.js — no config needed.
4. Deploy.

Alternatively, install the Vercel CLI and run:

```bash
npm i -g vercel
vercel
```

## Structure

```
src/
  app/
    globals.css      # design tokens, theme, utilities
    layout.tsx       # fonts, metadata, shell
    page.tsx         # single-page composition
  components/
    Navbar.tsx       # fixed nav + mobile menu
    Footer.tsx
    Reveal.tsx       # scroll-reveal animation wrapper
    ui/              # Button, Section primitives
    sections/        # Hero, WhatWeBuild, Vision, WhyJiora,
                     # Products, Process, WhoWeWorkWith,
                     # Technology, About, Contact
```

## Content / Positioning

The site deliberately avoids fake proof (testimonials, client logos, inflated metrics). It presents
Jiora Tech as a **young but serious technology company** with a long-term product vision.

Contact form currently composes a `mailto:` to `info@jioratech.com`. To send form submissions through
your own backend (e.g. a serverless function or provider like Resend/Formspree), update
`Contact.tsx`.

## Copyright

© Jiora Tech Private Limited. All rights reserved.
