const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const btnClear = document.querySelector('#btn-clear')
const pickers = [...document.querySelectorAll('.color-pickers')]

ctx.fillStyle='red';
function draw(x, y){
  var circle = new Path2D();
  circle.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill(circle);
}

let  isMouseDown = false;
canvas.addEventListener('mousedown', (e)=>{
  isMouseDown = true;
})
canvas.addEventListener('mouseup', (e)=>{
  isMouseDown = false;
})
canvas.addEventListener('mousemove', (e)=>{
  if(!isMouseDown){
    return
  }
  const {clientX, clientY} = e;
  const react = canvas.getBoundingClientRect();
  draw(clientX - react.left, clientY - react.top);
})
pickers.forEach(picker => {
  picker.addEventListener('click', (e) => {
    ctx.fillStyle = e.target.style.background;
  })
})
btnClear.addEventListener('click', (e)=>{
  ctx.clearRect(0, 0, 600, 600);
})