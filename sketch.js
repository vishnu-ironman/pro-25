
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gry;
var trash;

var base1,base2,base3;


function setup() {
	createCanvas(1800, 600);


	engine = Engine.create();
	world = engine.world;
	
  gry = new Ground(750,550,1800,10)
	trash = new Paper(10,450,70);
	base1 = new dustBin(1220,473,200,200);
	base2 = new dust(1020,470,200,200);
    base3 = new dust(1420,473,200,200);
	
  
	
	Engine.run(engine);
  
}


function draw() {
  background("white");
  
 
 
   gry.display()
   trash.display();
   base1.display();
  
   drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
  Matter.Body.applyForce(trash.body,trash.body.position,{x:1200,y:-1200})
	}
}



