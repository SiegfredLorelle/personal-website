const skills = [
  {
    skillName: "html",
    classClassification: "fa-brands",
    className: "fa-html5",
    proficiency: 80,
  },
  {
    skillName: "css",
    classClassification: "fa-brands",
    className: "fa-css3-alt",
    proficiency: 70,
  },
  {
    skillName: "javascript",
    classClassification: "fa-brands",
    className: "fa-square-js",
    proficiency: 70,
  },
  {
    skillName: "c#",
    classClassification: "fa-brands",
    className: "devicon-csharp-plain",
    proficiency: 30,
  },
  {
    skillName: "c",
    classClassification: "fa-brands",
    className: "devicon-c-plain",
    proficiency: 40,
  },
  {
    skillName: "python",
    classClassification: "fa-brands",
    className: "fa-python",
    proficiency: 90,
  },
  {
    skillName: "R",
    classClassification: "fa-brands",
    className: "fa-r-project",
    proficiency: 30,
  },
  {
    skillName: "unity",
    classClassification: "fa-brands",
    className: "fa-unity",
    proficiency: 60,
  },
  {
    skillName: "git",
    classClassification: "fa-brands",
    className: "fa-git-alt",
    proficiency: 70,
  },
  {
    skillName: "bootstrap",
    classClassification: "fa-brands",
    className: "fa-bootstrap",
    proficiency: 80,
  },
  {
    skillName: "unix",
    classClassification: "fa-brands",
    className: "fa-linux",
    proficiency: 70,
  },
  {
    skillName: "SQLite",
    classClassification: "fa-brands",
    className: "devicon-sqlite-plain",
    proficiency: 60,
  },
  {
    skillName: "Flask",
    classClassification: "fa-brands",
    className: "devicon-flask-plain",
    proficiency: 60,
  },
]

const skillsContainer = document.querySelector(".skills-container");

let sortedIcons = []

createSkillIcons();

function createSkillIcons() {
  let skillsCopy = skills.slice();
  // console.log(skillsCopy);

  while (skillsCopy.length) {
    let skill = skillsCopy.pop();
    // console.log(skill);
    cell = addSkillIcon(skill);
    adjustSkillIconSize(skill, cell);

    sortedIcons.push({cell: cell, skill, skill});
  }
}

function addSkillIcon(skill) {
  // Create a cell for skill icon as a child of skills container
  // console.log(skill.className);
  const cell = document.createElement("i");
  cell.classList.add("skill-icon", "fa-brands");
  skillsContainer.appendChild(cell);
  cell.classList.add(skill.className);
  return cell;

}

function adjustSkillIconSize(skill, cell) {
  // Find the larger window dimension
  largerWindowDimension = window.innerHeight
  if (largerWindowDimension < window.innerWidth) {
    largerWindowDimension = window.innerWidth
  }
  // Adjust the size of cell based on proficiency & larger window dimension
  fontSize = skill.proficiency * (largerWindowDimension / 100);
  cell.style.fontSize = `${fontSize}%`;
}


/* Listen to window resize to update the skill icon size */
window.addEventListener("resize", () => {
  sortedIcons.forEach(icon => {
    adjustSkillIconSize(icon.skill, icon.cell);
  });
});