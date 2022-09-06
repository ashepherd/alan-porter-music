function ready() {
  document.querySelector('#navbarHeaderBurger').addEventListener('click', () => {
    document.querySelector('#navbarHeader').classList.toggle('is-active');
    document.querySelector('#navbarHeaderBurger').classList.toggle('is-active');
  });
  document.querySelector('div.powr-social-feed iframe').style.height = "1px";
}

document.addEventListener("DOMContentLoaded", ready);
