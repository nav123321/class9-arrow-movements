var box
var box1
function setup() {

  createCanvas(800,800);
  box=createSprite(200,200,30,30)
  box1=createSprite(250,250,30,30)
}

function draw() 
{
  background("orange");
 drawSprites()
 if(keyIsDown(DOWN_ARROW)){
box.y=box.y+5
 }
 if(keyIsDown(UP_ARROW)){
  box.y=box.y-5 
 }
 if(keyIsDown(RIGHT_ARROW)){
   box.x=box.x +5
 }
 if(keyIsDown(LEFT_ARROW))
 box.x=box.x-5
}
box1.x=mouseX
//}



