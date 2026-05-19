# C&D Plumbing Plus — Website Build

Static, mobile-first, SEO + GEO–optimized marketing site for **C&D Plumbing Plus** (Chris Alexander, "The Plumbing Professor") in Rochester, NY. Built to showcase what a modern site for this business could look like — and to be deployable as-is to GitHub Pages, Netlify, Vercel, or any static host.

## Files

```
sites/cd-plumbing-plus/
├── index.html              # Single-page site with anchored sections
├── styles.css              # Full stylesheet (navy + teal + cream)
├── main.js                 # Mobile nav, form handler, footer year
├── llms.txt                # AI-search entity context (place at site root on deploy)
├── mobile-mockup.html      # Side-by-side iPhone-framed views
├── README.md               # This file
├── assets/                 # Drop real photos here (headshot, truck, jobs)
└── research/               # Source intel from 4 parallel research agents
    ├── 01-socials-deep-dive.md
    ├── 02-reviews-mining.md
    ├── 03-keyword-research.md
    └── 04-geo-content-patterns.md
```

## What the build is based on

Four parallel research agents pulled the intel underpinning every copy and structural decision. Findings are stored in `research/` for the record. Highlights:

### From agent 1 — socials
- **2,034 Facebook likes · 100% recommend · 74 reviews · Nextdoor Neighborhood Favorite 2023 + 2024**
- Real tagline: **"Quality Builds Business!!!"**
- Family framing: **"father, son, and cousin company"**
- Voice: warm, owner-personal, exclamation-friendly
- No IG/LinkedIn/YouTube/TikTok yet — the site is the digital hub

### From agent 2 — reviews
- 4.9 / 5 on HomeAdvisor across ~25–40 verified reviews
- Zero BBB complaints
- Verbatim quotes pulled and embedded (with platform attribution)
- Service frequency order (used to reorder the services grid):
  1. Water heaters (tank + tankless) — most-mentioned
  2. Sump pumps
  3. Drain cleaning
  4. Faucets / toilets / fixtures
  5. Boilers
  6. Backflow
  7. Cast iron sewer + bathroom rough-in

### From agent 3 — keywords
- 30 priority Rochester plumbing keywords (incl. "24 hour plumber Rochester NY" — 480 vol, low difficulty)
- Seasonal opportunities (frozen pipes, sump pumps, backflow)
- Suburb landing-page roadmap (Pittsford → Brighton → Penfield first)
- 15 People Also Ask questions targeted in the FAQ
- 6 topic clusters for blog/content build-out

### From agent 4 — GEO + content
- Top-ranking plumber site teardowns (Pride, Cellino, Roto, Ben Franklin, T-Mark, AP)
- Full schema stack recommendations
- AI search citation distribution (ChatGPT favors Wikipedia/editorial; Perplexity favors Reddit; Gemini favors Google entity graph)
- **Pricing Promise** identified as biggest competitive gap in Rochester — built as a dedicated section
- Hero H1 rewrite (benefit triple — *"Your water's back on, your wallet's intact, your questions answered."*)

## What's wired up

✅ Responsive (desktop + tablet + mobile, breakpoints at 1024 / 880 / 560)
✅ Sticky header with click-to-call
✅ Sticky mobile call bar (bottom of screen)
✅ Click-to-call on all phone numbers (`tel:` links)
✅ Open Graph + Twitter card meta tags
✅ **Full JSON-LD schema stack** — Plumber + LocalBusiness + Person (founder) + OfferCatalog (services) + AggregateRating + areaServed (13 cities) + award (Nextdoor 2023/2024) + sameAs (FB, Nextdoor, HA, Yelp, Manta)
✅ **FAQPage schema** — 7 questions targeting People Also Ask snippets
✅ **llms.txt** — AI-search entity context file
✅ **Pricing Promise section** — addresses largest competitive gap in Rochester market
✅ **PAA-targeted FAQ** with 40–60 word direct answers (AI-citation format)
✅ Embedded Facebook page plugin (live, pulling from CDPLUMBINGPLUS page)
✅ Embedded Google Maps service area
✅ Smooth-scroll anchored nav
✅ Mobile hamburger nav
✅ Accessible (proper landmarks, ARIA labels, reduced-motion support)

## SEO / GEO posture

| Element | Status | Notes |
|---|---|---|
| Title tag | ✓ Keyword-loaded | "Plumber in Rochester NY \| Water Heater & 24-Hour Emergency Service" |
| Meta description | ✓ Keyword-loaded | Includes water heater, drain, sump, 24-hour, Monroe County, Nextdoor badge |
| H1 | ✓ Benefit triple | "Your water's back on, your wallet's intact, your questions answered." |
| H2/H3 structure | ✓ Question format on FAQ | AI-citable |
| Schema | ✓ Plumber + FAQPage + Person + OfferCatalog | One of zero of 10 audited competitors with any schema |
| llms.txt | ✓ Shipped | Deploy at site root |
| FAQ word count | ✓ 40–60 per answer | Optimized for AI snippet extraction |
| NAP consistency | ✓ Across schema + llms.txt + footer + Contact | Phone: 585-520-2522, Address: 84 Barmont Dr, Email: cdplumbingplus@gmail.com |
| Local entity links | ✓ sameAs covers FB, Nextdoor, HomeAdvisor, Yelp, Manta | |

## What needs to be wired before launch

1. **Real headshot of Chris** — replace the SVG placeholder in `.about__photo-frame` with an actual photo (4:5 portrait, ~800×1000px). Bonus: a family photo (father, son, cousin) lands the family-business angle.
2. **Verify testimonial attributions** — quotes embedded are verbatim from public review snippets; verify first names + cities by logging into HomeAdvisor / Nextdoor / Facebook and update the `<footer>` of each `.review` block.
3. **Google Reviews widget** — drop in the real Google Place ID in `#google-reviews-widget[data-placeid]`. Per the GEO research, prefer **server-side fetch via the Google Places API** (cached daily) over a JS widget — JS widgets hurt LCP/INP.
4. **AggregateRating numbers** — currently `4.9` / `74`. Once live Google reviews are wired, sync the JSON-LD numbers with the visible page numbers. Per Google's 2024+ policies, mismatched numbers are penalized; only pull from third-party (Google) review APIs, not self-collected reviews.
5. **Contact form endpoint** — `main.js` fakes a successful submit. Wire to [Formspree](https://formspree.io/), [Netlify Forms](https://docs.netlify.com/forms/setup/), or a custom backend.
6. **OG image** — generate a 1200×630 `assets/og-image.jpg` (truck + logo + "Rochester's Plumbing Professor").
7. **Domain** — register `cdplumbingplus.com`. Update canonical and all schema URLs.
8. **Master Plumber license number** — confirm and add to footer + Plumber schema (`hasCredential`).
9. **Suburb landing pages** — build out per `research/03-keyword-research.md` roadmap. Start with Pittsford, Brighton, Penfield.
10. **NiceJob signup** ($75/mo) — per GEO research, the single highest-ROI lever for a solo plumber. Auto-SMS post-job review asks, Google review velocity, widget integration.

## Run locally

No build step. Just open `index.html` in a browser, or:

```powershell
# Python 3
python -m http.server 8080
# then visit http://localhost:8080
```

Open `mobile-mockup.html` in the same session to see 6 iPhone-framed views side-by-side.

## Deploy

Drop the folder into Netlify / Vercel / GitHub Pages / Cloudflare Pages. No server required. **Move `llms.txt` to site root** (e.g. `https://cdplumbingplus.com/llms.txt`) on deploy.

## Customization knobs

- **Colors:** CSS variables at top of `styles.css` (`--navy`, `--teal`, `--cream`)
- **Phone:** find/replace `(585) 520-2522` and `+15855202522`
- **Add a service:** copy a `.service` block in `index.html`; add matching `Service` offer to JSON-LD `hasOfferCatalog`
- **Add suburb pages:** create `pittsford.html` etc. — duplicate `index.html` and customize hero, services, local content per `research/03-keyword-research.md`
