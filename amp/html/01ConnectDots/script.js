const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
let myPoints = [];

function setUp(){
  for (let i = 0; i <5; i++) {
    addPoint()
  }
  update();
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);
  if(Math.random()<0.01){
      myPoints.splice(0,1);
      addPoint();
  }


  context.beginPath();
  context.strokeStyle = "black"
  context.fillStyle="red"

  context.moveTo(myPoints[0].x,myPoints[0].y);
  for (var i = 0; i < myPoints.length;   i++) {
    context.lineTo(myPoints[i].x,myPoints[i].y);
  }
  context.fill();
  context.closePath();
  context.stroke();


  for (var i = 0; i < myPoints.length; i++) {
    myPoints[i].draw(context);
    myPoints[i].print(context,i);
  }

}

setUp();

function getRandomNumber(max){
  return Math.random()*max;
}


function addPoint(){
  let point = new Point(getRandomNumber(canvas.width),getRandomNumber(canvas.height),"#" + Math.floor(getRandomNumber(255*255*255)).toString(16));
  myPoints.push(point);
}

//"#" + Math.floor(getRandomNumber(255*255*255)).toString(16)