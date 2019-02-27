const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

let background = new Image();
background.src = "sideview.jpg";

let frontWheel = new Image();
frontWheel.rot = 0;
frontWheel.src = "wheel.png";
frontWheel.pos = 215;
frontWheel.vel = 10;

let backWheel = new Image();
backWheel.rot = 0;
backWheel.src = "wheel.png";
backWheel.pos = 755;
backWheel.vel = 10;

let car = new Image();
car.pos = 0;
car.src = "auto.png";

background.addEventListener('load', () => {
    update();
});

window.addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(e.code);
    switch(e.code) {
        case "ArrowRight": frontWheel.vel++; backWheel.vel++; break;
        case "ArrowLeft": frontWheel.vel--; backWheel.vel--; break;
    }
});

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(update);
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    context.save();
    context.translate(car.pos, 390);
    context.drawImage(car, 0, 0);
    context.restore();

    context.save();
    context.translate(frontWheel.pos, 600);
    context.rotate(frontWheel.rot);
    context.drawImage(frontWheel, -0.5*frontWheel.width, -0.5*frontWheel.height);
    context.restore();

    context.save();
    context.translate(backWheel.pos, 600);
    context.rotate(backWheel.rot);
    context.drawImage(backWheel, -0.5*backWheel.width, -0.5*backWheel.height);
    context.restore();

    car.pos += frontWheel.vel;

    frontWheel.rot += frontWheel.vel / 80;
    frontWheel.pos += frontWheel.vel;

    backWheel.rot += backWheel.vel / 80;
    backWheel.pos += backWheel.vel;

    if(frontWheel.pos > canvas.width + car.width && frontWheel.vel > 0) {
        frontWheel.pos = 0 - car.width;
    }
    if(frontWheel.pos < 0 - car.width && frontWheel.vel < 0) {
        frontWheel.pos = canvas.width;
    }

    if(backWheel.pos > canvas.width + car.width && backWheel.vel > 0) {
        backWheel.pos = 0 - car.width;
    }
    if(backWheel.pos < 0 - car.width && backWheel.vel < 0) {
        backWheel.pos = canvas.width;
    }

    if(car.pos > canvas.width + car.width && frontWheel.vel > 0) {
        car.pos = 0 - car.width;
    }
    if(car.pos < 0 - car.width && frontWheel.vel < 0) {
        car.pos = canvas.width;
    }
}