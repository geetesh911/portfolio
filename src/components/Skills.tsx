import { createSignal, For } from "solid-js";
import Skill, { SkillProps } from "./Skill";
import skillsData from "../static/skills.json";

const Skills = () => {
  const [skills] = createSignal<SkillProps[]>(skillsData);

  return (
    <div id="skills">
      <div class="skills-header">
        My <span class="color"> Skills</span>
      </div>

      <div class="skills-content">
        <ul>
          <For each={skills()}>{(skill) => <Skill {...skill} />}</For>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
