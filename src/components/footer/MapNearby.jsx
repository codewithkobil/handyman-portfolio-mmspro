import React from "react";

const MapNearby = () => {
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214581.25008914561!2d-79.99152555!3d32.82321519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a42dca82477%3A0x35faf7e0aee1ec6b!2sCharleston%2C%20SC%2C%20USA!5e0!3m2!1sen!2skr!4v1765991260013!5m2!1sen!2skr";

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
    </div>
  );
};

export default MapNearby;
