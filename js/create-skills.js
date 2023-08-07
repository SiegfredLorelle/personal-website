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
  {
    skillName: "React",
    classClassification: "fa-brands",
    className: "fa-react",
    proficiency: 30,
  },

  // Add morse skills here
]

const skillsContainer = document.querySelector(".skills-container");

/* Created icons will be stored here which will be helpful when updating skill
icon sizes */
let sortedIcons = []

createSkillIcons();

function createSkillIcons() {
  let new_skills = skills.slice();
  while (new_skills.length) {
    // Get a random index to remove
    let randomIndex = getRandomIndex(new_skills.length);
    let skill = new_skills[randomIndex];
    new_skills = new_skills.slice(0, randomIndex).concat(new_skills.slice(randomIndex+1));

    // Create skill icon then adjust its size
    cell = createSkillIcon(skill);
    adjustSkillIconSize(skill, cell);

    // Save each cell and skills to sorted icons so later it can be used later 
    // when skill icons needs to be updated
    sortedIcons.push({cell: cell, skill, skill});
  }
}

function getRandomIndex(size) {
  let index = Math.floor(Math.random() * size)
  return index;
}

function createSkillIcon(skill) {
  // Create a cell for skill icon as a child of skills container
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


/* Shuffle the skills */
const shuffleBtn = document.querySelector(".shuffle-btn");
shuffleBtn.addEventListener("click", () => {
  // Remove all skills then create a new one for each
  skillsContainer.replaceChildren();
  createSkillIcons();
});