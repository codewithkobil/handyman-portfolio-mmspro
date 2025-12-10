import { useState, useEffect } from "react";
import { Link } from 'react-router'
import { projects } from "../../constants/projects";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className="absolute top-[15px] left-0 right-0 z-40 px-4 lg:px-8">
        <div className="max-w-8xl mx-auto bg-[#5382AB]/50 text-white shadow-md rounded-lg">
          <div className="flex items-center justify-between px-4 py-4 lg:px-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center">
                {/* Simple logo placeholder matching the P style */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 text-white"
                  fill="currentColor"
                >
                  <path d="M4 4h5a4 4 0 0 1 0 8H6v8H4V4z" />
                  <path d="M13 12h-3" stroke="currentColor" strokeWidth="2" />
                  {/* Water drop hint */}
                  <path d="M16 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" fill="#60a5fa" />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-2xl font-extrabold tracking-wide uppercase">MMS PRO</p>
                <p className="-mt-1 text-xs text-sky-200 tracking-wider">Plumbing Services</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden items-center gap-6 text-sm font-semibold text-white md:flex">
              <a className="hover:text-sky-200 transition uppercase" href="/">HOME</a>

              {/* Dropdown Container */}
              <div className="relative group">
                <a className="hover:text-sky-200 transition uppercase flex items-center gap-1 py-4" href="/#services">
                  SERVICES <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </a>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white text-slate-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden border border-slate-100">
                  <div className="p-6 grid grid-cols-3 gap-4">
                    {projects.map(project => (
                      <Link
                        key={project.id}
                        to={`/service/${project.id}`}
                        className="block p-3 rounded-lg hover:bg-slate-50 transition group/item"
                      >
                        <div className="font-semibold text-sm text-slate-700 group-hover/item:text-[#5eaeff] mb-1">
                          {project.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link className="hover:text-sky-200 transition uppercase" to="/contact">CONTACT</Link>
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden md:inline-block rounded bg-[#5eaeff] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-sky-400"
              >
                GET A QUOTE
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="rounded p-2 hover:bg-white/10 md:hidden"
                aria-label="Toggle menu"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {mobileOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <>
                      <path d="M4 6h16" />
                      <path d="M4 12h16" />
                      <path d="M4 18h16" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div
            className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${mobileOpen ? "max-h-[1000px]" : "max-h-0"
              }`}
          >
            <div className="space-y-4 border-t border-white/10 bg-[#2c547a] px-6 py-4 text-white">
              <a
                className="block font-semibold"
                href="/"
                onClick={() => setMobileOpen(false)}
              >
                HOME
              </a>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full font-semibold"
                >
                  SERVICES
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[60vh] mt-2' : 'max-h-0'}`}>
                  <div className="pl-4 space-y-2 border-l-2 border-white/10 ml-1">
                    {projects.map(project => (
                      <Link
                        key={project.id}
                        to={`/service/${project.id}`}
                        className="block text-sm text-sky-100 hover:text-white py-1"
                        onClick={() => setMobileOpen(false)}
                      >
                        {project.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <a
                className="block font-semibold"
                href="/contact"
                onClick={() => setMobileOpen(false)}
              >
                CONTACT
              </a>
              <a
                href="/contact"
                className="inline-block w-full text-center rounded bg-[#5eaeff] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-sky-400"
                onClick={() => setMobileOpen(false)}
              >
                GET A QUOTE
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
