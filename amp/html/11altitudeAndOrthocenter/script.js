const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

let a = new Point(750, 700, 20, "red");
let b = new Point(1150, 700, 20, "blue");
let c = new Point(950, 400, 20, "orange");

let f = new LinearFunction(0, 0);
let h = new LinearFunction(0, 0);
let i = new LinearFunction(0, 0);

let l = new LinearFunction(0, 0);
let m = new LinearFunction(0, 0);
let k = new LinearFunction(0, 0);

let s = new Point(0, 0, 10, "white");

a.drag();
b.drag();
c.drag();

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    f.letTwoPointsDefineLine(a, b);
    h.letTwoPointsDefineLine(b, c);
    i.letTwoPointsDefineLine(c, a);

    f.draw(context);
    h.draw(context);
    i.draw(context);
    
    // l.letTwoPointsDefineLine(a, b);
    l.slope = (-1 / h.slope);
    l.intercept = a.y - l.slope * a.x;

    m.slope = (-1 / i.slope);
    m.intercept = b.y - m.slope * b.x;

    k.slope = (-1 / f.slope);
    k.intercept = c.y - k.slope * c.x;

    s.x = l.interscetion(m).x;
    s.y = l.interscetion(m).y;

    l.draw(context);
    m.draw(context);
    k.draw(context);

    a.draw(context);
    b.draw(context);
    c.draw(context);
    
    s.draw(context);

    requestAnimationFrame(update);
}

update();