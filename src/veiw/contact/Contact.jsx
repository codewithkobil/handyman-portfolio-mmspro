import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks! We received your request and will contact you shortly.");
    setFormData({ fullName: "", email: "", phone: "", description: "" });
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
                Prefer calling or texting? Reach us directly:
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-white/10">
                    <Phone className="h-5 w-5 text-cyan-200" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <a
                      href="tel:+1800123456"
                      className="font-semibold text-slate-100 hover:text-cyan-200"
                    >
                      (800) 123-456
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-white/10">
                    <Mail className="h-5 w-5 text-indigo-200" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <a
                      href="mailto:hello@mmspro.com"
                      className="font-semibold text-slate-100 hover:text-indigo-200"
                    >
                      hello@mmspro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500/10 ring-1 ring-white/10">
                    <MapPin className="h-5 w-5 text-slate-200" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">Service Area</p>
                    <p className="font-semibold text-slate-100">
                      Charleston, SC + nearby
                    </p>
                  </div>
                </div>
              </div>

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
                    placeholder="(843) 555-0123"
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
                  rows={6}
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
