/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var pageNav = document.querySelector(".page-header__nav");




if (document.documentElement.clientWidth >= 768) {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      pageNav.style.top = "0";
    } else {
      pageNav.style.top = "-250px";
    }
    prevScrollpos = currentScrollPos;
  }
  console.log(document.documentElement.clientWidth);


} else {


var headerPage = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');


headerToggle.addEventListener('click', function() {
  if (headerPage.classList.contains('page-header--mobile-closed')) {
    headerPage.classList.remove('page-header--mobile-closed');
    headerPage.classList.add('page-header--mobile-opened');
  } else {
    headerPage.classList.add('page-header--mobile-closed');
    headerPage.classList.remove('page-header--mobile-opened');
  }
});

}
