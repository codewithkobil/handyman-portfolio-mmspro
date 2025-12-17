import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Sparkles } from "lucide-react";

import MapPng from "../../assets/icons/map.png";
import EmailPng from "../../assets/icons/communication.png";
import PhonePng from "../../assets/icons/telephone.png";
import sendToTelegram from "../../constants/sendToTelegram";
import MapNearby from "../../components/footer/MapNearby";

const CONTACT_ITEMS = [
  {
    label: "Phone",
    value: "954-310-5051",
    href: "tel:954-310-5051",
    icon: PhonePng,
  },
  {
    label: "Email",
    value: "lazizmmspro@gmail.com",
    href: "mailto:lazizmmspro@gmail.com",
    icon: EmailPng,
  },
  {
    label: "Service Area",
    value: "Charleston, SC + nearby",
    href: "https://maps.app.goo.gl/jbMnpJ4uWT3PUnuA8",
    icon: MapPng,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendToTelegram(formData);
      alert("Thanks! We received your request and will contact you shortly.");
      setFormData({ fullName: "", email: "", phone: "", description: "" });
    } catch (err) {
      console.error("Telegram error:", err);
      alert("Failed to send. Please try again or call us.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100">
      <Header />

      <section className="relative mx-auto max-w-6xl px-4 pt-28 pb-16 md:pt-32 lg:px-6">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        {/* Heading */}
        <div className="relative text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Fast response • Clear pricing • Flexible scheduling
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Request a{" "}
            <span className="bg-linear-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Free Quote
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Tell us what you need help with (repairs, installs, maintenance).
            We’ll reply as soon as possible with pricing and available times.
          </p>
        </div>

        <div className="relative mt-10 grid gap-8 lg:grid-cols-3">
          {/* Quick contact card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
              <h2 className="text-xl font-bold text-slate-100">
                Contact Details
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Prefer calling or messaging? Reach us directly:
              </p>

              <div className="mt-6 space-y-4">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === "Service Area" ? "_blank" : undefined
                    }
                    rel={
                      item.label === "Service Area"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-white/5"
                  >
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                      <img
                        src={item.icon}
                        alt={`${item.label} icon`}
                        className="h-5 w-5 object-contain opacity-90 transition group-hover:opacity-100"
                        loading="lazy"
                      />
                    </span>

                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="font-semibold text-slate-100 group-hover:text-cyan-200">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <MapNearby />
              <div className="mt-6 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm text-slate-300">
                  Tip: Include photos and your preferred time window for a
                  faster quote.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/15"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/15"
                    placeholder="(954) 310-5051"
                  />
                  <p className="mt-2 text-xs text-slate-400">
                    We may call or text to confirm details and scheduling.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-300/60 focus:ring-2 focus:ring-indigo-300/15"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  What do you need help with? *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/15"
                  placeholder="Example: TV mounting + drywall patch. Address (optional), and preferred day/time..."
                />
              </div>

              <button
                type="submit"
                className="group w-full rounded-xl bg-linear-to-r from-cyan-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-95 hover:shadow-xl"
              >
                Submit Request
              </button>

              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to be contacted about your request.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
