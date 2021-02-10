function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderIamges = document.querySelectorAll('.slide-in');

function checkSlide () {
  sliderIamges.forEach(slide => {
    const slideInAt = (window.scrollY + window.innerHeight) - (slide.height / 4);
    const slideBottom = slide.offsetTop + slide.height;
    const isHalfShown = slideInAt > slide.offsetTop;
    const isNotScrollPassed = window.scrollY < slideBottom;
    if (isHalfShown && isNotScrollPassed) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }

  })
}

window.addEventListener('scroll', debounce(checkSlide));