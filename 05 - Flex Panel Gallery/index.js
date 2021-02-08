const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  panels.forEach(elem => {
    if (this !== elem) {
      elem.classList.remove('open')
    }
  })
  this.classList.toggle('open');
}

function toggleActive(e) {
  if(e.propertyName.includes('flex')) {
  this.classList.toggle('open-active');
  }
}

panels.forEach(elem => elem.addEventListener('click',  toggleOpen));
panels.forEach(elem => elem.addEventListener('transitionend',  toggleActive));