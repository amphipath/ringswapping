// Import our custom CSS
import { displaySkill, getImage } from "./functions";
import "./scss/styles.scss";
import skillData from "./skillData";

const skillSelect = document.getElementById("skillSelect") as HTMLSelectElement;

for (const skill of skillData) {
  const link = document.createElement("a");
  link.className =
    "d-flex flex-row list-group-item list-group-item-action align-items-center";

  if (skill.id) {
    const skillIcon = getImage(skill);
    link.appendChild(skillIcon);
  }
  const skillName = document.createElement("p");
  skillName.className = "mb-0";
  skillName.innerText = skill.name;
  link.appendChild(skillName);
  if (skill.id) {
    const skillId = document.createElement("p");
    const skillIdSmall = document.createElement("small");
    skillIdSmall.innerText = `(${skill.id})`;
    skillId.className = "text-secondary ms-2 mb-0";
    skillId.appendChild(skillIdSmall);
    link.appendChild(skillId);
  }
  link.onclick = () => displaySkill(skill);
  skillSelect.appendChild(link);
}
