var btnSection = document.querySelector('.btn-section');
// Activity Btns
var studyBtn = document.querySelector('#study-btn');
var meditateBtn = document.querySelector('#meditate-btn');
var exerciseBtn = document.querySelector('#exercise-btn');
var startTimerBtn = document.querySelector('#startTimerBtn');
var timer = document.querySelector('#timer');
var logActivityBtn = document.querySelector('#logActivityBtn');

//Button Imgs
var studyImg = document.querySelector('#study-img');
var meditateImg = document.querySelector('#meditate-img');
var exerciseImg = document.querySelector('#exercise-img');

//Input Values
var accomplishmentInput = document.querySelector('#accomplishment-input');
var minutesInput = document.querySelector('#minutes-input');
var secondsInput = document.querySelector('#seconds-input');

var startActivityBtn = document.querySelector('#startActivityBtn');
var accomplishmentWarning = document.querySelector('#accomplishmentWarning');
var timeWarning = document.querySelector('#timeWarning');
var categoryWarning = document.querySelector('#categoryWarning');

var leftBox = document.querySelector('#leftBox');
var timerBox = document.querySelector('#timerBox');
var timerInputBox = document.querySelector('#timerInputBox');

// Right Box
var defaultActivityText = document.querySelector('#defaultActivityText');
var pastActivitiesBox = document.querySelector('.past-activities');

var currentActivity;
var savedActivities = [];

//button does not hear 'click' on logo
btnSection.addEventListener('click', function(event) {
  changeButtonColor(event);
});

startActivityBtn.addEventListener('click', checkInputValues);

startTimerBtn.addEventListener('click', function() {
  currentActivity.startTimer();
});

logActivityBtn.addEventListener('click', function() {
  currentActivity.saveToStorage();
});

function changeButtonColor(event) {
  if (event.target.id === 'study-btn' && 'study-img') {
      studyBtn.classList.add('study-active');
      studyImg.src = 'assets/study-active.svg';
      currentActivity = "Study";
      unselectButton();
  } else if (event.target.id === 'meditate-btn' && 'meditate-img') {
      meditateBtn.classList.add('meditate-active');
      meditateImg.src = 'assets/meditate-active.svg';
      currentActivity = "Meditate";
      unselectButton();
  } else if (event.target.id === 'exercise-btn' && 'exercise-img') {
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

function completedActivity() {
  // make confetti fall on screen
  startTimerBtn.innerText = "great job.";
  logActivityBtn.classList.remove("hidden");
}
