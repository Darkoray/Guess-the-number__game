'use strict';

/* //* Tests
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
*/

const genSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayTxt = function (query, msg) {
  document.querySelector(query).textContent = msg;
};

const bodyBgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

let secretNumber = genSecretNumber();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //* When there's no input *
  if (!guess) {
    displayTxt('.message', '❌ No number!');
  }

  //* When guess is correct *
  else if (guess === secretNumber) {
    displayTxt('.message', '✅ Correct number!');
    displayTxt('.number', secretNumber);
    bodyBgColor('#60b347');
    numberWidth('20rem');

    if (score > highScore) {
      highScore = score;
      displayTxt('.highscore', highScore);
    }
  }

  //* When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayTxt(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      displayTxt('.score', score);
    } else {
      displayTxt('.message', '💥 You lost the game!');
      bodyBgColor('#9d2c2c');
      displayTxt('.score', 0);
    }
  }

  /* //* Got refactored
  // //* When guess is too high *
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //    displayTxt'📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('body').style.backgroundColor = '#9d2c2c';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //* When guess is too low *
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('body').style.backgroundColor = '#9d2c2c';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } */
});

/* //* Coding Challenge #1 *
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem) */

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = genSecretNumber();
  score = 20;
  displayTxt('.number', '?');
  document.querySelector('.guess').value = '';
  displayTxt('.message', 'Start guessing...');
  displayTxt('.score', score);
  numberWidth('12rem');
  bodyBgColor('#222');
});
