var btnSection = document.querySelector('.btn-section');
// Activity Btns
var studyBtn = document.querySelector('#study-btn');
var meditateBtn = document.querySelector('#meditate-btn');
var exerciseBtn = document.querySelector('#exercise-btn');
//Button Imgs
var studyImg = document.querySelector('#study-img');
var meditateImg = document.querySelector('#meditate-img');
var exerciseImg = document.querySelector('#exercise-img');
//Input Values
var accomplishInput = document.querySelector('#accomplishment-input');
var minutesInput = document.querySelector('#minutes-input');
var secondsInput = document.querySelector('#seconds-input');

var startActivityBtn = document.querySelector('#startActivityBtn');
var accomplishmentWarning = document.querySelector('#accomplishmentWarning');
var timeWarning = document.querySelector('#timeWarning');

var currentActivity;
var savedActivities = [];

//button does not hear 'click' on logo
btnSection.addEventListener('click', function(event) {
  changeButtonColor(event);
});

startActivityBtn.addEventListener('click', startActivity);

// anonymous function contains conditional
// have var isMinuteNumber assigned to isNumber(minutes) and have var assigned to isNumber(seconds)
// if accomplishInput does not have value, remove hidden from warning
// else if minutes input does not have value || var isMinuteNumber is false
// same for seconds


function changeButtonColor(event) {
  if (event.target.id === 'study-btn' && 'study-img') {
      studyBtn.classList.add('study-active');
      studyImg.src = 'assets/study-active.svg';
      currentActivity = "Study";
  } else if (event.target.id === 'meditate-btn' && 'meditate-img') {
      meditateBtn.classList.add('meditate-active');
      meditateImg.src = 'assets/meditate-active.svg';
      currentActivity = "Meditate";
  } else if (event.target.id === 'exercise-btn' && 'exercise-img') {
      exerciseBtn.classList.add('exercise-active');
      exerciseImg.src = 'assets/exercise-active.svg';
      currentActivity = "Exercise";
  }
}

// Try using number.isInteger
// or isNaN
// minutesInput.value
// Ask Evan

function checkInputValues() {
  var canActivityStart = false;
  if (!accomplishInput.value) {
    accomplishmentWarning.classList.remove('hidden');
  } else if (!minutesInput.value) {
    timeWarning.classList.remove('hidden');
  } else if (!secondsInput.value) {
    timeWarning.classList.remove('hidden');
  } else {
    canActivityStart = true;
  }
  return canActivityStart;
}


function startActivity() {
  var activityCategory = currentActivity;
  var canActivityStart = checkInputValues();
  if (canActivityStart) {
    currentActivity = new Activity(activityCategory, 'description', 5, 30);
    savedActivities.push(currentActivity);
    console.log(currentActivity);
    console.log(savedActivities);
  }
}
