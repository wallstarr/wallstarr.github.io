import GitHubButton from "./GitHubButton";
import TechTag from "./TechTag";

function ProjectCard({ imageLink, title, text, technologies }) {
  return (
    <div>
      <div class="relative m-9 rounded-2xl flex flex-row bg-customblack2 min-h-full bg-auto">
        <img
          class="hidden rounded-l-2xl lg:block relative mr-2 h-64 w-auto"
          width="250"
          src="https://i.ibb.co/6chLqWD/Screen-Shot-2021-05-23-at-18-14-44.png"
          alt=""
        ></img>
        <div>
          <div class="font-semibold px-5 lg:mr-3 text-2xl mt-4 pb-1 lg:pt-2 text-customwhite underline">
            bedbot - web scraping discord bot for bedwars
          </div>
          <div class="font-medium   px-5 lg:mr-3 max-w-2xl">
            A Discord bot that my friend and I built for us and our friends to
            quickly retrieve video game statistics for Hypixel BedWars (a
            popular Minecraft server gamemode). We utilized Beautiful Soup 4 to
            webscrape and Discord.py to interact with the Discord API.
          </div>
          <div class="mt-4 ml-4">
            <TechTag tagText="Python"></TechTag>
            <TechTag tagText="Discord.py"></TechTag>
            <TechTag tagText="bs4"></TechTag>
          </div>
          <GitHubButton></GitHubButton>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
