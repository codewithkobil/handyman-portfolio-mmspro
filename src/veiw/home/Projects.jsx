import { Link } from "react-router";
import { projects } from "../../constants/projects";

const Projects = () => {
  return (
    <section id="services" className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center text-4xl font-extrabold sm:text-5xl text-slate-900 mb-12">
          Plumbing <span className="text-[#5eaeff]">Project Work</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              id={`project-${project.id}`}
              to={`/service/${project.id}`}
              className="group block scroll-mt-28"
            >
              <div className="overflow-hidden rounded-xl bg-slate-100">
                <img
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  alt={project.title}
                  src={project.coverImage}
                />
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#5eaeff] transition">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                  {project.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
