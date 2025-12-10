import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./veiw/home/Home";
import Contact from "./veiw/contact/Contact";
import ProjectDetail from "./veiw/project/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
