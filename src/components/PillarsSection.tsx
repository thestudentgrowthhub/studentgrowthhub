import { STRATEGIC_PILLARS } from "@/data/site-data";
import { GraduationCap, Briefcase, Compass, Cpu, Users, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Briefcase,
  Compass,
  Cpu,
  Users,
  Globe,
};

export function PillarsSection() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Strategic Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
              Six Pillars of Student Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              Beyond grades, our initiatives provide a balanced ecosystem for personal growth, career preparedness, and global impact.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 group"
            >
              <span>Explore Our Methodology</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 6 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRATEGIC_PILLARS.map((pillar) => {
            const Icon = ICON_MAP[pillar.iconName] || Globe;
            return (
              <div
                key={pillar.id}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.accentColor} flex items-center justify-center text-white shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      0{pillar.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-90 group-hover:opacity-100">
                  <span>Learn initiatives</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

