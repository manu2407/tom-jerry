var tom , cat1,cat2,cat3 , garden , garden_Img , jerry , jerry1 , jerry2 ,jerry3 ;
function preload() {
    //load the images here
cat1 = loadAnimation("images/cat1.png ");
cat2 =loadAnimation("images/cat2.png" , "images/cat3.png");
garden_Img=loadImage("images/garden.png");
jerry1 = loadAnimation("images/mouse1.png");
jerry2 =loadAnimation("images/mouse2.png" , "images/mouse3.png" );
cat3 = loadAnimation("images/cat4.png");
jerry3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here



tom  = createSprite(850,500,20,20);
tom.addAnimation("stand" , cat1);
tom.scale=0.15;
jerry =createSprite(200,500,20,20);
jerry.addAnimation("standing" , jerry1 );
jerry.scale=0.15;
}

function draw() {

    background(garden_Img);
    //Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x <(tom.width - jerry.width/2)) {
jerry.addAnimation("jerryLastImage" , jerry3);
jerry.changeAnimation("jerryLastImage" );
tom.addAnimation("catLastImage" , cat3);
tom.changeAnimation("catLastImage");
tom.velocityX=0;
}
    drawSprites();
    text (mouseX + ',' + mouseY ,10,45);
}
function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
  tom.velocityX=-5;
  tom.addAnimation("catRunning" , cat2);
  tom.changeAnimation("catRunning");
  jerry.addAnimation("jerry_d" , jerry2);
  jerry.changeAnimation("jerry_d");
}

}
