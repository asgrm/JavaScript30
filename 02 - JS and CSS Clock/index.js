const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minute = now.getMinutes();
  const hours = now.getHours();
  const secondDeg = (seconds * 6);
  const minuteDeg = (minute * 6);
  const hourDeg = (hours * 30);
  
  if (seconds === 0) secondHand.classList.add('nottransition');
  if (seconds === 1) secondHand.classList.remove('nottransition');

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  console.log(hours, minute, seconds);
}
setInterval(setDate, 1000);


