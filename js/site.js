function ready() {
  document.querySelector('#navbarHeaderBurger').addEventListener('click', () => {
    document.querySelector('#navbarHeader').classList.toggle('is-active');
    document.querySelector('#navbarHeaderBurger').classList.toggle('is-active');
  });
}

document.addEventListener("DOMContentLoaded", ready);


window.onorientationchange = function() { 
        switch(window.orientation) { 
            case 0:
            case 90:
            case -90: window.location.reload(); 
            break; 
        } 
};

/* FormBold throws a 500 error on optional fields that aren't filled out */
function submitForm() {
  var DefaultValue = "N/A"; 
  if( document.contact.phone.value.length == 0 ) {
    document.contact.phone.value = DefaultValue;
  }
  return true;
}
