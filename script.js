'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// to select input data
// document.querySelector('.guess').value; // value is a selector for data that gets inputed

// accessing Class with .name (. = class)
// accessing ID with #name (# = ID)

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input data
  if (!guess) {
    // document.querySelector('.message').textContent = ' NO NUMBER ';
    displayMessage(' NO NUMBER ');

    // When a player wins
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct NUMBER ');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When the guess number is wrong //refractured
  } else if (guess !== number) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > number ? 'The number is too high!' : 'The number is too low!'; // ternary operator

      displayMessage(
        guess > number ? 'The number is too high!' : 'The number is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the Game!';
      displayMessage('You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When the guess number is higher than secret number
  //   else if (guess > number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'The number is too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the Game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // When the guess number is lower than secret number
  //   } else if (guess < number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'The number is too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the Game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//Coding Challenge
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('start guesssing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

// Refractoring - The Dry Principle. Restructuring the code without changing how it works. Removing unnecessary repeated code.
