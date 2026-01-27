/* ===== HAMBURGER MENU ===== */
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.textContent = "☰";

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

/* ===== FOOTER DATES ===== */
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
