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
  loadActivityCard();
});

function changeButtonColor(event) {
  if (event.target.id === 'study-btn' && 'study-img') {
      addButtonVisuals(studyBtn, studyImg, 'study');
      currentActivity = "Study";
  } else if (event.target.id === 'meditate-btn' && 'meditate-img') {
      addButtonVisuals(meditateBtn, meditateImg, 'meditate');
      currentActivity = "Meditate";
  } else if (event.target.id === 'exercise-btn' && 'exercise-img') {
      addButtonVisuals(exerciseBtn, exerciseImg, 'exercise');
      currentActivity = "Exercise";
  }
  unselectButton();
}

function addButtonVisuals(button, img, btnKeyword) {
  button.classList.add(`${btnKeyword}-active`);
  img.src = `assets/${btnKeyword}-active.svg`;
}

function removeButtonVisuals(button, img, btnKeyword) {
  button.classList.remove(`${btnKeyword}-active`);
  img.src = `assets/${btnKeyword}.svg`;
}

function unselectButton() {
  if (currentActivity === "Study") {
    removeButtonVisuals(meditateBtn, meditateImg, 'meditate');
    removeButtonVisuals(exerciseBtn, exerciseImg, 'exercise');
  } else if (currentActivity === "Meditate") {
    removeButtonVisuals(studyBtn, studyImg, 'study');
    removeButtonVisuals(exerciseBtn, exerciseImg, 'exercise');
  } else {
    removeButtonVisuals(studyBtn, studyImg, 'study');
    removeButtonVisuals(meditateBtn, meditateImg, 'meditate');
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

function loadActivityCard() {
  defaultActivityText.classList.add('hidden');
  pastActivitiesBox.innerHTML += `
    <article class="logged-activity" id="${currentActivity.id}">
      <div class="${currentActivity.category}-category-color activity-line"></div>
      <div>
        <h4>${currentActivity.category}</h4>
        <p class="time-description">${this.minutes} MIN ${currentActivity.seconds} SECONDS</p>
        <p>${currentActivity.description}</p>
      </div>
    </article>
    `
}
