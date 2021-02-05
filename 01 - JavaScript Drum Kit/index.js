const keys = Array.from(document.querySelectorAll(".key"));
const sounds = Array.from(document.querySelectorAll("audio[data-key]"));

function playSoundAndAddKeyAnimation({which}){
  const key = keys.find(elem => elem.dataset.key == which);
 
  if(!key) return;   
  const sound = sounds.find(elem => elem.dataset.key == which);
  sound.currentTime = 0;
  sound.play();
  key.classList.add('playing');
}

function removeKeyAnimation (e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


keys.forEach(elem => elem.addEventListener('transitionend', removeKeyAnimation));
window.addEventListener('keydown', playSoundAndAddKeyAnimation);




