"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface GalleryImage {
  src: string;
  title: string;
  subtitle: string;
  category: string;
}

export const COMMUNITY_GALLERY: GalleryImage[] = [
  {
    src: "/images/IMG-20261030-WA0041.jpg",
    title: "SDG 4: Quality Education Outreach",
    subtitle: "TSGH youth leaders mentoring primary school students on education and SDG changemaking.",
    category: "Community Impact",
  },
  {
    src: "/images/IMG-20261030-WA0049.jpg",
    title: "Global Changemakers",
    subtitle: "Two TSGH leads championing youth participation in the UN Sustainable Development Goals.",
    category: "Leadership",
  },
  {
    src: "/images/IMG-20261030-WA0043.jpg",
    title: "International Model UN Conference",
    subtitle: "TSGH student delegates debating global diplomacy and education policy in a simulated UN assembly.",
    category: "Diplomacy",
  },
  {
    src: "/images/IMG-20261030-WA0057.jpg",
    title: "Digital Violence & Inclusion Forum",
    subtitle: "Delegates participating in the tertiary institutions forum on digital safety and inclusion.",
    category: "Advocacy",
  },
  {
    src: "/images/IMG-20261030-WA0052.jpg",
    title: "Amnesty International Youth Delegates",
    subtitle: "TSGH leaders representing student voices at an international human rights convening.",
    category: "Human Rights",
  },
  {
    src: "/images/IMG-20261030-WA0055.jpg",
    title: "EcoRise Community Clean-Up & Climate Action",
    subtitle: "Grassroots mobilization empowering young children to understand environmental stewardship.",
    category: "Climate Action",
  },
  {
    src: "/images/IMG-20261030-WA0060.jpg",
    title: "United Nations Youth Delegates",
    subtitle: "TSGH delegates at an international summit representing youth perspectives.",
    category: "Global Representation",
  },
  {
    src: "/images/IMG-20261030-WA0046.jpg",
    title: "Collaborative Workshop & Networking",
    subtitle: "Students engaging in peer problem-solving and career roadmap design.",
    category: "Capacity Building",
  },
];

export function PhotoGalleryModal() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % COMMUNITY_GALLERY.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + COMMUNITY_GALLERY.length) % COMMUNITY_GALLERY.length
      );
    }
  };

  return (
    <div>
      {/* Visual Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {COMMUNITY_GALLERY.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-lg border border-slate-200/80 dark:border-slate-800 transition-all duration-200 hover:-translate-y-1"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                {item.category}
              </span>
              <p className="text-xs font-bold leading-snug line-clamp-1">{item.title}</p>
            </div>
            <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden sm:flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden sm:flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={COMMUNITY_GALLERY[selectedIndex].src}
                alt={COMMUNITY_GALLERY[selectedIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-800">
              <div>
                <div className="inline-block text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  {COMMUNITY_GALLERY[selectedIndex].category} • Photo {selectedIndex + 1} of{" "}
                  {COMMUNITY_GALLERY.length}
                </div>
                <h4 className="text-base sm:text-lg font-bold">
                  {COMMUNITY_GALLERY[selectedIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  {COMMUNITY_GALLERY[selectedIndex].subtitle}
                </p>
              </div>

              {/* Mobile next/prev controls */}
              <div className="flex sm:hidden items-center gap-2 w-full justify-between pt-2 border-t border-slate-800">
                <button
                  onClick={prevImage}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold"
                >
                  Previous
                </button>
                <button
                  onClick={nextImage}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-xs font-bold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
