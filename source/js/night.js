var switchNight = document.querySelector(".main-block__night-switch");
var mainBlock = document.querySelector(".main-block");
var mainContainer = document.querySelector(".main-container");
var mainBlockContainer = document.querySelector(".main-block__container");
var mainBlockBackground = document.querySelector(".main-block__background");
var headerLogo = document.querySelector(".page_header__logo");
var headerSiteList = document.querySelector(".page-header__site-list");
var headerLogoCircle = document.querySelector(".page_header__logo-circle");
var pageHeaderNav = document.querySelector(".page-header__nav");
var mbGreetingTitle = document.querySelector(".main-block__greeting-title");

var buttonSunNight = document.querySelector(".main-block__sun-night");

var key = 'timeOfDay';

var currentKey = localStorage.getItem('timeOfDay');
if (currentKey == 'night_on') {
  switchNight.checked = true;
  switchNightOn();
}

switchNight.addEventListener( 'change', function() {
  // evt.preventDefault();
    if(switchNight.checked) {
      window.localStorage[key] = 'night_on';
      switchNightOn()
    } else {
      window.localStorage[key] = 'night_off';
      switchNightOff()
    }
});

function switchNightOn() {
  mainBlock.classList.add("main-block--night");
  mainContainer.classList.add("main-container--night");
  mainBlockContainer.classList.add("main-block__container--night");
  mainBlockBackground.classList.add("main-block__background--night");
  headerLogo.classList.add("page_header__logo--night");
  headerSiteList.classList.add("page-header__site-list--night");
  headerLogoCircle.classList.add("page_header__logo-circle--night");
  pageHeaderNav.classList.add("page-header__nav--night");
  mbGreetingTitle.classList.add("main-block__greeting-title--night");
}

function switchNightOff() {
  mainBlock.classList.remove("main-block--night");
  mainContainer.classList.remove("main-container--night");
  mainBlockContainer.classList.remove("main-block__container--night");
  mainBlockBackground.classList.remove("main-block__background--night");
  headerLogo.classList.remove("page_header__logo--night");
  headerSiteList.classList.remove("page-header__site-list--night");
  headerLogoCircle.classList.remove("page_header__logo-circle--night");
  pageHeaderNav.classList.remove("page-header__nav--night");
  mbGreetingTitle.classList.remove("main-block__greeting-title--night");
}




// console.log(window.localStorage);
