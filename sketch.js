var mario,marioImg,backgroundImg;

var invisibleGround,mario_collided;
var bg;

var brickImg;

var brick;
function preload(){
  
  marioImg=loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png");
  backgroundImg=loadImage("bg.png");
  ground2img=loadImage("ground2.png")
 
  brickImg=loadImage("brick.png");
  mario_collided=loadAnimation("collided.png")
  
  
}
function setup(){
  createCanvas(600,300);
  
  
  
  
  
  bg=createSprite(300,290);
  bg.addImage("bg",ground2img);
  bg.scale=1;
 
  
  mario=createSprite(50,250,20,20);
  mario.addAnimation("mario",marioImg);
  mario.addAnimation("collision",mario_collided)
  mario.scale=2; 
  
  
  
  invisibleGround=createSprite(50,260,600,10)
  invisibleGround.visible=false;
  
  mario.setCollider("rectangle",0,0,20,mario.height);
 // mario.debug=true;
  
 bricks();
  
}
function draw(){
  
 
  background(backgroundImg);
  
    
     bg.velocityX=-4;
    
  if(bg.x<300){
    bg.x=bg.width/2;
    
  }
  mario.changeAnimation("mario",marioImg);
    
      
    console.log(mario.y);

    if(keyDown("space")&&mario.y>215){
      mario.velocityY=-16;
      
    } 
    mario.velocityY=mario.velocityY+0.8;
    
    
  
  
  
  
    
    
    
    mario.collide(invisibleGround);
    drawSprites();

    
   
}


function bricks(){
if(frameCount%30===0){        
brick=createSprite(500,Math.round(random(60,100)));
    brick.velocityX=-4;
     brick.lifetime=180;
     brick.addImage("brick",brickImg);
     brick.depth=mario.depth;
     mario.depth=mario.depth+1;
     
   }
}
