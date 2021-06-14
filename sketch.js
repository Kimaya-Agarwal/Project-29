const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var ballImg;
function preload(){
  ballImg=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  ball = new Ball(10,300);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level 1:stand 2
  blockA1 = new Block(625,175,30,40);
  blockA2 = new Block(655,175,30,40);
  blockA3 = new Block(685,175,30,40);
  blockA4 = new Block(715,175,30,40);
  blockA5 = new Block(745,175,30,40);
  blockA6 = new Block(775,175,30,40);
  //level 2:stand 2
  blockA7 = new Block(655,135,30,40);
  blockA8 = new Block(685,135,30,40);
  blockA9 = new Block(715,135,30,40);
  blockA10 = new Block(745,135,30,40);
  //level 3:stand 2
  blockA11 = new Block(700,95,30,40);


  slingShot = new Slingshot(ball.body,{x:50, y:150});
}
function draw() {
  background(56,44,44); 
  
  textSize(30);
  fill("yellow");
  text("drag the ball and aim at the top!",200,50)
  
  

  ground.display();
  stand1.display();
  stand2.display();
  ball.display();
  slingShot.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("violet");
  blockA1.display();
  blockA2.display();
  blockA3.display();
  blockA4.display();
  blockA5.display();
  blockA6.display();
  fill("lightPink");
  blockA7.display();
  blockA8.display();
  blockA9.display();
  blockA10.display();
  fill("skyBlue");
  blockA11.display();

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
