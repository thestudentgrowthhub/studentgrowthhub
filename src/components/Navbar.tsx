"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { COMMUNITY_LINKS } from "@/data/site-data";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <header className="sticky top-0 z-50 w-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-emerald-500/30 group-hover:ring-emerald-500 transition-all shadow-sm">
              <Image
                src="/images/logo.jpg"
                alt="The Student Growth Hub Logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                THE STUDENT <span className="text-orange-600 dark:text-orange-500">GROWTH HUB</span>
              </span>
              <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mt-1">
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
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <a
              href={COMMUNITY_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition-all duration-150 group"
            >
              <MessageCircle className="w-4 h-4 mr-1.5 fill-current" />
              <span>Join Community</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 animate-fade-in">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={COMMUNITY_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 rounded-xl font-semibold text-sm bg-emerald-600 text-white shadow-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2 fill-current" />
              Join WhatsApp Community
            </a>
            <a
              href={COMMUNITY_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center py-2.5 rounded-xl font-semibold text-sm bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Follow 19K+ on LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

