const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;
ctx.globalCompositeOperation = 'hue';

let hue = 0;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw (e) {
  if(!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if(hue >359) hue = 0;

  if (ctx.lineWidth >= 50 || ctx.lineWidth <=1){
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
  
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  [lastX, lastY] = [e.offsetX, e.offsetY];
  isDrawing = true;
});
canvas.addEventListener('mouseup',  () => isDrawing = false);
canvas.addEventListener('mouseout',  () => isDrawing = false);

