"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OPPORTUNITIES, Opportunity } from "@/data/site-data";
import {
  Plus,
  GraduationCap,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [activeTab, setActiveTab] = useState<"opportunities" | "programs">("opportunities");
  const [opportunitiesList, setOpportunitiesList] = useState<Opportunity[]>(OPPORTUNITIES);
  
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
    if (passcode.trim().length > 0) {
      setIsAuthenticated(true);
    }
  };

  const handleCreateOpportunity = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Opportunity = {
      id: `opp-${Date.now()}`,
      slug: newOpp.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      ...newOpp,
      benefits: ["Verified opportunity details"],
      eligibility: ["See official portal for complete requirements"],
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
    <div className="min-h-screen flex flex-col bg-slate-50/40 text-slate-900">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto my-12 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xl space-y-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">Team Administration</h2>
              <p className="text-xs text-slate-500">
                Designated team portal to publish opportunities, update deadlines, and manage programs without requiring a developer.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold mb-1 text-slate-700">
                  Team Passcode
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter team passcode..."
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all"
              >
                Sign In
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  The Student Growth Hub Administration
                </span>
                <h1 className="text-3xl font-black text-slate-900 mt-1">
                  Opportunities &amp; Programs Manager
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/opportunities"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  View Opportunities Hub
                </Link>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2 text-xs font-bold">
              <button
                onClick={() => setActiveTab("opportunities")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === "opportunities"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Opportunities ({opportunitiesList.length})
              </button>
              <button
                onClick={() => setActiveTab("programs")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === "programs"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Active Programs
              </button>
            </div>

            {activeTab === "opportunities" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Plus className="w-4 h-4 text-blue-600" />
                      <span>Publish New Opportunity</span>
                    </h3>
                  </div>

                  {addedSuccess && (
                    <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-700 text-xs font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Opportunity published!</span>
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
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-semibold mb-1">Organization *</label>
                        <input
                          type="text"
                          required
                          placeholder="Host Organization"
                          value={newOpp.organization}
                          onChange={(e) => setNewOpp({ ...newOpp, organization: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Category *</label>
                        <select
                          value={newOpp.category}
                          onChange={(e) => setNewOpp({ ...newOpp, category: e.target.value as Opportunity["category"] })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
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
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
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
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">Official Application Link *</label>
                      <input
                        type="url"
                        required
                        placeholder="https://..."
                        value={newOpp.officialLink}
                        onChange={(e) => setNewOpp({ ...newOpp, officialLink: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">Description *</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Summary of benefits and eligibility..."
                        value={newOpp.description}
                        onChange={(e) => setNewOpp({ ...newOpp, description: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xs"
                    >
                      Publish Opportunity
                    </button>
                  </form>
                </div>

                <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                      <span>Published Opportunities ({opportunitiesList.length})</span>
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {opportunitiesList.map((opp) => (
                      <div
                        key={opp.id}
                        className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/60 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="min-w-0">
                          <div className="font-bold text-slate-900 truncate">
                            {opp.title}
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                            <span className="text-blue-600 font-semibold">{opp.category}</span>
                            <span>•</span>
                            <span>{opp.organization}</span>
                            <span>•</span>
                            <span className="text-rose-500 font-medium">Deadline: {opp.deadline}</span>
                          </div>
                        </div>

                        <Link
                          href={`/opportunities/${opp.slug}`}
                          className="shrink-0 p-2 rounded-xl bg-white border border-slate-200 hover:text-blue-600 transition-colors"
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

            {activeTab === "programs" && (
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 space-y-4">
                <h3 className="text-base font-bold">Active Programs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-50/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-700 text-sm">Growth Beyond Grades</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold text-[10px]">Cohort 2 Ongoing</span>
                    </div>
                    <p className="text-slate-600">Cohort 1 trained 30 students across 5 countries (Nigeria, Cameroon, Kenya, Zimbabwe, Bolivia). Cohort 2 of 50 students across 12 countries is currently ongoing in partnership with The Reboot Wellbeing and Empowerment Foundation.</p>
                  </div>

                  <div className="p-4 rounded-2xl border border-blue-500/30 bg-blue-50/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-700 text-sm">ELITE Campus × Kryptr</span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold text-[10px]">Open Registration</span>
                    </div>
                    <p className="text-slate-600">3-week virtual work experience program (3 hours/week). Free for the first month via app.kryptr.co.</p>
                  </div>
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
