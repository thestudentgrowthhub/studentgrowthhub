import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { Chatbot } from "@/components/Chatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://studentgrowthhub.org"),
  title: "The Student Growth Hub (TSGH) | Beyond Grades. Beyond Limitations.",
  description:
    "A global youth-led student development platform empowering students across 37+ countries with access to scholarships, internships, leadership fellowships, and career clarity.",
  keywords: [
    "student growth hub",
    "TSGH",
    "scholarships for african students",
    "fellowships",
    "internships",
    "Growth Beyond Grades",
    "youth development",
    "student mentorship",
  ],
  authors: [{ name: "The Student Growth Hub Team" }],
  icons: {
    icon: "/images/tsgh-official-logo.jpg",
    apple: "/images/tsgh-official-logo.jpg",
  },
  openGraph: {
    title: "The Student Growth Hub | Beyond Grades. Beyond Limitations.",
    description:
      "Empowering students across 37+ countries with scholarships, fellowships, employability skills, and transformative networks.",
    url: "https://studentgrowthhub.org",
    siteName: "The Student Growth Hub",
    images: [
      {
        url: "/images/tsgh-official-logo.jpg",
        width: 640,
        height: 640,
        alt: "The Student Growth Hub Logo",
      },
    ],
    locale: "en_US",
    type: "website",
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
      <body className="font-sans antialiased selection:bg-blue-600 selection:text-white bg-slate-50 text-slate-900">
        <JsonLd />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
