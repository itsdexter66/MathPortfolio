const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

let backplate = new Image();
backplate.src = "face.png";

let hourhand = new Image();
hourhand.src = "hand.png";
hourhand.rot = 0;

let minutehand = new Image();
minutehand.src = "hand2.png";
minutehand.rot = 0;

let secondhand = new Image();
secondhand.src = "hand3.png"
secondhand.rot = 0;

backplate.addEventListener('load', () => {
    update();
});

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(update);

    let time = new Date();

    context.drawImage(backplate, canvas.width/2 - backplate.width/2, canvas.height/2 - backplate.height/2);

    context.save();
    context.translate(canvas.width/2, (canvas.height-hourhand.height)/2 + 12);
    context.rotate(hourhand.rot);
    context.drawImage(hourhand, -0.05*hourhand.width, -0.5*hourhand.height);
    context.restore();

    context.save();
    context.translate(canvas.width/2, (canvas.height-minutehand.height)/2 + 12);
    context.rotate(minutehand.rot);
    context.drawImage(minutehand, -0.05*minutehand.width, -0.5*minutehand.height);
    context.restore();

    context.save();
    context.translate(canvas.width/2, (canvas.height-secondhand.height)/2 + 12);
    context.rotate(secondhand.rot);
    context.drawImage(secondhand, -0.05*secondhand.width, -0.5*secondhand.height);
    context.restore();

    secondhand.rot = (time.getSeconds() * Math.PI * 2 / 60) - Math.PI/2;
    minutehand.rot = (time.getMinutes() * Math.PI * 2 / 60) - Math.PI/2;
    hourhand.rot = (time.getSeconds() * Math.PI * 2 / 43200) - Math.PI/2;
    hourhand.rot = (time.getHours() * Math.PI / 6) + (time.getMinutes() * Math.PI / (6 * 60)) + (time.getSeconds() * Math.PI / (360 * 60)) - Math.PI/2;
}