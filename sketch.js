var cat,catMoving;
var mouse;

function preload() {
    //load the images here
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
   cat = createSprite(600,600,50,50);
   cat . shapeColor= "blue";

   mouse = createSprite(200,600,35,35);
   mouse . shapeColor= "blue";

}

function draw() {

    background(190);
    //Write condition here to evalute if tom and jerry collide
    cat.x = mouseX;
    cat.y = mouseY;

drawSprites();
myIsTouching();
}

function keyPressed(){

  //For moving and changing animation write code here

  

}

function myIsTouching()
{
 if(cat.x-mouse.x<= cat.width/2 + mouse.width/2 && cat.x-mouse.x >= -(cat.width/2 + mouse.width/2
    ) && cat.y-mouse.y<= cat.height/2 + mouse.height/2
  && cat.y-mouse.y>=-(cat.height/2 + mouse.height/2)
  ){

  cat. shapeColor= "red"
 mouse. shapeColor= "red"
 }else{
  cat. shapeColor= "blue"
  mouse. shapeColor= "blue"
 }

}
