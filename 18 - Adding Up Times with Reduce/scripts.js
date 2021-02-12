const timeNodes = document.querySelectorAll('[data-time]');

const seconds = Array.from(document.querySelectorAll('[data-time]'), node => node.dataset.time)
.reduce((acc, cur) => {
  const [min, sec] = cur.split(':');
  return acc + +min * 60 + +sec;
}, 0);

let secondsLeft = seconds;
const hours = Math.floor(seconds / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, minutes, secondsLeft);