'use strict';
let score = 20,
  highScore = 0;
//Generating Random Number
let RandomNumber = Math.floor(Math.random() * 19 + 1);

function gameWon() {
  document.body.style.backgroundColor = '#4e31f8';
}
//Function to display message
function display(message) {
  document.querySelector('.message').textContent = message;
}
// Function to decrease score
function scoreDecreaser() {
  document.querySelector('#score').textContent = --score;
}

//Check Button Functionality
document.querySelector('.checkButton').addEventListener('click', function () {
  const guess = Number(document.querySelector('.number').value);
  document.querySelector('.number').value = '';
  if (!guess) {
    document.querySelector('.message').textContent = '🙂No Number !!';
  } else if (score === 0) {
    document.querySelector('.checkButton').disabled = true;
    document.querySelector('.message').textContent = '😥 Game Over!!';
  } else if (RandomNumber > guess) {
    display(`${guess} is low`);
    scoreDecreaser();
  } else if (RandomNumber < guess) {
    display(`${guess} is high`);
    scoreDecreaser();
  } else {
    display('🎉Correct Number!');
    document.querySelector('#top-button').textContent = guess;
    gameWon();
    if (score > highScore) {
      highScore = score;
      document.querySelector('#highScore').textContent = highScore;
    }
  }
});

//Play Again Button Functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  RandomNumber = Math.floor(Math.random() * 20 + 1);
  console.log(RandomNumber);
  document.querySelector('.checkButton').disabled = false;
  display('Start Guessing.... !!');
  document.querySelector('#score').textContent = 20;
  document.querySelector('#top-button').textContent = '?';
  document.body.style.backgroundColor = 'black';
});
