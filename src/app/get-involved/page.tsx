"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommunityCTA } from "@/components/CommunityCTA";
import {
  Heart,
  Users,
  Handshake,
  Mail,
  CheckCircle2,
  Sparkles,
  Send,
  MessageCircle,
} from "lucide-react";
import { COMMUNITY_LINKS } from "@/data/site-data";
import confetti from "canvas-confetti";

type TabType = "volunteer" | "yab" | "partner" | "contact";

export default function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState<TabType>("volunteer");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    university: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      university: "",
      role: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shape the Future with Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Get Involved with TSGH
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you want to volunteer, join our Youth Advisory Board, partner as an organization, or ask questions, we&apos;d love to connect.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-200/60 dark:bg-slate-800/60 rounded-2xl max-w-xl mx-auto text-xs sm:text-sm font-semibold">
            {[
              { id: "volunteer", label: "Volunteer", icon: Heart },
              { id: "yab", label: "Youth Advisory", icon: Users },
              { id: "partner", label: "Partnerships", icon: Handshake },
              { id: "contact", label: "Contact Us", icon: Mail },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as TabType);
                    setSubmitted(false);
                  }}
                  className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    isActive
                      ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Card */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 max-w-md mx-auto animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Application Received!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Thank you for stepping forward to build with The Student Growth Hub. Our coordination team reviews intakes weekly and will contact you via email or WhatsApp.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={COMMUNITY_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                    Join WhatsApp Community While You Wait
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {activeTab === "volunteer" && "Volunteer With The Student Growth Hub"}
                    {activeTab === "yab" && "Apply for the Youth Advisory Board (YAB)"}
                    {activeTab === "partner" && "Institutional & Corporate Partnership"}
                    {activeTab === "contact" && "Get in Touch with TSGH Team"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {activeTab === "volunteer" &&
                      "Join our passionate team of student moderators, content creators, event hosts, and opportunity curators across 37+ countries."}
                    {activeTab === "yab" &&
                      "Provide strategic guidance, advocate for student policies, and help shape TSGH's international roadmap."}
                    {activeTab === "partner" &&
                      "Collaborate on joint training cohorts, virtual internships, scholarships, and SDG impact initiatives."}
                    {activeTab === "contact" &&
                      "Have questions about our programs or need assistance? Drop our team a note."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amina Bello"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kenya, Nigeria, Cameroon, Ghana..."
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      WhatsApp Number / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {activeTab !== "contact" && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {activeTab === "partner" ? "Organization / Institution Name *" : "University / Institution & Field of Study *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={activeTab === "partner" ? "e.g. TechCorp Foundation" : "e.g. University of Lagos (Computer Science)"}
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {activeTab === "volunteer" && "Why do you want to volunteer and what role interests you? *"}
                    {activeTab === "yab" && "Tell us about your leadership experience and vision for TSGH *"}
                    {activeTab === "partner" && "How would your organization like to collaborate with TSGH? *"}
                    {activeTab === "contact" && "Your Message *"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details so our team can best assist you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Submit Application</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </main>

      <CommunityCTA />
      <Footer />
    </div>
  );
}

