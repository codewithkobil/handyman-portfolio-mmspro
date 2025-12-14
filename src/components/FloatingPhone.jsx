import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import PhonePng from "../assets/icons/telephone.png";

const FloatingPhone = ({ phoneNumber = "1-800-123-456" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => timerRef.current && clearTimeout(timerRef.current), []);

  const handleCallClick = (e) => {
    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop) return;

    if (!showNumber) {
      e.preventDefault();
      setShowNumber(true);
      timerRef.current && clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setShowNumber(false), 3500);
    }
  };

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Phone (top-left) */}
      <div
        className={`fixed top-6 left-6 z-50 transition-all duration-500 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href={`tel:${phoneNumber}`}
          onClick={handleCallClick}
          className="group flex items-center gap-3 rounded-full bg-[#00A0F8] px-4 py-3 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-pulse hover:animate-none"
          aria-label={`Call us at ${phoneNumber}`}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white/30">
            <img
              src={PhonePng}
              alt="Phone"
              className="h-6 w-6 object-contain opacity-95 transition group-hover:opacity-100"
              loading="lazy"
            />
          </span>

          <div className={`${showNumber ? "block" : "hidden"} pr-2 lg:block`}>
            <p className="text-xs font-medium text-white/90 uppercase tracking-wide">
              Call Now
            </p>
            <p className="text-sm font-bold text-white">{phoneNumber}</p>
          </div>
        </a>
      </div>

      {/* Scroll To Top (bottom-right) */}
      <button
        type="button"
        onClick={handleScrollTop}
        className={`fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-zinc-950/40 shadow-lg backdrop-blur transition-all duration-500 hover:bg-zinc-950/55 hover:shadow-2xl ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-white/90" />
      </button>
    </>
  );
};

export default FloatingPhone;
