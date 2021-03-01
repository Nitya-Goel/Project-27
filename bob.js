class bob {
    constructor(x, y,radius) {
      var options = {
          //'isStatic':true,
          'restitution':1,
          'friction':0,
          'density':0.8
      }
      
      this.r = radius
      this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("Yellow");
      ellipse(0,0, this.r,this.r);
      pop();
    }
  }
