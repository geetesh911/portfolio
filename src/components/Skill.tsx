import type { Component } from "solid-js";

export interface SkillProps {
  skills: string[];
  categoryName: string;
}

const Skill: Component<SkillProps> = ({ skills, categoryName }) => {
  return (
    <li>
      <b>{categoryName}</b> - {skills.join(", ")}
    </li>
  );
};

export default Skill;
