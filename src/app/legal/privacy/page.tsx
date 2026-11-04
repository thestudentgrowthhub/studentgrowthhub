import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="flex-1 py-14 max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        <Link href="/" className="inline-flex items-center text-xs font-semibold text-blue-600 hover:underline">
          <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Home
        </Link>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Privacy Policy</h1>
        <div className="prose dark:prose-invert text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
          <p>
            At The Student Growth Hub, accessible from our digital platforms, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by TSGH and how we use it.
          </p>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Information We Collect</h3>
          <p>
            When you subscribe to our opportunity alerts, apply for volunteer cohorts, or join our community networks, we collect voluntary information such as your name, email address, country, university, and WhatsApp contact details.
          </p>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">How We Use Your Information</h3>
          <p>
            We use the information we collect to communicate verified scholarship deadlines, manage educational workshops, coordinate training cohorts, and maintain community safety. We never sell or rent your personal data to third parties.
          </p>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Contact Us</h3>
          <p>
            If you have questions about our Privacy Policy, please reach out to us at <strong>thestudentgrowthhub@gmail.com</strong>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

