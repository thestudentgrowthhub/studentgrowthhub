import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { PillarsSection } from "@/components/PillarsSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { OpportunitiesFeed } from "@/components/OpportunitiesFeed";
import { StudentStories } from "@/components/StudentStories";
import { FaqSection } from "@/components/FaqSection";
import { CommunityCTA } from "@/components/CommunityCTA";
import { ArrowRight, Compass, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Impact Numbers & Regional Distribution (Animated on Scroll) */}
        <ImpactStats />

        {/* Section: Who We Are */}
        <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* Dynamic Multi-Photo Collage Showcase */}
              <div className="lg:col-span-6 relative">
                <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
                  {/* Primary Large Photo */}
                  <div className="col-span-7 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200/80 group">
                    <Image
                      src="/images/tsgh-founders-sdg-champions.jpg"
                      alt="TSGH Founders & SDG Champions"
                      fill
                      sizes="(max-width: 1024px) 60vw, 340px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-600 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                        Beyond Grades
                      </span>
                      <p className="text-sm sm:text-base font-bold leading-snug">
                        Student Changemakers Leading Real SDG Impact
                      </p>
                    </div>
                  </div>

                  {/* Secondary Stacked Photos */}
                  <div className="col-span-5 space-y-3 sm:space-y-4">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-1 ring-slate-200/80 group">
                      <Image
                        src="/images/fao-un-house-student-delegates.jpg"
                        alt="FAO UN House Student Delegates"
                        fill
                        sizes="(max-width: 1024px) 40vw, 240px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-blue-900 shadow-xs truncate">
                        UN House Representation
                      </div>
                    </div>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-1 ring-slate-200/80 group">
                      <Image
                        src="/images/sdg4-quality-education-outreach.jpg"
                        alt="SDG 4 Quality Education Outreach"
                        fill
                        sizes="(max-width: 1024px) 40vw, 240px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-800 shadow-xs truncate">
                        SDG 4 Quality Education
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs sm:text-sm font-bold">
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>Who We Are</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  More Than an Academic Community.
                </h2>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  The Student Growth Hub (TSGH) was established to help students grow beyond the classroom. We believe academic excellence, while important, is only one part of a student&apos;s preparation for life.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Students need practical workplace skills, mentorship, leadership experience, and access to life-changing opportunities. TSGH bridges this gap by creating an international ecosystem where students discover verified scholarships, master digital skills, and become intentional changemakers in society.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>100% Free Verified Scholarships</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>Global Mentorship &amp; Cohorts</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/about"
                    className="min-h-[50px] inline-flex items-center px-7 py-3.5 rounded-2xl font-bold text-base bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md hover:shadow-lg group"
                  >
                    <span>Read Our Story &amp; Leadership</span>
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6 Strategic Pillars */}
        <PillarsSection />

        {/* Flagship Programs */}
        <ProgramsSection />

        {/* Opportunities Hub Spotlight */}
        <section className="py-20 sm:py-28 bg-soft-mesh border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">
                Opportunities Hub
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Discover Verified Global Opportunities
              </h2>
              <p className="text-base sm:text-xl text-slate-600 mt-3 leading-relaxed">
                Browse fully funded scholarships, internships, fellowships, and youth summits curated for ambitious students.
              </p>
            </div>

            {/* Opportunities Feed with Limit */}
            <OpportunitiesFeed limit={6} />
          </div>
        </section>

        {/* Student Testimonials & Gallery */}
        <StudentStories />

        {/* FAQ Section */}
        <FaqSection />

        {/* Community Call to Action */}
        <CommunityCTA />
      </main>

      <Footer />
    </div>
  );
}
