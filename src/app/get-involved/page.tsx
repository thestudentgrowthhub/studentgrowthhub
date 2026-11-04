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
  Send,
} from "lucide-react";
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
    <div className="min-h-screen flex flex-col bg-slate-50/40 text-slate-900">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24 bg-ambient-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Shape the Future with Us</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Get Involved with TSGH
            </h1>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              Whether you want to volunteer, join our Youth Advisory Board, partner as an organization, or ask questions, we&apos;d love to connect.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center justify-center gap-2 p-2 bg-blue-50/80 border border-blue-100 rounded-2xl max-w-xl mx-auto text-sm font-bold">
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
                  className={`flex-1 min-h-[44px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-blue-700"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Card */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-5 max-w-md mx-auto animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Application Received!
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Thank you, <strong>{formData.fullName}</strong>. Our student operations team will review your submission and reach out via email or WhatsApp within 2-3 business days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="min-h-[48px] px-6 py-3 rounded-2xl text-sm font-bold bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {activeTab === "volunteer" && "Volunteer With The Student Growth Hub"}
                    {activeTab === "yab" && "Apply for the Youth Advisory Board (YAB)"}
                    {activeTab === "partner" && "Institutional & Corporate Partnership"}
                    {activeTab === "contact" && "Get in Touch with TSGH Team"}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amina Bello"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kenya, Nigeria, Cameroon, Ghana..."
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      WhatsApp Number / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {activeTab !== "contact" && (
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {activeTab === "partner" ? "Organization / Institution Name *" : "University / Institution & Field of Study *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={activeTab === "partner" ? "e.g. TechCorp Foundation" : "e.g. University of Lagos (Computer Science)"}
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
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
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Submit Application</span>
                    <Send className="w-5 h-5" />
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
