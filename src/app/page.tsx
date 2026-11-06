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
import { ArrowRight, Compass } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* 4.1 Hero Section */}
        <Hero />

        {/* 4.2 Who We Are */}
        <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Large, Full-Size Photo Showcase */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200/80">
                  <Image
                    src="/images/tsgh-founders-sdg-champions.jpg"
                    alt="The Student Growth Hub Founder Greatwisdom Nwigwe & Student Changemakers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider bg-emerald-600 px-3 py-1 rounded-full inline-block mb-1.5">
                      Founded by Greatwisdom Nwigwe
                    </span>
                    <p className="text-base sm:text-lg font-bold leading-snug">
                      Equipping students to excel academically and thrive beyond their grades.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exact Narrative from Blueprint Section 1 & 4.2 */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs sm:text-sm font-bold">
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>Who We Are</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  More Than an Academic Community.
                </h2>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  The Student Growth Hub is a youth-led student development platform established by Greatwisdom Nwigwe to help students grow beyond the classroom. We believe that academic excellence, while important, is only one part of a student&apos;s development. Students also need access to opportunities, practical skills, mentorship, leadership experiences, supportive networks, and the right resources to prepare for life beyond school.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  The Student Growth Hub exists to bridge this gap by creating a platform where students can discover opportunities, develop essential skills, connect with like-minded individuals, access learning resources, and become intentional about their personal, academic, and professional growth.
                </p>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="min-h-[50px] inline-flex items-center px-7 py-3.5 rounded-2xl font-bold text-base bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md hover:shadow-lg group"
                  >
                    <span>About Us</span>
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4.3 Our Impact (Compact 4-Metric Bar) */}
        <ImpactStats />

        {/* 4.4 What We Do (The 6 Strategic Pillars) */}
        <PillarsSection />

        {/* 4.5 Our Programs and Initiatives */}
        <ProgramsSection />

        {/* 4.6 Opportunities Hub */}
        <section className="py-20 sm:py-24 bg-soft-mesh border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">
                Opportunities Hub
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Discover Global Opportunities
              </h2>
              <p className="text-base sm:text-xl text-slate-600 mt-3 leading-relaxed">
                Explore scholarships and grants, internships, fellowships, leadership programs, conferences, competitions, and mentorship opportunities.
              </p>
            </div>

            <OpportunitiesFeed limit={6} />
          </div>
        </section>

        {/* 4.7 Community Gallery & Student Stories */}
        <StudentStories />

        {/* FAQ Section */}
        <FaqSection />

        {/* 4.8 Join Our Community */}
        <CommunityCTA />
      </main>

      <Footer />
    </div>
  );
}
