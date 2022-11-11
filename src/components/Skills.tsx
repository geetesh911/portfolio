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

      <div class="skills-content " style="text-align: center;">
        <For each={skills()}>{(skill, i) => <Skill {...skill} />}</For>
      </div>
    </div>
  );
};

export default Skills;
