import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { projects } from "../../constants/projects";

const Projects = () => {
  return (
    <section id="services" className="bg-slate-50 py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="mb-12 text-center text-4xl font-extrabold sm:text-5xl">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              id={`project-${project.id}`}
              to={`/service/${project.slug}`}
              className="group block h-full scroll-mt-28"
            >
              {/* Card */}
              <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-gray-300 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg">
                {/* SAME HEIGHT IMAGE (aspect ratio wrapper) */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                    draggable="false"
                  />
                </div>

                {/* Divider between image and content */}
                <div className="h-px w-full bg-slate-200" />

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-[#5eaeff] line-clamp-2 min-h-13">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 line-clamp-2 min-h-10">
                    {project.excerpt}
                  </p>

                  {/* Read more pinned bottom */}
                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-[#5eaeff]">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
