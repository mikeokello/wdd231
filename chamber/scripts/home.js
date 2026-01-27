/* WEATHER (REPLACE API KEY) */
const weatherURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=0.3476&lon=32.5825&units=metric&appid=YOUR_API_KEY";

async function getWeather() {
  const response = await fetch(weatherURL);
  const data = await response.json();

  document.querySelector("#temp").textContent = data.list[0].main.temp;
  document.querySelector("#desc").textContent = data.list[0].weather[0].description;

  const forecast = document.querySelector("#forecast");
  forecast.innerHTML = "";

  for (let i = 8; i <= 24; i += 8) {
    const day = new Date(data.list[i].dt_txt).toLocaleDateString("en-US", {
      weekday: "long"
    });
    forecast.innerHTML += `<li>${day}: ${data.list[i].main.temp} °C</li>`;
  }
}
getWeather();

/* SPOTLIGHTS */
async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  const qualified = data.members.filter(
    m => m.level === "Gold" || m.level === "Silver"
  );

  qualified.sort(() => 0.5 - Math.random());
  const selected = qualified.slice(0, 3);

  const container = document.querySelector("#spotlights");
  container.innerHTML = "";

  selected.forEach(member => {
    container.innerHTML += `
      <section class="member-card">
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name}">
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      </section>
    `;
  });
}
loadSpotlights();
