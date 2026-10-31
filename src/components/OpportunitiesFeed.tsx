"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { OPPORTUNITIES, Opportunity } from "@/data/site-data";
import {
  Search,
  Calendar,
  MapPin,
  ExternalLink,
  GraduationCap,
  ArrowRight,
  SlidersHorizontal,
  Share2,
  Check,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Scholarship",
  "Internship",
  "Fellowship",
  "Leadership",
  "Conference",
  "Competition",
];

const FUNDING_OPTIONS = ["All", "Fully Funded", "Partially Funded", "Free / Stipend"];

export function OpportunitiesFeed({ limit }: { limit?: number }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFunding, setSelectedFunding] = useState("All");

  const filteredOpportunities = useMemo(() => {
    return OPPORTUNITIES.filter((opp) => {
      const matchesSearch =
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.eligibleRegion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || opp.category === selectedCategory;

      const matchesFunding =
        selectedFunding === "All" || opp.fundingType === selectedFunding;

      return matchesSearch && matchesCategory && matchesFunding;
    });
  }, [searchTerm, selectedCategory, selectedFunding]);

  const displayedOpportunities = limit
    ? filteredOpportunities.slice(0, limit)
    : filteredOpportunities;

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="bg-slate-50 dark:bg-slate-900/60 p-4 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search scholarships, internships, fellowships by name, country, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filter:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Secondary Funding Type Filter */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-800 text-xs">
          <span className="text-slate-500 dark:text-slate-400 font-medium mr-1">Funding:</span>
          {FUNDING_OPTIONS.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFunding(f)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedFunding === f
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-slate-400 text-[11px]">
            Found {filteredOpportunities.length} opportunities
          </span>
        </div>
      </div>

      {/* Opportunities Cards Grid */}
      {displayedOpportunities.length === 0 ? (
        <div className="text-center py-16 px-4 bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
          <GraduationCap className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            No matching opportunities found
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
            Try adjusting your search keywords or resetting the category filters to discover more programs.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
              setSelectedFunding("All");
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold bg-blue-600 text-white rounded-xl shadow-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedOpportunities.map((opp) => (
            <OpportunityCard key={opp.id} opp={opp} />
          ))}
        </div>
      )}

      {/* Show more button when limited */}
      {limit && filteredOpportunities.length > limit && (
        <div className="text-center pt-4">
          <Link
            href="/opportunities"
            className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all shadow-sm group"
          >
            <span>View All Opportunities ({filteredOpportunities.length})</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}

function OpportunityCard({ opp }: { opp: Opportunity }) {
  const [copied, setCopied] = useState(false);
  const isClosingSoon = new Date(opp.deadline).getTime() - new Date().getTime() < 1000 * 60 * 60 * 24 * 30;

  const handleShare = async () => {
    const url = `${window.location.origin}/opportunities/${opp.slug}`;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // fallback
    }
  };

  return (
    <div className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            {opp.category}
          </span>
          <div className="flex items-center gap-1.5">
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                opp.fundingType === "Fully Funded"
                  ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                  : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
              }`}
            >
              {opp.fundingType}
            </span>
            <button
              onClick={handleShare}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Share Opportunity"
              aria-label="Share Opportunity"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Share2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Title & Organization */}
        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
          {opp.title}
        </h4>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
          {opp.organization}
        </p>

        {/* Description snippet */}
        <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
          {opp.description}
        </p>

        {/* Details list */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{opp.eligibleRegion}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className={`w-3.5 h-3.5 shrink-0 ${isClosingSoon ? "text-rose-500" : "text-slate-400"}`} />
            <span className={isClosingSoon ? "text-rose-600 dark:text-rose-400 font-semibold" : ""}>
              Deadline: {opp.deadline}
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
        <Link
          href={`/opportunities/${opp.slug}`}
          className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          View Details
        </Link>
        <a
          href={opp.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-2xs"
        >
          <span>Apply</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

