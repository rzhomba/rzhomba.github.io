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
})

// Navbar underline 
// const items = document.querySelectorAll("ul a");
// items.forEach(el => {
//   el.addEventListener("click", () => {
//     document.querySelector("a.active").classList.remove("active");
//     el.classList.add("active")
//   });
// });

// Scroll
$(document).ready(function() {
  $(".navbar ul li a").click(function(event) {
    $(".navbar ul li a").removeClass('active');
    $(this).addClass('active');
    thisAtrrHref = $(this).attr('href');
    thisAttrHrefOffset = $(thisAtrrHref).offset().top;
    $("html,body").animate({scrollTop:thisAttrHrefOffset})
    event.preventDefault
  })
})

$(window).scroll(function() {
  $("section").each(function() {
    containerRowTop = $(this).offset().top;
    if ($(document).scrollTop() > containerRowTop) {
      thisOfs = $(this).attr('id');
      $("section").removeClass('active');
      ActiveID = $(this).addClass('active').attr('id')
    }
  });
  $(".navbar ul li").each(function(index, el) {
    thisChildren = $(this).children('a');
    thisChildrenHref = $(this).children('a').attr('href');
    if (thisChildrenHref === '#' + ActiveID) {
      $(".navbar ul li a").removeClass('active');
      $(thisChildren).addClass('active')
    }
  })
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

// 