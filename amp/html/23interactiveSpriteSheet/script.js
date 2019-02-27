const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

let ss = new Image();
ss.src = "img/trump_run.png";

//context.drawImage(src, dx, dy, dw, dh, x, y, w, h);
//Geholpen door Alex

let currentTime, startTime, dt;
let frameRate = 10;
let counter = 0;
let dx = 0, dy = 0, dw, dh;

let player = {};
player.vel = new Vector2d(0, 0);
player.pos = new Vector2d(0, 0);
player.acc = new Vector2d(0, 0);

let speed = 3;

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(update);

  currentTime = new Date();
  dt = currentTime - startTime;

  if(dt > 1000/frameRate) {
    startTime = new Date();

    if(player.vel.dx > 0) {
      //Right
      dy = 1;
      dx = counter % 6 * 100;
    } else if(player.vel.dx < 0) {
      //Left
      dy = 3;
      dx = counter % 6 * 100;
    } else if(player.vel.dy < 0) {
      //Up
      dy = 2;
      dx = counter % 6 * 100;
    } else if(player.vel.dy > 0) {
      //Down
      dy = 0;
      dx = counter % 6 * 100;
    } else if(player.vel.dx == 0) {
      //Idle
      dx = 0;
    }

    if(counter > 5) {
      counter = 1;
    } else {
      counter++;
    }
   }

   context.drawImage(ss, dx, dy * 100, 100, 100, player.pos.dx, player.pos.dy, 100, 100);
   player.pos.dx += player.vel.dx;
   player.pos.dy += player.vel.dy;
}

function setup() {
  startTime = new Date();
  update();
}

setup();

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  // console.log(e.code);
  switch(e.code) {
      case "ArrowRight": player.vel.dx=speed; break;
      case "ArrowLeft": player.vel.dx=-speed; break;
      case "ArrowUp": player.vel.dy=-speed; break;
      case "ArrowDown": player.vel.dy=speed; break;
  }
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  // console.log(e.code);
  player.vel.dx = 0;
  player.vel.dy = 0;
});