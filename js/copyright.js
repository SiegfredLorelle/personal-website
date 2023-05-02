const copyright = document.querySelector("footer > .copyright");

const date = new Date();
const year = date.getFullYear();

copyright.innerHTML = `&copy; ${year} Siegfred Mina`;
