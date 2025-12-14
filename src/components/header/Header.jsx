import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { projects } from "../../constants/projects";
import logoIcon from "../../assets/logo.png";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const navLinkBase =
    "uppercase text-sm font-semibold text-white transition hover:text-sky-200";
  const navLinkActive = "text-sky-200";

  return (
    <header className="absolute top-4 left-0 right-0 z-40 px-4 lg:px-8 overflow-x-clip">
      <div className="mx-auto max-w-7xl rounded-xl bg-[#5382AB]/50 text-white shadow-md ring-1 ring-white/10">
        <div className="flex items-center justify-between px-4 py-4 lg:px-6">
          {/* Logo (full height, no padding/margin around image) */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
            onClick={closeMobile}
          >
            {/* Logo box equals header height visually */}
            <div className="h-12 w-18 overflow-hidden ">
              <img
                src={logoIcon}
                alt="MMS PRO logo"
                className="h-full w-full object-contain"
                draggable="false"
              />
            </div>

            <div className="leading-tight">
              <p className="text-xl sm:text-2xl font-extrabold tracking-wide uppercase">
                MMS PRO
              </p>
              <p className="-mt-1 text-xs text-sky-200 tracking-wider">
                Handyman Services
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/me"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              About Us
            </NavLink>

            {/* Services dropdown */}
            <div className="relative group">
              <a
                href="/services"
                className={`${navLinkBase} flex items-center gap-1 py-4`}
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </a>

              {/* Dropdown panel */}
              <div
                className="
                  absolute top-full left-1/2 -translate-x-1/2
                  w-[min(92vw,820px)]
                  rounded-xl bg-white text-slate-900 shadow-2xl
                  opacity-0 invisible translate-y-2
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-200
                  z-50 overflow-hidden border border-slate-100
                "
              >
                <div className="px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Services
                  </p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {projects.map((project) => (
                      <Link
                        key={project.id}
                        to={`/service/${project.id}`}
                        className="rounded-lg px-3 py-2 hover:bg-slate-50 transition"
                      >
                        <div className="text-sm font-semibold text-slate-700 hover:text-[#5eaeff]">
                          {project.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between bg-slate-50 px-6 py-4">
                  <p className="text-sm text-slate-600">
                    Need help now? Call us for fast service.
                  </p>
                  <Link
                    to="/contact"
                    className="rounded-lg bg-[#5eaeff] px-4 py-2 text-xs font-extrabold uppercase text-white shadow-sm transition hover:bg-slate-400"
                  >
                    Get a quote
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-lg bg-[#5eaeff] px-5 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-slate-400"
            >
              Get a Quote
            </Link>

            {/* Mobile menu button (Lucide) */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-lg p-2 hover:bg-white/10 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            mobileOpen ? "max-h-[80vh]" : "max-h-0"
          }`}
        >
          <div className="space-y-4 border-t border-white/10 bg-[#2c547a] px-6 py-4 text-white">
            <Link
              className="block font-semibold uppercase"
              to="/"
              onClick={closeMobile}
            >
              Home
            </Link>

            <Link
              className="block font-semibold uppercase"
              to="/me"
              onClick={closeMobile}
            >
              About Us
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between font-semibold uppercase"
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  mobileServicesOpen ? "max-h-[50vh] mt-3" : "max-h-0"
                }`}
              >
                <div className="ml-1 space-y-2 border-l-2 border-white/10 pl-4">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/service/${project.id}`}
                      className="block py-1 text-sm text-sky-100 hover:text-white"
                      onClick={closeMobile}
                    >
                      {project.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#5eaeff] px-5 py-3 text-sm font-extrabold uppercase text-white shadow-md transition hover:bg-slate-400"
              onClick={closeMobile}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
