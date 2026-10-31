import Image from "next/image";
import Link from "next/link";
import { FLAGSHIP_PROGRAMS } from "@/data/site-data";
import { ArrowUpRight, CheckCircle2, Clock, Globe } from "lucide-react";

export function ProgramsSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Flagship Initiatives
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
            Programs Designed for Measurable Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Hands-on learning cohorts, virtual work simulations, and expert masterclasses providing verifiable real-world skills.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-12">
          {FLAGSHIP_PROGRAMS.map((program, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={program.id}
                id={program.slug}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 ${isEven ? "lg:order-2" : ""}`}>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                      {program.badge}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-1" : ""}`}>
                    {program.partner && (
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800/40">
                        <span>{program.partner}</span>
                      </div>
                    )}

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {program.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      {program.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Highlights List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {program.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                      {program.impactMetrics.map((m) => (
                        <div key={m.label} className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 text-center">
                          <div className="text-[10px] text-slate-400 uppercase font-medium truncate">{m.label}</div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 truncate">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      {program.actionUrl.startsWith("http") ? (
                        <a
                          href={program.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all shadow-xs group"
                        >
                          <span>{program.actionText}</span>
                          <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ) : (
                        <Link
                          href={program.actionUrl}
                          className="inline-flex items-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xs group"
                        >
                          <span>{program.actionText}</span>
                          <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      )}

                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        <span>{program.duration}</span>
                        <span>•</span>
                        <Globe className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{program.status}</span>
                      </div>
                    </div>

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

