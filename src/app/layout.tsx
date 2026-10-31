import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { Chatbot } from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "The Student Growth Hub | Beyond Grades. Beyond Limitations.",
    description:
      "Empowering students across 37+ countries with scholarships, fellowships, employability skills, and transformative networks.",
    url: "https://studentgrowthhub.org",
    siteName: "The Student Growth Hub",
    images: [
      {
        url: "/images/logo.jpg",
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
  themeColor: "#0f172a",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-orange-500 selection:text-white`}
      >
        <JsonLd />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
