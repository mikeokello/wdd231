async function loadSpotlights() {
  const res = await fetch("data/members.json");
  const data = await res.json();

  const spotlights = data.members
    .filter(m => m.level === "Gold" || m.level === "Silver")
    .slice(0,3);

  document.querySelector("#spotlights").innerHTML =
    spotlights.map(m => `
      <section class="card">
        <h3>${m.name}</h3>
        <img src="images/${m.image}" alt="${m.name}">
        <p>${m.phone}</p>
      </section>
    `).join("");
}
loadSpotlights();
