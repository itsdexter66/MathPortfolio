const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,B,l,m,player;

function setUp(){
    A = new Point(100,100,20,"yellow");
    B = new Point(150,100,20,"blue")
    l = new LinearFunction(1,1);
    m = new LinearFunction(1,1);

    player = {};
    player.position = new Vector2d(400,400);
    player.velocity = new Vector2d(3,4);
    player.Point = new Point(player.position.dx, player.position.dy, 30, "red");

    animate();
}

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);

    A.draw(context);
    B.draw(context);
    l.draw(context);
    
    player.position.add(player.velocity);

    player.Point.position(player.position);
    player.Point.draw(context)

    if(player.position.dx < player.Point.r || player.position.dx > canvas.width - player.Point.r){
        player.velocity.dx = -player.velocity.dx;
    }

    if(player.position.dy < player.Point.r || player.position.dy > canvas.height - player.Point.r){
        player.velocity.dy = -player.velocity.dy;
    }

}

setUp()