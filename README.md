# Terry Guo - Personal Portfolio

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/GUOXINTONG/cc-portfolio)

A minimalist personal portfolio and blog built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

**Live Site**: [https://cc-portfolio.vercel.app](https://cc-portfolio.vercel.app)

## Features

- **🎨 Minimalist Design** - Low-saturation color scheme with generous whitespace
- **🌓 Dark/Light Mode** - Automatic theme switching with system preference detection
- **📱 Fully Responsive** - Optimized for all screen sizes
- **📝 Blog System** - MDX support with code highlighting, RSS feed
- **💬 Comments** - giscus integration with GitHub Discussions
- **📊 Analytics** - Google Analytics via Partytown
- **🔍 SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data, sitemap
- **⚡ Performance** - Prefetching, CSS optimization, zero JS by default

## Tech Stack

- [Astro](https://astro.build) v5.x - Static site generation
- [Tailwind CSS](https://tailwindcss.com) - Styling with custom theme
- [TypeScript](https://typescriptlang.org) - Type safety
- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) - MDX support
- [@astrojs/rss](https://docs.astro.build/en/guides/integrations-guide/rss/) - RSS feed
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) - Sitemap generation
- [@astrojs/partytown](https://docs.astro.build/en/guides/integrations-guide/partytown/) - Third-party script optimization

## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   │   ├── content/    # Content display components
│   │   ├── layout/     # Layout components (Header, Footer, BaseHead)
│   │   └── ui/         # UI components (ThemeToggle)
│   ├── content/        # Content collections
│   │   ├── blog/       # Blog posts (MDX)
│   │   └── projects/   # Project data (JSON)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript types
│   └── utils/          # Utility functions
├── public/             # Static assets
└── astro.config.mjs    # Astro configuration
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |
| `astro check`     | Type-check the project                      |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Astro - keep default settings
4. Click "Deploy"

See [DEPLOY.md](./DEPLOY.md) for detailed instructions including:
- Environment variables setup
- Custom domain configuration
- GitHub Discussions setup for comments

### Environment Variables

| Variable       | Description                           | Required |
| -------------- | ------------------------------------- | -------- |
| `PUBLIC_GA_ID` | Google Analytics Measurement ID       | No       |

## Content Management

### Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: 'Your Post Title'
description: 'Brief description'
pubDate: 2026-01-15
tags: ['tag1', 'tag2']
---

Your content here...
```

### Adding a Project

Create a new `.json` file in `src/content/projects/`:

```json
{
  "name": "Project Name",
  "description": "Project description",
  "github": "https://github.com/...",
  "url": "https://demo-url.com",
  "tags": ["React", "TypeScript"],
  "featured": true
}
```

## Customization

- **Colors**: Edit `src/styles/global.css` CSS variables
- **Fonts**: Modify `tailwind.config.mjs` fontFamily
- **Site metadata**: Update `src/components/layout/BaseHead.astro`

## License

MIT © Terry Guo
