const pressed = []; 
const secretcode = 'wesbos';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretcode.length - 1, pressed.length - secretcode.length);
  if (pressed.join('').includes(secretcode)) {
    console.log('!!!');
    cornify_add();
  }
  console.log(pressed);
});