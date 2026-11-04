"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Globe2, MessageSquare, Award, TrendingUp, CheckCircle2 } from "lucide-react";

interface MetricData {
  label: string;
  target: number;
  suffix: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  bgColor: string;
  barColor: string;
}

const METRICS: MetricData[] = [
  {
    label: "LinkedIn Network",
    target: 19000,
    suffix: "+",
    detail: "Aspiring students, scholars, and early-career changemakers worldwide.",
    icon: Users,
    accentColor: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-200",
    barColor: "bg-blue-600",
  },
  {
    label: "Countries Reached",
    target: 37,
    suffix: "+",
    detail: "Pan-African & global cross-border learning footprint across 4 continents.",
    icon: Globe2,
    accentColor: "text-emerald-600",
    bgColor: "bg-emerald-50 border-emerald-200",
    barColor: "bg-emerald-600",
  },
  {
    label: "WhatsApp Hub Members",
    target: 1500,
    suffix: "+",
    detail: "Active student peer community receiving curated daily opportunity alerts.",
    icon: MessageSquare,
    accentColor: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-200",
    barColor: "bg-orange-500",
  },
  {
    label: "Opportunity Outcomes",
    target: 250,
    suffix: "+",
    detail: "Secured international scholarships, fellowships, and youth summit seats.",
    icon: Award,
    accentColor: "text-indigo-600",
    bgColor: "bg-indigo-50 border-indigo-200",
    barColor: "bg-indigo-600",
  },
];

const REGIONAL_RANKINGS = [
  { region: "West Africa", percentage: 44, note: "Nigeria, Ghana, Sierra Leone, Liberia" },
  { region: "East Africa", percentage: 28, note: "Kenya, Uganda, Rwanda, Tanzania" },
  { region: "Southern Africa", percentage: 18, note: "South Africa, Zimbabwe, Zambia" },
  { region: "International Diaspora", percentage: 10, note: "UK, US, Canada, Bolivia, Europe" },
];

export function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Decorative soft gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span>Verified Impact &amp; Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Measurable Numbers Across 37+ Countries
          </h2>
          <p className="text-base sm:text-xl text-slate-600 mt-3 leading-relaxed">
            Real outcomes created by youth changemakers, leadership cohorts, and international opportunity pipelines.
          </p>
        </div>

        {/* Animated Metrics Grid: Moves and counts up on scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <MetricCard
                key={metric.label}
                metric={metric}
                Icon={Icon}
                isVisible={isVisible}
                delay={idx * 140}
              />
            );
          })}
        </div>

        {/* Regional Reach & Growth Rankings Bar (Animates on Scroll) */}
        <div
          className={`mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-emerald-50/80 border border-blue-100 shadow-sm transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200/80">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Global Student Distribution by Region
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Active participants and applicants represented across regional chapters
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 self-start md:self-auto">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Free &amp; Open Access</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REGIONAL_RANKINGS.map((item, index) => (
              <div key={item.region} className="space-y-2 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-800">{item.region}</span>
                  <span className="font-extrabold text-blue-600">{item.percentage}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${item.percentage}%` : "0%",
                      transitionDelay: `${300 + index * 120}ms`,
                    }}
                  />
                </div>
                <p className="text-xs text-slate-500 truncate">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function MetricCard({
  metric,
  Icon,
  isVisible,
  delay,
}: {
  metric: MetricData;
  Icon: React.ComponentType<{ className?: string }>;
  isVisible: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const end = metric.target;
    const duration = 1800;
    const startTime = performance.now() + delay;

    let frameId: number;

    const updateCounter = (now: number) => {
      if (now < startTime) {
        frameId = requestAnimationFrame(updateCounter);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * end);

      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, metric.target, delay]);

  const formattedCount = count.toLocaleString();

  return (
    <div
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-bold text-slate-700">
            {metric.label}
          </span>
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${metric.bgColor} ${metric.accentColor} group-hover:scale-110 transition-transform`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>

        <div className="flex items-baseline space-x-1 my-3">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            {isVisible ? formattedCount : "0"}
          </span>
          <span className={`text-3xl sm:text-4xl font-extrabold ${metric.accentColor}`}>
            {metric.suffix}
          </span>
        </div>
      </div>

      <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
        {metric.detail}
      </p>

      <div className="mt-5 w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
        <div
          className={`h-full ${metric.barColor} transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? "100%" : "0%",
            transitionDelay: `${delay + 200}ms`,
          }}
        />
      </div>
    </div>
  );
}
