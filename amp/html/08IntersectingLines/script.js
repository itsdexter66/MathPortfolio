const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"blue");
let B = new Point(150,300,15,"blue");
let C = new Point(1100,400,15,"red");
let D = new Point(400,300,15,"red");

let s = new Point(0,0,10,"purple");

let l = new LinearFunction(0,0);
let m = new LinearFunction(0,0);

A.drag();
B.drag();
C.drag();
D.drag();

function update(){
    context.clearRect(0,0, canvas.width, canvas.height);

    l.letTwoPointsDefineLine(A,B);
    m.letTwoPointsDefineLine(C,D);

    l.draw(context);
    m.draw(context);

    s.x = l.interscetion(m).x;
    s.y = l.interscetion(m).y;

    A.draw(context);
    B.draw(context);
    C.draw(context);
    D.draw(context);
    s.draw(context);
    
    requestAnimationFrame(update);
}

update();