const timeNodes = document.querySelectorAll('[data-time]');

const seconds = Array.from(document.querySelectorAll('[data-time]'), node => node.dataset.time)
.map(timeCode => {
  const [min, sec] = timeCode.split(':').map(parseFloat);
  return (min *60) + sec;
})
.reduce((acc, cur) => acc + cur);

let secondsLeft = seconds;
const hours = Math.floor(seconds / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, minutes, secondsLeft);