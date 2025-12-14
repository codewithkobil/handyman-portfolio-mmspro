import { User, ArrowUpRight } from "lucide-react";

import profileImg from "../../assets/profile.png";

// ✅ your PNG icons
import WebLinkPng from "../../assets/icons/web-link.png";
import MapPng from "../../assets/icons/map.png";
import InstagramPng from "../../assets/icons/instagram.png";
import FacebookPng from "../../assets/icons/facebook.png";
import TelegramPng from "../../assets/icons/telegram.png";
import FloatingPhone from "../../components/FloatingPhone";

const links = [
  {
    label: "Website",
    href: "https://mmspro.work",
    handle: "mmspro.work",
    type: "png",
    iconSrc: WebLinkPng,
  },
  {
    label: "Google Map",
    href: "https://gogle.com/maps",
    handle: "Charleston, SC",
    type: "png",
    iconSrc: MapPng,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    handle: "@mmspro",
    type: "png",
    iconSrc: FacebookPng,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    handle: "@mmspro",
    type: "png",
    iconSrc: InstagramPng,
  },
  {
    label: "Telegram",
    href: "https://t.me/mmspro",
    handle: "@mmspro",
    type: "png",
    iconSrc: TelegramPng,
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white">
      <div className="relative min-h-screen overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-5 pb-10 pt-10">
          {/* Profile */}
          <div className="mt-10 flex flex-col items-center text-center">
            <div className="h-24 w-24 overflow-hidden rounded-2xl bg-white ring-2 ring-white/15">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="MMS PRO"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <User className="h-12 w-12 text-white/70" />
                </div>
              )}
            </div>

            <h1 className="mt-5 text-2xl font-semibold tracking-tight">
              MMS PRO
            </h1>
            <p className="mt-1 text-sm text-white/70">
              Charleston, SC • Handyman Services
            </p>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              Repairs, installs, and home improvements — clean work, fair
              pricing, and results that last.
            </p>
          </div>

          {/* Links */}
          <div className="mt-8 space-y-3">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/8 hover:ring-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    <img
                      src={item.iconSrc}
                      alt={`${item.label} icon`}
                      className="h-6 w-6 object-contain opacity-90 transition group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>

                  <div className="leading-tight">
                    <span className="block text-base font-medium">
                      {item.label}
                    </span>
                    <span className="block text-xs text-white/60 group-hover:text-white/75">
                      {item.handle}
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-xs text-white/60 transition group-hover:text-white/85">
                  Visit <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-white/60">
            © {new Date().getFullYear()} MMS PRO
          </p>
        </div>
      </div>
      <FloatingPhone />
    </div>
  );
};

export default AboutUs;
