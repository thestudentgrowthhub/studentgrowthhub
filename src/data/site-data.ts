export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  organization: string;
  category:
    | "Scholarship"
    | "Internship"
    | "Fellowship"
    | "Leadership"
    | "Conference"
    | "Competition";
  fundingType: "Fully Funded" | "Partially Funded" | "Free / Stipend";
  eligibleRegion: string;
  educationLevel: "Undergraduate" | "Postgraduate" | "All Levels" | "High School & Undergrad";
  deadline: string;
  location: string;
  description: string;
  benefits: string[];
  eligibility: string[];
  officialLink: string;
  featured: boolean;
}

export interface Program {
  id: string;
  title: string;
  badge: string;
  partner: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  ctaText: string;
  ctaLink: string;
  image: string;
  status: string;
}

export interface Pillar {
  number: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
  image: string;
}

export const IMPACT_METRICS = [
  {
    value: "19K+",
    numericValue: 19000,
    suffix: "+",
    label: "LinkedIn Followers",
  },
  {
    value: "37",
    numericValue: 37,
    suffix: "",
    label: "Countries Reached",
  },
  {
    value: "1,500+",
    numericValue: 1500,
    suffix: "+",
    label: "WhatsApp Community Members",
  },
  {
    value: "250+",
    numericValue: 250,
    suffix: "+",
    label: "Opportunity Outcomes",
  },
];

export const STRATEGIC_PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Academic Excellence",
    description:
      "Helping students develop effective study habits, learning strategies, academic confidence, and the mindset to excel.",
    iconName: "GraduationCap",
    highlight: "Study Habits & Academic Confidence",
    image: "/images/summit-award-certificate-winners.jpg",
  },
  {
    number: "02",
    title: "Career & Employability Development",
    description:
      "Equipping students with practical skills, CV development, personal branding, and workplace readiness through The Growth Beyond Grades initiative in partnership with the Reboot Wellbeing and Empowerment Foundation.",
    iconName: "Briefcase",
    highlight: "Growth Beyond Grades × Reboot Foundation",
    image: "/images/employability-training-logbook-session.jpg",
  },
  {
    number: "03",
    title: "Leadership & Personal Development",
    description:
      "Developing leadership capacity, confidence, communication, and problem-solving abilities.",
    iconName: "Award",
    highlight: "Confidence, Communication & Problem-Solving",
    image: "/images/model-un-summit-boardroom.jpg",
  },
  {
    number: "04",
    title: "Digital Skills & Innovation",
    description:
      "Promoting digital literacy, AI literacy, innovation, and responsible technology use.",
    iconName: "Cpu",
    highlight: "Digital Literacy, AI & Innovation",
    image: "/images/african-innovation-hub-delegates.jpg",
  },
  {
    number: "05",
    title: "Mentorship & Networking",
    description:
      "Connecting students with mentors, professionals, peers, and supportive communities.",
    iconName: "Users",
    highlight: "Mentors, Professionals & Peer Networks",
    image: "/images/female-leaders-mentorship-meetup.jpg",
  },
  {
    number: "06",
    title: "Social Impact & Community Engagement",
    description:
      "Encouraging students to develop initiatives, contribute to their communities, and become changemakers.",
    iconName: "Globe",
    highlight: "Community Initiatives & Changemaking",
    image: "/images/grassroots-climate-sdg-school-drive.jpg",
  },
];

export const FLAGSHIP_PROGRAMS: Program[] = [
  {
    id: "growth-beyond-grades",
    title: "Growth Beyond Grades",
    badge: "Flagship Cohort Program",
    partner: "In Partnership with The Reboot Wellbeing and Empowerment Foundation",
    tagline:
      "A student development program focused on employability, leadership, career clarity, and personal development.",
    description:
      "Cohort 1 brought together 30 students across 5 countries including Nigeria, Cameroon, Kenya, Zimbabwe, and Bolivia. They were trained for 6 weeks on mental resilience and wellbeing, leadership and communication skills, career readiness and employability, and personal growth awareness. Cohort 2 of 50 students across 12 countries is currently ongoing.",
    metrics: [
      { label: "Cohort 1", value: "30 Students (5 Countries)" },
      { label: "Cohort 2", value: "50 Students (12 Countries)" },
      { label: "Duration", value: "6-Week Training" },
    ],
    highlights: [
      "Reflection and Growth sessions",
      "Employability skills training",
      "Career clarity workshops",
      "Supportive peer learning environment",
    ],
    ctaText: "Join Our Community for Updates",
    ctaLink: "https://chat.whatsapp.com/K9svkTf3bNM2HlwknLpIOH?s=cl&p=a&iam=2",
    image: "/images/un-women-nile-university-forum.jpg",
    status: "Cohort 2 Ongoing",
  },
  {
    id: "elite-campus",
    title: "ELITE Campus — The Student Growth Hub × Kryptr",
    badge: "Virtual Work Experience",
    partner: "The Student Growth Hub × Kryptr",
    tagline:
      "Every job is asking for experience. Nobody is willing to give you experience. This is what we've all been missing — real work experience.",
    description:
      "ELITE Campus by The Student Growth Hub & Kryptr is a 3-week virtual work experience program designed to help students build their portfolio and CV, gain practical workplace experience, and access paid internship opportunities.",
    metrics: [
      { label: "Program Length", value: "3 Weeks Virtual" },
      { label: "Weekly Commitment", value: "Just 3 Hours / Week" },
      { label: "First Month", value: "FREE (Future Cohorts Paid)" },
    ],
    highlights: [
      "Just 3 hours a week commitment",
      "Build your portfolio and CV with real work experience",
      "Get access to paid internship opportunities",
      "FREE for the 1st month (Sign up at app.kryptr.co)",
    ],
    ctaText: "Sign Up on Kryptr (app.kryptr.co)",
    ctaLink: "https://app.kryptr.co",
    image: "/images/african-innovation-hub-delegates.jpg",
    status: "Open for Registration",
  },
  {
    id: "webinars",
    title: "Student Development Webinars",
    badge: "Monthly Learning Series",
    partner: "Global Speakers, Educators & Changemakers",
    tagline:
      "A monthly learning series featuring professionals, educators, entrepreneurs, and young changemakers.",
    description:
      "Our interactive webinars, workshops, and conferences connect students directly with experienced professionals, educators, and fellow youth leaders to learn practical academic, career, and leadership strategies.",
    metrics: [
      { label: "Frequency", value: "Monthly Series" },
      { label: "Format", value: "Live Workshops & Q&A" },
      { label: "Access", value: "Free for Students" },
    ],
    highlights: [
      "Live sessions with professionals, educators, and entrepreneurs",
      "Scholarship and fellowship application guidance",
      "Career development and leadership workshops",
      "Direct Q&A and networking with young changemakers",
    ],
    ctaText: "Join WhatsApp for Webinar Links",
    ctaLink: "https://chat.whatsapp.com/K9svkTf3bNM2HlwknLpIOH?s=cl&p=a&iam=2",
    image: "/images/unesco-auditorium-plenary-session.jpg",
    status: "Monthly Live Series",
  },
];

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "opp-1",
    slug: "chevening-uk-government-scholarship",
    title: "Chevening UK Government Global Scholarships",
    organization: "UK Foreign, Commonwealth & Development Office",
    category: "Scholarship",
    fundingType: "Fully Funded",
    eligibleRegion: "Global (160+ Countries)",
    educationLevel: "Postgraduate",
    deadline: "2026-11-05",
    location: "United Kingdom",
    description:
      "Chevening Scholarships enable outstanding emerging leaders from all over the world to pursue one-year master’s degrees in the UK. Fully funded including flights, accommodation, and course fees.",
    benefits: [
      "100% University tuition fees covered",
      "Monthly living stipend for accommodation and expenses",
      "Economy class return airfare to the UK",
      "Access to exclusive Chevening global networking events",
    ],
    eligibility: [
      "Be a citizen of a Chevening-eligible country or territory",
      "Hold an undergraduate degree equivalent to an upper second-class 2:1 honours",
      "Have at least 2 years (2,800 hours) of work, internship, or volunteering experience",
    ],
    officialLink: "https://www.chevening.org/scholarships/",
    featured: true,
  },
  {
    id: "opp-2",
    slug: "elite-campus-kryptr-virtual-work-experience",
    title: "ELITE Campus × Kryptr Virtual Work Experience",
    organization: "The Student Growth Hub × Kryptr",
    category: "Internship",
    fundingType: "Free / Stipend",
    eligibleRegion: "Global (All Countries)",
    educationLevel: "All Levels",
    deadline: "2026-12-15",
    location: "Remote / Online",
    description:
      "A 3-week virtual work experience program requiring just 3 hours a week. Build your portfolio and CV with real-world experience and get direct access to paid internship opportunities. Free for the first month.",
    benefits: [
      "FREE for the 1st month of enrollment",
      "Build verifiable portfolio projects and upgrade your CV",
      "Direct pipeline to paid internship opportunities",
      "Flexible 3 hours per week schedule",
    ],
    eligibility: [
      "Open to undergraduate, postgraduate, and recent graduates",
      "Commitment to 3 hours per week for 3 weeks",
      "Access to a smartphone or laptop with internet connection",
    ],
    officialLink: "https://app.kryptr.co",
    featured: true,
  },
  {
    id: "opp-3",
    slug: "mastercard-foundation-scholars-program",
    title: "Mastercard Foundation Scholars Program",
    organization: "Mastercard Foundation",
    category: "Scholarship",
    fundingType: "Fully Funded",
    eligibleRegion: "Africa & Developing Nations",
    educationLevel: "Undergraduate",
    deadline: "2026-12-01",
    location: "Partner Universities Worldwide",
    description:
      "The Mastercard Foundation Scholars Program provides academically talented yet economically marginalized young people in Africa with access to quality university education and leadership training.",
    benefits: [
      "Full tuition, textbooks, and study materials",
      "On-campus housing and nutritious meals",
      "Return airfare, visa support, and monthly stipend",
      "Mentorship, career counseling, and entrepreneurship seed support",
    ],
    eligibility: [
      "Demonstrated academic talent and commitment to giving back to your community",
      "Citizen of an eligible African or developing country",
      "Meet admission criteria at a Mastercard Foundation partner university",
    ],
    officialLink: "https://mastercardfdn.org/all/scholars/",
    featured: true,
  },
  {
    id: "opp-4",
    slug: "un-youth-leadership-fellowship",
    title: "United Nations Millennium Fellowship",
    organization: "United Nations Academic Impact & MCN",
    category: "Fellowship",
    fundingType: "Free / Stipend",
    eligibleRegion: "Global",
    educationLevel: "Undergraduate",
    deadline: "2026-11-30",
    location: "Hybrid / Campus-Based",
    description:
      "The Millennium Fellowship is a semester-long leadership development program on university campuses worldwide to advance the UN Sustainable Development Goals (SDGs).",
    benefits: [
      "Official Certificate of Recognition from UNAI and MCN",
      "Global peer networking across 150+ university campuses",
      "World-class leadership curriculum and SDG project coaching",
    ],
    eligibility: [
      "At least 18 years old and currently enrolled as an undergraduate student",
      "In good academic standing at an accredited university",
      "Passionate about community impact and the Sustainable Development Goals",
    ],
    officialLink: "https://www.millenniumfellows.org/",
    featured: true,
  },
  {
    id: "opp-5",
    slug: "google-generation-scholarship-emea",
    title: "Generation Google Scholarship (EMEA & Africa)",
    organization: "Google",
    category: "Scholarship",
    fundingType: "Fully Funded",
    eligibleRegion: "Africa, Europe & Middle East",
    educationLevel: "Undergraduate",
    deadline: "2026-12-10",
    location: "Europe, Middle East & Africa",
    description:
      "Designed to help aspiring students pursuing computer science and technology degrees excel in tech and become leaders in the field. Selected students receive €7,000 (or local equivalent).",
    benefits: [
      "€7,000 (or local currency equivalent) academic grant",
      "Invitation to Google Scholars mentorship and networking retreats",
      "Direct exposure to Google engineering recruitment pipelines",
    ],
    eligibility: [
      "Currently enrolled full-time in a Bachelor's program",
      "Studying Computer Science, Computer Engineering, or a closely related technical field",
      "Demonstrate a strong academic record and leadership in diversity & inclusion",
    ],
    officialLink: "https://buildyourfuture.withgoogle.com/scholarships",
    featured: false,
  },
  {
    id: "opp-6",
    slug: "one-young-world-summit-delegate-scholarship",
    title: "One Young World Global Summit Delegate Scholarship",
    organization: "One Young World",
    category: "Conference",
    fundingType: "Fully Funded",
    eligibleRegion: "Global",
    educationLevel: "All Levels",
    deadline: "2026-11-20",
    location: "International Host City",
    description:
      "The global forum for young leaders, bringing together 2,000+ of the brightest young changemakers from 190+ countries to accelerate social impact.",
    benefits: [
      "Full delegate access to the One Young World Summit",
      "Hotel accommodation, catering, and international return flights",
      "Lifetime membership in the One Young World Ambassador Community",
    ],
    eligibility: [
      "Aged 18 to 30 at the time of the summit",
      "Demonstrated capacity for leadership and measurable impact in your community",
      "Commitment to addressing local or global issues",
    ],
    officialLink: "https://www.oneyoungworld.com/scholarships",
    featured: false,
  },
  {
    id: "opp-7",
    slug: "afdb-young-professionals-internship",
    title: "African Development Bank (AfDB) Internship Program",
    organization: "African Development Bank Group",
    category: "Internship",
    fundingType: "Free / Stipend",
    eligibleRegion: "Africa & AfDB Member Countries",
    educationLevel: "Postgraduate",
    deadline: "2026-12-20",
    location: "Abidjan / Hybrid Across Africa",
    description:
      "Provides university students with practical exposure to development banking, economic policy, agriculture, climate finance, and digital infrastructure across the African continent.",
    benefits: [
      "Monthly stipend provided to eligible interns",
      "Hands-on project experience with international development economists",
      "Mentorship and career progression insights within multilateral institutions",
    ],
    eligibility: [
      "Aged 18 to 30 years old",
      "Currently enrolled in a Master's level degree program or recently graduated",
      "Fluent in English or French",
    ],
    officialLink: "https://www.afdb.org/en/about-us/careers/internship-programme",
    featured: false,
  },
  {
    id: "opp-8",
    slug: "hult-prize-global-student-competition",
    title: "Hult Prize $1M Global Student Entrepreneurship Challenge",
    organization: "Hult Prize Foundation",
    category: "Competition",
    fundingType: "Fully Funded",
    eligibleRegion: "Global",
    educationLevel: "Undergraduate",
    deadline: "2026-12-30",
    location: "Regional Finals Worldwide",
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

export const COMMUNITY_LINKS = {
  whatsapp: "https://chat.whatsapp.com/K9svkTf3bNM2HlwknLpIOH?s=cl&p=a&iam=2",
  linkedin: "https://www.linkedin.com/company/the-student-growth-hub/",
  email: "thestudentgrowthhub@gmail.com",
};
