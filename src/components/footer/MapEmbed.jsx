import React from "react";

const MapEmbed = () => {
  const src =
    "https://www.google.com/maps?q=1219%20Orange%20Branch%20Rd%20201%20Charleston%20SC%2029407&output=embed";

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <iframe
          title="MMS PRO Location"
          src={src}
          width="100%"
          height="180"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <a
        href="https://maps.google.com/?q=1219+Orange+Branch+Rd,+201,+Charleston,+SC+29407"
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-block text-sm text-zinc-300 hover:text-white"
      >
        Open in Google Maps →
      </a>
    </div>
  );
};

export default MapEmbed;
