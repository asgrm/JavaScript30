const timeNodes = document.querySelectorAll('[data-time]');

Array.from(timeNodes).forEach(elem => {
  const a = `${elem.textContent} ${elem.dataset.time}`;
  elem.textContent = a;
})

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

const formattedTimeString = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;

const display = document.createElement('p');
display.textContent = `Total: ${formattedTimeString}`;
document.body.append(display);
