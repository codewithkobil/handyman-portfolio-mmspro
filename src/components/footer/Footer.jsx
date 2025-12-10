import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="text-slate-300">Downtown Miami, Florida, Arlington, USA</p>
            <p className="mt-2 text-slate-300">+1 123-456-789</p>
            <p className="mt-2 text-slate-300">demo@example.com</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="/#about" className="hover:text-white transition">About</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="/#beforeAfter" className="hover:text-white transition">Our Work Transformation</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} PTERNAL Plumbing Services. All Rights Reserved. Developed by Kobil
        </div>
      </div>
    </footer>
  );
};

export default Footer;
