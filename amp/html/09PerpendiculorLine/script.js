const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"yellow");
let B = new Point(200,400,15,"yellow");
let C = new Point(300,300,15,"blue");

let s = new Point(0,0,10,"purple");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

A.drag();
B.drag();
C.drag();

function animate(){
    context.clearRect(0,0, canvas.width, canvas.height);
    requestAnimationFrame(animate);

    l.letTwoPointsDefineLine(A,B);
    m.slope = -1/l.slope;
    m.intercept = C.y - m.slope * C.x

    l.draw(context);
    m.draw(context);

    A.draw(context);
    B.draw(context);
    C.draw(context);

    s.draw(context);

    A.print(context,"A");
    B.print(context,"B");
    C.print(context,"C");

}

animate();