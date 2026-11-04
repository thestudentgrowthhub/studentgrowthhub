"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { STRATEGIC_PILLARS } from "@/data/site-data";
import {
  GraduationCap,
  Briefcase,
  Compass,
  Cpu,
  Users,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Briefcase,
  Compass,
  Cpu,
  Users,
  Globe,
};

export function PillarsSection() {
  const [activePillarId, setActivePillarId] = useState<number>(1);
  const activePillar =
    STRATEGIC_PILLARS.find((p) => p.id === activePillarId) || STRATEGIC_PILLARS[0];

  return (
    <section className="py-20 sm:py-28 bg-soft-mesh relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-wider block mb-2">
              Strategic Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Six Pillars of Student Growth
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Tap or hover on any pillar below to explore how our initiatives build well-rounded leaders prepared for university, career, and global impact.
            </p>
          </div>
          <div>
            <Link
              href="/about"
              className="inline-flex items-center px-5 py-3 rounded-2xl bg-blue-50 hover:bg-blue-100 text-sm sm:text-base font-bold text-blue-700 group transition-colors"
            >
              <span>Explore Our Methodology</span>
              <ArrowRight className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Interactive Dynamic Spotlight Banner */}
        <div className="mb-12 rounded-3xl bg-white border border-blue-100 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] bg-blue-50">
              <Image
                key={activePillar.image}
                src={activePillar.image}
                alt={activePillar.title}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover animate-fade-in"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-blue-700 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-sm">
                Pillar {activePillar.id} of 6 Spotlight
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {STRATEGIC_PILLARS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePillarId(p.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                      p.id === activePillarId
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {p.id}. {p.title.split(" ")[0]}
                  </button>
                ))}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 pt-1">
                {activePillar.title}
              </h3>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {activePillar.description}
              </p>

              <div className="pt-2 flex items-center gap-2.5 text-sm sm:text-base font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-4 py-3 rounded-2xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{activePillar.highlightStat}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STRATEGIC_PILLARS.map((pillar) => {
            const Icon = ICON_MAP[pillar.iconName] || Globe;
            const isSelected = pillar.id === activePillarId;
            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                onMouseEnter={() => setActivePillarId(pillar.id)}
                className={`cursor-pointer group p-7 sm:p-8 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "border-blue-500 ring-2 ring-blue-500/15 shadow-xl -translate-y-1"
                    : "border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${pillar.accentColor} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-slate-200 shadow-2xs">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-base text-slate-600 mt-3 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-600 group-hover:text-blue-700">
                  <span>{isSelected ? "Active Spotlight" : "Preview Pillar Impact"}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
