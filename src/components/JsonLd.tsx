export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "The Student Growth Hub",
    "alternateName": "TSGH",
    "url": "https://studentgrowthhub.org",
    "logo": "https://studentgrowthhub.org/images/logo.jpg",
    "description":
      "A global youth-led student development platform established to help students grow beyond the classroom through access to scholarships, internships, skills, and supportive networks across 37+ countries.",
    "slogan": "Beyond Grades. Beyond Limitations.",
    "sameAs": [
      "https://www.linkedin.com/company/the-student-growth-hub/",
      "https://chat.whatsapp.com/K9svkTf3bNM2HlwknLpIOH?s=cl&p=a&iam=2"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Student Community Coordinator",
      "email": "thestudentgrowthhub@gmail.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

