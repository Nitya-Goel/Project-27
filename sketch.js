
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roofObject;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    roofObject=new roof(100, 100, 20, 20);
	bob1= new bob(320, 400, 20);
	bob2= new bob(360, 400, 20);
	bob3= new bob(400, 400, 20);
	bob4= new bob(440, 400, 20);
	bob5= new bob(480, 400, 20);
	rope1= new Rope(bob1.body, roofObject.body, -80, 0);
	rope2= new Rope(bob2.body, roofObject.body, -40, 0);
	rope3= new Rope(bob3.body, roofObject.body, 0, 0);
	rope4= new Rope(bob4.body, roofObject.body, 40, 0);	
	rope5= new Rope(bob5.body, roofObject.body, 80, 0);	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
	
 roofObject.display(); 
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-25, y:-45})
	}
}



