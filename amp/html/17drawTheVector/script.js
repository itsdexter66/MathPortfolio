const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 
let ball = {};

function setUp() {
    ball.pos = new Vector2d(150, 150);
    ball.vel = new Vector2d(11, 0);
    ball.acc = new Vector2d(0, 0.3);
    ball.point = new Point(ball.pos.dx, ball.pos.dy, 15, "red");

    update();
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(update);

    ball.vel.draw(context, ball.pos.dx, ball.pos.dy, 6);

    ball.vel.add(ball.acc);
    ball.pos.add(ball.vel);
    ball.point.position(ball.pos);
    ball.point.draw(context);

    if(ball.pos.dx < ball.point.r || ball.pos.dx > canvas.width - ball.point.r){
        ball.vel.dx = -ball.vel.dx;
    }

    if(ball.pos.dy > canvas.height - ball.point.r){
        ball.vel.dy = -ball.vel.dy;
        ball.pos.dy = canvas.height - ball.point.r;
    }
}

setUp();