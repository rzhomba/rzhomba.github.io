// Navbar
$(document).on("scroll", () => {
  navbar.style.height = 80 - Math.min(Math.max(window.scrollY - 80, 0), 25) + 'px';

  if (window.scrollY > 80) {
    $("#navbar-button").removeClass("btn-dark");
    $("#navbar-button").addClass("btn-minimized");
  } else {
    $("#navbar-button").addClass("btn-dark");
    $("#navbar-button").removeClass("btn-minimized");
  }

  // console.log(window.scrollY > 80);
})

// 

// Google Maps
function initMap() {
  const location = { lat: -25.344, lng: 131.036 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}