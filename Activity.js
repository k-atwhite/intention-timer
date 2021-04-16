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
    var startMinutes = minutesInput.value;
    var totalTime = (startMinutes * 60) + secondsInput.value; //to get total seconds
    var timer = document.querySelector('#timer');
    console.log("Is this linked up?")
  //   setInterval(updateCountdown, 1000);
  //   updateCountdown();
  //   function updateCountdown() {
  //     // countdown.innerHTML = '';
  //     var minutes = Math.round(totalTime / 60);
  //     var seconds = totalTime % 60;
  //     seconds = seconds < 10 ? '0' + seconds : seconds;
  //     countdown.innerHTML = `${minutes}:${seconds}`;
  //
  }

  markComplete() {

  }

  saveToStorage() {

  }
}


// var startMinutes = minutesInput.value;
// var totalTime = (startMinutes * 60) + secondsInput.value; //to get total seconds
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
