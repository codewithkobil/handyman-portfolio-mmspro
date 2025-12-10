const SOCIAL_POSTS = [
  {
    platform: "Instagram",
    icon: "📷",
    color: "from-purple-500 to-pink-500",
    link: "https://instagram.com/pternal_plumbing",
  },
  {
    platform: "Facebook",
    icon: "👍",
    color: "from-blue-600 to-blue-400",
    link: "https://facebook.com/pternal.plumbing",
  },
  {
    platform: "Telegram",
    icon: "✈️",
    color: "from-sky-500 to-blue-500",
    link: "https://t.me/pternal_plumbing",
  },
];

const SocialMedia = () => {
  return (
    <section id="social" className="bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Our <span className="text-[#5eaeff]">Social Media</span>
        </h2>
        <p className="mt-4 text-slate-600">
          Follow us on social media for updates, tips, and our latest projects
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {SOCIAL_POSTS.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${social.color} p-8 text-white`}>
                <div className="flex flex-col items-center gap-4">
                  <span className="text-5xl">{social.icon}</span>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">{social.platform}</h3>
                    <p className="text-sm opacity-90">@pternal_plumbing</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6">
                <p className="text-base font-bold text-[#5eaeff] group-hover:text-[#205a96] transition">
                  View on {social.platform} →
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
