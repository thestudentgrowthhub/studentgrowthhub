import { MessageCircle, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";
import { COMMUNITY_LINKS } from "@/data/site-data";

export function CommunityCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-600 text-white">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-7">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-bold text-white shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
            <span>Join 1,500+ Ambitious Students Worldwide</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Your Growth Journey <br />
            <span className="text-amber-200">
              Shouldn’t Happen Alone.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto font-normal">
            Surround yourself with fellow students, mentors, and changemakers who share daily scholarships, internships, fellowship tips, and accountability.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={COMMUNITY_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-base bg-white text-blue-700 hover:bg-blue-50 shadow-xl transition-all duration-200 group"
            >
              <MessageCircle className="w-5 h-5 mr-2.5 text-emerald-600 fill-emerald-600" />
              <span>Join Active WhatsApp Hub</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={COMMUNITY_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-base bg-blue-800/40 hover:bg-blue-800/60 border border-white/30 text-white backdrop-blur-md transition-all duration-200"
            >
              <Linkedin className="w-5 h-5 mr-2.5" />
              <span>Follow 19K+ on LinkedIn</span>
            </a>
          </div>

          {/* Community Perks Checklist */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base text-white font-semibold">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />
              <span>Instant Deadline Alerts</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />
              <span>Exclusive Webinar Invites</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />
              <span>Peer Review &amp; Mentorship</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
