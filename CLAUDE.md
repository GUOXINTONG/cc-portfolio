# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for a Large Language Model Algorithm Engineer, built with Astro and Tailwind CSS. It features a minimalist design with low-saturation color schemes, dark/light theme switching, and full mobile responsiveness.

## Tech Stack

- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS with custom dark mode
- **Language**: TypeScript
- **Content**: Markdown/MDX for blog posts
- **Comments**: giscus (GitHub Discussions-based)
- **Analytics**: Google Analytics via Partytown
- **Deployment**: Vercel

## Common Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build locally

# Astro commands
astro check          # Type-check the project
astro sync           # Sync content collections
```

## Architecture Overview

### Content Collections

Content is managed through Astro's content collections in `src/content/`:

- `src/content/blog/` - Blog posts in Markdown/MDX with frontmatter schema
- `src/content/projects/` - Project data (JSON/YAML)
- `src/content/config/` - Site configuration

Blog posts use frontmatter with fields: `title`, `description`, `pubDate`, `tags`, `heroImage` (optional).

### Routing Structure

- `src/pages/index.astro` - Homepage
- `src/pages/about.astro` - About page
- `src/pages/projects.astro` - Portfolio
- `src/pages/blog/index.astro` - Blog listing
- `src/pages/blog/[slug].astro` - Individual blog posts (dynamic route)
- `src/pages/rss.xml.js` - RSS feed

### Theme System

Dark/light theme is implemented via Tailwind's `dark:` prefix. The theme state is stored in `localStorage` with system preference fallback (`prefers-color-scheme`). Theme toggle component is in `ThemeToggle.astro`.

### SEO Structure

Each page uses `BaseHead.astro` which includes:
- Meta tags and Open Graph tags
- Twitter Card tags
- Canonical URLs
- JSON-LD structured data

Site-level SEO is handled by `@astrojs/sitemap` (auto-generates `sitemap.xml`) and `@astrojs/rss`.

### Component Organization

```
src/components/
├── ui/           # Reusable UI (Button, Card, Tag, ThemeToggle)
├── layout/       # Layout parts (Header, Footer, MobileNav, BaseHead)
└── content/      # Content display (ProjectCard, BlogCard, GiscusComments)
```

### Styling Conventions

- Uses Tailwind's stone color palette for low-saturation design
- Light theme: stone-50 background, stone-900 text
- Dark theme: stone-950 background, stone-50 text
- Prose styling via `@tailwindcss/typography` plugin

## Third-Party Integrations

### giscus Comments

Blog posts include giscus for comments. Configuration requires:
1. Repository must be public
2. giscus GitHub App installed
3. Discussions enabled in repo settings
4. Config in `GiscusComments.astro` matches giscus.app settings

### Google Analytics

Loaded via `@astrojs/partytown` to run in web worker. Only loads in production.

**Configuration:**
- Set `PUBLIC_GA_ID` environment variable with your Google Analytics Measurement ID (e.g., `G-XXXXXXXXXX`)
- The Analytics component checks for this variable before loading the script

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics Measurement ID (optional)
```

## Performance Features

- **Prefetching**: Links use `data-astro-prefetch` for hover-based prefetching (configured in `astro.config.mjs`)
- **Partytown**: Google Analytics runs in web worker to avoid blocking main thread
- **Image optimization**: Configured for GitHub user content remote images
- **CSS code splitting**: Enabled in Vite build config

## Design Principles

- Minimalist aesthetic with generous whitespace
- Mobile-first responsive design
- Max content width: max-w-3xl (768px) for reading, max-w-6xl (1152px) for showcases
- Touch targets minimum 44x44px on mobile
