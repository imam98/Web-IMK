/* Mobile menu dropdown */
function dropdownClick() {
  let menu = document.getElementById("mobileMenu")

  if (menu.className === "mobile-menu")
    menu.className += " is-showed";
  else
    menu.className = "mobile-menu";
}

/* Slider */
function sliderInit() {
  $('.slider-container').unslider({
    delay: 5000,
    autoplay: true,
    infinite: true,
    arrows: {
      prev: '<a class="unslider-arrow prev" href="javascript:void(0);"><i class="fa fa-angle-left"></i></a>',
      next: '<a class="unslider-arrow next" href="javascript:void(0);"><i class="fa fa-angle-right"</i></a>'
    }
  });
}
