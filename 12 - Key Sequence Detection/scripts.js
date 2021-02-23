const pressed = []; 
const secretcode = 'confetti';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretcode.length - 1, pressed.length - secretcode.length);
  if (pressed.join('').includes(secretcode)) {
    confetti.start()
    setTimeout(() => confetti.stop(), 2000);
    
  }
  console.log(pressed);
});