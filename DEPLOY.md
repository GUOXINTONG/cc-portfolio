# Deployment Guide

This project is configured for automatic deployment to **Vercel**.

## Quick Deploy (Recommended)

### Option 1: Vercel Web Interface (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "Add New Project"
3. Import your GitHub repository: `GUOXINTONG/cc-portfolio`
4. Vercel will auto-detect Astro - keep the default settings:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click "Deploy"

Your site will be live at `https://cc-portfolio.vercel.app` (or a custom URL).

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Environment Variables (Optional)

If you want to enable Google Analytics, add this environment variable in Vercel:

| Variable | Value | Required |
|----------|-------|----------|
| `PUBLIC_GA_ID` | Your Google Analytics Measurement ID (e.g., `G-XXXXXXXXXX`) | No |

**How to add:**
1. Go to your project on Vercel dashboard
2. Click "Settings" → "Environment Variables"
3. Add the variable name and value
4. Click "Save" and redeploy

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project → "Settings" → "Domains"
2. Enter your domain (e.g., `yourdomain.com`)
3. Follow Vercel's instructions to configure DNS

## GitHub Discussions for Comments

To enable giscus comments on blog posts:

1. Go to your GitHub repository: `GUOXINTONG/cc-portfolio`
2. Click "Settings" → "Features"
3. Enable "Discussions"
4. Install the [giscus GitHub App](https://github.com/apps/giscus)
5. Visit [giscus.app](https://giscus.app) to get your configuration
6. Update the values in `src/pages/blog/[slug].astro` if needed

## Automatic Deployments

Once connected to Vercel:
- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments

## Troubleshooting

### Build fails
Check the build logs in Vercel dashboard. Common issues:
- Missing environment variables
- Type errors (run `npm run build` locally first)

### Analytics not working
- Verify `PUBLIC_GA_ID` is set correctly
- Check browser console for errors
- Note: Analytics only loads in production (not in preview deployments)

### Comments not showing
- Ensure GitHub Discussions is enabled
- Verify giscus app has access to the repository
- Check browser console for giscus errors
