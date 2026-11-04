import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImpactStats } from "@/components/ImpactStats";
import { PillarsSection } from "@/components/PillarsSection";
import { CommunityCTA } from "@/components/CommunityCTA";
import { CheckCircle2, Target, Eye, Compass } from "lucide-react";

const VALUES = [
  {
    title: "Student-centredness",
    description: "Putting students' needs, experiences, and aspirations at the centre of our work.",
  },
  {
    title: "Access and inclusion",
    description: "Making learning, information, and opportunities accessible to young people.",
  },
  {
    title: "Growth mindset",
    description: "Encouraging continuous learning, curiosity, resilience, and self-improvement.",
  },
  {
    title: "Integrity",
    description: "Building trust through honesty, transparency, and responsible action.",
  },
  {
    title: "Innovation",
    description: "Embracing new ideas, technology, and practical approaches to student development.",
  },
  {
    title: "Collaboration",
    description: "Building meaningful relationships among students, mentors, institutions, and partners.",
  },
  {
    title: "Impact",
    description: "Prioritising activities that create measurable and lasting value for students and communities.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* About Hero Banner with Exact Blueprint Introduction */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80 bg-ambient-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-wider block">
                About The Student Growth Hub
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Beyond Grades. Beyond Limitations.
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
                The Student Growth Hub is a youth-led student development platform established to help students grow beyond the classroom. Through our programs, initiatives, community engagements, and partnerships, we are committed to helping students recognise their potential and become active contributors to their communities and society.
              </p>
            </div>

            {/* Large 3-Column Photo Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  src: "/images/tsgh-founders-sdg-champions.jpg",
                  title: "Discover & Lead",
                  subtitle: "Student leaders and changemakers",
                },
                {
                  src: "/images/un-youth-delegates-group.jpg",
                  title: "Youth Representation",
                  subtitle: "Participating in leadership forums",
                },
                {
                  src: "/images/sdg4-quality-education-outreach.jpg",
                  title: "Community Impact",
                  subtitle: "Quality education and school outreach",
                },
              ].map((photo) => (
                <div
                  key={photo.src}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white ring-1 ring-slate-200/80"
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-base sm:text-lg font-bold leading-tight">{photo.title}</div>
                    <div className="text-xs sm:text-sm text-emerald-300 font-medium">{photo.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compact Impact Metrics */}
        <div id="impact">
          <ImpactStats />
        </div>

        {/* Mission, Vision & Core Belief (Exact Blueprint Text) */}
        <section className="py-20 sm:py-24 bg-soft-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Our Mission */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    To empower students with the knowledge, skills, opportunities, mentorship, and supportive networks they need to achieve academic excellence, develop their potential, build meaningful careers, and become responsible leaders and changemakers.
                  </p>
                </div>
              </div>

              {/* Our Vision */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    A world where every student, regardless of background or geographical location, has access to the resources, opportunities, and support needed to thrive beyond the classroom and make meaningful contributions to society.
                  </p>
                </div>
              </div>

              {/* Our Core Belief */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-600 text-white shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/15 text-amber-300 flex items-center justify-center mb-6">
                    <Compass className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Our Core Belief</h3>
                  <p className="text-base sm:text-lg text-blue-50 leading-relaxed font-medium">
                    We believe that a student&apos;s potential should never be defined solely by academic grades, financial background, geographical location, or limited access to opportunities. Every student deserves an opportunity to discover, learn, grow, and lead.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/20 text-sm text-amber-200 font-bold">
                  Discover. Learn. Grow. Lead.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our 7 Core Values (Exact Blueprint List) */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-wider block mb-2">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {VALUES.map((val) => (
                <div
                  key={val.title}
                  className="p-7 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-sm hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {val.title}
                      </h4>
                      <p className="text-base text-slate-600 mt-2 leading-relaxed font-normal">
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
