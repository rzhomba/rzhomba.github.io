$(document).on("scroll", () => {
  navbar.style.height = 80 - Math.min(Math.max(window.scrollY - 80, 0), 25) + 'px';
})