
var portfolioContent = document.getElementsByClassName("portfolio-content");
var overlayContent = document.getElementsByClassName("portfolio-content__fullsize");
var bigPicture = document.getElementsByClassName("big-picture");

portfolioContent[0].addEventListener('click', toggleDone)
bigPicture[0].addEventListener('click', closeOverlay)

function toggleDone (event) {
  var clickTarget = event.target;
  if (clickTarget.classList.contains('portfolio-content__thumb')) {
    currentLinkTarget = clickTarget.parentElement.getAttribute('href');
    overlayContent[0].setAttribute('src', currentLinkTarget)
    event.preventDefault();
    openOverlay ();
  }
};

function openOverlay () {
  bigPicture[0].classList.add('show');
}

function closeOverlay () {
  bigPicture[0].classList.remove('show');
}
