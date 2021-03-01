// Navbar
$(document).on("scroll", () => {
  navbar.style.height = 80 - Math.min(Math.max(window.scrollY - 80, 0), 25) + 'px';
})

// Slider slick
$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

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