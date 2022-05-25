
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var ground_options = {
		isStatic: true
	}

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ground = Bodies.rectangle(450,790,900,50,ground_options)
	World.add(world,ground);


	ball = Bodies.circle(200,100,30,ball_options);
	World.add(world,ball);


}


function draw() {
  rectMode(CENTER);
  background(51);
  Engine.update(engine);

  rect(ground.position.x,ball.position.y,900,50);
  ellipse(ball.position.x,ball.position.y,30);

  

  drawSprites();
 
}



