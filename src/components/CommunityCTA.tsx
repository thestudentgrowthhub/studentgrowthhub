import { MessageCircle, Linkedin, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { COMMUNITY_LINKS } from "@/data/site-data";

export function CommunityCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-emerald-400">
            <Sparkles className="w-4 h-4" />
            <span>Join 1,500+ Ambitious Students Worldwide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Your Growth Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
              Shouldn’t Happen Alone.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Surround yourself with fellow students, mentors, and changemakers who share daily scholarships, internships, fellowship tips, and accountability.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={COMMUNITY_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-base bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-lg hover:shadow-emerald-500/25 transition-all duration-150 group"
            >
              <MessageCircle className="w-5 h-5 mr-2 fill-current" />
              <span>Join Active WhatsApp Community</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={COMMUNITY_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-base bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all duration-150"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              <span>Follow 19K+ on LinkedIn</span>
            </a>
          </div>

          {/* Community Perks Checklist */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant Deadline Alerts</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Exclusive Webinar Invites</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Peer Review &amp; Mentorship</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

