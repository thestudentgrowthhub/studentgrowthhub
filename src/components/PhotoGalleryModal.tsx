"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Images } from "lucide-react";

export interface GalleryImage {
  src: string;
  title: string;
  subtitle: string;
  category: "Youth Diplomacy" | "Leadership & Summits" | "SDG & School Outreach" | "Campus & Mentorship";
}

export const COMMUNITY_GALLERY: GalleryImage[] = [
  {
    src: "/images/un-youth-delegates-group.jpg",
    title: "UN80 Youth Delegates Delegation",
    subtitle: "Student Growth Hub delegates representing youth voices in formal diplomatic sessions.",
    category: "Youth Diplomacy",
  },
  {
    src: "/images/sdg4-quality-education-outreach.jpg",
    title: "SDG 4: Quality Education School Outreach",
    subtitle: "Student Growth Hub youth leaders mentoring primary school children on education and SDG changemaking.",
    category: "SDG & School Outreach",
  },
  {
    src: "/images/un-women-nile-university-forum.jpg",
    title: "Nile University & UN Women Tertiary Forum",
    subtitle: "University student leaders collaborating on digital safety, inclusion, and campus leadership.",
    category: "Leadership & Summits",
  },
  {
    src: "/images/tsgh-founders-sdg-champions.jpg",
    title: "Student Growth Hub Leaders Championing the UN SDGs",
    subtitle: "Student leaders in official Student Growth Hub and EcoRise gear advocating for the 17 Global Goals.",
    category: "SDG & School Outreach",
  },
  {
    src: "/images/model-un-summit-boardroom.jpg",
    title: "International Model UN Diplomatic Boardroom",
    subtitle: "Student delegates debating global policy across international flags.",
    category: "Youth Diplomacy",
  },
  {
    src: "/images/world-bank-earn-conference-delegates.jpg",
    title: "World Bank & E.A.R.N Conference Delegates",
    subtitle: "Student Growth Hub community members participating in national economic and agricultural youth forums.",
    category: "Leadership & Summits",
  },
  {
    src: "/images/grassroots-climate-sdg-school-drive.jpg",
    title: "Grassroots Climate & SDG School Drive",
    subtitle: "Empowering school pupils with SDG 4, SDG 11, and SDG 13 environmental stewardship.",
    category: "SDG & School Outreach",
  },
  {
    src: "/images/campus-student-ambassadors-duo.jpg",
    title: "Campus Student Ambassadors",
    subtitle: "Dedicated student ambassadors driving peer learning and opportunity awareness on campus.",
    category: "Campus & Mentorship",
  },
  {
    src: "/images/unesco-auditorium-plenary-session.jpg",
    title: "UNESCO Auditorium Youth Plenary Session",
    subtitle: "Hundreds of young changemakers gathered for high-level keynote dialogues.",
    category: "Leadership & Summits",
  },
  {
    src: "/images/fao-un-house-student-delegates.jpg",
    title: "Delegates at the UN FAO Headquarters",
    subtitle: "Student representatives advancing food security and youth policy dialogue.",
    category: "Youth Diplomacy",
  },
  {
    src: "/images/amnesty-international-youth-delegates.jpg",
    title: "Amnesty International Youth Summit",
    subtitle: "Student leaders championing civic participation, human rights, and youth leadership.",
    category: "Leadership & Summits",
  },
  {
    src: "/images/employability-training-logbook-session.jpg",
    title: "Employability & Training Logbook Review",
    subtitle: "Practical career readiness and logbook mentoring for female university students.",
    category: "Campus & Mentorship",
  },
  {
    src: "/images/sdg-wheel-un-delegates-quartet.jpg",
    title: "Youth Delegates at the UN SDG Wheel",
    subtitle: "Four student delegates standing united for Sustainable Development Goal 4.",
    category: "Youth Diplomacy",
  },
  {
    src: "/images/summit-award-certificate-winners.jpg",
    title: "Best Delegate & Leadership Award Recipients",
    subtitle: "Celebrating excellence as Student Growth Hub delegates receive recognition certificates.",
    category: "Leadership & Summits",
  },
  {
    src: "/images/female-leaders-mentorship-meetup.jpg",
    title: "Young Women in Leadership & Mentorship",
    subtitle: "Building supportive sisterhood and career mentorship networks for female students.",
    category: "Campus & Mentorship",
  },
  {
    src: "/images/un-security-council-youth-delegates.jpg",
    title: "UN Security Council Simulation Delegates",
    subtitle: "Delegates sharpening negotiation, public speaking, and conflict resolution skills.",
    category: "Youth Diplomacy",
  },
  {
    src: "/images/student-leaders-stage-speaking.jpg",
    title: "Student Leaders Speaking on Stage",
    subtitle: "Amplifying youth perspectives on stage during leadership and prosperity dialogues.",
    category: "Leadership & Summits",
  },
  {
    src: "/images/creative-leadership-student-cohort.jpg",
    title: "Creative Leadership Student Cohort",
    subtitle: "Bringing together diverse student talents in technology, arts, and civic leadership.",
    category: "Campus & Mentorship",
  },
  {
    src: "/images/diplomatic-chamber-delegates.jpg",
    title: "Student Delegates in Diplomatic Chamber",
    subtitle: "Hands-on policy research and digital collaboration in parliamentary chambers.",
    category: "Youth Diplomacy",
  },
  {
    src: "/images/african-innovation-hub-delegates.jpg",
    title: "Student Innovators at Creative Hub",
    subtitle: "Connecting students with innovation hubs, digital skills, and startup ecosystems.",
    category: "Campus & Mentorship",
  },
];

const GALLERY_CATEGORIES = [
  "All",
  "Youth Diplomacy",
  "Leadership & Summits",
  "SDG & School Outreach",
  "Campus & Mentorship",
] as const;

export function PhotoGalleryModal() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "All"
      ? COMMUNITY_GALLERY
      : COMMUNITY_GALLERY.filter((item) => item.category === activeCategory);

  const displayedPhotos = showAll ? filteredPhotos : filteredPhotos.slice(0, 8);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredPhotos.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  };

  return (
    <div className="space-y-6">
      {/* Dynamic Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeCategory === cat
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Visual Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {displayedPhotos.map((item, idx) => (
          <div
            key={item.src}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl border-2 border-white bg-blue-50 transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3.5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                {item.category}
              </span>
              <p className="text-xs sm:text-sm font-bold leading-snug line-clamp-1">
                {item.title}
              </p>
            </div>
            <div className="absolute top-2.5 right-2.5 p-2 rounded-xl bg-white/90 text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Expand / Collapse Gallery Button */}
      {filteredPhotos.length > 8 && (
        <div className="text-center pt-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 shadow-xs transition-all"
          >
            <Images className="w-4 h-4" />
            <span>
              {showAll
                ? "Show Compact Gallery (8 Photos)"
                : `Explore All ${filteredPhotos.length} Community Photos`}
            </span>
          </button>
        </div>
      )}

      {/* Lightbox Modal (Clean, Bright & Airy) */}
      {selectedIndex !== null && filteredPhotos[selectedIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-blue-950/75 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white text-slate-800 hover:bg-slate-100 shadow-lg transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white text-slate-800 hover:bg-blue-50 shadow-lg transition-colors z-50 hidden sm:flex items-center justify-center"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white text-slate-800 hover:bg-blue-50 shadow-lg transition-colors z-50 hidden sm:flex items-center justify-center"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-100">
              <Image
                src={filteredPhotos[selectedIndex].src}
                alt={filteredPhotos[selectedIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            <div className="p-5 sm:p-6 bg-white text-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-200">
              <div>
                <div className="inline-block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                  {filteredPhotos[selectedIndex].category} • Photo {selectedIndex + 1} of{" "}
                  {filteredPhotos.length}
                </div>
                <h4 className="text-lg sm:text-xl font-black text-slate-900">
                  {filteredPhotos[selectedIndex].title}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
                  {filteredPhotos[selectedIndex].subtitle}
                </p>
              </div>

              {/* Mobile next/prev controls */}
              <div className="flex sm:hidden items-center gap-2 w-full justify-between pt-3 border-t border-slate-200">
                <button
                  onClick={prevImage}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-sm font-bold"
                >
                  Previous
                </button>
                <button
                  onClick={nextImage}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold"
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
