import React from "react";
import defaultBg from "../../assets/bg.jpg"; // Assuming we can reuse the bg from Hero or similar

const Service = () => {
  const services = [
    {
      title: "Fast Reliable Service",
      description: "There are many variations of passages of Lorem Ipsum available,",
    },
    {
      title: "Trained Personnel",
      description: "There are many variations of passages of Lorem Ipsum available,",
    },
    {
      title: "Emergency Services",
      description: "There are many variations of passages of Lorem Ipsum available,",
    },
    {
      title: "One Year Warranty",
      description: "There are many variations of passages of Lorem Ipsum available,",
    },
  ];

  // Correct icons based on image visual
  const serviceIcons = [
    // Truck
    <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#5eaeff]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>,
    // Worker
    <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#5eaeff]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>,
    // Pipe
    <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#5eaeff]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 10h16" />
      <path d="M4 14h16" />
      <path d="M2 10v4" />
      <path d="M22 10v4" />
      <path d="M12 14v4" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
      <circle cx="12" cy="23" r="1" fill="currentColor" />
    </svg>,
    // House
    <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#5eaeff]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
      <path d="M12 14l0 0" /> {/* Drop inside house */}
      <path d="M12 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" transform="scale(0.5) translate(12,12)" fill="currentColor" />
    </svg>
  ]


  return (
    <section id="services" className="relative py-24 text-white overflow-hidden">
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
      {/* Blue Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-[#205a96]/95"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-6 relative z-10">
        <h2 className="text-center text-4xl font-extrabold sm:text-5xl mb-16 leading-tight">
          Available For 24/7 <span className="text-[#5eaeff]">Emergency</span>
          <br />
          <span className="text-[#5eaeff]">Plumbing Service</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-center p-8 rounded-lg border border-white/20 hover:border-[#5eaeff] transition duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10"
            >
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#5eaeff] shadow-lg group-hover:scale-110 transition duration-300">
                {/* Use white icon inside blue circle */}
                <div className="text-white">
                  {React.cloneElement(serviceIcons[idx], { className: "h-10 w-10 text-white" })}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
