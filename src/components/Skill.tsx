import type { Component } from "solid-js";

export interface SkillProps {
  name: string;
  percent: number;
}

const Skill: Component<SkillProps> = ({ name, percent }) => {
  return (
    <div class="skill-html skill">
      <div class="skill-text">
        <div class="html">{name}</div>
      </div>
      <div class="html-prog wow prog">
        <div
          class="html-progress wow"
          style={{ width: `${percent}% !important` }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default Skill;
