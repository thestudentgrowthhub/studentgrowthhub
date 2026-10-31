import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProgramsSection } from "@/components/ProgramsSection";
import { CommunityCTA } from "@/components/CommunityCTA";
import { COMMUNITY_LINKS } from "@/data/site-data";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Programs Header */}
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Action-Oriented Learning
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                Empowerment Programs Built for Real-World Impact
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                From employability and mental resilience cohorts to virtual work simulations and monthly expert webinars, TSGH equips young people with the competence to lead.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Detailed Showcase */}
        <ProgramsSection />

        {/* Partnership Callout Banner */}
        <section className="py-16 bg-slate-100/70 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl space-y-3 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Institutional Partnerships
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Partner With TSGH to Train the Next Cohort
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We collaborate with organizations, universities, and foundations (like The Reboot Wellbeing Foundation and Kryptr) to design high-impact student training programs across 37+ countries.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <Link
                  href="/get-involved?tab=partner"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 transition-all text-center shadow-md"
                >
                  Become a Partner
                </Link>
                <a
                  href={COMMUNITY_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all text-center shadow-md"
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Community Call to Action */}
        <CommunityCTA />
      </main>

      <Footer />
    </div>
  );
}

