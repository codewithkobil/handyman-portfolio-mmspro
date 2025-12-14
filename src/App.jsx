import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./veiw/home/Home";
import AboutUs from "./veiw/about-us/AboutUs";

import ProjectDetail from "./veiw/project/ProjectDetail";
import Contact from "./veiw/contact/Contact";
import Services from "./veiw/service/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
