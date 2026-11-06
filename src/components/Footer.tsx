"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, CheckCircle2, Linkedin, MessageCircle } from "lucide-react";
import { COMMUNITY_LINKS } from "@/data/site-data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || isSubscribing) return;
    setIsSubscribing(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: "newsletter", email }),
      });
    } catch {
      // optimistic fallback so user experience is smooth
    } finally {
      setIsSubscribing(false);
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200">
      {/* Top Banner: Newsletter */}
      <div className="border-b border-slate-200/80 bg-blue-50/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs sm:text-sm font-bold text-orange-600 tracking-wider uppercase block mb-1">
                Stay Updated
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Get Weekly Verified Scholarships &amp; Opportunities
              </h3>
              <p className="text-base text-slate-600 mt-2 font-normal">
                Join 1,500+ students receiving curated fellowship deadlines, internships, and skill masterclasses directly.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2.5 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-base font-semibold">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span>You’re subscribed! Watch your inbox for upcoming deadlines.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your student email..."
                    required
                    className="px-5 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[280px] shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="min-h-[48px] px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all duration-150 inline-flex items-center justify-center gap-2 shadow-sm shrink-0"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Col 1: Identity & Motto */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center space-x-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500/30 shadow-xs">
                <Image
                  src="/images/tsgh-official-logo.jpg"
                  alt="The Student Growth Hub"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight text-slate-900 block">
                  THE STUDENT <span className="text-orange-500">GROWTH HUB</span>
                </span>
                <span className="text-xs sm:text-sm text-emerald-600 font-bold">Beyond Grades. Beyond Limitations.</span>
              </div>
            </Link>

            <p className="text-base text-slate-600 leading-relaxed max-w-sm font-normal">
              A youth-led global student development platform established to help students grow beyond the classroom through access to opportunities, practical skills, mentorship, and supportive networks across 37+ countries.
            </p>

            <div className="flex items-center space-x-3.5 pt-2">
              <a
                href={COMMUNITY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-emerald-50 hover:bg-emerald-600 border border-emerald-200 flex items-center justify-center text-emerald-700 hover:text-white transition-all shadow-xs"
                aria-label="WhatsApp Community"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
              </a>
              <a
                href={COMMUNITY_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-blue-50 hover:bg-blue-600 border border-blue-200 flex items-center justify-center text-blue-700 hover:text-white transition-all shadow-xs"
                aria-label="LinkedIn Page"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">Explore</h4>
            <ul className="space-y-3 text-sm sm:text-base font-medium">
              <li>
                <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/programs" className="text-slate-600 hover:text-blue-600 transition-colors">Our Programs</Link>
              </li>
              <li>
                <Link href="/opportunities" className="text-slate-600 hover:text-blue-600 transition-colors">Opportunities Hub</Link>
              </li>
              <li>
                <Link href="/programs#webinars" className="text-slate-600 hover:text-blue-600 transition-colors">Events &amp; Webinars</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Pillars */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">Flagship Initiatives</h4>
            <ul className="space-y-3 text-sm sm:text-base font-medium">
              <li>
                <Link href="/programs#growth-beyond-grades" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Growth Beyond Grades
                </Link>
              </li>
              <li>
                <Link href="/programs#elite-campus" className="text-slate-600 hover:text-blue-600 transition-colors">
                  ELITE Campus × Kryptr
                </Link>
              </li>
              <li>
                <Link href="/about#pillars" className="text-slate-600 hover:text-blue-600 transition-colors">
                  6 Strategic Pillars
                </Link>
              </li>
              <li>
                <Link href="/about#impact" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Global Impact Metrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get Involved & Governance */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">Get Involved</h4>
            <ul className="space-y-3 text-sm sm:text-base font-medium">
              <li>
                <Link href="/get-involved?tab=volunteer" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Volunteer With Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved?tab=yab" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Youth Advisory Board
                </Link>
              </li>
              <li>
                <Link href="/get-involved?tab=partner" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Institutional Partnerships
                </Link>
              </li>
              <li>
                <Link href="/get-involved?tab=contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-10 mt-12 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm text-slate-500">
          <p className="flex items-center gap-1 font-normal">
            © {new Date().getFullYear()} The Student Growth Hub. Built for youth changemakers worldwide.
          </p>
          <div className="flex items-center space-x-6 font-semibold">
            <Link href="/legal/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-blue-600 transition-colors">Terms &amp; Conditions</Link>
            <a href={COMMUNITY_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">
              WhatsApp Community
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
