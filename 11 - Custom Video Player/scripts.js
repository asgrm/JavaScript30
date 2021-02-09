const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.player__fullscreen');
const iconFull = player.querySelector('.icon-full');
const iconShrink = player.querySelector('.icon-shrink');

let mousedown = false;
let isFullScreen = false;

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateBtn() {
  toggle.textContent = this.paused ? '►' : '❚❚';
}

function skip() {
  video.currentTime += +this.dataset.skip;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style['flex-basis'] = `${percent}%`;
}

function scrub(e) {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

function handleFullscreen () {

  if (!isFullScreen) {
    iconShrink.style.display = "inline";
    iconFull.style.display = "none"
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
      player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen();
    } else if (player.msRequestFullscreen) {
      player.msRequestFullscreen();
    }
  } else {
    iconShrink.style.display = "none";
    iconFull.style.display = "inline";
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (player.mozCancelFullScreen) {
      player.mozCancelFullScreen();
    } else if (player.msCancelFullScreen) {
      player.msCancelFullScreen();
    }
  }
  
  isFullScreen = !isFullScreen;

}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(elem => elem.addEventListener('click', skip));
ranges.forEach(elem => elem.addEventListener('change', handleRangeUpdate));


progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener("click", handleFullscreen);