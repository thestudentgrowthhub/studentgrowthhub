import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProgramsSection } from "@/components/ProgramsSection";
import { CommunityCTA } from "@/components/CommunityCTA";
import { COMMUNITY_LINKS } from "@/data/site-data";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Programs Header */}
        <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 bg-ambient-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <span className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                Action-Oriented Learning
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Empowerment Programs Built for Real-World Impact
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
                From employability and mental resilience cohorts to virtual work simulations and monthly expert masterclasses, TSGH equips young people with the competence to lead.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Detailed Showcase */}
        <ProgramsSection />

        {/* Partnership Callout Banner (Vibrant Royal Blue & Emerald instead of Black) */}
        <section className="py-20 bg-soft-mesh border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-600 text-white p-8 sm:p-12 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl space-y-4 text-center lg:text-left">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-200 block">
                  Institutional Partnerships
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  Partner With TSGH to Empower the Next Generation
                </h3>
                <p className="text-base sm:text-lg text-blue-50 leading-relaxed font-normal">
                  We collaborate with organizations, universities, and foundations (like The Reboot Wellbeing Foundation and Kryptr) to design high-impact student training programs across 37+ countries.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                <Link
                  href="/get-involved?tab=partner"
                  className="min-h-[50px] px-8 py-4 rounded-2xl font-bold text-base bg-white text-blue-700 hover:bg-blue-50 transition-all text-center shadow-lg"
                >
                  Become a Partner
                </Link>
                <a
                  href={COMMUNITY_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[50px] px-8 py-4 rounded-2xl font-bold text-base bg-emerald-500 hover:bg-emerald-400 text-white transition-all text-center shadow-lg"
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
