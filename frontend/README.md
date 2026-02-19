# Donation Platform Frontend (Next.js)

This folder contains the initial implementation of a modern donation website and analytics dashboard.

## Implemented in this iteration
- Animated homepage sections (`/`)
- Analytics dashboard foundation (`/dashboard`)
- Firebase client initialization module
- Typed analytics data layer with mock data fallback

## Run locally
```bash
cd frontend
npm install
npm run dev
```

## Environment setup
Copy `.env.example` to `.env.local` and set Firebase values.

## Next milestones
- Add campaign CRUD and donor management.
- Connect dashboard to Firestore aggregate collections.
- Integrate payment workflow and webhooks.
