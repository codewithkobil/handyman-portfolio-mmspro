import { useLocation } from "react-router";
import { useEffect } from "react";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("config", "G-6Q6ETFWW9C", {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}
