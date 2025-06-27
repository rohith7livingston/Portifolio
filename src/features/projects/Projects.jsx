import ProjectCard from "./ProjectCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { project } from "./project";

function Projects() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Livingston | Projects</title>
      </Helmet>
      <div className="bg-mainBg min-h-screen p-8 flex flex-col items-center">
        <h1 className="pb-5 text-3xl font-semibold text-textColor text-center">
          My Projects
        </h1>

        {/* Grid Layout with Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {project.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              desc={p.description}
              img={p.image}
              srcCode={p.sourceCode}
              demo={p.demo}
              tags={p.tags}
            />
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Projects;
