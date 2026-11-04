"use client";

import { useEffect, useState, useRef } from "react";
import { IMPACT_METRICS } from "@/data/site-data";
import { Globe, Users, Award, TrendingUp } from "lucide-react";

const METRIC_ICONS = [TrendingUp, Globe, Users, Award];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1500;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentVal = Math.floor(easeOut * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated, target]);

  const formatDisplay = (val: number) => {
    if (target === 19000) {
      if (val >= 19000) return "19K";
      return `${(val / 1000).toFixed(val > 1000 ? 1 : 0)}K`;
    }
    return val.toLocaleString();
  };

  return (
    <span ref={ref}>
      {hasAnimated ? formatDisplay(count) : "0"}
      {suffix}
    </span>
  );
}

export function ImpactStats() {
  return (
    <section className="py-10 sm:py-12 bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 text-white border-y border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          {IMPACT_METRICS.map((item, index) => {
            const Icon = METRIC_ICONS[index % METRIC_ICONS.length];
            return (
              <div
                key={item.label}
                className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6 first:pl-0 first:pt-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center shrink-0 text-amber-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-none">
                    <AnimatedNumber target={item.numericValue} suffix={item.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-blue-100 mt-1">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
