class Paper {
    constructor() {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.rectangle(100,620,60,60, options);
      this.width = 60;
	  this.height=60;
	  this.image=loadImage("paper.png")
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //pos.x=mouseX;
      //pos.y=mouseY;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill('white');
	  image(this.image,0, 0, this.width,this.height);
	  strokeWeight(4);
	  stroke('green')
      pop();
    }
  }