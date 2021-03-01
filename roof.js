class roof
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		
		this.width=width;
		this.height=height;
		this.body=Bodies.rectangle(x, y, this.width, this.height, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push();
			//translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("pink")
			rect(groundPos.x, groundPos.y ,this.width, this.height);
			pop();
			
	}

}
