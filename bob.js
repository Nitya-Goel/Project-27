class bob {
    constructor(x, y,radius) {
      var options = {
          //'isStatic':true,
          'restitution':1,
          'friction':0,
          'density':0.8
      }
      
      this.radius = radius
      this.body = Bodies.circle(x, y, this.radius, options);
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("Yellow");
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  }
