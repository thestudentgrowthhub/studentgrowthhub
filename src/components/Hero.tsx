import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import { COMMUNITY_LINKS } from "@/data/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Mission, Headline, Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>Beyond Grades. Beyond Limitations.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Helping Students <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-emerald-600 to-orange-500">
                Grow Beyond Grades.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We empower students with the knowledge, practical skills, scholarships, mentorship, and global networks needed to thrive academically, professionally, and personally.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                href="/opportunities"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 group"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={COMMUNITY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
              >
                <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                <span>Join Our Community</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Opportunities</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-blue-600" />
                <span>37+ Countries Reached</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Cohort 2 In Session</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Student Mosaic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Feature Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <Image
                  src="/images/IMG-20261030-WA0041.jpg"
                  alt="Student Growth Hub youth changemakers holding SDG and Quality Education signs"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-600 px-2 py-0.5 rounded-full inline-block mb-1">
                    SDG 4: Quality Education
                  </span>
                  <p className="text-xs sm:text-sm font-semibold">
                    &ldquo;We are the Changemakers of Today&rdquo;
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Model UN & Leadership */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 w-44 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100 dark:border-slate-700">
                  <Image
                    src="/images/IMG-20261030-WA0043.jpg"
                    alt="Model UN Summit"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-extrabold text-slate-900 dark:text-white truncate">Global Summits</div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Youth Diplomacy</div>
                </div>
              </div>

              {/* Floating Badge 2: Community Network */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                  19K+
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-slate-900 dark:text-white">Active Community</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">LinkedIn &amp; WhatsApp</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

