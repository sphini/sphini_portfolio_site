var itemCollection = document.getElementsByClassName("portfolio-content__image");
var portfolioContentGreeting = document.getElementsByClassName("portfolio-content__greeting");

function checkFilter (checkedClasses) {
  for (var s = 0; s < itemCollection.length; s++) {
    var currentItem = itemCollection[s];                          // запоминаю какое фото проверяем
    currentItemClasses = itemCollection[s].className.split(" ");  // создаю массив классов текущего фото

    if (currentItemClasses.includes('show')) {                    //  очищаю поле коллекции от выбранных прошлый раз элементов
      removeClass (currentItem);
    }

    for (var p = 0; p < checkedClasses.length; p++) {             //  перебираю классы выбранных вкладок
      if (currentItemClasses.includes(checkedClasses[p].name)) {  //  если массив фото содержит класс вкладки
        addClass (currentItem);                                   // перекидываю фото в добавление класса
      }
    }

  }
}


function addClass (item) {
  item.classList.add('show');
}

function removeClass (item) {
  item.classList.remove('show');
}

var btnsFilter = document.getElementsByClassName("portfolio-filter__checkbox");
for (var i = 0; i < btnsFilter.length; i++) {
  btnsFilter[i].addEventListener("click", function()  {           // навешиваю обработчики на кнопки фильтра
    var currentChecked = document.querySelectorAll("input[type=checkbox]:checked");       // при клике отбираю включенные (checked) вкладки
    checkFilter (currentChecked);                                 // отправляю в функцию сравнения коллекции с включенными вкладками фильтра
    portfolioContentGreeting[0].style.display = 'none';
  });
}




// проба

var mainContainer = document.querySelector(".main-container");
var pageHeaderNav = document.querySelector(".page-header__nav");

var currentKey = localStorage.getItem('timeOfDay');
if (currentKey == 'night_on') {
  mainContainer.classList.add("main-container--night");
  pageHeaderNav.classList.add("page-header__nav--night");
} else {
  mainContainer.classList.remove("main-container--night");
  pageHeaderNav.classList.remove("page-header__nav--night");
}

window.addEventListener('storage', function(event) {
  console.log(window.localStorage[event.key]);
    if (window.localStorage[event.key] == 'night_on') {
      mainContainer.classList.add("main-container--night");
      pageHeaderNav.classList.add("page-header__nav--night");
      return;  // Если прислали не наши данные, ничего не делаем
    } else {
      mainContainer.classList.remove("main-container--night");
    pageHeaderNav.classList.remove("page-header__nav--night"); }


});
