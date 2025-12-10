# PTERNAL Plumbing Services

A modern, responsive portfolio website for a plumbing business built with React and Tailwind CSS.

## Features

- **Hero Slider**: Auto-playing carousel with Swiper (lightweight alternative to Ant Design)
- **Floating Phone Button**: Sticky call button appears on scroll for quick contact
- **Contact Page**: Quote request form with name, email, and description fields
- **Project Details**: Blog-style pages for each project with images and descriptions
- **Testimonials Slider**: Customer reviews in an auto-playing carousel
- **Social Media Section**: Instagram, Facebook, and Telegram cards with photo collages
- **Optimized Footer**: Clean, streamlined footer with essential links only
- **Fully Responsive**: Mobile-first design that works on all devices

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Swiper (for carousels)
- React Router (for navigation)

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your Notion API key and database ID

# Run development server
npm run dev

# Build for production
npm run build
```

## Notion Integration Setup

**Note:** The blog currently uses mock data. To use real Notion data, you need to set up a backend API (see `api-example/` folder).

### Why Backend API is Required

Notion API keys should never be exposed in client-side code. You need a backend API to:
1. Keep your Notion API key secure
2. Handle API rate limiting
3. Cache responses for better performance

### Quick Setup Options

1. **Use Mock Data** (Current) - No setup needed, displays sample blog posts
2. **Deploy Backend API** - Use Vercel, Netlify, or your own server (see `api-example/`)
3. **Use a CMS Alternative** - Consider Contentful, Strapi, or Sanity for easier client-side integration

See `NOTION_SETUP_GUIDE.md` for detailed backend setup instructions.

## Pages

- `/` - Home page with all sections
- `/contact` - Contact form for quote requests
- `/project/:id` - Individual project detail pages
- `/blog` - Blog list page (powered by Notion)
- `/blog/:id` - Individual blog post detail pages

## Key Improvements

1. Replaced Ant Design with Swiper (smaller bundle size)
2. Added floating phone button for better UX
3. Implemented routing for contact and project pages
4. Converted testimonials to slider format
5. Replaced blog section with social media cards
6. Streamlined footer by removing unnecessary sections

---

Developed by Kobil
