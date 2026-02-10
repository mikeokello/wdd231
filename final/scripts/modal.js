const modal = document.querySelector('#placeModal');
const title = document.querySelector('#modalTitle');
const info = document.querySelector('#modalInfo');
const closeBtn = document.querySelector('#closeModal');

export function openModal(place) {
  title.textContent = place.name;
  info.textContent = `${place.name} is a ${place.type} in the ${place.region} region.`;
  modal.showModal();
}

closeBtn.addEventListener('click', () => modal.close());
