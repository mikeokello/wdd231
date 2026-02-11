const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}
