"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Globe,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { COMMUNITY_LINKS } from "@/data/site-data";

const HERO_SLIDES = [
  {
    src: "/images/un-youth-delegates-group.jpg",
    badge: "Youth Diplomacy",
    badgeColor: "bg-blue-600",
    title: "UN80 Youth Delegates Representing Student Voices",
    subtitle: "Equipping young leaders to speak in global policy chambers",
  },
  {
    src: "/images/sdg-wheel-un-delegates-quartet.jpg",
    badge: "UN Sustainable Development Goals",
    badgeColor: "bg-emerald-600",
    title: "Championing Global Goals Across 37+ Countries",
    subtitle: "Turning student ambition into measurable community action",
  },
  {
    src: "/images/un-women-nile-university-forum.jpg",
    badge: "University Leadership",
    badgeColor: "bg-orange-600",
    title: "Tertiary Institutions Leadership & Policy Forum",
    subtitle: "Mobilizing university chapters for inclusive student growth",
  },
  {
    src: "/images/grassroots-climate-sdg-school-drive.jpg",
    badge: "SDG 4 & 13 Outreach",
    badgeColor: "bg-teal-600",
    title: "Grassroots Quality Education & Climate Action Drives",
    subtitle: "Mentoring the next generation of changemakers from the ground up",
  },
  {
    src: "/images/unesco-auditorium-plenary-session.jpg",
    badge: "Global Summits",
    badgeColor: "bg-indigo-600",
    title: "International Plenaries & Student Masterclasses",
    subtitle: "Connecting students with global mentors, fellowships & scholarships",
  },
];

const MARQUEE_MOMENTS = [
  {
    src: "/images/world-bank-earn-conference-delegates.jpg",
    label: "World Bank & E.A.R.N Forum",
  },
  {
    src: "/images/amnesty-international-youth-delegates.jpg",
    label: "Amnesty International Youth Summit",
  },
  {
    src: "/images/fao-un-house-student-delegates.jpg",
    label: "UN FAO House Delegation",
  },
  {
    src: "/images/female-leaders-mentorship-meetup.jpg",
    label: "Women in Leadership Mentorship",
  },
  {
    src: "/images/un-security-council-youth-delegates.jpg",
    label: "UN Security Council Simulation",
  },
  {
    src: "/images/african-innovation-hub-delegates.jpg",
    label: "African Innovation Hub Meetup",
  },
  {
    src: "/images/creative-leadership-student-cohort.jpg",
    label: "Creative Leadership Cohort",
  },
  {
    src: "/images/model-un-summit-boardroom.jpg",
    label: "International Diplomatic Boardroom",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section className="relative overflow-hidden pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24 bg-ambient-light border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Mission, Headline, Call to Action */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-center lg:text-left">
            
            {/* Authentic Brand Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Beyond Grades • Beyond Limitations</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight text-slate-900 leading-[1.08]">
              Helping Students <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-emerald-600 to-orange-500">
                Grow Beyond Grades.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              We empower students across 37+ countries with the knowledge, practical skills, verified scholarships, mentorship, and global networks needed to thrive in university, career, and society.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <Link
                href="/opportunities"
                className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-base bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={COMMUNITY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-base bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2.5 fill-current" />
                <span>Join WhatsApp Hub</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7 text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-2 bg-white/90 px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>100% Free &amp; Verified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
                <Globe className="w-5 h-5 text-blue-600" />
                <span>37+ Countries</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
                <Users className="w-5 h-5 text-orange-600" />
                <span>19K+ Community</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Auto-Playing Interactive Student Showcase */}
          <div
            className="lg:col-span-6 relative mt-4 lg:mt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              
              {/* Dynamic Main Carousel Frame */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-blue-50">
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      idx === activeSlide
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 620px"
                      className="object-cover"
                      priority={idx === 0}
                    />
                    {/* Soft warm gradient overlay for readable white text (not harsh black) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/25 to-transparent" />
                  </div>
                ))}

                {/* Slide Controls (Top Right) */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveSlide(
                        (activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
                      )
                    }
                    className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-transform active:scale-95"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveSlide((activeSlide + 1) % HERO_SLIDES.length)
                    }
                    className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-transform active:scale-95"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Live Caption Overlay */}
                <div className="absolute bottom-5 left-5 right-5 z-20 text-white">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${currentSlide.badgeColor} px-3.5 py-1 rounded-full inline-block mb-2 shadow-sm`}
                  >
                    {currentSlide.badge}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold leading-snug drop-shadow-xs">
                    {currentSlide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 mt-1 font-medium">
                    {currentSlide.subtitle}
                  </p>

                  {/* Interactive Slide Progress Dots */}
                  <div className="flex items-center gap-2 mt-3.5">
                    {HERO_SLIDES.map((s, idx) => (
                      <button
                        key={s.src}
                        onClick={() => setActiveSlide(idx)}
                        aria-label={`View slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === activeSlide
                            ? "w-8 bg-orange-400"
                            : "w-2.5 bg-white/60 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Card 1: Award-Winning Delegates */}
              <div className="hidden sm:flex absolute -bottom-6 -left-5 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-200/90 items-center space-x-3.5 animate-float">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src="/images/summit-award-certificate-winners.jpg"
                    alt="Award-Winning Student Delegates"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="pr-2">
                  <div className="text-sm font-extrabold text-slate-900">
                    Award-Winning Delegates
                  </div>
                  <div className="text-xs text-emerald-600 font-bold">
                    250+ Verified Outcomes
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Campus Ambassadors */}
              <div className="hidden sm:flex absolute -top-5 -right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-200/90 items-center space-x-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-orange-400">
                  <Image
                    src="/images/campus-student-ambassadors-duo.jpg"
                    alt="TSGH Campus Ambassadors"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="pr-1">
                  <div className="text-sm font-extrabold text-slate-900">
                    Active Chapters
                  </div>
                  <div className="text-xs text-blue-600 font-bold">
                    Cohort 2 In Progress
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Dynamic Moving Moments Marquee Strip */}
      <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-600">
              Live Community Action &amp; Global Delegations
            </span>
          </div>
          <span className="text-xs font-semibold text-blue-600 hidden sm:inline">
            Hover to pause • Authentic TSGH moments across Africa &amp; beyond
          </span>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee gap-4 px-2">
            {[...MARQUEE_MOMENTS, ...MARQUEE_MOMENTS].map((item, idx) => (
              <div
                key={`${item.src}-${idx}`}
                className="relative w-64 sm:w-72 aspect-[16/10] rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-md group mx-2"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="288px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 right-3 text-white text-xs sm:text-sm font-bold truncate">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
