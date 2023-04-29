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
  }
]


// for (const counter of range(1, skills.length)) {
//   console.log(counter)
// }
const skillsContainer = document.querySelector(".skills-container");
while (skills) {

  // Create skill icon as a child of skills container
  const cell = document.createElement("i");
  cell.classList.add("skill-icon", "fa-brands");
  skillsContainer.appendChild(cell);

  // Add the skill in
  let skill = skills.pop()
  console.log(skills);
  cell.classList.add(skill.className);
  fontSize = skill.proficiency * (window.innerWidth / 100);
  cell.style.fontSize = `${fontSize}%`;
}

const cell = document.querySelectorAll(".skill-icon");
