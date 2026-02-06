const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
