"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is The Student Growth Hub (TSGH) and who can join?",
    answer:
      "The Student Growth Hub is a global, youth-led student development platform established to help young people grow beyond the classroom. Any undergraduate, postgraduate, or aspiring high school student from any country can join our free community across WhatsApp and LinkedIn to access scholarships, practical skill-building, and peer mentorship.",
  },
  {
    question: "Are the scholarships and opportunities on the hub free to apply for?",
    answer:
      "Yes, 100%. We only curate and publish verified, legitimate opportunities (scholarships, fellowships, grants, internships) from recognized international organizations, universities, and governments. TSGH will never charge students an application fee to discover or access opportunities.",
  },
  {
    question: "What is the Growth Beyond Grades initiative?",
    answer:
      "Growth Beyond Grades is our flagship 6-week intensive cohort program organized in partnership with The Reboot Wellbeing & Empowerment Foundation. Cohort 1 brought together 30 students across 5 countries, and Cohort 2 is actively training 50 students across 12 countries in mental resilience, leadership, career readiness, and employability.",
  },
  {
    question: "How does the ELITE Campus virtual work experience with Kryptr work?",
    answer:
      "ELITE Campus is a 3-week virtual work experience program designed with Kryptr. It requires just 3 hours per week, allowing students to complete realistic workplace briefs, build their portfolio, and gain direct access to paid internship opportunities with vetted startup partners. It is 100% free for the first month.",
  },
  {
    question: "How can I volunteer or join the Youth Advisory Board?",
    answer:
      "We regularly onboard passionate student leaders, content creators, event hosts, and moderators. Head to our 'Get Involved' page and choose either the 'Volunteer' or 'Youth Advisory Board' tab to submit your application.",
  },
  {
    question: "How can institutions and schools partner with TSGH?",
    answer:
      "We partner with secondary schools, tertiary universities, NGOs, and corporations to organize student masterclasses, hackathons, and scholarship distribution. Reach out through our Institutional Partnerships form on the Get Involved page or email us directly at thestudentgrowthhub@gmail.com.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Everything you need to know about joining TSGH, our cohort initiatives, and our verified opportunities.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden bg-slate-50/40 dark:bg-slate-800/20 transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-600 text-white border-blue-600" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
