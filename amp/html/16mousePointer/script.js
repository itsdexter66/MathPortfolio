const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

let rot = 0;

let mouse = {};

document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function update() {
    // context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(255,255,255,0.1)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(update);

    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(rot);
    drawArrow(context);
    context.restore();

    rot = Math.atan2(mouse.y - canvas.height/2, mouse.x - canvas.width/2);
}

update();

function drawArrow(context){
        let shaftheight = 15;
        let shaftwidth = 100;
        let arrowheight = 30;
        let arrowwidth = 40;
        context.beginPath();
        context.fillStyle = "rgb(66, 238, 244)";
        context.moveTo(0,0);
        context.lineTo(0,-shaftheight);
        context.lineTo(shaftwidth,-shaftheight);
        context.lineTo(shaftwidth,-arrowheight);
        context.lineTo(shaftwidth+arrowwidth,0);
        context.lineTo(shaftwidth,+arrowheight);
        context.lineTo(shaftwidth,+shaftheight);
        context.lineTo(0,+shaftheight);
        context.closePath();
        context.stroke();
        context.fill();
     }
