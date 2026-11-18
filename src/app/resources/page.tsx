import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RESOURCES_DATA, Resource } from "@/data/site-data";
import {
  BookOpen,
  FileText,
  Download,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Tag,
  Share2,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Practical Student Resources & Toolkits",
  description:
    "Free practical guides, CV & resume frameworks, scholarship SOP essay masterclasses, and cold emailing toolkits designed to empower students beyond grades.",
  openGraph: {
    title: "Practical Student Resources & Toolkits | The Student Growth Hub",
    description:
      "Access free CV frameworks, winning scholarship essay guides, and community changemaking blueprints.",
  },
};

export default function ResourcesPage() {
  const featuredResource = RESOURCES_DATA.find((r) => r.featured) || RESOURCES_DATA[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50/50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200/60 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Practical Toolkits & Guides
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Actionable Knowledge to Help You{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                Thrive Beyond Grades
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Tested templates, scholarship essay frameworks, and career strategies developed from verified student outcomes across 37+ countries. 100% Free for every youth changemaker.
            </p>
          </div>
        </section>

        {/* Featured Resource Highlight */}
        {featuredResource && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
                    ★ Spotlight Toolkit
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
                    {featuredResource.category}
                  </span>
                  <span className="text-xs text-blue-200 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredResource.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  {featuredResource.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {featuredResource.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={`#${featuredResource.slug}`}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Read Full Guide Below</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-slate-400 font-medium">
                    {featuredResource.downloadsCount} students reached
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Resources Grid & Deep Content */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {RESOURCES_DATA.map((res, idx) => (
            <article
              key={res.id}
              id={res.slug}
              className="scroll-mt-28 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all space-y-8"
            >
              {/* Header Info */}
              <div className="space-y-3 border-b border-slate-100 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/60">
                      {res.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                      {res.format}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {res.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-3.5 h-3.5 text-slate-400" />
                      {res.downloadsCount} learners
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  {res.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {res.content.overview}
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Key Principles & Highlights</span>
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {res.content.keyTakeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Steps */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Step-by-Step Implementation Framework</span>
                </h4>
                <div className="grid grid-cols-1 gap-3.5">
                  {res.content.actionSteps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-200 transition-colors space-y-1"
                    >
                      <h5 className="text-sm font-bold text-slate-900">{step.title}</h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tip Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                  <strong className="font-bold text-amber-900">TSGH Pro Tip: </strong>
                  {res.content.proTip}
                </div>
              </div>

              {/* Tags & Community Sharing */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
                  {res.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href="/get-involved"
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Request 1-on-1 Mentorship</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Need Personalized Guidance on Your Applications?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto font-normal">
              Join over 1,500 students in the official TSGH WhatsApp Community or connect with peer advisors who have won international scholarships.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href="https://chat.whatsapp.com/K9svkTf3bNM2HlwknLpIOH?s=cl&p=a&iam=2"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all shadow-md"
              >
                Join WhatsApp Community
              </a>
              <Link
                href="/opportunities"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20"
              >
                Explore Live Opportunities
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
