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

export interface Resource {
  id: string;
  slug: string;
  title: string;
  category: "Career & CV" | "Scholarship Guides" | "Academic Success" | "Leadership & Changemaking";
  description: string;
  readTime: string;
  downloadsCount: string;
  format: "Interactive Guide" | "Checklist" | "Template / Framework";
  tags: string[];
  featured: boolean;
  content: {
    overview: string;
    keyTakeaways: string[];
    actionSteps: { title: string; detail: string }[];
    proTip: string;
  };
}

export const RESOURCES_DATA: Resource[] = [
  {
    id: "res-1",
    slug: "high-impact-student-cv-template",
    title: "The High-Impact Undergraduate CV & Resume Framework",
    category: "Career & CV",
    description:
      "A tested, ATS-compliant CV structure designed for students and recent graduates applying to international internships, graduate trainee roles, and fellowships.",
    readTime: "6 min read",
    downloadsCount: "2.4K+",
    format: "Template / Framework",
    tags: ["CV / Resume", "Employability", "ATS", "Career"],
    featured: true,
    content: {
      overview:
        "Most student resumes fail because they list coursework rather than measurable outcomes. Whether you have 3 years of work experience or zero, this framework shows how to frame campus leadership, class projects, and community volunteer work into quantifiable achievements.",
      keyTakeaways: [
        "Use the Google XYZ Formula: 'Accomplished [X] as measured by [Y], by doing [Z]'.",
        "Keep your student CV strictly to 1 page unless you have 5+ years of verified professional experience.",
        "Avoid multi-column tables, fancy graphics, or progress bars that break Applicant Tracking Systems (ATS).",
        "Highlight verified projects, relevant technical proficiencies, and community leadership.",
      ],
      actionSteps: [
        {
          title: "1. Header & Contact Clarity",
          detail: "Include your Full Name, Professional Email (e.g. firstname.lastname@gmail.com), Phone Number with country code, LinkedIn URL, and City/Country. Do not include photos, marital status, or age.",
        },
        {
          title: "2. Education & Academic Highlights",
          detail: "List Institution, Degree title, Expected Graduation Year, and relevant honors (e.g., First Class / Dean's List). If your GPA is strong, include it; if not, emphasize relevant coursework and capstone projects.",
        },
        {
          title: "3. Project & Leadership Experience",
          detail: "Dedicate 3-4 bullet points per role starting with active verbs (spearheaded, formulated, optimized, facilitated). Always tie actions to outcomes.",
        },
      ],
      proTip: "Never submit a CV as a .docx file. Always export as a clean, searchable PDF with the filename 'FirstName_LastName_CV.pdf'.",
    },
  },
  {
    id: "res-2",
    slug: "international-scholarship-sop-toolkit",
    title: "Winning Statement of Purpose (SOP) & Essay Masterclass",
    category: "Scholarship Guides",
    description:
      "Comprehensive breakdown of how to craft persuasive personal statements and motivation letters for Chevening, Mastercard Foundation, Erasmus Mundus, and global scholarships.",
    readTime: "8 min read",
    downloadsCount: "3.1K+",
    format: "Interactive Guide",
    tags: ["Scholarships", "SOP", "Study Abroad", "Essay"],
    featured: true,
    content: {
      overview:
        "Scholarship review committees read thousands of essays. What differentiates winning applicants is not just high GPA, but a coherent narrative arc connecting your past experiences, current academic ambition, and future community impact.",
      keyTakeaways: [
        "Open with a defining moment or intellectual catalyst—never start with generic quotes like 'Education is the most powerful weapon'.",
        "Directly answer: Why this specific degree? Why this country/university? And why NOW?",
        "Prove your post-graduation return-on-investment: How will you deploy your knowledge to tackle SDG issues in your home community?",
        "Address academic weaknesses or gaps proactively by framing them through resilience and lessons learned.",
      ],
      actionSteps: [
        {
          title: "1. The Narrative Hook (Paragraph 1)",
          detail: "Describe a specific challenge or real-world problem you witnessed that sparked your academic interest.",
        },
        {
          title: "2. Academic Preparation & Practical Proof (Paragraphs 2-3)",
          detail: "Detail your undergraduate research, internships, and skill foundation that prove you are academically ready for intense study.",
        },
        {
          title: "3. The Institutional Match (Paragraph 4)",
          detail: "Name specific professors, specialized modules, research labs, or university centers that make this program unique for your goals.",
        },
        {
          title: "4. The Long-Term Impact Plan (Paragraph 5)",
          detail: "Detail your concrete 5-year and 10-year roadmap showing how you will give back and contribute to societal growth.",
        },
      ],
      proTip: "Have at least 2 mentors or peers review your essay for tone and flow before submission. Avoid passive voice.",
    },
  },
  {
    id: "res-3",
    slug: "cold-emailing-guide-for-fellowships-internships",
    title: "The Student Cold Emailing Playbook for Internships & Research",
    category: "Career & CV",
    description:
      "Exact email templates and outreach strategies to connect with professors, hiring managers, and industry leaders without being ignored.",
    readTime: "5 min read",
    downloadsCount: "1.8K+",
    format: "Template / Framework",
    tags: ["Networking", "Internships", "Cold Email", "Mentorship"],
    featured: false,
    content: {
      overview:
        "Over 70% of high-impact research assistantships and startup internships are never publicly advertised—they exist in the 'hidden job market'. Cold emailing is the fastest way for proactive students to unlock these opportunities.",
      keyTakeaways: [
        "Keep your email under 150 words: brevity signals respect for the recipient's time.",
        "Hyper-personalize the first two sentences: cite their recent publication, talk, or company milestone.",
        "Include a specific, low-friction Call to Action (e.g. 'A brief 10-minute introductory call' or 'A 2-question inquiry').",
        "Follow up politely exactly 5 to 7 business days later if you don't receive a reply.",
      ],
      actionSteps: [
        {
          title: "1. Research & Targeting",
          detail: "Identify 10-15 professionals whose work directly aligns with your career aspirations. Find their direct email via company directories or tools like Hunter.io.",
        },
        {
          title: "2. The 3-Sentence Pitch Structure",
          detail: "Sentence 1: Who you are and why you admire their specific work. Sentence 2: The unique skills or perspective you bring. Sentence 3: The low-friction ask.",
        },
        {
          title: "3. The Follow-Up Cadence",
          detail: "80% of responses come on the first follow-up. Keep follow-ups gracious and bump the previous thread without guilt or pressure.",
        },
      ],
      proTip: "Send outreach emails on Tuesday or Thursday mornings between 8:30 AM and 10:00 AM in the recipient's local time zone.",
    },
  },
  {
    id: "res-4",
    slug: "global-scholarship-readiness-checklist",
    title: "The 12-Month Global Scholarship Readiness Checklist",
    category: "Scholarship Guides",
    description:
      "A month-by-month roadmap to prepare documents, language tests, recommendation letters, and leadership portfolios well ahead of global deadlines.",
    readTime: "7 min read",
    downloadsCount: "1.5K+",
    format: "Checklist",
    tags: ["Checklist", "Planning", "Scholarships", "Timeline"],
    featured: false,
    content: {
      overview:
        "Applying to international opportunities is a marathon. Starting 12 to 9 months before deadlines prevents last-minute transcript delays, rushed recommendation letters, and stressful application fees.",
      keyTakeaways: [
        "Secure unofficial and official transcripts from your registrar at least 6 months ahead.",
        "Build genuine relationships with 3 academic and professional referees who know your work deeply.",
        "Schedule English proficiency tests (IELTS/TOEFL) early or confirm waiver eligibility from your institution.",
        "Track all deadlines in a centralized spreadsheet with requirements, links, and submission dates.",
      ],
      actionSteps: [
        {
          title: "Months 12-9: Discovery & Profile Audit",
          detail: "Identify 5 target programs (2 reach, 2 target, 1 safety). Audit eligibility and language prerequisites.",
        },
        {
          title: "Months 8-6: Testing & Documents",
          detail: "Order transcripts, international passport renewals, and take required standardized assessments.",
        },
        {
          title: "Months 5-3: Essay Drafting & Referees",
          detail: "Provide your referees with your CV and draft essays so their recommendation letters align with your story.",
        },
        {
          title: "Months 2-1: Final Polish & Early Submission",
          detail: "Submit applications at least 1 week before the deadline to avoid server crashes during final deadline hours.",
        },
      ],
      proTip: "Never wait until the final deadline day. Scholarship portals regularly experience technical downtime under heavy global traffic.",
    },
  },
  {
    id: "res-5",
    slug: "community-impact-sdg-project-blueprint",
    title: "How to Design & Lead an Impactful Youth Community Initiative",
    category: "Leadership & Changemaking",
    description:
      "A step-by-step blueprint to conceptualize, launch, and measure local community projects aligned with the United Nations Sustainable Development Goals (SDGs).",
    readTime: "9 min read",
    downloadsCount: "1.1K+",
    format: "Interactive Guide",
    tags: ["Leadership", "SDGs", "Social Impact", "Initiatives"],
    featured: false,
    content: {
      overview:
        "Top fellowship programs (like Chevening, Rhodes, and Mandela Washington) look for evidence of changemaking. You do not need a registered NGO or millions in funding to create demonstrable social impact.",
      keyTakeaways: [
        "Focus on depth over breadth: solve one specific problem for 20-50 people exceptionally well rather than attempting a vague national campaign.",
        "Align with a specific UN SDG target (e.g. SDG 4: Quality Education, SDG 8: Decent Work, SDG 13: Climate Action).",
        "Document everything with high-resolution photos, attendance registries, and pre/post participant feedback.",
        "Partner with local schools, youth clubs, or community centers to build grassroots trust.",
      ],
      actionSteps: [
        {
          title: "1. Needs Assessment & Community Listening",
          detail: "Conduct 10-15 brief interviews with community members to validate what they actually need before designing solutions.",
        },
        {
          title: "2. The Minimum Viable Initiative (MVI)",
          detail: "Run a 1-day workshop, book donation drive, or mentorship session. Test your assumptions and gather feedback.",
        },
        {
          title: "3. Measuring & Reporting Outcomes",
          detail: "Track quantitative metrics (students trained, books distributed, hours delivered) and qualitative impact quotes.",
        },
      ],
      proTip: "Capture high-quality media during your project. Visual evidence and testimonials are crucial when applying for seed grants and fellowships.",
    },
  },
];

export const COMMUNITY_LINKS = {
  whatsapp: "https://chat.whatsapp.com/K9svkTf3bNM2HlwknLpIOH?s=cl&p=a&iam=2",
  linkedin: "https://www.linkedin.com/company/the-student-growth-hub/",
  email: "thestudentgrowthhub@gmail.com",
};
