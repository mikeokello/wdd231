import { places } from "../data/discover.mjs";

const grid = document.querySelector("#discoverGrid");

places.forEach(place => {
  grid.innerHTML += `
    <section class="card">
      <h3>${place.title}</h3>
      <img src="images/${place.image}" alt="${place.title}">
      <p>${place.description}</p>
    </section>`;
});
