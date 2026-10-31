"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, CheckCircle2, Linkedin, MessageCircle } from "lucide-react";
import { COMMUNITY_LINKS } from "@/data/site-data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      {/* Top Banner: Newsletter */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">Stay Updated</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Get Weekly Verified Scholarships &amp; Opportunities
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Join 1,500+ students receiving curated fellowship deadlines, internships, and skill masterclasses directly.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-emerald-300 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>You’re subscribed! Watch your inbox for upcoming deadlines.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your student email..."
                    required
                    className="px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[260px]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-150 inline-flex items-center justify-center gap-2 shadow-sm shrink-0"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Identity & Motto */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500/40">
                <Image
                  src="/images/logo.jpg"
                  alt="The Student Growth Hub"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block">
                  THE STUDENT <span className="text-orange-400">GROWTH HUB</span>
                </span>
                <span className="text-xs text-emerald-400 font-medium">Beyond Grades. Beyond Limitations.</span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A youth-led global student development platform established to help students grow beyond the classroom through access to opportunities, practical skills, mentorship, and supportive networks across 37+ countries.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMMUNITY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                aria-label="WhatsApp Community"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
              <a
                href={COMMUNITY_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn Page"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/programs" className="text-slate-400 hover:text-white transition-colors">Our Programs</Link>
              </li>
              <li>
                <Link href="/opportunities" className="text-slate-400 hover:text-white transition-colors">Opportunities Hub</Link>
              </li>
              <li>
                <Link href="/programs#webinars" className="text-slate-400 hover:text-white transition-colors">Events &amp; Webinars</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Pillars */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Flagship Initiatives</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/programs#growth-beyond-grades" className="text-slate-400 hover:text-white transition-colors">
                  Growth Beyond Grades
                </Link>
              </li>
              <li>
                <Link href="/programs#elite-campus" className="text-slate-400 hover:text-white transition-colors">
                  ELITE Campus × Kryptr
                </Link>
              </li>
              <li>
                <Link href="/about#pillars" className="text-slate-400 hover:text-white transition-colors">
                  6 Strategic Pillars
                </Link>
              </li>
              <li>
                <Link href="/about#impact" className="text-slate-400 hover:text-white transition-colors">
                  Global Impact Metrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get Involved & Governance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Get Involved</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/get-involved?tab=volunteer" className="text-slate-400 hover:text-white transition-colors">
                  Volunteer With Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved?tab=yab" className="text-slate-400 hover:text-white transition-colors">
                  Youth Advisory Board
                </Link>
              </li>
              <li>
                <Link href="/get-involved?tab=partner" className="text-slate-400 hover:text-white transition-colors">
                  Institutional Partnerships
                </Link>
              </li>
              <li>
                <Link href="/get-involved?tab=contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-10 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} The Student Growth Hub (TSGH). Built for youth changemakers worldwide.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/legal/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-slate-200 transition-colors">Terms &amp; Conditions</Link>
            <a href={COMMUNITY_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
              WhatsApp Community
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

