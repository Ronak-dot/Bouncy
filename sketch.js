const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball , ground;


function setup() {
  createCanvas(1200,800);
  engine = Engine.create()
  world = engine.world 
  var ground_option ={
    isStatic: true
  }
  ground = Bodies.rectangle(80.350,400,20,ground_option)

  World.add(world , ground)
  var options = {
    restitution: 1.8 
  }
  ball = Bodies.circle(200,100,50,options)

  World.add(world,ball)

  
 
}

function draw() {
 
  background(255,255,255);  

  Engine.update(engine);
  rectMode(CENTER)

  rect(80,350,400,20);

  ellipseMode(RADIUS);
  
  ellipse(ball.position.x, ball.position.y ,50,50 )


}