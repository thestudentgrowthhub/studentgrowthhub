"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OPPORTUNITIES, Opportunity } from "@/data/site-data";
import {
  fetchOpportunities,
  createOpportunityInDb,
  updateOpportunityInDb,
  deleteOpportunityFromDb,
  fetchApplicationsFromDb,
  updateApplicationStatusInDb,
  fetchSubscribersFromDb,
  ApplicationRecord,
  SubscriberRecord,
  supabase,
} from "@/lib/supabase";
import {
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  CheckCircle2,
  Lock,
  ArrowRight,
  RefreshCw,
  Search,
  Filter,
  Users,
  Mail,
  ShieldCheck,
  X,
  Clock,
  Sparkles,
} from "lucide-react";

export default function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [activeTab, setActiveTab] = useState<"opportunities" | "applications" | "subscribers">("opportunities");

  // Opportunities state
  const [opportunitiesList, setOpportunitiesList] = useState<Opportunity[]>(OPPORTUNITIES);
  const [oppSearch, setOppSearch] = useState("");
  const [oppCategoryFilter, setOppCategoryFilter] = useState("all");
  const [isLoadingOpps, setIsLoadingOpps] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionNotice, setActionNotice] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // New opportunity form state
  const [newOpp, setNewOpp] = useState({
    title: "",
    organization: "",
    category: "Scholarship" as Opportunity["category"],
    fundingType: "Fully Funded" as Opportunity["fundingType"],
    eligibleRegion: "Global",
    educationLevel: "Undergraduate" as Opportunity["educationLevel"],
    deadline: "",
    location: "Worldwide",
    description: "",
    officialLink: "",
    benefitsText: "",
    eligibilityText: "",
    featured: false,
  });

  // Edit opportunity modal state
  const [editingOpp, setEditingOpp] = useState<Opportunity | null>(null);

  // Applications & Newsletter state
  const [applications, setApplications] = useState<ApplicationRecord[]>([]);
  const [isLoadingApps, setIsLoadingApps] = useState(false);
  const [appCategoryFilter, setAppCategoryFilter] = useState("all");

  const [subscribers, setSubscribers] = useState<SubscriberRecord[]>([]);
  const [isLoadingSubs, setIsLoadingSubs] = useState(false);

  // Quick notice trigger
  const showNotice = (text: string, type: "success" | "error" = "success") => {
    setActionNotice({ type, text });
    setTimeout(() => setActionNotice(null), 4000);
  };

  // Check persisted passcode in sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("tsgh_admin_auth");
      if (saved === "true") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  // Fetch opportunities when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadOpportunities();
      loadApplications();
      loadSubscribers();
    }
  }, [isAuthenticated]);

  const loadOpportunities = async () => {
    setIsLoadingOpps(true);
    try {
      const data = await fetchOpportunities();
      setOpportunitiesList(data);
    } catch {
      setOpportunitiesList(OPPORTUNITIES);
    } finally {
      setIsLoadingOpps(false);
    }
  };

  const loadApplications = async () => {
    setIsLoadingApps(true);
    try {
      const data = await fetchApplicationsFromDb();
      setApplications(data);
    } finally {
      setIsLoadingApps(false);
    }
  };

  const loadSubscribers = async () => {
    setIsLoadingSubs(true);
    try {
      const data = await fetchSubscribersFromDb();
      setSubscribers(data);
    } finally {
      setIsLoadingSubs(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim().length > 0) {
      setIsAuthenticated(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("tsgh_admin_auth", "true");
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("tsgh_admin_auth");
    }
  };

  // CREATE OPPORTUNITY
  const handleCreateOpportunity = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedSlug = newOpp.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const benefitsArray = newOpp.benefitsText
      .split("\n")
      .map((b) => b.trim())
      .filter(Boolean);

    const eligibilityArray = newOpp.eligibilityText
      .split("\n")
      .map((el) => el.trim())
      .filter(Boolean);

    const payload: Omit<Opportunity, "id"> = {
      slug: `${generatedSlug}-${Date.now().toString().slice(-4)}`,
      title: newOpp.title.trim(),
      organization: newOpp.organization.trim(),
      category: newOpp.category,
      fundingType: newOpp.fundingType,
      eligibleRegion: newOpp.eligibleRegion.trim() || "Global",
      educationLevel: newOpp.educationLevel,
      deadline: newOpp.deadline || "Rolling Admissions",
      location: newOpp.location.trim() || "Worldwide",
      description: newOpp.description.trim(),
      officialLink: newOpp.officialLink.trim(),
      benefits: benefitsArray.length > 0 ? benefitsArray : ["Verified opportunity benefits provided upon selection"],
      eligibility: eligibilityArray.length > 0 ? eligibilityArray : ["See official opportunity page for full guidelines"],
      featured: newOpp.featured,
    };

    // If Supabase is connected, insert to db
    if (supabase) {
      const res = await createOpportunityInDb(payload);
      if (res.success) {
        showNotice("Opportunity successfully published to live database!");
        await loadOpportunities();
      } else {
        // Fallback to local state
        const localCreated: Opportunity = { id: `opp-${Date.now()}`, ...payload };
        setOpportunitiesList([localCreated, ...opportunitiesList]);
        showNotice("Saved locally (Supabase write failed or permissions pending).", "error");
      }
    } else {
      const localCreated: Opportunity = { id: `opp-${Date.now()}`, ...payload };
      setOpportunitiesList([localCreated, ...opportunitiesList]);
      showNotice("Published in demo mode. Configure Supabase key to persist globally.");
    }

    // Reset form
    setNewOpp({
      title: "",
      organization: "",
      category: "Scholarship",
      fundingType: "Fully Funded",
      eligibleRegion: "Global",
      educationLevel: "Undergraduate",
      deadline: "",
      location: "Worldwide",
      description: "",
      officialLink: "",
      benefitsText: "",
      eligibilityText: "",
      featured: false,
    });
    setIsSubmitting(false);
  };

  // UPDATE OPPORTUNITY
  const handleUpdateOpportunity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingOpp) return;
    setIsSubmitting(true);

    if (supabase && editingOpp.id && !editingOpp.id.startsWith("opp-static-")) {
      const res = await updateOpportunityInDb(editingOpp.id, editingOpp);
      if (res.success) {
        showNotice("Opportunity successfully updated!");
        await loadOpportunities();
      } else {
        setOpportunitiesList((prev) =>
          prev.map((o) => (o.id === editingOpp.id ? editingOpp : o))
        );
        showNotice("Updated locally.", "error");
      }
    } else {
      setOpportunitiesList((prev) =>
        prev.map((o) => (o.id === editingOpp.id ? editingOpp : o))
      );
      showNotice("Opportunity updated successfully in view.");
    }

    setEditingOpp(null);
    setIsSubmitting(false);
  };

  // DELETE OPPORTUNITY
  const handleDeleteOpportunity = async (opp: Opportunity) => {
    if (!confirm(`Are you sure you want to remove "${opp.title}"?`)) {
      return;
    }

    if (supabase && opp.id && !opp.id.startsWith("opp-static-")) {
      const res = await deleteOpportunityFromDb(opp.id);
      if (res.success) {
        showNotice("Opportunity removed from live database.");
        await loadOpportunities();
        return;
      }
    }

    // Local state removal
    setOpportunitiesList((prev) => prev.filter((o) => o.id !== opp.id));
    showNotice("Opportunity removed from view.");
  };

  // UPDATE APPLICATION STATUS
  const handleAppStatusChange = async (id: string, newStatus: ApplicationRecord["status"]) => {
    const ok = await updateApplicationStatusInDb(id, newStatus);
    if (ok) {
      setApplications((prev) =>
        prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
      );
      showNotice("Application status updated.");
    }
  };

  // Filtered opportunities
  const filteredOpportunities = opportunitiesList.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(oppSearch.toLowerCase()) ||
      opp.organization.toLowerCase().includes(oppSearch.toLowerCase()) ||
      opp.eligibleRegion.toLowerCase().includes(oppSearch.toLowerCase());
    const matchesCategory =
      oppCategoryFilter === "all" || opp.category === oppCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Filtered applications
  const filteredApplications = applications.filter((app) => {
    if (appCategoryFilter === "all") return true;
    return app.category === appCategoryFilter;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900">
      <Navbar />

      <main className="flex-1 py-10 lg:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto my-12 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xl space-y-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
              <Lock className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                TSGH Administration
              </h1>
              <p className="text-sm text-slate-500 mt-2">
                Authorized team portal to publish and update opportunities, application deadlines, and community submissions.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                required
                placeholder="Enter admin passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-center"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Access Management Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    TSGH Operations
                  </span>
                  <span className="text-xs text-slate-400">
                    {supabase ? "Connected to Supabase" : "Demo Mode"}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Website Administration Dashboard
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Update opportunities, track application deadlines, and review student applications.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/opportunities"
                  target="_blank"
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>View Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Notification banner */}
            {actionNotice && (
              <div
                className={`p-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-fadeIn border ${
                  actionNotice.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "bg-amber-50 text-amber-800 border-amber-200"
                }`}
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>{actionNotice.text}</span>
              </div>
            )}

            {/* Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <button
                onClick={() => setActiveTab("opportunities")}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  activeTab === "opportunities"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Opportunities ({opportunitiesList.length})</span>
              </button>
              <button
                onClick={() => setActiveTab("applications")}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  activeTab === "applications"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Submissions & Applications ({applications.length})</span>
              </button>
              <button
                onClick={() => setActiveTab("subscribers")}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  activeTab === "subscribers"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Subscribers ({subscribers.length})</span>
              </button>
            </div>

            {/* TAB 1: OPPORTUNITIES CRUD */}
            {activeTab === "opportunities" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Form to Publish New Opportunity */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Plus className="w-4 h-4 text-blue-600" />
                      <span>Publish New Opportunity</span>
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Blueprint 4.6
                    </span>
                  </div>

                  <form onSubmit={handleCreateOpportunity} className="space-y-3.5 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Opportunity Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chevening UK Government Master's Scholarship"
                        value={newOpp.title}
                        onChange={(e) => setNewOpp({ ...newOpp, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Organization *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Host Institution / Org"
                          value={newOpp.organization}
                          onChange={(e) => setNewOpp({ ...newOpp, organization: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Category *
                        </label>
                        <select
                          value={newOpp.category}
                          onChange={(e) =>
                            setNewOpp({ ...newOpp, category: e.target.value as Opportunity["category"] })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
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

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Funding Type *
                        </label>
                        <select
                          value={newOpp.fundingType}
                          onChange={(e) =>
                            setNewOpp({ ...newOpp, fundingType: e.target.value as Opportunity["fundingType"] })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        >
                          <option value="Fully Funded">Fully Funded</option>
                          <option value="Partially Funded">Partially Funded</option>
                          <option value="Free / Stipend">Free / Stipend</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Education Level
                        </label>
                        <select
                          value={newOpp.educationLevel}
                          onChange={(e) =>
                            setNewOpp({ ...newOpp, educationLevel: e.target.value as Opportunity["educationLevel"] })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        >
                          <option value="All Levels">All Levels</option>
                          <option value="Undergraduate">Undergraduate</option>
                          <option value="Postgraduate">Postgraduate</option>
                          <option value="High School & Undergrad">High School & Undergrad</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Eligible Region *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Global, Africa, EMEA"
                          value={newOpp.eligibleRegion}
                          onChange={(e) => setNewOpp({ ...newOpp, eligibleRegion: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Application Deadline *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. December 15, 2026 or Rolling"
                          value={newOpp.deadline}
                          onChange={(e) => setNewOpp({ ...newOpp, deadline: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Location / Host Destination
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. United Kingdom, Remote (Virtual), Global"
                        value={newOpp.location}
                        onChange={(e) => setNewOpp({ ...newOpp, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Official Application Link (URL) *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://..."
                        value={newOpp.officialLink}
                        onChange={(e) => setNewOpp({ ...newOpp, officialLink: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Detailed Description *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Explain who the opportunity is for, what it covers, and why students should apply..."
                        value={newOpp.description}
                        onChange={(e) => setNewOpp({ ...newOpp, description: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Key Benefits (1 per line)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Full tuition coverage&#10;Monthly living stipend&#10;Mentorship"
                        value={newOpp.benefitsText}
                        onChange={(e) => setNewOpp({ ...newOpp, benefitsText: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Eligibility Requirements (1 per line)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Enrolled undergraduate student&#10;Minimum GPA 3.0&#10;Aged 18-30"
                        value={newOpp.eligibilityText}
                        onChange={(e) => setNewOpp({ ...newOpp, eligibilityText: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={newOpp.featured}
                        onChange={(e) => setNewOpp({ ...newOpp, featured: e.target.checked })}
                        className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                      />
                      <label htmlFor="featured" className="text-slate-700 font-medium cursor-pointer">
                        Feature this opportunity on the homepage & top of directory
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                      <span>Publish Opportunity</span>
                    </button>
                  </form>
                </div>

                {/* Right: Live List & Management Controls */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          Published Opportunities
                        </h3>
                        <p className="text-xs text-slate-500">
                          Edit deadlines, modify content, or delete opportunities from the active directory.
                        </p>
                      </div>

                      <button
                        onClick={loadOpportunities}
                        disabled={isLoadingOpps}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 self-start sm:self-auto"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isLoadingOpps ? "animate-spin" : ""}`} />
                        <span>Refresh</span>
                      </button>
                    </div>

                    {/* Search & Filter */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
                      <div className="sm:col-span-7 relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Search title, organization, or region..."
                          value={oppSearch}
                          onChange={(e) => setOppSearch(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div className="sm:col-span-5 relative">
                        <Filter className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={oppCategoryFilter}
                          onChange={(e) => setOppCategoryFilter(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="all">All Categories</option>
                          <option value="Scholarship">Scholarships</option>
                          <option value="Internship">Internships</option>
                          <option value="Fellowship">Fellowships</option>
                          <option value="Leadership">Leadership</option>
                          <option value="Conference">Conferences</option>
                          <option value="Competition">Competitions</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Opportunities Items */}
                  <div className="space-y-3">
                    {filteredOpportunities.length === 0 ? (
                      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
                        No opportunities matched your search or filters.
                      </div>
                    ) : (
                      filteredOpportunities.map((opp) => (
                        <div
                          key={opp.id}
                          className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all space-y-3"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/50">
                                  {opp.category}
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/50">
                                  {opp.fundingType}
                                </span>
                                {opp.featured && (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                                    ★ Featured
                                  </span>
                                )}
                              </div>
                              <h4 className="text-sm font-bold text-slate-900">
                                {opp.title}
                              </h4>
                              <p className="text-xs text-slate-500">
                                {opp.organization} • {opp.eligibleRegion} • {opp.location}
                              </p>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                onClick={() => setEditingOpp({ ...opp })}
                                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                title="Edit Opportunity"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteOpportunity(opp)}
                                className="p-2 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                                title="Remove Opportunity"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span className="font-medium">Deadline:</span>
                              <span className="font-semibold text-slate-800">{opp.deadline}</span>
                            </div>

                            <div className="flex items-center gap-3">
                              <Link
                                href={`/opportunities/${opp.slug}`}
                                target="_blank"
                                className="text-blue-600 hover:underline inline-flex items-center gap-1 font-medium"
                              >
                                <span>Preview Page</span>
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                              {opp.officialLink && (
                                <a
                                  href={opp.officialLink}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-slate-500 hover:text-slate-800 inline-flex items-center gap-1"
                                >
                                  <span>Official Link</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: APPLICATIONS & SUBMISSIONS */}
            {activeTab === "applications" && (
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        Incoming Submissions & Applications
                      </h3>
                      <p className="text-xs text-slate-500">
                        Review volunteer applications, Youth Advisory Board submissions, and partner inquiries.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={appCategoryFilter}
                        onChange={(e) => setAppCategoryFilter(e.target.value)}
                        className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none"
                      >
                        <option value="all">All Categories</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="yab">Youth Advisory Board</option>
                        <option value="partner">Partnership</option>
                        <option value="contact">Contact Message</option>
                      </select>

                      <button
                        onClick={loadApplications}
                        disabled={isLoadingApps}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isLoadingApps ? "animate-spin" : ""}`} />
                        <span>Refresh</span>
                      </button>
                    </div>
                  </div>
                </div>

                {filteredApplications.length === 0 ? (
                  <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
                    No submissions found yet. When students submit forms on /get-involved, they will appear here.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredApplications.map((app) => (
                      <div
                        key={app.id}
                        className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/50">
                            {app.category}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {new Date(app.created_at).toLocaleDateString()}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-slate-900">
                            {app.full_name || "Anonymous Applicant"}
                          </h4>
                          <p className="text-xs text-blue-600 font-medium">{app.email}</p>
                          {app.phone && <p className="text-xs text-slate-500">Phone: {app.phone}</p>}
                        </div>

                        {(app.university || app.country || app.role) && (
                          <div className="p-2.5 rounded-xl bg-slate-50 text-xs text-slate-600 space-y-0.5">
                            {app.country && <p><span className="font-semibold">Country:</span> {app.country}</p>}
                            {app.university && <p><span className="font-semibold">Institution:</span> {app.university}</p>}
                            {app.role && <p><span className="font-semibold">Role:</span> {app.role}</p>}
                          </div>
                        )}

                        {app.message && (
                          <p className="text-xs text-slate-700 bg-slate-50/70 p-3 rounded-xl border border-slate-100 italic">
                            &quot;{app.message}&quot;
                          </p>
                        )}

                        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                          <span className="text-slate-500 font-medium">Status:</span>
                          <select
                            value={app.status}
                            onChange={(e) =>
                              handleAppStatusChange(app.id, e.target.value as ApplicationRecord["status"])
                            }
                            className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white font-semibold text-slate-800"
                          >
                            <option value="new">New</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="contacted">Contacted</option>
                            <option value="archived">Archived</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: NEWSLETTER SUBSCRIBERS */}
            {activeTab === "subscribers" && (
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Email Newsletter Subscribers
                    </h3>
                    <p className="text-xs text-slate-500">
                      Students subscribed to newly published opportunities and announcements.
                    </p>
                  </div>

                  <button
                    onClick={loadSubscribers}
                    disabled={isLoadingSubs}
                    className="px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isLoadingSubs ? "animate-spin" : ""}`} />
                    <span>Refresh</span>
                  </button>
                </div>

                {subscribers.length === 0 ? (
                  <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
                    No subscribers logged yet. Students subscribing in the footer will appear here.
                  </div>
                ) : (
                  <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left text-xs text-slate-700">
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold uppercase text-[10px] tracking-wider">
                        <tr>
                          <th className="px-6 py-3">Email Address</th>
                          <th className="px-6 py-3">Source</th>
                          <th className="px-6 py-3">Subscribed Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {subscribers.map((sub) => (
                          <tr key={sub.id} className="hover:bg-slate-50/60">
                            <td className="px-6 py-3.5 font-medium text-slate-900">{sub.email}</td>
                            <td className="px-6 py-3.5 text-slate-500">{sub.source}</td>
                            <td className="px-6 py-3.5 text-slate-500">
                              {new Date(sub.created_at).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* EDIT OPPORTUNITY MODAL */}
      {editingOpp && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Edit Opportunity</h3>
                <p className="text-xs text-slate-500">Update deadline, requirements, or application URL</p>
              </div>
              <button
                onClick={() => setEditingOpp(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUpdateOpportunity} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={editingOpp.title}
                  onChange={(e) => setEditingOpp({ ...editingOpp, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Organization</label>
                  <input
                    type="text"
                    required
                    value={editingOpp.organization}
                    onChange={(e) => setEditingOpp({ ...editingOpp, organization: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Deadline</label>
                  <input
                    type="text"
                    required
                    value={editingOpp.deadline}
                    onChange={(e) => setEditingOpp({ ...editingOpp, deadline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={editingOpp.category}
                    onChange={(e) =>
                      setEditingOpp({ ...editingOpp, category: e.target.value as Opportunity["category"] })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Scholarship">Scholarship</option>
                    <option value="Internship">Internship</option>
                    <option value="Fellowship">Fellowship</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Conference">Conference</option>
                    <option value="Competition">Competition</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Funding Type</label>
                  <select
                    value={editingOpp.fundingType}
                    onChange={(e) =>
                      setEditingOpp({ ...editingOpp, fundingType: e.target.value as Opportunity["fundingType"] })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Fully Funded">Fully Funded</option>
                    <option value="Partially Funded">Partially Funded</option>
                    <option value="Free / Stipend">Free / Stipend</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Official Application Link (URL)</label>
                <input
                  type="url"
                  required
                  value={editingOpp.officialLink}
                  onChange={(e) => setEditingOpp({ ...editingOpp, officialLink: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={4}
                  required
                  value={editingOpp.description}
                  onChange={(e) => setEditingOpp({ ...editingOpp, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="editFeatured"
                  checked={editingOpp.featured ?? false}
                  onChange={(e) => setEditingOpp({ ...editingOpp, featured: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <label htmlFor="editFeatured" className="text-slate-700 font-medium cursor-pointer">
                  Feature this opportunity at top of list
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setEditingOpp(null)}
                  className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-sm flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isSubmitting && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
