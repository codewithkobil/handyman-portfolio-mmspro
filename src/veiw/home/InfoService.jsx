import EighthImage from "../../assets/works/8.avif";
import FirstImage from "../../assets/works/1.webp";
import { CheckCircle2, MapPin, Wrench } from "lucide-react";

const highlights = [
  "Fast repairs & professional installations",
  "Clean work, honest pricing, on-time service",
  "Plumbing, painting, drywall, carpentry & more",
  "Serving Charleston + surrounding areas",
];

const InfoService = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-50 text-zinc-900"
    >
      {/* soft background decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-5 md:grid-cols-12 lg:px-6">
        {/* Left images */}
        <div className="relative col-span-5">
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 grid-cols-6 gap-1 opacity-30 md:grid">
            {Array.from({ length: 36 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded bg-zinc-300" />
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-linear-to-tr from-sky-200/60 via-amber-200/50 to-transparent blur-xl" />
            <img
              src={EighthImage}
              alt="Handyman with tools"
              className="relative w-10/12 rounded-2xl border border-zinc-200 bg-white shadow-xl"
              loading="lazy"
            />
          </div>

          <div className="relative -mt-14 ml-auto w-10/12">
            <img
              src={FirstImage}
              alt="Home repair work"
              className="rounded-2xl border border-zinc-200 bg-white shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="col-span-7">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            About MMS PRO
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            MMS PRO is your trusted local handyman team in Charleston, South
            Carolina. We help homeowners, landlords, and small businesses with
            repairs, installs, and home improvements—fast, clean, and
            stress-free.
          </p>

          {/* Highlights */}
          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-zinc-200"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 ring-1 ring-sky-100">
                  <CheckCircle2 className="h-5 w-5 text-sky-700" />
                </span>
                <p className="font-semibold text-zinc-800">{item}</p>
              </div>
            ))}
          </div>

          {/* Service area */}
          <div className="mt-6 max-w-2xl rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-100">
                <MapPin className="h-5 w-5 text-amber-700" />
              </span>

              <div>
                <p className="text-zinc-800">
                  <span className="font-semibold">Service area:</span>{" "}
                  Charleston, Mount Pleasant, North Charleston, Summerville &
                  nearby areas.
                </p>
                <p className="mt-1 text-zinc-600">
                  No job too small—message us and we’ll take care of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoService;
