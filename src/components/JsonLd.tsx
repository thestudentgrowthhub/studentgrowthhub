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
        "founder": {
          "@type": "Person",
          "@id": "https://studentgrowthhub.org/#founder",
          "name": "Greatwisdom Nwigwe",
          "jobTitle": "Founder & Convener",
          "description": "Founder and Convener of The Student Growth Hub."
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
        "@id": "https://studentgrowthhub.org/#founder",
        "name": "Greatwisdom Nwigwe",
        "jobTitle": "Founder & Convener",
        "worksFor": {
          "@id": "https://studentgrowthhub.org/#organization"
        },
        "description":
          "Greatwisdom Nwigwe is the Founder and Convener of The Student Growth Hub, empowering students across 37+ countries with access to scholarships, internships, skills, and mentorship."
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
        "copyrightHolder": {
          "@id": "https://studentgrowthhub.org/#organization"
        },
        "creator": {
          "@id": "https://studentgrowthhub.org/#founder"
        },
        "sdPublisher": {
          "@type": "Person",
          "name": "Marvellous Adepoju",
          "alternateName": "Marvel Develops",
          "jobTitle": "Software Developer & AI Automation Engineer (Platform Developer)",
          "description":
            "External Software Developer and AI Automation Engineer who developed the web platform. Builds custom software, websites, apps, and AI automations for businesses.",
          "url": "https://marveldevelops.com",
          "sameAs": [
            "https://marveldevelops.com",
            "https://www.linkedin.com/in/marveldevelops"
          ]
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
