import { CalendarDays, Siren, Wrench, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Same-Day & Scheduled Visits",
    description:
      "Book a convenient time or request same-day help for urgent repairs and installs.",
    Icon: CalendarDays,
  },
  {
    title: "Emergency Repair Support",
    description:
      "Unexpected issue? We respond fast to help reduce damage and restore safety and comfort.",
    Icon: Siren,
  },
  {
    title: "Skilled, Multi-Trade Handyman",
    description:
      "From drywall and painting to mounting, fixtures, and small repairs—done correctly.",
    Icon: Wrench,
  },
  {
    title: "Quality Work You Can Trust",
    description:
      "Clean workmanship, clear communication, and durable results backed by our service promise.",
    Icon: ShieldCheck,
  },
];

const Service = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 text-white"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Help When You Need It —
            <span className="text-[#5eaeff]">
              {" "}
              Repairs, Installs & Maintenance
            </span>
          </h2>

          <p className="mt-4 text-base text-white/80 sm:text-lg">
            A dependable handyman team for homes and small businesses. Clear
            communication, fair pricing, and high-quality results.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group relative flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 p-7 text-center backdrop-blur-sm transition duration-300 hover:border-[#5eaeff] hover:bg-white/10"
            >
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5eaeff] shadow-lg transition duration-300 group-hover:scale-110">
                <Icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-lg font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
