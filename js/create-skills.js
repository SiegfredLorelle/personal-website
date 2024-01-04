const skills = [
  {
    skillName: "HTML",
    classClassification: "fa-brands",
    className: "fa-html5",
    proficiency: 80,
  },
  {
    skillName: "CSS",
    classClassification: "fa-brands",
    className: "fa-css3-alt",
    proficiency: 70,
  },
  {
    skillName: "JavaScript",
    classClassification: "fa-brands",
    className: "fa-square-js",
    proficiency: 70,
  },
  {
    skillName: "C#",
    classClassification: "fa-brands",
    className: "devicon-csharp-plain",
    proficiency: 30,
  },
  {
    skillName: "C",
    classClassification: "fa-brands",
    className: "devicon-c-plain",
    proficiency: 40,
  },
  {
    skillName: "Python",
    classClassification: "fa-brands",
    className: "fa-python",
    proficiency: 90,
  },
  {
    skillName: "R",
    classClassification: "fa-brands",
    className: "fa-r-project",
    proficiency: 20,
  },
  {
    skillName: "Unity",
    classClassification: "fa-brands",
    className: "fa-unity",
    proficiency: 60,
  },
  {
    skillName: "Git",
    classClassification: "fa-brands",
    className: "fa-git-alt",
    proficiency: 70,
  },
  {
    skillName: "Bootstrap",
    classClassification: "fa-brands",
    className: "fa-bootstrap",
    proficiency: 80,
  },
  {
    skillName: "Unix",
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
  {
    skillName: "Docker",
    classClassification: "fa-brands",
    className: "fa-docker",
    proficiency: 40,
  },
  {
    skillName: "NodeJS",
    classClassification: "fa-brands",
    className: "fa-node-js",
    proficiency: 30,
  },
  {
    skillName: "TensorFlow",
    classClassification: "fa-brands",
    className: "devicon-tensorflow-original",
    proficiency: 50,
  },
  {
    skillName: "NumPy",
    classClassification: "fa-brands",
    className: "devicon-numpy-original",
    proficiency: 40,
  },
  {
    skillName: "Pandas",
    classClassification: "fa-brands",
    className: "devicon-pandas-original",
    proficiency: 40,
  },
  {
    skillName: "Kaggle",
    classClassification: "fa-brands",
    className: "fa-kaggle",
    proficiency: 40,
  },
  {
    skillName: "Laravel",
    classClassification: "fa-brands",
    className: "fa-laravel",
    proficiency: 30,
  },
  {
    skillName: "PHP",
    classClassification: "fa-brands",
    className: "fa-php",
    proficiency: 30,
  },
  {
    skillName: "WordPress",
    classClassification: "fa-brands",
    className: "fa-wordpress",
    proficiency: 20,
  },
  {
    skillName: "ThreeJS",
    classClassification: "fa-brands",
    className: "devicon-threejs-original",
    proficiency: 20,
  },
  {
    skillName: "MySQL",
    classClassification: "fa-brands",
    className: "devicon-mysql-plain",
    proficiency: 40,
  },
  {
    skillName: "Jupyter",
    classClassification: "fa-brands",
    className: "devicon-jupyter-plain",
    proficiency: 40,
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
  enableTooltip();
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
  cell.setAttribute("data-bs-toggle", "tooltip");
  cell.setAttribute("data-bs-title", skill.skillName);
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

function enableTooltip() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
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