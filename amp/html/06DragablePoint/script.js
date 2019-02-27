const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;
let balls = [];
let colors = [
    "blue",
    "red",
    "yellow"
];

for(let i = 0; i < 3; i++) {
    let temp = {};
    temp.ball = new Point(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 20, colors[i]);
    balls.push(temp);
}

function update(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    context.beginPath();
    context.lineWidth = "1";
    context.moveTo(balls[0].ball.x, balls[0].ball.y);
    context.lineTo(balls[1].ball.x, balls[1].ball.y);
    context.lineTo(balls[2].ball.x, balls[2].ball.y);
    context.closePath();
    context.stroke();
    context.fillStyle = "rgba(100, 20, 100, 0.3)";
    context.fill();

    for(let i = 0; i < balls.length; i++) {
        balls[i].ball.draw(context);
        balls[i].ball.drag();
    }

    requestAnimationFrame(update);
}

update();