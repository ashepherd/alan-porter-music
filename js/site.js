document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#navbarHeaderBurger').addEventListener('click', () => {
    document.querySelector('#navbarHeader').classList.toggle('is-active');
    document.querySelector('#navbarHeaderBurger').classList.toggle('is-active');
  });
});
