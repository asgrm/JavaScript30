const nav = document.querySelector('#main');
const header = document.querySelector('header');
const topOfNav = nav.offsetTop;
const sliderImages = document.querySelectorAll('.slide-in');

function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

function checkSlide () {
  sliderImages.forEach(slide => {
    const slideInAt = (window.scrollY + window.innerHeight - nav.offsetHeight - header.offsetHeight) - (slide.height / 2);
    const slideBottom = slide.offsetTop + slide.height;
    const isHalfShown = slideInAt > slide.offsetTop;
    const isNotScrollPassed = window.scrollY < (slideBottom + nav.offsetHeight + header.offsetHeight);
    if (isHalfShown && isNotScrollPassed) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  })
}

function debounce(f, ms=50) {
  let isCooldown = false;
  return function() {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}

window.addEventListener('scroll', fixNav);
window.addEventListener('scroll', debounce(checkSlide));
