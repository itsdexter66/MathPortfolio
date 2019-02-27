const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ss = new Image();
ss.src = "simplespritesheet.png";

let currentTime, startTime, dt;
let frameRate = 13;
let counter = 0;
let dx, dy, dw, dh;

function update() {
  requestAnimationFrame(update);

  currentTime = new Date();
  dt = currentTime - startTime;

  if(dt > 1000/frameRate) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    startTime = new Date();
    dx = counter % 4 * 480;
    dy = Math.floor(counter/4) * 440;

    context.drawImage(ss, dx, dy, 480, 440, (canvas.width/2)-50, (canvas.height/2)-50, 240, 220);
    console.log(counter);
    console.log(dx, dy);
    if(counter > 6) {
      counter = 0;
    } else {
      counter++;
    }
   }
}

function setup() {
  startTime = new Date();
  update();
}

setup();