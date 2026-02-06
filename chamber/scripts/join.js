// Set timestamp when form loads
document.querySelector("#timestamp").value = new Date().toISOString();

// Modal handling
document.querySelectorAll("[data-modal]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.modal).showModal();
  });
});

document.querySelectorAll("dialog button").forEach(button => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
  });
});
