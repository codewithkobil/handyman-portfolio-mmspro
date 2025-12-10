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
    <div className="min-h-screen w-full bg-slate-900 text-white">
      <Header />
      <Hero />
      <InfoService />
      <Projects />
      <Service />
      <Testimonials />
      <BeforeAfter />
      <SocialMedia />
      <Footer />
      <FloatingPhone phoneNumber="1-800-123-456" />
    </div>
  );
};

export default Home;
