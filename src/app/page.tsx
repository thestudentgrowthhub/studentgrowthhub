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
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Impact Numbers */}
        <ImpactStats />

        {/* Section 4.2: Who We Are */}
        <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Photo Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
                  <Image
                    src="/images/IMG-20261030-WA0049.jpg"
                    alt="The Student Growth Hub Changemakers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 px-2.5 py-0.5 rounded-full inline-block mb-1">
                      Beyond Grades
                    </span>
                    <p className="text-sm font-semibold">
                      Student Changemakers Leading SDG Impact
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Who We Are</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  More Than an Academic Community.
                </h2>

                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  The Student Growth Hub (TSGH) was established to help students grow beyond the classroom. We believe academic excellence, while important, is only one part of a student’s preparation for life.
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Students need practical workplace skills, mentorship, leadership experience, and access to life-changing opportunities. TSGH bridges this gap by creating an international ecosystem where students discover opportunities, master digital skills, and become intentional changemakers in society.
                </p>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center px-5 py-3 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all shadow-xs group"
                  >
                    <span>Read Our Full Story &amp; Leadership</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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
        <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Opportunities Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
                Discover Verified Global Opportunities
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
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
