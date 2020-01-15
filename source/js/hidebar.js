/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var pageNav = document.querySelector(".page-header__nav");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    pageNav.style.top = "0";
  } else {
    pageNav.style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}
