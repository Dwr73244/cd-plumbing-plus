# C&D Plumbing Plus — GEO + Content Patterns Research

*Compiled by research agent · 2026-05-19*

## Top-Ranking Plumber Site Patterns

Analyzed: Pride Plumbing of Rochester, Roto-Rooter, Cellino (Buffalo), T-Mark (Buffalo), AP Plumbing (Syracuse), Benjamin Franklin (national).

**Hero pattern that works:**
- Short, location-bound H1
- Three CTAs visible: phone (tel:), Book Online, Get a Quote
- Trust strip above the fold: star rating + Google logo, years in business, license number, 2-4 badges (BBB A+, Nextdoor Favorite, Angi)
- Best-in-class guarantee: Ben Franklin's *"$5 per minute we're late, up to 60 minutes"*

**URL structure (recommended):**
- `/services/[service-slug]/` for service pages
- `/service-area/[suburb-slug]/` for geo pages

**Service page template:** 1,200-1,800 words, H1 → emergency CTA strip → "What we fix" → install vs repair → comparison table → "Why us" → reviews → FAQ (6-8 Q&A) → service area → CTA.

## Schema Stack (2026)

**Critical 2026 change:** FAQ rich results being removed from Google Search in June 2026. Still implement FAQPage — AI engines (ChatGPT, Perplexity, Gemini) still parse it for citation context.

| Schema | Where | Purpose |
|---|---|---|
| `Plumber` (subtype of LocalBusiness) | Homepage + footer | Primary entity |
| `Service` (with areaServed, provider, offers) | Each service page | Tells Google + AI what you do |
| `FAQPage` | Service pages + dedicated FAQ | Still useful for GEO |
| `AggregateRating` (nested inside Plumber) | Homepage | ONLY from third-party source; numbers must match visible |
| `Review` (individual) | Testimonial pages | Use sparingly |
| `BreadcrumbList` | All inner pages | Helps AI parse hierarchy |
| `Organization` (with sameAs) | Homepage | Entity reconciliation |
| `Person` (for owner/founder) | About page | E-E-A-T signal |
| `HowTo` | DIY blog content only | AI citations |

## GEO / AI Search — Plumber-Specific

**Citation distribution:**
- ChatGPT: ~48% from Wikipedia + established editorial
- Perplexity: ~47% from Reddit
- Google AI Overviews: weights FAQ-structured answers, list/table formatting
- Gemini: favors Google entity graph alignment

**Concrete recommendations:**
1. **One-sentence answer first.** Open every FAQ/blog answer with a complete, self-contained sentence
2. **Use tables and numbered lists** — AI engines cite structured formats ~3x more
3. **Bylined content** — author block with plumber name, license #, years experience
4. **Get cited externally** — pitch Democrat & Chronicle, RochesterFirst, WHEC, 13WHAM
5. **Reddit presence** — owner answers 2-3 r/Rochester or r/HomeImprovement questions/month
6. **Entity consistency** — NAP must match exactly across GBP, BBB, Yelp, Angi, Facebook, llms.txt, JSON-LD

## Hero / H1 — Benefit-Driven Options

**Diagnosis of original H1** *"Plumbing done right — and explained before it starts"*: first half generic, second half describes a feature, not the customer benefit.

**5 fresh options:**

1. *"Know exactly what you're paying for — before we lift a wrench."*
2. *"Honest plumbing, plainly explained — so you never pay for what you don't need."*
3. **"Your water's back on, your wallet's intact, your questions answered."** ← agent recommendation
4. *"Rochester's straight-talking plumber — fair prices, no upsells, work you'll understand."*
5. *"Fix it once. Pay a fair price. Actually understand what happened."*

**Pick: #3** — sells three concrete customer outcomes in 10 words. Pair with subhead: *"Owner-operated Rochester plumbing with upfront pricing and 'Plumbing Professor' explanations on every job."*

## Blog Topics (15 — [AI] = high citation potential)

1. **[AI]** Tank vs Tankless Water Heater: Real Cost Comparison for Rochester Homes
2. **[AI]** Why Is My Water Heater Leaking from the Bottom? 6 Causes and Fixes
3. **[AI]** How to Tell If Your Sump Pump Is Failing (Before Your Basement Floods)
4. Frozen Pipes in Rochester: What to Do in the First 10 Minutes
5. **[AI]** How Much Does It Cost to Replace a Water Heater in Rochester NY? (2026 Pricing)
6. **[AI]** Toilet Won't Stop Running: A 4-Step DIY Fix Before You Call a Plumber
7. Hard Water in Rochester: Do You Actually Need a Water Softener?
8. **[AI]** Trenchless vs Traditional Sewer Line Repair: Which Is Right for Your Home?
9. Signs Your Galvanized Pipes Need to Be Replaced (Common in Pre-WWII Rochester Homes)
10. **[AI]** What Size Water Heater Do I Need? A Quick Guide by Household Size
11. Annual Plumbing Maintenance Checklist for Rochester Homeowners
12. **[AI]** Why Is My Water Bill So High? 7 Hidden Plumbing Leaks to Check
13. How to Winterize Your Outdoor Faucets and Pipes (Rochester Edition)
14. **[AI]** Sewer Line Camera Inspection: When You Need One and What It Costs
15. **[AI]** How Long Does a Water Heater Last? Replacement Timeline by Type

## Trust Signals That Move the Needle

**Tier 1 (above-the-fold):**
- Live Google star rating + review count
- Specific year ("Since 2018")
- Master Plumber license number visible
- "Locally owned and operated" / owner's name

**Tier 2 (high-conversion, near hero):**
- Concrete on-time guarantee with dollar amount
- **Upfront / flat-rate pricing badge** — 82% of homeowners prefer fixed quotes; highest-converting USP in category
- Same-day service promise
- "No trip charge / free estimate"

**Tier 3 (credibility stack):**
- BBB A+ logo
- **Nextdoor Neighborhood Favorite badge** — high local trust in suburbia
- Before/after photos on service pages
- Truck wrap photo with local landmark
- Manufacturer certs (Rinnai Certified, A.O. Smith ProSeller)

**Underused but high-leverage:**
- "**Pricing Promise**" page — almost no Rochester competitor has dedicated upfront-pricing page. C&D can own this.
- Owner photo + bio on homepage — moat for owner-operated business

## Google Reviews Integration

**Implementation:** Use Google Places API with server-side fetch (cached daily) rather than JS widget. JS widgets hurt LCP/INP.

**Schema rule:** Display rating + count visibly, put same numbers in `AggregateRating` JSON-LD nested in `Plumber` schema. Pull from third-party (Google), never self-collected.

**Review velocity tactics:**
- Post-job SMS within 30 min — 22-28% conversion vs 4% for email
- Direct Google review link (`g.page/r/[id]/review`)
- Owner-name personalization in SMS doubles response rate

**Platform ROI ranking (single-location):**
1. **NiceJob ($75/mo)** — best ROI for solo home-service
2. Podium ($399/mo) — only if SMS-first comms needed
3. Birdeye — skip unless multi-location
4. GrowSEO — budget option

## Top 5 Quick Wins

1. Replace H1 with benefit-triple version
2. Add live Google reviews via Places API + matching AggregateRating JSON-LD
3. Ship `/llms.txt`
4. Publish 3 [AI] blog posts in 60 days (owner-bylined)
5. Build "Pricing Promise" page — biggest competitive gap in Rochester
