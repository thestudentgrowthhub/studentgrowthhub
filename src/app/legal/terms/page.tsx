import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="flex-1 py-14 max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        <Link href="/" className="inline-flex items-center text-xs font-semibold text-blue-600 hover:underline">
          <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Home
        </Link>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Terms and Conditions</h1>
        <div className="prose dark:prose-invert text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
          <p>
            Welcome to The Student Growth Hub (TSGH). By accessing our website, community groups, or programs, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Opportunity Listings &amp; Third-Party Links</h3>
          <p>
            TSGH curates verified scholarships, fellowships, and job listings from around the globe. While we make every effort to verify legitimacy, application decisions and funding terms are strictly governed by the official organizing bodies. TSGH never charges application fees for external opportunities.
          </p>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Community Code of Conduct</h3>
          <p>
            All community spaces (including WhatsApp groups and webinar sessions) operate on mutual respect, academic integrity, and support. Harassment, spam, or misleading promotional links will result in immediate removal.
          </p>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Questions</h3>
          <p>
            For any inquiries regarding these terms, contact us at <strong>thestudentgrowthhub@gmail.com</strong>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

