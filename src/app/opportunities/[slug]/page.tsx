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
    <div className="min-h-screen flex flex-col bg-slate-50/40 text-slate-900">
      <Navbar />

      <main className="flex-1 py-14 sm:py-20 bg-ambient-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb & Back Link */}
          <div className="flex items-center justify-between">
            <Link
              href="/opportunities"
              className="inline-flex items-center text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <span>Back to Opportunities Hub</span>
            </Link>

            <span className="text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Verified Listing
            </span>
          </div>

          {/* Main Card */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-12 shadow-sm space-y-8">
            
            {/* Header Area */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {opp.category}
                </span>
                <span className="text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  {opp.fundingType}
                </span>
                <span className="text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  Level: {opp.educationLevel}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {opp.title}
              </h1>

              <div className="flex items-center gap-2 text-base font-bold text-slate-600">
                <Building className="w-5 h-5 text-slate-400" />
                <span>{opp.organization}</span>
              </div>
            </div>

            {/* Quick Spec Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/70 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <div>
                  <div className="text-slate-400 font-medium text-xs">Eligible Region</div>
                  <div className="font-bold text-slate-800">{opp.eligibleRegion}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className={`w-5 h-5 shrink-0 ${isClosingSoon ? "text-rose-500" : "text-amber-500"}`} />
                <div>
                  <div className="text-slate-400 font-medium text-xs">Application Deadline</div>
                  <div className={`font-bold ${isClosingSoon ? "text-rose-600" : "text-slate-800"}`}>
                    {opp.deadline}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-emerald-500 shrink-0" />
                <div>
                  <div className="text-slate-400 font-medium text-xs">Location</div>
                  <div className="font-bold text-slate-800">{opp.location}</div>
                </div>
              </div>
            </div>

            {/* Opportunity Overview */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Program Overview</h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {opp.description}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Benefits &amp; Financial Coverage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {opp.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 bg-slate-50/70 p-4 rounded-2xl border border-slate-200/60 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Eligibility Criteria</h3>
              <ul className="space-y-3">
                {opp.eligibility.map((el, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-slate-700 font-normal leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="text-sm text-slate-500 font-normal">
                Always submit your application directly on the official host website.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={opp.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-xl transition-all"
                >
                  <span>Apply on Official Portal</span>
                  <ExternalLink className="w-5 h-5" />
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
