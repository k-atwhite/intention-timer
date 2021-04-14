var btnSection = document.querySelector('.btn-section');
// Activity Btns
var studyBtn = document.querySelector('#study-btn');
var meditateBtn = document.querySelector('#meditate-btn');
var exerciseBtn = document.querySelector('#exercise-btn');
//Button Imgs
var studyImg = document.querySelector('#study-img');
var meditateImg = document.querySelector('#meditate-img');
var exerciseImg = document.querySelector('#exercise-img');


// btnSection.addEventListener("click", function(event) {

function changeButtonColor(button, cssClass) {
  button.classList.add(cssClass);
}
