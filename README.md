# travis-woods.com

Personal brand site for Travis Woods, channel strategist and former MSP owner. Built with Astro, hosted free on Cloudflare.

## Editing content

Almost every fact on the site lives in one file: `src/data/site.ts`. Pages, structured data (JSON-LD), and the AI files (`/llms.txt`, `/llms-full.txt`) are all generated from it, so changing a fact there changes it everywhere.

- Bio, career, advisory boards, speaking topics, FAQs: `src/data/site.ts`
- Photo alt text and captions: `src/data/photos.ts`
- Photos: `src/assets/photos/` (Astro converts them to AVIF/WebP at build time)
- Bump `site.lastUpdated` whenever you make a meaningful change. AI engines weigh freshness.
- `site.openToExecutiveRoles` shows or hides the "open to executive roles" note on Contact and FAQ.

House style: no em dashes.

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
```

## AI search optimization built in

- JSON-LD on every page: Person, WebSite, ProfessionalService, ProfilePage, FAQPage, HowTo (the Channel Clarity Process), BreadcrumbList, all linked by stable `@id`s
- `/llms.txt` and `/llms-full.txt` for AI assistants
- `robots.txt` that explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and others
- Answer-first copy: each page opens with a short, quotable definition
- Static HTML, no client-side rendering, optimized images, sitemap, canonical URLs, Open Graph image
- `public/_redirects` maps old WordPress URLs (`/contact-me/` and others)

## Deploy on Cloudflare (free)

1. Cloudflare dashboard > Workers & Pages > Create > Import a repository > pick this repo.
2. Build command: `npm run build`. Deploy command: `npx wrangler deploy`. (Config is in `wrangler.jsonc`.)
3. After the first deploy, add the custom domain `travis-woods.com` (and `www`) under the Worker's Settings > Domains & Routes.
4. Important for AI visibility: in the domain's Cloudflare settings, make sure AI Crawl Control / "Block AI bots" and the managed robots.txt are turned **off**. Cloudflare can block AI crawlers by default, which would defeat the purpose of this site.
5. Every push to `main` redeploys automatically.

## After launch

- Submit `https://travis-woods.com/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools (Bing feeds ChatGPT and Copilot search).
- Validate structured data at https://validator.schema.org.
- Add the site URL to your LinkedIn profile's website field so the `sameAs` link is two-way.
