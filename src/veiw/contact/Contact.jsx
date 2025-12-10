import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you! We'll contact you soon.");
    setFormData({ fullName: "", email: "", description: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white">
      <Header />

      <section className="mx-auto max-w-3xl px-4 pt-32 pb-20 md:py-20 lg:px-6">
        <div className="mt-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Get a <span className="text-[#5eaeff]">Quote</span>
            </h1>
            <p className="mt-4 text-slate-300">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800 p-8 rounded-xl shadow-xl">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white outline-none focus:border-[#5eaeff] focus:ring-2 focus:ring-[#5eaeff]/20 transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white outline-none focus:border-[#5eaeff] focus:ring-2 focus:ring-[#5eaeff]/20 transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="6"
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white outline-none focus:border-[#5eaeff] focus:ring-2 focus:ring-[#5eaeff]/20 transition"
                placeholder="Tell us about your plumbing needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#205a96] px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl hover:scale-[1.02] hover:bg-[#5eaeff]"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
