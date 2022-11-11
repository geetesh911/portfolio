import { createSignal, For } from "solid-js";
import ColorChanger from "./ColorChanger";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import projectsData from "../static/projects.json";

const Projects = () => {
  const [projects] = createSignal<ProjectCardProps[]>(projectsData);

  return (
    <div id="portfolio">
      <ColorChanger />
      <div class="portfolio-header">
        <span class="color"> My </span> Projects
        <span class="header-caption">
          Some Of My <span class="color"> Work</span>
        </span>
      </div>
      <div id="portfolio-content">
        <For each={projects()}>
          {(project, i) => <ProjectCard {...project} />}
        </For>
      </div>
    </div>
  );
};

export default Projects;
