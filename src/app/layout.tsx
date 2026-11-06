import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { Chatbot } from "@/components/Chatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://studentgrowthhub.org"),
  title: {
    default: "The Student Growth Hub | Beyond Grades. Beyond Limitations.",
    template: "%s | The Student Growth Hub",
  },
  description:
    "A youth-led global student development platform empowering students across 37+ countries with scholarships, internships, fellowships, employability skills, mentorship, and supportive networks.",
  keywords: [
    "The Student Growth Hub",
    "student growth hub",
    "scholarships for students",
    "scholarships for African students",
    "international fellowships",
    "student internships",
    "Growth Beyond Grades",
    "ELITE Campus Kryptr",
    "youth leadership development",
    "student mentorship",
  ],
  authors: [
    { name: "The Student Growth Hub", url: "https://studentgrowthhub.org" },
  ],
  creator: "The Student Growth Hub",
  publisher: "The Student Growth Hub",
  alternates: {
    canonical: "https://studentgrowthhub.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/tsgh-official-logo.jpg",
    apple: "/images/tsgh-official-logo.jpg",
  },
  openGraph: {
    title: "The Student Growth Hub | Beyond Grades. Beyond Limitations.",
    description:
      "Empowering students across 37+ countries with verified scholarships, fellowships, practical employability skills, and supportive peer networks.",
    url: "https://studentgrowthhub.org",
    siteName: "The Student Growth Hub",
    images: [
      {
        url: "/images/tsgh-official-logo.jpg",
        width: 640,
        height: 640,
        alt: "The Student Growth Hub Official Emblem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Student Growth Hub | Beyond Grades. Beyond Limitations.",
    description:
      "Discover verified scholarships, internships, fellowships, and student development programs across 37+ countries.",
    images: ["/images/tsgh-official-logo.jpg"],
  },
  other: {
    "web_author": "Marvellous Adepoju | Marvel Develops (https://marveldevelops.com)",
    "developer": "Marvellous Adepoju — Software Developer & AI Automation Engineer",
    "developer:brand": "Marvel Develops",
    "developer:website": "https://marveldevelops.com",
    "developer:linkedin": "https://www.linkedin.com/in/marveldevelops",
    "developer:specialty":
      "Custom Software Development, Websites, Web & Mobile Apps, and AI Automations for Businesses",
    "designer": "Marvel Develops (https://marveldevelops.com)",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="author" href="https://marveldevelops.com" />
        <link type="text/plain" rel="author" href="/humans.txt" />
      </head>
      <body className="font-sans antialiased selection:bg-blue-600 selection:text-white bg-slate-50 text-slate-900">
        <JsonLd />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
