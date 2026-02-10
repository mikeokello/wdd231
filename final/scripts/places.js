import { openModal } from './modal.js';

const container = document.querySelector('#placesContainer');

async function getPlaces() {
  try {
    const response = await fetch('data/places.json');
    const data = await response.json();

    data.forEach(place => {
      const card = document.createElement('div');
      card.innerHTML = `
        <h3>${place.name}</h3>
        <p>Region: ${place.region}</p>
        <p>Type: ${place.type}</p>
        <p>Rating: ${place.rating}</p>
        <button>Details</button>
      `;

      card.querySelector('button').addEventListener('click', () => {
        openModal(place);
      });

      container.appendChild(card);
    });

  } catch (error) {
    container.textContent = 'Failed to load data.';
  }
}

getPlaces();
