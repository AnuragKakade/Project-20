var car,wall;


function setup() {
  createCanvas(800,400);
  car= createSprite(100,200,50,50)
  car.velocityX=4
  wall=createSprite(400, 200, 40, 100);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}