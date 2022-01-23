$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1000,
  autoplayTimeout: 5000,
  dots: false,
  touchDrag: false,
  mouseDrag: false,
  smartSpeed: 500,
  animateIn: "fadeInUp",
  animateOut: "fadeOut",
});
// animation-revealing
new WOW().init();

// scrolling-animation
AOS.init();

// sticky-header
window.onscroll = function () {
  headerFunction();
};

var body = document.body;
var sticky = body.offsetTop;

function headerFunction() {
  if (window.pageYOffset > 150) {
    body.classList.add("sticky");
  } else {
    body.classList.remove("sticky");
  }
}

function MobileMenu() {
  let menuIcon = document.querySelector(".hamburger");
  let body = document.querySelector("body");
  let overlay = document.querySelector(".overlay");
  menuIcon.addEventListener("click", function () {
    body.classList.toggle("active");
  });
  overlay.addEventListener("click", function () {
    body.classList.remove("active");
  });
  $(".mobile-container .mobile-menu li").click(() => {
    body.classList.remove("active");
  });
}
MobileMenu();

//   activating-main-header-elements
$("header .nav-bar li a").click(function () {
  console.log("helooo");
  $("header .wrapper .nav-bar li a.active").removeClass("active");
  $(this).addClass("active");
});

//   activating-elements-mobile-menu
$(".mobile-container .mobile-menu li").click(function () {
  $(".mobile-container .mobile-menu li.active").removeClass("active");
  $(this).addClass("active");
});
