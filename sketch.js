const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var ball;
var ball2;



function setup() {
  createCanvas(400,400);


  engine = Engine.create();
  world = engine.world;

  var G_Options=  {
    isStatic : true
  }
  
  var B_Options = {

    restitution : 1
  }

  ball = Bodies.circle(200,200,20,B_Options);
  World.add(world,ball);

  ground= Bodies.rectangle(200,380,400,20,G_Options);
  World.add(world,ground);

  ball2 = Bodies.circle(250,100,20,B_Options);
  World.add(world,ball2);


  console.log(ground);
  
}

function draw() {
  background(0); 

  Engine.update(engine);

  fill("lightblue")

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  fill("orange")

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  fill("yellow")
  ellipse(ball2.position.x,ball2.position.y,30,20);

  
}