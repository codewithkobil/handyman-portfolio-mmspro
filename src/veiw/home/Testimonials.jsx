import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    fullName: "Sanjida Carlose",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    platform: "Facebook",
    text: "Quick, friendly, and very professional. They fixed my sink leak the same day and left everything clean.",
  },
  {
    fullName: "John Doe",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    platform: "Google",
    text: "Excellent service and fair price. The install was done perfectly and they explained everything clearly.",
  },
  {
    fullName: "Sarah Johnson",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    platform: "Instagram",
    text: "Super fast response and great workmanship. They mounted our TV and hid the cables — looks amazing!",
  },
  {
    fullName: "Mike Wilson",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    platform: "Facebook",
    text: "Reliable and efficient. They handled several small repairs in one visit and everything turned out perfect.",
  },
];

const StarRating = ({ rating = 5 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 20 20"
        className={`h-5 w-5 ${
          i < rating ? "text-amber-400" : "text-slate-300"
        }`}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 0 0-.364 1.118l1.287 3.956c.3.922-.755 1.688-1.539 1.118l-3.366-2.447a1 1 0 0 0-1.176 0L6.049 18.023c-.784.57-1.838-.196-1.539-1.118l1.287-3.956a1 1 0 0 0-.364-1.118L2.066 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69l1.286-3.957z" />
      </svg>
    ))}
  </div>
);

const PlatformBadge = ({ platform }) => {
  const Icon = () => {
    // Simple inline icons per platform
    if (platform === "Facebook") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14.2 6h2.3v3h-2c-.7 0-1 .3-1 1v2h3l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
        </svg>
      );
    }
    if (platform === "Instagram") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5.2-2.6a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" />
        </svg>
      );
    }
    // Google (generic G badge)
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 10.2v3.9h5.5c-.8 2.3-2.8 3.9-5.5 3.9a6 6 0 1 1 0-12c1.6 0 3 .6 4.1 1.6l2.6-2.6A9.7 9.7 0 0 0 12 2.3 9.7 9.7 0 1 0 21.7 12c0-.7-.1-1.2-.2-1.8H12z" />
      </svg>
    );
  };

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
      <span className="text-slate-600">
        <Icon />
      </span>
      Reviewed on {platform}
    </span>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Customer <span className="text-[#5eaeff]">Reviews</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Real feedback from homeowners and small businesses we’ve helped.
        </p>

        <div className="mt-12 px-4 sm:px-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="testimonials-swiper pb-14!"
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="h-full rounded-2xl bg-slate-50 p-6 sm:p-7 text-left shadow-sm transition hover:shadow-md">
                  {/* Stars first + platform */}
                  <div className="flex items-center justify-between gap-3">
                    <StarRating rating={t.rating} />
                    <PlatformBadge platform={t.platform} />
                  </div>

                  {/* Review */}
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    “{t.text}”
                  </p>

                  {/* Footer: img + name */}
                  <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-4">
                    <img
                      src={t.img}
                      alt={t.fullName}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{t.fullName}</p>
                      <p className="text-sm text-slate-500">
                        {t.platform} review
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
