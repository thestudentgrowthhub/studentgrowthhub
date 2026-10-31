import Image from "next/image";
import { STUDENT_STORIES } from "@/data/site-data";
import { Quote } from "lucide-react";
import { PhotoGalleryModal } from "@/components/PhotoGalleryModal";

export function StudentStories() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Voices of TSGH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
            Real Students. Real Growth.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Hear from fellows, scholarship recipients, and delegates who discovered opportunities and took action through our community.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDENT_STORIES.map((story) => (
            <div
              key={story.name}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-500/20 mb-3" />
                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-emerald-500/30">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white leading-none">
                    {story.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {story.role} • <span className="font-semibold text-emerald-600 dark:text-emerald-400">{story.country}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Community Gallery Strip with Lightbox Modal */}
        <div className="mt-16 pt-12 border-t border-slate-200/70 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Interactive Community Gallery
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Changemakers in Action Worldwide
              </h3>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Tap any photo to view in high-resolution lightbox
            </span>
          </div>

          <PhotoGalleryModal />
        </div>

      </div>
    </section>
  );
}
