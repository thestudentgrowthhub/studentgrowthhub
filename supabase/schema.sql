-- ================================================================
-- The Student Growth Hub — Complete Supabase Database Schema
-- Run this in Supabase Dashboard -> SQL Editor -> Click "Run"
-- ================================================================

-- 1. Table: Opportunities (Scholarships, Internships, Fellowships)
CREATE TABLE IF NOT EXISTS public.opportunities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Scholarship', 'Internship', 'Fellowship', 'Competition', 'Grant')),
  funding_type TEXT NOT NULL CHECK (funding_type IN ('Fully Funded', 'Partially Funded', 'Paid', 'Unpaid')),
  location TEXT NOT NULL,
  eligible_region TEXT NOT NULL,
  deadline TEXT NOT NULL,
  is_rolling BOOLEAN DEFAULT false,
  description TEXT NOT NULL,
  requirements TEXT[] DEFAULT '{}',
  benefits TEXT[] DEFAULT '{}',
  apply_url TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Table: Applications & Form Submissions (/get-involved)
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN ('volunteer', 'yab', 'partner', 'contact', 'newsletter')),
  full_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  university TEXT,
  role TEXT,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'contacted', 'archived')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Table: Newsletter Subscribers (Footer & Popups)
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  source TEXT DEFAULT 'website_footer',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policies:
-- Anyone can view active opportunities
DROP POLICY IF EXISTS "Public can view active opportunities" ON public.opportunities;
CREATE POLICY "Public can view active opportunities"
  ON public.opportunities FOR SELECT
  USING (true);

-- Anyone can submit applications (/get-involved)
DROP POLICY IF EXISTS "Public can submit applications" ON public.applications;
CREATE POLICY "Public can submit applications"
  ON public.applications FOR INSERT
  WITH CHECK (true);

-- Anyone can subscribe to newsletter
DROP POLICY IF EXISTS "Public can subscribe to newsletter" ON public.newsletter_subscribers;
CREATE POLICY "Public can subscribe to newsletter"
  ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Pre-seed verified opportunities from blueprint
INSERT INTO public.opportunities (
  slug, title, organization, category, funding_type, location, eligible_region, deadline, is_rolling, description, requirements, benefits, apply_url
) VALUES
(
  'chevening-uk-government-scholarship',
  'Chevening UK Government Master''s Scholarship',
  'Foreign, Commonwealth & Development Office (FCDO)',
  'Scholarship',
  'Fully Funded',
  'United Kingdom (Any UK University)',
  'Global / Developing Nations',
  'November 5, 2026',
  false,
  'Prestigious global scholarship program funded by the UK government offering future leaders full financial support for any one-year eligible master''s degree at any UK university.',
  ARRAY['Undergraduate degree (2:1 equivalent minimum)', 'Minimum 2 years of work experience (2,800 hours)', 'Demonstrated leadership potential', 'Return to country of citizenship for at least 2 years post-study'],
  ARRAY['Full university tuition fees', 'Monthly living stipend', 'Round-trip economy flights to the UK', 'Visa application fees & arrival allowance'],
  'https://www.chevening.org/apply/'
),
(
  'elite-campus-kryptr-virtual-work-experience',
  'ELITE Campus × Kryptr Virtual Work Experience',
  'The Student Growth Hub & Kryptr',
  'Internship',
  'Paid',
  'Remote (Virtual Experience)',
  '37+ Countries (All Regions)',
  'Rolling Admissions',
  true,
  'Accelerate your career through high-impact, 3-week virtual work experience projects. Bridge the gap between academia and top-tier global employability with 3 hours per week of real project delivery.',
  ARRAY['Current undergraduate or recent graduate', 'Commitment of 3 hours per week across 3 weeks', 'Reliable internet connectivity and laptop/phone access'],
  ARRAY['Verified portfolio work experience to add to your CV', 'Direct pipeline to paid international internships', '100% Free enrollment for the first month', 'Mentorship from industry executives'],
  'https://app.kryptr.co'
),
(
  'mastercard-foundation-scholars-program',
  'Mastercard Foundation Scholars Program',
  'Mastercard Foundation',
  'Scholarship',
  'Fully Funded',
  'Partner Universities in Africa, Europe & North America',
  'Sub-Saharan Africa',
  'December 15, 2026',
  false,
  'A global initiative educating and developing the next generation of African leaders with comprehensive financial and leadership development support.',
  ARRAY['Citizens of an African country', 'Proven academic talent and leadership commitment', 'Demonstrated financial need or barrier to education'],
  ARRAY['Full tuition coverage', 'Accommodation, books, and living stipend', 'Comprehensive leadership and mentorship training', 'Career transitions and alumni network access'],
  'https://mastercardfdn.org/all/scholars/'
),
(
  'generation-google-scholarship-emea',
  'Generation Google Scholarship (EMEA)',
  'Google',
  'Scholarship',
  'Partially Funded',
  'Europe, Middle East & Africa',
  'EMEA (Women in Tech)',
  'April 23, 2027',
  false,
  'Designed to help students pursuing computer science degrees excel in technology and become active leaders in the field.',
  ARRAY['Identify as female', 'Enrolled as undergraduate or graduate in Computer Science', 'Strong academic record and passion for tech diversity'],
  ARRAY['€7,000 award for tuition, books, and fees', 'Invitation to Google student retreat and networking with engineers'],
  'https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-emea'
),
(
  'un-youth-ambassador-fellowship-2027',
  'UN Youth Ambassador Fellowship',
  'United Nations Sustainable Development Solutions Network',
  'Fellowship',
  'Fully Funded',
  'Hybrid (Global & In-Person Summits)',
  'Global (Ages 18-30)',
  'January 30, 2027',
  false,
  'A 12-month leadership and advocacy fellowship for young changemakers driving grassroots progress on the 17 UN Sustainable Development Goals (SDGs).',
  ARRAY['Between 18 and 30 years old', 'Demonstrated community engagement in SDG implementation', 'Proficiency in English or working UN language'],
  ARRAY['Fully funded travel to UN youth summits', 'Direct access to UN agency mentors and policymakers', 'Seed grant eligibility for community SDG projects'],
  'https://sdsnyouth.org'
),
(
  'african-development-bank-internship-program',
  'AfDB Young Professionals & Graduate Internship',
  'African Development Bank Group (AfDB)',
  'Internship',
  'Paid',
  'Abidjan, Côte d''Ivoire & Regional Hubs (Hybrid)',
  'Africa & Member Countries',
  'March 1, 2027',
  false,
  'Six-month paid internship program designed to provide selected graduate students with practical experience in international development operations.',
  ARRAY['Enrolled in a master''s program or graduated within 1 year', 'Aged 30 or younger', 'Fluent in either English or French'],
  ARRAY['Monthly competitive stipend', 'Medical insurance coverage', 'Direct immersion in high-level economic transformation projects'],
  'https://www.afdb.org/en/about-us/careers'
)
ON CONFLICT (slug) DO NOTHING;
