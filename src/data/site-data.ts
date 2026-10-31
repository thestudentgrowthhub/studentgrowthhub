export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  organization: string;
  category: "Scholarship" | "Internship" | "Fellowship" | "Leadership" | "Conference" | "Competition" | "Mentorship";
  fundingType: "Fully Funded" | "Partially Funded" | "Free / Stipend" | "Unfunded";
  eligibleRegion: string;
  educationLevel: "Undergraduate" | "Postgraduate" | "High School" | "Open to All";
  deadline: string;
  location: string;
  description: string;
  benefits: string[];
  eligibility: string[];
  officialLink: string;
  featured?: boolean;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  partner?: string;
  description: string;
  impactMetrics: { label: string; value: string }[];
  highlights: string[];
  duration: string;
  status: "Active / Cohort 2" | "Open for Applications" | "Monthly Recurring";
  actionText: string;
  actionUrl: string;
  image: string;
}

export interface StrategicPillar {
  id: number;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export const SITE_METRICS = [
  { label: "LinkedIn Community", value: "19,000+", detail: "Engaged aspiring students & young professionals" },
  { label: "Countries Reached", value: "37+", detail: "Pan-African & global student network" },
  { label: "WhatsApp Hub Members", value: "1,500+", detail: "Active peer learning & opportunity sharing" },
  { label: "Opportunity Outcomes", value: "250+", detail: "Secured scholarships, jobs & fellowships" },
];

export const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    id: 1,
    title: "Academic Excellence",
    description: "Developing effective study habits, learning strategies, academic confidence, and the growth mindset to excel in higher education.",
    iconName: "GraduationCap",
    accentColor: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    title: "Career & Employability",
    description: "Equipping students with practical workplace readiness, CV development, personal branding, and real work experience through Growth Beyond Grades.",
    iconName: "Briefcase",
    accentColor: "from-orange-500 to-amber-600",
  },
  {
    id: 3,
    title: "Leadership & Personal Growth",
    description: "Fostering leadership capacity, emotional resilience, self-discovery, communication, and proactive problem-solving abilities.",
    iconName: "Compass",
    accentColor: "from-emerald-600 to-teal-600",
  },
  {
    id: 4,
    title: "Digital Skills & Innovation",
    description: "Promoting digital literacy, AI readiness, emerging technology tools, and responsible innovation for the future of work.",
    iconName: "Cpu",
    accentColor: "from-sky-500 to-blue-600",
  },
  {
    id: 5,
    title: "Mentorship & Networking",
    description: "Connecting students directly with seasoned industry mentors, international fellowship alumni, and collaborative peer circles.",
    iconName: "Users",
    accentColor: "from-purple-600 to-pink-600",
  },
  {
    id: 6,
    title: "Social Impact & Community Engagement",
    description: "Inspiring youth to develop grassroots initiatives, champion the UN Sustainable Development Goals (SDGs), and become active changemakers.",
    iconName: "Globe",
    accentColor: "from-rose-500 to-orange-500",
  },
];

export const FLAGSHIP_PROGRAMS: Program[] = [
  {
    id: "growth-beyond-grades",
    slug: "growth-beyond-grades",
    title: "Growth Beyond Grades",
    subtitle: "Empowerment, Mental Resilience & Career Readiness",
    badge: "Flagship Initiative",
    partner: "In partnership with The Reboot Wellbeing & Empowerment Foundation",
    description:
      "A transformative 6-week development experience designed to bridge the gap between academic theory and real-world career readiness. Students undergo reflective growth sessions, career clarity coaching, employability masterclasses, and peer collaboration.",
    impactMetrics: [
      { label: "Cohort 1 Reach", value: "30 students across 5 countries" },
      { label: "Cohort 2 Reach", value: "50 students across 12 countries" },
      { label: "Countries Covered", value: "Nigeria, Cameroon, Kenya, Zimbabwe, Bolivia & more" },
      { label: "Curriculum Length", value: "6 intensive weeks" },
    ],
    highlights: [
      "Mental resilience and wellbeing workshops",
      "Employability skills and professional CV formatting",
      "Career clarity and industry alignment sessions",
      "Cross-border peer learning and lifelong network",
    ],
    duration: "6 Weeks (Virtual)",
    status: "Active / Cohort 2",
    actionText: "Learn More & Join Waitlist",
    actionUrl: "/programs#growth-beyond-grades",
    image: "/images/IMG-20261030-WA0041.jpg",
  },
  {
    id: "elite-campus-kryptr",
    slug: "elite-campus-kryptr",
    title: "ELITE Campus × Kryptr",
    subtitle: "Virtual Work Experience & Direct Internship Pipeline",
    badge: "Industry Collaboration",
    partner: "Powered by Kryptr",
    description:
      "Every job asks for experience, yet nobody offers initial experience. ELITE Campus solves this catch-22 with a structured 3-week virtual work experience program allowing students to work on real briefs, build proof-of-work, and unlock paid internships.",
    impactMetrics: [
      { label: "Weekly Commitment", value: "Just 3 hours / week" },
      { label: "First Month", value: "100% Free Access" },
      { label: "Outcome", value: "Portfolio, CV Proof & Paid Internships" },
      { label: "Format", value: "Fully Remote / Virtual" },
    ],
    highlights: [
      "Work on simulated live briefs from global companies",
      "Build a portfolio that proves real competence",
      "Fast-track recommendations to hiring startup partners",
      "Flexible schedule tailored for busy student timetables",
    ],
    duration: "3 Weeks",
    status: "Open for Applications",
    actionText: "Register on Kryptr (app.kryptr.co)",
    actionUrl: "https://app.kryptr.co",
    image: "/images/IMG-20261030-WA0043.jpg",
  },
  {
    id: "webinars",
    slug: "student-development-webinars",
    title: "Student Development Webinars",
    subtitle: "Monthly Masterclasses with Global Leaders",
    badge: "Monthly Series",
    description:
      "A recurring monthly learning series featuring industry professionals, scholarship recipients, educators, entrepreneurs, and young changemakers who share actionable strategies on study abroad, fellowship applications, and tech careers.",
    impactMetrics: [
      { label: "Cadence", value: "Monthly Sessions" },
      { label: "Average Attendees", value: "200+ Students" },
      { label: "Speakers", value: "Global Changemakers" },
      { label: "Access", value: "Free for Community" },
    ],
    highlights: [
      "Live Q&A with scholarship evaluators and fellowship alumni",
      "Practical workshops on CV, LinkedIn, and personal branding",
      "Free access to session recordings and presentation decks",
      "Direct breakout rooms for peer networking",
    ],
    duration: "Monthly Masterclasses",
    status: "Monthly Recurring",
    actionText: "View Upcoming Webinars",
    actionUrl: "/programs#webinars",
    image: "/images/IMG-20261030-WA0057.jpg",
  },
];

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "opp-1",
    slug: "chevening-scholarship-uk",
    title: "Chevening UK Government Master's Scholarship",
    organization: "UK Foreign, Commonwealth & Development Office",
    category: "Scholarship",
    fundingType: "Fully Funded",
    eligibleRegion: "Global / 160+ Countries",
    educationLevel: "Postgraduate",
    deadline: "2026-11-05",
    location: "United Kingdom",
    description:
      "Chevening Scholarships are the UK government’s global scholarship programme, funded by the FCDO and partner organisations. It covers full tuition fees, monthly living allowance, economy travel, and exclusive networking events across the UK.",
    benefits: [
      "Full university tuition fees covered",
      "Monthly living stipend allowance",
      "Return economy flight to the UK",
      "Access to exclusive Chevening networking summits",
    ],
    eligibility: [
      "Citizen of a Chevening-eligible country or territory",
      "Hold an undergraduate degree equivalent to UK 2:1 honours",
      "Minimum of 2 years (2,800 hours) of work experience",
      "Commitment to return to home country for minimum of 2 years post-degree",
    ],
    officialLink: "https://www.chevening.org/scholarships/",
    featured: true,
  },
  {
    id: "opp-2",
    slug: "mandela-washington-fellowship",
    title: "Mandela Washington Fellowship for Young African Leaders (YALI)",
    organization: "U.S. Department of State",
    category: "Fellowship",
    fundingType: "Fully Funded",
    eligibleRegion: "Sub-Saharan Africa",
    educationLevel: "Open to All",
    deadline: "2026-11-20",
    location: "United States (Universities across USA)",
    description:
      "The flagship program of the Young African Leaders Initiative (YALI), empowering young leaders through 6 weeks of academic coursework, leadership training, and networking at prestigious U.S. colleges and universities.",
    benefits: [
      "J-1 visa support and roundtrip air travel to USA",
      "6-week Leadership Institute in Business, Civic Engagement, or Public Management",
      "Housing, meals, and living stipend included",
      "Summit in Washington, D.C. with U.S. government and private sector leaders",
    ],
    eligibility: [
      "Citizens and residents of sub-Saharan African countries",
      "Aged 25 to 35 at the time of application",
      "Demonstrated track record of leadership in business, civic life, or public service",
      "Proficient in spoken and written English",
    ],
    officialLink: "https://www.mandelawashingtonfellowship.org/",
    featured: true,
  },
  {
    id: "opp-3",
    slug: "google-generation-scholarship",
    title: "Generation Google Scholarship (EMEA & North America)",
    organization: "Google",
    category: "Scholarship",
    fundingType: "Partially Funded",
    eligibleRegion: "Europe, Middle East, Africa",
    educationLevel: "Undergraduate",
    deadline: "2026-12-15",
    location: "Worldwide / Study in Home Institution",
    description:
      "The Generation Google Scholarship was established to help aspiring computer scientists excel in technology and become leaders in the field. Selected recipients receive €7,000 (or local equivalent) toward tuition and learning expenses.",
    benefits: [
      "€7,000 award towards academic fees and study resources",
      "Invitation to Google Student Retreat and mentoring circles",
      "Direct connection with Google software engineers",
    ],
    eligibility: [
      "Currently enrolled as a full-time student in a Computer Science or related degree",
      "Demonstrate a strong academic record and passion for technology",
      "Exemplify leadership and commitment to diversity in STEM",
    ],
    officialLink: "https://buildyourfuture.withgoogle.com/scholarships",
    featured: true,
  },
  {
    id: "opp-4",
    slug: "elite-campus-virtual-internship",
    title: "ELITE Campus Virtual Work Experience & Paid Internship Track",
    organization: "The Student Growth Hub × Kryptr",
    category: "Internship",
    fundingType: "Free / Stipend",
    eligibleRegion: "Global",
    educationLevel: "Open to All",
    deadline: "2026-11-30",
    location: "Virtual / Remote",
    description:
      "A 3-week virtual work experience program tailored for students needing verifiable proof-of-work. Top performers gain access to paid internships with vetted partner startups and agencies.",
    benefits: [
      "Verifiable work experience certificate & CV reference",
      "Real-world brief portfolio items",
      "Access to paid internship opportunities",
      "100% Free for the initial month",
    ],
    eligibility: [
      "Students or recent graduates eager to break into tech, marketing, or business",
      "Ability to dedicate 3 hours per week",
      "Access to internet connection and computer or smartphone",
    ],
    officialLink: "https://app.kryptr.co",
    featured: true,
  },
  {
    id: "opp-5",
    slug: "world-youth-forum-fellowship",
    title: "World Youth Peace & Innovation Summit Fellowship",
    organization: "UN Youth Assembly Partners",
    category: "Conference",
    fundingType: "Fully Funded",
    eligibleRegion: "Global",
    educationLevel: "Open to All",
    deadline: "2026-12-01",
    location: "Geneva, Switzerland",
    description:
      "Brings together 500 young changemakers from around the world to collaborate on youth-led solutions to the UN Sustainable Development Goals.",
    benefits: [
      "Roundtrip international airfare",
      "Full accommodation and meal coverage",
      "Access to all plenaries, workshops, and diplomatic briefings",
    ],
    eligibility: [
      "Aged 18–30 at the time of conference",
      "Active participant in community impact or youth advocacy",
    ],
    officialLink: "https://www.un.org/youthenvoy/",
    featured: false,
  },
  {
    id: "opp-6",
    slug: "hult-prize-student-competition",
    title: "Hult Prize $1M Social Entrepreneurship Challenge",
    organization: "Hult Prize Foundation",
    category: "Competition",
    fundingType: "Fully Funded",
    eligibleRegion: "Global Universities",
    educationLevel: "Undergraduate",
    deadline: "2026-12-30",
    location: "Regional Finals across London, Dubai, Nairobi, Boston",
    description:
      "The world’s largest student social entrepreneurship competition. Student teams build scalable social enterprises that address pressing global challenges, competing for a $1,000,000 equity-free grand prize.",
    benefits: [
      "$1,000,000 USD grant for the global winning team",
      "Mentorship from leading global venture capitalists",
      "Fully sponsored travel to global accelerator and finals",
    ],
    eligibility: [
      "Team of 3 to 5 students currently enrolled in university",
      "Innovative business idea addressing this year's SDG challenge",
    ],
    officialLink: "https://www.hultprize.org/",
    featured: false,
  },
];

export const STUDENT_STORIES = [
  {
    name: "Chiamaka N.",
    role: "Growth Beyond Grades Alumni (Cohort 1)",
    country: "Nigeria",
    quote:
      "TSGH completely shifted my perspective on what it means to prepare for life after university. Through the Growth Beyond Grades initiative, I refined my CV, gained leadership clarity, and secured my first remote internship!",
    image: "/images/IMG-20261030-WA0057.jpg",
    badge: "Secured Internship",
  },
  {
    name: "Emmanuel K.",
    role: "Youth Changemaker & Model UN Delegate",
    country: "Kenya",
    quote:
      "Being part of the TSGH community opened doors I didn't think were possible as an undergraduate. The opportunity hub and mentorship sessions gave me the confidence to apply for international youth summits.",
    image: "/images/IMG-20261030-WA0052.jpg",
    badge: "International Delegate",
  },
  {
    name: "David O. & Sarah A.",
    role: "SDG Community Leads",
    country: "Cameroon & Nigeria",
    quote:
      "We learned how to turn student passion into measurable community action. TSGH connects you with students across 37 countries who are driven to make a difference.",
    image: "/images/IMG-20261030-WA0049.jpg",
    badge: "SDG Changemakers",
  },
];

export const COMMUNITY_LINKS = {
  whatsapp: "https://chat.whatsapp.com/K9svkTf3bNM2HlwknLpIOH?s=cl&p=a&iam=2",
  linkedin: "https://www.linkedin.com/company/the-student-growth-hub/",
  email: "thestudentgrowthhub@gmail.com",
};

