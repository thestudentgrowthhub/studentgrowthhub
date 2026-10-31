import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImpactStats } from "@/components/ImpactStats";
import { PillarsSection } from "@/components/PillarsSection";
import { CommunityCTA } from "@/components/CommunityCTA";
import { CheckCircle2, Target, Eye, Sparkles } from "lucide-react";

const VALUES = [
  {
    title: "Student-centredness",
    description: "Putting students' real needs, aspirations, and lived experiences at the centre of everything we build.",
  },
  {
    title: "Access & Inclusion",
    description: "Breaking economic, geographic, and institutional barriers to make world-class learning and opportunities accessible to all.",
  },
  {
    title: "Growth Mindset",
    description: "Nurturing continuous curiosity, intellectual resilience, and self-improvement that goes beyond academic marks.",
  },
  {
    title: "Integrity & Trust",
    description: "Building transparency, honesty, and responsible stewardship across our cohorts, programs, and partnerships.",
  },
  {
    title: "Innovation",
    description: "Embracing emerging technology, practical AI literacy, and modern pedagogical models for student empowerment.",
  },
  {
    title: "Collaboration & Impact",
    description: "Prioritising activities that create measurable, lasting value for students, universities, and local communities.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* About Hero Banner */}
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Our Story &amp; Purpose
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                Empowering Students to Thrive Beyond the Classroom
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                The Student Growth Hub (TSGH) was founded on a simple conviction: a student&apos;s potential should never be defined solely by academic grades, financial background, or geographic limitations.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Core Belief */}
        <section className="py-16 bg-slate-50/50 dark:bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Mission */}
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    To empower students with the knowledge, skills, opportunities, mentorship, and supportive networks they need to achieve academic excellence, develop their potential, build meaningful careers, and become responsible leaders and changemakers.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    A world where every student, regardless of background or geographical location, has access to the resources, opportunities, and support needed to thrive beyond the classroom and make meaningful contributions to society.
                  </p>
                </div>
              </div>

              {/* Core Belief */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-orange-400 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Our Core Belief</h3>
                  <blockquote className="text-sm text-slate-200 leading-relaxed italic">
                    &ldquo;Beyond Grades. Beyond Limitations. Every student deserves an opportunity to discover, learn, grow, and lead.&rdquo;
                  </blockquote>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 text-xs text-emerald-400 font-semibold">
                  Motto: Discover • Learn • Grow • Lead
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Impact Numbers */}
        <div id="impact">
          <ImpactStats />
        </div>

        {/* Core Values Grid */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
                Our Core Values
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
                The ethical framework guiding our team, volunteers, and student cohorts globally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VALUES.map((val) => (
                <div
                  key={val.title}
                  className="p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {val.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 Strategic Pillars */}
        <div id="pillars">
          <PillarsSection />
        </div>

        {/* Community Call to Action */}
        <CommunityCTA />
      </main>

      <Footer />
    </div>
  );
}

