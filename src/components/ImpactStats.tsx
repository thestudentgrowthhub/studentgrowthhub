import { SITE_METRICS } from "@/data/site-data";
import { Users, Globe2, MessageSquare, Award } from "lucide-react";

const STAT_ICONS = [Users, Globe2, MessageSquare, Award];
const ACCENT_COLORS = [
  "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800",
  "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800",
  "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800",
  "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800",
];

export function ImpactStats() {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Verified Global Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Empowering the Next Generation of Global Leaders
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SITE_METRICS.map((metric, idx) => {
            const Icon = STAT_ICONS[idx % STAT_ICONS.length];
            const colorClass = ACCENT_COLORS[idx % ACCENT_COLORS.length];

            return (
              <div
                key={metric.label}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {metric.label}
                  </span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${colorClass}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    {metric.value}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    {metric.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

