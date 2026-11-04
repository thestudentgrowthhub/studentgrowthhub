import Link from "next/link";
import { PhotoGalleryModal } from "@/components/PhotoGalleryModal";
import { Camera, MessageSquarePlus } from "lucide-react";

export function StudentStories() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-bold mb-3">
            <Camera className="w-4 h-4 text-emerald-600" />
            <span>Community in Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Community Gallery
          </h2>
          <p className="text-base sm:text-xl text-slate-600 mt-3 leading-relaxed">
            Authentic moments of students learning, collaborating, attending conferences, and driving impact across our community. Click any photo to view full size.
          </p>
        </div>

        {/* Large-Format Photo Gallery */}
        <PhotoGalleryModal />

        {/* Honest Callout for Real Student Testimonials (Section 4.7 of Blueprint) */}
        <div className="mt-16 rounded-3xl bg-blue-50/70 border border-blue-200/80 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Student Stories &amp; Testimonials
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Have You Benefited from The Student Growth Hub?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you participated in a Growth Beyond Grades cohort, gained experience through ELITE Campus × Kryptr, or discovered a scholarship through our community, we would love to feature your real story.
            </p>
          </div>
          <Link
            href="/get-involved?tab=contact"
            className="min-h-[48px] shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all"
          >
            <MessageSquarePlus className="w-5 h-5" />
            <span>Share Your Story</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
