const checkboxes = document.querySelectorAll('.item input[type="checkbox"]');

let lastChecked;
let inBetween;

function handleCheckbox(e) {
  if (e.shiftKey && this.checked) {

    checkboxes.forEach(elem => {
      console.log(elem);
      if (inBetween) elem.checked = true;
      if (elem === lastChecked || elem === this) {
        inBetween = !inBetween;
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach(elem => elem.addEventListener('click', handleCheckbox));