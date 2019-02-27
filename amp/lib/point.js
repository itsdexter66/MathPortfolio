class Point {
  constructor(x,y,r,c)
  {
    this.r = r;
    this.x = x;
    this.y = y;
    this.c = c;
  }

  draw(context, l)
  {

        context.beginPath();

        context.fillStyle= this.c;

        context.arc(this.x,this.y,this.r,0,2*Math.PI);

        context.lineWidth=l;

        context.stroke();

        context.fill();

        context.closePath();

        //Font
  }

  drawNumber(number)
  {
    context.beginPath();

    context.fillStyle="black";

    context.font = "20px Arial";

    context.fillText(number,this.x - 5,this.y - 15);

    context.fill();

    context.closePath();
  }

  position(pos)
  {
    this.x = pos.dx;
    this.y = pos.dy;
  }

  distanceTOPx(x)
  {
    var x = this.x - x;
    return x;
  }

  distanceTOPy(y)
  {
    var y = this.y - y;
    return y;
  }

  distanceTOP(P)
  {
    let dx = this.x - P.x;
    let dy = this.y - P.y;
    return Math.sqrt(dx*dx + dy*dy);
  }

  drag()
  {
    let mousePosition = {};
    var dragstatus = false;
    document.addEventListener('mousedown', (evt)=>{
      mousePosition.x = evt.clientX;
      mousePosition.y = evt.clientY;
      if (this.distanceTOP(mousePosition)<this.r) {
        dragstatus = true;
      } else {
        dragstatus = false;
      }
    });

    document.addEventListener('mousemove', (evt)=>{
      if (dragstatus == true) {
        this.x = evt.clientX;
        this.y = evt.clientY;
      }
    });

    document.addEventListener('mouseup', (evt)=>{
      dragstatus = false;
    })
  }

  distance(index)
  {

    var old = index -1;

    context.beginPath();

    context.lineWidth=0.5;

    if (index > 0) {
          context.moveTo(points[old].pos.dx,points[old].pos.dy);
    }

    context.lineTo(this.x,this.y);

    context.lineTo(points[0].pos.dx,points[0].pos.dy);

    context.stroke();

    context.closePath();

  }

}
