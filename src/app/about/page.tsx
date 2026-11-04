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
    <div className="min-h-screen flex flex-col bg-slate-50/40 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* About Hero Banner with Community Photo Showcase */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80 bg-ambient-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-wider block">
                Our Story &amp; Purpose
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Empowering Students to Thrive Beyond the Classroom
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
                The Student Growth Hub was founded on a simple conviction: a student&apos;s potential should never be defined solely by academic grades, financial background, or geographic limitations.
              </p>
            </div>

            {/* 4-Photo Editorial Showcase Banner */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  src: "/images/tsgh-founders-sdg-champions.jpg",
                  title: "SDG Leadership",
                  subtitle: "Founders & Youth Advocates",
                },
                {
                  src: "/images/un-youth-delegates-group.jpg",
                  title: "Global Representation",
                  subtitle: "UN Youth Assembly",
                },
                {
                  src: "/images/world-bank-earn-conference-delegates.jpg",
                  title: "Policy & Economy",
                  subtitle: "World Bank Conference",
                },
                {
                  src: "/images/unesco-auditorium-plenary-session.jpg",
                  title: "UNESCO Plenary",
                  subtitle: "International Student Forum",
                },
              ].map((photo) => (
                <div
                  key={photo.src}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border-2 border-white ring-1 ring-slate-200/80"
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <div className="text-xs sm:text-sm font-bold leading-tight">{photo.title}</div>
                    <div className="text-[11px] text-emerald-300 font-medium">{photo.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision & Core Belief */}
        <section className="py-20 sm:py-24 bg-soft-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Mission */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

              {/* Vision */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

              {/* Core Belief (Vibrant Blue-to-Emerald Card instead of Black) */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-600 text-white shadow-xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/15 text-amber-300 flex items-center justify-center mb-6">
                    <Compass className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Our Core Belief</h3>
                  <blockquote className="text-lg text-blue-50 leading-relaxed font-medium">
                    &ldquo;Beyond Grades. Beyond Limitations. Every student deserves an opportunity to discover, learn, grow, and lead.&rdquo;
                  </blockquote>
                </div>
                <div className="pt-6 mt-6 border-t border-white/20 text-sm text-amber-200 font-bold">
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
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <span className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-wider block mb-2">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Our Core Values
              </h2>
              <p className="text-base sm:text-xl text-slate-600 mt-3 leading-relaxed">
                The ethical framework guiding our team, volunteers, and student cohorts globally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {VALUES.map((val) => (
                <div
                  key={val.title}
                  className="p-7 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-sm hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
