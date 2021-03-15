var jerry, mouse1, mouse2, mouse3,mouse4, tom, cat1, cat2, cat3, cat4;
var bg,bgImg;

function preload() {
    //load the images here
    mouse1 = loadImage("images/mouse1.png");
    mouse2 = loadImage("images/mouse2.png");
    mouse3 = loadImage("images/mouse4.png");
    cat1 = loadImage("images/cat1.png");
    cat2 = loadImage("images/cat2.png");
    cat3 = loadImage("images/cat4.png");
    bgImg = loadImage("images/garden.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,50,50);
    bg.addImage(bgImg);

    jerry = createSprite(300,700,10,10);
    jerry.addImage(mouse1);
    jerry.scale = 0.1;

    tom = createSprite(700,680,10,10);
    tom.addImage(cat1);
    tom.scale = 0.15;


}

function draw() {

    background(255);

    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addImage(cat3);
        tom.changeImage(cat3);
        jerry.addImage(mouse3);
        jerry.changeImage(mouse3);
    }  
      
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = - 4;
    tom.addImage(cat2);
    tom.changeImage(cat2);
    
    jerry.addImage(mouse2);
    jerry.frameDelay = 25;
    jerry.changeImage(mouse2);
  }
  

}