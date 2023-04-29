const cell = document.querySelectorAll(".skill-icon");
const skills = [
  {
    skillName: "html",
    classClassification: "fa-brands",
    className: "fa-html5",
    proficiency: 70,
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
    proficiency: 70,
  },
  {
    skillName: "c",
    classClassification: "fa-brands",
    className: "devicon-c-plain",
    proficiency: 70,
  },
  {
    skillName: "python",
    classClassification: "fa-brands",
    className: "fa-python",
    proficiency: 70,
  },
  {
    skillName: "R",
    classClassification: "fa-brands",
    className: "fa-r-project",
    proficiency: 70,
  },
  {
    skillName: "unity",
    classClassification: "fa-brands",
    className: "fa-unity",
    proficiency: 70,
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
    proficiency: 70,
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
    proficiency: 70,
  },
  {
    skillName: "Flask",
    classClassification: "fa-brands",
    className: "devicon-flask-plain",
    proficiency: 70,
  },

]

cell.forEach(cell => {
  let skill = skills.pop()
  // console.log(skill, skill.className);
  cell.classList.add(skill.classClassification, skill.className);
})



