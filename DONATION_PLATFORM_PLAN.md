# Donation Platform + Dashboard Plan (Next.js + Firebase)

## 1) Product Scope
Build a modern donation platform with:
- Public homepage focused on trust, impact, and fast conversion.
- Donor flow (campaign browse, donate, confirmation, receipt).
- Admin dashboard with analytics, campaign management, donor insights, and operational tools.

## 2) Tech Stack
- **Frontend/Web App:** Next.js 14+ (App Router), TypeScript, Tailwind CSS.
- **Animation/UI polish:** Framer Motion, subtle gradients, micro-interactions.
- **Backend-as-a-Service:** Firebase
  - Authentication (email/social)
  - Firestore (campaigns, donations, donors, events)
  - Storage (campaign images/documents)
  - Cloud Functions (webhooks, aggregation, scheduled jobs)
  - Hosting (optional for web deployment)
- **Analytics/Charts:** Recharts (or Chart.js) in dashboard.
- **Payments (phase 2):** Stripe/Razorpay integration via secure server routes + webhooks.

## 3) Core Feature Modules

### A. Public Site (Homepage + Campaign Discovery)
- Hero section with animated CTAs and trust signals.
- Impact stats strip (total raised, active campaigns, donors).
- Featured campaigns grid with progress bars.
- Testimonials and transparency section.
- Footer with contact, social links, legal pages.

### B. Donation Flow
- Campaign details page with media, story, and target progress.
- Donation form:
  - preset amounts + custom amount
  - recurring toggle (future phase)
  - donor information (name/email)
- Payment intent flow (future phase).
- Thank-you page + email receipt trigger (Cloud Function).

### C. Dashboard (Admin)
- KPI cards: total donations, monthly donations, conversion rate, average donation.
- Time-series charts: daily/weekly fundraising trends.
- Campaign analytics table: raised vs target, donor count, performance ranking.
- Donor insights: new vs returning, top donors, retention trend.
- Activity feed: recent donations, campaign updates.

### D. Data + Analytics Layer
- Firestore collections:
  - `campaigns`
  - `donations`
  - `donors`
  - `events`
  - `settings`
- Aggregation strategy:
  - Write raw events on every action.
  - Materialized daily stats documents for fast dashboard reads.
  - Scheduled Cloud Function to backfill/repair metrics.

### E. Security + Governance
- Firebase security rules for role-based access.
- Admin-only dashboard routes.
- Environment variable-based config.
- Input validation and server-side checks for all write operations.

## 4) Delivery Phases

### Phase 1 (MVP)
- Next.js app scaffold.
- Animated homepage.
- Dashboard UI with mock/simulated analytics.
- Firebase initialization and data service abstraction.

### Phase 2
- Real auth + role management.
- CRUD for campaigns.
- Real donation flow with payment provider + webhook sync.

### Phase 3
- Advanced analytics (funnel, cohort retention).
- Exports, filters, and notifications.
- SEO hardening and A/B testing.

## 5) Implementation Plan for Current Sprint
1. Scaffold a `frontend/` Next.js TypeScript app structure.
2. Build animated homepage sections with reusable components.
3. Build admin dashboard layout with cards/charts/tables.
4. Add Firebase config module + typed repository utilities.
5. Provide mock analytics fallback so UI works before backend data is live.
6. Add setup instructions and env template.

## 6) Success Criteria
- Homepage and dashboard render cleanly with responsive UI.
- Firebase can be enabled by setting env vars only.
- Dashboard components consume normalized analytics interface.
- Project is ready for payment + auth integration in next iteration.
