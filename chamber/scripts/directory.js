/* ================= MOBILE MENU ================= */
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.textContent = "☰";

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

/* ================= GRID / LIST VIEW ================= */
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const members = document.querySelector("#members");

gridButton.addEventListener("click", () => {
  members.classList.add("grid");
  members.classList.remove("list");
});

listButton.addEventListener("click", () => {
  members.classList.add("list");
  members.classList.remove("grid");
});

/* ================= FOOTER DATES ================= */
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
