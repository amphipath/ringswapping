export function displaySkill(skill: SkillData) {
  const content = document.createElement("div");
  content.className = "container";
  content.id = "content" + skill.id.toString();

  const header = document.createElement("h4");
  if (skill.id) {
    header.appendChild(getImage(skill));
  }
  const headerText = document.createElement("span");
  headerText.innerText = `${skill.name}${skill.id ? ` (${skill.id})` : ""}`;
  headerText.className = "align-middle";
  header.appendChild(headerText);
  content.appendChild(header);

  if (skill.remarks) {
    const remarksElement = document.createElement("div");
    remarksElement.className = "container m-1";
    remarksElement.innerText = skill.remarks;
    content.appendChild(remarksElement);
  }

  const body = document.createElement("div");
  body.className =
    "container d-flex justify-content-around align-items-center flex-wrap";
  body.innerHTML = `<div class="container w-50">
     <strong>MSEA</strong>
     <br />
     ${
       skill.mseaVideoUrl
         ? `<video src="${skill.mseaVideoUrl}" loop="true" muted autoplay height=300 />`
         : `<p>Recording for MSEA cannot be made because this skill is activated together with other skills that are known to cause the issue or put the user in combat state, 
      hence we cannot isolate it to be 100% certain that it causes the issue. 
      However it is suspected to cause the issue due to falling in the same pattern of being an indirect attack, 
      and if there is proof from KMS that this skill doesn't prevent equip swapping in KMS, please do make sure that it does not in MSEA as well.</p>`
     }
     
     </div>
     <div class="container w-50"> 
     <strong>KMS</strong>
     <br />
     ${
       skill.kmsVideoUrl
         ? `<video src="${skill.kmsVideoUrl}" loop="true" muted autoplay height=300 />`
         : `<p>No recording of KMS side at the moment.</p>`
     }
     </div>
     `;
  content.appendChild(body);

  const div = document.querySelector("#displaySkill")!;
  div.innerHTML = "";
  div.appendChild(content);
}

export function getImage(skill: SkillData) {
  const skillIcon = document.createElement("img");
  const imgUrl = new URL(`./skillicons/${skill.id}.icon.png`, import.meta.url)
    .href;
  skillIcon.src = imgUrl;
  skillIcon.className = "me-2";
  return skillIcon;
}
