# Katie Kelly Personal Website

A modern, responsive personal website for Katie Kelly - FinTech Operations Leader.

Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional aesthetic with custom color palette
- **Responsive**: Fully responsive design that works on all devices
- **Blog**: MDX-powered blog with markdown support
- **SEO Optimized**: Proper metadata and semantic HTML
- **Fast**: Static site generation for optimal performance

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Blog**: MDX with next-mdx-remote
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
katie-kelly-website/
├── app/
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Work.tsx
│   │   ├── Experience.tsx
│   │   ├── FindMe.tsx
│   │   └── Footer.tsx
│   ├── blog/              # Blog pages and utilities
│   │   ├── [slug]/
│   │   │   └── page.tsx   # Individual blog post
│   │   ├── page.tsx       # Blog index
│   │   └── getPosts.ts    # Blog utilities
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── content/
│   ├── config.ts          # Site configuration
│   ├── experience.ts      # Work experience data
│   ├── projects.ts        # Project data
│   └── blog/              # Blog posts (MDX)
├── public/                # Static assets
└── mdx-components.tsx     # MDX component styling

```

## Customization

### Content Management

All content is managed through TypeScript files in the `/content` directory:

- `config.ts` - Site-wide text, social links, contact info
- `experience.ts` - Work experience entries
- `projects.ts` - Featured project cards

### Blog Posts

Add new blog posts as `.mdx` files in `/content/blog/`:

```mdx
---
title: 'Your Post Title'
date: '2025-10-30'
excerpt: 'A brief description'
author: 'Katie Kelly'
---

# Your content here...
```

### Colors & Fonts

Customize in `tailwind.config.ts`:

```typescript
colors: {
  charcoal: '#1C1C1C',
  'light-gray': '#F5F5F5',
  'medium-gray': '#6B6B6B',
  orange: '#FF9F40',
  lime: '#C5F542',
}
```

### Resume

Replace `/public/resume.pdf` with your actual resume PDF.

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT License - feel free to use this as a template for your own site!

## Contact

Katie Kelly - hello@katiekelly.com
