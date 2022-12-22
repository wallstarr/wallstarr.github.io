import GitHubButton from "./GitHubButton";
import TechTag from "./TechTag";

function ProjectCard({ project }) {
  return (
    
      <div class="relative mx-9 my-4 rounded-2xl flex flex-row bg-customblack2 min-h-full bg-auto">
        <img
          class="hidden rounded-l-2xl lg:block relative mr-2 w-96"
          width="250"
          src={project.imageLink}
          alt=""
        ></img>
        <div>
          <div class="font-semibold px-5 lg:mr-3 text-2xl mt-4 pb-1 lg:pt-2 text-customwhite underline">
            {project.title}
          </div>
          <div class="font-medium   px-5 lg:mr-3 max-w-2xl">
            {project.description}
          </div>
          <div class="mt-4 ml-4">
            {(project.stack).map((technology) => (
              <TechTag tagText={technology}></TechTag>
            ))}
          </div>
          <GitHubButton link={project.github}></GitHubButton>
        </div>
      </div>
    
  );
}

export default ProjectCard;
