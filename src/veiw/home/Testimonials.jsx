import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    name: "Sanjida Carlose",
    title: "Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed do tempor incididunt ut labore dolore magna aliqua.",
  },
  {
    name: "John Doe",
    title: "Designer",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Excellent service! The team was professional and completed the work on time. Highly recommend their plumbing services.",
  },
  {
    name: "Sarah Johnson",
    title: "Homeowner",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Quick response time and quality work. They fixed our emergency leak within hours. Very satisfied with the service.",
  },
  {
    name: "Mike Wilson",
    title: "Business Owner",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Professional team that knows their craft. They handled our commercial plumbing needs efficiently and affordably.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Customer <span className="text-[#5eaeff]">Experience</span>
        </h2>

        <div className="mt-12 px-4 sm:px-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="testimonials-swiper !pb-14"
          >
            {TESTIMONIALS.map((testimonial, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="rounded-xl bg-slate-50 p-6 sm:p-8 shadow-sm hover:shadow-md text-left h-full flex flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-8 w-8 text-[#5eaeff]"
                  >
                    <path d="M9 12H7a4 4 0 0 1 4-4V6a6 6 0 0 0-6 6v4h4v-4Zm10 0h-2a4 4 0 0 1 4-4V6a6 6 0 0 0-6 6v4h4v-4Z" />
                  </svg>
                  <p className="mt-3 text-slate-600 flex-grow">{testimonial.text}</p>
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-200">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.title}</p>
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
