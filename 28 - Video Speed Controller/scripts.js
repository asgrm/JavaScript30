const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
let isDown = false;

function handleMove(e) {
  if (!isDown) return;
  const y = e.clientY - this.getBoundingClientRect().top;
  const percent = y / this.offsetHeight;
  const min = 0.5;
  const max = 4;
  const height = `${Math.round(percent * 100)}%`;
  const playbackRate = percent * (max - min) + min;
  bar.textContent = `${playbackRate.toFixed(2)}x`;
  bar.style.height = height;
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
speed.addEventListener('mouseleave', () => {
  isDown = false;
});

speed.addEventListener('mouseup', () => {
  isDown = false;
});
speed.addEventListener('mousedown', (e) => {
  isDown = true;
});