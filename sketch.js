
function setup() {
  createCanvas(400,400);
var box=createSprite(200,150,13,16);

}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5;
    
  }
  if(keyIsDown( DOWN_ARROW)){
box.position.y=box.position.y-5;

  }
drawSprites();

}




