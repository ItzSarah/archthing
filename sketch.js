const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg, towerImg
var tower, cannon


function preload() {
  backgroundImg = loadImage("assets/background.gif")
  towerImg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
 
  ground=new Ground(600,height-1,width,1)
  tower=new Tower(160,350,160,310)
  cannon=new Cannon(180,110,130,100,15)
}

function draw() {
  background(189);
  image(backgroundImg,0,0,width,height)
  Engine.update(engine);
 
  ground.display()
  tower.display()
  cannon.display()
}
