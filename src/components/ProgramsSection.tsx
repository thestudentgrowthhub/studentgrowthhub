import Image from "next/image";
import { FLAGSHIP_PROGRAMS } from "@/data/site-data";
import { CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";

export function ProgramsSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-bold mb-3">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>4.5 Our Programs &amp; Initiatives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Flagship Programs &amp; Partnerships
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-md leading-relaxed">
            Practical employability training, real virtual work experience, and monthly learning sessions.
          </p>
        </div>

        {/* Programs Stack */}
        <div className="space-y-12 sm:space-y-16">
          {FLAGSHIP_PROGRAMS.map((program, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={program.id}
                id={program.id}
                className="rounded-3xl bg-slate-50/70 border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Large, Full-Size Program Photo (No Tiny Overlapping Icon Box) */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 580px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/95 text-blue-700 shadow-sm">
                          {program.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-xs">
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                          {program.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-blue-600 uppercase tracking-wider mb-1.5">
                        {program.partner}
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                        {program.title}
                      </h3>
                      <p className="text-base sm:text-lg font-bold text-slate-800 mt-3 leading-snug">
                        {program.tagline}
                      </p>
                      <p className="text-base text-slate-600 mt-3 leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Key Metrics Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      {program.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs"
                        >
                          <div className="text-xs font-semibold text-slate-500">
                            {m.label}
                          </div>
                          <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {program.highlights.map((item) => (
                        <div key={item} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-slate-700 font-medium leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <a
                        href={program.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[50px] inline-flex items-center justify-center px-7 py-3.5 rounded-2xl font-bold text-base bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200 group"
                      >
                        <span>{program.ctaText}</span>
                        <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
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
