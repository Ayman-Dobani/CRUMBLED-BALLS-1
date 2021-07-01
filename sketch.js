var line1;
var line2;
var line3;
var options={
     isStatic:false,
     restitution:0.3,
	 friction:0.5,
	 density:1.2

}
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


	Engine.run(engine);

   
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  line1=createSprite(width/2,height-50,200,20);
	line1.shapecolor=color("red");
	line2=createSprite(510,610,20,100);
	line2=shapeColor=color("red");
	line3=createSprite(310,610,20,100);
	line3=shapeColor=color("red");

	drawSprites();
}
 





