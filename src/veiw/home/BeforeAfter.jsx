import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import local images

import beforePainting from "../../assets/transformation/painting-before.webp";
import afterPainting from "../../assets/transformation/painting-after.webp";

import kitchenBefore from "../../assets/transformation/kitchen-before.webp";
import kitchenAfter from "../../assets/transformation/kitchen-after.webp";

import living2Before from "../../assets/transformation/living2-before.webp";
import living2After from "../../assets/transformation/living2-after.webp";

// Project data with different images for demonstration
const projects = [
  {
    id: 1,
    title: "Home Interior Painting",
    description:
      "Walls repaired, primed, and repainted for a clean, modern finish.",
    before: beforePainting,
    after: afterPainting,
  },
  {
    id: 2,
    title: "Kitchen Interior Renovation & Painting",
    description:
      "Walls repaired, primed, and painted to transform an unfinished kitchen into a bright, modern space.",
    before: kitchenBefore,
    after: kitchenAfter,
  },
  {
    id: 3,
    title: "Living Room Interior Painting & Remodel",
    description:
      "Updated wall colors, finishes, and layout to transform the living room into a modern, comfortable space.",
    before: living2Before,
    after: living2After,
  },
];

const ComparisonSlider = ({ before, after, title, description }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = (e) => {
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const stopDragging = () => setIsDragging(false);
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("touchend", stopDragging);
    return () => {
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className="swiper-no-swiping relative w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-xl shadow-2xl cursor-ew-resize select-none border-4 border-slate-700 bg-slate-800"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        {/* After Image (Background - Full) */}
        <img
          src={after}
          alt="After renovation"
          className="absolute top-0 left-0 w-full h-full object-cover"
          draggable="false"
          loading="lazy"
        />

        {/* Before Image (Foreground - Clipped) */}
        <img
          src={before}
          alt="Before renovation"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
          draggable="false"
          loading="lazy"
        />

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                className="rotate-90"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur-sm pointer-events-none select-none">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-[#5eaeff]/80 text-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur-sm pointer-events-none select-none">
          After
        </div>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  return (
    <section
      id="beforeAfter"
      className="w-full bg-slate-800 py-20 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Our Work <span className="text-[#5eaeff]">Transformation</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            See the difference we make. Drag the slider to compare the before
            and after states of our renovation services.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoHeight={true}
            className="pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="pb-10">
                <ComparisonSlider
                  before={project.before}
                  after={project.after}
                  title={project.title}
                  description={project.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom CSS for Swiper pagination bullets to match theme */}
          <style>{`
                        .swiper-pagination-bullet {
                            background: white;
                            opacity: 0.5;
                        }
                        .swiper-pagination-bullet-active {
                            background: #5eaeff;
                            opacity: 1;
                        }
                        .swiper-button-next, .swiper-button-prev {
                            color: #5eaeff;
                        }
                    `}</style>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
