import { useEffect, useRef, useState } from "react";

const FloatingPhone = ({ phoneNumber = "1-800-123-456" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = (event) => {
    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop) return; // let tel: link work normally on desktop

    if (!showNumber) {
      event.preventDefault();
      setShowNumber(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setShowNumber(false), 3500);
    }
    // if already showing, allow the tel: link to proceed
  };

  return (
    <div
      className={`fixed top-6 left-6 z-50 transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative">
        <a
          href={`tel:${phoneNumber}`}
          onClick={handleClick}
          className="group flex items-center gap-3 rounded-full bg-[#00A0F8] px-4 py-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none"
          aria-label={`Call us at ${phoneNumber}`}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white animate-[wiggle_1s_ease-in-out_infinite]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.15a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 20 16.92Z" />
            </svg>
          </span>
          <div className={`${showNumber ? "block" : "hidden"} pr-2 lg:block`}>
            <p className="text-xs font-medium text-white/90 uppercase tracking-wide">
              Call Now
            </p>
            <p className="text-sm font-bold text-white">{phoneNumber}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FloatingPhone;
