"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { COMMUNITY_LINKS } from "@/data/site-data";

const HERO_SLIDES = [
  {
    src: "/images/un-youth-delegates-group.jpg",
    title: "Empowering Youth Leadership & Representation",
    subtitle: "Students collaborating, learning, and representing youth voices on global stages.",
    tag: "Leadership & Growth",
  },
  {
    src: "/images/unesco-auditorium-plenary-session.jpg",
    title: "Conferences, Workshops & Plenary Sessions",
    subtitle: "Connecting students with educators, mentors, and changemakers.",
    tag: "Learning Beyond Grades",
  },
  {
    src: "/images/un-women-nile-university-forum.jpg",
    title: "University Forums & Student Development",
    subtitle: "Building practical skills, confidence, and supportive peer networks.",
    tag: "Student Community",
  },
  {
    src: "/images/sdg4-quality-education-outreach.jpg",
    title: "Social Impact & Community Engagement",
    subtitle: "Encouraging students to develop initiatives and contribute to their communities.",
    tag: "Community Impact",
  },
  {
    src: "/images/employability-training-logbook-session.jpg",
    title: "Career & Employability Readiness",
    subtitle: "Equipping students with practical skills, CV development, and workplace readiness.",
    tag: "Growth Beyond Grades",
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

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-ambient-light border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Exact Blueprint Headline & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-xs text-blue-700 text-xs sm:text-sm font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Beyond Grades. Beyond Limitations. • Discover. Learn. Grow. Lead.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Helping Students{" "}
              <span className="text-gradient-brand">
                Grow Beyond Grades.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              We empower students with the knowledge, skills, opportunities, and support they need to thrive academically, professionally, and personally.
            </p>

            {/* Primary CTA Buttons from Blueprint 4.1 */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/opportunities"
                className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center px-7 py-4 rounded-2xl font-bold text-base text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-600/25 transition-all duration-200 group"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={COMMUNITY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center px-7 py-4 rounded-2xl font-bold text-base text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 transition-all duration-200 shadow-xs"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-emerald-600 fill-emerald-600/20" />
                <span>Join Our Community</span>
              </a>
            </div>

            {/* Secondary Link to Growth Beyond Grades Initiative */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-600 font-semibold">
              <Link
                href="/programs#growth-beyond-grades"
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 underline underline-offset-4"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Explore Growth Beyond Grades Initiative</span>
              </Link>
              <Link
                href="/programs#elite-campus"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-700"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>ELITE Campus × Kryptr</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Large, Clean Interactive Photo Showcase (No Tiny Clutter Icons) */}
          <div
            className="lg:col-span-6 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 ring-1 ring-slate-200/90">
              {HERO_SLIDES.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    index === activeSlide
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-500 text-white shadow-xs inline-block mb-2">
                      {slide.tag}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold leading-snug">
                      {slide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-100 mt-1">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              ))}

              {/* Prev / Next Controls */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous photo"
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-md transition-transform active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next photo"
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-md transition-transform active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slide Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.src}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Show slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeSlide
                      ? "w-8 bg-blue-600"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
