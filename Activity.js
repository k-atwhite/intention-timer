class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = parseInt(minutes);
    this.seconds = parseInt(seconds);
    this.totalSeconds = (this.minutes * 60) + this.seconds;
    this.timePassed = 0;
    this.completed = false;
    this.id = Date.now();
  }

  startTimer() {
    startTimerBtn.setAttribute('disabled', true);
    var timeRemaining;
    var interval = setInterval(function() {
      if (timeRemaining === 0) {
        clearInterval(interval);
        alert("Time is up!");
        // return completedActivity();
      }
      currentActivity.timePassed += 1;
      timeRemaining = (currentActivity.totalSeconds - currentActivity.timePassed);
      timerOperation(timeRemaining);
    }, 1000);
  }

  markComplete() {
    this.completed = true;
  }

  saveToStorage() {

  }
}


// var startMinutes = minutesInput.value;
// var totalSeconds = (startMinutes * 60) + secondsInput.value; //to get total seconds
// var countdown = document.querySelector('#timer');

// function startTimer() {
//   setInterval(updateCountdown, 1000);
//   updateCountdown();
// }
//
// function updateCountdown() {
//   countdown.innerHTML = '';
//   var minutes = Math.round(totalTime / 60);
//   var seconds = totalTime % 60;
//   seconds = seconds < 10 ? '0' + seconds : seconds;
//   countdown.innerHTML = `${minutes}:${seconds}`;
//   totalTime--
// }
