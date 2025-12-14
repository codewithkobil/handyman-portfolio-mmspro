import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Projects from "../home/Projects";
import FloatingPhone from "../../components/FloatingPhone";

const Services = () => {
  return (
    <div className="w-full bg-slate-900 text-slate-100">
      <Header />
      <main className="relative pt-28">
        <Projects />
      </main>
      <Footer />
      <FloatingPhone />
    </div>
  );
};

export default Services;
