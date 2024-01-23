import ProjectCard from "./ProjectCard";
import project_list from "./data/ProjectList";

function Projects() {
  return (
    <div className="relative flex flex-col min-h-min items-center bg-customblack z-10 pt-12 -mt-12 mb-10 text-white" id="projects">
      <div className="text-4xl font-bold underline text-center mx-4">
        Some Things I've Built
      </div>
      {project_list.map((project) => (
        <ProjectCard key={project.github} project={project}></ProjectCard>
      ))}
    </div>
  );
}

export default Projects;
