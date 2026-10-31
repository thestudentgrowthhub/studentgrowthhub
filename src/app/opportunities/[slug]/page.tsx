import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OPPORTUNITIES } from "@/data/site-data";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  GraduationCap,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Building,
} from "lucide-react";

export async function generateStaticParams() {
  return OPPORTUNITIES.map((opp) => ({
    slug: opp.slug,
  }));
}

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const opp = OPPORTUNITIES.find((o) => o.slug === slug);

  if (!opp) {
    notFound();
  }

  const isClosingSoon =
    new Date(opp.deadline).getTime() - new Date().getTime() < 1000 * 60 * 60 * 24 * 30;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb & Back Link */}
          <div className="flex items-center justify-between">
            <Link
              href="/opportunities"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Opportunities Hub</span>
            </Link>

            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Listing
            </span>
          </div>

          {/* Main Card */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8">
            
            {/* Header Area */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {opp.category}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  {opp.fundingType}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Level: {opp.educationLevel}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                {opp.title}
              </h1>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                <Building className="w-4 h-4 text-slate-400" />
                <span>{opp.organization}</span>
              </div>
            </div>

            {/* Quick Spec Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <div>
                  <div className="text-slate-400 font-medium">Eligible Region</div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">{opp.eligibleRegion}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className={`w-4 h-4 shrink-0 ${isClosingSoon ? "text-rose-500" : "text-amber-500"}`} />
                <div>
                  <div className="text-slate-400 font-medium">Application Deadline</div>
                  <div className={`font-bold ${isClosingSoon ? "text-rose-600 dark:text-rose-400" : "text-slate-800 dark:text-slate-200"}`}>
                    {opp.deadline}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <div className="text-slate-400 font-medium">Location</div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">{opp.location}</div>
                </div>
              </div>
            </div>

            {/* Opportunity Overview */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Program Overview</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {opp.description}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Benefits &amp; Financial Coverage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {opp.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50/60 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Eligibility Criteria</h3>
              <ul className="space-y-2.5">
                {opp.eligibility.map((el, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Always submit your application directly on the official host website.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={opp.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all"
                >
                  <span>Apply on Official Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

