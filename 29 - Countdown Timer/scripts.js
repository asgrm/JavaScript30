let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const btns = document.querySelectorAll('[data-time]');


function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000; 
  displayTimeLeft(seconds);
  displayEndLeft(then);

  countdown = setInterval(() => {
    let secLeft = Math.round((then - Date.now()) / 1000);
    if (secLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secLeft);
  }, 1000)
}

function displayTimeLeft(seconds) {
  let remainderSeconds = seconds;
  const hours = Math.floor(seconds / 3600);
  remainderSeconds = remainderSeconds % 3600;
  const minutes = Math.floor(remainderSeconds / 60);
  remainderSeconds = remainderSeconds % 60;
  const display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  
  document.title = display;
  timerDisplay.textContent = display;
  
}

function displayEndLeft(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  const seconds = end.getSeconds();
  endTime.textContent = `Be back at ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
  const seconds = +this.dataset.time;
  timer(seconds);
}

btns.forEach(btn => btn.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
