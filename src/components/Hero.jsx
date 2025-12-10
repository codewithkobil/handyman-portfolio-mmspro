import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HandymanImg1 from "../assets/handyman-hero.png";
import HandymanImg3 from "../assets/hero2.png";
import defaultBg from "../assets/bg.jpg";

const SLIDES = [
  {
    textTitleTop: "We Are ",
    textAccent: "Expert",
    textTitleBottom: "In Plumbing",
    textDecr:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    tel: "1-800-123-456",
    backgroundImg: defaultBg,
    imgSource: HandymanImg1,
  },
  {
    textTitleTop: "Professional ",
    textAccent: "Service",
    textTitleBottom: "For You",
    textDecr:
      "Trusted by thousands of customers for quality workmanship and reliability.",
    tel: "1-800-123-456",
    backgroundImg: defaultBg,
    imgSource: HandymanImg3,
  },
];

export default function Hero({ slides = SLIDES }) {
  return (
    <div className="relative group">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
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
                  backgroundImage: `url(${s.backgroundImg || defaultBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                aria-hidden="true"
              />

              {/* Blue Overlay Gradient */}
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-[#205a96]/95 to-[#205a96]/80"
                aria-hidden="true"
              />

              <div className="flex h-full w-full max-w-7xl flex-col justify-around gap-6 px-4 pt-24 pb-12 sm:gap-8 sm:px-6 sm:pb-16 md:flex-row md:items-center md:pt-0 md:pb-0 lg:gap-10">
                <div className="z-10 flex w-full flex-col justify-center text-white md:w-3/5">
                  <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
                    <span className="block">
                      {s.textTitleTop} <span className="text-[#5eaeff]">{s.textAccent}</span>
                    </span>
                    <span className="block">{s.textTitleBottom}</span>
                  </h1>

                  {s.textDecr && (
                    <p className="mt-4 line-clamp-3 max-w-xl text-sm text-slate-200 sm:text-base md:mt-6 md:line-clamp-none md:text-lg">
                      {s.textDecr}
                    </p>
                  )}

                  {/* Phone CTA */}
                  <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-10 md:gap-6">
                    {/* Phone Number */}
                    {s.tel && (
                      <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm md:gap-3 md:px-5 md:py-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#5eaeff] md:h-10 md:w-10">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 text-white md:h-5 md:w-5"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2 0 9.4 7.6 17 17 17h2.5c1.1 0 2-.9 2-2v-2.5c0-1.1-.9-2-2-2z" />
                          </svg>
                        </span>
                        <span className="text-lg font-extrabold tracking-wide text-white xs:text-xl md:text-2xl">
                          {s.tel}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Worker image */}
                <div className="relative z-10 mt-auto flex h-[38vh] sm:h-[46vh] w-full items-end justify-center md:absolute md:right-0 md:bottom-0 md:h-[90%] md:w-[45%] lg:right-10 lg:h-[95%]">
                  <img
                    src={s.imgSource}
                    alt="Handyman service"
                    className="h-full w-full object-contain object-bottom md:object-right-bottom"
                    loading="eager"
                  />
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-20 hidden md:flex -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[#5eaeff] text-white cursor-pointer transition backdrop-blur-sm">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 right-4 z-20 hidden md:flex -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[#5eaeff] text-white cursor-pointer transition backdrop-blur-sm">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </div>
    </div >
  );
}
