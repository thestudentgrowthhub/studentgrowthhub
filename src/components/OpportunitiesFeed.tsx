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
      <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200/80 shadow-sm space-y-5">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search scholarships, internships, fellowships by name, country, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs sm:text-sm font-bold text-slate-500 shrink-0 mr-1 flex items-center gap-1.5">
            <SlidersHorizontal className="w-4 h-4 text-blue-600" /> Filter:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 min-h-[42px] ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Secondary Funding Type Filter */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-slate-200/80 text-sm">
          <span className="text-slate-500 font-bold mr-1">Funding Type:</span>
          {FUNDING_OPTIONS.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFunding(f)}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs sm:text-sm transition-colors ${
                selectedFunding === f
                  ? "bg-emerald-600 text-white"
                  : "text-slate-600 hover:text-blue-700 bg-slate-100"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-slate-500 text-xs sm:text-sm font-medium">
            Found {filteredOpportunities.length} opportunities
          </span>
        </div>
      </div>

      {/* Opportunities Cards Grid */}
      {displayedOpportunities.length === 0 ? (
        <div className="text-center py-20 px-6 bg-white rounded-3xl border border-dashed border-slate-300 shadow-sm">
          <GraduationCap className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-slate-900">
            No matching opportunities found
          </h4>
          <p className="text-base text-slate-600 mt-2 max-w-md mx-auto">
            Try adjusting your search keywords or resetting the category filters to discover more open scholarships.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
              setSelectedFunding("All");
            }}
            className="mt-6 px-6 py-3 text-sm font-bold bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedOpportunities.map((opp) => (
            <OpportunityCard key={opp.id} opp={opp} />
          ))}
        </div>
      )}

      {/* Show more button when limited */}
      {limit && filteredOpportunities.length > limit && (
        <div className="text-center pt-6">
          <Link
            href="/opportunities"
            className="min-h-[50px] inline-flex items-center px-8 py-3.5 rounded-2xl font-bold text-base bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md group"
          >
            <span>View All Opportunities ({filteredOpportunities.length})</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
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
    <div className="group rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {opp.category}
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                opp.fundingType === "Fully Funded"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-amber-50 text-amber-700 border border-amber-200"
              }`}
            >
              {opp.fundingType}
            </span>
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="Share Opportunity"
              aria-label="Share Opportunity"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Title & Organization */}
        <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
          {opp.title}
        </h4>
        <p className="text-sm font-semibold text-slate-500 mt-1.5 line-clamp-1">
          {opp.organization}
        </p>

        {/* Description snippet */}
        <p className="text-sm sm:text-base text-slate-600 mt-3 line-clamp-2 leading-relaxed font-normal">
          {opp.description}
        </p>

        {/* Details list */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
            <span className="truncate font-medium">{opp.eligibleRegion}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className={`w-4 h-4 shrink-0 ${isClosingSoon ? "text-rose-500" : "text-slate-400"}`} />
            <span className={isClosingSoon ? "text-rose-600 font-bold" : "font-medium"}>
              Deadline: {opp.deadline}
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          href={`/opportunities/${opp.slug}`}
          className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
        >
          View Details
        </Link>
        <a
          href={opp.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xs"
        >
          <span>Apply</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
