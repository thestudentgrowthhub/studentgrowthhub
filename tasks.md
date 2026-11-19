# Actionable Tasks & Next Steps

## 🎨 Visual Effects & UI Polish — COMPLETED ✅
- [x] **Ambient Hero Glow & Animated Gradient** — Slow-pulsing blue/indigo/emerald mesh gradient in Hero section background (8s pulse)
- [x] **Glassmorphic Sticky Navbar with Scroll Blur** — Navbar transitions from `bg-white/95` to `bg-white/80 backdrop-blur-xl shadow-md` on scroll past 20px; active link has ring indicator
- [x] **Card Tilt & Hover Glow Effect** — Program cards get `hover:shadow-2xl hover:border-blue-200/80` + radial glow overlay on hover; Opportunity cards get `hover:shadow-blue-100/60 hover:border-blue-200/70`; metric sub-cards get `hover:border-blue-200 hover:shadow-blue-50`
- [x] **Floating AI Advisor Bubble Animation** — Breathing outer glow ring (`animate-pulse [2.5s]`) behind the button + existing green ping dot; teaser tooltip auto-dismisses after 6 seconds
- [x] **CTA Button Micro-interactions** — Hero "Explore Opportunities" and "Join Community" buttons both have `hover:-translate-y-0.5 active:scale-[0.98]` lift effect
- [x] **Interactive Impact Number Counter** — Already exists in `ImpactStats.tsx` with IntersectionObserver scroll trigger
- [x] **Success Confetti Animation** — Already exists in `get-involved/page.tsx` with `canvas-confetti`

---

## ⚙️ External Dashboard Activations (User Action Required)
- [ ] **Run Supabase SQL Migration**: Execute `supabase/schema.sql` in the Supabase Dashboard SQL Editor to turn on live database tables.
  - URL: https://supabase.com/dashboard/project/eqxllnshwaclbqxlqvsl/sql/new
- [ ] **Add Brevo API Key**: Set `BREVO_API_KEY` in Vercel project environment variables to enable email notifications.
- [ ] **Add Gemini API Key**: Set `GEMINI_API_KEY` in Vercel project environment variables to enable live AI responses.
