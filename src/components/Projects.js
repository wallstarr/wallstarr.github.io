import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div class="relative flex flex-col min-h-min items-center bg-customblack z-10 pt-12 -mt-12 pb-24 mb-10 text-white">
          <div class="text-4xl font-bold underline text-center mx-4">Some Things I've Built</div>
          <ProjectCard></ProjectCard>
        </div>
    );
  }
  
  export default Projects;
  