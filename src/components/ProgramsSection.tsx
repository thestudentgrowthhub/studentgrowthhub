import Image from "next/image";
import Link from "next/link";
import { FLAGSHIP_PROGRAMS } from "@/data/site-data";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ProgramsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-wider block mb-2">
            Flagship Initiatives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Programs Designed for Real-World Growth
          </h2>
          <p className="text-base sm:text-xl text-slate-600 mt-3 leading-relaxed">
            Hands-on learning cohorts, virtual work simulations, and international summits providing verifiable skills.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-12 sm:space-y-16">
          {FLAGSHIP_PROGRAMS.map((program, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={program.id}
                id={program.slug}
                className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50/80 via-white to-blue-50/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Dynamic Dual-Image Collage Column */}
                  <div className={`lg:col-span-5 relative ${isEven ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-blue-50">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                        {program.badge}
                      </div>
                    </div>

                    {/* Secondary Picture Inset */}
                    {program.secondaryImage && (
                      <div className="hidden sm:block absolute -bottom-5 -right-4 w-36 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white">
                        <Image
                          src={program.secondaryImage}
                          alt={`${program.title} activity`}
                          fill
                          sizes="144px"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : ""}`}>
                    {program.partner && (
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-700 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
                        <span>{program.partner}</span>
                      </div>
                    )}

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                      {program.title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-emerald-600">
                      {program.subtitle}
                    </p>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                      {program.description}
                    </p>

                    {/* Highlights List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {program.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80">
                      {program.impactMetrics.map((m) => (
                        <div key={m.label} className="bg-white p-3.5 rounded-2xl border border-slate-200/80 text-center shadow-2xs">
                          <div className="text-xs text-slate-500 uppercase font-bold tracking-wider truncate">{m.label}</div>
                          <div className="text-sm sm:text-base font-black text-blue-950 mt-1 truncate">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button (Bright Blue / Emerald, no black) */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      {program.actionUrl.startsWith("http") ? (
                        <a
                          href={program.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[50px] inline-flex items-center px-7 py-3.5 rounded-2xl text-base font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md shadow-blue-600/20 group"
                        >
                          <span>{program.actionText}</span>
                          <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ) : (
                        <Link
                          href={program.actionUrl}
                          className="min-h-[50px] inline-flex items-center px-7 py-3.5 rounded-2xl text-base font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md shadow-emerald-600/20 group"
                        >
                          <span>{program.actionText}</span>
                          <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      )}
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
