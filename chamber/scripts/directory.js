async function loadMembers() {
  const res = await fetch("data/members.json");
  const data = await res.json();
  const container = document.querySelector("#members");

  container.innerHTML = data.members.map(m => `
    <section class="card">
      <h3>${m.name}</h3>
      <img src="images/${m.image}" alt="${m.name}">
      <p>${m.address}</p>
    </section>`).join("");
}
loadMembers();
