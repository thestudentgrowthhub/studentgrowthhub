import Image from "next/image";
import { STUDENT_STORIES } from "@/data/site-data";
import { Quote } from "lucide-react";
import { PhotoGalleryModal } from "@/components/PhotoGalleryModal";

export function StudentStories() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">
            Voices of TSGH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Real Students. Real Growth.
          </h2>
          <p className="text-base sm:text-xl text-slate-600 mt-3 leading-relaxed">
            Hear from fellows, scholarship recipients, and delegates who discovered opportunities and took action through our community.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {STUDENT_STORIES.map((story) => (
            <div
              key={story.name}
              className="p-7 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <Quote className="w-9 h-9 text-blue-500/30 mb-4" />
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-emerald-500/40">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 leading-snug">
                    {story.name}
                  </div>
                  <div className="text-sm text-slate-600 mt-0.5 font-medium">
                    {story.role} • <span className="font-bold text-emerald-600">{story.country}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Community Gallery Strip with Lightbox Modal */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                Authentic Community Moments
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Changemakers in Action Worldwide
              </h3>
            </div>
            <span className="text-sm font-medium text-slate-500">
              Tap any photo to view in high-resolution lightbox
            </span>
          </div>

          <PhotoGalleryModal />
        </div>

      </div>
    </section>
  );
}
