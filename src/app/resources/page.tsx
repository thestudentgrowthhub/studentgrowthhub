"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RESOURCES_DATA, Resource } from "@/data/site-data";
import {
  FileText,
  Download,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Tag,
  Copy,
  Check,
  Lightbulb,
  Search,
  Filter,
  Bookmark,
} from "lucide-react";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    "all",
    "Career & CV",
    "Scholarship Guides",
    "Academic Success",
    "Leadership & Changemaking",
  ];

  const handleCopy = (res: Resource) => {
    const textToCopy = `[The Student Growth Hub Toolkit] ${res.title}\n\nOVERVIEW:\n${res.content.overview}\n\nKEY TAKEAWAYS:\n${res.content.keyTakeaways.map((t) => `• ${t}`).join("\n")}\n\nACTION STEPS:\n${res.content.actionSteps.map((s) => `${s.title}: ${s.detail}`).join("\n\n")}\n\nPRO TIP: ${res.content.proTip}\n\nAccess more student growth toolkits at: https://studentgrowthhub.org/resources`;
    
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(textToCopy);
      setCopiedId(res.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const filteredResources = RESOURCES_DATA.filter((r) => {
    const matchesCategory =
      selectedCategory === "all" || r.category === selectedCategory;
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredResource = RESOURCES_DATA.find((r) => r.featured) || RESOURCES_DATA[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero with Radial Glow */}
        <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-slate-50/50 border-b border-slate-200/80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-400/10 via-emerald-400/10 to-indigo-400/10 blur-3xl pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100/80 text-blue-800 border border-blue-200/60 mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Practical Toolkits & Guides
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Actionable Frameworks to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                Thrive Beyond Grades
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Battle-tested frameworks, CV templates, and scholarship essay guides developed from 250+ verified student outcomes across 37+ countries.
            </p>

            {/* Live Search and Filter Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-2xl mx-auto">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search templates, SOP guides, CVs, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-sm scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {cat === "all" ? "All Resources" : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resource Highlight */}
        {featuredResource && selectedCategory === "all" && searchQuery === "" && (
          <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white shadow-2xl relative overflow-hidden group border border-blue-800/50 hover:shadow-blue-900/20 transition-all duration-300">
              <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />
              
              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-xs">
                    ★ Spotlight Toolkit
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-xs">
                    {featuredResource.category}
                  </span>
                  <span className="text-xs text-blue-200 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredResource.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug">
                  {featuredResource.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {featuredResource.description}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a
                    href={`#${featuredResource.slug}`}
                    className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Read Toolkit Below</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleCopy(featuredResource)}
                    className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-semibold text-sm transition-all duration-200 border border-white/20 inline-flex items-center gap-2 cursor-pointer"
                  >
                    {copiedId === featuredResource.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Framework</span>
                      </>
                    )}
                  </button>
                  <span className="text-xs text-slate-400 font-medium">
                    {featuredResource.downloadsCount} students reached
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Resources Grid & Deep Content */}
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredResources.length === 0 ? (
            <div className="p-16 text-center bg-white rounded-3xl border border-slate-200 shadow-xs max-w-md mx-auto space-y-3">
              <FileText className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="text-base font-bold text-slate-800">No matching toolkits found</h4>
              <p className="text-xs text-slate-500">
                Try searching for another keyword or clear your filter to view all toolkits.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 text-xs font-semibold hover:bg-blue-100 transition-colors"
              >
                Clear Search &amp; Filters
              </button>
            </div>
          ) : (
            filteredResources.map((res) => (
              <article
                key={res.id}
                id={res.slug}
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 space-y-8 group"
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

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleCopy(res)}
                        className="px-3.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 active:scale-[0.98] text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-2xs"
                        title="Copy full toolkit to clipboard"
                      >
                        {copiedId === res.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-bold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Toolkit</span>
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {res.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-900 transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {res.content.overview}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50/30 border border-slate-200/80 space-y-3">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Core Principles &amp; Takeaways</span>
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
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Step-by-Step Implementation Framework</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-3.5">
                    {res.content.actionSteps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all duration-200 space-y-1.5"
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
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 shadow-2xs">
                  <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                    <strong className="font-bold text-amber-900">TSGH Pro Tip: </strong>
                    {res.content.proTip}
                  </div>
                </div>

                {/* Tags & Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-slate-400 mr-1 shrink-0" />
                    {res.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href="/get-involved"
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Request 1-on-1 Review</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>

        {/* Community Bottom CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-5 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Need Personalized Mentorship on Your Applications?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto font-normal">
              Join over 1,500 students in the official TSGH WhatsApp Community or connect with peer advisors who have won international scholarships.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href="https://chat.whatsapp.com/K9svkTf3bNM2HlwknLpIOH?s=cl&p=a&iam=2"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-semibold text-sm transition-all duration-200 shadow-md cursor-pointer"
              >
                Join WhatsApp Community
              </a>
              <Link
                href="/opportunities"
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-semibold text-sm transition-all duration-200 border border-white/20 cursor-pointer"
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
