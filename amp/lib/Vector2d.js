let mouse = [0,0];

class Vector2d
{
    constructor(dx,dy)
    {
        this.dx = dx;
        this.dy = dy;
    }

    add(vector)
    {
        this.dx += vector.dx;
        this.dy += vector.dy;
    }

    get magnitude()
    {
        return Math.sqrt(this.dx*this.dx+this.dy*this.dy);
    }

    set magnitude(mag)
    {
        console.log("Set Magnitude to: " + mag);
        let tempAngle = this.angle;

        this.dy = mag * Math.sin(tempAngle);
        this.dx = mag * Math.cos(tempAngle);
    }


    set angle(setAngle)
    {

        let tempMag = this.magnitude;

        this.dy = tempMag * Math.sin(setAngle);
        this.dx = tempMag * Math.cos(setAngle);
    }

    get angle()
    {
        return Math.atan2(this.dy,this.dx);
    }

    differenceVector(a,b)
    {
        this.dx = a.dx - b.dx;
        this.dy = a.dy - b.dy;
    }


    DrawArrow(_x,_y)
    {
        var arrow = new draw_arrow(100,100,this.magnitude,0,5);

        var dir = Math.atan2(this.dy,this.dx);

        arrow.update_pos(_x,_y);
        arrow.draw(context,dir);
    }
}

window.addEventListener("mousemove", function (ev)
{
    mouse[0] = ev.clientX;
    mouse[1] = ev.clientY;
});



/*
DrawArrow(_x,_y,_dir)
    {
        var img = Arrow;

        var dx = mouse[0] - _x;
        var dy = mouse[1] - _y;

        var angle = Math.atan2(dy, dx);

        console.log(_dir);
        context.save();
        context.translate(_x,_y);
        context.rotate(_dir);
        context.drawImage(img,-0.05*img.width,-0.5*img.height);
        context.restore();
    }

 */
