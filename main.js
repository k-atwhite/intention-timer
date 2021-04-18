var btnSection = document.querySelector('#btnSection');
// Activity Btns
var studyBtn = document.querySelector('#studyBtn');
var meditateBtn = document.querySelector('#meditateBtn');
var exerciseBtn = document.querySelector('#exerciseBtn');
var startTimerBtn = document.querySelector('#startTimerBtn');
var timer = document.querySelector('#timer');

//Button Imgs
var studyImg = document.querySelector('#studyImg');
var meditateImg = document.querySelector('#meditateImg');
var exerciseImg = document.querySelector('#exerciseImg');
//Input Values
var accomplishmentInput = document.querySelector('#accomplishmentInput');
var minutesInput = document.querySelector('#minutesInput');
var secondsInput = document.querySelector('#secondsInput');

var startActivityBtn = document.querySelector('#startActivityBtn');
var accomplishmentWarning = document.querySelector('#accomplishmentWarning');
var timeWarning = document.querySelector('#timeWarning');
var categoryWarning = document.querySelector('#categoryWarning');

var leftBox = document.querySelector('#leftBox');
var timerBox = document.querySelector('#timerBox');
var timerInputBox = document.querySelector('#timerInputBox');

var currentActivity;
var savedActivities = [];

//button does not hear 'click' on logo
btnSection.addEventListener('click', function(event) {
  changeButtonColor(event);
});

startActivityBtn.addEventListener('click', checkInputValues);

startTimerBtn.addEventListener('click', function() {
  currentActivity.startTimer()
});

// anonymous function contains conditional
// have var isMinuteNumber assigned to isNumber(minutes) and have var assigned to isNumber(seconds)
// if accomplishmentInput does not have value, remove hidden from warning
// else if minutes input does not have value || var isMinuteNumber is false
// same for seconds


function changeButtonColor(event) {
  if (event.target.id === 'studyBtn' && 'studyImg') {
      studyBtn.classList.add('study-active');
      studyImg.src = 'assets/study-active.svg';
      currentActivity = "Study";
      unselectButton();
  } else if (event.target.id === 'meditateBtn' && 'meditateImg') {
      meditateBtn.classList.add('meditate-active');
      meditateImg.src = 'assets/meditate-active.svg';
      currentActivity = "Meditate";
      unselectButton();
  } else if (event.target.id === 'exerciseBtn' && 'exerciseImg') {
      exerciseBtn.classList.add('exercise-active');
      exerciseImg.src = 'assets/exercise-active.svg';
      currentActivity = "Exercise";
      unselectButton();
  }
}

function unselectButton() {
  if (currentActivity === "Study") {
    meditateBtn.classList.remove('meditate-active');
    meditateImg.src = 'assets/meditate.svg';
    exerciseBtn.classList.remove('exercise-active');
    exerciseImg.src = 'assets/exercise.svg';
  } else if (currentActivity === "Meditate") {
    studyBtn.classList.remove('study-active');
    studyImg.src = 'assets/study.svg';
    exerciseBtn.classList.remove('exercise-active');
    exerciseImg.src = 'assets/exercise.svg';
  } else {
    studyBtn.classList.remove('study-active');
    studyImg.src = 'assets/study.svg';
    meditateBtn.classList.remove('meditate-active');
    meditateImg.src = 'assets/meditate.svg';
  }
}

// Try using number.isInteger
// or isNaN
// minutesInput.value
// Ask Evan


function checkInputValues() {
  if (!accomplishmentInput.value) {
    accomplishmentWarning.classList.remove('hidden');
  } else if (!minutesInput.value || isNaN(minutesInput.value)) {
    timeWarning.classList.remove('hidden');
  } else if (!secondsInput.value || isNaN(secondsInput.value)) {
    timeWarning.classList.remove('hidden');
  } else if (!currentActivity) {
    categoryWarning.classList.remove('hidden');
  } else {
    startActivity();
  }
}

function startActivity() {
  var activityCategory = currentActivity;
  currentActivity = new Activity(activityCategory, accomplishmentInput.value, minutesInput.value, secondsInput.value);
  savedActivities.push(currentActivity);
  displayTimerBox();
}

function displayTimerBox() {
  leftBox.classList.add('hidden');
  timerBox.classList.remove('hidden');
  changeTimerBorder();
  timerInputBox.insertAdjacentHTML('afterbegin', `
  <h3 class="activity-description">${currentActivity.description}</h3>
  <p class="activity-time" id="timer">${currentActivity.minutes}:${currentActivity.seconds}</p>`);
}

function changeTimerBorder() {
  if (currentActivity.category === "Study") {
    startTimerBtn.classList.add('study-active');
  } else if (currentActivity.category === "Meditate") {
    startTimerBtn.classList.add('meditate-active');
  } else if (currentActivity.category === "Exercise") {
    startTimerBtn.classList.add('exercise-active');
  }
}

function timerOperation(totalSeconds) {
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  document.getElementById('timer').innerHTML = `${minutes}:${seconds}`;
}
