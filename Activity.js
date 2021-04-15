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

  }

  markComplete() {

  }

  saveToStorage() {

  }
}

/* Create undefineed global variable
currentActivity
THEN, instantiate a new activity class
the arguments will be 

create var savedActivities = []
*/
