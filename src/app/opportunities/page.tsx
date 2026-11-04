import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OpportunitiesFeed } from "@/components/OpportunitiesFeed";
import { CommunityCTA } from "@/components/CommunityCTA";
import { ShieldCheck, Bell, Award } from "lucide-react";

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Hub Header */}
        <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 bg-ambient-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs sm:text-sm font-bold">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Verified Opportunities Hub</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Scholarships, Fellowships &amp; Internships
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
                Filter by funding type, category, and eligible region to discover fully funded educational opportunities, youth leadership summits, and remote work experience.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-600 pt-3">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" /> 100% Free &amp; Verified Links
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-500" /> Updated Continuously
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Feed Container */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <OpportunitiesFeed />
          </div>
        </section>

        {/* Community Call to Action */}
        <CommunityCTA />
      </main>

      <Footer />
    </div>
  );
}
