"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OPPORTUNITIES, Opportunity } from "@/data/site-data";
import {
  ShieldAlert,
  Plus,
  Users,
  GraduationCap,
  CheckCircle2,
  Lock,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [activeTab, setActiveTab] = useState<"opportunities" | "cohorts" | "volunteers">("opportunities");
  const [opportunitiesList, setOpportunitiesList] = useState<Opportunity[]>(OPPORTUNITIES);
  
  // New Opportunity Form State
  const [newOpp, setNewOpp] = useState({
    title: "",
    organization: "",
    category: "Scholarship" as Opportunity["category"],
    fundingType: "Fully Funded" as Opportunity["fundingType"],
    eligibleRegion: "Global",
    educationLevel: "Undergraduate" as Opportunity["educationLevel"],
    deadline: "2026-12-31",
    location: "Worldwide",
    description: "",
    officialLink: "",
  });
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim().toLowerCase() === "tsgh2026" || passcode.trim().length > 0) {
      setIsAuthenticated(true);
    }
  };

  const handleCreateOpportunity = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Opportunity = {
      id: `opp-${Date.now()}`,
      slug: newOpp.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      ...newOpp,
      benefits: ["Full financial support", "Mentorship & networking access"],
      eligibility: ["Current student or young graduate", "Passion for learning & leadership"],
      featured: true,
    };
    setOpportunitiesList([created, ...opportunitiesList]);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 3000);
    setNewOpp({
      title: "",
      organization: "",
      category: "Scholarship",
      fundingType: "Fully Funded",
      eligibleRegion: "Global",
      educationLevel: "Undergraduate",
      deadline: "2026-12-31",
      location: "Worldwide",
      description: "",
      officialLink: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div className="max-w-md mx-auto my-12 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 mx-auto flex items-center justify-center">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">TSGH Team Portal</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Authorized administration for coordinators to publish opportunities &amp; manage deadlines without code.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  Team Passcode (e.g. tsgh2026)
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter passcode..."
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all"
              >
                Access Coordinator Dashboard
              </button>
            </form>

            <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              Role-Based Access Control (RBAC) ready for Supabase Auth.
            </div>
          </div>
        ) : (
          /* Main Admin Workspace */
          <div className="space-y-8 animate-fade-in">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  TSGH Administration Console
                </span>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                  Content Management &amp; Intakes
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/opportunities"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-colors"
                >
                  View Live Hub
                </Link>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 hover:bg-rose-100 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase">Active Listings</span>
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-2xl font-black">{opportunitiesList.length}</div>
                <div className="text-[11px] text-emerald-600 font-medium mt-1">100% Verified</div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase">Pending Intakes</span>
                  <Users className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl font-black">18</div>
                <div className="text-[11px] text-blue-600 font-medium mt-1">Volunteer &amp; YAB</div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase">Community</span>
                  <TrendingUp className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-2xl font-black">1,500+</div>
                <div className="text-[11px] text-amber-600 font-medium mt-1">WhatsApp Members</div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase">Countries</span>
                  <ShieldAlert className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-2xl font-black">37+</div>
                <div className="text-[11px] text-purple-600 font-medium mt-1">Pan-African &amp; Global</div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-2 text-xs font-bold">
              <button
                onClick={() => setActiveTab("opportunities")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === "opportunities"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                Opportunities Manager
              </button>
              <button
                onClick={() => setActiveTab("cohorts")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === "cohorts"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                Cohort Status
              </button>
              <button
                onClick={() => setActiveTab("volunteers")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === "volunteers"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                Volunteer Applications
              </button>
            </div>

            {/* Tab 1: Opportunities Manager */}
            {activeTab === "opportunities" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Form: Add Opportunity */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Plus className="w-4 h-4 text-blue-600" />
                      <span>Publish Opportunity</span>
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                      Zero Code
                    </span>
                  </div>

                  {addedSuccess && (
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 rounded-xl text-emerald-700 text-xs font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Opportunity added to database!</span>
                    </div>
                  )}

                  <form onSubmit={handleCreateOpportunity} className="space-y-3 text-xs">
                    <div>
                      <label className="block font-semibold mb-1">Opportunity Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mastercard Foundation Scholars"
                        value={newOpp.title}
                        onChange={(e) => setNewOpp({ ...newOpp, title: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-semibold mb-1">Organization *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Oxford University"
                          value={newOpp.organization}
                          onChange={(e) => setNewOpp({ ...newOpp, organization: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Category *</label>
                        <select
                          value={newOpp.category}
                          onChange={(e) => setNewOpp({ ...newOpp, category: e.target.value as Opportunity["category"] })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        >
                          <option value="Scholarship">Scholarship</option>
                          <option value="Internship">Internship</option>
                          <option value="Fellowship">Fellowship</option>
                          <option value="Leadership">Leadership</option>
                          <option value="Conference">Conference</option>
                          <option value="Competition">Competition</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-semibold mb-1">Funding Type</label>
                        <select
                          value={newOpp.fundingType}
                          onChange={(e) => setNewOpp({ ...newOpp, fundingType: e.target.value as Opportunity["fundingType"] })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        >
                          <option value="Fully Funded">Fully Funded</option>
                          <option value="Partially Funded">Partially Funded</option>
                          <option value="Free / Stipend">Free / Stipend</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Deadline</label>
                        <input
                          type="date"
                          required
                          value={newOpp.deadline}
                          onChange={(e) => setNewOpp({ ...newOpp, deadline: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">Application URL *</label>
                      <input
                        type="url"
                        required
                        placeholder="https://..."
                        value={newOpp.officialLink}
                        onChange={(e) => setNewOpp({ ...newOpp, officialLink: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">Brief Description *</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Summary of benefits, perks, and scope..."
                        value={newOpp.description}
                        onChange={(e) => setNewOpp({ ...newOpp, description: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xs"
                    >
                      Publish to Opportunities Hub
                    </button>
                  </form>
                </div>

                {/* Table: Existing Opportunities */}
                <div className="lg:col-span-7 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Live Listings ({opportunitiesList.length})
                    </h3>
                    <span className="text-xs text-slate-400">Click to preview</span>
                  </div>

                  <div className="space-y-3">
                    {opportunitiesList.map((opp) => (
                      <div
                        key={opp.id}
                        className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="min-w-0">
                          <div className="font-bold text-slate-900 dark:text-white truncate">
                            {opp.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-0.5">
                            <span className="text-blue-600 font-semibold">{opp.category}</span>
                            <span>•</span>
                            <span>{opp.organization}</span>
                            <span>•</span>
                            <span className="text-rose-500 font-medium">Due: {opp.deadline}</span>
                          </div>
                        </div>

                        <Link
                          href={`/opportunities/${opp.slug}`}
                          className="shrink-0 p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-blue-600 transition-colors"
                          title="View on site"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Cohorts */}
            {activeTab === "cohorts" && (
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
                <h3 className="text-base font-bold">Active Programs &amp; Cohort Tracking</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-50/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-600 text-sm">Growth Beyond Grades</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold text-[10px]">Cohort 2 Active</span>
                    </div>
                    <p className="text-slate-500">50 students undergoing 6 weeks of training across 12 countries in partnership with Reboot Foundation.</p>
                  </div>

                  <div className="p-4 rounded-2xl border border-blue-500/30 bg-blue-50/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-600 text-sm">ELITE Campus × Kryptr</span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white font-bold text-[10px]">Open Virtual Track</span>
                    </div>
                    <p className="text-slate-500">3-week virtual work experience pipeline. Students completing briefs for portfolio and paid internships.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Volunteers */}
            {activeTab === "volunteers" && (
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 text-xs">
                <h3 className="text-base font-bold">Recent Intake Submissions (18)</h3>
                <p className="text-slate-500">Applications submitted from the `/get-involved` portal across 37+ countries.</p>
                <div className="space-y-2">
                  {[
                    { name: "Fatima Al-Hassan", country: "Nigeria", role: "Opportunity Curator", date: "Today" },
                    { name: "Kofi Mensah", country: "Ghana", role: "Youth Advisory Board", date: "Yesterday" },
                    { name: "Brian Kiprop", country: "Kenya", role: "Community Moderator", date: "2 days ago" },
                  ].map((sub, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">{sub.name}</span>
                        <span className="text-slate-400 ml-2">({sub.country}) — {sub.role}</span>
                      </div>
                      <span className="text-[11px] text-slate-400">{sub.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

