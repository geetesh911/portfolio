import { Component, Show } from "solid-js";

export interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  link?: string;
}

const ProjectCard: Component<ProjectCardProps> = ({
  image,
  name,
  description,
  link,
}) => {
  return (
    <div class="portfolio">
      <div class="portfolio-image">
        <img src={image} alt="project-image" />
      </div>
      <div class="portfolio-text">
        <h2>{name}</h2>
        <p>{description}</p>
        <Show when={link}>
          <div class="button">
            <a href={link}>
              <button>
                <span class="index">
                  View Project<i class="gg-arrow-right"></i>
                </span>
              </button>
            </a>
          </div>
        </Show>
      </div>
    </div>
  );
};

export default ProjectCard;
