
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1=new Dustbin (400,650,100,10);
box2= new Dustbin (350,600,10,100);
box3= new Dustbin (450,600,10,100);
ground= new Ground(width/2,670,width,20);
paper= new Paper(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
box1.display();
box2.display();
box3.display();
ground.display();
paper.display();

  drawSprites();
 
}
function keyPressed() {
if (keyCode ===  UP_ARROW) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}



