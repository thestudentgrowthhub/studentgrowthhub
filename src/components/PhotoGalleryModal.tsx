"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface GalleryImage {
  src: string;
  title: string;
  subtitle: string;
  category: "Leadership & Conferences" | "Skills & Mentorship" | "Community & Outreach";
}

export const COMMUNITY_GALLERY: GalleryImage[] = [
  {
    src: "/images/un-youth-delegates-group.jpg",
    title: "Youth Delegates & International Representation",
    subtitle: "Students representing youth perspectives at leadership conferences and forums.",
    category: "Leadership & Conferences",
  },
  {
    src: "/images/sdg4-quality-education-outreach.jpg",
    title: "Quality Education & School Outreach",
    subtitle: "Student leaders engaging school pupils in quality education and community development.",
    category: "Community & Outreach",
  },
  {
    src: "/images/un-women-nile-university-forum.jpg",
    title: "University Leadership & Student Forum",
    subtitle: "Students collaborating during campus leadership and development sessions.",
    category: "Leadership & Conferences",
  },
  {
    src: "/images/tsgh-founders-sdg-champions.jpg",
    title: "Student Changemakers & Community Advocates",
    subtitle: "Promoting the Sustainable Development Goals and youth-led community impact.",
    category: "Community & Outreach",
  },
  {
    src: "/images/model-un-summit-boardroom.jpg",
    title: "Policy Dialogue & Diplomatic Simulation",
    subtitle: "Developing public speaking, negotiation, and leadership capacity.",
    category: "Leadership & Conferences",
  },
  {
    src: "/images/world-bank-earn-conference-delegates.jpg",
    title: "Economic & Career Development Conference",
    subtitle: "Connecting students with industry professionals and policy discussions.",
    category: "Leadership & Conferences",
  },
  {
    src: "/images/grassroots-climate-sdg-school-drive.jpg",
    title: "Secondary School Mentorship & Outreach",
    subtitle: "Encouraging young students to learn, grow, and contribute to their communities.",
    category: "Community & Outreach",
  },
  {
    src: "/images/unesco-auditorium-plenary-session.jpg",
    title: "Youth Plenary & Keynote Sessions",
    subtitle: "Students gathered for workshops, seminars, and educational dialogues.",
    category: "Leadership & Conferences",
  },
  {
    src: "/images/employability-training-logbook-session.jpg",
    title: "Practical Employability & Career Readiness",
    subtitle: "Hands-on mentoring, logbook review, and workplace readiness training.",
    category: "Skills & Mentorship",
  },
  {
    src: "/images/african-innovation-hub-delegates.jpg",
    title: "Digital Skills & Innovation Cohort",
    subtitle: "Empowering students with digital literacy, innovation, and leadership skills.",
    category: "Skills & Mentorship",
  },
  {
    src: "/images/female-leaders-mentorship-meetup.jpg",
    title: "Peer Mentorship & Supportive Networks",
    subtitle: "Building meaningful connections among students, mentors, and peers.",
    category: "Skills & Mentorship",
  },
  {
    src: "/images/summit-award-certificate-winners.jpg",
    title: "Celebrating Student Excellence & Growth",
    subtitle: "Recognizing students participating in leadership and development programs.",
    category: "Leadership & Conferences",
  },
  {
    src: "/images/fao-un-house-student-delegates.jpg",
    title: "Student Delegation & Institutional Visit",
    subtitle: "Exposing students to global institutions and leadership opportunities.",
    category: "Leadership & Conferences",
  },
  {
    src: "/images/amnesty-international-youth-delegates.jpg",
    title: "Civic Engagement & Youth Dialogue",
    subtitle: "Equipping young people to become responsible leaders and changemakers.",
    category: "Leadership & Conferences",
  },
  {
    src: "/images/student-leaders-stage-speaking.jpg",
    title: "Public Speaking & Panel Discussions",
    subtitle: "Developing communication confidence and leadership on stage.",
    category: "Leadership & Conferences",
  },
  {
    src: "/images/creative-leadership-student-cohort.jpg",
    title: "Collaborative Student Cohort Session",
    subtitle: "Peer-to-peer learning and teamwork in action.",
    category: "Skills & Mentorship",
  },
  {
    src: "/images/student-panel-workshop-audience.jpg",
    title: "Interactive Student Workshop",
    subtitle: "Students participating in practical career and academic growth sessions.",
    category: "Skills & Mentorship",
  },
  {
    src: "/images/outdoor-youth-leadership-seminar.jpg",
    title: "Outdoor Leadership & Community Seminar",
    subtitle: "Interactive community engagement and peer learning.",
    category: "Community & Outreach",
  },
];

const CATEGORIES = [
  "All Photos",
  "Leadership & Conferences",
  "Skills & Mentorship",
  "Community & Outreach",
] as const;

export function PhotoGalleryModal() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All Photos");
  const [showAll, setShowAll] = useState(false);

  const filteredPhotos =
    activeCategory === "All Photos"
      ? COMMUNITY_GALLERY
      : COMMUNITY_GALLERY.filter((img) => img.category === activeCategory);

  const visiblePhotos = showAll ? filteredPhotos : filteredPhotos.slice(0, 9);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredPhotos.length);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedIndex(null);
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all min-h-[42px] ${
              activeCategory === cat
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Large-Format 3-Column Photo Grid (Big, Crisp Images — Not Tiny Icons) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {visiblePhotos.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => openModal(i)}
            className="group relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-100 border-2 border-white shadow-md hover:shadow-xl ring-1 ring-slate-200/80 focus:outline-none focus:ring-2 focus:ring-blue-600 text-left transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/15 to-transparent" />

            <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-600/90 text-white mb-1.5">
                {img.category}
              </span>
              <p className="text-base sm:text-lg font-bold leading-snug">
                {img.title}
              </p>
              <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mt-0.5">
                {img.subtitle}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Show All / Show Less Toggle */}
      {filteredPhotos.length > 9 && (
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="min-h-[48px] inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all"
          >
            <span>
              {showAll
                ? "Show Fewer Photos"
                : `View All ${filteredPhotos.length} Community Photos`}
            </span>
          </button>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && filteredPhotos[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={closeModal}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white hover:bg-slate-100 text-slate-900 flex items-center justify-center transition-colors z-50 shadow-lg"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={prevImage}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-slate-100 text-slate-900 flex items-center justify-center transition-colors z-50 shadow-lg"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-slate-100 text-slate-900 flex items-center justify-center transition-colors z-50 shadow-lg"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-slate-100">
              <Image
                src={filteredPhotos[selectedIndex].src}
                alt={filteredPhotos[selectedIndex].title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                  {filteredPhotos[selectedIndex].category} • Photo {selectedIndex + 1} of{" "}
                  {filteredPhotos.length}
                </span>
                <h4 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                  {filteredPhotos[selectedIndex].title}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  {filteredPhotos[selectedIndex].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
