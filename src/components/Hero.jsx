import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HandymanImg1 from "../assets/hero-img-1.webp";
import HandymanImg3 from "../assets/hero-img-2.webp";
import defaultBg from "../assets/bg.webp";
import PhonePng from "../assets/icons/sms.webp";
const message =
  "Hi Laziz. I am messaging you from your website. Can you tell me about your work ?";
const phoneNumber = "954-310-5051";
const SLIDES = [
  {
    textTitleTop: "Your Local ",
    textAccent: "Handyman",
    textTitleBottom: "For Every Fix",
    textDecr:
      "From small repairs to full installations, we get it done cleanly, safely, and on time.",
    tel: phoneNumber,
    imgSource: HandymanImg1,
  },
  {
    textTitleTop: "Trusted ",
    textAccent: "Home",
    textTitleBottom: "Repairs & Installations",
    textDecr:
      "Painting, drywall, fixtures, shelves, TV mounting, and more — quality work you can rely on.",
    tel: phoneNumber,
    imgSource: HandymanImg3,
  },
];

export default function Hero({ slides = SLIDES }) {
  return (
    <div className="relative min-h-[70vh] md:min-h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="w-full hero-swiper"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative min-h-[70vh] sm:min-h-[80vh] md:h-screen md:min-h-[600px] w-full overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 -z-20"
                style={{
                  backgroundImage: `url(${defaultBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                aria-hidden="true"
              />

              {/* Blue Overlay Gradient */}
              <div
                className="absolute inset-0 -z-10 bg-linear-to-r from-[#205a96]/95 to-[#205a96]/80"
                aria-hidden="true"
              />

              <div className="relative mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-24 pb-12 md:grid-cols-12 md:pt-0 md:pb-0 lg:px-6">
                {/* LEFT: Text */}
                <div className="z-10 md:col-span-6 lg:col-span-5">
                  <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
                    <span className="block">
                      {s.textTitleTop}{" "}
                      <span className="text-[#5eaeff]">{s.textAccent}</span>
                    </span>
                    <span className="block">{s.textTitleBottom}</span>
                  </h1>

                  {s.textDecr && (
                    <p className="mt-4 max-w-xl text-sm text-slate-200 sm:text-base md:mt-6 md:text-lg">
                      {s.textDecr}
                    </p>
                  )}

                  {s.tel && (
                    <a
                      href={`sms:${phoneNumber}?body=${encodeURIComponent(
                        message
                      )}`}
                      className="mt-6 flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm sm:w-fit md:mt-10"
                      aria-label={`Send us a Message at ${phoneNumber}`}
                    >
                      <span className="flex h-13 w-13 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white/30">
                        <img
                          src={PhonePng}
                          alt="Message"
                          className="h-12 w-12 object-contain opacity-95 transition group-hover:opacity-100"
                          loading="lazy"
                        />
                      </span>
                      <span className="flex flex-col leading-tight text-white">
                        <span className="text-sm font-semibold uppercase tracking-wider opacity-80 sm:text-base">
                          Message Now
                        </span>
                        <span className="text-lg font-extrabold tracking-wide sm:text-xl md:text-2xl">
                          {s.tel}
                        </span>
                      </span>
                    </a>
                  )}
                </div>

                {/* RIGHT: Big hero image */}
                <div className="md:col-span-6 lg:col-span-7">
                  <div className="relative h-full w-full">
                    <img
                      src={s.imgSource}
                      alt="Handyman service"
                      className="
    w-full h-[420px] sm:h-[520px] md:h-[650px] lg:h-[800px]
    object-cover sm:object-contain
    object-bottom
  "
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-20 hidden md:flex -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[#5eaeff] text-white cursor-pointer transition backdrop-blur-sm">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 right-4 z-20 hidden md:flex -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[#5eaeff] text-white cursor-pointer transition backdrop-blur-sm">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </div>
  );
}
