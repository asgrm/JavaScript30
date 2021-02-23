const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const highScoreBoard = document.querySelector('.hidhScore');
const moles = document.querySelectorAll('.mole');
const startBtn = document.querySelector('.startBtn');
let lastHole;
let timeUp = false;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;

highScoreBoard.textContent = highScore;

function randomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  startBtn.classList.add('hiden');
  peep();
  setTimeout(() => {
    timeUp = true;
  }, 10000);
  setTimeout(() => {
    startBtn.classList.remove('hiden');
  }, 11000);
}

function bonk(e) {
  if(!e.isTrusted) return;
  score++;
  if (score > highScore) {
    localStorage.setItem('highScore', score);
    highScoreBoard.textContent = score;
  }
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

startBtn.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', bonk));