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
    defaultActivityText.classList.add('hidden');
    pastActivitiesBox.innerHTML += `
      <article class="logged-activity" id="${this.id}">
        <div class="${this.category}-category-color activity-line"></div>
        <div>
          <h4>${this.category}</h4>
          <p class="time-description">${this.minutes} MIN ${this.seconds} SECONDS</p>
          <p>${this.description}</p>
        </div>
      </article>
      `
  }
}
