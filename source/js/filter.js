// Execute the function and clear all columns
// function filterSelection(c) {
  // var x, i;
  // x = document.getElementsByClassName("portfolio-content__image");
  // if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  // for (i = 0; i < x.length; i++) {
    // w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }


// Show filtered elements
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// Hide elements that are not selected
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

var itemCollection = document.getElementsByClassName("portfolio-content__image");
for (var i = 0; i < itemCollection.length; i++) {
  currentItem = itemCollection[i].className.split(" ");
  console.log(currentItem);
  // console.log(classCollection[i].className);
  if (currentItem.includes('vector')) {
    console.log('нашел вектор')
  }
  // checkClass(current[i]);
}
// function checkClass (class) {
//   if class =
// }
//
function addClass (item) {

}



// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("portfolio-filter__checkbox");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.querySelectorAll("input[type=checkbox]:checked");
    for (var i = 0; i < current.length; i++) {
      console.log(current[i].name);
      // checkClass(current[i]);
    }
    // current[0].className = current[0].className.replace(" active", "");
    // this.className += " active";
  });
}
