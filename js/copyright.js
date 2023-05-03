const copyright = document.querySelector("footer > .copyright");

const date = new Date();
const year = date.getFullYear();

 // Use js to write the year so that it updates automatically
copyright.innerHTML = `&copy; ${year} Siegfred Mina`;
