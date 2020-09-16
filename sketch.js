const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, block6, block7, block8, block9;

function setup() {
  
  createCanvas(1200,400);
  createSprite(400, 200, 50, 50);

  //level one
  box1 = new Block(330,235,30,40);
  box2 = new Block(360,235,30,40);
  box3 = new Block(390,235,30,40);
  box4 = new Block(420,235,30,40);
  box5 = new Block(450,235,30,40);
  //level two 
  box6 = new Block(360,195,30,40);
  box7 = new Block(390,195,30,40);
  box8 = new Block(420,195,30,40);
  //top
  box9 = new Block(390,155,30,40);

  polygon = new Polygon(100,100);

}

function draw() {
  background(37, 232, 225);
 Block1.display(); 
 Block2.display(); 
 Block3.display(); 
 Block4.display(); 
 Block5.display(); 
 Block6.display(); 
 Block7.display(); 
 Block8.display(); 
 Block9.display(); 

 polygon.display();
  drawSprites();
}