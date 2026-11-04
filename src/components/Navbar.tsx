"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { COMMUNITY_LINKS } from "@/data/site-data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/opportunities", label: "Opportunities Hub" },
  { href: "/get-involved", label: "Get Involved" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center space-x-3 group min-w-0">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-500/40 group-hover:ring-emerald-500 transition-all shadow-sm shrink-0 bg-white">
              <Image
                src="/images/tsgh-official-logo.jpg"
                alt="The Student Growth Hub Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-black text-base sm:text-xl tracking-tight text-blue-950 leading-tight truncate">
                THE STUDENT <span className="text-orange-600">GROWTH HUB</span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-emerald-600 tracking-wider uppercase truncate">
                Beyond Grades • Beyond Limitations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all duration-150 ${
                    isActive
                      ? "text-blue-700 bg-blue-50 shadow-2xs"
                      : "text-slate-700 hover:text-blue-700 hover:bg-slate-100/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={COMMUNITY_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-full text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150 group"
            >
              <MessageCircle className="w-4 h-4 mr-2 fill-current" />
              <span>Join Community</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl text-slate-800 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-lg px-5 pt-3 pb-7 space-y-2.5 animate-fade-in shadow-xl">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3.5 rounded-xl text-base font-bold transition-all ${
                  isActive
                    ? "text-blue-700 bg-blue-50"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href={COMMUNITY_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full min-h-[50px] inline-flex items-center justify-center py-3.5 rounded-2xl font-bold text-base bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
            >
              <MessageCircle className="w-5 h-5 mr-2 fill-current" />
              Join 1,500+ on WhatsApp
            </a>
            <a
              href={COMMUNITY_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full min-h-[48px] inline-flex items-center justify-center py-3 rounded-2xl font-bold text-base bg-blue-50 text-blue-700 hover:bg-blue-100"
            >
              Follow 19K+ on LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
