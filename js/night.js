var switchNight = document.querySelector(".main-block__night-switch");
var mainBlock = document.querySelector(".main-block");
var mainContainer = document.querySelector(".main-container");
var mainBlockContainer = document.querySelector(".main-block__container");
var mainBlockBackground = document.querySelector(".main-block__background");
var headerLogo = document.querySelector(".page_header__logo");
var headerSiteList = document.querySelector(".page-header__site-list");





switchNight.addEventListener( 'change', function() {
  // evt.preventDefault();
    if(switchNight.checked) {
      mainBlock.classList.add("main-block--night");
      mainContainer.classList.add("main-container--night");
      mainBlockContainer.classList.add("main-block__container--night");
      mainBlockBackground.classList.add("main-block__background--night");
      headerLogo.classList.add("page_header__logo--night");
      headerSiteList.classList.add("page-header__site-list--night");
    } else {
      mainBlock.classList.remove("main-block--night");
      mainContainer.classList.remove("main-container--night");
      mainBlockContainer.classList.remove("main-block__container--night");
      mainBlockBackground.classList.remove("main-block__background--night");
      headerLogo.classList.remove("page_header__logo--night");
      headerSiteList.classList.remove("page-header__site-list--night");
    }
});

console.log(switchNight);
