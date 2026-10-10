# PRD — Orcha Digital Website

## Original Problem Statement
Build a complete, responsive website for ORCHA DIGITAL, a new digital marketing and creative agency (Indore, MP, India). Premium dark cinematic design (navy bg, electric-blue/red accents, large typography). Brand: Orcha Digital — "Ideas | Content | Growth", "Your Digital Growth Partner". Sections: Home, About, Services (9), Portfolio (honestly-labelled concept work), Why Choose Us, Vision & Mission, Process (PLAN/CREATE/PUBLISH/GROW), Packages (₹7k/₹12k/₹18k monthly + comparison), Contact (enquiry form with validation, prefill from service/package selections, tel/email/WhatsApp links, honest delivery claims), Footer. No invented clients/testimonials/results. No auth/dashboards/payments/3D.

## Architecture
- Frontend: React (CRA + craco), Tailwind, framer-motion, lucide-react. Single-page site, reusable components in `/app/frontend/src/components/`, all content centralized in `/app/frontend/src/data/content.js`.
- Backend: FastAPI `/app/backend/server.py` — `POST /api/enquiries` (pydantic-validated, stored in MongoDB `enquiries` collection), `GET /api/enquiries`, `GET /api/` health.
- DB: MongoDB via MONGO_URL/DB_NAME env (enquiries only).

## User Personas
- Small/business owner in India looking for social media + marketing help.
- Visitor comparing monthly packages before enquiring.

## Core Requirements (static)
All 10 sections, responsive nav with mobile drawer, 9 service cards with enquiry action, concept portfolio with category filters, 6 why-us pillars, vision/mission, 4-step process, 3 packages + 17-row comparison table, custom-package and ad-budget-excluded notes, validated enquiry form with prefill, clickable tel/mailto/WhatsApp links, SEO meta.

## Implemented (10 Oct 2026)
- Full one-pass build of all 10 sections with dark navy cinematic theme (#070A12, #00E5FF, #FF3366), Outfit + Plus Jakarta Sans fonts.
- Enquiry backend (validated, stored in MongoDB) with honest success/failure messaging; failure state offers email/WhatsApp fallback.
- Service/package buttons prefill the enquiry form and smooth-scroll to contact.
- Portfolio labelled "Concept Project" throughout; no invented clients, metrics or testimonials.
- Verified: API health, valid enquiry save (200), invalid rejected (422), list endpoint, service prefill ("Video Editing"), package prefill ("Premium"), empty-form validation errors, successful submission, mobile menu at 375px, layouts at 375/768/1366px, comparison table (17 rows), footer tel/WhatsApp links.
- Full SEO setup (10 Oct 2026): keyword-led title ("Digital Marketing Agency in Indore | Orcha Digital"), meta description, robots meta, Open Graph + Twitter card (no og:url/og:image — no confirmed production domain yet), inline SVG favicon + apple-touch-icon, ProfessionalService JSON-LD (phone/email/Indore address from user's brief, no fabricated ratings), content-rich noscript fallback, robots.txt with explicit AI-crawler group + Disallow /api/, llms.txt (no prices per policy). No sitemap.xml yet — pending confirmed production domain. All verified served correctly in preview (robots as text/plain, JSON-LD parses, no placeholder/preview URLs anywhere).

## Backlog / Next Tasks
- P0: Email notification on new enquiry (needs Resend or SMTP config) — currently enquiries are saved to DB only.
- P0 (on deploy): redeploy + enable "Search Engine Crawling and Optimisation" toggle, then re-verify on live domain; add canonical/og:url/sitemap once the production domain is confirmed (user listed www.orchadigital.com — needs to be attached to the deployment).
- P1: Admin view of enquiries (would need auth).
- P1: Real portfolio projects/case studies when the agency has client work.
- P2: Blog/insights section, FAQ section, Google Maps embed, social media profile links.
- P2: Custom domain + analytics.
