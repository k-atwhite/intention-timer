# Intention Timer

## Project Overview
Project Goals:
* Gain an understanding of how to write clean HTML and CSS to match a provided comp
* Understand how to implement client-side data persistence using localStorage and JSON
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness and SRP

Intention Timer is an application that allows a user to set goals for their health and productivity, tied to an amount of time. 
Users will select an activity category, set the amount of time they want to spend on that activity, and start the timer. 
The app will log that activity to keep track of how the user has been spending their time.


## Table of Contents
1. [Contributors](https://github.com/e-spitz/intention-timer/new/main?readme=1#contributors)
2. [How to use the app](https://github.com/e-spitz/intention-timer/new/main?readme=1#how-to-use-the-app)
3. [Technologies Used](https://github.com/e-spitz/intention-timer/new/main?readme=1#technologies-used)
4. [Future Additions](https://github.com/e-spitz/intention-timer/new/main?readme=1#future-additions)

## Contributors
* [Dean Cook](https://github.com/novaraptur)
* [Erica Spitz](https://github.com/e-spitz)
* [Shauna Myers](https://github.com/ShaunaMyers)
* [Kat White](https://github.com/k-atwhite)

## How to use the app
### [View in your browser!](https://e-spitz.github.io/intention-timer/)

https://user-images.githubusercontent.com/49215782/115474237-4b2bf500-a1fa-11eb-8577-e32b9af08c11.mp4

## Technologies Used
* HTML
* CSS
* JavaScript


## Future Additions
There are so many ways to grow this site. Several examples could be:


Option1: Expand/Collapse Reflection: 
- When timer completes but before a card is created, the user can submit a reflection on the way they spent that time. 
Then, they can click the Log Activity button to create the card. Even though there is more information about the activity, the reflection should not appear on the card immediately. 
The cards should still match the comp. The user should have a visual indicator that there is “more info” on a card. 
When the user takes the appropriate action, the card expands to show the reflection the user had submitted.
The user should also have a way to collapse the additional information/reflection.


Option 2: Favorite & Re-Do
- A user should be able to favorite or re-do an activity.
- A favorite icon should be on the card. When clicked, the icon should change its appearance to communicate it has been favorited.
- An icon to represent re-do should also be on the card. It should only be enabled when the left side of the page is displaying the New Activity form. If the re-do button is clicked, the form will populate with the data from the card that was clicked on.


Option 3: Pausing the Timer
- After the timer begins, a user should be able to pause the timer and resume an activity when they wish


Option 4: Animate the Timer
- Animate the border around the timer in a way that communicates how much time is left.
