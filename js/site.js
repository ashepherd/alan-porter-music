function ready() {
  document.querySelector('#navbarHeaderBurger').addEventListener('click', () => {
    document.querySelector('#navbarHeader').classList.toggle('is-active');
    document.querySelector('#navbarHeaderBurger').classList.toggle('is-active');
  });
}

document.addEventListener("DOMContentLoaded", ready);

function submitForm() {
  var DefaultValue = "N/A"; 
  if( document.contact.phone.value.length == 0 ) {
    document.contact.phone.value = DefaultValue;
  }
  return true;
}
