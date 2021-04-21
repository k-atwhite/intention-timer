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
        currentActivity.markComplete();
        return completedActivity();
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
    var stringCurrentActivity = JSON.stringify(this) // Pass this in below as newData param...play with this
    localStorage.setItem(this.id, stringCurrentActivity); // dynamic key?...because each item that is saved needs to be different
    savedActivities.push(stringCurrentActivity);
  }
}
