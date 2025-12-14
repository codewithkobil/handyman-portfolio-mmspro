import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero";
import FloatingPhone from "../../components/FloatingPhone";
// import Availability from "./Availability";
import BeforeAfter from "./BeforeAfter";
import SocialMedia from "./SocialMedia";
import Projects from "./Projects";
import Service from "./Service";
import Testimonials from "./Testimonials";
import InfoService from "./InfoService";

const Home = () => {
  return (
    <div className="w-full bg-slate-800 text-white">
      <Header />
      <Hero />
      <InfoService />
      <BeforeAfter />
      <Projects />
      <Service />
      <Testimonials />

      <SocialMedia />
      <Footer />
      <FloatingPhone />
    </div>
  );
};

export default Home;
