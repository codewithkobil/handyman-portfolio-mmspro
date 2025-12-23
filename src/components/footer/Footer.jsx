import { Link } from "react-router";

import MapPng from "../../assets/icons/map.webp";
import EmailPng from "../../assets/icons/communication.webp";
import PhonePng from "../../assets/icons/sms.webp";

import Instagram from "../../assets/icons/instagram.webp";
import Facebook from "../../assets/icons/facebook.webp";
import Telegram from "../../assets/icons/telegram.webp";
import MapEmbed from "./MapEmbed";
const message =
  "Hi Laziz. I am messaging you from your website. Can you tell me about your work ?";
const phoneNumber = "954-310-5051";
const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mms_pro_llc",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/MMS-PRO/61558797533929/",
    icon: Facebook,
  },
  { name: "Telegram", href: "https://t.me/MMS_PRO_LLC", icon: Telegram },
  {
    name: "Thumbtack",
    href: "https://www.thumbtack.com/sc/charleston/handyman/mms-pro-handyman/service/508092614005686275",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEw8rN4ZotoVotoSodoAn9kjpNtQs+EQoNoRoNorqN0Amtic0eys1+8AmNft9/z////r9vu93/LG4/QZotoNodpft+JbteFvveRqu+P1rF0xAAAAFnRSTlMAKHy45P9UD9bTM////////////9/xlGzyNwAAALdJREFUeAGFkwUSwzAMBM8gO8z4/4cWVDC0mmw4mxjP+KK0sUTWaIUcZ+mLdYnyBSWUPriKfqhkF6ynv3iWXF+dwPVyO9k1bUTD1gHgPnT9EDF23CNAkSRJQZNULGkYYmqm64ivxBhYCtTTMHf0ZUHqErnGsptzaWW5wMjSQMtSQ8lSATaRUx0C8Rl4pm6HoQ3SfaeM2YZhD1HJJrvrx1Clz2NynJchCo7xpRxNKdTJcljWdYmXwx0elRLlCj7YFwAAAABJRU5ErkJggg==",
  },
];

const CONTACT_ITEMS = [
  {
    label: "Message",
    value: "954-310-5051",
    href: `sms:${phoneNumber}?body=${encodeURIComponent(message)}`,
    icon: PhonePng,
  },
  {
    label: "Email",
    value: "lazizmmspro@gmail.com",
    href: "mailto:lazizmmspro@gmail.com",
    icon: EmailPng,
  },
  {
    label: "Address",
    value: "1219 Orange Branch Rd, 201, Charleston, SC 29407",
    href: "https://maps.app.goo.gl/5PKq23yRKyuELf5p9",
    icon: MapPng,
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>

            <ul className="space-y-4">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <img
                      src={item.icon}
                      alt={`${item.label} icon`}
                      className="h-8 w-8 object-contain opacity-90"
                      loading="lazy"
                    />
                  </span>

                  <div className="leading-tight">
                    <p className="text-sm text-zinc-400">{item.label}</p>

                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-200 transition hover:text-white"
                    >
                      {item.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Social</h3>
            <p className="text-zinc-300">
              Follow us for updates & recent work.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                >
                  <img
                    src={s.icon}
                    alt={`${s.name} icon`}
                    className="h-8 w-8 object-contain opacity-90 transition group-hover:opacity-100"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-zinc-300">
              <li>
                <a href="/me" className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="transition hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          <MapEmbed />
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} MMS PRO
        </div>
      </div>
    </footer>
  );
};

export default Footer;
