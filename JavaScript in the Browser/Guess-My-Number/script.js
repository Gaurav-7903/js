'use strict';

const randomNumberGenerator = range => Math.trunc(Math.random() * range) + 1;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const decrementScore = () => {
  let score = Number(document.querySelector('.score').textContent);
  score--;
  if (score) {
    document.querySelector('.score').textContent =
      Number(document.querySelector('.score').textContent) - 1;
  } else {
    document.querySelector('.score').textContent = 20;
    displayMessage('You lost the game');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    randomNumber = randomNumberGenerator(20);
    document.querySelector('.guess').value = '';
  }
};

const resetGame = () => {
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  randomNumber = randomNumberGenerator(20);
  document.querySelector('.guess').value = '';
};

const checkHighestScore = () => {
  const score = Number(document.querySelector('.score').textContent);
  if (score > Number(document.querySelector('.highScore').textContent)) {
    document.querySelector('.highScore').textContent = Number(
      document.querySelector('.score').textContent
    );
  }
};

let randomNumber = randomNumberGenerator(20);
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No Number');
  } else if (guess === randomNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    randomNumber = randomNumberGenerator(20);
    checkHighestScore();
    setTimeout(() => {
      resetGame();
    }, 5000);
  } else {
    displayMessage(guess > randomNumber ? '📉 Too High' : '📈 Too Low');
    decrementScore();
  }
});

document.querySelector('.again').addEventListener('click', resetGame);
