//Create variables here
var runnerSprite; 
 var runnerImg;

function preload(){
  //load images here
  runnerImg=loadImage("images/boy.png");
}

function setup() {
  createCanvas(displayWidth*2,displayHeight*5,1000,1000);
 // runner = createSprite(50,180,20,50);
 // runner.addImage("running", runnerImg);
 // runner.scale = 0.5;
  runnerSprite=createSprite(50,180,20,50);
  runnerSprite.addImage("runnerSprite",runnerImg);
  runnerSprite.scale=0.5;
  runnerSprite.visible=true;
}

function draw() {  
  background("yellow");
if(keyIsDown(RIGHT_ARROW)){
    runner.x = runnerSprite.x+100;
}
    camera.position.x = runnerSprite.x;
    console.log(camera.position.x+" "+camera.position.y+" "+runnerSprite.x);
    camera.position.y = displayHeight/2;
  drawSprites();
  //add styles here

}