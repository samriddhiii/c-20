
var fixedRect, MovingRect;
var rect1, rect2;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 70);
  fixedRect.shapeColor = "Yellow"

  MovingRect = createSprite(400, 200, 50, 50);
  MovingRect.shapeColor = "Blue"

  rect1= createSprite(100,100,50,50);
  rect1.shapeColor= "pink";
  rect1.velocityX=2;

  rect2= createSprite(400,100,50,50);
  rect2.shapeColor= "purple";

}

function draw() {
  background(220,255,255);  
  drawSprites();

  MovingRect.x = mouseX;
  MovingRect.y = mouseY;
 
  console.log (" Distance  " + (MovingRect.x-fixedRect.x))

  console.log (" Width  " + (MovingRect.width+fixedRect.width)/2)

if ((MovingRect.x-fixedRect.x)<=(MovingRect.width+fixedRect.width)/2 
    && (fixedRect.x- MovingRect.x)<= (MovingRect.width+fixedRect.width)/2
    && (MovingRect.y-fixedRect.y)<=(MovingRect.height+fixedRect.height)/2
    && (fixedRect.y- MovingRect.y)<=(MovingRect.height+fixedRect.height)/2)
{
  fixedRect.shapeColor = "Red"
}
else
{
  fixedRect.shapeColor = "Yellow"
}

if(rect1.x-rect2.x <= (rect1.width + rect2.width)/2 
    &&rect2.x-rect1.x <= (rect1.width + rect2.width)/2 ){
  rect1.velocityX= -1 * rect1.velocityX;
}

}