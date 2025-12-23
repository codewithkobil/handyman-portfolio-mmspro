import { User, ArrowUpRight } from "lucide-react";

import profileImg from "../../assets/profile.webp";

// ✅ your PNG icons
import WebLinkPng from "../../assets/icons/web-link.webp";
import MapPng from "../../assets/icons/map.webp";
import InstagramPng from "../../assets/icons/instagram.webp";
import FacebookPng from "../../assets/icons/facebook.webp";
import TelegramPng from "../../assets/icons/telegram.webp";
import PhonePng from "../../assets/icons/sms.webp";
import FloatingPhone from "../../components/FloatingPhone";

const message =
  "Hi Laziz. I am messaging you from your website. Can you tell me about your work ?";
const phoneNumber = "954-310-5051";
const links = [
  {
    label: "Message",
    href: `sms:${phoneNumber}?body=${encodeURIComponent(message)}`,
    handle: phoneNumber,
    iconSrc: PhonePng,
  },
  {
    label: "Website",
    href: "https://mmspro.work",
    handle: "mmspro.work",
    iconSrc: WebLinkPng,
  },
  {
    label: "Google Map",
    href: "https://maps.app.goo.gl/5PKq23yRKyuELf5p9",
    handle: "1219 Orange Branch Rd, 201, Charleston, SC 29407",
    iconSrc: MapPng,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/MMS-PRO/61558797533929/",
    handle: "MMS-PRO",
    iconSrc: FacebookPng,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mms_pro_llc",
    handle: "@mms_pro_llc",
    iconSrc: InstagramPng,
  },
  {
    label: "Telegram",
    href: "https://t.me/MMS_PRO_LLC",
    handle: "@MMS_PRO_LLC",
    iconSrc: TelegramPng,
  },
  {
    label: "Thumbtack",
    href: "https://www.thumbtack.com/sc/charleston/handyman/mms-pro-handyman/service/508092614005686275",
    handle: "MMS Pro Handyman",
    iconSrc:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEw8rN4ZotoVotoSodoAn9kjpNtQs+EQoNoRoNorqN0Amtic0eys1+8AmNft9/z////r9vu93/LG4/QZotoNodpft+JbteFvveRqu+P1rF0xAAAAFnRSTlMAKHy45P9UD9bTM////////////9/xlGzyNwAAALdJREFUeAGFkwUSwzAMBM8gO8z4/4cWVDC0mmw4mxjP+KK0sUTWaIUcZ+mLdYnyBSWUPriKfqhkF6ynv3iWXF+dwPVyO9k1bUTD1gHgPnT9EDF23CNAkSRJQZNULGkYYmqm64ivxBhYCtTTMHf0ZUHqErnGsptzaWW5wMjSQMtSQ8lSATaRUx0C8Rl4pm6HoQ3SfaeM2YZhD1HJJrvrx1Clz2NynJchCo7xpRxNKdTJcljWdYmXwx0elRLlCj7YFwAAAABJRU5ErkJggg==",
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
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/10">
                    <img
                      src={item.iconSrc}
                      alt={`${item.label} icon`}
                      className="h-8 w-8 object-contain opacity-90 transition group-hover:opacity-100"
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
                  <ArrowUpRight className="h-4 w-4" />
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
