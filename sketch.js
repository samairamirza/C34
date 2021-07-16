const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1;
var ball;
var chain;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,300,80,80);
    box2 = new Box(400,200,80,80);
    box3 = new Box(480,200,80,80);
    box4 = new Box(480,300,80,80);
    box5 = new Box(440,50,80,80);
    ground = new Ground(400,height,800,20)
    
    ball = Bodies.circle(200,200,40)
    World.add(world,ball)
    
    chain = new SlingShot(ball.body,{x:200, y:20})
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
  //  console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    

    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,40,40)

    chain.display();
}