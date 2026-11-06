export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://studentgrowthhub.org/#organization",
        "name": "The Student Growth Hub",
        "url": "https://studentgrowthhub.org",
        "logo": {
          "@type": "ImageObject",
          "url": "https://studentgrowthhub.org/images/tsgh-official-logo.jpg"
        },
        "description":
          "A youth-led student development platform established to help students grow beyond the classroom through access to scholarships, internships, practical skills, mentorship, and supportive networks across 37+ countries.",
        "slogan": "Beyond Grades. Beyond Limitations. Discover. Learn. Grow. Lead.",
        "sameAs": [
          "https://www.linkedin.com/company/the-student-growth-hub/",
          "https://chat.whatsapp.com/K9svkTf3bNM2HlwknLpIOH?s=cl&p=a&iam=2"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Student Community Support",
          "email": "thestudentgrowthhub@gmail.com"
        }
      },
      {
        "@type": "Person",
        "@id": "https://marveldevelops.com/#developer",
        "name": "Marvellous Adepoju",
        "alternateName": "Marvel Develops",
        "jobTitle": "Software Developer & AI Automation Engineer",
        "description":
          "Marvellous Adepoju (Marvel Develops) is a Software Developer and AI Automation Engineer who builds custom software, high-performance websites, web and mobile apps, and AI automations for businesses.",
        "url": "https://marveldevelops.com",
        "sameAs": [
          "https://marveldevelops.com",
          "https://www.linkedin.com/in/marveldevelops"
        ],
        "worksFor": {
          "@id": "https://marveldevelops.com/#agency"
        },
        "knowsAbout": [
          "Custom Software Development",
          "AI Automation Engineering",
          "Full-Stack Web Development",
          "Mobile & Web Applications",
          "Business Process Automation"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://marveldevelops.com/#agency",
        "name": "Marvel Develops",
        "url": "https://marveldevelops.com",
        "founder": {
          "@id": "https://marveldevelops.com/#developer"
        },
        "description":
          "Marvel Develops builds custom software, modern websites, web and mobile applications, and AI automations for businesses and organizations worldwide.",
        "sameAs": [
          "https://marveldevelops.com",
          "https://www.linkedin.com/in/marveldevelops"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://studentgrowthhub.org/#website",
        "url": "https://studentgrowthhub.org",
        "name": "The Student Growth Hub",
        "description":
          "Helping students grow beyond grades with scholarships, internships, fellowships, employability training, and mentorship.",
        "publisher": {
          "@id": "https://studentgrowthhub.org/#organization"
        },
        "creator": {
          "@id": "https://marveldevelops.com/#developer"
        },
        "author": {
          "@id": "https://marveldevelops.com/#agency"
        },
        "inLanguage": "en"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
