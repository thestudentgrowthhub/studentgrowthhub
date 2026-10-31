import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OpportunitiesFeed } from "@/components/OpportunitiesFeed";
import { CommunityCTA } from "@/components/CommunityCTA";
import { Sparkles, ShieldCheck, Bell } from "lucide-react";

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Hub Header */}
        <section className="py-16 lg:py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Opportunities Hub</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                Scholarships, Fellowships &amp; Internships
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Filter by country, funding type, and study level to discover fully funded educational opportunities, youth leadership summits, and remote work experience.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Manually Verified Links
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Bell className="w-4 h-4 text-orange-500" /> Updated Weekly
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Feed Container */}
        <section className="py-12">
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

