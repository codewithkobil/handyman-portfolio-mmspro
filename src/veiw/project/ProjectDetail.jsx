import { useParams, useNavigate } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { projects } from "../../constants/projects";
import { useEffect } from "react";
import FloatingPhone from "../../components/FloatingPhone";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project by ID (convert id param to number)
  const project = projects.find((p) => p.id === parseInt(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate("/services");
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="w-full bg-slate-800 text-white flex flex-col">
        <Header />
        <div className="grow flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <button
            onClick={handleBackClick}
            className="text-[#5eaeff] hover:text-[#5eaeff]/80 transition"
          >
            ← Back to Projects
          </button>
        </div>
        <Footer />
        <FloatingPhone />
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-800 text-white flex flex-col">
      <Header />

      <main className="grow">
        <article className="mx-auto max-w-7xl px-4 pt-40 pb-20 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Image */}
            <div className="w-full">
              <div className="overflow-hidden rounded-xl shadow-2xl bg-slate-800">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column: details */}
            <div className="flex flex-col h-full justify-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-white">
                {project.title}
              </h1>

              <div className="text-lg font-medium text-slate-200 mb-4">
                {project.excerpt}
              </div>

              <div className="prose prose-invert prose-lg max-w-none text-slate-400 mb-8">
                {project.description}
              </div>

              <div className="pt-6">
                <button
                  onClick={handleBackClick}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#5eaeff] text-white rounded-lg hover:bg-[#4a90e2] transition-colors font-semibold shadow-lg shadow-slate-500/20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back to Services
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
