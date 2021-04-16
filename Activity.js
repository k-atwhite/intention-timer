class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }

  startTimer() {
    var totalSeconds = (this.minutes * 60) + this.seconds; //to get total seconds
    var timer = document.querySelector('#timer');
    // this.updateTimer(totalSeconds, timer);
    setInterval(this.updateTimer(totalSeconds, timer), 1000);
  }

  updateTimer(totalSeconds, timer) {
    timer.innerHTML = '';
    var minutes = Math.round(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.innerHTML = `${minutes}:${seconds}`;
    totalSeconds--
  }

  markComplete() {

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
