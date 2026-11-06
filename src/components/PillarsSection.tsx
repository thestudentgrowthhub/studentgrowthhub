"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { STRATEGIC_PILLARS } from "@/data/site-data";
import {
  GraduationCap,
  Briefcase,
  Award,
  Cpu,
  Users,
  Globe,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  Briefcase,
  Award,
  Cpu,
  Users,
  Globe,
};

export function PillarsSection() {
  const [selectedNumber, setSelectedNumber] = useState(STRATEGIC_PILLARS[0].number);
  const activePillar =
    STRATEGIC_PILLARS.find((p) => p.number === selectedNumber) || STRATEGIC_PILLARS[0];

  return (
    <section className="py-20 sm:py-24 bg-soft-mesh border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Six Strategic Pillars of Growth
          </h2>
          <p className="text-base sm:text-xl text-slate-600 mt-3 leading-relaxed">
            Our activities are organised around six core pillars designed to help students excel academically and thrive beyond the classroom.
          </p>
        </div>

        {/* Interactive Featured Pillar Banner (Large Photo + Details) */}
        <div className="mb-12 rounded-3xl bg-white border border-slate-200/90 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[280px] bg-slate-100">
              <Image
                src={activePillar.image}
                alt={activePillar.title}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-600">
                  Pillar {activePillar.number}
                </span>
                <span className="text-xs sm:text-sm font-bold bg-slate-900/75 backdrop-blur-xs px-3 py-1 rounded-full">
                  {activePillar.highlight}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-center space-y-4">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-emerald-600">
                Active Focus Area • Pillar {activePillar.number}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {activePillar.title}
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {activePillar.description}
              </p>
              <div className="pt-2">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-700 group"
                >
                  <span>Explore Programs Under This Pillar</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Pillars Grid (Click or Hover to Switch Spotlight Photo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRATEGIC_PILLARS.map((pillar) => {
            const Icon = ICON_MAP[pillar.iconName] || GraduationCap;
            const isSelected = pillar.number === selectedNumber;

            return (
              <button
                key={pillar.number}
                type="button"
                onClick={() => setSelectedNumber(pillar.number)}
                onMouseEnter={() => setSelectedNumber(pillar.number)}
                className={`text-left p-6 sm:p-7 rounded-3xl transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-blue-500 ring-2 ring-blue-500/20 shadow-lg -translate-y-1"
                    : "bg-white/90 border-slate-200/80 hover:bg-white hover:border-blue-300 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300">
                      {pillar.number}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>{pillar.highlight}</span>
                  <span>{isSelected ? "Viewing ↑" : "Preview →"}</span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
