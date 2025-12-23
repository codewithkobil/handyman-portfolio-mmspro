import Instagram from "../../assets/icons/instagram.webp";
import Facebook from "../../assets/icons/facebook.webp";
import Telegram from "../../assets/icons/telegram.webp";

const SOCIAL_POSTS = [
  {
    platform: "Instagram",
    icon: Instagram,
    color: "from-purple-600 to-pink-500",
    link: "https://www.instagram.com/mms_pro_llc",
    handle: "@mms_pro_llc",
  },
  {
    platform: "Facebook",
    icon: Facebook,
    color: "from-blue-700 to-blue-500",
    link: "https://www.facebook.com/people/MMS-PRO/61558797533929/",
    handle: "MMS-PRO",
  },
  {
    platform: "Telegram",
    icon: Telegram,
    color: "from-sky-600 to-cyan-500",
    link: "https://t.me/MMS_PRO_LLC",
    handle: "@MMS_PRO_LLC",
  },
];

const SocialMedia = () => {
  return (
    <section id="social" className="bg-zinc-50 py-20 text-zinc-900">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Our <span className="text-sky-600">Social Media</span>
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-zinc-600">
          Follow us for updates, tips, and our latest services.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {SOCIAL_POSTS.map((social) => (
            <a
              key={social.platform}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-slate-800 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              aria-label={`Open ${social.platform}`}
            >
              {/* Header */}
              <div className={`bg-linear-to-r ${social.color} p-8 text-white`}>
                <div className="flex flex-col items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
                    <img
                      src={social.icon}
                      alt={`${social.platform} icon`}
                      className="h-14 w-14 object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold">{social.platform}</h3>
                    <p className="text-sm opacity-90">{social.handle}</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6">
                <p className="text-base font-semibold text-sky-700 transition group-hover:text-indigo-700">
                  View on {social.platform} <span aria-hidden>→</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
